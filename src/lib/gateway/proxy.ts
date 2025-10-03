import { NextRequest } from "next/server";
import { getTargetUrl, getProxyHeaders, getProxyBody } from "./utils";
import { SuccessResponse, ErrorResponse } from "./response";
import axios from "axios";
import { auth } from "@clerk/nextjs/server";
import { JWT_TEMPLATES } from "@/lib/constants";

export async function proxyRequest(req: NextRequest) {
  try {
    const { getToken } = await auth();

    const token = await getToken({ template: JWT_TEMPLATES.SESSION_900S });

    const targetUrl = getTargetUrl(req);
    const proxyHeaders = getProxyHeaders(req);
    const body = await getProxyBody(req);
    if (token) {
      proxyHeaders.set("Authorization", `Bearer ${token}`);
    }

    // Convert Headers object to plain object for axios
    const headersObject: Record<string, string> = {};
    proxyHeaders.forEach((value, key) => {
      headersObject[key] = value;
    });

    const response = await axios.request({
      url: targetUrl,
      method: req.method,
      headers: headersObject,
      data: body,
    });

    return SuccessResponse(response.data);
  } catch (error: unknown) {
    console.error("Proxy error:", error);

    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Pass through server's status code and error data
        const { data, status } = error.response;
        const message = data?.error?.message || data?.message || "Server error";
        const code = data?.error?.code || data?.code;
        const details = data?.error?.details || data?.details;
        return ErrorResponse(message, status, code, details);
      }
    }

    // Other errors (auth, parsing, etc.)
    const message = error instanceof Error ? error.message : "Internal server error";
    return ErrorResponse(message, 500);
  }
}

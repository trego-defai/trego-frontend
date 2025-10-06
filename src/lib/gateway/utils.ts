import { NextRequest } from "next/server";

const BASE_API_URL = process.env.BASE_API_URL;

export function getTargetUrl(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const normalizedBase = BASE_API_URL?.replace(/\/$/, "");
  return `${normalizedBase}${pathname}${search}`;
}

export function getProxyHeaders(req: NextRequest) {
  const headers = new Headers(req.headers);
  headers.delete("host");
  headers.delete("connection");

  const contentType = req.headers.get("content-type") || "";
  if (contentType.includes("multipart/form-data")) {
    headers.delete("content-type");
    headers.delete("content-length");
  }

  return headers;
}

export async function getProxyBody(req: NextRequest): Promise<BodyInit | undefined> {
  if (req.method === "GET" || req.method === "HEAD") return undefined;

  const contentType = req.headers.get("content-type") || "";

  const hasBody = req.headers.get("content-length") !== "0" && req.headers.get("content-length") !== null;

  if (!hasBody && (req.method === "DELETE" || req.method === "OPTIONS")) {
    return undefined;
  }

  if (contentType.includes("application/json")) {
    try {
      return JSON.stringify(await req.json());
    } catch (error) {
      console.log("JSON parsing failed, likely empty body:", error);
      return undefined;
    }
  } else if (contentType.includes("multipart/form-data")) {
    return req.formData();
  } else {
    return req.arrayBuffer();
  }
}

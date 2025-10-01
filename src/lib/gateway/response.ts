import { NextResponse } from "next/server";
import { ApiError, ErrorCode } from "@/types/api-response";

/**
 * Creates a successful API response with data
 * @param data - Response payload
 */
export function SuccessResponse<T>(data: T): NextResponse<T> {
  return NextResponse.json(data);
}

/**
 * Creates an error API response with message and optional code
 * @param message - Error message
 * @param status - HTTP status code (default: 500)
 * @param code - Error code from ErrorCode enum
 * @param details - Additional error details
 */
export function ErrorResponse(
  message: string,
  status = 500,
  code?: ErrorCode,
  details?: any
): NextResponse<ApiError> {
  const error: ApiError["error"] = { message };
  if (code) error.code = code;
  if (details) error.details = details;

  return NextResponse.json({ error }, { status });
}

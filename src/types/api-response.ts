export enum ErrorCode {
  // Client Errors (4xx)
  BAD_REQUEST = "BAD_REQUEST",
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
  CONFLICT = "CONFLICT",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  RATE_LIMIT = "RATE_LIMIT",

  // Server Errors (5xx)
  INTERNAL_ERROR = "INTERNAL_ERROR",
  SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
  TIMEOUT = "TIMEOUT",

  // Network Errors
  NETWORK_ERROR = "NETWORK_ERROR",
  CONNECTION_REFUSED = "CONNECTION_REFUSED",

  // Auth Errors
  TOKEN_EXPIRED = "TOKEN_EXPIRED",
  TOKEN_INVALID = "TOKEN_INVALID",
}

export interface ApiError {
  error: {
    code?: ErrorCode;
    status?: number;
    message: string;
    details?: any;
  };
}

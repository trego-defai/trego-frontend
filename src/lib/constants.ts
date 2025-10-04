export const PATH = {
  landing: "/",
  welcome: "/welcome",
  agent: "/agent",
  trade: "/trading",
  wallet: "/wallet",
} as const;

export const JWT_TEMPLATES = {
  SESSION_900S: "session_900s",
  LONG_LIVED_TESTING: "long_lived_testing_template",
} as const;
export interface ServiceConfig {
  baseUrl: string;
  apiKey: string;
  apiKeyHeader: string;
}

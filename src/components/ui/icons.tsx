import { IconProps } from "@/types/icon";

export function XIcon({ width = 24, height = 24, color = "currentColor", className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      className={className}
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function TelegramIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "w-6 h-6",
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path d="M21.426 2.337a2 2 0 0 0-2.09-.247L2.7 9.36c-1.36.56-1.34 2.5.03 3.02l4.13 1.5 2.01 6.36c.36 1.13 1.8 1.36 2.47.37l2.13-3.1 4.36 3.22c.97.72 2.36.19 2.62-.97l3.13-13.13a2 2 0 0 0-.12-1.41zM8.7 13.7l7.13-6.36c.23-.21-.05-.54-.32-.39l-8.7 5.1c-.23.13-.18.47.08.54l1.81.44zm2.13 5.13-1.47-4.66 2.97 2.2-1.5 2.46zm7.13-1.13-3.97-2.93 5.13-7.36-1.16 10.29z" />
    </svg>
  );
}

export function MenuIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "w-6 h-6",
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      fill={color}
      stroke={color}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export const HeartIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "w-6 h-6",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

export const RetweetIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "w-6 h-6",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);

export const Loader2Icon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "w-6 h-6",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 22C6.477 22 2 17.523 2 12H0C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12H22C22 17.523 17.523 22 12 22ZM2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12H20C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12H2Z" />
  </svg>
);

export const ArrowUpRightIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "w-6 h-6",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);

export const ArrowDownRightIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "w-6 h-6",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);

export const BTCIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "w-6 h-6",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);

export const ETHIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "w-6 h-6",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);

export const GoogleIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "w-6 h-6",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);

export const DashboardIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className = "",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
  </svg>
);

export const TradingIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className = "",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
  </svg>
);

export const AIAssistantIcon = ({
  width = 35,
  height = 35,
  color = "currentColor",
  className = "",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path d="M17.753 14a2.25 2.25 0 0 1-2.006 1.996L15.5 16h-7a2.25 2.25 0 0 1-2.25-2.25v-6.5A2.25 2.25 0 0 1 8.5 5h7a2.25 2.25 0 0 1 2.25 2.25V14zM8.5 6.5a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75h-7zm2.25 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm2.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM9 11.5h6v1H9v-1z" />
    <path d="M12 2.5a.75.75 0 0 1 .75.75v1h-1.5v-1A.75.75 0 0 1 12 2.5zM5.25 12a.75.75 0 0 1-.75-.75v-1h1.5v1a.75.75 0 0 1-.75.75zM18.75 12a.75.75 0 0 1-.75-.75v-1h1.5v1a.75.75 0 0 1-.75.75z" />
  </svg>
);

export const WalletIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className = "",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

export const GridIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="3" width="8" height="8" rx="2" />
    <rect x="13" y="3" width="8" height="8" rx="2" />
    <rect x="3" y="13" width="8" height="8" rx="2" />
    <rect x="13" y="13" width="8" height="8" rx="2" />
  </svg>
);

export const ArrowRightIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="0" />
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

export const BentoTradingIcon = ({
  width = 48,
  height = 48,
  color = "currentColor",
  className = "h-12 w-12",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    width={width}
    height={height}
    aria-hidden="true"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export const BentoAIIcon = ({
  width = 48,
  height = 48,
  color = "currentColor",
  className = "h-12 w-12",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    width={width}
    height={height}
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

export const BentoPortfolioIcon = ({
  width = 48,
  height = 48,
  color = "currentColor",
  className = "h-12 w-12",
  ...props
}: IconProps) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    width={width}
    height={height}
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

export const ChatBotIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className = "text-emerald-300",
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <circle cx="9" cy="10" r="1" />
    <circle cx="15" cy="10" r="1" />
    <path d="M9 14s1 1 3 1 3-1 3-1" />
  </svg>
);

export const AutomationIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className = "text-emerald-300",
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="3" width="7" height="7" rx="2" />
    <rect x="3" y="14" width="7" height="7" rx="2" />
    <rect x="14" y="14" width="7" height="7" rx="2" />
  </svg>
);

export const MarketAnalysisIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className = "text-emerald-300",
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M3 3h18v6H3z" />
    <path d="M7 13h3v8H7zM14 10h3v11h-3z" />
  </svg>
);

export const SecureIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  className = "text-emerald-300",
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M9 12l2 2 4-4" />
    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
    <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" />
    <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" />
  </svg>
);

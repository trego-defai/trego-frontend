import { IconProps } from "@/types/icon.type";

export function XIcon({
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
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
  <svg className={className} fill={color} width={width} height={height} viewBox="0 0 24 24" aria-hidden="true" {...props}>
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
  <svg className={className} fill={color} width={width} height={height} viewBox="0 0 24 24" aria-hidden="true" {...props}>
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
  <svg className={className} fill={color} width={width} height={height} viewBox="0 0 24 24" aria-hidden="true" {...props}>
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
  <svg className={className} fill={color} width={width} height={height} viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);
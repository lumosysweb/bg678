import type { SVGProps } from "react";

export type IconName =
  | "bolt"
  | "gift"
  | "shield"
  | "crown"
  | "flame"
  | "ticket"
  | "reel"
  | "fish"
  | "rocket"
  | "diamond"
  | "trophy"
  | "cards"
  | "dice"
  | "headset"
  | "calendar"
  | "check-badge"
  | "sun"
  | "users"
  | "wallet"
  | "spin"
  | "sparkle"
  | "telegram"
  | "instagram"
  | "whatsapp"
  | "youtube"
  | "discord"
  | "star"
  | "chevron-down"
  | "close"
  | "menu"
  | "arrow-up"
  | "check"
  | "download"
  | "android"
  | "qr"
  | "play"
  | "mail"
  | "phone"
  | "clock"
  | "external";

const paths: Record<IconName, JSX.Element> = {
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  gift: (
    <>
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M3 12h18M12 8v13M8 8a2.5 2.5 0 0 1 0-5c1.5 0 3 1.5 4 5-1 0-2.5 0-4 0Zm8 0a2.5 2.5 0 0 0 0-5c-1.5 0-3 1.5-4 5 1 0 2.5 0 4 0Z" />
    </>
  ),
  shield: <path d="M12 2 4 5v6c0 5.2 3.4 9.7 8 11 4.6-1.3 8-5.8 8-11V5l-8-3Zm-1.5 12.5L7 11l1.4-1.4 2.1 2.1 4.6-4.6L16.5 8.5 10.5 14.5Z" />,
  crown: <path d="M3 8l4 3 5-6 5 6 4-3-2 11H5L3 8Zm2 13h14v2H5v-2Z" />,
  flame: <path d="M12 2c1 4-4 5-4 9a4 4 0 0 0 8 0c1.5 1 2 2.8 2 4.2A6.2 6.2 0 0 1 5.8 15c0-6 4-7 6.2-13Z" />,
  ticket: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z" />
      <path d="M10 6v12" strokeDasharray="2 2" />
    </>
  ),
  reel: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="8" r="1.4" />
      <circle cx="15.5" cy="13" r="1.4" />
      <circle cx="8.5" cy="13" r="1.4" />
    </>
  ),
  fish: <path d="M3 12c3-4 8-6 12-4 2 1 4 2 6 4-2 2-4 3-6 4-4 2-9 0-12-4Zm14-1 3-3v6l-3-3ZM8 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />,
  rocket: <path d="M12 2c3 1 5.5 3.5 6 8-1 1-2 1.8-3 2.3L14 17l-2 3-2-3-1-4.7c-1-.5-2-1.3-3-2.3.5-4.5 3-7 6-8Zm-1.5 15L8 21l.5-3.5M13.5 17l2.5 4-.5-3.5" />,
  diamond: <path d="M6 3h12l4 6-10 12L2 9l4-6Zm0 6h12M9 3l-2 6 5 12 5-12-2-6" />,
  trophy: (
    <>
      <path d="M8 4h8v6a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4" />
      <path d="M12 14v4m-4 3h8" />
    </>
  ),
  cards: (
    <>
      <rect x="3" y="6" width="12" height="16" rx="2" transform="rotate(-8 3 6)" />
      <rect x="9" y="4" width="12" height="16" rx="2" />
    </>
  ),
  dice: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="8" cy="8" r="1.3" />
      <circle cx="16" cy="8" r="1.3" />
      <circle cx="8" cy="16" r="1.3" />
      <circle cx="16" cy="16" r="1.3" />
      <circle cx="12" cy="12" r="1.3" />
    </>
  ),
  headset: <path d="M4 13v-1a8 8 0 0 1 16 0v1M4 13v5a2 2 0 0 0 2 2h1v-7H5a1 1 0 0 0-1 1Zm16 0v5a2 2 0 0 1-2 2h-1v-7h2a1 1 0 0 1 1 1Zm-3 7h-2a2 2 0 0 1-2-2" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  "check-badge": <path d="M12 2 14.6 4.2 18 3.5 18.7 7 22 8.8 20.6 12 22 15.2 18.7 17 18 20.5 14.6 19.8 12 22 9.4 19.8 6 20.5 5.3 17 2 15.2 3.4 12 2 8.8 5.3 7 6 3.5 9.4 4.2 12 2Zm-1 13 5.5-5.5-1.4-1.4L11 12.2l-2.1-2.1-1.4 1.4L11 15Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 5a3.5 3.5 0 0 1 0 7M17.5 13.5a6.5 6.5 0 0 1 4 6.5" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 10h18M15 15h3" />
    </>
  ),
  spin: <path d="M12 3a9 9 0 1 1-8.5 6M3 3v6h6" />,
  sparkle: <path d="M12 2 13.8 9 21 12l-7.2 3L12 22l-1.8-7L3 12l7.2-3L12 2Z" />,
  telegram: <path d="M21 4 2.5 11.3c-1 .4-1 1.6.1 1.9L7 14.8l2 6.2c.3.9 1.4 1 2 .2l2.4-3.1 4.6 3.4c.8.6 2 .2 2.2-.8l3-15.4c.2-1-.8-1.8-1.7-1.4ZM7.7 13.9l9.6-6.4c.4-.3.8.2.4.5l-8 7.6-.3 3.5-1.7-5.2Z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" />
    </>
  ),
  whatsapp: <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm4.9 12.7c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .2-3.2-.7-2.7-1.1-4.4-3.8-4.6-4-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.6-.1l.7-.9c.2-.3.4-.2.6-.1l1.7.9c.2.1.4.2.4.4.1.2.1.8-.1 1.1Z" />,
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </>
  ),
  discord: <path d="M8 5.5c-3 .7-4.5 2.6-4.8 6.9-.2 3.1.5 5.4 1.8 6.9 1.4 1.6 3.6 1.3 3.6 1.3l.7-1.4a8 8 0 0 1-1.9-.9c.2-.1.4-.3.6-.4 3.4 1.6 7.2 1.6 10.5 0 .2.1.4.3.6.4-.6.4-1.3.7-1.9.9l.7 1.4s2.2.3 3.6-1.3c1.3-1.5 2-3.8 1.8-6.9-.3-4.3-1.8-6.2-4.8-6.9l-.5 1c1.2.3 2.2.8 3 1.5-2.6-1.3-6.7-1.3-9.3 0 .8-.7 1.8-1.2 3-1.5l-.5-1c-1 .2-2 .5-2.9 1ZM9.5 13a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Zm5 0a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Z" />,
  star: <path d="M12 2.5 15 9l7 .9-5.1 4.7 1.4 6.9L12 18l-6.3 3.5 1.4-6.9L2 9.9 9 9l3-6.5Z" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  "arrow-up": <path d="M12 19V5M5 12l7-7 7 7" />,
  check: <path d="M20 6 9 17l-5-5" />,
  download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />,
  android: <path d="M5 16V9a7 7 0 0 1 14 0v7M5 16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2M5 16v3a1 1 0 0 0 2 0v-2M17 16v3a1 1 0 0 1-2 0v-2M8 5 6.5 2.5M16 5l1.5-2.5M9 10v2M15 10v2" />,
  qr: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3v-3Zm4 4h3v3h-3v-3Zm0-4h3v0M14 21h3" />
    </>
  ),
  play: <path d="M7 4.5v15l13-7.5-13-7.5Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: <path d="M6.6 10.8a15.4 15.4 0 0 0 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.5-.4c1.1.4 2.3.6 3.6.6a1.5 1.5 0 0 1 1.5 1.5V21a1.5 1.5 0 0 1-1.5 1.5C10.5 22.5 1.5 13.5 1.5 3.5A1.5 1.5 0 0 1 3 2h3.7a1.5 1.5 0 0 1 1.5 1.5c0 1.3.2 2.5.6 3.6a1.5 1.5 0 0 1-.4 1.5L6.6 10.8Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  external: <path d="M14 4h6v6M20 4l-9 9M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 22, strokeWidth = 1.6, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

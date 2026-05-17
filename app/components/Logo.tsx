export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Rounded square background */}
      <rect width="36" height="36" rx="9" fill="#FFFFFF" />
      {/* Bulgarian flag stripes */}
      <rect y="0" width="36" height="12" rx="0" fill="#FFFFFF" />
      <rect y="12" width="36" height="12" fill="#00966E" />
      <rect y="24" width="36" height="12" rx="0" fill="#D62612" />
      {/* Clip to rounded rect */}
      <rect width="36" height="36" rx="9" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
      {/* Speech bubble speech marks */}
      <text
        x="18"
        y="20"
        textAnchor="middle"
        fontSize="13"
        fontWeight="bold"
        fontFamily="Georgia, serif"
        fill="#1a1a1a"
      >
        Х!
      </text>
    </svg>
  );
}

import Image from "next/image";

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/images/x-logo.png"
      alt="Хайде! logo"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}

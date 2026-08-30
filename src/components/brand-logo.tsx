import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  textClassName?: string;
  size?: number;
};

export function BrandLogo({ className = "", textClassName = "", size = 44 }: BrandLogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`.trim()}>
      <Image
        src="/magnum-logo.jpeg"
        alt="Magnum School Uniform logo"
        width={size}
        height={size}
        className="rounded-full object-cover"
        priority
      />
      <span className={`text-2xl font-bold tracking-[0.18em] text-amber-500 ${textClassName}`.trim()}>
        Magnum
      </span>
    </Link>
  );
}

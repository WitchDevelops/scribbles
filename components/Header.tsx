import React, { Children } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="hidden md:block md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          width={120}
          height={32}
          alt="Scribbles logo"
          priority
        />
      </Link>
      <Link href="/" className="md:flex-1 md:hidden">
        <Image
          src="/assets/icons/logo-icon.svg"
          width={120}
          height={32}
          alt="Scribbles logo"
          priority
        />
      </Link>
      {children}
    </div>
  );
};

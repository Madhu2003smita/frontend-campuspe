"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { href: "#colleges", label: "Colleges" },
  { href: "#employers", label: "Employers" },
  { href: "#jobs", label: "Jobs" },
  { href: "#blogs", label: "Blogs" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[112px] w-full items-center justify-between px-[70px]">
      <Link href="/" className="flex items-center">
  <Image
    src="/images/campuspe-logo.png"
    alt="CampusPe"
    width={260}
    height={90}
    className="h-auto w-[260px]"
    priority
  />
</Link>

        <nav className="hidden items-center gap-16 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[20px] font-medium text-[#1f2937] transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#signin"
            className="text-[20px] font-medium text-[#1f2937] hover:text-brand"
          >
            Sign In
          </Link>
          <Button
            asChild
            className="h-12 rounded-full bg-brand px-7 text-[20px] font-medium text-white hover:bg-brand-dark"
          >
            <Link href="#signup">Sign Up</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-[#e4ebf5] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[#e8eef8] bg-white px-4 py-4 shadow-md md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-[#3d4f66] hover:bg-[#f5f8fc] hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3 border-t border-[#eef2f8] pt-3">
              <Link
                href="#signin"
                className="text-sm font-semibold text-[#3d4f66]"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Link>
              <Button
                asChild
                className="h-9 rounded-full bg-brand px-4 text-white hover:bg-brand-dark"
              >
                <Link href="#signup" onClick={() => setOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

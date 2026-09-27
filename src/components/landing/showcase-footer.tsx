import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "@/components/landing/image-slot";
import Image from "next/image";


export function AppShowcaseSection() {
  const phones = [
    "phone-1.svg",
    "phone-2.svg",
    "phone-3.svg",
    "phone-4.svg",
    "phone-5.svg",
  ];

  return (
    <section className="overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
          Checkout Our App Interface Look
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-ink">
          Experience the power of a unified campus ecosystem right in your
          pocket. <strong className="text-ink">CampusPe</strong> offers a tailored
          interface for every user: students can explore trending courses,
          colleges can showcase their campus life, and companies can post job
          vacancies directly to a pool of qualified candidates.
        </p>

        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:justify-center sm:overflow-visible">
          {phones.map((file, i) => (
            <div
              key={file}
              className={`snap-center shrink-0 ${i === 2 ? "sm:-mt-4 sm:scale-105" : "sm:mt-6"
                }`}
            >
              <div className="mx-auto w-[180px] rounded-[28px] border-[6px] border-[#f0b27a] bg-white p-1 shadow-[0_20px_50px_rgba(20,40,80,0.15)] sm:w-[200px]">
                <ImageSlot
                  src={`/images/phones/${file}`}
                  alt={`App screen ${i + 1} placeholder`}
                  width={200}
                  height={400}
                  className="aspect-[9/19] w-full rounded-[20px] bg-[#f3f6fa]"
                  label={`Add screen ${i + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DownloadAppSection() {
  return (
    <section className="section-glow py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 sm:px-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
            Download App Now
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-ink">
            Elevate your academic journey with Campuspe, the all-in-one digital
            ecosystem designed to bridge the gap between education and industry.
            Whether you&apos;re a student seeking your next big internship, a
            college looking to empower your cohort, or a company scouting for
            top-tier talent, Campuspe streamlines the connection. Your career
            doesn&apos;t start at graduation—it starts here.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <StoreButton
              href="#"
              top="GET IT ON"
              bottom="Google Play"
              icon={
                <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
                  <path
                    fill="#EA4335"
                    d="M3 20.5V3.5L14 12 3 20.5z"
                  />
                  <path fill="#FBBC04" d="M3 3.5L14 12l4.5-2.5L3 3.5z" />
                  <path fill="#34A853" d="M3 20.5L14 12l4.5 2.5L3 20.5z" />
                  <path fill="#4285F4" d="M14 12l4.5-2.5v5L14 12z" />
                </svg>
              }
            />
            <StoreButton
              href="#"
              top="Download on the"
              bottom="App Store"
              icon={
                <svg viewBox="0 0 24 24" className="size-6 fill-white" aria-hidden>
                  <path d="M16.365 1.43c0 1.14-.438 2.185-1.304 3.015-.984.95-2.13 1.5-3.24 1.41-.12-1.11.42-2.28 1.3-3.15.9-.9 2.2-1.53 3.24-1.56zM20.9 17.3c-.5 1.15-.74 1.66-1.39 2.67-.9 1.4-2.17 3.14-3.74 3.15-1.4.02-1.76-.9-3.66-.89-1.9.01-2.3.9-3.7.88-1.57-.02-2.77-1.59-3.67-2.99C2.9 17.7 1.66 13.1 3.6 10.12c1.1-1.68 2.84-2.74 4.5-2.74 1.68 0 2.73.91 4.12.91 1.35 0 2.17-.91 4.14-.91 1.48 0 3.04.81 4.14 2.2-3.64 2-3.04 7.2.4 8.72z" />
                </svg>
              }
            />
          </div>
        </div>

        <div className="relative mx-auto flex h-[360px] w-full max-w-md items-end justify-center sm:h-[420px]">
          <div className="absolute right-6 top-4 w-[180px] rotate-[8deg] sm:right-10 sm:w-[210px]">
            <div className="rounded-[28px] border-[6px] border-ink/90 bg-white p-1 shadow-2xl">
              <ImageSlot
                src="/images/phones/download-phone-2.svg"
                alt="Download phone mockup 2 placeholder"
                width={210}
                height={420}
                className="aspect-[9/19] w-full rounded-[20px]"
                label="Add phone image"
              />
            </div>
          </div>
          <div className="relative z-10 w-[190px] -rotate-[6deg] sm:w-[220px]">
            <div className="rounded-[28px] border-[6px] border-ink/90 bg-white p-1 shadow-2xl">
              <ImageSlot
                src="/images/phones/download-phone-1.svg"
                alt="Download phone mockup 1 placeholder"
                width={220}
                height={440}
                className="aspect-[9/19] w-full rounded-[20px]"
                label="Add phone image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreButton({
  href,
  top,
  bottom,
  icon,
}: {
  href: string;
  top: string;
  bottom: string;
  icon: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 rounded-xl bg-ink px-5 py-3 text-white transition hover:bg-ink/90"
    >
      {icon}
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide opacity-80">
          {top}
        </span>
        <span className="block text-sm font-semibold">{bottom}</span>
      </span>
    </Link>
  );
}

export function SupportSection() {
  return (
    <section
      className="
        py-10
        sm:py-14
      "
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6">
        <div
          className="
            rounded-[28px]
            border
            border-white
            bg-[linear-gradient(180deg,rgba(238,247,255,0.96)_0%,rgba(255,255,255,0.98)_70%,rgba(250,247,255,0.98)_100%)]
            px-6
            py-10
            text-center
            shadow-[0_20px_60px_rgba(20,60,120,0.10)]
            sm:px-10
            sm:py-12
          "
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Still have questions?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-ink sm:text-base">
            Our support team is here to help you succeed. Get in touch anytime.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Button
              className="
                h-10
                rounded-full
                bg-brand
                px-5
                text-xs
                font-semibold
                text-white
                shadow-sm
                hover:bg-brand-dark
                sm:h-11
                sm:px-6
                sm:text-sm
              "
            >
              Contact Support

              <span className="ml-1 flex size-6 items-center justify-center rounded-full bg-white/20">
                <ArrowUpRight className="size-4" />
              </span>
            </Button>

            <Button
              variant="outline"
              className="
                h-10
                rounded-full
                border-brand
                bg-white/70
                px-5
                text-xs
                font-semibold
                text-brand
                hover:bg-brand/5
                sm:h-11
                sm:px-6
                sm:text-sm
              "
            >
              <Phone className="size-4" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReadyNextSection() {
  return (
    <section className="bg-[#f5f7fb] py-10">
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6">
        <div
          className="
            flex flex-col
            gap-6
            rounded-3xl
            border border-[#dce5ef]
            bg-white
            p-6
            shadow-[0_10px_35px_rgba(30,80,150,0.08)]
            sm:p-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
              Ready for what&apos;s next?
            </h2>

            <p className="mt-1 max-w-xl text-sm leading-5 text-muted-ink sm:text-base">
              Discover colleges, find opportunities, list your institution, or
              start hiring with CampusPe.
            </p>
          </div>

          {/* BUTTONS */}
          <div
            className="
              flex
              w-full
              flex-wrap
              gap-3
              lg:w-auto
              lg:flex-nowrap
            "
          >
            <Button
              asChild
              className="
                h-10
                whitespace-nowrap
                rounded-full
                bg-brand
                px-4
                text-xs
                font-semibold
                text-white
                hover:bg-brand-dark
                sm:text-sm
              "
            >
              <Link href="#colleges">
                Explore Colleges →
              </Link>
            </Button>

            <Button
              asChild
              className="
                h-10
                whitespace-nowrap
                rounded-full
                bg-brand
                px-4
                text-xs
                font-semibold
                text-white
                hover:bg-brand-dark
                sm:text-sm
              "
            >
              <Link href="#jobs">
                Find Opportunities →
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="
                h-10
                whitespace-nowrap
                rounded-full
                border-[#d5deea]
                px-4
                text-xs
                font-semibold
                text-ink
                sm:text-sm
              "
            >
              <Link href="#colleges">
                List Your College →
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="
                h-10
                whitespace-nowrap
                rounded-full
                border-[#d5deea]
                px-4
                text-xs
                font-semibold
                text-ink
                sm:text-sm
              "
            >
              <Link href="#employers">
                Post a Job →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="blogs"
      className="border-t border-[#e8eef5] bg-[radial-gradient(circle_at_0%_100%,rgba(147,197,253,0.45),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(191,219,254,0.45),transparent_35%),linear-gradient(to_bottom,#ffffff,#ffffff_65%,#eef7ff)] pt-14 pb-8"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(5,1fr)]">
          <div>
            <Image
              src="/images/campuspe-logo.png"
              alt="CampusPe"
              width={150}
              height={45}
              className="h-auto w-[150px] object-contain"
            />
            <p className="mt-1 text-xs text-muted-ink">
              — Connecting Students, Institutions &amp; Companies —
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-ink">
              From choosing a college to finding your next opportunity. CampusPe
              connects students, colleges and employers in one place.
            </p>
          </div>

          <FooterCol
            title="For Students"
            links={[
              "Explore Colleges",
              "Find Opportunities",
              "Internships",
              "Full-time Jobs",
              "Part-time & Gig",
              "Application Tracker",
            ]}
          />
          <FooterCol
            title="For Colleges"
            links={["List Your College", "Admissions", "Fee Collection", "Placements"]}
          />
          <FooterCol
            title="For Employers"
            links={["Post a Job", "Find Talent", "Campus Hiring"]}
          />
          <FooterCol
            title="Company"
            links={["About Us", "Contact Us", "Blogs", "Careers"]}
          />
          <div>
            <p className="text-sm font-bold text-ink">Legal &amp; Policies</p>
            <ul className="mt-3 space-y-2">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Refund & Cancellation Policy",
                "Cookie Policy",
                "Grievance Redressal",
                "Job & Internship Disclaimer",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-muted-ink transition hover:text-brand"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="#" className="mt-3 inline-block text-sm font-semibold text-brand">
              View all policies →
            </Link>
            <div className="mt-4 rounded-xl bg-[#eaf4ff] p-3 text-xs leading-relaxed text-muted-ink">
              Separate user, institution and employer terms can live inside the
              full Policies page.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-y border-[#e4ebf5] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-ink">
            <a
              href="mailto:contactus@campuspe.com"
              className="inline-flex items-center gap-2 hover:text-brand"
            >
              <Mail className="size-4" />
              contactus@campuspe.com
            </a>
            <a
              href="tel:+916362606464"
              className="inline-flex items-center gap-2 hover:text-brand"
            >
              <Phone className="size-4" />
              +91 6362606464
            </a>
          </div>
          <p className="inline-flex items-center gap-2 text-sm text-muted-ink">
            <span className="size-2 rounded-full bg-[#22c55e]" />
            Students · Colleges · Employers
          </p>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-ink sm:text-sm">
            2026 CampusPe Technologies Pvt. Ltd.{" "}
            <Link href="#" className="hover:text-brand">
              Privacy
            </Link>{" "}
            <Link href="#" className="hover:text-brand">
              Terms
            </Link>{" "}
            <Link href="#" className="hover:text-brand">
              Grievance
            </Link>
          </p>
          <div className="flex items-center gap-3 text-ink">
            <SocialIcon label="LinkedIn">
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.15V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Instagram">
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.5 6.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="X">
              <span className="text-xs font-bold">𝕏</span>
            </SocialIcon>
            <SocialIcon label="Facebook">
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v2H6v4h3v9h4v-9h3.1l.9-4H13V9c0-.55.45-1 1-1z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="WhatsApp">
              <Phone className="size-4" />
            </SocialIcon>
            <SocialIcon label="YouTube">
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.6A3 3 0 0 0 .5 7.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-4.8zM9.75 15.5v-7L16 12l-6.25 3.5z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-sm font-bold text-ink">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="text-sm text-muted-ink transition hover:text-brand">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <Link
      href="#"
      aria-label={label}
      className="flex size-8 items-center justify-center rounded-full border border-[#e4ebf5] transition hover:border-brand hover:text-brand"
    >
      {children}
    </Link>
  );
}

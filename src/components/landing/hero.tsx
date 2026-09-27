import Link from "next/link";
import type { ReactNode } from "react";
import {
  Bell,
  Bot,
  Briefcase,
  Building2,
  ChartColumn,
  Check,
  GraduationCap,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "@/components/landing/image-slot";
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="hero-glow relative overflow-hidden pb-10 pt-10 sm:pt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Floating cards */}
          <aside className="animate-float absolute -left-2 top-8 hidden w-[210px] rounded-2xl border border-white/80 bg-white/95 p-3 text-left shadow-[0_12px_40px_rgba(20,60,120,0.12)] lg:block xl:-left-16">
            <div className="mb-2 flex size-8 items-center justify-center rounded-full bg-[#25D366]/15">
              <Image
                src="/images/whatsapp.png"
                alt="WhatsApp"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-bold text-ink">WhatsApp Alert</p>
            <p className="text-xs font-semibold text-ink/80">Get notified on whatsapp</p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-ink">
              You&apos;ll get all important updates on your whatsapp.
            </p>
          </aside>

          <aside className="animate-float-delayed absolute -right-2 top-6 hidden w-[230px] rounded-2xl border border-white/80 bg-white/95 p-3 text-left shadow-[0_12px_40px_rgba(20,60,120,0.12)] lg:block xl:-right-20">
            <div className="mb-2 flex size-8 items-center justify-center rounded-full bg-[#7c6cf0]/15 text-[#7c6cf0]">
              <Zap className="size-4" />
            </div>
            <p className="text-sm font-bold text-ink">Resume Builder</p>
            <p className="text-xs font-semibold text-ink/80">Build Your Resume</p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-ink">
              Our resume builder gives you dynamic options to build better &amp;
              faster resume that got you hired.
            </p>
          </aside>

          <div className="animate-fade-up mx-auto mt-15 mb-5 inline-flex items-center gap-2 rounded-full border border-[#e0d7ff] bg-[#f3efff] px-3.5 py-0 .5 text-xs font-semibold text-[#6b5ad6]">
            <Bot className="size-3.5" />
            AI-Powered Campus Assistant
          </div>

          <h1 className="animate-fade-up text-sm font-extrabold tracking-tight text-ink sm:text-2xl md:text-[40px] md:leading-[1.1]">
            Connect <span className="text-brand-cyan">10X Faster.</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-4 max-w-xl text-base text-muted-ink sm:text-lg">
            One platform connecting students, colleges &amp; employers — faster.
          </p>

          <p className="mt-1  text-2xl font-semibold text-brand sm:text-3xl">
            ✦ What are you looking for? ✦
          </p>

          {/* Mid floating pills */}
          <div className="pointer-events-none absolute mt-16 left-0 top-[58%] hidden -translate-x-1/2 lg:block xl:-left-8">
            <div className="flex items-center gap-2 rounded-full border border-[#ffe0c8] bg-white px-3 py-3 shadow-md">
              <div className="flex -space-x-2">
                <span className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#4285F4] text-[10px] font-semibold text-white">
                  AK
                </span>

                <span className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#4F46E5] text-[10px] font-semibold text-white">
                  PR
                </span>

                <span className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#16B8C9] text-[10px] font-semibold text-white">
                  SN
                </span>
              </div>
              <div className="text-left text-[11px] leading-tight">
                <p className="font-semibold text-ink">🔥 142 students matched today</p>
                <p className="text-muted-ink">Just now • IIT, BITS, VIT</p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute mt-16 right-0 top-[58%] hidden translate-x-1/2 lg:block xl:-right-4">
            <div className="flex items-center gap-2 rounded-2xl border border-[#e4e8f0] bg-white px-4 py-2 shadow-[0_8px_24px_rgba(20,60,120,0.10)]">

              {/* Icon */}
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#eaf0ff] text-[#1688f5]">
                <Briefcase className="size-4" />
              </span>

              {/* Text */}
              <div className="text-left leading-tight">
                <p className="text-[15px] font-semibold text-[#252b3a]">
                  <span className="text-[#2867d8]">Radiant Info</span>{" "}
                  shortlisted 8 interns
                </p>

                <p className="mt-1 text-[12px] font-medium text-[#159a72]">
                  ● Verified recruiter
                  <span className="text-[#7b8798]"> • 2 days ago</span>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Audience cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          <AudienceCard
            icon={<ChartColumn className="size-5" />}
            badge="Coming Soon"
            badgeClass="bg-[#e8f2ff] text-brand"
            title="College"
            description="Explore colleges, courses, fees, placements & more"
            features={[
              "Search by course, location, fees",
              "Connect directly with colleges",
              "Improve student placements",
            ]}
            cta="Join Waitlist"
            highlight
            ctaIcon={<Bell className="size-4" />}
            iconSlot="/images/icons/college.svg"
          />
          <AudienceCard
            icon={<GraduationCap className="size-5" />}
            badge="Available Now"
            badgeClass="bg-[#e8f8ef] text-[#1a9a55]"
            title="I'm Looking for a Job"
            description="Upload your resume. We'll find jobs that fit you."
            features={[
              "Jobs from 1000+ sources",
              "AI powered matching",
              "WhatsApp & email alerts",
            ]}
            cta="Explore Jobs"
            ctaHref="#jobs"
            highlight
            iconSlot="/images/icons/job.svg"
          />
          <AudienceCard
            icon={<Briefcase className="size-5" />}
            badge="Coming Soon"
            badgeClass="bg-[#e8f2ff] text-brand"
            title="I'm Hiring"
            description="Connect with colleges and find candidates — from students to graduates."
            features={[
              "Connect directly with colleges",
              "Find the right candidates",
              "Simplify your hiring",
            ]}
            cta="Join Waitlist"
            highlight
            ctaIcon={<Bell className="size-4" />}
            iconSlot="/images/icons/hire.svg"
          />
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  icon,
  badge,
  badgeClass,
  title,
  description,
  features,
  cta,
  ctaHref = "#",
  ctaIcon,
  highlight,
  iconSlot,
}: {
  icon: ReactNode;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref?: string;
  ctaIcon?: ReactNode;
  highlight?: boolean;
  iconSlot: string;
}) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl border border-[#e4e8f0] bg-white p-5 sm:p-6 ${highlight ? "ring-1 ring-brand/25" : ""
        }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex size-11 items-center justify-center rounded-full bg-brand/10 text-brand">
          {icon}
        </div>
        <span className={`pill ${badgeClass}`}>{badge}</span>
      </div>
      <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-ink">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-[#3d4f66]">
            <span className="mt-0.5 flex size-3 shrink-0 items-center justify-center rounded-full bg-[#eef0f2]">
              <Check className="size-2 text-[#5f6670]" strokeWidth={3} />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-5">
        <Button
          asChild
          className="h-11 w-full rounded-full bg-brand text-sm font-semibold text-white hover:bg-brand-dark"
        >
          <Link href={ctaHref} className="inline-flex items-center gap-2">
            {cta}
            {ctaIcon ?? <Sparkles className="size-4" />}
          </Link>
        </Button>
      </div>
      <div className="pointer-events-none absolute bottom-16 right-4 opacity-30">
        <ImageSlot src={iconSlot} alt="" width={48} height={48} className="size-12" />
      </div>
    </article>
  );
}

export function StatsBar() {
  const stats = [
    {
      value: "800+",
      label: "Students",
      icon: <Users className="size-4" />,
      color: "bg-[#efe9ff] text-[#7c6cf0]",
    },
    {
      value: "130+",
      label: "colleges",
      icon: <Building2 className="size-4" />,
      color: "bg-[#e8f2ff] text-brand",
    },
    {
      value: "100+",
      label: "jobs & internships",
      icon: <Briefcase className="size-4" />,
      color: "bg-[#e8f8ef] text-[#1a9a55]",
    },
    {
      value: "100%",
      label: "Safe & Trusted",
      icon: <Shield className="size-4" />,
      color: "bg-[#fff3e6] text-[#d97706]",
    },
  ];

  return (
    <section className=" border-[#eef2f8] bg-white py-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex items-center gap-3 ${i < stats.length - 1 ? "sm:border-r sm:border-[#0f0c0c25]" : ""
              } sm:justify-center`}
          >
            <span
              className={`flex size-10 shrink-0 items-center justify-center rounded-full ${stat.color}`}
            >
              {stat.icon}
            </span>
            <div>
              <p className="text-xl font-extrabold text-ink sm:text-2xl">{stat.value}</p>
              <p className="text-sm text-muted-ink">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PartnersSection() {
  const partners = [
    "logo-1.svg",
    "logo-2.svg",
    "logo-3.svg",
    "logo-4.svg",
    "logo-5.svg",
    "logo-6.svg",
  ];

  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm font-medium text-muted-ink">
          Trusted by partners across India
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {partners.map((file, i) => (
            <ImageSlot
              key={file}
              src={`/images/partners/${file}`}
              alt={`Partner logo ${i + 1} placeholder`}
              width={140}
              height={48}
              className="h-12 w-[140px] opacity-80"
              label="Add logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

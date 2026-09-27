import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ForCollegesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:px-0">

    {/* LEFT SIDE */}
    <div className="max-w-[460px]">
  {/* Badge */}
  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce8f8] bg-white px-3.5 py-1.5 text-xs font-semibold shadow-sm">
    <span className="size-1.5 rounded-full bg-[#1593ee]" />
    <span className="text-brand">02 • FOR COLLEGES</span>
  </div>

  {/* Heading */}
  <h2 className="max-w-[440px] text-[44px] font-extrabold leading-[1.08] tracking-[-1.5px] text-[#444444]">
    Get Discovered
    <br />
    by{" "}
    <span className="text-brand">
      Students and
    </span>
    <br />
    <span className="text-brand">
      Recruiters.
    </span>
  </h2>

  {/* Description */}
  <p className="mt-7 max-w-[440px] text-[18px] leading-[1.55] text-[#687b94]">
    Put your college in front of students searching for the right
    course and recruiters looking for the right talent. CampusPe
    helps you build your presence, attract enquiries and connect
    with opportunities.
  </p>

  {/* Button */}
  <button
    type="button"
    className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-brand px-7 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(11,138,239,0.25)] transition hover:bg-brand-dark"
  >
    List Your College
    <span className="text-lg">→</span>
  </button>
</div>

    {/* RIGHT SIDE */}
    <div className="space-y-4">
      <CollegeCard
        num="01"
        label="VERIFIED PROFILE"
        title="Build your college profile"
        body="Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover."
       tags={[
  {
    text: "NAAC A++ Ready",
    className: "border border-[#6dbb35] bg-white text-[#55a52b]",
  },
  {
    text: "98% Match",
    className: "border border-[#1593ee] bg-white text-[#1593ee]",
  },
]}
      />

      <CollegeCard
        num="02"
        label="DIRECT ENROLL"
        title="Students discover and connect"
        body="Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team."
        tags={[
          {
            text: "Direct Enquiries",
            className:
              "border border-brand/30 bg-white text-brand",
          },
          {
            text: "WHATSAPP / CHAT",
            className:
              "border border-[#1a9a55]/30 bg-white text-[#1a9a55]",
          },
        ]}
        note="Avg. response: <15 min"
      />

      <CollegeCard
        num="03"
        label="CAMPUS RECRUITING"
        title="Recruiters discover your College"
        body="Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team."
        tags={[
          {
            text: "500+ Hiring Partners",
            className:
              "border border-[#7c6cf0]/30 bg-white text-[#7c6cf0]",
          },
          {
            text: "Connect Directly",
            className:
              "border border-brand/30 bg-white text-brand",
          },
        ]}
      />

      <CollegeCard
        num="04"
        label="LIVE HUD"
        title="Track placements in real time"
        body="Monitor applications, interviews and offers across your campus from one live placement hub."
        tags={[
          {
            text: "● LIVE PLACEMENTS",
            className:
              "border border-red-300 bg-[#fff5f6] text-red-500",
          },
          {
            text: "Students · Interviews · Offers",
            className:
              "bg-brand text-white",
          },
        ]}
      />
    </div>
  </div>
</section>
  );
}

function CollegeCard({
  num,
  label,
  title,
  body,
  tags,
  note,
}: {
  num: string;
  label: string;
  title: string;
  body: string;
  tags: { text: string; className: string }[];
  note?: string;
}) {
  return (
    <article className="rounded-2xl border border-[#e8eef5] bg-white px-5 py-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        {/* Left content */}
        <div className="min-w-0 flex-1">
         <div className="flex items-center gap-2">
  <span className="inline-flex h-5 min-w-7 items-center justify-center rounded-md bg-[#eef1ff] px-2 text-[11px] font-bold text-[#5b5ce2]">
    {num}
  </span>

  <span className="text-[11px] font-medium tracking-wide text-[#91a0b5]">
    {label}
  </span>
</div>

          <h3 className="mt-1 text-[18px] font-bold leading-tight text-ink">
            {title}
          </h3>

          <p className="mt-1 text-[14px] leading-[1.45] text-muted-ink">
            {body}
          </p>

          {note && (
            <p className="mt-2 text-[11px] text-muted-ink">
              {note}
            </p>
          )}
        </div>

        {/* Right tags */}
        <div className="flex shrink-0 flex-col items-end gap-2 pt-1">
         {tags.map((tag) => (
  <span
    key={tag.text}
    className={`inline-flex h-[28px] items-center rounded-lg px-3 text-[11px] font-medium ${tag.className}`}
  >
    {tag.text}
  </span>
))}
        </div>
      </div>
    </article>
  );
}

export function ForEmployersSection() {
  return (
    <section id="employers" className="bg-[#f9fbfd] py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 sm:px-6">
        <div>
          <span className="pill bg-[#e8f2ff] text-brand">
            <span className="mr-1.5 size-1.5 rounded-full bg-brand" />
            03 • FOR EMPLOYERS
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-[40px]">
            Stop running campus drives.
            <br />
            <span className="text-brand">Start hiring the right people.</span>
          </h2>
          <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-muted-ink">
            Post a role in minutes and reach relevant candidates without the
            time, travel and coordination of traditional hiring. CampusPe helps
            you discover, match and connect with talent from colleges and beyond.
          </p>
          <Button
            asChild
            className="mt-8 h-12 rounded-full bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            <Link href="#signup" className="inline-flex items-center gap-2">
              Post a Job <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="space-y-3">
          <EmployerCard
            num="01"
            title="Post a role in minutes"
            body="Create a job post, set preferences and go live across the CampusPe network in minutes."
            tags={[
              { text: "⚡ 5 Min Deployment", className: "bg-[#e8f8ef] text-[#1a9a55]" },
              { text: "500+ Campus Network", className: "bg-[#f1f4f9] text-[#4a5b73]" },
            ]}
          />
          <EmployerCard
            num="02"
            title="Receive a matched shortlist"
            body="Get candidates ranked to your role — without sorting through piles of irrelevant CVs."
            tags={[
              { text: "Zero CV Clutter", className: "bg-[#efe9ff] text-[#6b5ad6]" },
              { text: "Tier 1-Tier 3 Parity", className: "bg-[#f1f4f9] text-[#4a5b73]" },
            ]}
          />
          <EmployerCard
            num="03"
            title="Connect with candidates directly"
            body="Message candidates, schedule interviews and move them through your pipeline in-app."
            tags={[
              { text: "In-App Scheduling", className: "bg-[#e8f2ff] text-brand" },
              { text: "1-Click Video / Chat", className: "bg-[#f1f4f9] text-[#4a5b73]" },
            ]}
          />
          <EmployerCard
            num="04"
            title="Reduce your time-to-hire"
            body="Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow."
            tags={[
              { text: "<2 DAYS", className: "bg-brand text-white" },
              { text: "57% Faster Hiring", className: "bg-[#e8f8ef] text-[#1a9a55]" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function EmployerCard({
  num,
  title,
  body,
  tags,
}: {
  num: string;
  title: string;
  body: string;
  tags: { text: string; className: string }[];
}) {
  return (
    <article className="rounded-2xl border border-[#e8eef5] bg-white px-4 py-3 shadow-sm sm:px-5 sm:py-3.5">
      <div className="flex items-center gap-3">
        {/* Number */}
        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#efe9ff] text-xs font-bold text-[#6b5ad6]">
          {num}
        </span>

        <div className="min-w-0 flex-1">
          {/* Title */}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-bold leading-tight text-ink">
              {title}
            </h3>

            <span className="rounded-full bg-[#efe9ff] px-2 py-1 text-[9px] font-semibold leading-none text-[#6b5ad6]">
              INSTANT SETUP
            </span>
          </div>

          {/* Description + Tags */}
          <div className="mt-1 flex items-center justify-between gap-4">
            <p className="max-w-[650px] text-xs leading-[1.4] text-muted-ink">
              {body}
            </p>

            <div className="hidden shrink-0 flex-col items-end gap-1.5 sm:flex">
              {tags.map((tag) => (
                <span
                  key={tag.text}
                  className={`inline-flex h-7 items-center whitespace-nowrap rounded-lg px-3 text-[10px] font-medium ${tag.className}`}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile tags */}
      <div className="mt-2 flex flex-wrap gap-2 sm:hidden">
        {tags.map((tag) => (
          <span
            key={tag.text}
            className={`inline-flex h-7 items-center rounded-lg px-3 text-[10px] font-medium ${tag.className}`}
          >
            {tag.text}
          </span>
        ))}
      </div>
    </article>
  );
}

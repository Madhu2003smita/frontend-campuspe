import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OpportunityDiscovery() {
  return (
    <section
  id="jobs"
  className="relative overflow-hidden bg-[radial-gradient(circle_at_10%_50%,rgba(219,239,255,0.75),transparent_38%),radial-gradient(circle_at_90%_50%,rgba(244,232,255,0.75),transparent_38%)] py-16 sm:py-20"
>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:gap-14 sm:px-6">
        <div>
          <span className="pill bg-[#e8f2ff] text-brand">
            01 • OPPORTUNITY DISCOVERY
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Stop searching.{" "}
            <span className="text-brand">Start getting matched.</span>
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-ink">
            Tell CampusPe your skills, preferences and goals. We continuously
            monitor company career pages and job sources, find opportunities that
            match you, and notify you when they appear.
          </p>

          <div className="mt-8 space-y-3">
            <StepCard
              num="01"
              title="Set your preferences."
              body="Tell us what you're looking for, from colleges and courses to jobs, internships and gigs."
              tag="Smart Profile"
              tagClass="bg-[#efe9ff] text-[#6b5ad6]"
            />
            <StepCard
              num="02"
              title="Discover relevant opportunities."
              body="Explore colleges and career opportunities matched to your profile, interests and goals."
              tag="AI Ranked"
              tagClass="bg-[#e8f2ff] text-brand"
            />
            <StepCard
              num="03"
              title="Get notified when something fits"
              body="Get notified when a relevant college or new opportunity is found, so you can act early."
              tag="Instant Alerts"
              tagClass="bg-[#e8f8ef] text-[#1a9a55]"
            />
          </div>

          <Button
            asChild
            className="mt-8 h-12 rounded-full bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            <Link href="#jobs" className="inline-flex items-center gap-2">
              Explore opportunities <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="relative">
         <div className="soft-card p-4 sm:p-5 shadow-[0_22px_45px_-10px_rgba(30,60,100,0.30)]">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-brand text-white">
                  <Zap className="size-5" />
                </span>
                <div>
                  <p className="font-bold text-ink">CampusPe Opportunity Feed</p>
                  <p className="text-xs text-muted-ink">
                    Colleges &amp; opportunities matched to you
                  </p>
                </div>
              </div>
              <span className="pill shrink-0 bg-[#e8f8ef] text-[#1a9a55]">
                • 12 new matches today
              </span>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"].map(
                (tab, i) => (
                  <button
                    key={tab}
                    type="button"
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      i === 0
                        ? "bg-brand text-white"
                        : "bg-[#f1f4f9] text-[#4a5b73]"
                    }`}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>

            <div className="space-y-3">
              <FeedCard
                logoText="IIM"
                logoClass="bg-[#c62828] text-white"
                title="IIM Bangalore"
                tag="Top College"
                tagClass="bg-[#efe9ff] text-[#6b5ad6]"
                meta="MBA · Bengaluru · ₹ 3L+"
                body="India's premier management institute with global exposure..."
                cta="View Details"
              />
              <FeedCard
                logoText="G"
                logoClass="bg-white text-[#4285F4] border border-[#e4ebf5]"
                title="Product Intern"
                tag="Internship"
                tagClass="bg-[#e8f2ff] text-brand"
                meta="Bengaluru · Hybrid · ₹ 35K/mo"
                body="Work on real products, learn from top engineers and build..."
                cta="Apply Now"
              />
              <FeedCard
                logoText="N"
                logoClass="bg-ink text-white"
                title="Marketing Gig"
                tag="Freelance"
                tagClass="bg-[#e8f8ef] text-[#1a9a55]"
                meta="Remote · Freelance · ₹ 10K - 25K"
                body="Help grow product awareness with content and campaigns..."
                cta="View Details"
              />
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#eef2f8] pt-3 text-xs">
              <Link href="#jobs" className="font-semibold text-brand">
                View all matched opportunities →
              </Link>
              <span className="text-muted-ink">Curated for you • Updated daily</span>
            </div>
          </div>

          {/* <p className="mt-4 max-w-xs font-script text-lg font-semibold text-[#7c6cf0] sm:absolute sm:-right-2 sm:bottom-8 sm:mt-0">
            A mix of colleges, jobs, internships and gigs — all in one place. ↗
          </p> */}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  num,
  title,
  body,
  tag,
  tagClass,
}: {
  num: string;
  title: string;
  body: string;
  tag: string;
  tagClass: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e8eef5] bg-white p-3 shadow-sm">
      <div className="flex items-start gap-2.5">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#e8f2ff] text-xs font-bold text-brand">
          {num}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-1.5">
            <h3 className="text-sm font-bold text-ink">
              {title}
            </h3>

            <span className={`pill ${tagClass}`}>
              {tag}
            </span>
          </div>

          <p className="mt-0.5 text-xs leading-snug text-muted-ink">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

function FeedCard({
  logoText,
  logoClass,
  title,
  tag,
  tagClass,
  meta,
  body,
  cta,
}: {
  logoText: string;
  logoClass: string;
  title: string;
  tag: string;
  tagClass: string;
  meta: string;
  body: string;
  cta: string;
}) {
  return (
    <div className="rounded-xl border border-[#e8eef5] bg-[#fbfcfe] p-2.5">
      <div className="flex gap-2.5">
        {/* Logo */}
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${logoClass}`}
        >
          {logoText}
        </span>

        <div className="min-w-0 flex-1">
          {/* Title + Tag + Button in one line */}
          <div className="flex items-center gap-1.5">
            <h4 className="min-w-0 truncate text-sm font-bold text-ink">
              {title}
            </h4>

            <span  className={`pill shrink-0 ${tagClass} ml-4`}>
              {tag}
            </span>

            <Button
              className="ml-auto h-7 shrink-0 rounded-full bg-brand px-3 text-[11px] font-semibold text-white hover:bg-brand-dark"
            >
              {cta}
            </Button>
          </div>

          {/* Meta */}
          <p className="mt-0.5 text-[11px] text-muted-ink">
            {meta}
          </p>

          {/* Description */}
          <p className="mt-0.5 text-[11px] leading-snug text-[#5a6b82]">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

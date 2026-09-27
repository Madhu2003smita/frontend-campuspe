"use client";

import { useRef, useState } from "react";
import {
  CheckCircle2,
  FileText,
  Shield,
  Upload,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeUploadSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  function onFiles(files: FileList | null) {
    if (!files?.length) return;
    setFileName(files[0].name);
  }

  return (
    <section className="bg-[#f7faff] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

        {/* Top badge */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#dce8f8] bg-white px-3.5 py-1.5 text-xs font-semibold">
          <span className="size-1.5 rounded-full bg-[#7c6cf0]" />
          <span className="text-brand">TRY IT LIVE</span>
          <span className="text-[#c5d0e0]">|</span>
          <span className="text-muted-ink">v2.4 AI Engine</span>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-[42px]">
          Upload your resume.
          <br />
          <span className="text-brand">Find jobs that fit.</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-ink">
          Upload once. CampusPe reads your skills, experience, and preferences —
          then finds relevant jobs across 1,000+ sources.
        </p>

        {/* Upload area */}
        <div className="relative mx-auto mt-10 w-full max-w-[460px]">

          {/* 98% Match Rate */}
          <aside className="absolute -left-4 -top-3 z-20 flex items-center gap-2 rounded-xl border border-[#e8eef5] bg-white px-3 py-2 shadow-md sm:-left-10">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#e8f8ef] text-[#1a9a55]">
              <Zap className="size-3.5" />
            </span>

            <div className="text-left text-[11px] leading-tight">
              <p className="font-bold text-ink">98% Match Rate</p>
              <p className="text-muted-ink">AI semantic rank</p>
            </div>
          </aside>

          {/* OUTER WHITE CARD */}
          <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_45px_rgba(20,60,120,0.10)] sm:p-5">

            {/* INNER DOTTED BORDER */}
            <div
              className={`rounded-[20px] border-2 border-dashed bg-white px-5 py-6 transition-colors sm:px-8 sm:py-7 ${
                dragOver
                  ? "border-brand bg-brand/5"
                  : "border-[#c7d8f2]"
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                onFiles(e.dataTransfer.files);
              }}
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-ink">
                Upload your resume
              </h3>

              {/* Description */}
              <p className="mx-auto mt-2 max-w-sm text-sm leading-snug text-muted-ink">
                PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to
                understand your skills and experience.
              </p>

              {/* Hidden input */}
              <input
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => onFiles(e.target.files)}
              />

              {/* Upload button */}
              <Button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="mt-5 h-11 rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(11,138,239,0.35)] hover:bg-brand-dark"
              >
                <Upload className="size-4" />
                Upload resume
              </Button>

              {/* Drag/drop text */}
              <p className="mt-2.5 text-sm text-muted-ink">
                {fileName ? (
                  <span className="inline-flex items-center gap-2 font-medium text-ink">
                    <FileText className="size-4 text-brand" />
                    {fileName}
                  </span>
                ) : (
                  "or drag and drop your file here"
                )}
              </p>

              {/* File types */}
              <div className="mt-3 flex justify-center gap-2">
                {["PDF", "DOC", "DOCX"].map((ext) => (
                  <span
                    key={ext}
                    className="rounded-md border border-[#c5d8f0] px-2.5 py-1 text-[11px] font-semibold text-brand"
                  >
                    {ext}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ATS Badge */}
          <aside className="absolute -bottom-3 -right-3 z-20 flex items-center gap-2 rounded-xl border border-[#e8eef5] bg-white px-3 py-2 shadow-md sm:-right-10">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#fff3e6] text-[#c2811a]">
              <Shield className="size-3.5" />
            </span>

            <div className="text-left text-[11px] leading-tight">
              <p className="font-bold text-ink">ATS Compliant</p>
              <p className="text-muted-ink">Standardized parser</p>
            </div>
          </aside>
        </div>

        {/* Bottom feature boxes */}
        <div className="relative mx-auto mt-10 max-w-[700px]">

          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-[#dce6f3] sm:block" />

          <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">

            {[
              {
                title: "Resume analyzed",
                sub: "Ready in 4s",
                color: "text-[#1a9a55] bg-[#e8f8ef]",
              },
              {
                title: "Skills matched",
                sub: "Deep taxonomy",
                color: "text-[#7c6cf0] bg-[#efe9ff]",
              },
              {
                title: "Experience matched",
                sub: "Contextual seniority",
                color: "text-[#6b5ad6] bg-[#efe9ff]",
              },
              {
                title: "1,000+ sources searched",
                sub: "Real-time aggregators",
                color: "text-brand bg-[#e8f2ff]",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="relative flex min-h-[76px] items-center gap-2.5 rounded-2xl border border-[#e8eef5] bg-white px-3 py-3 text-left shadow-sm"
              >
                <span
                  className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full ${step.color}`}
                >
                  <CheckCircle2 className="size-4" />
                </span>

                <div className="min-w-0">
                  <p className="text-[12px] font-bold leading-tight text-ink">
                    {step.title}
                  </p>

                  <p
                    className={`mt-1 text-[9px] font-medium leading-tight ${
                      step.color.split(" ")[0]
                    }`}
                  >
                    {step.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
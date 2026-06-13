"use client";

import { useState } from "react";

const linkClass =
  "cursor-pointer underline decoration-muted/40 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

export default function Home() {
  const [highlight, setHighlight] = useState(false);

  const flashOpinions = () => {
    setHighlight(true);
    document
      .getElementById("opinions")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => setHighlight(false), 1600);
  };

  return (
    <div className="flex flex-1 justify-center bg-background">
      <main className="flex w-full flex-col">
        {/* ── Masthead ─────────────────────────────────────────────── */}
        <header className="rounded-lg hover:bg-black/[0.04] pt-8 sm:pt-12">
          <div className="px-4 text-center pb-12">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              South Windsor{" "}
              <br></br>
              <span className="text-accent">Voter Summaries</span>
            </h1>
            <p className="mt-5 text-base italic text-muted sm:text-xl">
              A student-led civic initiative, in collaboration with {" "}
              <a
                href="https://thebobcatprowl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                The Bobcat Prowl
              </a>
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="inline-block border-2 border-rule bg-foreground px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-background transition-colors hover:border-accent hover:bg-accent"
              >
                South Windsor Residents: Make Yourself Heard
              </a>
            </div>
          </div>
        </header>

        {/* ── About + Your Opinions Matter ─────────────────────────── */}
        {/* flex-1 lets the row fill remaining height; the left column's
            right border then stretches to the bottom of the page (the T). */}
        <section className="flex flex-1 flex-col border-t border-rule/30 sm:flex-row">
          <div className="border-b border-rule/30 px-4 py-12 transition-colors hover:bg-black/[0.04] sm:flex-1 sm:border-b-0 sm:border-r sm:py-16">
            <SectionLabel>About</SectionLabel>

            <div className="mx-auto mt-6 max-w-2xl text-center">
              {/* Intentionally left blank — copy to come */}
              <p className="text-lg leading-relaxed text-muted">
                <i><b>Who</b> are the candidates in the <b>August party primaries</b>, and <b>what</b> do they stand for?</i>
                {" "}Finding answers to these questions has grown <b>increasingly difficulty</b> for voters.
                {" "}Through this initiative, a group of SWHS students will try to fill some of this gap.
                {" "}We will <b>interview</b> community members, <b>conduct</b> online <b>research</b>, and <b>contact campaigns</b> for statements to syntheisze <b>short, neutral</b> articles for voters.
                {" "}<b>Our goal is to inform, not persuade</b>.
              </p>

              {/* Two separate CTAs */}
              <div className="mt-10 grid grid-cols-1 gap-8 text-lg text-muted sm:grid-cols-2 sm:gap-12">
                <p className="italic">
                  Curious?{" "}
                  <a href="#faq" className={linkClass}>
                    Read our FAQ.
                  </a>
                </p>
                <p className="italic">
                  Want to help?{" "}
                  <button type="button" onClick={flashOpinions} className={linkClass}>
                    See how.
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-12 transition-colors hover:bg-black/[0.04] sm:flex-1 sm:py-16">
            <SectionLabel
              id="opinions"
              className={highlight ? "text-accent" : "text-foreground"}
            >
              Your Opinions Matter
            </SectionLabel>

            <div className="mx-auto mt-6 max-w-2xl text-center">
              <p className="text-lg leading-relaxed text-muted">
                [ Section copy goes here. ]
              </p>
            </div>
          </div>
        </section>

        {/* ── Frequently Asked Questions ───────────────────────────── */}
        <section id="faq" className="border-t border-rule/30 px-4 py-12 sm:py-16">
          <SectionLabel>Frequently Asked Questions</SectionLabel>

          <div className="mx-auto mt-8 max-w-2xl">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-rule/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <svg
                    className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-5 leading-relaxed text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const faqs = [
  { q: "[ Question goes here. ]", a: "[ Answer goes here. ]" },
  { q: "[ Question goes here. ]", a: "[ Answer goes here. ]" },
  { q: "[ Question goes here. ]", a: "[ Answer goes here. ]" },
];

function SectionLabel({
  children,
  id,
  className = "text-foreground",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`text-center text-2xl font-extrabold leading-[1.05] tracking-tight transition-colors duration-300 sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

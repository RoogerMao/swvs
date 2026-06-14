"use client";

import { useState } from "react";

const linkClass =
  "cursor-pointer underline decoration-muted/40 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

export default function Home() {
  const [opinionsFlash, setOpinionsFlash] = useState(false);
  const [faqFlash, setFaqFlash] = useState(false);

  const flash = (targetId: string, setter: (value: boolean) => void) => {
    setter(true);
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => setter(false), 1600);
  };

  // Per-item FAQ open state (lifted so links can open a specific item).
  const [openFaqs, setOpenFaqs] = useState<boolean[]>(() =>
    faqs.map(() => false)
  );
  const [faqFlashIndex, setFaqFlashIndex] = useState<number | null>(null);

  const toggleFaq = (i: number) =>
    setOpenFaqs((prev) => prev.map((value, idx) => (idx === i ? !value : value)));

  const openAndFlashFaq = (i: number) => {
    if (i < 0) return;
    setOpenFaqs((prev) => prev.map((value, idx) => (idx === i ? true : value)));
    setFaqFlashIndex(i);
    document
      .getElementById(`faq-item-${i}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => setFaqFlashIndex(null), 1600);
  };

  const openHearingsIndex = faqs.findIndex((faq) =>
    faq.q.toLowerCase().includes("open hearings")
  );

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
                {" "}<b>Finding answers</b> to these questions has grown <b>increasingly difficult</b> for voters.
                {" "}Through this initiative, a group of <b>SWHS Students</b> will try to fill some of this gap.
                {" "}We will <b>interview</b> community members, <b>conduct</b> online <b>research</b>, and <b>contact campaigns</b> for statements to syntheisze <b>short, neutral</b> articles for voters.
                {" "}<b>Our goal is to inform, not persuade</b>.
              </p>

              {/* Two separate CTAs */}
              <div className="mt-10 grid grid-cols-1 gap-8 text-lg text-muted sm:grid-cols-2 sm:gap-12">
                <p className="italic">
                  Curious?{" "}
                  <button
                    type="button"
                    onClick={() => flash("faq-heading", setFaqFlash)}
                    className={linkClass}
                  >
                    Read our FAQ.
                  </button>
                </p>
                <p className="italic">
                  Want to help?{" "}
                  <button
                    type="button"
                    onClick={() => flash("opinions", setOpinionsFlash)}
                    className={linkClass}
                  >
                    See how.
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-12 transition-colors hover:bg-black/[0.04] sm:flex-1 sm:py-16">
            <SectionLabel
              id="opinions"
              className={opinionsFlash ? "text-accent" : "text-foreground"}
            >
              Voice <span className="text-accent">Your Concerns</span>
            </SectionLabel>

            <div className="mx-auto mt-6 max-w-2xl text-center">
              <p className="text-lg leading-relaxed text-muted">
                We want <b>public input</b>, and we will use it to <b>identify the issues</b> that <b>need our coverage the most</b>.
                {" "} We&apos;d love to hear from you via <b>any</b> of the following ways: 
              </p>
              <ol className="mt-2 list-decimal list-inside text-lg leading-loose text-muted">
                <li className="pt-2">
                  Filling out the
                  {" "}<a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                  >
                    <b>voter issues survey</b>
                  </a>
                  {" "}(open until <b>June 21st</b>)
                </li>
                <li>
                  Scheduling a time to speak with us, or attending our{" "}
                  <button
                    type="button"
                    onClick={() => openAndFlashFaq(openHearingsIndex)}
                    className={linkClass}
                  >
                    <b>open hearings</b>
                  </button>
                </li>
                <li className="pb-2">
                  Writing us an email!
                </li>
              </ol>
              <p className="text-lg leading-relaxed text-muted">
                We&apos;d <b>greatly appreciate</b> if you could help spread the word. We want to hear from <b>everyone</b>. 
                {" "}If you know <b>anyone with civic engagement experience</b>, pointing them our way would be great, too.
              </p>
            </div>
          </div>
        </section>

        {/* ── Frequently Asked Questions ───────────────────────────── */}
        <section id="faq" className="border-t border-rule/30 px-4 py-12 sm:py-16 hover:bg-black/[0.04]">
          <SectionLabel
            id="faq-heading"
            className={faqFlash ? "text-accent" : "text-foreground"}
          >
            Frequently Asked Questions
          </SectionLabel>

          <div className="mx-auto mt-8 w-full lg:w-3/4">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                id={`faq-item-${i}`}
                q={faq.q}
                a={faq.a}
                open={openFaqs[i]}
                flash={faqFlashIndex === i}
                onToggle={() => toggleFaq(i)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Who's behind this effort?",
    a: (
      <>
        Hey! My name is Roger Mao, and I graduated from SWHS in 2025. I&apos;m a
        rising sophomore at Brown, and I&apos;m running this opportunity{" "}
        <b>independent of any party or candidate</b>. I want to see how much
        lowering information barriers can increase political participation.
        I&apos;ve paid to host this website and promote this initiative out of
        pocket, with all costs totalling to less than $1,000.
      </>
    ),
  },
  {
    q: "What races are you covering?",
    a: (
      <>
        For the sake of scale and due to facilitator availability, this project
        will cover the August party primaries South Windsor residents can
        participate in. This initiative expected to cover the Republican
        primaries for Governor, Lieutenant Governor, and the 1st Congressional
        District, alongside the Democratic primaries for the 1st Congressional
        District and Governor.{" "}
        <a
          href="https://ctmirror.org/2026/05/16/ryan-fazio-wins-the-ct-gop-nomination-for-governor/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <b>However, the Republican primaries resolved on May 16th, 2026.</b>
        </a>{" "}
        Although this leaves only Democratic primaries to cover,{" "}
        <b>we would love to hear concerns from all voters</b>, and will record
        them for future coverage by <i>The Bobcat Prowl</i>. This initiative, if
        taken up by another facilitator, may also extend into the fall for the
        general elections.
      </>
    ),
  },
  {
    q: "When and where are the open hearings?",
    a: "We will share more information shortly!",
  },
];

function FaqItem({
  q,
  a,
  open,
  flash,
  onToggle,
  id,
}: {
  q: string;
  a: React.ReactNode;
  open: boolean;
  flash: boolean;
  onToggle: () => void;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 border-b border-rule/30">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-lg font-medium text-foreground"
      >
        <span
          className={`transition-colors duration-300 ${
            flash ? "text-accent" : ""
          }`}
        >
          {q}
        </span>
        <svg
          className={`size-5 shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
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
      </button>

      {/* grid-rows 0fr → 1fr gives a smooth height animation */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

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

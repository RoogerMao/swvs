export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-background pt-8 sm:pt-12">
      <main className="flex w-full flex-col">
        {/* ── Masthead ─────────────────────────────────────────────── */}
        <header className="rounded-lg">
          <div className="px-4 text-center pb-12">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              South Windsor{" "}
              <br></br>
              <span className="text-accent">Voter Summaries</span>
            </h1>
            <p className="mt-5 text-base italic text-muted sm:text-xl">
              A student-led, civic extension to the {" "}
              <a
                href="https://thebobcatprowl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-muted/40 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
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
          <div className="border-b border-rule/30 px-4 py-12 sm:flex-1 sm:border-b-0 sm:border-r sm:py-16">
            <SectionLabel>About</SectionLabel>

            <div className="mx-auto mt-6 max-w-2xl text-center">
              {/* Intentionally left blank — copy to come */}
              <p className="text-lg leading-relaxed text-muted">
                [ About section copy goes here. ]
              </p>
            </div>
          </div>

          <div className="px-4 py-12 sm:flex-1 sm:py-16">
            <SectionLabel>Your Opinions Matter</SectionLabel>

            <div className="mx-auto mt-6 max-w-2xl text-center">
              <p className="text-lg leading-relaxed text-muted">
                [ Section copy goes here. ]
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-2xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl">
      {children}
    </h2>
  );
}

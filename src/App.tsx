const links = {
  email: "mailto:sayremd@gmail.com",
  phone: "tel:+15136466767",
  linkedin: "https://www.linkedin.com/in/mikedsayre",
  github: "https://github.com/mikedsayre",
  mike: "https://mikedsayre.com",
  metroOne: "https://www.metrooneproperties.com",
};

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  const isMailOrTel = href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <a
      href={href}
      {...(isMailOrTel ? {} : { rel: "noreferrer", target: "_blank" })}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[42rem] flex-col px-6 py-8 sm:px-8 sm:py-10">
      <a href="#now" className="skip-link">
        Skip to content
      </a>

      <header className="flex items-baseline justify-between gap-6 border-b border-rule pb-5">
        <p className="font-serif text-[1.05rem] tracking-tight text-ink">
          Swan Lake Digital
        </p>
        <nav aria-label="Page" className="flex gap-5 text-sm text-muted">
          <a href="#now" className="text-muted no-underline hover:text-pine">
            Now
          </a>
          <a href="#work" className="text-muted no-underline hover:text-pine">
            Work
          </a>
          <a
            href="#contact"
            className="text-muted no-underline hover:text-pine"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="border-b border-rule py-14 sm:py-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Mike Sayre · owner
          </p>
          <h1 className="font-serif text-[2.6rem] leading-[1.12] tracking-tight text-ink sm:text-6xl">
            Marketing, sites, and the system a job needs.
          </h1>
          <p className="mt-6 max-w-[34rem] text-[1.125rem] leading-8 text-muted">
            My own shop. I figure out the goal, then learn the tools. The
            person is at{" "}
            <ExternalLink href={links.mike}>mikedsayre.com</ExternalLink>.
          </p>
        </section>

        <section
          id="now"
          className="scroll-mt-8 border-b border-rule py-12 sm:py-14"
        >
          <div className="grid gap-6 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-10">
            <h2 className="font-serif text-sm uppercase tracking-[0.16em] text-muted">
              Now
            </h2>
            <div>
              <h3 className="font-serif text-2xl tracking-tight text-ink">
                Metro One Properties
              </h3>
              <p className="mt-1 text-sm text-muted">
                Cincinnati · contract · Feb 2026 – present
              </p>
              <p className="mt-4">
                We buy houses. I built how we find them, the site sellers land
                on, and the ads. I also talk with homeowners, families, and
                attorneys. That work stands on its own. It is listed here
                because it is what the shop is doing right now.
              </p>
              <p className="mt-4">
                <ExternalLink href={links.metroOne}>
                  metrooneproperties.com
                </ExternalLink>
              </p>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="scroll-mt-8 border-b border-rule py-12 sm:py-14"
        >
          <div className="grid gap-10 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-10">
            <h2 className="font-serif text-sm uppercase tracking-[0.16em] text-muted">
              Work
            </h2>
            <div className="flex flex-col gap-10">
              <article>
                <h3 className="font-serif text-2xl tracking-tight">
                  What the shop does
                </h3>
                <p className="mt-4">
                  Sites. Ads. The system behind a job, when the reports or the
                  tools are lying or missing. Google, Facebook, TikTok,
                  YouTube. Video, photos, and the pages people land on.
                </p>
                <p className="mt-4">
                  The tools change with the job. I learn the one we need.
                </p>
              </article>

              <article>
                <h3 className="font-serif text-2xl tracking-tight">
                  ProfitGuard
                </h3>
                <p className="mt-1 text-sm text-muted">A small project</p>
                <p className="mt-4">
                  Ad reports were showing return and hiding cost. I built a
                  page that asks whether a campaign still makes money after
                  Google, Meta, and TikTok fees.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-rule py-12 sm:py-14">
          <div className="grid gap-6 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-10">
            <h2 className="font-serif text-sm uppercase tracking-[0.16em] text-muted">
              How I work
            </h2>
            <div className="flex flex-col gap-5">
              <p>
                I start with the goal. What are we trying to grow, who is it
                for, and what has to be true for it to work. Then I get into
                the tools and learn the details.
              </p>
              <p>
                If I don’t know a platform, I live in it until I understand it.
                Most of the time I can run it. Once in a while the right call
                is to hand that piece to someone who should own it.
              </p>
              <p>
                Same pattern the whole way. Spot the opening, learn the work,
                stay with it.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 py-12 sm:py-14">
          <div className="grid gap-6 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-10">
            <h2 className="font-serif text-sm uppercase tracking-[0.16em] text-muted">
              Contact
            </h2>
            <div>
              <p className="font-serif text-2xl tracking-tight">
                If you have a job with a real goal, write.
              </p>
              <p className="mt-4 text-muted">Remote. Indiana.</p>
              <ul className="mt-8 flex flex-col gap-3">
                <li>
                  <ExternalLink href={links.email}>
                    sayremd@gmail.com
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href={links.phone}>
                    (513) 646-6767
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href={links.linkedin}>
                    linkedin.com/in/mikedsayre
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href={links.mike}>mikedsayre.com</ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule pb-8 pt-5 text-sm text-muted">
        <p>© 2026 Swan Lake Digital</p>
      </footer>
    </div>
  );
}

import PageLayout from "../PageLayout";
import SectionSubtitle from "../../components/SectionSubtitle";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "chloe.gavv@gmail.com",
    href: "mailto:chloe.gavv@gmail.com",
  },
  {
    label: "GitHub",
    value: "cmgvc",
    href: "https://github.com/cmgvc",
  },
  {
    label: "LinkedIn",
    value: "chloe-gavrilovic",
    href: "https://www.linkedin.com/in/chloe-gavrilovic-b911551b4/",
  },
];

export default function Contact() {
  return (
    <PageLayout label="Contact" title="Get in touch" divId="contact-div" icon={null}>
      <SectionSubtitle>
        I’m based in Ottawa and open to software roles, collaborations, and
        problems worth getting specific about.
      </SectionSubtitle>

      <ul className="mt-12 w-full border-t border-line">
        {CONTACT_LINKS.map(({ label, value, href }) => (
          <li key={label} className="border-b border-line">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="py-5 flex items-baseline justify-between gap-6 group"
            >
              <span className="text-[11px] tracking-[0.22em] uppercase text-clay">
                {label}
              </span>
              <span className="font-display text-2xl sm:text-3xl text-ink group-hover:text-clay transition-colors text-right">
                {value}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="mt-16 text-[11px] tracking-[0.18em] uppercase text-mist">
        <p>© 2026 Chloe Gavrilovic</p>
      </footer>
    </PageLayout>
  );
}

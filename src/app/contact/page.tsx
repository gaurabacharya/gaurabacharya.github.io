import { SOCIALS } from "@/data/socials";
import SocialCard from "@/components/ui/SocialCard";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — Gaurab Acharya",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen animate-rise items-center px-5 sm:px-10 lg:px-[56px] pb-[100px] pt-[110px] lg:pt-[150px]">
      <div className="mx-auto w-full max-w-[1000px]">
        <p className="m-0 mb-[18px] font-mono text-xs uppercase tracking-[0.14em] text-navy">
          Contact
        </p>
        <h1 className="m-0 mb-[24px] font-display text-[clamp(46px,7vw,104px)] font-black leading-[.92] tracking-[-0.025em] text-ink">
          Let&rsquo;s talk
        </h1>
        <p className="m-0 mb-[40px] max-w-[520px] text-[19px] leading-[1.6] text-ink/85 [text-wrap:pretty]">
          Open to conversations about AI engineering, retrieval systems, and full-stack product work.
        </p>
        <ContactForm />
        <div className="grid gap-[20px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {SOCIALS.map((s) => (
            <SocialCard key={s.label} social={s} />
          ))}
        </div>
      </div>
    </div>
  );
}

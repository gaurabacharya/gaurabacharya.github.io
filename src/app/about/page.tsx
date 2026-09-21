import Button from "@/components/ui/Button";

export const metadata = {
  title: "About — Gaurab Acharya",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1100px] animate-rise px-5 sm:px-10 lg:px-[56px] pb-[100px] pt-[110px] lg:pt-[150px]">
      <div className="grid items-start gap-[56px] md:grid-cols-[minmax(0,1fr)_minmax(0,.8fr)]">
        <div>
          <p className="m-0 mb-[18px] font-mono text-xs uppercase tracking-[0.14em] text-navy">
            About
          </p>
          <h1 className="m-0 mb-[32px] font-display text-[clamp(40px,5.6vw,80px)] font-black leading-[.94] tracking-[-0.025em] text-ink">
            Engineer first,
            <br />
            <span className="font-flourish text-navy" style={{ fontStyle: "italic", fontWeight: 400 }}>
              lead second
            </span>
          </h1>
          <p className="m-0 mb-[22px] text-[18px] leading-[1.7] text-ink/85 [text-wrap:pretty]">
            I&rsquo;m an AI Engineering Lead at QuoteMedia, where I build applications end to end and
            shape how AI gets integrated and governed internally. Most of my work lives in the seams —
            the data pipeline feeding the model, the retrieval layer keeping it honest, the interface
            making it usable.
          </p>
          <p className="m-0 mb-[22px] text-[18px] leading-[1.7] text-ink/85 [text-wrap:pretty]">
            I studied Biomedical Engineering at UBC because I couldn&rsquo;t choose between health and
            technology — and I didn&rsquo;t have to. That degree is why my project list runs from AR
            surgical guidance and portable diagnostics to genomic survival analysis, and why I&rsquo;m
            still drawn to problems where the domain matters as much as the code.
          </p>
          <p className="m-0 mb-[32px] text-[18px] leading-[1.7] text-ink/85 [text-wrap:pretty]">
            Outside work: endurance sports, which is mostly the same thing as engineering — pick a hard
            problem, break it into intervals, keep showing up.
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <Button href="/contact" variant="solid">
              Get in touch
            </Button>
            <Button href="/experience" variant="outline">
              Experience
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex aspect-[4/5] items-center justify-center rounded-card bg-beige p-[20px] text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink/55">
            Portrait
            <br />
            4:5
          </div>
          <div className="flex aspect-square items-center justify-center rounded-card border border-ink/[0.12] bg-cream-soft p-[20px] text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink/45">
            Candid / workspace
            <br />
            1:1
          </div>
        </div>
      </div>
    </div>
  );
}

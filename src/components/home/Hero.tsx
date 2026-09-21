import Image from "next/image";
import Button from "@/components/ui/Button";
import HeroChatDemo from "./HeroChatDemo";

// Drop a photo at public/images/profile/portrait.jpg and it will render here.
const PROFILE_IMAGE = "/images/profile/portrait.jpg";
const SHOW_PROFILE_IMAGE = false;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen snap-start items-center overflow-hidden px-5 sm:px-10 lg:px-[56px] pb-[56px] pt-[110px] lg:pb-[80px] lg:pt-[150px]">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-[56px] md:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]">
        <div>
          {SHOW_PROFILE_IMAGE && (
            <div className="relative mb-[24px] h-[72px] w-[72px] overflow-hidden rounded-full">
              <Image src={PROFILE_IMAGE} alt="Gaurab Acharya" fill className="object-cover" sizes="72px" />
            </div>
          )}
          <p className="m-0 mb-[24px] font-mono text-xs uppercase tracking-[0.14em] text-navy">
            AI Engineering Lead — Full-Stack
          </p>
          <h1 className="m-0 mb-[28px] font-display text-[clamp(56px,8.2vw,124px)] font-black leading-[.9] tracking-[-0.025em] text-ink">
            Gaurab
            <br />
            <span className="text-navy">Acharya</span>
          </h1>
          <p className="m-0 mb-[40px] max-w-[520px] text-[19px] leading-[1.6] text-ink/85 [text-wrap:pretty]">
            Hi welcome to my personal portfolio! I&rsquo;m currently leading AI engineering at QuoteMedia building across the AI stack from data pipelines, retrieval systems and agents, and web
            apps. Working across multiple teams with a focus on operational improvements and client products.
          </p>
          <div className="flex flex-wrap gap-[16px]">
            <Button href="/projects" variant="solid">
              View Projects
            </Button>
            <Button href="/about" variant="outline">
              About Me
            </Button>
          </div>
        </div>
        <HeroChatDemo />
      </div>
      <div className="absolute bottom-[34px] left-10 hidden sm:flex lg:left-[56px] items-center gap-[10px] font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink/45">
        Scroll <span className="h-px w-[44px] bg-ink" />
      </div>
    </section>
  );
}

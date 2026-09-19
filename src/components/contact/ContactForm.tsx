"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-card border border-ink/20 bg-cream-soft px-[16px] py-[14px] font-body text-[16px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-navy";
const labelClass = "mb-[8px] block font-mono text-xs uppercase tracking-[0.14em] text-navy";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          subject: `Portfolio message from ${data.get("name")}`,
          from_name: "Portfolio contact form",
          botcheck: data.get("botcheck") ? true : "",
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="mb-[56px] max-w-[620px] rounded-card border border-ink/10 bg-cream-soft p-[28px]"
      >
        <p className="m-0 mb-[8px] font-display text-xl font-bold text-ink">Message sent</p>
        <p className="m-0 text-[16px] leading-[1.6] text-ink/85">
          Thanks for reaching out. I&rsquo;ll reply to the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mb-[56px] max-w-[620px]">
      <p className="m-0 mb-[20px] font-display text-2xl font-bold text-ink">Send me a message</p>

      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mb-[18px]">
        <label htmlFor="cf-name" className={labelClass}>
          Name
        </label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>

      <div className="mb-[18px]">
        <label htmlFor="cf-email" className={labelClass}>
          Your email
        </label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>

      <div className="mb-[24px]">
        <label htmlFor="cf-message" className={labelClass}>
          Message
        </label>
        <textarea id="cf-message" name="message" required rows={6} className={`${inputClass} resize-y`} />
      </div>

      <div className="flex flex-wrap items-center gap-[16px]">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill bg-navy px-[28px] py-[14px] font-body text-[15px] font-semibold text-cream transition-colors hover:bg-ink disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {status === "error" && (
          <p role="alert" className="m-0 text-[15px] text-ink/85">
            Something went wrong. Please email me directly at{" "}
            <a href="mailto:gaurab_acharya@outlook.com" className="underline">
              gaurab_acharya@outlook.com
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

"use client";

import type { FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

export function EnquiryForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim() || "—";
    const text = `💬 *ENQUIRY — LIDCOHS*\n👤 *Name:* ${value("name")}\n📞 *Phone:* ${value("phone")}\n📝 *Message:* ${value("message")}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }
  return <form id="quickForm" style={{ marginTop: "1rem" }} onSubmit={submit}>
    <h4 style={{ marginBottom: ".6rem" }}>Quick Enquiry</h4>
    <div className="form-group"><input type="text" id="qName" name="name" autoComplete="name" aria-label="Your name" placeholder="Your name" required /></div>
    <div className="form-group"><input type="tel" id="qPhone" name="phone" autoComplete="tel" aria-label="Your phone number" placeholder="Your phone number" required /></div>
    <div className="form-group"><textarea id="qMsg" name="message" aria-label="Your question" rows={3} placeholder="Your question (optional)" /></div>
    <button className="btn btn-wa" type="submit">💬 Send via WhatsApp</button>
  </form>;
}

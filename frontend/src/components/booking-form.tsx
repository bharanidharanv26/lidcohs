"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { appointmentMessage, departments, readBooking, timeSlots, type Booking } from "@/lib/booking";
import { clinic, whatsappLink } from "@/lib/site";
import { localDate, useToday } from "@/lib/use-today";

export function BookingForm() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("dept")?.toLowerCase();
  // Explicit slugs also handle the punctuation in the original department labels.
  const department = departments.find((item) => item.slug === slug || item.label.toLowerCase().replace(/\s+/g, "-") === slug)?.label ?? "";
  return <AppointmentForm key={department} department={department} />;
}

function AppointmentForm({ department }: { department: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [invalid, setInvalid] = useState<Set<keyof Booking>>(new Set());
  const [status, setStatus] = useState<{ text: string; error: boolean } | null>(null);
  const today = useToday();
  const iso = today ? localDate(today) : "";

  useEffect(() => { if (dateRef.current && !dateRef.current.value) dateRef.current.value = iso; }, [iso]);
  useEffect(() => () => { if (resetTimer.current) clearTimeout(resetTimer.current); }, []);
  useEffect(() => { if (status) statusRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }); }, [status]);

  function validate(email = false): Booking | null {
    if (!formRef.current) return null;
    const booking = readBooking(formRef.current);
    const errors = new Set<keyof Booking>();
    (["name", "phone", "department", "date", "slot"] as const).forEach((key) => { if (!booking[key]) errors.add(key); });
    if (booking.phone.replace(/\D/g, "").length < 10) errors.add("phone");
    if (booking.date && booking.date < localDate()) errors.add("date");
    if (booking.age && (Number(booking.age) < 0 || Number(booking.age) > 120)) errors.add("age");
    setInvalid(errors);
    if (errors.size) {
      setStatus({ text: booking.date && booking.date < localDate() ? "Please choose today or a future date." : errors.has("age") ? "Please enter an age between 0 and 120." : email ? "Please fill in all required fields first." : "Please fill in all required fields (marked *).", error: true });
      return null;
    }
    return booking;
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const booking = validate();
    if (!booking) return;
    window.open(whatsappLink(appointmentMessage(booking)), "_blank", "noopener,noreferrer");
    setStatus({ text: "✅ WhatsApp is opening with your details pre-filled — just press SEND there. We will confirm your appointment shortly.", error: false });
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => { formRef.current?.reset(); if (dateRef.current) dateRef.current.value = localDate(); }, 2500);
  }

  function email() {
    const booking = validate(true);
    if (!booking) return;
    const subject = `Appointment Request — ${booking.name} (${booking.department})`;
    window.location.href = `mailto:${clinic.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(appointmentMessage(booking).replace(/\*/g, ""))}`;
  }

  const fieldProps = (key: keyof Booking) => ({ className: invalid.has(key) ? "invalid" : undefined, "aria-invalid": invalid.has(key) || undefined, "aria-describedby": invalid.has(key) ? "formStatus" : undefined });
  return <div className="form-card"><form id="bookingForm" ref={formRef} noValidate onSubmit={submit}>
    <div className="form-row">
      <div className="form-group"><label htmlFor="bName">Full Name <span className="req">*</span></label><input type="text" id="bName" name="name" autoComplete="name" required placeholder="Patient's full name" {...fieldProps("name")} /></div>
      <div className="form-group"><label htmlFor="bPhone">Phone Number <span className="req">*</span></label><input type="tel" id="bPhone" name="phone" autoComplete="tel" required inputMode="tel" placeholder="10-digit mobile number" {...fieldProps("phone")} /></div>
    </div>
    <div className="form-row">
      <div className="form-group"><label htmlFor="bAge">Age</label><input type="number" id="bAge" name="age" min="0" max="120" placeholder="e.g. 42" {...fieldProps("age")} /></div>
      <div className="form-group"><label htmlFor="bGender">Gender</label><select id="bGender" name="gender" defaultValue=""><option value="">Select</option>{["Male", "Female", "Other"].map((gender) => <option key={gender}>{gender}</option>)}</select></div>
    </div>
    <div className="form-group"><label htmlFor="bDept">Department / System of Medicine <span className="req">*</span></label>
      <select id="bDept" name="department" required defaultValue={department} {...fieldProps("department")}><option value="">Select department</option>{departments.map(({ label }) => <option key={label}>{label}</option>)}</select>
      <p className="form-hint">Not sure? Choose "Please Guide Me" — our team will advise the right consultation.</p>
    </div>
    <div className="form-row">
      <div className="form-group"><label htmlFor="bDate">Preferred Date <span className="req">*</span></label><input type="date" id="bDate" name="date" ref={dateRef} min={iso} required {...fieldProps("date")} /></div>
      <div className="form-group"><label htmlFor="bSlot">Preferred Time <span className="req">*</span></label><select id="bSlot" name="slot" required defaultValue="" {...fieldProps("slot")}><option value="">Select time</option>{timeSlots.map((slot) => <option key={slot}>{slot}</option>)}</select></div>
    </div>
    <div className="form-group"><label htmlFor="bNotes">Health Concern / Notes</label><textarea id="bNotes" name="notes" rows={3} placeholder="Briefly describe the concern (optional)" /></div>
    <p className={`form-status${status?.error ? " error" : ""}`} id="formStatus" ref={statusRef} hidden={!status} role="status" aria-live="polite">{status?.text}</p>
    <button type="submit" className="btn btn-primary btn-lg btn-block" id="submitBtn">💬 Send Request on WhatsApp</button>
    <div style={{ textAlign: "center", marginTop: ".7rem" }}><button type="button" className="btn btn-outline" id="emailBtn" onClick={email}>✉️ Send by Email Instead</button></div>
    <p className="form-hint" style={{ textAlign: "center", marginTop: ".9rem" }}>When you tap WhatsApp, your messaging app opens with all details pre-filled — just press <strong>Send</strong>.</p>
  </form></div>;
}

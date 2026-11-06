"use client";

import { ayushByDay, ayushSystems, dayNames } from "@/lib/schedule";
import { useToday } from "@/lib/use-today";
import { ButtonLink, Notice } from "./ui";

export function TodayCard() {
  const today = useToday();
  const day = today?.getDay();
  return <div className="today-card" id="todayCard">{today && day !== undefined && <>
    <div className="today-label">Today &nbsp;•&nbsp; {today.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</div>
    <div className="today-day">{dayNames[day]}</div>
    <div className="today-detail">
      <div className="slot"><strong>Morning — AYUSH</strong>{day === 0 ? "No fixed AYUSH OP — by prior appointment" : `${ayushByDay[day]} · 9:30 AM – 1:30 PM`}</div>
      <div className="slot"><strong>Evening — Allopathy</strong>By prior appointment · time confirmed on booking</div>
      {day === 0 ? <div className="slot"><strong>Sunday Programme</strong>Community Health · 10 AM – 1 PM</div>
        : <div className="slot"><strong>Physio / Acupuncture</strong>By prior appointment · Afternoon</div>}
    </div>
  </>}</div>;
}

export function WeekTable() {
  const day = useToday()?.getDay();
  return <div className="week-table-wrap" tabIndex={0} role="region" aria-label="Weekly clinic schedule"><table className="week-table" id="weekTable">
    <thead><tr><th scope="col">Day</th><th scope="col">AYUSH OPD<br /><small>Mon–Sat · 9:30 AM – 1:30 PM</small></th><th scope="col">Allopathy &amp; Other Services<br /><small>By prior appointment</small></th><th scope="col">Physio / Acupuncture</th></tr></thead>
    <tbody>{[1, 2, 3, 4, 5, 6, 0].map((index) => <tr key={index} data-day={index} className={`${index === 0 ? "sunday" : ""}${day === index ? " today-row" : ""}`.trim() || undefined}>
      <td>{dayNames[index]}</td>
      <td>{index === 0 ? <>— <small>(no fixed OP)</small></> : ayushByDay[index]}</td>
      {index === 1 && <td rowSpan={7} className="row-span">By prior appointment<br /><small>(time confirmed on booking)</small></td>}
      {index === 1 && <td rowSpan={6} className="row-span">By prior appointment<br /><small>(afternoon session)</small></td>}
      {index === 0 && <td>Community Programmes<br /><small>10:00 AM – 1:00 PM</small></td>}
    </tr>)}</tbody>
  </table></div>;
}

export function TodayMini() {
  const today = useToday();
  const day = today?.getDay();
  return <span id="todayMini">{day === undefined ? "Loading…" : day === 0 ? "Sunday — no fixed AYUSH OP · all services by prior appointment · Community programme 10 AM–1 PM" : `${dayNames[day]} — AYUSH: ${ayushByDay[day]} (9:30 AM–1:30 PM) · Allopathy & other services by prior appointment`}</span>;
}

export function AyushSchedule() {
  const day = useToday()?.getDay();
  return <><div className="grid-2">{ayushSystems.map((system) => <div key={system.slug} className={`card system-card${day !== undefined && system.days.includes(day) ? " is-today" : ""}`} data-ayush-days={system.days.join(",")}>
    <div className="card-icon">{system.icon}</div><h3>{system.name}</h3><p className="days">{system.schedule}</p><p>{system.description}</p>
    <div className="section-ctas" style={{ marginTop: ".8rem" }}><ButtonLink variant="primary" href={`/${system.slug}`}>Explore {system.name}</ButtonLink><ButtonLink variant="outline" href={`/book?dept=${system.slug}`}>Book Appointment</ButtonLink></div>
  </div>)}</div>
    <Notice icon="📅" style={{ marginTop: "2rem" }}><strong>Today:</strong> <span id="todaySystem">{day === undefined ? "checking…" : day === 0 ? "No fixed AYUSH OP — consultations are by prior appointment" : `Morning AYUSH OP today features ${ayushByDay[day]} · 9:30 AM – 1:30 PM`}</span></Notice>
  </>;
}

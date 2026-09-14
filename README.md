# LIDCOHS — Little Drops Composite Health Services

**🔴 LIVE: https://lidcohs.vercel.app**

Professional **multi-page** website for the LIDCOHS multi-disciplinary community clinic (Selaiyur, Tambaram, Chennai).

**Tagline:** *Care Beyond the Cure*

---

## 📄 Pages

| Page | Purpose | Special feature |
|---|---|---|
| `index.html` | Homepage | Exact requested flow: hero → photo → why → one roof → services → today's timings → philosophy → community → care banner, plus gallery |
| `about.html` | Vision & approach | Patient-centred choice, AYUSH balance, 5-step approach, doorstep consultation |
| `services.html` | All services overview | 6 service cards + "Please Guide Me" CTA |
| `ayush.html` | AYUSH OPD | **Auto-highlights today's system** (Ayurveda/Homoeopathy/Siddha/Naturopathy) |
| `allopathy.html` | Evening OPD | What-we-handle list + emergency guidance |
| `physiotherapy.html` | Physio & Acupuncture | Conditions treated + how sessions work |
| `pharmacy.html` | Medical Dispensary | 4-step dispensing process |
| `laboratory.html` | Thyrocare Lab | Test categories + 4-step booking flow |
| `community.html` | Sunday programmes | Activity catalogue + join CTA |
| `timings.html` | Full timetable | **Live "Today" card** + auto-highlighted row |
| `contact.html` | Contact & map | Embedded map + **WhatsApp quick-enquiry form** + FAQ |
| `book.html` | Booking | Form → formatted WhatsApp message + email option; dept auto-preselected from service pages |

## 🖼️ Clinic photos (image folder)

Current photos in use (spaces in filenames are fine — the site encodes them):

```
image/
  logo.jpg                ← header logo on every page
  clinic front.jpg        ← homepage hero + gallery + about doorstep section
  clinic room.jpg         ← gallery, about, allopathy, pharmacy
  normal photo.jpg        ← gallery, about, ayush, physiotherapy
  clinic_banner.jpeg      ← gallery
  gallery/reception.jpg   ← (optional) add to fill the gallery placeholder
  gallery/lab.jpg         ← (optional) add to fill the gallery placeholder
```

Any photo that is missing shows a styled placeholder automatically — the site never looks broken.
Recommended: landscape ~1600×900 px.

## 📲 How booking notifications work

### WhatsApp → +91 80159 95267 (working now)
Submitting `book.html` opens WhatsApp with this pre-filled message — patient just presses **Send**:

```
🏥 NEW APPOINTMENT REQUEST — LIDCOHS
👤 Name · 📞 Phone · 🎂 Age/Gender
⚕️ Department · 📅 Date · ⏰ Time · 📝 Notes
```

### Email — activate when ready (2 minutes)
1. Open https://formsubmit.co, enter your receiving email, confirm the verification mail once.
2. Copy the AJAX endpoint, e.g. `https://formsubmit.co/ajax/your@email.com`.
3. Paste it in `app.js`:

```js
var CONFIG = {
  clinicWhatsApp: "918015995267",
  clinicEmail: "lidcohsclinic@gmail.com",   // ← your mail id here
  formEndpoint: "https://formsubmit.co/ajax/your@email.com"  // ← paste here
};
```

Every booking then emails you automatically **and** opens WhatsApp — both channels fire together.

## 🚀 Run & publish

```bash
npx serve .
```

### Deploy to Vercel (free HTTPS) — already done ✅
Live site: **https://lidcohs.vercel.app**

To update the site after making changes:
```bash
vercel --prod --yes
```

Or without a terminal: drag the folder onto [Vercel Drop](https://vercel.com/new) / [Netlify Drop](https://app.netlify.com/drop).

## 🔧 Config (`app.js`, top of file)

| Key | Purpose | Current |
|---|---|---|
| `clinicWhatsApp` | Receiving WhatsApp number | 918015995267 |
| `clinicEmail` | Receiving email | lidcohsclinic@gmail.com |
| `formEndpoint` | Optional auto-email endpoint | "" (mailto fallback) |

## 📞 Clinic details shown on the site

- **Address:** No. 14, Easwari Nagar, Near Ibaco, Selaiyur, Tambaram, Chennai – 600073
- **Phone:** +91 99402 79752 · **WhatsApp:** +91 80159 95267
- **Email:** lidcohsclinic@gmail.com

/* ============================================================
   LIDCOHS — app.js  (multi-page)
   Booking → WhatsApp (8015995267) + Email · timings · nav · gallery
   ============================================================ */

/* ------- CONFIG: change these lines anytime ------- */
var CONFIG = {
  // WhatsApp number that RECEIVES booking messages (country code + number, no "+")
  clinicWhatsApp: "918015995267",

  // Email that RECEIVES bookings.
  clinicEmail: "lidcohsclinic@gmail.com",

  // Optional: paste a FormSubmit AJAX endpoint later for automatic email
  // delivery, e.g. "https://formsubmit.co/ajax/your@email.com". "" = mailto fallback.
  formEndpoint: ""
};

var WA_NUMBER = CONFIG.clinicWhatsApp;

/* ---------- tiny helpers ---------- */
function $(sel, root) { return (root || document).querySelector(sel); }
function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

function waLink(text) {
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
}

var WA_GENERAL = "Hello LIDCOHS, I would like to know more about your services.";

/* ============================================================
   1. NAV (hamburger, dropdown, close button, active link)
   ============================================================ */
(function navInit() {
  var hamburger = $("#hamburger");
  var nav = $("#nav");
  var navClose = $("#navClose");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
  }
  if (navClose && nav) {
    navClose.addEventListener("click", function () {
      nav.classList.remove("open");
      document.body.style.overflow = "";
    });
  }
  if (nav) {
    $all("a, button", nav).forEach(function (el) {
      el.addEventListener("click", function () {
        if (window.innerWidth <= 860 && el.tagName === "A") {
          nav.classList.remove("open");
          document.body.style.overflow = "";
        }
      });
    });
  }

  // dropdown (Services)
  $all(".dropdown-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var dd = btn.closest(".dropdown");
      var wasOpen = dd.classList.contains("open");
      $all(".dropdown.open").forEach(function (d) { d.classList.remove("open"); });
      dd.classList.toggle("open", !wasOpen);
    });
  });
  document.addEventListener("click", function () {
    $all(".dropdown.open").forEach(function (d) { d.classList.remove("open"); });
  });

  // highlight current page in nav
  var page = (location.pathname.split("/").pop() || "index.html").split("?")[0];
  $all(".nav a").forEach(function (a) {
    var href = a.getAttribute("href") || "";
    if (href === page) a.classList.add("active");
  });
})();

/* ============================================================
   2. TODAY'S TIMINGS (home + timings page)
   ============================================================ */
(function buildToday() {
  var card = $("#todayCard");
  if (card) {
    var now = new Date();
    var day = now.getDay();
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ayush = {
      1: "Ayurveda", 4: "Ayurveda",
      2: "Homoeopathy", 5: "Homoeopathy",
      3: "Siddha", 6: "Siddha",
      0: "Naturopathy (by appointment)"
    }[day];

    card.innerHTML =
      '<div class="today-label">Today &nbsp;•&nbsp; ' +
      now.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) + '</div>' +
      '<div class="today-day">' + dayNames[day] + '</div>' +
      '<div class="today-detail">' +
        '<div class="slot"><strong>Morning — AYUSH</strong>' + ayush + ' · 9:30 AM – 1:30 PM</div>' +
        '<div class="slot"><strong>Evening — Allopathy</strong>' +
          (day === 0 ? "Closed today" : "General OP · 5:30 PM – 9:00 PM") + '</div>' +
        (day === 0
          ? '<div class="slot"><strong>Sunday Programme</strong>Community Health · 10 AM – 1 PM</div>'
          : '<div class="slot"><strong>Physio / Acupuncture</strong>By appointment · Afternoon</div>') +
      '</div>';
  }

  var row = $("#weekTable tr[data-day=\"" + new Date().getDay() + "\"]");
  if (row) row.classList.add("today-row");
})();

/* ============================================================
   3. AUTO-PROBE IMAGES (gallery + split photos)
   Any <img data-probe="image/name.jpg"> shows a styled placeholder
   automatically if the file does not exist yet.
   ============================================================ */
(function probeImages() {
  $all("img[data-probe]").forEach(function (img) {
    function fallback() {
      var wrap = img.parentElement;
      var icon = img.getAttribute("data-icon") || "📷";
      var cap = img.getAttribute("data-cap") || "";
      wrap.classList.add("ph-fallback");
      wrap.innerHTML =
        '<div><div class="big">' + icon + '</div>' +
        '<strong>' + cap + '</strong><br/>' +
        '<small style="color:var(--muted)">Add photo: <code>' +
        img.getAttribute("data-probe") + '</code></small></div>';
    }
    img.addEventListener("error", fallback);
    if (img.complete && img.naturalWidth === 0) fallback();
  });
})();

/* ============================================================
   4. SCROLL REVEAL
   ============================================================ */
(function revealInit() {
  var els = $all(".card, .service-card, .mini-card, .flow-strip, .today-card, .week-table-wrap, .contact-item, .contact-map, .patient-block, .step-card, .gallery-item, .split-media, .form-card, .book-side > *");
  els.forEach(function (el) { el.classList.add("reveal"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("visible"); });
  }
})();

/* ============================================================
   5. BOOKING PAGE (book.html)
   ============================================================ */
(function bookingInit() {
  var form = $("#bookingForm");
  if (!form) return; // not on booking page

  var statusBox = $("#formStatus");
  var submitBtn = $("#submitBtn");
  var emailBtn = $("#emailBtn");
  var dateInput = $("#bDate");

  // today's ISO date as min + default
  var d = new Date();
  var iso = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  dateInput.min = iso;
  if (!dateInput.value) dateInput.value = iso;

  // preselect department from URL: book.html?dept=physiotherapy etc.
  var params = new URLSearchParams(location.search);
  var dept = params.get("dept");
  if (dept) {
    var sel = $("#bDept");
    $all("option", sel).forEach(function (o) {
      if (o.value.toLowerCase().replace(/\s+/g, "-") === dept.toLowerCase()) sel.value = o.value;
    });
  }

  function val(id) { var el = $("#" + id); return el ? el.value.trim() : ""; }

  function formatDate(isoDate) {
    if (!isoDate) return "—";
    var p = isoDate.split("-");
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return p[2] + " " + months[Number(p[1]) - 1] + " " + p[0];
  }

  function buildMessage() {
    var notes = val("bNotes") || "—";
    var ageG = [val("bAge"), val("bGender")].filter(Boolean).join(", ") || "—";
    return (
      "🏥 *NEW APPOINTMENT REQUEST — LIDCOHS*\n" +
      "━━━━━━━━━━━━━━━━━━━━\n" +
      "👤 *Name:* " + val("bName") + "\n" +
      "📞 *Phone:* " + val("bPhone") + "\n" +
      "🎂 *Age / Gender:* " + ageG + "\n" +
      "⚕️ *Department:* " + val("bDept") + "\n" +
      "📅 *Preferred Date:* " + formatDate(val("bDate")) + "\n" +
      "⏰ *Preferred Time:* " + val("bSlot") + "\n" +
      "📝 *Concern / Notes:* " + notes + "\n" +
      "━━━━━━━━━━━━━━━━━━━━\n" +
      "✅ _Sent from LIDCOHS website booking form_"
    );
  }

  function validate() {
    var ok = true;
    ["bName", "bPhone", "bDept", "bDate", "bSlot"].forEach(function (id) {
      var el = $("#" + id);
      if (!el.value.trim()) { el.classList.add("invalid"); ok = false; }
      else el.classList.remove("invalid");
    });
    if (val("bPhone").replace(/\D/g, "").length < 10) {
      $("#bPhone").classList.add("invalid");
      ok = false;
    }
    return ok;
  }

  function showStatus(text, isError) {
    statusBox.textContent = text;
    statusBox.classList.toggle("error", !!isError);
    statusBox.hidden = false;
    statusBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function sendToEndpoint() {
    if (!CONFIG.formEndpoint) return;
    fetch(CONFIG.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        name: val("bName"), phone: val("bPhone"),
        age: val("bAge"), gender: val("bGender"),
        department: val("bDept"), date: val("bDate"),
        slot: val("bSlot"), notes: val("bNotes"),
        _subject: "New Appointment Request — LIDCOHS Website"
      })
    }).catch(function () { /* WhatsApp is primary; ignore email errors */ });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) {
      showStatus("Please fill in all required fields (marked *).", true);
      return;
    }
    sendToEndpoint();
    window.open(waLink(buildMessage()), "_blank");
    showStatus("✅ WhatsApp is opening with your details pre-filled — just press SEND there. We will confirm your appointment shortly.", false);
    setTimeout(function () { form.reset(); dateInput.value = iso; }, 2500);
  });

  emailBtn.addEventListener("click", function () {
    if (!validate()) {
      showStatus("Please fill in all required fields first.", true);
      return;
    }
    var subject = "Appointment Request — " + val("bName") + " (" + val("bDept") + ")";
    location.href = "mailto:" + CONFIG.clinicEmail +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(buildMessage().replace(/\*/g, ""));
  });
})();

/* ============================================================
   6. Contact page quick-form → opens booking page prefilled
   ============================================================ */
(function quickEnquiry() {
  var q = $("#quickForm");
  if (!q) return;
  q.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = $("#qName").value.trim();
    var phone = $("#qPhone").value.trim();
    var msg = $("#qMsg").value.trim();
    var text =
      "💬 *ENQUIRY — LIDCOHS*\n" +
      "👤 *Name:* " + (name || "—") + "\n" +
      "📞 *Phone:* " + (phone || "—") + "\n" +
      "📝 *Message:* " + (msg || "—");
    window.open(waLink(text), "_blank");
  });
})();

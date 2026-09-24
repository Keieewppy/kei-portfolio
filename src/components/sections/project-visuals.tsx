import type { Project } from "@/data/profile";

/** Animated phone mockups (pure CSS, see globals.css) that cycle through each app's key screens. */
export function ProjectVisual({ id }: { id: Project["id"] }) {
  if (id === "beclazo") return <JerseyVisual />;

  return (
    <div className="phone" aria-hidden>
      <div className="phone-screen">
        <div className="phone-notch" />
        {id === "vezora" && <VezoraScreens />}
        {id === "healthhub" && <HealthHubScreens />}
        {id === "gokei" && <GoKeiScreens />}
      </div>
    </div>
  );
}

function VezoraScreens() {
  const tiles = ["Video consult", "Home visit", "Self check", "Lab tests", "Medicines", "Checkups", "Skin test", "Vitals", "Guides"];
  const doctors = [
    ["Dr. Ananya Rao", "8 yrs · ★ 4.8"],
    ["Dr. Vikram Shah", "11 yrs · ★ 4.9"],
    ["Dr. Meera Iyer", "6 yrs · ★ 4.7"],
  ];
  return (
    <div className="phone-slides">
      <div className="phone-slide vz">
        <div className="sm">Good morning,</div>
        <div className="t">How are you feeling?</div>
        <div className="search">Search doctors, symptoms…</div>
        <div className="grid3">
          {tiles.map((t) => (
            <div className="tile" key={t}>
              <i />
              {t}
            </div>
          ))}
        </div>
      </div>
      <div className="phone-slide vz">
        <div className="t">Dermatologists</div>
        <div className="sm">12 available today</div>
        {doctors.map(([n, m]) => (
          <div className="card" key={n}>
            <div className="av" />
            <div>
              <div className="t" style={{ fontSize: 10 }}>{n}</div>
              <div className="sm">{m}</div>
            </div>
          </div>
        ))}
        <div className="btnx">Book 4:30 PM slot</div>
      </div>
      <div className="phone-slide vz call">
        <div className="peer">
          <div className="pip" />
        </div>
        <div className="ctrl">
          <b /><b /><b /><b />
        </div>
      </div>
    </div>
  );
}

function HealthHubScreens() {
  const beds = "..o.r.o...o.r..o...".split("").slice(0, 15);
  return (
    <div className="phone-slides" style={{ animationDelay: "-3s" }}>
      <div className="phone-slide hh">
        <div className="sm">Admin</div>
        <div className="t">Dashboard</div>
        <div className="stats">
          <div className="st"><b>18</b><span>Beds free</span></div>
          <div className="st"><b>42</b><span>Blood units</span></div>
          <div className="st"><b>7</b><span>Pending</span></div>
          <div className="st"><b>₹84k</b><span>Billed</span></div>
        </div>
        <div className="row">Low stock: Paracetamol <span className="pill">Low</span></div>
      </div>
      <div className="phone-slide hh">
        <div className="t">Ward A · Beds</div>
        <div className="sm">Tap a bed to admit or discharge</div>
        <div className="beds">
          {beds.map((b, i) => (
            <i key={i} className={`bed ${b === "o" ? "o" : b === "r" ? "r" : ""}`} />
          ))}
        </div>
        <div className="sm">Blood bank</div>
        <div className="row">O+ <span className="bar"><i style={{ width: "78%" }} /></span> 14</div>
        <div className="row">B− <span className="bar"><i style={{ width: "22%" }} /></span> 3</div>
      </div>
      <div className="phone-slide hh">
        <div className="t">Approvals</div>
        <div className="sm">Patient requests</div>
        <div className="row">BED2001 · Reserve bed <span className="pill">Pending</span></div>
        <div className="row">BLD2001 · O+ × 1 <span className="pill g">Approved</span></div>
        <div className="row">MED3001 · Order <span className="pill g">Paid</span></div>
        <div className="row">MED3002 · Order <span className="pill">Counter</span></div>
      </div>
    </div>
  );
}

function GoKeiScreens() {
  return (
    <div className="phone-slides" style={{ animationDelay: "-6s" }}>
      <div className="phone-slide gk">
        <div className="sm">New payment link</div>
        <div className="amt">₹1,499</div>
        <div className="box">For <span>Jersey order #218</span></div>
        <div className="box">Expires <span>in 24 hours</span></div>
        <div className="btnx">Create link</div>
      </div>
      <div className="phone-slide gk">
        <div className="t">Share link</div>
        <div className="box" style={{ fontFamily: "var(--font-mono)" }}>pay.gokei.in/l/x7Qa</div>
        <div className="box">WhatsApp <span>→</span></div>
        <div className="box">Copy link <span>→</span></div>
        <div className="box">QR code <span>→</span></div>
      </div>
      <div className="phone-slide gk">
        <div className="t">Dashboard</div>
        <div className="sm">Today</div>
        <div className="amt">₹12,840</div>
        <div className="box">#218 · ₹1,499 <span className="ok">Paid</span></div>
        <div className="box">#217 · ₹899 <span className="ok">Paid</span></div>
        <div className="box">#216 · ₹2,100 <span>Pending</span></div>
      </div>
    </div>
  );
}

/** Original jersey illustration with a custom name set, a nod to BeClazo's SVG jersey work. */
function JerseyVisual() {
  return (
    <svg viewBox="0 0 240 260" className="w-[230px] max-w-full drop-shadow-2xl" aria-hidden>
      <defs>
        <linearGradient id="jersey" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f1ea" />
          <stop offset="1" stopColor="#d9d3c4" />
        </linearGradient>
      </defs>
      <path
        d="M78 18 L100 10 Q120 26 140 10 L162 18 L214 48 L196 96 L172 86 L172 246 Q120 256 68 246 L68 86 L44 96 L26 48 Z"
        fill="url(#jersey)"
        stroke="#2ec4b6"
        strokeWidth="3"
      />
      <path d="M100 10 Q120 26 140 10" fill="none" stroke="#e9b872" strokeWidth="5" />
      <text x="120" y="112" textAnchor="middle" style={{ fontFamily: "var(--font-display)" }} fontWeight="800" fontSize="26" fill="#0d1a2a" letterSpacing="3">
        KEI
      </text>
      <text x="120" y="200" textAnchor="middle" style={{ fontFamily: "var(--font-display)" }} fontWeight="800" fontSize="84" fill="#0d1a2a">
        10
      </text>
    </svg>
  );
}

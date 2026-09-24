// All portfolio content lives here, so you can update text without touching components.

export const profile = {
  name: "Chaitanya Yadav",
  alias: "Kei",
  role: "Software Developer",
  location: "Delhi, India",
  email: "raoshab2543@gmail.com",
  github: "https://github.com/Keieewppy",
  githubHandle: "Keieewppy",
  linkedin: "https://www.linkedin.com/in/chaitanya-yadav-a6271428b/",
  tagline: "I build apps people can actually use.",
  intro:
    "I take products from the first screen to the backend behind it. I build Flutter and React Native apps and Node.js backends, and I co-founded BeClazo, where the code has to work for a real business.",
};

export type Stat = { value: number; suffix?: string; prefix?: string; label: string };

export type Project = {
  id: "vezora" | "healthhub" | "gokei" | "beclazo";
  name: string;
  kind: string;
  status?: string;
  description: string;
  stats: Stat[];
  stack: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "vezora",
    name: "Vezora",
    kind: "Telemedicine app · Android & iOS",
    description:
      "A full healthcare app: find a doctor by specialty, book a slot, and join a video consult with a live camera preview. It also covers lab tests, prescription uploads, family health records, medicine reminders and subscription plans. I designed the brand and every screen.",
    stats: [
      { value: 31, label: "screens" },
      { value: 12, suffix: "+", label: "user flows" },
      { value: 2, label: "platforms" },
    ],
    stack: ["React Native", "Expo", "expo-camera", "React Navigation", "UI/UX"],
    repo: "https://github.com/Keieewppy/vezora-telemedicine-app",
  },
  {
    id: "healthhub",
    name: "HealthHUB",
    kind: "Hospital management · Flutter",
    description:
      "One app, three roles. Admins manage everything and set staff permissions, staff approve requests at the counter, and patients reserve beds, order blood and buy medicines. Every change syncs to every device in real time.",
    stats: [
      { value: 3, label: "user roles" },
      { value: 4, label: "modules" },
      { value: 1, prefix: "~", suffix: "s", label: "cross-device sync" },
    ],
    stack: ["Flutter", "Dart", "Provider", "Firebase Firestore", "Material 3"],
    repo: "https://github.com/Keieewppy/healthhub-hospital-app",
  },
  {
    id: "gokei",
    name: "GoKEI",
    kind: "Merchant payments platform",
    status: "In progress",
    description:
      "Payment links for Indian merchants. The first version does one flow end to end: a merchant creates a link, shares it, the customer pays, and the payment lands on a live dashboard.",
    stats: [
      { value: 1, label: "core flow" },
      { value: 4, label: "services" },
    ],
    stack: ["Flutter", "Node.js", "Express", "Supabase", "Razorpay"],
  },
  {
    id: "beclazo",
    name: "BeClazo",
    kind: "Cloud kitchen + football jersey brand",
    status: "Co-founder",
    description:
      "The startup I run with two friends. I own the tech and operations side: brand identity and web pages, an inventory and order system built from raw WhatsApp exports, and custom SVG jersey name sets for customer orders.",
    stats: [
      { value: 2, label: "business arms" },
      { value: 3, label: "co-founders" },
    ],
    stack: ["HTML/CSS", "Brand design", "SVG", "Inventory systems"],
  },
];

export const stack = [
  { group: "Mobile", items: ["Flutter", "React Native (Expo)", "Android", "iOS"] },
  { group: "Web & backend", items: ["Node.js · Express", "REST APIs", "HTML · CSS · JS", "API integration"] },
  { group: "Data & services", items: ["Firebase Firestore", "Supabase · PostgreSQL", "SQL", "Razorpay"] },
  { group: "Languages & craft", items: ["Java · Python", "C · C++ · Dart", "UI/UX design", "Git"] },
];

export const marquee = [
  "Flutter", "React Native", "Node.js", "Express", "Firebase", "Supabase",
  "PostgreSQL", "Razorpay", "Java", "Python", "Dart", "UI/UX",
];

export const journey = [
  {
    when: "Jun 2026 — now",
    title: "Co-Founder & Developer",
    org: "BeClazo",
    text: "Running the tech and operations side of a cloud kitchen and football jersey brand, and taking on freelance web and app work alongside it.",
  },
  {
    when: "Aug 2026",
    title: "Shipped Vezora & HealthHUB",
    org: "",
    text: "A 31-screen telemedicine app in React Native and a real-time hospital management app in Flutter + Firestore.",
  },
  {
    when: "2023 — 2027",
    title: "BCA",
    org: "DITM, Delhi",
    text: "Bachelor of Computer Applications. Coursework in data structures, OOP, databases, web technologies and AI.",
  },
];

// Central content for the portfolio — edit here to update the whole site.

export const profile = {
  name: "Syed Muneeb Ur Rehman",
  title: "Software Engineer",
  location: "Karachi, Pakistan",
  email: "s.muneeb96@gmail.com",
  phones: ["+92 336 2520190", "+92 321 2855136"],
  phoneTel: ["+923362520190", "+923212855136"],
  linkedin: "https://linkedin.com/in/syedmuneeburrehman",
  whatsapp:
    "https://wa.me/923362520190?text=Hi%20Muneeb%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.",
  resume: "/Muneeb-SoftwareEngineer.pdf",
};

export const stats = [
  { to: 7, suffix: "+", label: "Years exp." },
  { to: 10, suffix: "+", label: "Products" },
  { to: 2, suffix: "", label: "Platforms" },
];

// Rotating roles for the hero typewriter
export const roles = [
  "Android Developer",
  "React & Frontend Developer",
  "Kotlin • Java • MVVM • Coroutines",
  "React • Next.js • Redux",
  "Cross-platform Engineer",
];

// Lines for the hero terminal. type: "cmd" (typed) or "out" (printed). html allows colored spans.
export type TermLine = { k: "cmd"; t: string } | { k: "out"; h: string };
export const terminal: TermLine[] = [
  { k: "cmd", t: "whoami" },
  { k: "out", h: '<span class="g">Syed Muneeb Ur Rehman</span> <span class="m">— Software Engineer · 7+ yrs</span>' },
  { k: "cmd", t: "cat stack.json" },
  { k: "out", h: "{" },
  { k: "out", h: '  <span class="b">"mobile"</span>: <span class="o">"Kotlin · MVVM · Coroutines · ML Kit"</span>,' },
  { k: "out", h: '  <span class="b">"web"</span>:    <span class="o">"React · Next.js · Redux · Tailwind"</span>,' },
  { k: "out", h: '  <span class="b">"years"</span>:  <span class="y">7</span>' },
  { k: "out", h: "}" },
  { k: "cmd", t: "./status --hire" },
  { k: "out", h: '<span class="g">● available</span> <span class="m">for Android &amp; Frontend roles</span>' },
];

export const skillGroups = [
  {
    slug: "mobile",
    title: "Android",
    items: ["Kotlin", "Java", "MVVM", "Coroutines", "Flow", "LiveData", "ViewModel", "Room", "Retrofit", "Firebase", "CameraX", "ML Kit", "Material 3", "Hilt / DI", "Gradle"],
  },
  {
    slug: "frontend",
    title: "Web",
    items: ["React.js", "Next.js", "Redux", "Redux Toolkit", "JavaScript ES6", "jQuery", "Material UI", "Chakra UI", "Bootstrap 5", "Tailwind", "SCSS", "HTML5 / CSS3"],
  },
  {
    slug: "tooling",
    title: "Practice & AI",
    items: ["REST APIs", "Agile / Scrum", "Git / Bitbucket", "Claude Code", "Cursor AI", "Prompt Engineering", "CI workflows", "Crashlytics", "Play Console"],
  },
];

export type Project = { name: string; kind: string; points: string[] };
export type Role = {
  role: string;
  company: string;
  meta: string;
  from: string;
  to: string;
  current?: boolean;
  projects: Project[];
};

export const experience: Role[] = [
  {
    role: "Android Developer",
    company: "Al-Raqtan (SMC) Pvt Ltd",
    meta: "Karachi, Pakistan · Kotlin · MVVM · Material 3",
    from: "Aug 2025",
    to: "Present",
    current: true,
    projects: [
      {
        name: "Raqtan HRM",
        kind: "attendance app",
        points: [
          "Single-activity Kotlin app with Coroutines & Flow and a modern Material 3 UI.",
          "Punch in/out with live geofencing, office QR verification and selfie face detection via CameraX + ML Kit + GPS.",
          "Secure auth: Retrofit/OkHttp, biometric login, encrypted storage and automatic token refresh.",
        ],
      },
      {
        name: "QavaShop",
        kind: "e-commerce app",
        points: [
          "Buy-Now-Pay-Later split-payment feature with dynamic UI and English/Arabic bilingual support.",
          "Biometric + Google Sign-In login and Google Play Core in-app updates with interrupted-update recovery.",
          "Built the Product Review module end-to-end; cut startup crashes via lifecycle & null-state fixes (Crashlytics).",
        ],
      },
      {
        name: "SphereY Pro",
        kind: "field-service app",
        points: [
          "Made the app compliant with Android's 16 KB memory-page requirement via Gradle/AGP/native upgrades.",
          "Built full video capture-preview-upload for service completion & technical reports.",
        ],
      },
    ],
  },
  {
    role: "Frontend Developer",
    company: "Al-Raqtan (SMC) Pvt Ltd",
    meta: "Karachi, Pakistan · React · JavaScript · SCSS",
    from: "Oct 2020",
    to: "Jul 2025",
    projects: [
      {
        name: "Ekuep",
        kind: "e-commerce platform",
        points: [
          "Senior frontend on a large-scale bilingual store & admin panel — JavaScript, jQuery, SCSS, Laravel Blade.",
          "Led frontend for major campaigns (White Friday, Ramadan, Eid, National Days) with responsive AR/EN experiences.",
          "Integrated auth, loyalty, cart, quotation and checkout flows with backend APIs.",
        ],
      },
      {
        name: "Auto Quote",
        kind: "AI RFQ-to-quotation platform",
        points: [
          "React app: reusable UI components, forms, modals, data tables and stepper-based workflows.",
          "Built auth flows (forgot/reset password) with API integration, validation and hook-based state.",
        ],
      },
    ],
  },
  {
    role: "Frontend Developer",
    company: "Salsoft Technologies",
    meta: "Karachi, Pakistan · Frontend Engineering",
    from: "Jul 2019",
    to: "Sep 2020",
    projects: [
      {
        name: "Client web applications",
        kind: "",
        points: [
          "Built and maintained responsive, cross-browser interfaces from UI/UX designs.",
          "Collaborated across design, QA and backend in an Agile delivery workflow.",
        ],
      },
    ],
  },
];

export type Work = { tag: string; title: string; desc: string; stack: string[]; web?: string; playStore?: string };
export const work: Work[] = [
  {
    tag: "Android · HRM",
    title: "Raqtan HRM",
    desc: "Attendance platform with live geofencing, office-QR verification and selfie face-detection for on-site and remote workflows — built single-activity with Material 3.",
    stack: ["Kotlin", "Coroutines", "CameraX", "ML Kit", "Biometric"],
  },
  {
    tag: "Android · E-Commerce",
    title: "QavaShop",
    desc: "Bilingual e-commerce app featuring a Buy-Now-Pay-Later split-payment flow, biometric + Google Sign-In, and Play Core in-app updates with crash-hardened startup.",
    stack: ["Kotlin", "BNPL", "Play Core", "Crashlytics", "AR / EN"],
    playStore: "https://play.google.com/store/apps/details?id=com.bv.qavashop&hl=en",
    web: "https://qavashop.com/en/",
  },
  {
    tag: "Android · Field Service",
    title: "SphereY Pro",
    desc: "Technician app with end-to-end video capture-preview-upload for service reports, brought into compliance with Android's 16 KB memory-page requirement.",
    stack: ["Kotlin", "Gradle / AGP", "Media", "Play Core"],
    playStore: "https://play.google.com/store/apps/details?id=com.sphere.raqtan&hl=en",
    web: "https://spherey.com/en/",
  },
  {
    tag: "Web · E-Commerce",
    title: "Ekuep",
    desc: "Large-scale bilingual e-commerce platform and admin panel — led seasonal-campaign frontends and integrated loyalty, cart, quotation and checkout with backend APIs.",
    stack: ["JavaScript", "jQuery", "SCSS", "Laravel Blade"],
    web: "https://www.ekuep.com/en",
  },
  {
    tag: "Web · React",
    title: "Auto Quote",
    desc: "AI-powered RFQ-to-quotation automation. Built reusable React components, data tables and stepper workflows plus password auth flows with validation.",
    stack: ["React", "Hooks", "REST", "Forms"],
    web: "https://quote.raqtan.com/",
  },
  {
    tag: "Web · E-Commerce",
    title: "COFE Market",
    desc: "Built the frontend for this coffee-marketplace storefront — product browsing, wishlist, cart and checkout in a responsive, mobile-first e-commerce experience.",
    stack: ["Next.js", "React", "Responsive", "REST"],
    web: "https://cofemarket.com/",
  },
];

export const education = [
  { degree: "MS Computer Science", school: "National University of Computer & Emerging Sciences (FAST)", year: "2024" },
  { degree: "BS Software Engineering", school: "University of Karachi", year: "2018" },
  { degree: "Intermediate · Pre-Engineering", school: "DJ Sindh Govt Science College", year: "2014" },
  { degree: ".NET Framework 4.5 — Certification", school: "Sir Syed University of Engineering & Technology", year: "2015" },
];

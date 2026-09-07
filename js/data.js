/**
 * Portfolio Data Store - English Only
 * Candidate: DAO PHUONG NGOC
 * Foreign Trade University (FTU) - International Business (K63)
 */

const portfolioData = {
  profile: {
    name: "DAO PHUONG NGOC",
    title: "International Business & Strategic Marketing",
    university: "Foreign Trade University (FTU) • Hanoi",
    cohort: "Cohort 63 (Class of 2024–2028)",
    gpa: "3.86 / 4.0",
    ielts: "IELTS 8.0 (C1)",
    scholarship: "FTU Merit Scholar (Rank: Excellent)",
    email: "daongocconglac@gmail.com",
    phone: "0975116719",
    location: "Dong Da, Hanoi, Vietnam"
  },

  nav: {
    letter: "Acceptance Letter",
    map: "Chamber Navigation",
    experience: "Pensieve Memory",
    credentials: "Proof Vault",
    skills: "Magical Skills",
    contact: "Owl Post"
  },

  envelope: {
    addressee: "MISS P. NGOC DAO",
    line1: "School of International Business (K63)",
    line2: "Foreign Trade University (FTU)",
    line3: "91 Chua Lang Street, Dong Da",
    city: "HANOI, VIETNAM",
    crestSubtitle: "HOGWARTS OF COMMERCE & LEADERSHIP",
    sealPrompt: "Tap Red Wax Seal to Open Letter",
    foldPrompt: "Fold Letter Back into Envelope"
  },

  letter: {
    school: "HOGWARTS OF COMMERCE & LEADERSHIP",
    subHeader: "Foreign Trade University Archives • Hanoi Campus",
    headmaster: "Headmistress: Prof. Minerva McGonagall & FTU Directorate",
    greeting: "Dear Miss Dao,",
    body1: "We take immense pleasure in presenting your official admission to the forefront of global enterprise and international trade at Foreign Trade University, distinguished by an outstanding academic GPA of 3.86/4.0 and an IELTS Academic score of 8.0 (CEFR C1).",
    body2: "Your records exhibit an exceptional balance between analytical operational rigor in short-term hospitality channel management at CYGNUS Startup and visionary brand communication leadership across Dynamic FTU Innovation Club and CHC FTU.",
    quote: "\"Words and strategic vision are, in our humble opinion, our most inexhaustible source of magic.\"",
    signName: "Dao Phuong Ngoc",
    signTitle: "Bachelor of International Business (K63)"
  },

  stats: [
    {
      id: "stat-gpa",
      label: "FTU Cumulative GPA",
      value: "3.86 / 4.0",
      note: "Top Academic Standing",
      targetId: "cred-scholarship"
    },
    {
      id: "stat-ielts",
      label: "English Proficiency",
      value: "IELTS 8.0",
      note: "C1 CEFR (Reading 9.0, Listening 8.5)",
      targetId: "cred-ielts"
    },
    {
      id: "stat-scholarship",
      label: "Academic Honor",
      value: "Merit Scholar",
      note: "Top-Tier Encouragement Scholarship (Marked)",
      targetId: "cred-scholarship"
    }
  ],

  experience: {
    title: "THE PENSIEVE OF EXPERIENCE",
    subtitle: "Click keywords or memory vials to filter milestones and strategic outcomes",
    keywords: [
      { key: "all", label: "All Memories" },
      { key: "ota", label: "OTA Channel Ops" },
      { key: "revenue", label: "Revenue & Pricing" },
      { key: "pr", label: "PR & Campaigns" },
      { key: "leadership", label: "Team Leadership" }
    ],
    items: [
      {
        id: "cygnus",
        category: ["ota", "revenue"],
        house: "slytherin",
        houseBadge: "Slytherin • Ambition & Strategic Execution",
        role: "Short-term Hospitality Sales Executive",
        company: "CYGNUS (Formerly VIGIN) – Hospitality Startup",
        period: "Aug 2024 – Present",
        location: "Hanoi, Vietnam",
        highlights: [
          "OTA Channel Mastery: Directly managed and optimized leading short-term rental platforms (Booking.com, Agoda, Airbnb), managing dynamic rates, room descriptions, and guest review reputation to maintain top tier ratings.",
          "Revenue & Occupancy Optimization: Formulated and executed targeted Flashsale campaigns, adjusting seasonal pricing strategies to boost Occupancy Rate.",
          "Product Enhancement: Monitored guest feedback and recommended actionable amenities/service improvements to enhance homestay experience.",
          "Brand Footprint: Managed social media fanpage in the foundational phase to boost brand recall and community awareness."
        ],
        tags: ["OTA Management", "Revenue Optimization", "Booking.com / Agoda / Airbnb", "Dynamic Pricing"]
      },
      {
        id: "dynamic-ftu",
        category: ["pr"],
        house: "ravenclaw",
        houseBadge: "Ravenclaw • Wit & Creative Ingenuity",
        role: "Marketing Member | Project Sublead",
        company: "DYNAMIC FTU INNOVATION CLUB",
        period: "Nov 2024 – Present",
        location: "FTU Hanoi",
        highlights: [
          "Curated and scheduled weekly social media publication calendars, proposing high-engagement creative angles.",
          "Crafted video scripts and coordinated filming shoots for promotional initiatives.",
          "Sublead - Product Pioneer Candidate 2025 Project: Led multi-phase promotional rollout; spearheaded core visual identity concept (Key Visual); managed content writing and asset design across channels."
        ],
        tags: ["Project Management", "Key Visuals", "Content Writing", "Video Production"]
      },
      {
        id: "chc-ftu",
        category: ["leadership", "pr"],
        house: "gryffindor",
        houseBadge: "Gryffindor • Courage & Leadership",
        role: "Head of Communications (Trưởng ban)",
        company: "HEART CONNECTING CLUB - CHC FTU",
        period: "Nov 2024 – Present",
        location: "FTU Hanoi",
        highlights: [
          "Personnel & Team Leadership: Directed subcommittees and core media crews; tracked deliverables, workflows, and ensured stringent deadlines.",
          "Strategic Media Planning: Guided subcommittee leads in establishing comprehensive timelines and publicity plans for major campus events.",
          "Media Production: Directly executed and mentored team members in live event photojournalism and videography."
        ],
        tags: ["Team Leadership", "Media Strategy", "Event Photojournalism", "Timeline Governance"]
      }
    ]
  },

  credentials: {
    title: "THE PROOF VAULT (TROPHY ROOM)",
    subtitle: "Click each credential relic below to reveal verified official documents with marked names",
    items: [
      {
        id: "cred-scholarship",
        tabLabel: "🎓 FTU Merit Scholarship",
        title: "Foreign Trade University Academic Encouragement Scholarship",
        issuer: "Foreign Trade University (FTU)",
        date: "Semester 1 (Academic Year 2024–2025)",
        rank: "Merit Rank: Excellent (Loại Giỏi)",
        details: "Student ID: 2415510064 • Class: K63-Anh 04-IBZ.S • Cohort 63 International Business",
        description: "Prestigious merit scholarship awarded to top academic performers in the School of International Business. Dao Phuong Ngoc's name is highlighted on Row 344 of the official university registry.",
        proofImage: "assets/proofs/ftu_scholarship_marked.png",
        zoomImage: "assets/proofs/ftu_scholarship_zoom.png",
        proofNote: "Row 344 Highlighted: DAO PHUONG NGOC | ID: 2415510064 | Cohort 63 International Business"
      },
      {
        id: "cred-hsg",
        tabLabel: "🏅 Provincial English Contest (3rd Prize)",
        title: "Provincial Excellent Student Contest — 3rd Prize (English)",
        issuer: "Hai Duong Department of Education & Training",
        date: "Nov 16, 2023 (Academic Year 2023–2024)",
        rank: "3rd Prize (Giải Ba Cấp Tỉnh)",
        details: "Certificate No: 925/1346/2023 • Tu Ky High School",
        description: "Official certificate signed and sealed by the Deputy Director of the Department of Education, recognizing superior linguistic mastery in English language synthesis.",
        proofImage: "assets/proofs/hsg_certificate_marked.jpg",
        zoomImage: null,
        proofNote: "Marked Name: Student DAO PHUONG NGOC - Born 27/02/2006 | Official Stamp & Signature"
      },
      {
        id: "cred-ielts",
        tabLabel: "📜 IELTS Academic 8.0 (C1)",
        title: "IELTS Academic Test Report Form — Band 8.0 (CEFR C1)",
        issuer: "British Council / IDP / Cambridge Assessment English",
        date: "Dec 03, 2022",
        rank: "Overall Band Score 8.0 • CEFR Level C1",
        details: "Listening: 8.5 • Reading: 9.0 • Writing: 7.0 • Speaking: 6.5",
        description: "Standardized international English certification demonstrating advanced academic and professional fluency with near-perfect Reading (9.0) and Listening (8.5).",
        proofImage: "assets/proofs/ielts_certificate.jpg",
        zoomImage: null,
        proofNote: "Candidate ID: 020535 | Centre VN002 | Official British Council Validation Stamp"
      }
    ]
  },

  skills: {
    title: "THE GRIMOIRE OF SKILLS",
    subtitle: "Click magic discipline tabs to explore strategic competencies and tools",
    categories: [
      {
        id: "charms",
        tab: "✨ Charms & Comms",
        name: "Charms & Global Communications",
        description: "Strategic narrative design, global fluency, and creative resonance",
        skills: [
          { name: "Fluent English (IELTS 8.0 C1)", level: "Advanced Negotiation & Cross-border Business" },
          { name: "Content Creation & Storytelling", level: "Viral campaign hooks & brand identity" },
          { name: "AI Workflow Integration", level: "Prompt Engineering (ChatGPT, Gemini) for rapid market research" }
        ]
      },
      {
        id: "transfiguration",
        tab: "🎨 Transfiguration & Media",
        name: "Transfiguration & Visual Identity",
        description: "Translating concepts into engaging visual and multimedia assets",
        skills: [
          { name: "Canva Pro Visual Design", level: "Campaign layouts, typography hierarchy, social kits" },
          { name: "Adobe Illustrator Basics", level: "Vector manipulation & event marketing visuals" },
          { name: "Event Photojournalism & Filming", level: "Directing live shoots, capturing brand moments" }
        ]
      },
      {
        id: "arithmancy",
        tab: "📊 Arithmancy & Strategy",
        name: "Arithmancy & Operational Strategy",
        description: "Data-informed execution, channel management, and milestone governance",
        skills: [
          { name: "OTA Channel Operations", level: "Booking.com, Agoda, Airbnb management & reputation control" },
          { name: "Revenue & Occupancy Strategy", level: "Flashsale scheduling & seasonal dynamic pricing" },
          { name: "Enterprise Productivity Tools", level: "Advanced MS Office (Excel, Word, PPT) & Google Workspace" }
        ]
      }
    ]
  },

  contact: {
    title: "THE OWLERY & DISPATCH",
    subtitle: "Connect directly for internship opportunities and strategic collaborations",
    email: "daongocconglac@gmail.com",
    phone: "0975116719",
    location: "Dong Da, Hanoi, Vietnam",
    copySuccess: "Email address copied to quill!",
    callText: "Direct Line",
    quote: "\"Words are, in my not-so-humble opinion, our most inexhaustible source of magic.\" — Albus Dumbledore"
  }
};

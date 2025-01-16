const diplomas = [
  {
    name: "Financial Technology",
    id: "financial-technology",
    sessions: [
      {
        name: "Blockchain Basics",
        id: "blockchain-basics",
        desc: "An introduction to blockchain technology, its applications in finance, and how it is transforming the financial services industry.",
        speaker: {
          name: "Alice Johnson",
          title: "Blockchain Consultant",
          org: "FinTech Innovations",
          bio: "Alice Johnson has over a decade of experience in the financial sector and specializes in blockchain technology and its applications.",
        },
      },
      {
        name: "Digital Payments Revolution",
        id: "digital-payments-revolution",
        desc: "Explore the evolution of digital payments, the technologies behind them, and their impact on consumer behavior and business operations.",
        speaker: {
          name: "Michael Smith",
          title: "Payments Strategist",
          org: "PayTech Solutions",
          bio: "Michael Smith is a payments expert with a passion for understanding how digital payment systems are reshaping commerce.",
        },
      },
    ],
  },
  {
    name: "Information Technology",
    id: "information-technology",
    sessions: [
      {
        name: "Cloud Computing Essentials",
        id: "cloud-computing-essentials",
        desc: "Learn the fundamentals of cloud computing, including service models, deployment strategies, and the benefits of cloud solutions.",
        speaker: {
          name: "Sarah Lee",
          title: "Cloud Architect",
          org: "TechCloud Inc.",
          bio: "Sarah Lee has extensive experience in designing and implementing cloud solutions for various industries.",
        },
      },
      {
        name: "Cybersecurity Fundamentals",
        id: "cybersecurity-fundamentals",
        desc: "Understand the key concepts of cybersecurity, including threats, vulnerabilities, and best practices for protecting information systems.",
        speaker: {
          name: "David Kim",
          title: "Cybersecurity Analyst",
          org: "SecureTech",
          bio: "David Kim is a cybersecurity professional dedicated to helping organizations safeguard their digital assets.",
        },
      },
    ],
  },
  {
    name: "Business Intelligence Systems",
    id: "business-intelligence-systems",
    sessions: [
      {
        name: "Data Visualization Techniques",
        id: "data-visualization-techniques",
        desc: "Explore various data visualization tools and techniques to effectively communicate insights and drive decision-making.",
        speaker: {
          name: "Emily Chen",
          title: "Data Analyst",
          org: "Insight Analytics",
          bio: "Emily Chen specializes in data visualization and has helped numerous organizations turn data into actionable insights.",
        },
      },
      {
        name: "Predictive Analytics in Business",
        id: "predictive-analytics-business",
        desc: "Learn how predictive analytics can be used to forecast trends, improve decision-making, and enhance business performance.",
        speaker: {
          name: "James Brown",
          title: "Business Intelligence Consultant",
          org: "DataDriven Solutions",
          bio: "James Brown has a strong background in data science and business intelligence, focusing on predictive modeling.",
        },
      },
    ],
  },
  {
    name: "Digital Design and Development",
    id: "digital-design-development",
    sessions: [
      {
        name: "User  Experience (UX) Design",
        id: "ux-design",
        desc: "Discover the principles of UX design and how to create user-centered digital products that enhance user satisfaction.",
        speaker: {
          name: "Laura White",
          title: "UX Designer",
          org: "Creative Digital Agency",
          bio: "Laura White is a UX designer with a passion for creating intuitive and engaging user experiences.",
        },
      },
      {
        name: "Web Development Fundamentals",
        id: "web-development-fundamentals",
        desc: "An introduction to web development, covering HTML, CSS, and JavaScript to build responsive and interactive websites.",
        speaker: {
          name: "Mark Taylor",
          title: "Web Developer",
          org: "Web Solutions Co.",
          bio: "Mark Taylor is a web developer with a knack for creating dynamic and user-friendly websites.",
        },
      },
    ],
  },
  {
    name: "Information Security Management",
    id: "information-security-management",
    sessions: [
      {
        name: "Risk Management in Information Security",
        id: "risk-management-information-security",
        desc: "Learn how to identify, assess, and manage risks in information security to protect organizational assets.",
        speaker: {
          name: "Nina Patel",
          title: "Information Security Manager ",
          org: "SecureGuard",
          bio: "Nina Patel has over 15 years of experience in information security and specializes in risk management and compliance.",
        },
      },
      {
        name: "Incident Response Planning",
        id: "incident-response-planning",
        desc: "Understand the importance of incident response planning and how to develop effective strategies to respond to security breaches.",
        speaker: {
          name: "Tom Harris",
          title: "Incident Response Specialist",
          org: "CyberSafe Solutions",
          bio: "Tom Harris is an expert in incident response and has helped organizations prepare for and recover from security incidents.",
        },
      },
    ],
  },
];

export function getSession({ sessionId, catId }) {
  return diplomas
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getDiploma(diplomasId) {
  const diploma = diplomas.find(({ id }) => id === diplomasId);
  return diploma;
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}

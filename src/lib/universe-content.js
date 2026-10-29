// Content for the immersive 3D one-pager (/3d/). Sourced from the classic site pages.

export const HERO = {
  kicker: 'ZZM Technologies',
  title: 'Driving Transformation. Your Partner in Innovation & Growth.',
  description:
    'From the latest technologies to robust security frameworks, we provide comprehensive solutions that empower industries. Our vision is to drive productivity, efficiency, and innovation for a brighter future.'
};

// Order here is the orbit order and the prev/next order of the panels.
export const SECTIONS = [
  { id: 'about', label: 'About', kicker: 'Who we are', color: '#8fd0ff' },
  { id: 'services', label: 'Services', kicker: 'What we build', color: '#8b6bff' },
  { id: 'process', label: 'Process', kicker: 'How we work', color: '#3ee6c4' },
  { id: 'team', label: 'Team', kicker: 'Who builds it', color: '#ff7ac8' },
  { id: 'clients', label: 'Clients', kicker: 'Who trusts us', color: '#ffb547' },
  { id: 'contact', label: 'Contact', kicker: 'Start a project', color: '#5dfc9b' }
];

export const ABOUT = {
  title: 'About ZZM Technologies',
  intro:
    'ZZM Technologies started the journey in 2024 to provide robust solutions to clients. We specialize in creating innovative and customized digital experiences that empower businesses to thrive in the digital landscape.',
  coreWork: {
    title: 'We manage your software from concept to deployment and beyond.',
    text: 'From initial concept and design through expert coding, rigorous testing and seamless deployment, then ongoing maintenance and support so your software keeps performing, adapts to changing needs and delivers long-term value.'
  },
  stats: [
    { value: '2+', label: 'Years of operation' },
    { value: '4+', label: 'Projects delivered' },
    { value: '3+', label: 'Specialists' },
    { value: '6+', label: 'Credentials' }
  ],
  deliverables: [
    {
      title: 'Professional, Certified & Experienced Developers',
      text: '10 relevant certifications and 10++ years of average experience across our development team.'
    },
    {
      title: 'Agile Project Environment',
      text: 'Delivering products around 30% faster than traditional methods, with a 100% on-time, on-budget completion rate.'
    },
    {
      title: 'Newest Technology & Security Compliance',
      text: 'Leveraging the newest technologies and security compliance standards to keep your business and customer data safe.'
    },
    {
      title: 'High Quality Support & Maintenance',
      text: 'Round-the-clock technical assistance, regular updates and proactive maintenance so your solutions perform at their best.'
    }
  ],
  values: [
    {
      title: 'Expertise and Innovation',
      text: 'A team at the forefront of web development, microservices and APIs, mobile development, and augmented and virtual reality, delivering cutting-edge solutions that drive your business forward.'
    },
    {
      title: 'Customized Solutions',
      text: 'We take the time to understand your unique requirements, goals and challenges, then craft strategies and applications that precisely align with your business objectives.'
    },
    {
      title: 'Seamless Integration and Scalability',
      text: 'Microservices and API expertise means applications that integrate with your existing systems and stay easy to maintain, update and scale as your business grows.'
    }
  ]
};

export const SERVICE_GROUPS = [
  {
    id: 'general',
    title: 'General Services',
    description: 'Your vision, our expertise: together we build exceptional software that drives your success.',
    items: [
      {
        title: 'Digital Consultancy',
        description: 'Boost your business with expert tech strategies and guidance.',
        highlights: [
          { label: 'Digital Transformation', icon: 'refresh' },
          { label: 'Strategy and Vision', icon: 'target' },
          { label: 'Technology Integration', icon: 'link' },
          { label: 'Change Management', icon: 'users' },
          { label: 'Customer Experience Enhancement', icon: 'smile' }
        ]
      },
      {
        title: 'Web Development',
        description: 'Build high-quality, user-friendly websites tailored to your needs.',
        highlights: [
          { label: 'Custom Web Development', icon: 'code' },
          { label: 'Responsive Design', icon: 'devices' },
          { label: 'Cloud Integration and Automation', icon: 'cloud' },
          { label: 'Performance Optimization', icon: 'gauge' },
          { label: 'AI-Based Web Development', icon: 'sparkles' }
        ]
      },
      {
        title: 'Backend Development',
        description: 'Develop robust and scalable server-side solutions for your applications.',
        highlights: [
          { label: 'Scalable Architecture & Infrastructure', icon: 'layers' },
          { label: 'Robust API Development & Integration', icon: 'plug' },
          { label: 'Secure & Efficient Data Management', icon: 'database' },
          { label: 'Custom Business Logic & Automation', icon: 'cog' }
        ]
      },
      {
        title: 'Frontend Development',
        description: 'Craft engaging and responsive user interfaces for web apps.',
        highlights: [
          { label: 'UI/UX design, prototyping & wireframing', icon: 'palette' },
          { label: 'Modern frameworks: React, Angular, Vue.js', icon: 'code' },
          { label: 'Progressive Web Applications (PWA)', icon: 'zap' },
          { label: 'Cross-browser compatibility', icon: 'globe' }
        ]
      },
      {
        title: 'API Development',
        description: 'Design custom APIs for scalable and reliable solutions.',
        highlights: [
          { label: 'Custom API Design & Development', icon: 'plug' },
          { label: 'Secure API Implementation', icon: 'lock' },
          { label: 'Scalable API Architecture', icon: 'layers' },
          { label: 'API Integration & Management', icon: 'link' }
        ]
      },
      {
        title: 'Mobile Apps Development',
        description: 'Create top-notch mobile apps for seamless user experiences.',
        highlights: [
          { label: 'Cross-platform iOS & Android', icon: 'mobile' },
          { label: 'Hybrid-web applications', icon: 'devices' },
          { label: 'Progressive Web Applications (PWA)', icon: 'zap' },
          { label: 'App Store & Play Store deployment', icon: 'rocket' }
        ]
      }
    ]
  },
  {
    id: 'enablers',
    title: 'Tech Enablers',
    description: 'Enabling your success by providing the building blocks for digital transformation.',
    items: [
      {
        title: 'Cloud Computing',
        description: 'Leverage cloud platforms (AWS, Azure, Google Cloud) for scalable infrastructure.',
        highlights: [
          { label: 'Cloud Strategy & Migration Planning', icon: 'cloud' },
          { label: 'Optimization and Cost Management', icon: 'gauge' },
          { label: 'Security and Compliance', icon: 'shield' },
          { label: 'Hybrid and Multi-Cloud Strategies', icon: 'layers' }
        ]
      },
      {
        title: 'Cybersecurity',
        description: 'Protect your data and systems with comprehensive security solutions.',
        highlights: [
          { label: 'Threat Detection & Response', icon: 'activity' },
          { label: 'Vulnerability Assessment', icon: 'search' },
          { label: 'Cloud Security', icon: 'lock' },
          { label: 'Security Compliance & Governance', icon: 'badge' }
        ]
      },
      {
        title: 'DevSecOps',
        description: 'Integrate security throughout your software development lifecycle.',
        highlights: [
          { label: 'CI/CD Pipeline Security', icon: 'branch' },
          { label: 'Infrastructure as Code (IaC) Hardening', icon: 'fileCode' },
          { label: 'Container & Cloud-Native Security', icon: 'box' },
          { label: 'Continuous Compliance & Monitoring', icon: 'activity' }
        ]
      },
      {
        title: 'Artificial Intelligence',
        description: 'Utilize AI for intelligent automation and data-driven insights.',
        highlights: [
          { label: 'AI Model Development & Training', icon: 'brain' },
          { label: 'Natural Language Processing (NLP)', icon: 'chat' },
          { label: 'Computer Vision Solutions', icon: 'eye' },
          { label: 'AI Deployment & Monitoring', icon: 'activity' }
        ]
      },
      {
        title: 'Internet of Things (IoT)',
        description: 'Connect devices and systems for innovative IoT solutions.',
        highlights: [
          { label: 'IoT Device Integration', icon: 'wifi' },
          { label: 'Edge Computing & Data Processing', icon: 'cpu' },
          { label: 'IoT Platform Integration', icon: 'link' },
          { label: 'Security & Device Management', icon: 'shield' }
        ]
      },
      {
        title: 'Microservices',
        description: 'Build scalable and maintainable applications with microservice architecture.',
        highlights: [
          { label: 'Microservices Architecture Design', icon: 'grid' },
          { label: 'Development and Integration', icon: 'code' },
          { label: 'Deployment and Management', icon: 'rocket' },
          { label: 'Consulting and Migration Strategy', icon: 'compass' }
        ]
      }
    ]
  }
];

// Flat list; the index matches the moon index around the Services planet.
export const SERVICES = SERVICE_GROUPS.flatMap((group) => group.items.map((item) => ({ ...item, group: group.id })));

// Condensed from the classic Work Methodology page for at-a-glance reading.
export const PROCESS = {
  description: 'Eight steps, three phases: a clear path from idea to a system you own.',
  phases: [
    {
      title: 'Plan',
      steps: [
        {
          title: 'Requirements Elicitation',
          summary: 'Understand your goals and needs.',
          activities: ['Interviews', 'Workshops', 'Surveys'],
          deliverables: ['Business Requirements (BRD)', 'Technical proposal']
        },
        {
          title: 'System Design',
          summary: 'Blueprint the whole system before coding.',
          activities: ['Architecture', 'Database design', 'UI design'],
          deliverables: ['HLD & LLD', 'SRS', 'Wireframes & mockups']
        }
      ]
    },
    {
      title: 'Build & Secure',
      steps: [
        {
          title: 'Development',
          summary: 'Build the platform in agile sprints.',
          activities: ['DevOps setup', 'Cloud provisioning', 'Agile sprints'],
          deliverables: ['Working platform', 'Integrations']
        },
        {
          title: 'Continuous Security Check',
          summary: 'Catch vulnerabilities early, on every build.',
          activities: ['Linting', 'SAST', 'DAST', 'SCA'],
          deliverables: ['Security scan report', 'Remediation tracker']
        },
        {
          title: 'Internal Testing',
          summary: 'Find and fix defects before release.',
          activities: ['Unit', 'Integration', 'QA smoke', 'QA regression'],
          deliverables: ['Test report', 'Issue tracker']
        }
      ]
    },
    {
      title: 'Launch & Handover',
      steps: [
        {
          title: 'Deployment',
          summary: 'Automated, controlled release to production.',
          activities: ['CI/CD', 'Release orchestration', 'Approval gates'],
          deliverables: ['Release package', 'Deployment record']
        },
        {
          title: 'User Acceptance Testing',
          summary: 'Your users test it; we refine it.',
          activities: ['End-user testing', 'Feedback & fixes']
        },
        {
          title: 'System Delivery',
          summary: 'Full handover, fully documented.',
          deliverables: ['Technical & user manuals', 'Admin guide', 'DB backup & migration', 'Knowledge transfer']
        }
      ]
    }
  ]
};

export const TEAM = {
  motto: 'Craft, Contribute, Innovate, Transform, Conquer',
  intro: 'Driven by collaboration, our team consistently delivers impactful solutions that surpass expectations.',
  members: [
    {
      name: 'Zulwaqar Zain Mohtar',
      role: 'Founder',
      title: 'Software Engineer / Cloud Specialist / Full-Stack Developer',
      photo: '/assets/abstract/media/team/zulzayn.jpeg',
      bio: 'Holds a Master of Philosophy in Software Engineering from UTM and is proficient in Web Technologies, Cloud Computing and Software Engineering. Has delivered high-profile projects including the Digital Transformation of HSE for UMW Holdings and subsidiaries (Toyota Motor Malaysia, KYB Malaysia, UMW Aerospace, UMW Komatsu), a Digital Twin Offshore Pipeline for PETRONAS, and an ERP for Global Water Consultant (GWC), a subsidiary of G&P Professionals Group.',
      certifications: [
        'AWS Certified Solutions Architect',
        'AWS Certified Cloud Practitioner',
        'Microsoft Certified: Azure AI Fundamentals',
        'Microsoft Certified: Azure Data Fundamentals',
        'Microsoft Certified: Azure Fundamentals',
        'Unity Certified User: Programmer'
      ]
    }
  ]
};

export const CLIENTS = {
  title: "We've built solutions for...",
  description: 'Organisations across education, industry and the creative sector rely on ZZMTech to deliver.',
  logos: [
    { name: 'Universiti Teknologi Malaysia', src: '/assets/abstract/media/brand/logo_utm.png' },
    { name: 'Ketupart Studio', src: '/assets/abstract/media/brand/ketupart_studio.png' },
    { name: 'MagicX', src: '/assets/abstract/media/brand/magicx.png' },
    { name: 'Global Water Consultant', src: '/assets/abstract/media/brand/gwc.png' },
    { name: 'iHumen', src: '/assets/abstract/media/brand/ihumen.png' },
    { name: 'Momentum Internet', src: '/assets/abstract/media/brand/momentum-internet.png' },
    { name: 'Bursl', src: '/assets/abstract/media/brand/bursl.png' },
    { name: 'MagicXR', src: '/assets/abstract/media/brand/magicxr.png' }
  ]
};

export const CONTACT = {
  phone: '+601162114073',
  phoneDisplay: '+60 11-6211 4073',
  whatsapp: '601162114073',
  email: 'admin@zzmtech.com',
  hours: 'Mon–Fri, 10:00 am – 6:00 pm',
  emailNote: 'Our support team gets back to you within 48 hours during business hours.',
  address:
    'ZZM Technologies, T03, Level 1, University Industry Research Laboratory (UIRL), Universiti Teknologi Malaysia, 81310 Johor Bahru, Johor',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=University+Industry+Research+Laboratory+UTM+Johor+Bahru',
  linkedin: 'https://www.linkedin.com/company/ketupart-studio/',
  registration: 'Registration No: 202403251268 (003650437-D)'
};

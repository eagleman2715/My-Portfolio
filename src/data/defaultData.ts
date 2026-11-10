import { UserProfile, Project, ExperienceItem, SkillGroup, Testimonial } from '../types/portfolio';

export const DEFAULT_PROFILE: UserProfile = {
  name: "Regi Manabat",
  preferredName: "Reginald Manabat",
  role: "Technical Virtual Assistant & Automation Specialist",
  secondaryTitle: "GoHighLevel Architect · Systems Integration · Tradie Operations",
  location: "Philippines · Supporting Australia & Global Teams",
  availability: "Available for Remote Full-Time, Agency Contracts & Systems Integrations",
  email: "manabat99@yahoo.com",
  alternateEmail: "manabat99@gmail.com",
  phone: "+61 414 998 826",
  cvPdfUrl: "/assets/aistudio/Reginald_Manabat_-_CV_2026__1__7b6739c5.pdf",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  bio: "Technical virtual assistant and automation specialist with almost 9 years of experience helping agencies and service businesses streamline operations through CRM automation, systems integration and workflow optimization.",
  leadParagraph: "With almost 9 years of experience as a technical virtual assistant and automation specialist, I build resilient systems that run without you. From multi-way GoHighLevel workflows and job-management software integrations (ServiceM8, simPRO, ServiceTitan, AroFlo) to n8n pipelines, quote follow-up engines, and high-converting funnels, I empower business owners to eliminate admin bottlenecks and scale sustainably.",
  industries: [
    "Plumbing",
    "Electrical",
    "HVAC",
    "Gas & Heating",
    "Stone Fabrication",
    "Mental Wellness",
    "Home Services",
    "Trade Services"
  ],
  stats: [
    { label: "Virtual Assistant", value: "~9 Yrs", detail: "Almost 9 years as a technical virtual assistant" },
    { label: "GHL & Senior Technical Specialist", value: "5+ Yrs", detail: "Handling Plumbing, electrical, HVAC, gas & heating industry" },
    { label: "Agency Users Supported", value: "350+", detail: "Concurrent users on a single agency instance" },
    { label: "Industries Supported", value: "8+", detail: "Home and trade services" }
  ]
};

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "ghl-servicem8-sync",
    title: "GHL ↔ ServiceM8 Multi-Way Sync (n8n)",
    tagline: "End-to-end webhook synchronization between GoHighLevel and ServiceM8 for automatic quote and work order lifecycle management.",
    category: "Systems Integration",
    projectType: "Client Implementation",
    featured: true,
    year: "2024 — 2026",
    clientOrContext: "Service Core · Trade Operations",
    image: "/assets/aistudio/GHL_to_ServiceM8_-_n8n_integration_04786b84.png",
    additionalImages: [
      "/assets/aistudio/ServiceM8_to_GHL_-_n8n_Integration_f402b862.png",
      "/assets/aistudio/ServiceM8_fd868cea.jpeg",
      "/assets/aistudio/N8N_-_Sample_cb2c4921.png"
    ],
    tags: ["n8n", "GoHighLevel", "ServiceM8 API", "Webhooks", "JavaScript", "REST APIs"],
    metrics: [
      { label: "Sync Direction", value: "Two-way" },
      { label: "Integration Layer", value: "n8n webhooks" },
      { label: "Quote Follow-up", value: "Automated" }
    ],
    summary: "Constructed bi-directional n8n integration engines connecting GoHighLevel CRM with ServiceM8 field management. Automatically creates quotes and work orders, updates contact records, syncs status changes, and manages badge triggers.",
    challenge: "Trade business owners were manually retyping leads into ServiceM8, causing quotes to sit unaddressed for days, lost opportunities, and zero visibility into job progression inside the CRM pipeline.",
    solution: "Engineered robust multi-node n8n workflows that listen for GHL form submissions and opportunity triggers, map contact details, verify existing records via ServiceM8 REST endpoints, and handle conditional job creation with error handling.",
    keyWorkflows: [
      "A GHL form submission or opportunity trigger starts the n8n workflow",
      "Contact details are mapped and checked against existing ServiceM8 records to avoid duplicates",
      "The quote or job is created in ServiceM8 with error handling for failed calls",
      "ServiceM8 status changes update the GHL pipeline stage",
      "Accepted quotes create a work order and tag the technician"
    ],
    businessImpact: [
      "Less manual re-typing of leads between the CRM and ServiceM8",
      "Quote and job progress visible inside the CRM pipeline",
      "Consistent follow-up on quotes without chasing by hand"
    ],
    architectureHighlights: [
      "Dynamic payload mapping and deduplication across both CRM and field systems",
      "Two-way status sync: ServiceM8 job status changes immediately update GHL pipeline stages",
      "Automated work order creation from accepted quotes with technician notification tags"
    ],
    techStack: ["n8n", "GoHighLevel", "ServiceM8", "Webhooks", "Node / JavaScript", "JSON"]
  },
  {
    id: "electrical-due-services-report-engine",
    title: "Electrical Companies Annual Due-Service Report & Automation System",
    tagline: "Customized n8n workflow paired with an interactive client-facing annual service compliance portal showing due services for the year.",
    category: "Systems Integration",
    projectType: "Client Implementation",
    year: "2024 — 2026",
    clientOrContext: "Electrical & Trade Compliance Companies",
    image: "/assets/aistudio/image_1183e7e9.png",
    additionalImages: [
      "/assets/aistudio/Service_Reminders_Dashboard-1.png"
    ],
    pairedComparison: {
      titleA: "n8n Automation Workflow (Backend Engine)",
      imageA: "/assets/aistudio/image_1183e7e9.png",
      titleB: "Customized Annual Due Services Report (Client Portal)",
      imageB: "/assets/aistudio/Service_Reminders_Dashboard-1.png",
      description: "Automated n8n pipeline that receives client requests, verifies security credentials, compiles due recurring maintenance dates, and renders a customized annual report showing due services for electrical contractors."
    },
    tags: ["n8n", "Electrical Due Services", "Dynamic Report Generation", "Client Auth Token", "CSV Batch Sync", "Webhooks"],
    metrics: [
      { label: "Report Delivery", value: "On request" },
      { label: "View", value: "Annual, by month" },
      { label: "Manual Calculation", value: "Automated" }
    ],
    summary: "Engineered an end-to-end n8n workflow that creates an automated, customized annual report for electrical companies. The system calculates and displays exactly how many due services (smoke alarms, switchboards, safety switch testing, emergency lighting) clients have scheduled throughout the calendar year.",
    challenge: "Electrical contracting companies were manually cross-referencing customer service schedules, inspection logs, and spreadsheets to calculate when compliance items were due. Generating client-ready annual reports required hours of manual labor per customer, resulting in delayed reminders and missed service contracts.",
    solution: "Constructed a secure multi-node n8n engine with webhook entry points (Service Report Request). The pipeline verifies client access tokens, fetches recorded contact history, calculates monthly scheduled due services, dynamically builds a branded responsive HTML report page, and returns it to the client. Includes automated CSV batch row processing and secure deletion authorization.",
    keyWorkflows: [
      "A client requests their annual report through a webhook",
      "The client access token is verified",
      "Recorded contact history is fetched and due services are calculated by month",
      "A branded HTML report page is built and returned to the client",
      "CSV batches are ingested, skipping rows that are already recorded"
    ],
    businessImpact: [
      "Less manual cross-referencing of service schedules and spreadsheets",
      "Clients can see their due services for the year in one place",
      "Supports annual service reminders and repeat work"
    ],
    architectureHighlights: [
      "Secure Webhook listener with client token validation ('Verify client access')",
      "Dynamic HTML report generation engine ('Build Report Page') compiling real-time due dates",
      "Automated CSV batch ingestion with duplicate checking ('Skip If Already Recorded')",
      "Instant client-facing portal displaying annual breakdown and monthly service distribution"
    ],
    techStack: ["n8n Automation", "REST Webhooks", "Dynamic HTML/CSS", "JavaScript", "CSV Database Sync"]
  },
  {
    id: "simpro-ghl-integration",
    title: "simPRO ↔ GoHighLevel Integration Pipeline",
    tagline: "Multi-branch event routing syncing simPRO job statuses, quotes, and customer updates directly into GoHighLevel.",
    category: "Systems Integration",
    projectType: "Client Implementation",
    year: "2023 — 2025",
    clientOrContext: "Commercial Trade Contractors",
    image: "/assets/aistudio/simPRO___GHL_de83e9ef.png",
    additionalImages: [
      "/assets/aistudio/5efb4f8b154505fb126f49700e5476cd_15895467.jpeg",
      "/assets/aistudio/b94fb4d86230507ab4a145eaf1524819_c648d3c8.jpeg"
    ],
    tags: ["simPRO", "GoHighLevel", "n8n", "Zapier Paths", "Webhooks", "LeadConnector"],
    metrics: [
      { label: "Event Handling", value: "Webhook-driven" },
      { label: "Admin Work", value: "Reduced" },
      { label: "Contractor Visibility", value: "Unified CRM" }
    ],
    summary: "Built high-reliability webhook routers that catch simPRO events (Quote Created, Quote Updated, Job Changed, Invoice Sent) and distribute them across conditional paths to update CRM contacts and opportunity stages.",
    challenge: "Complex commercial contractors using simPRO struggled to trigger timely SMS/email nurture sequences and quote reminders because simPRO lacked modern consumer-facing marketing automation.",
    solution: "Developed an n8n webhook routing node paired with Zapier multi-branch paths (Paths A through E) that parse simPRO payloads, query site contacts, and upsert records into LeadConnector/GHL with exact customer tags.",
    keyWorkflows: [
      "simPRO sends a webhook event (quote created or updated, job changed, invoice sent)",
      "A router sends the event down the matching branch",
      "Site contacts and company customers are looked up through secondary API queries",
      "The contact and opportunity are upserted into GoHighLevel with customer tags",
      "Invoice reminders stop as soon as payment is confirmed"
    ],
    businessImpact: [
      "Quote and invoice reminders can run from simPRO events",
      "One CRM view of quotes, jobs and invoices",
      "Less manual updating between simPRO and the CRM"
    ],
    architectureHighlights: [
      "Router by Event node directing quotes, jobs, and invoices into parallel processing branches",
      "Site contact extraction and company customer matching via secondary API queries",
      "Automated invoice reminder triggers that shut down the instant payment is confirmed"
    ],
    techStack: ["simPRO API", "GoHighLevel", "Zapier Paths", "n8n", "Webhooks", "REST"]
  },
  {
    id: "ghl-multi-branch-customer-journeys",
    title: "Multi-Branch Customer Journeys & Automated Nurturing",
    tagline: "Sophisticated GoHighLevel automation trees with conditional splits, SMS sequences, and automated job dispatch.",
    category: "CRM & Automation",
    projectType: "Client Implementation",
    year: "2022 — 2026",
    clientOrContext: "LANA Software & Service Core Clients",
    image: "/assets/aistudio/709aa1821f06de46e11105f154945ae2_10e2142d.jpeg",
    additionalImages: [
      "/assets/aistudio/5cca0bd2e4631aaa79e52ee17ba09e7c_d20c2a06.jpeg"
    ],
    tags: ["GoHighLevel", "Workflows", "SMS & Email Sequences", "Conditional Branching", "Lead Nurturing"],
    metrics: [
      { label: "Workflow Design", value: "Multi-branch" },
      { label: "Lead Response", value: "Automated" },
      { label: "Follow-up", value: "SMS & email" }
    ],
    summary: "Architected extensive multi-step automation ecosystems in GoHighLevel handling form submissions, square-footage conditional logic, internal notifications, opportunity updates, and tailored SMS/email cadences.",
    challenge: "Lead conversion plummeted when trade prospects received generic responses rather than tailored quotes based on project size, service type, and geographic urgency.",
    solution: "Constructed deep decision trees that evaluate custom form parameters (e.g. project scope, property dimensions, urgency), tag the lead appropriately, notify the on-call team, and launch a hyper-personalized nurture campaign.",
    keyWorkflows: [
      "A form is submitted with project scope, size and urgency",
      "A decision tree tags the lead based on those answers",
      "The on-call team is notified internally",
      "A tailored SMS and email nurture sequence starts",
      "Reminders cancel automatically once the customer books"
    ],
    businessImpact: [
      "Leads get a response that matches their enquiry",
      "Less manual chasing of quotes",
      "Pipeline stages reflect whether the customer has replied"
    ],
    architectureHighlights: [
      "Automated quote follow-up sequences removing the need to chase leads manually",
      "Dynamic opportunity pipeline updates based on customer interaction (replied vs unread)",
      "Time-delayed reminder sequences with automatic cancellation upon booking"
    ],
    techStack: ["GoHighLevel CRM", "Workflow Builder", "SMS Twilio", "Mailgun", "Custom Fields"]
  },
  {
    id: "smart-review-reputation-filter",
    title: "Smart Review Generation & Reputation Protection Engine",
    tagline: "Automated customer review engine with internal feedback gating and custom JavaScript processing in n8n.",
    category: "Custom Workflows & Scripts",
    projectType: "Client Implementation",
    year: "2023 — 2026",
    clientOrContext: "Australian Trade & Service Franchises",
    image: "/assets/aistudio/N8N_-_Sample_1_de0e12f3.png",
    additionalImages: [
      "/assets/aistudio/2da9581e9420805b405b8b5902db2847_8547d8fb.jpeg"
    ],
    tags: ["n8n", "JavaScript Code", "Zapier Webhooks", "Reputation Management", "Google Reviews"],
    metrics: [
      { label: "Review Requests", value: "Automated" },
      { label: "1–3 Star Feedback", value: "Routed internally" },
      { label: "4–5 Star Feedback", value: "Sent to Google" }
    ],
    summary: "Built an automated post-job review request system that filters customer sentiment. Satisfied clients are guided to Google and Facebook review pages, while unhappy responses trigger internal alerts for immediate owner resolution.",
    challenge: "Franchise owners feared automated review campaigns would accidentally broadcast rare negative feedback or unfinished punch-list items onto public Google Business Profiles.",
    solution: "Constructed intelligent conditional workflows that evaluate initial survey feedback score. Only 4 and 5-star ratings receive public review links, while 1 to 3-star ratings automatically alert the agency owner.",
    keyWorkflows: [
      "A Job Completed webhook arrives from ServiceM8 or simPRO",
      "The customer is asked for an initial feedback score",
      "A 4–5 rating receives the Google or Facebook review link",
      "A 1–3 rating sends an internal alert to the business owner"
    ],
    businessImpact: [
      "A consistent way to ask every customer for a review",
      "Unhappy customers are followed up privately first",
      "Less manual work requesting reviews"
    ],
    architectureHighlights: [
      "Custom JavaScript parsing nodes in n8n for badge validation and contact formatting",
      "Automatic trigger upon Job Completed webhook from ServiceM8 or simPRO",
      "Internal SMS alert to business owner when customer flags an unresolved issue"
    ],
    techStack: ["n8n", "Zapier Code (JavaScript)", "Google Business API", "Twilio SMS", "GoHighLevel"]
  },
  {
    id: "northshore-roof-inspection-funnel",
    title: "Northshore Roof Restoration — Free Inspection & Appointment Booking Funnel",
    tagline: "Live appointment booking landing page for Brisbane homeowners featuring a 3-step inspection qualification flow, emergency call routing, and automated calendar scheduling.",
    category: "Funnels & Landing Pages",
    projectType: "Client Implementation",
    year: "2024 — 2026",
    clientOrContext: "Northshore Roof Restoration (Brisbane, QLD)",
    liveUrl: "https://sites.leadconnectorhq.com/preview/5GW4ZKXaDbfF9F0CWKev",
    demoUrl: "https://sites.leadconnectorhq.com/preview/5GW4ZKXaDbfF9F0CWKev",
    image: "/assets/aistudio/northshore_roof_banner.webp",
    tags: ["HighLevel / LeadConnector", "Live Preview Funnel", "Appointment Booking", "Roofing Services", "Queensland Homeowners", "SMS Confirmations"],
    metrics: [
      { label: "Inspection Booking", value: "3 Simple Steps" },
      { label: "Emergency Dispatch", value: "Direct Hotline" },
      { label: "Trust Signals", value: "Licence & reviews" }
    ],
    summary: "Engineered and deployed a live, high-converting appointment booking landing page for Northshore Roof Restoration in Brisbane. Designed with a clean 3-step value flow (Book Inspection → Roof Inspection → Clear Recommendations), Google 5-star review integration, direct emergency contact routing (+61 414 998 826), and seamless LeadConnector calendar booking.",
    challenge: "Brisbane homeowners facing roof leaks or aging tiles needed a frictionless, zero-stress way to request a free roof inspection without complicated forms or waiting days for a quote callback.",
    solution: "Built a conversion-engineered LeadConnector booking page with local trust triggers (QBCC licensed, 10+ years experience, 5★ Google reviews), clear 3-step service breakdown, and a live appointment calendar directly connected to team dispatch with instant SMS/email confirmations.",
    keyWorkflows: [
      "The homeowner opens the landing page and chooses to book a free inspection",
      "The calendar shows live availability",
      "SMS and email confirmations go out straight away",
      "A reminder sequence runs before the appointment",
      "Storm and leak callers can use the direct-call banner"
    ],
    businessImpact: [
      "A simple route from enquiry to booked inspection",
      "Customers get instant confirmations",
      "Urgent callers have a direct contact option"
    ],
    architectureHighlights: [
      "Direct live preview link deployed on LeadConnector (sites.leadconnectorhq.com)",
      "Instant calendar reservation engine with real-time contractor availability",
      "Dedicated emergency direct-call banner (+61 414 998 826) for storm and leak damage",
      "Automated multi-step SMS appointment confirmation and reminder cadence"
    ],
    techStack: ["LeadConnector / GoHighLevel", "Custom CSS", "Appointment Engine", "Twilio SMS", "Brisbane Local SEO"]
  },
  {
    id: "service-core-tradie-funnels",
    title: "Service Core Tradie Client Acquisition System",
    tagline: "High-converting, conversion-focused landing page and lead capture engine engineered for home service businesses.",
    category: "Funnels & Landing Pages",
    projectType: "Demonstration",
    year: "2024 — 2026",
    clientOrContext: "Service Core (Australia)",
    image: "/assets/aistudio/Sample_Landing_Page_e0e3dc03.png",
    additionalImages: [
      "/assets/aistudio/Sample_Landing_Page_2_e1519d59.png"
    ],
    tags: ["GoHighLevel Funnels", "Landing Page Design", "Conversion Rate Optimization", "Video Sales Letters"],
    metrics: [
      { label: "Built For", value: "Booking demos" },
      { label: "Industries Covered", value: "Plumbing, Electrical, HVAC" },
      { label: "Design", value: "Mobile-first" }
    ],
    summary: "Designed and engineered conversion-optimized sales and landing pages for trade services. Featuring problem/solution breakdown, video walkthroughs, integration badges, testimonials, and frictionless calendar booking.",
    challenge: "Tradie businesses were wasting hundreds of dollars on paid Facebook and Google ads that sent traffic to generic, slow-loading websites that failed to convert visitors into booked appointments.",
    solution: "Engineered responsive, punchy funnel architectures that articulate the core problem ('Tradies aren't losing leads... they're losing follow-up') and present an immediate demo booking call to capture ready-to-buy clients.",
    keyWorkflows: [
      "A visitor lands on the page from an ad or search",
      "The page sets out the problem, a video walkthrough and social proof",
      "The visitor books a demo through the calendar",
      "Reminder workflows follow the booking"
    ],
    businessImpact: [
      "A clear path from ad click to booked call",
      "Works on mobile with tap-to-call and lead capture",
      "Booking connects to automated reminders"
    ],
    architectureHighlights: [
      "Seamless integration with GHL calendar booking and automated reminder workflows",
      "Interactive social proof widgets highlighting 5-star Google & Facebook reviews",
      "Clean mobile-first design with instant tap-to-call and lead capture modals"
    ],
    techStack: ["GoHighLevel Funnel Builder", "Custom CSS", "HTML5", "Vimeo / Wistia Embeds", "Stripe"]
  },
  {
    id: "lifevista-coaching-portal",
    title: "LifeVista Wellness & Coaching Automated Funnel",
    tagline: "Elegant client acquisition and discovery call scheduling portal for wellness and relationship coaching.",
    category: "Funnels & Landing Pages",
    projectType: "Client Implementation",
    year: "2024",
    clientOrContext: "LifeVista Coaching (Becky Thompson)",
    image: "/assets/aistudio/Sample_Landing_Page_3_d9f1d07c.png",
    tags: ["Landing Pages", "GoHighLevel", "Appointment Booking", "Email Campaigns", "Client Onboarding"],
    metrics: [
      { label: "Lead Qualification", value: "Automated" },
      { label: "Confirmations", value: "SMS & email" },
      { label: "Client Intake", value: "Online" }
    ],
    summary: "Developed a warm, trustworthy personal brand landing page and appointment booking funnel. Features service breakdown, intake questionnaire, client transformation testimonials, and integrated discovery call scheduling.",
    challenge: "Coaching practice had high drop-off between inquiry and consultation booking due to back-and-forth manual emailing for scheduling across time zones.",
    solution: "Implemented an intuitive 3-step booking flow (Book Discovery Call → Create Plan Together → Experience Transformation) with automated SMS and email confirmation cadences.",
    keyWorkflows: [
      "The visitor books a discovery call in three steps",
      "An intake questionnaire pre-qualifies the candidate",
      "SMS and email confirmations are sent",
      "A preparation email sequence goes out before the call"
    ],
    businessImpact: [
      "No back-and-forth emails to find a time",
      "Candidates are pre-qualified before the call",
      "Fewer double-bookings across calendars"
    ],
    architectureHighlights: [
      "Automated calendar sync preventing double-bookings across Google Calendar and CRM",
      "Intake survey logic that pre-qualifies coaching candidates before the consultation",
      "Automated email onboarding sequence delivering preparation guides before the call"
    ],
    techStack: ["GoHighLevel Funnels", "Google Calendar Sync", "Stripe Payments", "Email Automation"]
  }
];

export const DEFAULT_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Technical Virtual Assistant / Automation Specialist",
    company: "Service Core",
    period: "2024 — 2026",
    location: "Australia · Freelance / Remote",
    description: "Leading technical operations, custom CRM builds, and automation pipelines for Australian service and trade businesses.",
    careerHighlight: "Supported 350+ agency users for one agency while concurrently delivering automation and technical solutions for additional freelance clients.",
    achievements: [
      "Designed advanced GoHighLevel automation systems, landing pages, and end-to-end customer journeys.",
      "Integrated GoHighLevel with field service management platforms: ServiceM8, ServiceTitan, simPRO, and AroFlo.",
      "Built automated quote follow-up workflows so quotes are chased without manual effort.",
      "Developed invoice reminder automations and review request workflows that send low ratings to the business owner instead of Google."
    ],
    technologies: ["GoHighLevel", "ServiceM8", "simPRO", "ServiceTitan", "AroFlo", "n8n", "Zapier", "REST APIs"]
  },
  {
    id: "exp-2",
    role: "Technical Virtual Assistant / Automation Specialist",
    company: "LANA Software",
    period: "2021 — 2024",
    location: "Australia · Freelance / Remote",
    description: "Delivered scalable automation ecosystems, CRM troubleshooting, and integration workflows for hundreds of business owners.",
    careerHighlight: "Scaled agency sub-accounts and automated operations across home and trade services industries.",
    achievements: [
      "Diagnosed complex workflow, webhook, and API integration failures across multi-tiered software stacks.",
      "Developed lead nurturing, appointment reminders, sales follow-ups, and automated internal team notifications.",
      "Created review generation and reputation management workflows for trade business owners.",
      "Collaborated directly with agency owners to optimize business processes and eliminate manual data entry."
    ],
    technologies: ["GoHighLevel", "Zapier", "Make (Integromat)", "Pabbly Connect", "Twilio", "Mailgun", "HTML/CSS"]
  },
  {
    id: "exp-3",
    role: "Lead Generation & CRM Automation Specialist",
    company: "Independent Freelance",
    period: "2017 — 2021",
    location: "Remote",
    description: "Managed end-to-end B2B outbound prospecting campaigns, CRM lead pipeline architectures, and multi-channel outreach.",
    achievements: [
      "Built targeted B2B prospect lists using LinkedIn Sales Navigator and verified email scrapers.",
      "Designed cold email campaigns, multi-touch follow-up cadences, and appointment setting workflows.",
      "Integrated Facebook Ads lead forms directly into CRM pipelines with Zapier instant notifications.",
      "Maintained KPI tracking dashboards reporting lead response times, conversion rates, and client ROI."
    ],
    technologies: ["LinkedIn Sales Navigator", "Zapier", "CRM Tools", "Facebook Ads Manager", "Google Sheets", "Email Tools"]
  },
  {
    id: "exp-4",
    role: "Recruitment & Operations Specialist",
    company: "Freelance & Agency Engagements",
    period: "2013 — 2021",
    location: "Remote",
    description: "Supported recruitment and staffing operations, candidate screening, client onboarding, and day-to-day business processes.",
    achievements: [
      "Managed candidate sourcing, screening, skills evaluation, and recruitment coordination.",
      "Administered payroll, operational bookkeeping, property management records, and client support channels.",
      "Created structured SOP documentation to support client onboarding."
    ],
    technologies: ["Recruitment Tools", "Bookkeeping", "Client Support", "SOP Documentation", "Operations Management"]
  },
  {
    id: "exp-5",
    role: "Tier 2 Technical Support & Product Ready Trainer",
    company: "Microsoft",
    period: "2015 — 2017",
    location: "On-site / Corporate",
    description: "Delivered Tier 2 technical troubleshooting and customer support, and trained new support staff on products.",
    achievements: [
      "Investigated and resolved complex technical issues, operating system errors, and application problems for customers.",
      "Trained new customer support representatives as a Product Ready Trainer.",
      "Handled customer support by phone, email, and live chat."
    ],
    technologies: ["Tier 2 Support", "Technical Troubleshooting", "Training & Mentorship", "Customer Operations"]
  },
  {
    id: "exp-6",
    role: "Technical Recruiter",
    company: "Recruitment & Staffing",
    period: "2013 — 2015",
    location: "Remote",
    description: "Sourced and screened candidates for technical roles.",
    achievements: [
      "Sourced and screened candidates for technical positions.",
      "Coordinated recruitment activity between candidates and hiring teams."
    ],
    technologies: ["Candidate Sourcing", "Screening", "Recruitment Coordination"]
  }
];

export const DEFAULT_SKILL_GROUPS: SkillGroup[] = [
  {
    category: "CRM & Automation",
    description: "Platforms I use to automate workflows, trigger pipelines and manage leads.",
    skills: [
      { name: "GoHighLevel", note: "Workflows, sub-accounts, funnels, custom fields and triggers" },
      { name: "n8n", note: "Webhook branching, JavaScript nodes and API merges" },
      { name: "Zapier", note: "Multi-branch paths, webhooks and Code by Zapier" },
      { name: "Make", note: "Scenario design, routers and filters" },
      { name: "Pabbly Connect", note: "High-volume API trigger pipelines" },
      { name: "Workflow Automation", note: "Lead nurturing, reminders, follow-ups and internal alerts" }
    ]
  },
  {
    category: "Field Service Management",
    description: "Job management software I connect to the CRM.",
    skills: [
      { name: "ServiceM8", note: "Quotes, work orders, job statuses, badges and two-way sync" },
      { name: "simPRO", note: "Company records, site contacts, invoices and quote events" },
      { name: "ServiceTitan", note: "Customer matching and opportunity pipeline sync" },
      { name: "AroFlo", note: "Job tracking and webhook data ingestion" }
    ]
  },
  {
    category: "Integration & Technical",
    description: "How the systems are connected and kept working.",
    skills: [
      { name: "REST APIs", note: "Reading and writing data between platforms" },
      { name: "Webhooks", note: "Event triggers, routing and retries" },
      { name: "JSON", note: "Payload parsing and transformation" },
      { name: "Data Mapping", note: "Matching fields and records across systems" },
      { name: "Integration Troubleshooting", note: "Diagnosing failed workflows, webhooks and API calls" }
    ]
  },
  {
    category: "AI & Productivity",
    description: "AI used inside CRM and workflow systems.",
    skills: [
      { name: "AI Workflows", note: "AI steps inside CRM and n8n workflows" },
      { name: "AI Chatbots", note: "Conversational workflows for enquiries" },
      { name: "Prompt Engineering", note: "Writing prompts for reliable, repeatable outputs" },
      { name: "AI-Assisted Operations", note: "Using AI to reduce routine admin work" }
    ]
  },
  {
    category: "Business Operations",
    description: "The operations and support work behind the systems.",
    skills: [
      { name: "CRM Management", note: "Pipelines, tags, custom fields and sub-account administration" },
      { name: "Lead Generation", note: "B2B prospecting, email outreach and appointment setting" },
      { name: "Customer Support", note: "Phone, email, live chat and ticketing" },
      { name: "Technical Support", note: "Tier 2 troubleshooting and client technical assistance" },
      { name: "Process Documentation", note: "SOPs and training guides" }
    ]
  }
];

// Testimonials: the previous entries were anonymous and could not be verified, so they are removed.
// Add real testimonials here (real name, role, company, with permission). With none, the site shows a placeholder.
export const DEFAULT_TESTIMONIALS: Testimonial[] = [];
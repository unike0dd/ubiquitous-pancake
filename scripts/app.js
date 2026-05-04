import { renderHome } from "./pages/home.js";
import { renderForm } from "./pages/form.js";
import { renderService } from "./pages/service.js";
import { renderLearning } from "./pages/learning.js";
import { renderLegal } from "./pages/legal.js";
import { renderServicesHub } from "./pages/servicesHub.js";

const CONTENT = {
  en: {
    shell: {
      brandTagline: "Outsource, Delivered",
      themeLight: "Light",
      themeDark: "Dark",
      langNext: "ES",
      footerDescription:
        "Business support for logistics, admin, customer relations, and IT workflows.",
    },

    home: {
      type: "home",
      eyebrow: "Operational support for growing businesses",
      title: "Reliable day-to-day execution.",
      lead: "Gabriel Services helps modern businesses reduce delays, improve follow-through, and keep operations moving with dependable logistics, administrative, customer relations, and IT support.",
      intro:
        "The result is structured execution with better visibility, clearer communication, and support lanes aligned to your daily operating rhythm.",
      primaryCta: "Book a consultation",
      secondaryCta: "Explore services",
      panelTitle: "Visibility, rhythm, and response.",
      metrics: [
        ["Response", "Faster customer and internal follow-up"],
        ["Follow-up", "Structured routines and ownership"],
        ["Coverage", "Four support lanes for daily execution"],
      ],
      sectionTitle: "Process-driven operations",
      sectionIntro:
        "Practical, transparent, responsive support designed to keep recurring business workflows organized and moving.",
      services: [
        {
          key: "services-logistics",
          title: "Logistics Operations",
          copy: "Dispatch coordination, shipment visibility, customer updates, documentation, and escalation flow.",
        },
        {
          key: "services-admin",
          title: "Administrative Back Office",
          copy: "Scheduling, documentation, records, vendor coordination, and internal workflow support.",
        },
        {
          key: "services-customer",
          title: "Customer Relations",
          copy: "Follow-up, billing support, customer communication, issue tracking, and satisfaction continuity.",
        },
        {
          key: "services-it",
          title: "IT Support",
          copy: "Level I intake, Level II escalation, ticket flow, troubleshooting, and user support coordination.",
        },
      ],
      whyTitle: "Why businesses work with Gabriel Services",
      whyCopy:
        "Consistency, practical execution, and experienced professional-friendly support that feels like a fresh start for daily operations.",
    },

    contact: {
      type: "form",
      formKind: "contact",
      eyebrow: "Service inquiry",
      title: "Tell us what support you need.",
      lead: "Share your service need, preferred contact window, and operational challenge so your request can be routed with better context.",
      primaryCta: "Submit request",
      secondaryCta: "Clear form",
      status:
        "Status updates will appear here after validation and submission.",
      fields: [
        ["Full Name *", "Your primary contact person for this inquiry."],
        ["Email Address *", "Used for service updates and response threads."],
        ["Country Code", "International prefix format, for example +1."],
        [
          "Contact Number",
          "Best number for callback and schedule confirmation.",
        ],
        ["Best Contact Date", "Preferred day for follow-up coordination."],
        ["Best Contact Time", "Preferred time for follow-up coordination."],
        ["City", "City for routing and administrative context."],
        ["State / Province", "State or province for regional context."],
        ["Country Zip Code", "Country and postal code."],
        [
          "Message *",
          "Share your goals, current friction, and desired timeline.",
        ],
      ],
      servicesLegend: "Service need",
      servicesHelp: "Choose the requirements that cover your operations.",
    },

    careers: {
      type: "form",
      formKind: "careers",
      eyebrow: "Candidate intake",
      title: "Build your candidate profile.",
      lead: "Share your availability, service area, experience, education, tools, and project background so the hiring team can review your profile clearly.",
      primaryCta: "Submit application",
      secondaryCta: "Clear form",
      status:
        "Application status updates will appear here after validation and submission.",
      fields: [
        [
          "Full Name *",
          "Used for candidate record matching and interview scheduling.",
        ],
        ["Email Address *", "Primary inbox for updates from the hiring team."],
        ["Country Code *", "International phone prefix, for example +1."],
        ["Contact Number *", "Best phone number to reach you directly."],
        ["City *", "Current city or work location."],
        ["State / Province *", "Current state or province."],
        ["Country Zip Code *", "Country and postal code."],
        [
          "Availability *",
          "Full-time, part-time, flexible, contract, freelance, hourly, seasonal, or project-based.",
        ],
        [
          "LinkedIn Profile URL",
          "Example: https://www.linkedin.com/in/your-profile",
        ],
        [
          "Portfolio Link",
          "Optional portfolio, GitHub, website, or project link.",
        ],
        [
          "Tools / Systems Experience",
          "Tools, platforms, software, ticketing systems, CRMs, or logistics systems.",
        ],
        [
          "Career Summary *",
          "Briefly summarize strengths, education, and domain experience.",
        ],
      ],
      servicesLegend: "Area of interest",
      servicesHelp:
        "Select one or more service areas: Logistics, Admin, Customer Relations, and IT Support.",
    },

    servicesHub: {
      type: "servicesHub",
      eyebrow: "Services",
      title: "Choose a service lane",
      lead: "Select IT, Admin, Customer, or Logistics to view the full service page.",
      links: [
        { label: "IT", page: "services-it" },
        { label: "Admin", page: "services-admin" },
        { label: "Customer", page: "services-customer" },
        { label: "Logistics", page: "services-logistics" },
      ],
    },

    services: {
      logistics: {
        type: "service",
        eyebrow: "Service lane",
        title: "Logistics Operations",
        lead: "Reliable execution coverage for coordination-heavy daily logistics workflows.",
        overview:
          "This service helps manage communication, movement tracking, documentation, and follow-up across moving parts so logistics operations stay organized, visible, and on track.",
        covers: [
          "Dispatch and coordination",
          "Movement tracking",
          "Communication continuity",
          "Documentation and follow-up",
          "Escalation rhythm",
        ],
        outcomes: [
          "Reduced operational gaps",
          "Better execution visibility",
          "Reliable delivery support",
        ],
        engagement:
          "We begin by reviewing your workflow, priorities, and communication requirements. Support is then aligned to your process for clearer coordination and more dependable follow-through.",
      },

      admin: {
        type: "service",
        eyebrow: "Service lane",
        title: "Administrative Back Office",
        lead: "Structured coverage for recurring administrative work that keeps operations steady.",
        overview:
          "This service helps manage documentation flow, scheduling routines, records, reporting, vendor coordination, and internal follow-up so business functions remain organized and dependable.",
        covers: [
          "Documentation and records",
          "Scheduling and administrative flow",
          "Reporting and process upkeep",
          "Vendor coordination",
          "Recurring administrative follow-through",
        ],
        outcomes: [
          "Cleaner admin continuity",
          "Reduced backlog",
          "Better process clarity",
        ],
        engagement:
          "We begin by reviewing your recurring priorities and communication rhythm. Support is aligned to your internal process so tasks are tracked, organized, and completed with greater control.",
      },

      customer: {
        type: "service",
        eyebrow: "Service lane",
        title: "Customer Relations",
        lead: "Structured coverage for customer communication, after-sales continuity, and ongoing follow-up.",
        overview:
          "This service helps businesses stay responsive and professional across day-to-day customer interactions while reducing communication pressure on internal teams.",
        covers: [
          "Customer communication",
          "Follow-up handling",
          "Customer status updates",
          "Billing support coordination",
          "Escalation continuity",
        ],
        outcomes: [
          "Better response consistency",
          "Improved customer experience",
          "Clearer service rhythm",
        ],
        engagement:
          "We begin by reviewing your communication workflow, response priorities, and follow-up expectations. Support is then aligned to your customer journey and internal process.",
      },

      it: {
        type: "service",
        eyebrow: "Service lane",
        title: "IT Support",
        lead: "Reliable day-to-day coverage for routine internal technical needs.",
        overview:
          "This service helps organize request intake, ticket flow, user communication, triage, basic troubleshooting, and Level II escalation visibility without adding unnecessary complexity.",
        covers: [
          "Ticket coordination",
          "Level I intake and triage",
          "Troubleshooting support",
          "User communication",
          "Level II escalation handling",
        ],
        outcomes: [
          "Organized support workflow",
          "Faster handling continuity",
          "Better visibility across open issues",
        ],
        engagement:
          "We begin by reviewing your request flow, priority rules, systems, and communication needs. Support is aligned to your process so technical requests are tracked and followed through consistently.",
      },
    },

    learning: {
      logistics: {
        type: "learning",
        eyebrow: "Learning track",
        title: "Learn Logistics Operations",
        lead: "Understand dispatch coordination, movement tracking, documentation, and escalation rhythm before requesting support.",
        modules: [
          "What logistics coordination covers",
          "How tracking visibility improves operations",
          "When escalation support becomes necessary",
          "What information to prepare before onboarding",
        ],
      },
      admin: {
        type: "learning",
        eyebrow: "Learning track",
        title: "Learn Administrative Back Office",
        lead: "Understand how documentation, scheduling, records, reporting, and internal follow-up improve operational clarity.",
        modules: [
          "What admin back office support covers",
          "How recurring workflows are stabilized",
          "How records and scheduling reduce friction",
          "What to prepare before requesting coverage",
        ],
      },
      customer: {
        type: "learning",
        eyebrow: "Learning track",
        title: "Learn Customer Relations",
        lead: "Understand customer communication, after-sales follow-up, status updates, and service continuity.",
        modules: [
          "What customer relations support covers",
          "How follow-up protects customer experience",
          "How escalation continuity reduces missed updates",
          "What communication details to prepare",
        ],
      },
      it: {
        type: "learning",
        eyebrow: "Learning track",
        title: "Learn IT Support",
        lead: "Understand Level I intake, ticket coordination, troubleshooting support, and Level II escalation paths.",
        modules: [
          "What IT Support Level I covers",
          "When Level II escalation is needed",
          "How ticket flow improves visibility",
          "What systems and issue details to prepare",
        ],
      },
    },

    legal: {
      terms: {
        type: "legal",
        eyebrow: "Legal",
        title: "Terms & Conditions",
        effective: "Effective date: March 18, 2026",
        intro:
          "These sample terms explain website usage rules, service information boundaries, recruitment submissions, acceptable communications, and proposal context.",
        sections: [
          [
            "About Gabriel Services",
            "Website information is provided to describe business support services and guide prospective clients or candidates.",
          ],
          [
            "Website use",
            "Visitors should use the website lawfully and avoid sending harmful, misleading, abusive, or unauthorized content.",
          ],
          [
            "Service information and proposals",
            "Website service descriptions are informational and do not create a final scope, price, contract, or guarantee.",
          ],
          [
            "Recruitment and candidate submissions",
            "Career submissions are reviewed based on business need, role fit, and available opportunities.",
          ],
          [
            "Privacy and cookies",
            "Personal information and cookie preferences are handled according to the privacy and cookies pages.",
          ],
        ],
      },
      cookies: {
        type: "legal",
        eyebrow: "Legal",
        title: "Cookies Consent",
        effective: "Effective date: March 18, 2026",
        intro:
          "This sample cookies page explains what cookies are, how preferences work, and how visitors may manage optional technologies.",
        sections: [
          [
            "What cookies are",
            "Cookies and similar technologies help websites remember preferences, support security, and understand basic usage.",
          ],
          [
            "How we use cookies",
            "Strictly necessary cookies support core functionality. Optional preferences, analytics, and marketing cookies should depend on visitor consent.",
          ],
          [
            "Manage your preferences",
            "Visitors should be able to save preferences, accept all, or reject optional cookies.",
          ],
          [
            "Browser controls",
            "Visitors may also manage cookie behavior through browser settings.",
          ],
          [
            "Updates to this page",
            "Cookie practices should be reviewed when website tools or consent options change.",
          ],
        ],
      },
      privacy: {
        type: "legal",
        eyebrow: "Legal",
        title: "Privacy and GDPR",
        effective: "Effective date: March 18, 2026",
        intro:
          "This sample privacy page explains personal data categories, processing purposes, lawful bases, retention, rights, security, and contact requests.",
        sections: [
          [
            "Categories of personal data",
            "Contact, service inquiry, candidate profile, communication, and technical website data may be processed when submitted or generated through use of the website.",
          ],
          [
            "Purposes of processing",
            "Data is used to respond to inquiries, review candidate submissions, manage preferences, secure the website, and improve service workflows.",
          ],
          [
            "Lawful bases under GDPR",
            "Processing may rely on consent, legitimate interests, contract preparation, legal obligations, or other applicable bases.",
          ],
          [
            "Data subject rights",
            "Eligible users may request access, correction, deletion, restriction, portability, or objection where applicable.",
          ],
          [
            "Contact and requests",
            "Privacy requests should be routed through the official contact channel.",
          ],
        ],
      },
    },
  },

  es: {
    shell: {
      brandTagline: "Outsource, Delivered",
      themeLight: "Claro",
      themeDark: "Oscuro",
      langNext: "EN",
      footerDescription:
        "Soporte empresarial para flujos de logística, administración, relaciones con clientes y TI.",
    },

    home: {
      type: "home",
      eyebrow: "Soporte operativo para empresas en crecimiento",
      title: "Ejecución diaria confiable.",
      lead: "Gabriel Services ayuda a empresas modernas a reducir demoras, mejorar el seguimiento y mantener sus operaciones en movimiento con soporte confiable en logística, administración, relaciones con clientes y TI.",
      intro:
        "El resultado es una ejecución más estructurada, con mayor visibilidad, comunicación clara y líneas de soporte alineadas al ritmo operativo diario.",
      primaryCta: "Reservar una consulta",
      secondaryCta: "Explorar servicios",
      panelTitle: "Visibilidad, ritmo y respuesta.",
      metrics: [
        ["Respuesta", "Seguimiento interno y al cliente con mayor rapidez"],
        ["Seguimiento", "Rutinas estructuradas y responsabilidad clara"],
        ["Cobertura", "Cuatro líneas de soporte para la ejecución diaria"],
      ],
      sectionTitle: "Operaciones impulsadas por procesos",
      sectionIntro:
        "Soporte práctico, transparente y receptivo diseñado para mantener los flujos recurrentes organizados y en movimiento.",
      services: [
        {
          key: "services-logistics",
          title: "Operaciones logísticas",
          copy: "Coordinación de despacho, visibilidad de envíos, actualizaciones al cliente, documentación y escalación.",
        },
        {
          key: "services-admin",
          title: "Back Office administrativo",
          copy: "Agenda, documentación, registros, coordinación con proveedores y soporte a flujos internos.",
        },
        {
          key: "services-customer",
          title: "Relaciones con clientes",
          copy: "Seguimiento, soporte de facturación, comunicación con clientes, control de casos y continuidad de satisfacción.",
        },
        {
          key: "services-it",
          title: "Soporte de TI",
          copy: "Recepción Nivel I, escalación Nivel II, flujo de tickets, troubleshooting y coordinación de soporte a usuarios.",
        },
      ],
      whyTitle: "Por qué las empresas trabajan con Gabriel Services",
      whyCopy:
        "Consistencia, ejecución práctica y soporte profesional con experiencia que aporta un nuevo comienzo a las operaciones diarias.",
    },

    contact: {
      type: "form",
      formKind: "contact",
      eyebrow: "Solicitud de servicio",
      title: "Cuéntenos qué soporte necesita.",
      lead: "Comparta su necesidad de servicio, ventana preferida de contacto y reto operativo para enrutar su solicitud con mejor contexto.",
      primaryCta: "Enviar solicitud",
      secondaryCta: "Limpiar formulario",
      status:
        "Las actualizaciones de estado aparecerán aquí después de la validación y el envío.",
      fields: [
        [
          "Nombre completo *",
          "Persona principal de contacto para esta solicitud.",
        ],
        [
          "Correo electrónico *",
          "Se usará para actualizaciones y respuestas del servicio.",
        ],
        ["Código de país", "Formato de prefijo internacional, por ejemplo +1."],
        [
          "Número de contacto",
          "Mejor número para llamada y confirmación de agenda.",
        ],
        [
          "Mejor fecha de contacto",
          "Día preferido para coordinación de seguimiento.",
        ],
        [
          "Mejor hora de contacto",
          "Hora preferida para coordinación de seguimiento.",
        ],
        ["Ciudad", "Ciudad para contexto administrativo y de enrutamiento."],
        ["Estado / Provincia", "Estado o provincia para contexto regional."],
        ["País y código postal", "País y código postal."],
        [
          "Mensaje *",
          "Comparta sus metas, fricción actual y cronograma deseado.",
        ],
      ],
      servicesLegend: "Necesidad de servicio",
      servicesHelp: "Seleccione los requisitos que cubren sus operaciones.",
    },

    careers: {
      type: "form",
      formKind: "careers",
      eyebrow: "Solicitud de candidato",
      title: "Construya su perfil de candidato.",
      lead: "Comparta disponibilidad, área de servicio, experiencia, educación, herramientas y proyectos para que el equipo pueda revisar su perfil con claridad.",
      primaryCta: "Enviar aplicación",
      secondaryCta: "Limpiar formulario",
      status:
        "Las actualizaciones de la aplicación aparecerán aquí después de la validación y el envío.",
      fields: [
        [
          "Nombre completo *",
          "Se usa para registro del candidato y coordinación de entrevista.",
        ],
        [
          "Correo electrónico *",
          "Bandeja principal para actualizaciones del equipo.",
        ],
        [
          "Código de país *",
          "Prefijo telefónico internacional, por ejemplo +1.",
        ],
        ["Número de contacto *", "Mejor número para contactarle directamente."],
        ["Ciudad *", "Ciudad actual o ubicación de trabajo."],
        ["Estado / Provincia *", "Estado o provincia actual."],
        ["País y código postal *", "País y código postal."],
        [
          "Disponibilidad *",
          "Tiempo completo, medio tiempo, flexible, contrato, freelance, por hora, temporada o por proyecto.",
        ],
        ["URL de LinkedIn", "Ejemplo: https://www.linkedin.com/in/su-perfil"],
        [
          "Portafolio",
          "Portafolio, GitHub, sitio web o enlace de proyecto opcional.",
        ],
        [
          "Experiencia en herramientas / sistemas",
          "Herramientas, plataformas, software, ticketing, CRM o sistemas logísticos.",
        ],
        [
          "Resumen profesional *",
          "Resuma fortalezas, educación y experiencia por dominio.",
        ],
      ],
      servicesLegend: "Área de interés",
      servicesHelp:
        "Seleccione una o más áreas: Logística, Administración, Relaciones con clientes y Soporte de TI.",
    },

    servicesHub: {
      type: "servicesHub",
      eyebrow: "Servicios",
      title: "Elige un frente de servicio",
      lead: "Selecciona TI, Administración, Clientes o Logística para ver la página completa del servicio.",
      links: [
        { label: "TI", page: "services-it" },
        { label: "Admin", page: "services-admin" },
        { label: "Clientes", page: "services-customer" },
        { label: "Logística", page: "services-logistics" },
      ],
    },

    services: {
      logistics: {
        type: "service",
        eyebrow: "Línea de servicio",
        title: "Operaciones logísticas",
        lead: "Cobertura confiable para flujos logísticos diarios con alta coordinación.",
        overview:
          "Este servicio ayuda a gestionar comunicación, seguimiento de movimiento, documentación y follow-up entre múltiples partes para mantener las operaciones logísticas organizadas, visibles y encaminadas.",
        covers: [
          "Despacho y coordinación",
          "Seguimiento de movimiento",
          "Continuidad de comunicación",
          "Documentación y seguimiento",
          "Ritmo de escalación",
        ],
        outcomes: [
          "Menos brechas operativas",
          "Mejor visibilidad de ejecución",
          "Soporte confiable de entrega",
        ],
        engagement:
          "Iniciamos revisando su flujo de trabajo, prioridades y requisitos de comunicación. Luego alineamos el soporte a su proceso para una coordinación más clara y un seguimiento más confiable.",
      },

      admin: {
        type: "service",
        eyebrow: "Línea de servicio",
        title: "Back Office administrativo",
        lead: "Cobertura estructurada para trabajo administrativo recurrente que mantiene las operaciones estables.",
        overview:
          "Este servicio ayuda a manejar documentación, agenda, registros, reportes, coordinación con proveedores y seguimiento interno para mantener las funciones de negocio organizadas y consistentes.",
        covers: [
          "Documentación y registros",
          "Agenda y flujo administrativo",
          "Reportes y mantenimiento de procesos",
          "Coordinación con proveedores",
          "Seguimiento administrativo recurrente",
        ],
        outcomes: [
          "Continuidad administrativa más limpia",
          "Reducción de acumulación de tareas",
          "Mayor claridad del proceso",
        ],
        engagement:
          "Iniciamos revisando prioridades recurrentes y ritmo de comunicación. Luego alineamos el soporte al proceso interno para dar seguimiento, orden y mayor control.",
      },

      customer: {
        type: "service",
        eyebrow: "Línea de servicio",
        title: "Relaciones con clientes",
        lead: "Cobertura estructurada para comunicación con clientes, continuidad postventa y seguimiento diario.",
        overview:
          "Este servicio ayuda a las empresas a mantenerse receptivas y profesionales en interacciones diarias con clientes, reduciendo presión de comunicación sobre equipos internos.",
        covers: [
          "Comunicación con clientes",
          "Gestión de seguimiento",
          "Actualizaciones de estado",
          "Coordinación de soporte de facturación",
          "Continuidad de escalación",
        ],
        outcomes: [
          "Mejor consistencia de respuesta",
          "Mejor experiencia del cliente",
          "Ritmo de servicio más claro",
        ],
        engagement:
          "Iniciamos revisando su flujo de comunicación, prioridades de respuesta y expectativas de seguimiento. Luego alineamos el soporte al recorrido del cliente y al proceso interno.",
      },

      it: {
        type: "service",
        eyebrow: "Línea de servicio",
        title: "Soporte de TI",
        lead: "Cobertura diaria confiable para necesidades técnicas internas recurrentes.",
        overview:
          "Este servicio ayuda a organizar intake, flujo de tickets, comunicación con usuarios, triage, troubleshooting básico y visibilidad de escalación Nivel II sin añadir complejidad innecesaria.",
        covers: [
          "Coordinación de tickets",
          "Intake y triage Nivel I",
          "Soporte de troubleshooting",
          "Comunicación con usuarios",
          "Gestión de escalación Nivel II",
        ],
        outcomes: [
          "Flujo de soporte más organizado",
          "Mayor continuidad de atención",
          "Mejor visibilidad de casos abiertos",
        ],
        engagement:
          "Iniciamos revisando flujo de solicitudes, reglas de prioridad, sistemas y necesidades de comunicación. Luego alineamos el soporte para dar seguimiento consistente a los casos técnicos.",
      },
    },

    learning: {
      logistics: {
        type: "learning",
        eyebrow: "Ruta de aprendizaje",
        title: "Aprender Operaciones logísticas",
        lead: "Comprenda coordinación de despacho, seguimiento de movimiento, documentación y ritmo de escalación antes de solicitar soporte.",
        modules: [
          "Qué cubre la coordinación logística",
          "Cómo la visibilidad de seguimiento mejora las operaciones",
          "Cuándo se necesita soporte de escalación",
          "Qué información preparar antes del onboarding",
        ],
      },
      admin: {
        type: "learning",
        eyebrow: "Ruta de aprendizaje",
        title: "Aprender Back Office administrativo",
        lead: "Comprenda cómo documentación, agenda, registros, reportes y seguimiento interno mejoran la claridad operativa.",
        modules: [
          "Qué cubre el soporte administrativo",
          "Cómo se estabilizan flujos recurrentes",
          "Cómo registros y agenda reducen fricción",
          "Qué preparar antes de solicitar cobertura",
        ],
      },
      customer: {
        type: "learning",
        eyebrow: "Ruta de aprendizaje",
        title: "Aprender Relaciones con clientes",
        lead: "Comprenda comunicación con clientes, seguimiento postventa, actualizaciones de estado y continuidad de servicio.",
        modules: [
          "Qué cubre relaciones con clientes",
          "Cómo el seguimiento protege la experiencia del cliente",
          "Cómo la escalación reduce actualizaciones perdidas",
          "Qué detalles de comunicación preparar",
        ],
      },
      it: {
        type: "learning",
        eyebrow: "Ruta de aprendizaje",
        title: "Aprender Soporte de TI",
        lead: "Comprenda intake Nivel I, coordinación de tickets, troubleshooting y rutas de escalación Nivel II.",
        modules: [
          "Qué cubre Soporte de TI Nivel I",
          "Cuándo se necesita escalación Nivel II",
          "Cómo el flujo de tickets mejora la visibilidad",
          "Qué sistemas y detalles del caso preparar",
        ],
      },
    },

    legal: {
      terms: {
        type: "legal",
        eyebrow: "Legal",
        title: "Términos y Condiciones",
        effective: "Fecha de vigencia: 18 de marzo de 2026",
        intro:
          "Estos términos de muestra explican reglas de uso del sitio, límites de información de servicios, envíos de candidatos, comunicaciones aceptables y contexto de propuestas.",
        sections: [
          [
            "Acerca de Gabriel Services",
            "La información del sitio describe servicios de soporte empresarial y orienta a posibles clientes o candidatos.",
          ],
          [
            "Uso del sitio web",
            "Los visitantes deben usar el sitio legalmente y evitar contenido dañino, engañoso, abusivo o no autorizado.",
          ],
          [
            "Información de servicios y propuestas",
            "Las descripciones del sitio son informativas y no crean alcance final, precio, contrato o garantía.",
          ],
          [
            "Reclutamiento y solicitudes de candidatos",
            "Las solicitudes de carrera se revisan según necesidad del negocio, ajuste al rol y oportunidades disponibles.",
          ],
          [
            "Privacidad y cookies",
            "La información personal y preferencias de cookies se manejan según las páginas de privacidad y cookies.",
          ],
        ],
      },
      cookies: {
        type: "legal",
        eyebrow: "Legal",
        title: "Consentimiento de Cookies",
        effective: "Fecha de vigencia: 18 de marzo de 2026",
        intro:
          "Esta página de muestra explica qué son las cookies, cómo funcionan las preferencias y cómo los visitantes pueden gestionar tecnologías opcionales.",
        sections: [
          [
            "Qué son las cookies",
            "Las cookies y tecnologías similares ayudan a recordar preferencias, apoyar seguridad y entender uso básico del sitio.",
          ],
          [
            "Cómo usamos cookies",
            "Las cookies estrictamente necesarias apoyan funciones esenciales. Las opcionales de preferencias, analítica y marketing deben depender del consentimiento.",
          ],
          [
            "Gestionar preferencias",
            "Los visitantes deben poder guardar preferencias, aceptar todo o rechazar cookies opcionales.",
          ],
          [
            "Controles del navegador",
            "Los visitantes también pueden gestionar cookies desde la configuración del navegador.",
          ],
          [
            "Actualizaciones de esta página",
            "Las prácticas de cookies deben revisarse cuando cambien herramientas o controles de consentimiento.",
          ],
        ],
      },
      privacy: {
        type: "legal",
        eyebrow: "Legal",
        title: "Privacidad y RGPD",
        effective: "Fecha de vigencia: 18 de marzo de 2026",
        intro:
          "Esta página de muestra explica categorías de datos personales, fines de procesamiento, bases legales, retención, derechos, seguridad y solicitudes de contacto.",
        sections: [
          [
            "Categorías de datos personales",
            "Pueden procesarse datos de contacto, solicitudes de servicio, perfiles de candidatos, comunicaciones y datos técnicos del sitio.",
          ],
          [
            "Fines del procesamiento",
            "Los datos se usan para responder solicitudes, revisar candidatos, gestionar preferencias, proteger el sitio y mejorar flujos de servicio.",
          ],
          [
            "Bases legales bajo RGPD",
            "El procesamiento puede apoyarse en consentimiento, intereses legítimos, preparación contractual, obligaciones legales u otras bases aplicables.",
          ],
          [
            "Derechos del titular de datos",
            "Usuarios elegibles pueden solicitar acceso, corrección, eliminación, restricción, portabilidad u oposición cuando aplique.",
          ],
          [
            "Contacto y solicitudes",
            "Las solicitudes de privacidad deben enviarse por el canal oficial de contacto.",
          ],
        ],
      },
    },
  },
};

const SERVICES = [
  "Logistics Operations",
  "Administrative Back Office",
  "Customer Relations",
  "IT Support",
];
const SERVICE_KEYS = {
  "services-logistics": "logistics",
  "services-admin": "admin",
  "services-customer": "customer",
  "services-it": "it",
  "learning-logistics": "logistics",
  "learning-admin": "admin",
  "learning-customer": "customer",
  "learning-it": "it",
};

const LEGAL_KEYS = {
  "legal-terms": "terms",
  "legal-cookies": "cookies",
  "legal-privacy": "privacy",
};

let activeLang = "en";
let activePage = "home";

const app = document.getElementById("app");
const html = document.documentElement;
const body = document.body;
const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");
const brandTagline = document.getElementById("brandTagline");
const footerDescription = document.getElementById("footerDescription");

function text(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setShell() {
  const shell = CONTENT[activeLang].shell;
  brandTagline.textContent = shell.brandTagline;
  footerDescription.textContent = shell.footerDescription;
  langToggle.textContent = shell.langNext;
  themeToggle.textContent =
    html.dataset.theme === "dark" ? shell.themeLight : shell.themeDark;
  html.lang = activeLang;
}

function getPageData(pageKey) {
  const data = CONTENT[activeLang];

  if (pageKey === "home") return data.home;
  if (pageKey === "contact") return data.contact;
  if (pageKey === "careers") return data.careers;
  if (pageKey === "services-index") return data.servicesHub;

  if (pageKey.startsWith("services-")) {
    return data.services[SERVICE_KEYS[pageKey]];
  }

  if (pageKey.startsWith("learning-")) {
    return data.learning[SERVICE_KEYS[pageKey]];
  }

  if (pageKey.startsWith("legal-")) {
    return data.legal[LEGAL_KEYS[pageKey]];
  }

  return data.home;
}

function render() {
  const page = getPageData(activePage);

  if (page.type === "home") app.innerHTML = renderHome(page, text);
  if (page.type === "form") app.innerHTML = renderForm(page, text, SERVICES);
  if (page.type === "service") app.innerHTML = renderService(page, text);
  if (page.type === "learning") app.innerHTML = renderLearning(page, text);
  if (page.type === "legal") app.innerHTML = renderLegal(page, text);
  if (page.type === "servicesHub") app.innerHTML = renderServicesHub(page, text);

  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.page === activePage);
  });

  setShell();
  bindPageButtons();
  revealItems();
}

function bindPageButtons() {
  document.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (button.tagName === "A") event.preventDefault();
      activePage = button.dataset.page;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll("form[data-sample-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector("[data-status]");
      if (status) {
        status.textContent =
          activeLang === "en"
            ? "Sample only: keep the existing repo submit handler and CF Worker connection."
            : "Muestra solamente: conserve el manejador de envío actual del repo y la conexión con CF Worker.";
      }
    });
  });
}

function revealItems() {
  const items = Array.from(document.querySelectorAll(".reveal"));

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
  );

  items.forEach((item) => observer.observe(item));
}

function setTheme(theme) {
  html.dataset.theme = theme;

  if (theme === "dark") {
    body.classList.add("theme-dark");
  } else {
    body.classList.remove("theme-dark", "mouse-active");
  }

  setShell();
}

function toggleTheme() {
  setTheme(html.dataset.theme === "dark" ? "light" : "dark");
}

function toggleLang() {
  activeLang = activeLang === "en" ? "es" : "en";
  render();
}

function handleMouseMove(event) {
  html.style.setProperty("--mouse-x", event.clientX + "px");
  html.style.setProperty("--mouse-y", event.clientY + "px");

  if (html.dataset.theme !== "dark") return;

  body.classList.add("mouse-active");

  window.clearTimeout(handleMouseMove.timer);
  handleMouseMove.timer = window.setTimeout(() => {
    body.classList.remove("mouse-active");
  }, 180);
}

langToggle.addEventListener("click", toggleLang);
themeToggle.addEventListener("click", toggleTheme);

document.querySelectorAll("[data-footer-page]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    activePage = link.dataset.footerPage;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

window.addEventListener("mousemove", handleMouseMove, { passive: true });

window.addEventListener("mouseleave", () => {
  body.classList.remove("mouse-active");
});

render();

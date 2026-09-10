// mes infos, à modifier ici — fr / en côte à côte pour chaque texte

const SITE_DATA = {

  roles: [
    { fr: "Développeuse Full Stack", en: "Full Stack Developer" },
    { fr: "Testeuse QA", en: "QA Tester" },
    { fr: "Chef de Projet", en: "Project Manager" }
  ],

  toolkit: [
    {
      title: { fr: "Back-end", en: "Back-end" },
      tags: ["PHP", "Symfony", "Laravel", "Java", "Spring Boot", "Python", "Django", "C++ (notions)"]
    },
    {
      title: { fr: "Front-end & mobile", en: "Front-end & mobile" },
      tags: ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "React Native", "Flutter", "Tailwind CSS"]
    },
    {
      title: { fr: "Bases de données", en: "Databases" },
      tags: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "MariaDB"]
    },
    {
      title: { fr: "Outils & méthodes", en: "Tools & methods" },
      tags: ["Git / GitLab", "Gitflow", "CI/CD", "DevOps", "Docker", "Postman", "Jira Xray", "Confluence", "Scrum", "Power BI (notions)", "JUnit (notions)"]
    },
    {
      title: { fr: "Design & UI/UX", en: "Design & UI/UX" },
      tags: ["Figma", "Photoshop", "Illustrator"]
    }
  ],

  projects: [
    {
      name: "HopColis",
      status: { label: { fr: "Bêta en ligne", en: "Beta live" }, variant: "live" },
      description: {
        fr: "Co-fondatrice d'une plateforme de crowdshipping ciblant le Gabon et la Côte d'Ivoire, avec intégration de moyens de paiement mobile (Mobile Money).",
        en: "Co-founder of a crowdshipping platform targeting Gabon and Côte d'Ivoire, with mobile payment integration (Mobile Money)."
      },
      tags: ["Next.js", "JavaScript", "Tailwind CSS", "React Native", "Flutter", "Django"],
      link: { url: "https://beta.hopcolis.com", label: "beta.hopcolis.com" }
    },
    {
      name: "Suivi de candidatures",
      status: { label: { fr: "Outil personnel", en: "Personal tool" }, variant: "tool" },
      description: {
        fr: "API REST développée en Laravel pour centraliser et suivre l'avancement de mes candidatures pendant ma recherche d'emploi.",
        en: "REST API built with Laravel to centralize and track my job applications during my job search."
      },
      tags: ["Laravel", "PHP"],
      link: { url: "https://github.com/ndorekia94/suivi-candidatures-api", label: { fr: "Code sur GitHub", en: "Code on GitHub" } }
    },
    {
      name: "Cabalou.net",
      status: { label: { fr: "En ligne", en: "Live" }, variant: "live" },
      description: {
        fr: "Plateforme de réservation d'hébergements pour professionnels, avec un focus location saisonnière en Afrique. Développeuse Front-end : conception, développement et mise en production menés en autonomie.",
        en: "Accommodation booking platform for business travelers, focused on short-term rentals in Africa. Front-end developer: design, development and deployment handled independently."
      },
      tags: ["JavaScript", "Next.js"],
      link: { url: "https://cabalou.net", label: "cabalou.net" }
    }
  ],

  experience: [
    {
      date: "2024 – 2025",
      title: { fr: "Développeuse Full Stack (alternance)", en: "Full Stack Developer (work-study)" },
      org: "Bouygues Telecom — Meudon",
      bullets: [
        {
          fr: "Développement back-end en Java/Spring Boot et PHP/Symfony avec Vue.js, exposé via API REST, pour des applications métiers B2B au sein d'une feature team.",
          en: "Back-end development in Java/Spring Boot and PHP/Symfony with Vue.js, exposed via REST API, for B2B business applications within a feature team."
        },
        {
          fr: "Participation aux choix techniques et à l'architecture applicative, en coordination avec les équipes Produit et Développement.",
          en: "Involved in technical decisions and application architecture, in coordination with the Product and Development teams."
        },
        {
          fr: "Tests et vérification des livrables avec Postman ; gestion de version Git/GitLab (Gitflow), intégration continue (CI/CD) et conteneurisation via Docker.",
          en: "Testing and verification of deliverables with Postman; version control with Git/GitLab (Gitflow), continuous integration (CI/CD) and containerization with Docker."
        },
        {
          fr: "Cérémonies agiles (dailies, revues de sprint) au sein d'une équipe Scrum.",
          en: "Agile ceremonies (daily stand-ups, sprint reviews) within a Scrum team."
        }
      ]
    },
    {
      date: "2019 – 2023",
      title: { fr: "Développeuse Full Stack", en: "Full Stack Developer" },
      org: "ANAC — Agence Nationale de l'Aviation Civile, Gabon",
      bullets: [
        {
          fr: "Stage de 4 mois transformé en CDI, poste occupé sur plus de 4 ans avec une autonomie croissante.",
          en: "4-month internship converted into a permanent position, held for over 4 years with growing autonomy."
        },
        {
          fr: "Conception et développement full-stack de bout en bout d'une application de génération et d'édition des documents de la Circulation Aérienne.",
          en: "End-to-end full-stack design and development of an application for generating and editing Air Traffic Control documents."
        },
        {
          fr: "Bases de données MySQL/PostgreSQL. Maintenance évolutive et corrective en condition opérationnelle : diagnostic, correction d'anomalies, documentation technique et fonctionnelle.",
          en: "MySQL/PostgreSQL databases. Ongoing maintenance and bug fixing in a live operational environment: diagnostics, bug fixes, technical and functional documentation."
        }
      ]
    },
    {
      date: "2019",
      title: { fr: "Analyste programmeur (CDD)", en: "Programmer Analyst (fixed-term contract)" },
      org: "CFAO Technology & Energy — Gabon",
      bullets: [
        {
          fr: "Analyse des besoins et rédaction du cahier des charges pour une solution de gestion et de suivi des chèques fournisseurs (PHP, PostgreSQL), avec entretiens utilisateurs.",
          en: "Requirements analysis and specifications for a supplier check management and tracking solution (PHP, PostgreSQL), including user interviews."
        }
      ]
    }
  ],

  formation: [
    {
      title: { fr: "Master 2 — Conception et Développement de Solutions Informatiques", en: "Master's Degree — IT Solutions Design & Development" },
      org: "Insta Paris"
    },
    {
      title: { fr: "Licence professionnelle — Analyste Programmeur", en: "Professional Bachelor's Degree — Programmer Analyst" },
      org: "IAI, Gabon"
    }
  ],

  extras: [
    {
      title: { fr: "Langues", en: "Languages" },
      tags: [
        { fr: "Français — natif", en: "French — native" },
        { fr: "Anglais — professionnel", en: "English — professional" }
      ]
    },
    {
      title: { fr: "Atouts", en: "Strengths" },
      tags: [
        { fr: "Autonomie", en: "Autonomy" },
        { fr: "Adaptabilité", en: "Adaptability" },
        { fr: "Esprit d'équipe", en: "Team spirit" },
        { fr: "Rigueur", en: "Rigor" }
      ]
    },
    {
      title: { fr: "Loisirs", en: "Interests" },
      tags: [
        { fr: "Volley-ball", en: "Volleyball" },
        { fr: "Nature & découverte", en: "Nature & exploring" },
        { fr: "Voyages", en: "Travel" },
        { fr: "Cuisine", en: "Cooking" }
      ]
    }
  ],

  contact: {
    email: "ndokapris@gmail.com",
    linkedin: "https://www.linkedin.com/in/kaprisky-r%C3%A9kia-ndo-moutsinga-b481ba175/",
    github: "https://github.com/ndorekia94/suivi-candidatures-api"
  }
};

// tous les textes fixes de la page (nav, hero, titres de section...)
const UI_TEXT = {
  fr: {
    nav: { profil: "Profil", competences: "Compétences", projets: "Projets", experience: "Expérience", contact: "Contact" },
    hero: {
      eyebrow: "Développement · Qualité logicielle · Gestion de projet",
      lede: "PHP/Symfony, Laravel, React et Java/Spring Boot au quotidien — avec un vrai passage par les tests logiciels et la gestion de projet pendant mon Master 2. Un profil qui touche à plusieurs métiers de la même chaîne, pas un généraliste au rabais.",
      pillLocation: "France · mobile partout",
      pillStatus: "Ouverte à un poste en CDI",
      btnEmail: "Écrire un email",
      btnLinkedin: "Profil LinkedIn",
      btnGithub: "Code sur GitHub"
    },
    headings: { profil: "Profil", competences: "Boîte à outils", projets: "Projets", experience: "Expérience", formation: "Formation", extras: "Au-delà du code", contact: "Contact" },
    profilParagraphs: [
      "Diplômée d'un Master 2 Conception et Développement de Solutions Informatiques (Insta Paris) après une Licence professionnelle Analyste Programmeur à l'IAI au Gabon, j'ai construit mon parcours des deux côtés du développement : le code, et tout ce qui l'entoure — tests, spécifications, mise en production.",
      "Au Gabon, j'ai occupé plusieurs postes en développement et en systèmes/réseaux (CFAO Technology & Energy, Cyberschool Entrepreneuriat, Gabonaise de Chimie), avant plus de 4 ans comme développeuse à l'Agence Nationale de l'Aviation Civile. Je suis ensuite venue en France pour mon Master 2, avec un stage chez Cesare Paris puis une alternance chez Bouygues Telecom.",
      "Le Master 2 m'a aussi formée à la gestion de projet et au test logiciel : je candidate donc aussi bien sur des postes de développement que de Testeuse QA ou de Chargée de Projet — trois façons différentes de tenir la même chaîne de production."
    ],
    contact: {
      text: "Ouverte à un poste en CDI, mobile partout en France. Le plus simple pour échanger : un email ou un message LinkedIn.",
      btnLinkedin: "LinkedIn"
    },
    footNote: "Développeuse Full Stack · Testeuse QA · Chef de Projet",
    themeToggleLabel: "Changer de thème",
    langToggleLabel: "Switch to English"
  },
  en: {
    nav: { profil: "About", competences: "Skills", projets: "Projects", experience: "Experience", contact: "Contact" },
    hero: {
      eyebrow: "Development · Software Quality · Project Management",
      lede: "PHP/Symfony, Laravel, React and Java/Spring Boot on a daily basis — with real hands-on experience in software testing and project management during my Master's degree. A profile that spans several roles in the same chain, not a watered-down generalist.",
      pillLocation: "France · open to relocation",
      pillStatus: "Open to full-time positions",
      btnEmail: "Send an email",
      btnLinkedin: "LinkedIn profile",
      btnGithub: "Code on GitHub"
    },
    headings: { profil: "About", competences: "Toolkit", projets: "Projects", experience: "Experience", formation: "Education", extras: "Beyond the code", contact: "Contact" },
    profilParagraphs: [
      "After a Professional Bachelor's degree in Programming Analysis from IAI in Gabon, I earned a Master's degree in IT Solutions Design and Development (Insta Paris). I've built my career on both sides of development: the code itself, and everything around it — testing, specifications, deployment.",
      "In Gabon, I held several development and systems/network roles (CFAO Technology & Energy, Cyberschool Entrepreneuriat, Gabonaise de Chimie), before spending over 4 years as a developer at the Agence Nationale de l'Aviation Civile. I then came to France for my Master's degree, with an internship at Cesare Paris followed by a work-study contract at Bouygues Telecom.",
      "My Master's degree also trained me in project management and software testing: I apply for development roles as well as QA Tester or Project Coordinator positions — three different ways of running the same production chain."
    ],
    contact: {
      text: "Open to full-time positions, willing to relocate anywhere in France. The easiest way to reach me: email or a LinkedIn message.",
      btnLinkedin: "LinkedIn"
    },
    footNote: "Full Stack Developer · QA Tester · Project Manager",
    themeToggleLabel: "Toggle theme",
    langToggleLabel: "Passer en français"
  }
};

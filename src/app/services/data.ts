import { Injectable } from '@angular/core';
import { PersonalInfo } from '../models/personal-info/personal-info-module';
import { Education } from '../models/education/education-module';
import { Experience } from '../models/experience/experience-module';
import { Project } from '../models/project/project-module';
import { Skills } from '../models/skill/skill-module';
import { Language } from './translation';

@Injectable({
  providedIn: 'root'
})
export class Data {

  getPersonalInfo(lang: Language = 'es'): PersonalInfo {
    if (lang === 'en') {
      return {
        name: 'Manuela Caro Villada',
        location: 'Medellín, Colombia',
        email: 'manuelacaro8@hotmail.com',
        phone: '+57 300 697 32 17',
        linkedin: 'Manuela Caro Villada',
        github: 'manuelacaro',
        summary: 'Results-oriented and passionate Systems Engineering student with hands-on experience in data analysis, agile project management, and UX/UI design. Certified in UX/UI Design and agile methodologies, including Scrum and Kanban, with a solid foundation in programming and data visualization tools such as Python, SQL, Power BI, and Power Automate. Demonstrated leadership as General Director of OmegaHack and Scrum Master at Smart Fit Colombia, guiding multidisciplinary teams and promoting efficient user-centered solutions.',
        profileImage: 'assets/images/profile-photo.jpg'
      };
    }
    
    return {
      name: 'Manuela Caro Villada',
      location: 'Medellín, Colombia',
      email: 'manuelacaro8@hotmail.com',
      phone: '+57 300 697 32 17',
      linkedin: 'Manuela Caro Villada',
      github: 'manuelacaro',
      summary: 'Apasionada y orientada a resultados, estudiante de Ingeniería de Sistemas con experiencia práctica en análisis de datos, gestión ágil de proyectos y diseño UX/UI. Certificada en Diseño UX/UI y metodologías ágiles, incluyendo Scrum y Kanban, con una sólida base en programación y herramientas de visualización de datos como Python, SQL, Power BI y Power Automate. Liderazgo demostrado como Directora General de OmegaHack y Scrum Master en Smart Fit Colombia, guiando equipos multidisciplinarios y promoviendo soluciones eficientes centradas en el usuario.',
      profileImage: 'assets/images/profile-photo.jpg'
    };
  }

  getEducation(lang: Language = 'es'): Education[] {
    if (lang === 'en') {
      return [
        {
          institution: 'EAFIT University',
          program: 'Bachelor\'s Degree in Systems Engineering',
          period: '2022 – Present'
        },
        {
          institution: 'Academy by Polygonus',
          program: 'Video Game Development - Level 1',
          period: '2024 – 2025'
        },
        {
          institution: 'Coderhouse',
          program: 'Certified in UX/UI Design',
          period: '2024'
        },
        {
          institution: 'EAFIT University',
          program: 'Soft Skills for the Digital Industry',
          period: '2024 – 2025'
        },
        {
          institution: 'EAFIT University - Academy by Polygonus',
          program: 'Linguatech B2 – Module 1 (English Program)',
          period: '2024 – 2025'
        },
        {
          institution: 'Udemy',
          program: 'Scrum at Scale Mastery: Leading Large Projects',
          period: '2025'
        },
        {
          institution: 'Udemy',
          program: 'Storytelling: Complete Course for Professionals and Curious',
          period: '2025'
        },
        {
          institution: 'Udemy',
          program: 'Kanban and Agile',
          period: '2025'
        }
      ];
    }

    return [
      {
        institution: 'Universidad EAFIT',
        program: 'Pregrado en Ingeniería de Sistemas',
        period: '2022 – Presente'
      },
      {
        institution: 'Academy by Polygonus',
        program: 'Desarrollo de Videojuegos - Nivel 1',
        period: '2024 – 2025'
      },
      {
        institution: 'Coderhouse',
        program: 'Certificada en Diseño UX/UI',
        period: '2024'
      },
      {
        institution: 'Universidad EAFIT',
        program: 'Habilidades Blandas para la Industria Digital',
        period: '2024 – 2025'
      },
      {
        institution: 'Universidad EAFIT - Academy by Polygonus',
        program: 'Linguatech B2 – Módulo 1 (Programa de Inglés)',
        period: '2024 – 2025'
      },
      {
        institution: 'Udemy',
        program: 'Scrum at Scale Mastery: Liderar Proyectos Grandes',
        period: '2025'
      },
      {
        institution: 'Udemy',
        program: 'Storytelling: Curso Completo para Profesionales y Curiosos',
        period: '2025'
      },
      {
        institution: 'Udemy',
        program: 'Kanban y Agile',
        period: '2025'
      }
    ];
  }

  getProfessionalExperience(lang: Language = 'es'): Experience[] {
    if (lang === 'en') {
      return [
        {
          title: 'Scrum Master',
          company: 'Smart Fit Colombia',
          location: 'Medellín, Colombia',
          period: '2025',
          type: 'professional',
          responsibilities: [
            'Facilitated Scrum ceremonies (Daily Stand-ups, Sprint Planning, Sprint Review, Retrospectives) ensuring alignment between teams.',
            'Coordinated with development, design, and product teams to ensure timely and high-quality deliverables.',
            'Removed impediments, fostered continuous improvement, and promoted transparency in workflow.'
          ]
        },
        {
          title: 'Data Analyst',
          company: 'Smart Fit Colombia',
          location: 'Medellín, Colombia',
          period: '2025',
          type: 'professional',
          responsibilities: [
            'Collected, processed, and analyzed operational and performance data using SQL and Power BI.',
            'Designed and maintained interactive dashboards in Power BI to support data-driven decision making.',
            'Automated internal workflows with Power Automate, improving efficiency and reducing manual effort.',
            'Monitored key performance indicators (KPIs) and delivered actionable insights to management to optimize processes.',
            'Developed as a full-stack developer, and sole developer, a BI Portal for centralizing dashboards.'
          ]
        },
        {
          title: 'Logistics Monitor',
          company: 'EAFIT Graduates — EAFIT University',
          location: 'Medellín, Colombia',
          period: '2024',
          type: 'professional',
          responsibilities: [
            'Provided support in event planning and execution, ensuring smooth operations and excellent service.',
            'Responsible for customer service, email correspondence, and assistance to graduates with their requests.',
            'Managed logistics tasks, coordinated resources, and collaborated with different teams to improve efficiency.',
            'Maintained organized records and contributed to process improvement initiatives.'
          ]
        }
      ];
    }

    return [
      {
        title: 'Scrum Master',
        company: 'Smart Fit Colombia',
        location: 'Medellín, Colombia',
        period: '2025',
        type: 'professional',
        responsibilities: [
          'Facilité ceremonias Scrum (Daily Stand-ups, Planificación de Sprints, Revisión de Sprints, Retrospectivas) asegurando alineación entre los equipos.',
          'Coordiné con equipos de desarrollo, diseño y producto para garantizar entregables oportunos y de alta calidad.',
          'Eliminé impedimentos, fomenté la mejora continua y promoví la transparencia en el flujo de trabajo.'
        ]
      },
      {
        title: 'Analista de Datos',
        company: 'Smart Fit Colombia',
        location: 'Medellín, Colombia',
        period: '2025',
        type: 'professional',
        responsibilities: [
          'Recolecté, procesé y analicé datos operativos y de desempeño usando SQL y Power BI.',
          'Diseñé y mantuve dashboards interactivos en Power BI para apoyar la toma de decisiones basada en datos.',
          'Automaticé flujos internos con Power Automate, mejorando la eficiencia y reduciendo esfuerzo manual.',
          'Monitoreé indicadores clave (KPIs) y entregué insights accionables a la gerencia para optimizar procesos.',
          'Desarrollé como fullstack, y única desarrolladora, un Portal de BI para la centralización de los tableros'
        ]
      },
      {
        title: 'Monitor de Logística',
        company: 'Graduados EAFIT — Universidad EAFIT',
        location: 'Medellín, Colombia',
        period: '2024',
        type: 'professional',
        responsibilities: [
          'Brindé apoyo en planificación y ejecución de eventos, asegurando operaciones fluidas y excelente servicio.',
          'Responsable de atención al cliente, correspondencia por correo y asistencia a graduados con sus solicitudes.',
          'Gestioné tareas logísticas, coordiné recursos y colaboré con diferentes equipos para mejorar la eficiencia.',
          'Mantuve registros organizados y contribuí a iniciativas de mejora de procesos.'
        ]
      }
    ];
  }

  getAcademicExperience(lang: Language = 'es'): Experience[] {
    if (lang === 'en') {
      return [
        {
          title: 'Student Representative',
          company: 'EAFIT University',
          location: 'Medellín, Colombia',
          period: 'July 2023 - June 2024',
          type: 'academic',
          responsibilities: [
            'Elected for one year by systems engineering students to represent their interests at the university.',
            'Actively contributed to strategic decision-making processes.',
            'Advocated for student needs before university authorities.'
          ]
        },
        {
          title: 'Member - Nova Student Group',
          company: 'EAFIT University',
          location: 'Medellín, Colombia',
          period: 'Jan 2023 - Present',
          type: 'academic',
          responsibilities: [
            'Participation in a technology and innovation group focused on integrating technology in various fields.',
            'Development of interdisciplinary projects, workshops, and community initiatives.'
          ]
        },
        {
          title: 'General Director - OmegaHack',
          company: 'EAFIT University',
          location: 'Medellín, Colombia',
          period: 'Nov 2023 - May 2024',
          type: 'academic',
          responsibilities: [
            'Led and supervised all areas of the annual student competition focused on technological solutions.',
            'Ensured successful event execution with over 90% participant satisfaction.',
            'Coordinated cross-functional teams to deliver a seamless and impactful experience.',
            'Achieved strong industry participation in the event.'
          ]
        }
      ];
    }

    return [
      {
        title: 'Representante Estudiantil',
        company: 'Universidad EAFIT',
        location: 'Medellín, Colombia',
        period: 'Julio 2023 - Junio 2024',
        type: 'academic',
        responsibilities: [
          'Elegida por un año por los estudiantes de ingeniería de sistemas para representar sus intereses en la universidad.',
          'Contribuí activamente en procesos de toma de decisiones estratégicas.',
          'Defendí las necesidades estudiantiles ante las autoridades universitarias.'
        ]
      },
      {
        title: 'Miembro - Grupo Estudiantil Nova',
        company: 'Universidad EAFIT',
        location: 'Medellín, Colombia',
        period: 'Ene 2023 - Presente',
        type: 'academic',
        responsibilities: [
          'Participación en un grupo de tecnología e innovación enfocado en integrar la tecnología en diversos campos.',
          'Desarrollo de proyectos interdisciplinarios, talleres e iniciativas comunitarias.'
        ]
      },
      {
        title: 'Directora General - OmegaHack',
        company: 'Universidad EAFIT',
        location: 'Medellín, Colombia',
        period: 'Nov 2023 - May 2024',
        type: 'academic',
        responsibilities: [
          'Dirigí y supervisé todas las áreas de la competencia estudiantil anual enfocada en soluciones tecnológicas.',
          'Aseguré la ejecución exitosa del evento con más del 90% de satisfacción de participantes.',
          'Coordiné equipos multifuncionales para entregar una experiencia fluida e impactante.',
          'Logré fuerte participación de la industria en el evento.'
        ]
      }
    ];
  }

  getSkills(lang: Language = 'es'): Skills {
  if (lang === 'en') {
    return {
      programming: [
        'C#', 'Python', 'Java', 'HTML', 'CSS',
        'TypeScript', 'Git', 'React', 'SQL',
        'Power BI', 'Power Automate', 'Angular',
        'Django', 'Unity'
      ],
      agile: [
        'Scrum (Scrum Master)', 'Kanban', 'Scrum at Scale'
      ],
      design: [
        'UX/UI Design',
        'Figma',
        'User Flows',
        'Design Standards',
        'Design Systems',
        'Wireframes',
        'Flow Diagrams',
        'Atomic Design'
      ],
      soft: [
        'Leadership',
        'Teamwork',
        'Problem Solving',
        'Adaptability',
        'Storytelling',
        'Communication',
        'Attention to Detail'
      ]
    };
  }


  return {
    programming: [
      'C#', 'Python', 'Java', 'HTML', 'CSS',
      'TypeScript', 'Git', 'React', 'SQL',
      'Power BI', 'Power Automate', 'Angular',
      'Django', 'Unity'
    ],
    agile: [
      'Scrum (Scrum Master)', 'Kanban', 'Scrum at Scale'
    ],
    design: [
      'UX/UI Design',
      'Figma',
      'UserFlows',
      'Estándares de Diseño',
      'Sistemas de Diseño',
      'Wireframes',
      'Diagramas de Flujo',
      'Atomic Design'
    ],
    soft: [
      'Liderazgo',
      'Trabajo en equipo',
      'Resolución de problemas',
      'Adaptabilidad',
      'Storytelling',
      'Comunicación',
      'Atención al detalle'
    ]
  };
}


  getProjects(lang: Language = 'es'): Project[] {
    if (lang === 'en') {
      return [
        {
          id: 'powerbi-dashboards',
          title: 'BI Portal - Smart Fit',
          description: 'Developed a full-stack Business Intelligence portal, centralizing multiple dashboards and their documentation in one place. Implemented an end-to-end architecture with Angular, Node.js, MySQL, and API consumption, optimizing access to key metrics for decision-making.',
          imageUrl: 'assets/projects/PowerBi.png',
          videoUrl: 'https://www.youtube.com/embed/LKRCxdkOoZg',
          technologies: ['Power BI', 'MySQL', 'Power Automate', 'Data Analysis', 'Angular', 'Node.js', 'API'],
          featured: true
        },
        {
          id: 'trainer-fitness-app',
          title: 'Personal Coach',
          description: 'Digital platform for personal trainers that integrates an online store for protein products and a booking system for personalized training sessions. Complete design in Figma including research, wireframes, interactive prototypes, and design system.',
          imageUrl: 'assets/projects/Coachpersonal.png',
          technologies: ['Figma', 'UX/UI Design', 'User Research', 'Prototyping', 'E-commerce Design', 'Design System', 'Atomic Design'],
          liveUrl: 'https://www.figma.com/proto/JEwtzbaMKTQFyyAgMyU7ND/Tuiran-Fit?page-id=0%3A1&node-id=18-25&starting-point-node-id=18%3A25&t=duIjriICHQNmX0Lu-1',
          featured: true
        },
        {
          id: 'retrovibes',
          title: 'RetroVibes',
          description: 'E-commerce platform developed in Django for buying and selling vintage and modern vinyl records. As a frontend developer, I implemented the entire user interface with HTML, CSS, and Python, creating a smooth and attractive shopping experience. The project includes product catalog, shopping cart, user profile, and complete checkout process. University project developed in a team applying agile methodologies.',
          videoUrl: 'https://www.youtube.com/embed/uS4ljAZ9Rtk',
          technologies: ['Django', 'HTML', 'CSS', 'Python', 'Bootstrap', 'Frontend Development', 'UI Implementation'],
          featured: false
        }
      ];
    }

    return [
      {
        id: 'powerbi-dashboards',
        title: 'Portal BI - Smart Fit',
        description: 'Desarrollé un portal de Business Intelligence full stack, centralizando en un lugar los múltiples tableros y la documentación de estos. Implementé una arquitectura end-to-end con Angular, Node.js, MySQL y consumo de APIs, optimizando el acceso a métricas clave para la toma de decisiones.',
        imageUrl: 'assets/projects/PowerBi.png',
        videoUrl: 'https://www.youtube.com/embed/LKRCxdkOoZg',
        technologies: ['Power BI', 'MySQL', 'Power Automate', 'Análisis de Datos', 'Angular', 'Node.js', 'API'],
        featured: true
      },
      {
        id: 'trainer-fitness-app',
        title: 'Coach Personal',
        description: 'Plataforma digital para entrenador personal que integra tienda online de productos de proteína y sistema de reserva de entrenamientos personalizados. Diseño completo en Figma incluyendo research, wireframes, prototipos interactivos y sistema de diseño.',
        imageUrl: 'assets/projects/Coachpersonal.png',
        technologies: ['Figma', 'UX/UI Design', 'User Research', 'Prototyping', 'E-commerce Design', 'Design System', 'Atomic Design'],
        liveUrl: 'https://www.figma.com/proto/JEwtzbaMKTQFyyAgMyU7ND/Tuiran-Fit?page-id=0%3A1&node-id=18-25&starting-point-node-id=18%3A25&t=duIjriICHQNmX0Lu-1',
        featured: true
      },
      {
        id: 'retrovibes',
        title: 'RetroVibes',
        description: 'Plataforma e-commerce desarrollada en Django para la compra y venta de vinilos vintage y modernos. Como desarrolladora frontend, implementé toda la interfaz de usuario con HTML, CSS y Python, creando una experiencia de compra fluida y atractiva. El proyecto incluye catálogo de productos, carrito de compras, perfil de usuario, y proceso de checkout completo. Proyecto universitario desarrollado en equipo aplicando metodologías ágiles.',
        videoUrl: 'https://www.youtube.com/embed/uS4ljAZ9Rtk',
        technologies: ['Django', 'HTML', 'CSS', 'Python', 'Bootstrap', 'Frontend Development', 'UI Implementation'],
        featured: false
      }
    ];
  }

  constructor() { }
}
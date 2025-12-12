import { Injectable } from '@angular/core';
import { PersonalInfo } from '../models/personal-info/personal-info-module';
import { Education } from '../models/education/education-module';
import { Experience } from '../models/experience/experience-module';
import { Project } from '../models/project/project-module';
import { Skills } from '../models/skill/skill-module';

@Injectable({
  providedIn: 'root'
})
export class Data {

  getPersonalInfo(): PersonalInfo {
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

  getEducation(): Education[] {
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

  getProfessionalExperience(): Experience[] {
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
          'Monitoreé indicadores clave (KPIs) y entregué insights accionables a la gerencia para optimizar procesos.'
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

  getAcademicExperience(): Experience[] {
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

  getSkills(): Skills {
    return {
      programming: [
        'C#', 'Python', 'Java', 'HTML', 'CSS', 
        'TypeScript', 'Git', 'React', 'SQL', 
        'Power BI', 'Power Automate'
      ],
      agile: [
        'Scrum (Scrum Master)', 'Kanban', 'Scrum at Scale'
      ],
      design: [
        'UX/UI Design', 'Figma', 'UserFlows', 
        'Estándares de Diseño', 'Sistemas de Diseño', 
        'Wireframes', 'Diagramas de Flujo'
      ],
      soft: [
        'Liderazgo', 'Trabajo en equipo', 
        'Resolución de problemas', 'Adaptabilidad', 
        'Storytelling', 'Comunicación', 'Atención al detalle'
      ]
    };
  }

  getProjects(): Project[] {
    return [
      {
        id: 'omegahack',
        title: 'OmegaHack 2024',
        description: 'Dirigí la competencia estudiantil anual de tecnología e innovación más importante de la Universidad EAFIT. Coordiné equipos multidisciplinarios, gestioné presupuesto y logística, logrando más del 90% de satisfacción de participantes.',
        imageUrl: 'assets/projects/omegahack.jpg',
        technologies: ['Gestión de Proyectos', 'Liderazgo', 'Organización de Eventos', 'Coordinación de Equipos'],
        featured: true
      },
      {
        id: 'powerbi-dashboards',
        title: 'Dashboards Interactivos - Smart Fit',
        description: 'Diseñé y desarrollé dashboards interactivos en Power BI para análisis de datos operativos y de desempeño. Automaticé flujos de trabajo con Power Automate, mejorando la eficiencia y reduciendo el esfuerzo manual en un 40%.',
        imageUrl: 'assets/projects/powerbi-dashboard.png',
        technologies: ['Power BI', 'SQL', 'Power Automate', 'Análisis de Datos', 'KPIs'],
        featured: true
      },
      {
        id: 'videogame-dev',
        title: 'Desarrollo de Videojuegos',
        description: 'Proyectos de desarrollo de videojuegos realizados en Academy by Polygonus. Implementación de mecánicas de juego, diseño de niveles y optimización de rendimiento usando Unity y C#.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        imageUrl: 'assets/projects/videogame.jpg',
        technologies: ['Unity', 'C#', 'Game Design', 'Game Development'],
        featured: false
      },
      {
        id: 'ux-ui-projects',
        title: 'Proyectos UX/UI',
        description: 'Diseño de experiencias de usuario y prototipos interactivos para diversas aplicaciones. Investigación de usuarios, creación de wireframes, prototipos de alta fidelidad y pruebas de usabilidad.',
        imageUrl: 'assets/projects/placeholder.png',
        technologies: ['Figma', 'UX Research', 'Wireframing', 'Prototyping', 'User Testing'],
        featured: false
      }
    ];
  }

  constructor() { }
}
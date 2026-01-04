import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { Code, Terminal, Database, Shield, Cpu, Mic, FileText, Layout, Tablet } from 'lucide-react';
import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'ai-risk-analyzer',
        title: 'Aplicación de Analisis de Riesgo - Risk AI',
        description: 'Plataforma avanzada de análisis de riesgos que utiliza LangChain y LLM locales para procesos de gestión de riesgo en la industria farmacéutica. Posee integración con RAG.',
        tags: ['React', 'LangChain', 'Python'],
        icon: 'code',
        fullDescription: 'Plataforma avanzada de análisis de riesgos que utiliza LangChain y LLM locales (de momento utiliza API externa por una cuestión de procesamiento de datos propios, necesito una PC más potente) para procesos de gestión de riesgo en la industria farmacéutica. Posee integración con RAG.\n\nEl objetivo era resolver desafíos específicos de la industria aprovechando las tecnologías modernas. Me centré principalmente en la optimización del rendimiento y la experiencia del usuario, garantizando que el resultado final no solo fuera funcional, sino también fácil de usar. El LLM local procesa datos internos y externos cargados en el momento (generando RAG); en función de análisis de riesgos pre-cargados ejecuta el análisis y genera respuestas sintéticas que, con el tiempo y el feedback del analista, generan respuestas cada vez más precisas, hasta obtener resultados óptimos.',
        features: [
            'Procesamiento y visualización de datos en tiempo real',
            'Autenticación segura y control de acceso',
            'Diseño responsivo optimizado',
            'RAG, o Retrieval-Augmented Generation (Generación Aumentada por Recuperación) mejora las respuestas de los modelos de lenguaje grandes al recuperar información relevante de fuentes externas antes de generar el texto final'
        ],
        showcaseImage: 'https://i.postimg.cc/Wzk4FR1M/risk.jpg',
        showcaseDetails: [
            {
                title: 'Digital FMEA / IoT & ML',
                description: 'Integración diseñada para cargar datos de sensores industriales. Estos datos alimentan el análisis de riesgo con predicciones de Machine Learning, anticipando fallos antes de que ocurran.',
                icon: 'cpu'
            },
            {
                title: 'Biblioteca y RAG Local',
                description: 'Sistema de carga de archivos locales para Retrieval-Augmented Generation (RAG). La IA analiza y "aprende" de la documentación interna subida (SOPs, guías), proporcionando respuestas contextualizadas y reduciendo alucinaciones.',
                icon: 'library'
            },
            {
                title: 'Configuración del Análisis',
                description: 'Interfaz dedicada para la carga de datos básicos y parámetros del proceso, permitiendo una configuración inicial rápida y estandarizada del estudio de riesgo.',
                icon: 'settings'
            },
            {
                title: 'Referencias Regulatorias Dinámicas',
                description: 'Módulo flexible que permite activar y agregar nuevas referencias regulatorias (FDA, EMA, ANMAT). El sistema cruza el análisis con las normativas activas para asegurar el cumplimiento.',
                icon: 'book'
            },
            {
                title: 'Exportación y Persistencia',
                description: 'Capacidad completa para guardar el progreso del análisis y exportar los resultados finales a Excel, facilitando la integración con flujos de trabajo tradicionales y auditorías.',
                icon: 'export'
            }
        ]
    },
    {
        id: 'sgc-doc-manager',
        title: 'Software de Gestión de Documentos',
        description: 'Sistema de Gestión documental, BBB, con asistencia AI. Inicialmente está pensado para la industria farmacéutica pero fácilmente adaptable.',
        tags: ['React', 'Node.js', 'Compliance', 'AI'],
        icon: 'file-text',
        fullDescription: 'Este proyecto representa una profunda inmersión en el ecosistema SGC. El objetivo principal fue desarrollar una solución funcional, simple e intuitiva, volcando toda la experiencia adquirida en Calidad. Identifiqué puntos de dolor en los softwares actuales, donde muchas soluciones "enlatadas" no parecen diseñadas con una verdadera mirada en la industria. De esta observación nació la idea de crear algo con mayor conciencia y enfoque QA.\n\nNoté que muchos laboratorios nacionales emergentes carecen de recursos o estructura para implementar sistemas de calidad digitalizados, siendo a veces un lujo inalcanzable. Este proyecto, que progresivamente toma forma, posee features esenciales para el cumplimiento normativo a bajo costo; busqué generar una experiencia amena y simple para el operario/analista, manteniendo un control riguroso para el sector de Calidad.',
        features: [
            'Procesamiento y visualización de datos del SGC',
            'Autenticación segura y control de acceso basado en roles',
            'Audit Trail, metadatos bajo los principio de ALCOA+',
            'Generación de Quizzes automáticos con AI (el user confirma)'
        ],
        gallery: [
            {
                url: 'https://i.postimg.cc/zDPr4Dkb/login.jpg',
                description: 'Login seguro con niveles de acceso, cierre de sesión automático tras 10 min de inactividad, y reseteo de contraseña desde admin. Creación de usuario validada por administrador.'
            },
            {
                url: 'https://i.postimg.cc/QtJMpLL0/inicio.jpg',
                description: 'Panel inicial (Dashboard) donde se visualizan los módulos activos. Diseño modular escalable pensado para integrar nuevas funcionalidades a futuro.'
            },
            {
                url: 'https://i.postimg.cc/3J9q4tkY/gestion_de_usuarios.jpg',
                description: 'Gestión de Usuarios: Registro, asignación de Roles/Perfiles y control de aprobación. Cada nuevo usuario debe ser aprobado explícitamente por un administrador.'
            },
            {
                url: 'https://i.postimg.cc/9QBRdqG0/anexo-general.jpg',
                description: 'Módulo de Planillas y Anexos: Buscador inteligente con filtrado automático para localizar documentos rápidamente.'
            },
            {
                url: 'https://i.postimg.cc/TwJPr880/solicitud_anexo.jpg',
                description: 'Solicitud de Anexos: Generación de planillas inyectando metadatos. Descarga automática de PDF controlado con confirmación de seguridad.'
            },
            {
                url: 'https://i.postimg.cc/50Stwccp/Anexo_con_metadatos.jpg',
                description: 'Ejemplo de PDF Generado: Inserción automática de metadatos y marca de "Copia Controlada" en azul en el pie de página para asegurar integridad.'
            },
            {
                url: 'https://i.postimg.cc/k4v5xrr1/configuración_pagina.jpg',
                description: 'Configuración Dinámica: La ubicación de los metadatos, disposición y tamaño de página son totalmente configurables desde el sistema.'
            },
            {
                url: 'https://i.postimg.cc/sDKLQTM3/circuito_en_revisión.jpg',
                description: 'Módulo de Procedimientos: Visión general del estado de los documentos y gestión de sus ciclos de vida.'
            },
            {
                url: 'https://i.postimg.cc/4xdSzpcC/Nuevo_documento_generado.jpg',
                description: 'Creación de Documentos: Generación en estado "Borrador", asignación de revisores y envío al circuito de firmas.'
            },
            {
                url: 'https://i.postimg.cc/MKtLM9nW/circuito_de_firmas.jpg',
                description: 'Gestión de Firmas: QA asigna revisores con roles específicos (ej. Dirección Técnica). El documento se firma digitalmente y avanza en el flujo.'
            },
            {
                url: 'https://i.postimg.cc/Vk6VjXtP/usuarios_dt.jpg',
                description: 'Asignación de Usuarios: Vista de usuarios seleccionados y asignados para intervenir en un circuito documental específico.'
            },
            {
                url: 'https://i.postimg.cc/sDKLQTM3/circuito_en_revisión.jpg',
                description: 'Estado del Circuito: Monitoreo en tiempo real del estado de firmas y revisiones pendientes.'
            },
            {
                url: 'https://i.postimg.cc/Vk6VjXC3/Stage_2_aprobación_de_docus.jpg',
                description: 'Trazabilidad Cronológica: Visualización detallada de la actividad y etapas de aprobación del documento.'
            },
            {
                url: 'https://i.postimg.cc/520Rw8zV/Quiz_generado_con_Gemini.jpg',
                description: 'Capacitación AI: Tras la aprobación del DT, Gemini AI lee el procedimiento y genera automáticamente un Quiz de evaluación (editable/regenerable).'
            },
            {
                url: 'https://i.postimg.cc/Jhfsmc8J/registro_id.jpg',
                description: 'Control de Emisión: Registro centralizado de documentos e IDs, con control estricto de impresiones.'
            },
            {
                url: 'https://i.postimg.cc/Jhfsmc8j/audit_trail.jpg',
                description: 'Audit Trail: Registro inmutable de todas las acciones realizadas en el sistema para cumplimiento regulatorio.'
            }
        ],
        futureSteps: 'Implementar Gestión de Batch’s records. Altas y bajas, poder imprimir con Lote y Vencimiento, generar dashboard. Validación de datos para imprimir documentos duplicados (aprovechando metadatos). En un futuro muy largo, linkear con otra aplicación para Batch’s records en línea (llenado a través de Tablet con soporte AI). Hacer RAG con toda la documentación y sumar un LLM local que pueda brindar soporte con la documentación interna + disposiciones regulatorias que se vayan agregando.'
    },
    {
        id: 'personal-portfolio',
        title: 'Portfolio Personal Web',
        description: 'Este mismo sitio web. Diseño y desarrollo enfocado en UI/UX, estética Cyberpunk y performance.',
        tags: ['React', 'Tailwind CSS', 'UI/UX'],
        icon: 'layout',
        fullDescription: 'Este proyecto consiste en el diseño y desarrollo integral de mi portafolio personal (esta misma web). El objetivo fue crear una experiencia inmersiva que refleje tanto mi perfil profesional en QA como mis intereses personales en tecnología y estética cyberpunk. \n\nTrabajé intensivamente en la Interfaz de Usuario (UI) y el Diseño, buscando diferenciarme de los portafolios estándar mediante una estética visual cuidada ("Holographic UI") y una experiencia de usuario fluida. Implementé una arquitectura moderna, gestión de temas (Dark/Light mode) y componentes interactivos, demostrando capacidad tanto en lógica como en presentación visual.',
        features: [
            'Diseño UI/UX inmersivo con temática Cyberpunk/Futurista',
            'Arquitectura SPA reactiva y performante con React',
            'Sistema de temas (Dark/Light Mode) totalmente integrado',
            'Animaciones CSS y diseño responsivo avanzado'
        ]
    },
     {
        id: 'online-batch-record',
        title: 'Batch Record en Línea',
        description: 'Aplicación Android (Fase de Diseño) para completar batch records en línea vía tablet, con procesos real-time y asistencia AI (ALCOA+).',
        tags: ['Android', 'AI', 'ALCOA+', 'UX/UI'],
        icon: 'tablet',
        fullDescription: 'Este proyecto, actualmente en fase de diseño, busca revolucionar la captura de datos en planta mediante una aplicación Android optimizada para tablets. El objetivo es permitir el completado de Batch Records en línea, eliminando el papel y reduciendo errores humanos.\n\nLa aplicación integrará asistencia por Inteligencia Artificial para guiar al operario en tiempo real, asegurando que cada dato ingresado cumpla con los principios ALCOA+ (Attributable, Legible, Contemporaneous, Original, Accurate) desde el momento de su captura. Esto no solo agiliza el proceso productivo, sino que refuerza la integridad de los datos y facilita la liberación del lote.',
        features: [
            'Interfaz táctil optimizada para Tablets Android en planta',
            'Validación de datos en tiempo real (ALCOA+)',
            'Asistente AI para consultas de procedimiento y detección de anomalías',
            'Modo Offline con sincronización segura'
        ]
    }
];

export const getIcon = (iconName: string) => {
    switch(iconName) {
        case 'code': return <Code size={48} />;
        case 'terminal': return <Terminal size={48} />;
        case 'cpu': return <Cpu size={48} />;
        case 'database': return <Database size={48} />;
        case 'shield': return <Shield size={48} />;
        case 'mic': return <Mic size={48} />;
        case 'file-text': return <FileText size={48} />;
        case 'layout': return <Layout size={48} />;
        case 'tablet': return <Tablet size={48} />;
        default: return <Code size={48} />;
    }
}

const Portfolio: React.FC = () => {
    // Dynamic Title
    useEffect(() => {
        document.title = "Portfolio | GaboTTo";
    }, []);

    return (
        <div className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SectionHeader 
                tag="Working" 
                title="Proyectos" 
                highlight="Destacados" 
                description="Una selección de proyectos que demuestran mi experiencia en la industria farmacéutica, integración de IA y creación de experiencias de usuario."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link to={`/portfolio/${project.id}`} key={project.id} className="group relative rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#11212D] hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-neon-sm flex flex-col h-full shadow-md dark:shadow-none">
                        <div className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-black flex items-center justify-center relative overflow-hidden transition-colors flex-shrink-0">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                                {getIcon(project.icon)}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors min-h-[3.5rem] line-clamp-2">{project.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden transition-colors font-mono text-justify leading-tight">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 text-xs font-mono mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
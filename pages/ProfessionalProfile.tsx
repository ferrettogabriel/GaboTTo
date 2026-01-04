import React, { useState, useEffect, useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Briefcase, Award, BookOpen, CheckCircle, FileText, ClipboardCheck, Users, AlertTriangle, Shield, RefreshCcw, Quote, Calendar, Scale, FileCheck, Send, Mail, MessageSquare, X, ZoomIn, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface ExpertiseItem {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    level: number;
}

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    image: string;
    color: string;
}

// Usamos rutas base relativas limpias. El componente se encargará de probar variantes (public/, /, minusculas, etc.)
const certificates: Certificate[] = [
    {
        id: 'cert-tuv',
        title: 'Introducción a la norma ISO 9001:2015 - Sistemas de Gestión de Calidad',
        issuer: 'TÜV Rheinland Argentina',
        date: '2021-09-25',
        image: 'https://i.postimg.cc/J73w8KK5/tuv-iso9001-jpg.jpg', 
        color: 'from-blue-900 to-slate-900'
    },
    {
        id: 'cert-udemy-auto',
        title: 'Automate the Boring Stuff with Python Programming',
        issuer: 'Udemy - Al Sweigart',
        date: '15 de Diciembre de 2020',
        image: 'https://media.licdn.com/dms/image/v2/C4D2DAQHj7tIYJ5dh3g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1656522998802?e=1767920400&v=beta&t=5R67k4M49rGOc_CSrVgFwLy5hA8dlo_y4gIut1Gb0cI',
        color: 'from-purple-900 to-slate-900'
    },
    {
        id: 'cert-udemy-web',
        title: 'Python sin fronteras: HTML, CSS, Flask y MySQL',
        issuer: 'Udemy - Nicolas Schurmann',
        date: '9 de Noviembre de 2020',
        image: 'https://i.postimg.cc/9rwBfJ9V/udemy-web.jpg',
        color: 'from-emerald-900 to-slate-900'
    },
    {
        id: 'cert-aqa',
        title: 'Plan de Verificación, Mantenimiento y Calibración de Equipos',
        issuer: 'Asociación Química Argentina (AQA)',
        date: '27 de abril de 2018',
        image: 'https://media.licdn.com/dms/image/v2/C4D2DAQFzJlsAwtCrMA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1656522946064?e=1767916800&v=beta&t=J8Fmbapg_596r6DGzvSKK3z_buZCIJnz66Kk4purdjk',
        color: 'from-amber-900 to-slate-900'
    },
    {
        id: 'cert-cooperala',
        title: 'Calificación de Equipos de Producción Farmacéutica',
        issuer: 'COOPERALA / DECyTEP',
        date: '27 de junio de 2023',
        image: 'https://media.licdn.com/dms/image/v2/D4E2DAQFC05cIkzD6Zw/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1690561723066?e=1767916800&v=beta&t=ncaFLcyyWCFtjFxKxUOrmeXYoXx8ePvjvKn3QihoT9s',
        color: 'from-red-900 to-slate-900'
    },
    {
        id: 'cert-safybi',
        title: 'Manejo Básico de la Documentación GMP en Aseguramiento de la Calidad',
        issuer: 'SAFYBI',
        date: '26 de septiembre de 2016',
        image: 'https://i.postimg.cc/nzpLVM8y/safybi.jpg',
        color: 'from-cyan-900 to-slate-900'
    }
];

const expertiseItems: ExpertiseItem[] = [
    {
        id: '1',
        title: 'Gestión de Documentación',
        description: 'Control integral de SOPs, batch records, Anexos y documentación controlada. Gestión de ciclo de vida documental.',
        icon: <FileText className="text-primary" size={24} />,
        level: 5
    },
    {
        id: '2',
        title: 'Inspecciones y Auditorías',
        description: 'Ejecución de auditorías internas y a proveedores. Preparación y front-room para inspecciones de Entes regulatorios (ANMAT, FDA).',
        icon: <ClipboardCheck className="text-primary" size={24} />,
        level: 4
    },
    {
        id: '3',
        title: 'Capacitaciones',
        description: 'Gestión integral de capacitación de personal, inducciones a nuevos ingresos y evaluación de competencias. Fomento de cultura de calidad.',
        icon: <Users className="text-primary" size={24} />,
        level: 5
    },
    {
        id: '4',
        title: 'Desviaciones y CAPA',
        description: 'Investigación de no conformidades, análisis de causa raíz y gestión eficaz de acciones correctivas y preventivas.',
        icon: <AlertTriangle className="text-primary" size={24} />,
        level: 4
    },
    {
        id: '5',
        title: 'Gestión de Riesgos (QRM)',
        description: 'Aplicación de herramientas de análisis de riesgos (FMEA, HACCP) para identificar y mitigar vulnerabilidades en procesos críticos.',
        icon: <Shield className="text-primary" size={24} />,
        level: 2
    },
    {
        id: '6',
        title: 'Controles de Cambios',
        description: 'Evaluación de impacto, gestión y seguimiento de cambios en procesos, equipos y documentos para asegurar el mantenimiento del estado validado.',
        icon: <RefreshCcw className="text-primary" size={24} />,
        level: 5
    },
    {
        id: '7',
        title: 'Revisión Anual de Producto',
        description: 'Evaluación retrospectiva de la calidad, análisis de tendencias de datos críticos y verificación de la consistencia del proceso productivo.',
        icon: <Calendar className="text-primary" size={24} />,
        level: 5
    },
    {
        id: '8',
        title: 'Calibración y Calificaciones',
        description: 'Gestión y coordinación de proveedores externos para la ejecución de servicios. Revisión técnica de protocolos e informes de calificación.',
        icon: <Scale className="text-primary" size={24} />,
        level: 4
    },
    {
        id: '9',
        title: 'Validaciones',
        description: 'Soporte en validaciones de procesos productivos y sistemas informatizados (CSV), asegurando el cumplimiento de normativas vigentes.',
        icon: <FileCheck className="text-primary" size={24} />,
        level: 2
    }
];

// --- Sub-components ---

// Hook to generate path candidates
const useImageCandidates = (initialPath: string) => {
    return useMemo(() => {
        // If it is an external URL, use it directly without creating local variants
        if (initialPath.startsWith('http://') || initialPath.startsWith('https://')) {
            return [initialPath];
        }

        const cleanPath = initialPath.startsWith('/') ? initialPath.slice(1) : initialPath; // Remove leading slash
        const parts = cleanPath.split('.');
        const ext = parts.pop() || '';
        const base = parts.join('.');
        
        // Variations of extensions to try (handling case sensitivity issues on Linux servers)
        const extensions = [ext, ext.toLowerCase(), ext.toUpperCase(), 'jpg', 'JPG', 'jpeg'];
        const uniqueExtensions = [...new Set(extensions)];

        const candidates: string[] = [];

        uniqueExtensions.forEach(e => {
            const fileName = `${base}.${e}`;
            // 1. Relative path (e.g. "certs/image.jpg") - Good for HashRouter
            candidates.push(fileName);
            // 2. Absolute path (e.g. "/certs/image.jpg") - Good for Vite root
            candidates.push(`/${fileName}`);
            // 3. Public folder relative (e.g. "public/certs/image.jpg") - Good for simple servers
            candidates.push(`public/${fileName}`);
            // 4. Public folder absolute (e.g. "/public/certs/image.jpg")
            candidates.push(`/public/${fileName}`);
        });

        return candidates;
    }, [initialPath]);
};

const CertificateCard: React.FC<{ cert: Certificate; onClick: (c: Certificate) => void }> = ({ cert, onClick }) => {
    const candidates = useImageCandidates(cert.image);
    const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
    const [imgSrc, setImgSrc] = useState(candidates[0]);
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        // Reset whenever cert changes
        setCurrentCandidateIndex(0);
        setImgSrc(candidates[0]);
        setImgError(false);
    }, [cert.image, candidates]);

    const handleImageError = () => {
        const nextIndex = currentCandidateIndex + 1;
        if (nextIndex < candidates.length) {
            setCurrentCandidateIndex(nextIndex);
            setImgSrc(candidates[nextIndex]);
        } else {
            console.error(`Could not load image ${cert.title}. Tried:`, candidates);
            setImgError(true);
        }
    };

    return (
        <div 
            onClick={() => onClick(cert)}
            className="group relative rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-white/10 bg-white dark:bg-[#11212D] transition-all duration-300 hover:-translate-y-1 hover:shadow-neon-sm hover:border-primary/50 flex flex-col h-full shadow-md dark:shadow-none"
        >
            {/* Decorative Tech Lines */}
            <div className="absolute top-0 right-0 p-3 opacity-50 z-10">
                <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary/50"></div>
                    <div className="w-1 h-1 rounded-full bg-primary/30"></div>
                    <div className="w-1 h-1 rounded-full bg-primary/10"></div>
                </div>
            </div>

            {/* Image Header Area */}
            <div className="h-40 w-full relative overflow-hidden bg-gray-100 dark:bg-black/40 flex items-center justify-center">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity z-10`}></div>
                
                {/* Image or Fallback */}
                {!imgError ? (
                    <img 
                        src={imgSrc} 
                        alt={cert.title} 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                        onError={handleImageError}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 z-10 text-center px-4 w-full h-full p-4">
                        <ImageIcon size={32} className="mb-2 opacity-50" />
                        <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Image Not Found</span>
                        <div className="text-[8px] font-mono mt-1 opacity-50 w-full break-all">
                            Last tried: {imgSrc}
                        </div>
                    </div>
                )}
                
                {/* Icon Badge */}
                <div className="absolute bottom-3 left-4 p-2 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded border border-gray-200 dark:border-white/10 z-20 shadow-lg">
                        <Award className="text-primary w-5 h-5" />
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <p className="text-xs font-mono text-primary mb-2 uppercase tracking-wider truncate" title={cert.issuer}>
                        {cert.issuer}
                    </p>
                    <h4 className="text-lg font-display font-bold text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {cert.title}
                    </h4>
                </div>
                
                <div className="flex justify-between items-center border-t border-gray-100 dark:border-white/5 pt-4 mt-auto">
                    <span className="text-xs text-gray-500 font-mono">{cert.date}</span>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-primary flex items-center gap-1 transition-colors">
                        View <ExternalLink size={12} />
                    </span>
                </div>
            </div>
        </div>
    );
};

const CertificateModal: React.FC<{ cert: Certificate; onClose: () => void }> = ({ cert, onClose }) => {
    const candidates = useImageCandidates(cert.image);
    const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
    const [imgSrc, setImgSrc] = useState(candidates[0]);
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        setCurrentCandidateIndex(0);
        setImgSrc(candidates[0]);
        setImgError(false);
    }, [cert.image, candidates]);

    const handleImageError = () => {
        const nextIndex = currentCandidateIndex + 1;
        if (nextIndex < candidates.length) {
            setCurrentCandidateIndex(nextIndex);
            setImgSrc(candidates[nextIndex]);
        } else {
            setImgError(true);
        }
    };

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300"
            onClick={onClose}
        >
            <div 
                className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-[#0f172a] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-[scale-in_0.2s_ease-out]"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-primary transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Image Side */}
                <div className="w-full md:w-2/3 bg-gray-900 flex items-center justify-center p-8 relative overflow-hidden">
                    {/* Texture overlay */}
                    <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
                    
                    {!imgError ? (
                        <img 
                            src={imgSrc} 
                            alt={cert.title} 
                            className="max-w-full max-h-[70vh] shadow-2xl rounded border border-white/10 object-contain z-10"
                            onError={handleImageError}
                        />
                    ) : (
                        <div className="text-center p-12 border-2 border-dashed border-gray-700 rounded-xl bg-white/5 backdrop-blur-sm">
                            <FileText size={64} className="mx-auto mb-4 text-gray-600" />
                            <p className="text-gray-400 font-display uppercase tracking-widest text-sm mb-2">Certificate File Missing</p>
                            <p className="text-gray-600 text-xs font-mono">System tried to load: {cert.image}</p>
                            <p className="text-gray-500 text-xs mt-4">Make sure the file exists in /public/certs/</p>
                        </div>
                    )}
                </div>

                {/* Info Side */}
                <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white dark:bg-[#11212D] border-l border-gray-200 dark:border-white/10 relative z-10">
                    <div className="mb-6">
                        <Award size={48} className="text-primary mb-4" />
                        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                            {cert.title}
                        </h3>
                        <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
                        
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Issuer</p>
                                <p className="text-gray-700 dark:text-gray-300 text-lg">{cert.issuer}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Date Issued</p>
                                <p className="text-gray-700 dark:text-gray-300 font-mono">{cert.date}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                        <p className="text-sm text-gray-500 italic">
                            "La mejora continua no es una meta, es un proceso."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfessionalProfile: React.FC = () => {
    // Dynamic Title
    useEffect(() => {
        document.title = "Professional Profile | GaboTTo";
    }, []);

    const [contactInfo, setContactInfo] = useState('');
    const [messageSubject, setMessageSubject] = useState('');
    const [messageBody, setMessageBody] = useState('');
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    const handleRequestCV = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent("Solicitud de CV Completo - Portfolio Web");
        const body = encodeURIComponent(`Hola Gabriel,\n\nHe visto tu perfil web y estoy interesado en ver tu CV completo.\n\nMis datos de contacto (Email/WhatsApp) son: ${contactInfo}\n\nSaludos.`);
        window.location.href = `mailto:ferrettogabriel@live.com?subject=${subject}&body=${body}`;
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(messageSubject || "Consulta desde Portfolio Web");
        const body = encodeURIComponent(messageBody);
        window.location.href = `mailto:ferrettogabriel@live.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SectionHeader 
                tag="Resume" 
                title="Professional" 
                highlight="Journey" 
                description="Mas de 15 años dentro de la industria farmacéutica, en la busqueda constante de la mejora continua."
            />

            {/* Introductory Note */}
            <div className="max-w-4xl mx-auto mb-24 relative">
                <div className="absolute -top-6 -left-6 text-primary/10">
                    <Quote size={80} />
                </div>
                <div className="relative z-10 p-8 rounded-2xl bg-white/50 dark:bg-[#11212D]/50 backdrop-blur-sm border border-gray-200 dark:border-white/5 shadow-sm text-center">
                    <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light italic">
                        "Durante mi trayectoria en la industria, he ido adquiriendo habilidades clave que hoy fundamentan lo que estoy construyendo. Con el avance exponencial de la IA, veo una oportunidad única: la curva de innovación no deja de crecer. Por ello, aprovechando mis características personales, me he enfocado en generar herramientas para automatizar, agilizar y facilitar la toma de decisiones. Manteniendo la mejora continua como norte, busco potenciar mis fortalezas y ofrecer un valor diferencial a través de mi capital humano."
                    </p>
                </div>
                <div className="absolute -bottom-6 -right-6 text-primary/10 rotate-180">
                    <Quote size={80} />
                </div>
            </div>

            {/* Skills and Tools Grid */}
            <div className="mb-24">
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-primary pl-4 transition-colors">Skills and Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="holographic-card p-6 rounded-xl dark:!bg-[#11212D]">
                        <h4 className="text-primary font-bold mb-4 font-display flex items-center gap-2"><BookOpen size={18}/> Formación</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Técnico Químico', 'Universitario - Lic. Marketing (20/40Mat aprobadas)'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-gray-600 dark:text-gray-300 transition-colors">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="holographic-card p-6 rounded-xl dark:!bg-[#11212D]">
                        <h4 className="text-primary font-bold mb-4 font-display flex items-center gap-2"><Award size={18}/> Cursos</h4>
                         <div className="flex flex-wrap gap-2">
                            {['Calificación de Equipos', 'Metrología y calibración', 'Manejo de Documentación GxP', 'Programación'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-gray-600 dark:text-gray-300 transition-colors">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="holographic-card p-6 rounded-xl dark:!bg-[#11212D]">
                         <h4 className="text-primary font-bold mb-4 font-display flex items-center gap-2"><CheckCircle size={18}/> QA & Pharma</h4>
                         <div className="flex flex-wrap gap-2">
                            {['GxP Compliance', 'CSV', '21 CFR Part 11', 'ISO9001', 'Agile/Scrum'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-gray-600 dark:text-gray-300 transition-colors">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Work & Expertise Cards */}
            <div className="relative mb-24">
                 <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-12 border-l-4 border-primary pl-4 transition-colors">Work & Expertise</h3>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {expertiseItems.map((item) => (
                         <div key={item.id} className="holographic-card p-6 rounded-xl hover:border-primary/50 transition-all group dark:!bg-[#11212D] flex flex-col h-full">
                             <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors border border-primary/20">
                                 {item.icon}
                             </div>
                             <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                 {item.title}
                             </h4>
                             <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 transition-colors text-justify">
                                 {item.description}
                             </p>
                             
                             {/* Skill Level Bar */}
                             <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                                 <div className="flex justify-between items-end mb-2">
                                     <span className="text-[10px] font-display uppercase tracking-wider text-gray-400">Level</span>
                                     <span className="text-xs font-mono font-bold text-primary">{item.level}/5</span>
                                 </div>
                                 <div className="flex gap-1">
                                     {[1, 2, 3, 4, 5].map((level) => (
                                         <div 
                                             key={level}
                                             className={`h-1.5 flex-1 rounded-sm transition-all duration-500 ${
                                                 level <= item.level 
                                                 ? 'bg-primary shadow-[0_0_8px_rgba(6,182,212,0.5)]' 
                                                 : 'bg-gray-200 dark:bg-white/10'
                                             }`}
                                         />
                                     ))}
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>

            {/* Courses and Training Grid */}
            <div className="mb-32 relative">
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-12 border-l-4 border-primary pl-4 transition-colors">
                    Courses and Training
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert) => (
                        <CertificateCard 
                            key={cert.id} 
                            cert={cert} 
                            onClick={setSelectedCert} 
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal for Certificates */}
            {selectedCert && (
                <CertificateModal 
                    cert={selectedCert} 
                    onClose={() => setSelectedCert(null)} 
                />
            )}

            {/* Contact & CV Request Section */}
            <div className="relative">
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-12 border-l-4 border-primary pl-4 transition-colors">Contacto y CV Completo</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Request CV Card */}
                    <div className="holographic-card p-8 rounded-xl dark:!bg-[#11212D] border border-gray-200 dark:border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white">Solicitar CV Completo</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">¿Interesado en mi experiencia detallada?</p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                            Déjame tu medio de contacto (Email o WhatsApp) y te enviaré mi CV actualizado a la brevedad.
                        </p>
                        <form onSubmit={handleRequestCV} className="space-y-4">
                            <div>
                                <label className="block text-xs font-display text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Tu Email o WhatsApp</label>
                                <input 
                                    type="text" 
                                    required
                                    value={contactInfo}
                                    onChange={(e) => setContactInfo(e.target.value)}
                                    placeholder="ej: +54 9 11... o correo@empresa.com" 
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-sm" 
                                />
                            </div>
                            <button type="submit" className="w-full py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-black font-display font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 text-sm">
                                <Mail size={16} /> Solicitar CV
                            </button>
                        </form>
                    </div>

                    {/* Direct Message Card */}
                    <div className="holographic-card p-8 rounded-xl dark:!bg-[#11212D] border border-gray-200 dark:border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white">Mensaje Directo</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Envíame un correo directamente</p>
                            </div>
                        </div>
                        <form onSubmit={handleSendMessage} className="space-y-4">
                            <div>
                                <label className="block text-xs font-display text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Asunto</label>
                                <input 
                                    type="text" 
                                    value={messageSubject}
                                    onChange={(e) => setMessageSubject(e.target.value)}
                                    placeholder="Consulta laboral / Proyecto" 
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors text-sm" 
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-display text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Mensaje</label>
                                <textarea 
                                    rows={3} 
                                    value={messageBody}
                                    onChange={(e) => setMessageBody(e.target.value)}
                                    placeholder="Escribe tu mensaje aquí..." 
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors resize-none text-sm"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 bg-secondary/10 border border-secondary text-secondary hover:bg-secondary hover:text-white font-display font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 text-sm">
                                <Send size={16} /> Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalProfile;
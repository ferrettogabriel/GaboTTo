import React, { useEffect, useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Briefcase, Award, BookOpen, CheckCircle, FileText, ClipboardCheck, Users, AlertTriangle, Shield, RefreshCcw, Quote, Calendar, Scale, FileCheck, Send, Mail, MessageSquare, X, ExternalLink, Image as ImageIcon } from 'lucide-react';

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

// Hook para probar variantes de imágenes
const useImageCandidates = (initialPath: string) => {
    return useMemo(() => {
        if (initialPath.startsWith('http://') || initialPath.startsWith('https://')) {
            return [initialPath];
        }
        const cleanPath = initialPath.startsWith('/') ? initialPath.slice(1) : initialPath;
        const parts = cleanPath.split('.');
        const ext = parts.pop() || '';
        const base = parts.join('.');
        const extensions = [ext, ext.toLowerCase(), ext.toUpperCase(), 'jpg', 'JPG', 'jpeg'];
        const uniqueExtensions = [...new Set(extensions)];
        const candidates: string[] = [];
        uniqueExtensions.forEach(e => {
            const fileName = `${base}.${e}`;
            candidates.push(fileName);
            candidates.push(`/${fileName}`);
            candidates.push(`public/${fileName}`);
            candidates.push(`/public/${fileName}`);
        });
        return candidates;
    }, [initialPath]);
};

const CertificateCard: React.FC<{ cert: Certificate; onClick: (c: Certificate) => void }> = ({ cert, onClick }) => {
    const candidates = useImageCandidates(cert.image);
    const [currentCandidateIndex, setCurrentCandidateIndex] = React.useState(0);
    const [imgSrc, setImgSrc] = React.useState(candidates[0]);
    const [imgError, setImgError] = React.useState(false);

    React.useEffect(() => {
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
            <div className="absolute top-0 right-0 p-3 opacity-50 z-10">
                <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary/50"></div>
                    <div className="w-1 h-1 rounded-full bg-primary/30"></div>
                    <div className="w-1 h-1 rounded-full bg-primary/10"></div>
                </div>
            </div>
            <div className="h-40 w-full relative overflow-hidden bg-gray-100 dark:bg-black/40 flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity z-10`}></div>
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
                    </div>
                )}
                <div className="absolute bottom-3 left-4 p-2 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded border border-gray-200 dark:border-white/10 z-20 shadow-lg">
                    <Award className="text-primary w-5 h-5" />
                </div>
            </div>
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
    const [currentCandidateIndex, setCurrentCandidateIndex] = React.useState(0);
    const [imgSrc, setImgSrc] = React.useState(candidates[0]);
    const [imgError, setImgError] = React.useState(false);

    React.useEffect(() => {
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={onClose}>
            <div className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-[#0f172a] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-primary transition-colors">
                    <X size={24} />
                </button>
                <div className="w-full md:w-2/3 bg-gray-900 flex items-center justify-center p-8 relative overflow-hidden">
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
                        </div>
                    )}
                </div>
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
    useEffect(() => {
        document.title = "Professional Profile | GaboTTo";
    }, []);

    const [selectedCert, setSelectedCert] = React.useState<Certificate | null>(null);

    return (
        <div className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SectionHeader
                tag="Resume"
                title="Professional"
                highlight="Journey"
                description="Mas de 15 años dentro de la industria farmacéutica, en la busqueda constante de la mejora continua."
            />

            {/* ... Todo el contenido anterior queda igual hasta "Contacto y CV Completo" ... */}

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
                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                            <input type="hidden" name="access_key" value="cd180ec9-8553-40cd-803b-22fc62c698ec" />
                            <input type="hidden" name="subject" value="Solicitud de CV Completo - GaboTTo Portfolio" />
                            <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />

                            <div>
                                <label className="block text-xs font-display text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Tu Email o WhatsApp</label>
                                <input
                                    type="text"
                                    name="contact"
                                    required
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
                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                            <input type="hidden" name="access_key" value="cd180ec9-8553-40cd-803b-22fc62c698ec" />
                            <input type="hidden" name="subject" value="Mensaje directo desde Professional Profile" />
                            <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />

                            <div>
                                <label className="block text-xs font-display text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Asunto</label>
                                <input
                                    type="text"
                                    name="subject_custom"
                                    placeholder="Consulta laboral / Proyecto"
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-display text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Mensaje</label>
                                <textarea
                                    rows={3}
                                    name="message"
                                    required
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

            {/* Modal de certificado */}
            {selectedCert && (
                <CertificateModal
                    cert={selectedCert}
                    onClose={() => setSelectedCert(null)}
                />
            )}
        </div>
    );
};

export default ProfessionalProfile;

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, ArrowRight, Brain, FileUp, Settings, Book, FileSpreadsheet, ZoomIn, X, ChevronLeft, ChevronRight, Maximize2, PlayCircle, Layers } from 'lucide-react';
import { projects } from './Portfolio';

const getShowcaseIcon = (iconName?: string) => {
    switch(iconName) {
        case 'cpu': return <Brain size={20} />;
        case 'library': return <FileUp size={20} />;
        case 'settings': return <Settings size={20} />;
        case 'book': return <Book size={20} />;
        case 'export': return <FileSpreadsheet size={20} />;
        default: return <ArrowRight size={20} />;
    }
}

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);
    
    // Dynamic Title
    useEffect(() => {
        if (project) {
            document.title = `${project.title} | GaboTTo Portfolio`;
        } else {
            document.title = "Project Not Found | GaboTTo";
        }
    }, [project]);

    // Gallery State
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Keyboard Navigation for Gallery
    const handleNext = useCallback(() => {
        if (!project?.gallery) return;
        setCurrentImageIndex((prev) => (prev === project.gallery!.length - 1 ? 0 : prev + 1));
    }, [project?.gallery]);

    const handlePrev = useCallback(() => {
        if (!project?.gallery) return;
        setCurrentImageIndex((prev) => (prev === 0 ? project.gallery!.length - 1 : prev - 1));
    }, [project?.gallery]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isGalleryOpen) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') setIsGalleryOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isGalleryOpen, handleNext, handlePrev]);

    const openGallery = (index: number) => {
        setCurrentImageIndex(index);
        setIsGalleryOpen(true);
    };

    if (!project) {
        return <div className="text-center py-20 text-gray-900 dark:text-white">Project not found</div>;
    }

    // Default GitHub profile if no specific repo is provided
    const githubLink = project.repoUrl || "https://github.com/ferrettogabriel";

    return (
        <div className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary mb-8 transition-colors">
                <ArrowLeft size={20} /> Back to Portfolio
            </Link>

            <div className="holographic-card rounded-2xl overflow-hidden border-primary/20 dark:!bg-[#11212D]">
                {/* Header / Hero */}
                <div className="h-64 md:h-96 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 relative flex items-center justify-center transition-colors">
                    <div className="absolute inset-0 bg-grid opacity-20"></div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4 dark:text-glow transition-colors">{project.title}</h1>
                         <div className="flex justify-center gap-2 flex-wrap">
                             {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-primary/20 text-primary border border-primary/40 rounded-full font-mono text-sm">{tag}</span>
                             ))}
                         </div>
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview Section */}
                            <div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors">Resumen del Proyecto</h3>
                                <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors text-justify">
                                    {project.fullDescription ? (
                                        project.fullDescription.split('\n').map((paragraph, index) => (
                                            paragraph.trim() && <p key={index} className="mb-4 last:mb-0">{paragraph.trim()}</p>
                                        ))
                                    ) : (
                                        <p>
                                            {project.description}
                                            <br /><br />
                                            This project represents a deep dive into {project.tags[0]} ecosystems. The goal was to solve specific challenges in the industry by leveraging modern tech stacks. 
                                            I focused heavily on performance optimization and user experience, ensuring that the final output was not just functional but also delightful to use.
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Features Section */}
                            <div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors">Características principales</h3>
                                <ul className="space-y-3">
                                    {(project.features || [
                                        "Real-time data processing and visualization",
                                        "Secure authentication and role-based access control",
                                        "Responsive design optimized for all devices"
                                    ]).map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                             {/* Detailed Showcase Section (Two Columns) */}
                             {project.showcaseImage && project.showcaseDetails && (
                                <div className="mt-12 pt-12 border-t border-gray-200 dark:border-white/10">
                                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 transition-colors">
                                        Análisis de Interfaz y Módulos
                                    </h3>
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
                                        {/* Left Column: Image */}
                                        <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg group">
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                            <img 
                                                src={project.showcaseImage} 
                                                alt={`${project.title} Interface Showcase`} 
                                                className="w-full h-auto object-cover"
                                            />
                                            <div className="p-2 bg-gray-50 dark:bg-black/50 text-center text-xs text-gray-500 font-mono">
                                                Captura de pantalla: Prototipo funcional v1.0
                                            </div>
                                        </div>

                                        {/* Right Column: Details */}
                                        <div className="space-y-6">
                                            {project.showcaseDetails.map((detail, idx) => (
                                                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-primary/30 transition-all">
                                                    <div className="mt-1 flex-shrink-0 text-primary">
                                                        {getShowcaseIcon(detail.icon)}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1 font-display text-lg">
                                                            {detail.title}
                                                        </h4>
                                                        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                                                            {detail.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                             {/* Gallery / Walkthrough Section - Compact Hero Card */}
                             {project.gallery && project.gallery.length > 0 && (
                                <div className="mt-12 pt-12 border-t border-gray-200 dark:border-white/10">
                                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 transition-colors">
                                        Walkthrough del Sistema
                                    </h3>
                                    
                                    {/* Compact Access Card */}
                                    <div 
                                        onClick={() => openGallery(0)}
                                        className="group relative rounded-xl overflow-hidden bg-gray-900 border border-gray-200 dark:border-white/10 cursor-pointer shadow-lg hover:shadow-neon-sm transition-all duration-300"
                                    >
                                        {/* Dynamic Background */}
                                        <div className="absolute inset-0 z-0">
                                            <img 
                                                src={project.gallery[0].url} 
                                                alt="Background" 
                                                className="w-full h-full object-cover opacity-20 blur-sm group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>
                                        </div>

                                        <div className="relative z-10 flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-8">
                                            {/* Preview Thumbnail */}
                                            <div className="relative w-full md:w-64 aspect-video rounded-lg overflow-hidden border border-white/20 shadow-xl group-hover:-translate-y-1 transition-transform">
                                                <img 
                                                    src={project.gallery[0].url} 
                                                    alt="Walkthrough Preview" 
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Stack Effect Lines */}
                                                <div className="absolute -z-10 top-2 left-2 right-[-8px] bottom-[-8px] bg-white/5 rounded-lg border border-white/5"></div>
                                            </div>

                                            {/* Text Info */}
                                            <div className="flex-grow text-center md:text-left">
                                                <div className="flex items-center justify-center md:justify-start gap-2 text-primary mb-2">
                                                    <Layers size={20} />
                                                    <span className="text-xs font-mono uppercase tracking-widest">Galería Completa</span>
                                                </div>
                                                <h4 className="text-2xl font-display font-bold text-white mb-2">
                                                    Explorar Recorrido ({project.gallery.length} pantallas)
                                                </h4>
                                                <p className="text-gray-400 text-sm mb-0 max-w-xl">
                                                    Visualiza el flujo completo paso a paso: Login, Dashboard, Gestión de Usuarios, Reportes y más. Haz click para iniciar la experiencia interactiva.
                                                </p>
                                            </div>

                                            {/* CTA Button */}
                                            <div className="flex-shrink-0">
                                                <button className="px-6 py-3 bg-primary text-black font-bold uppercase tracking-wider rounded flex items-center gap-2 group-hover:bg-white group-hover:text-black transition-colors shadow-neon-sm">
                                                    <PlayCircle size={20} /> Iniciar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Future Steps Section (Only if present) */}
                            {project.futureSteps && (
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors flex items-center gap-2">
                                        Próximos pasos <ArrowRight size={20} className="text-primary"/>
                                    </h3>
                                    <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors italic">
                                        "{project.futureSteps}"
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 sticky top-24 transition-colors">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 font-display transition-colors">Project Links</h4>
                                <div className="space-y-4">
                                    {/* GitHub Link - Always visible, falls back to profile if project has no repoUrl */}
                                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-gray-200 dark:bg-black/40 hover:bg-primary/20 border border-gray-300 dark:border-white/5 hover:border-primary/50 transition-all group">
                                        <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white"><Github size={18} /> Source Code</span>
                                        <ExternalLink size={16} className="text-gray-500 group-hover:text-primary"/>
                                    </a>
                                    
                                    {/* Live Demo Link - Only visible if demoUrl is present */}
                                    {project.demoUrl && (
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-gray-200 dark:bg-black/40 hover:bg-primary/20 border border-gray-300 dark:border-white/5 hover:border-primary/50 transition-all group">
                                            <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white"><ExternalLink size={18} /> Live Demo</span>
                                            <ExternalLink size={16} className="text-gray-500 group-hover:text-primary"/>
                                        </a>
                                    )}
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-black/40 px-2 py-1 rounded border border-gray-300 dark:border-white/5 transition-colors">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Carousel Modal */}
            {isGalleryOpen && project.gallery && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]">
                    
                    {/* Main Container */}
                    <div className="relative w-full max-w-7xl h-[85vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-800">
                        
                        {/* Close Button (Global) */}
                        <button 
                            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-red-500/80 text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 group"
                            onClick={() => setIsGalleryOpen(false)}
                            title="Close Gallery (Esc)"
                        >
                            <X size={24} className="group-hover:rotate-90 transition-transform" />
                        </button>

                        {/* Left Side: Image & Navigation */}
                        <div className="w-full md:w-3/4 h-[50%] md:h-full bg-black relative group flex items-center justify-center overflow-hidden">
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

                            {/* Main Image */}
                            <img 
                                key={currentImageIndex} // Key forces re-render for animation
                                src={project.gallery[currentImageIndex].url} 
                                alt={`Step ${currentImageIndex + 1}`} 
                                className="max-w-full max-h-full object-contain animate-[scale-in_0.3s_ease-out] z-10"
                            />

                            {/* Navigation Arrows */}
                            <button 
                                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-primary text-white backdrop-blur-sm border border-white/10 hover:border-primary transition-all z-20 md:opacity-0 md:group-hover:opacity-100"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-primary text-white backdrop-blur-sm border border-white/10 hover:border-primary transition-all z-20 md:opacity-0 md:group-hover:opacity-100"
                            >
                                <ChevronRight size={32} />
                            </button>
                            
                            {/* Image Counter Badge (Mobile Only Overlay) */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden bg-black/60 px-3 py-1 rounded-full text-xs text-white border border-white/10 z-20">
                                {currentImageIndex + 1} / {project.gallery.length}
                            </div>
                        </div>

                        {/* Right Side: Description Panel */}
                        <div className="w-full md:w-1/4 h-[50%] md:h-full bg-[#11212D] border-l border-gray-800 flex flex-col relative z-20">
                            <div className="p-6 md:p-8 flex-grow overflow-y-auto custom-scrollbar">
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="text-primary text-xs font-mono border border-primary/30 bg-primary/10 px-2 py-1 rounded">
                                        STEP {currentImageIndex + 1} / {project.gallery.length}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 leading-tight">
                                    Detalle del Proceso
                                </h3>
                                
                                <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>

                                <p className="text-gray-300 leading-relaxed text-sm md:text-base text-justify font-light">
                                    {project.gallery[currentImageIndex].description}
                                </p>
                            </div>

                            {/* Controls Footer in Panel */}
                            <div className="p-4 border-t border-gray-800 bg-[#0f1d28] flex justify-between items-center md:flex">
                                <button 
                                    onClick={handlePrev}
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <ChevronLeft size={16} /> Prev
                                </button>
                                <span className="text-xs text-gray-600 font-mono">
                                    Use Arrows &lt; &gt;
                                </span>
                                <button 
                                    onClick={handleNext}
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Next <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
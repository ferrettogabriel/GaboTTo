import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Beaker, User, Zap, Briefcase, Gamepad2, FileText, ChevronUp, Send, Github, Linkedin } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { projects, getIcon } from './Portfolio';

const Home: React.FC = () => {
    // Dynamic Title
    useEffect(() => {
        document.title = "GaboTTo | Pharma AI & QA Specialist";
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(formData.subject || "Consulta desde Portfolio Web");
        const body = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`);
        window.location.href = `mailto:ferrettogabriel@live.com?subject=${subject}&body=${body}`;
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <div className="inline-block mb-6 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                        <span className="text-primary text-sm font-display tracking-widest uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Continuous Improvement
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-gray-900 dark:text-white mb-6 uppercase leading-none transition-colors">
                        Building The <br/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-300 to-secondary text-glow block mt-2">
                            Quality Pharma Assets
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed transition-colors">
                        Quality Assurance & AI Enthusiast crafting innovative digital experiences with cutting-edge technology. Transforming ideas into reality.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/portfolio" className="group relative px-8 py-3 bg-transparent border border-primary text-primary font-display font-bold uppercase tracking-wider rounded overflow-hidden transition-all hover:shadow-neon hover:text-white">
                            <span className="absolute inset-0 w-full h-full bg-primary/0 group-hover:bg-primary transition-all duration-300"></span>
                            <span className="relative flex items-center gap-2">
                                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link to="/professional-profile" className="px-8 py-3 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white font-display font-bold uppercase tracking-wider rounded hover:bg-gray-300 dark:hover:bg-white/10 transition-all">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-24 relative" id="about">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeader 
                        tag="About Me" 
                        title="Apasionado por" 
                        highlight="las nuevas tecnologías" 
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 relative">
                            {/* Removed aspect-square to allow vertical growth with larger image */}
                            <div className="relative w-full max-w-md mx-auto holographic-card rounded-2xl flex flex-col items-center justify-center p-8 py-12 group dark:!bg-[#11212D]">
                                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-xl"></div>
                                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full border border-primary/20"></div>
                                <div className="text-center z-10 w-full">
                                    {/* Increased size from w-32 h-32 to w-72 h-72 sm:w-96 sm:h-96 (Approx x3) */}
                                    <div className="w-72 h-72 sm:w-80 sm:h-80 mx-auto rounded-full border-4 border-primary shadow-neon overflow-hidden mb-8 transition-transform duration-500 hover:scale-105">
                                        <img src="https://i.postimg.cc/9MMkgj4f/Gabi-F2.jpg" alt="GaboTTo" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-display text-4xl font-bold tracking-wider text-gray-900 dark:text-white mb-2">GaboTTo</h3>
                                    <p className="text-primary font-mono text-lg">QAi Specialist</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-50 blur-xl -z-10 rounded-2xl"></div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6">
                            <div className="holographic-card p-8 rounded-xl border-l-4 border-l-primary shadow-xl dark:!bg-[#11212D]">
                                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors">Creando experiencias digitales</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors">
                                    ¡Hola! Soy un apasionado de la industria y entusiasta de la IA, con más de 15 años de experiencia en Aseguramiento de Calidad. Hoy me encuentro creando soluciones digitales innovadoras para la industria Farmacéutica.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors">
                                    Me especializo en la creación de aplicaciones web modernas que combinan un diseño amigable con una funcionalidad potente.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-white dark:!bg-[#11212D] border border-gray-200 dark:border-white/10 p-4 rounded-lg hover:border-primary/50 transition-colors group shadow-sm dark:shadow-none">
                                    <Beaker className="text-primary w-8 h-8 mb-2 group-hover:scale-110 transition-transform origin-left" />
                                    <h4 className="font-display font-bold text-gray-900 dark:text-white transition-colors">Analista QA</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">BRs, Auditorias, Desvíos, Gestión Documental.</p>
                                </div>
                                <div className="bg-white dark:!bg-[#11212D] border border-gray-200 dark:border-white/10 p-4 rounded-lg hover:border-primary/50 transition-colors group shadow-sm dark:shadow-none">
                                    <Zap className="text-primary w-8 h-8 mb-2 group-hover:scale-110 transition-transform origin-left" />
                                    <h4 className="font-display font-bold text-gray-900 dark:text-white transition-colors">Skills</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">Creatividad, proactividad, resolución de problemas.</p>
                                </div>
                                <div className="bg-white dark:!bg-[#11212D] border border-gray-200 dark:border-white/10 p-4 rounded-lg hover:border-primary/50 transition-colors group shadow-sm dark:shadow-none">
                                    <Cpu className="text-primary w-8 h-8 mb-2 group-hover:scale-110 transition-transform origin-left" />
                                    <h4 className="font-display font-bold text-gray-900 dark:text-white transition-colors">Softs</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">Loyal, Enaxis, TrackWise, ERPs en general.</p>
                                </div>
                                <div className="bg-white dark:!bg-[#11212D] border border-gray-200 dark:border-white/10 p-4 rounded-lg hover:border-primary/50 transition-colors group shadow-sm dark:shadow-none">
                                    <User className="text-primary w-8 h-8 mb-2 group-hover:scale-110 transition-transform origin-left" />
                                    <h4 className="font-display font-bold text-gray-900 dark:text-white transition-colors">AI & Machine Learning</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">LangChain, Local LLMs, RAG y LoRA.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Professional Card */}
                        <div className="holographic-card p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300 dark:!bg-[#11212D]">
                            <div className="absolute top-0 right-0 p-6 opacity-10 text-primary group-hover:scale-110 transition-transform rotate-12">
                                <Briefcase size={120} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 transition-colors">
                                    <Briefcase className="text-primary" />
                                    <span className="text-glow">Professional Profile</span>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg transition-colors">
                                    Expert in Pharmaceutical Quality Assurance with a strategic focus on Digital Transformation.
                                </p>
                                <Link to="/professional-profile" className="inline-flex items-center gap-2 px-8 py-3 bg-primary/10 border border-primary text-primary font-display font-bold uppercase tracking-wider rounded hover:bg-primary hover:text-white transition-all shadow-neon-sm hover:shadow-neon w-full md:w-auto justify-center">
                                    <FileText size={18} /> Full Profile
                                </Link>
                            </div>
                        </div>

                        {/* Personal Side Card */}
                        <div className="holographic-card p-8 rounded-2xl relative overflow-hidden group hover:border-secondary/50 transition-all duration-300 dark:!bg-[#11212D]">
                            <div className="absolute top-0 right-0 p-6 opacity-10 text-secondary group-hover:scale-110 transition-transform -rotate-12">
                                <Gamepad2 size={120} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 transition-colors">
                                    <Gamepad2 className="text-secondary" />
                                    <span>Personal Side</span>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg transition-colors">
                                    Cyberpunk aesthetics, gaming, and exploring the latest in generative AI.
                                </p>
                                <Link to="/personal-side" className="inline-flex items-center gap-2 px-8 py-3 bg-secondary/10 border border-secondary text-secondary font-display font-bold uppercase tracking-wider rounded hover:bg-secondary hover:text-white transition-all shadow-neon-sec hover:shadow-neon-sec w-full md:w-auto justify-center">
                                    <User size={18} /> Visit My World
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Portfolio Preview */}
             <section className="py-24 bg-gray-50 dark:bg-[#050505] relative transition-colors duration-500">
                <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeader tag="Portfolio" title="Selected" highlight="Works" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project) => (
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
                    <div className="mt-12 text-center">
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary hover:text-gray-900 dark:hover:text-white transition-colors font-display font-bold tracking-wider uppercase border-b border-primary pb-1">
                            View All Projects <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

             {/* Contact Section */}
             <section className="py-24 relative bg-white dark:bg-[#050505] transition-colors duration-500" id="contact">
                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block px-3 py-1 rounded border border-primary/30 text-primary text-xs font-display uppercase tracking-widest mb-4">Get In Touch</div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white transition-colors">
                             Let's Build <span className="text-primary text-glow">Together</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 transition-colors">¿Querés que me sume a tu proyecto, empresa, o simplemente queres saludarme?</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                        {/* Form - spans 2 cols */}
                        <div className="lg:col-span-2">
                            <form className="space-y-6" onSubmit={handleSendMessage}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-display text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Your Name</label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Homero Simpsons" 
                                            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" 
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-display text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Email Address</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="homero@ejemplo.com" 
                                            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" 
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-display text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Consulta de Proyecto" 
                                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-display text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                                    <textarea 
                                        rows={6} 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder='"En tiempos de engaño universal, decir la verdad se convierte en un acto revolucionario"' 
                                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none italic"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-black font-display font-bold uppercase tracking-wider rounded transition-all shadow-neon-sm hover:shadow-neon flex items-center justify-center gap-2">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>

                        {/* Sidebar - spans 1 col */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Connect With Me */}
                            <div className="holographic-card p-6 rounded-xl border-gray-200 dark:border-white/10 dark:!bg-[#11212D]">
                                <h4 className="font-display font-bold text-gray-900 dark:text-white mb-6 transition-colors">Connect With Me</h4>
                                <div className="flex gap-4">
                                    <a href="https://github.com/ferrettogabriel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-600 dark:text-white transition-colors border border-gray-200 dark:border-white/10">
                                        <Github size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/gabriel-ferretto-3a9303137" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-600 dark:text-white transition-colors border border-gray-200 dark:border-white/10">
                                        <Linkedin size={24} />
                                    </a>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="holographic-card p-6 rounded-xl border-gray-200 dark:border-white/10 dark:!bg-[#11212D]">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="relative flex h-3 w-3">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    <h4 className="font-display font-bold text-gray-900 dark:text-white transition-colors">Currently Available</h4>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                                    Open for freelance projects and new opportunities. Let's discuss how I can help bring your vision to life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-10 h-10 rounded border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all animate-bounce">
                        <ChevronUp size={20} />
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home;
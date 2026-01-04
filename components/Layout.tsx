import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Power } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Initialize Dark Mode state based on LocalStorage or System Preference
    const [isDark, setIsDark] = useState(() => {
        // 1. Check if user has manually set a preference previously
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        // 2. If no saved preference, check device/system preference
        if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        // 3. Default fallback
        return true; 
    });

    const location = useLocation();
    const navigate = useNavigate();

    // Apply Dark Mode class to HTML element
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    // Manual Toggle Handler
    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        // Save manual preference to localStorage
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    const isActive = (path: string) => {
        return location.pathname === path ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary';
    };

    const handleLetsTalk = (e: React.MouseEvent) => {
        e.preventDefault();
        
        const scrollToContact = () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        };

        if (location.pathname !== '/') {
            navigate('/');
            // Small timeout to allow the Home component to mount before scrolling
            setTimeout(scrollToContact, 100);
        } else {
            scrollToContact();
        }
        
        setIsMenuOpen(false); // Close mobile menu if open
    };

    return (
        <div className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary selection:text-black">
            {/* Background Grid - Global */}
            <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
            
            {/* Navbar */}
            <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-6">
                            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center group-hover:shadow-neon transition-all">
                                    <span className="font-display font-bold text-primary text-xs">G</span>
                                </div>
                                <span className="font-display font-bold text-xl tracking-wider text-gray-900 dark:text-white transition-colors">
                                    Gabo<span className="text-primary group-hover:text-glow transition-all">TTo</span>
                                </span>
                            </Link>

                            {/* Dark Mode Toggle */}
                            <button 
                                onClick={toggleTheme}
                                className={`
                                    flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300
                                    ${isDark 
                                        ? 'bg-primary/10 border-primary text-primary shadow-neon-sm' 
                                        : 'bg-gray-200 border-gray-300 text-gray-500 hover:bg-gray-300'
                                    }
                                `}
                                aria-label="Toggle Dark Mode"
                            >
                                <Power size={16} className={isDark ? 'animate-pulse' : ''} />
                                <span className="text-xs font-display font-bold hidden sm:inline-block">
                                    {isDark ? 'SYSTEM: ON' : 'SYSTEM: OFF'}
                                </span>
                            </button>
                        </div>
                        
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link to="/" className={`${isActive('/')} px-3 py-2 rounded-md text-sm font-medium transition-colors font-display`}>Home</Link>
                                <Link to="/professional-profile" className={`${isActive('/professional-profile')} px-3 py-2 rounded-md text-sm font-medium transition-colors font-display`}>Profile</Link>
                                <Link to="/personal-side" className={`${isActive('/personal-side')} px-3 py-2 rounded-md text-sm font-medium transition-colors font-display`}>Personal Side</Link>
                                <Link to="/portfolio" className={`${isActive('/portfolio')} px-3 py-2 rounded-md text-sm font-medium transition-colors font-display`}>Portfolio</Link>
                                <a 
                                    href="#contact" 
                                    onClick={handleLetsTalk}
                                    className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-4 py-1.5 rounded-full text-sm font-display font-medium transition-all shadow-neon-sm hover:shadow-neon cursor-pointer"
                                >
                                    Let's Talk
                                </a>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 dark:bg-background-dark/95 border-b border-gray-200 dark:border-white/10 backdrop-blur-xl">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-display">Home</Link>
                            <Link to="/professional-profile" onClick={() => setIsMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-display">Profile</Link>
                            <Link to="/personal-side" onClick={() => setIsMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-display">Personal Side</Link>
                            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-display">Portfolio</Link>
                            <a 
                                href="#contact" 
                                onClick={handleLetsTalk}
                                className="text-gray-600 dark:text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-display"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-16 relative z-10">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#050505] text-center py-8 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500 font-mono">© 2024 GaboTTo. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a href="https://github.com/ferrettogabriel" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/gabriel-ferretto-3a9303137" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                            <a href="mailto:ferrettogabriel@live.com" className="text-gray-500 hover:text-primary transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
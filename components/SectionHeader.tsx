import React from 'react';

interface SectionHeaderProps {
    tag: string;
    title: string;
    highlight: string;
    description?: string;
    align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ tag, title, highlight, description, align = 'center' }) => {
    return (
        <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            <div className="inline-block px-3 py-1 rounded border border-primary/30 text-primary text-xs font-display uppercase tracking-widest mb-4 bg-primary/5">
                {tag}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white uppercase transition-colors">
                {title} <span className="text-primary text-glow">{highlight}</span>
            </h2>
            {description && (
                <p className={`mt-4 max-w-2xl text-gray-600 dark:text-gray-400 font-light text-lg ${align === 'center' ? 'mx-auto' : ''} transition-colors`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
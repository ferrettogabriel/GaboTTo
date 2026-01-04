import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ExternalLink, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { blogPosts } from './PersonalSide';

const BlogPostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find(p => p.id === id);

    // Dynamic Title
    useEffect(() => {
        if (post) {
            document.title = `${post.title} | GaboTTo Personal Side`;
        } else {
            document.title = "Post Not Found | GaboTTo";
        }
    }, [post]);

    // Gallery State
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState<{url: string, caption?: string}[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openGallery = (images: {url: string, caption?: string}[], index: number) => {
        setGalleryImages(images);
        setCurrentImageIndex(index);
        setIsGalleryOpen(true);
    };

    const handleNext = useCallback(() => {
        setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, [galleryImages.length]);

    const handlePrev = useCallback(() => {
        setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    }, [galleryImages.length]);

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

    if (!post) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Transmission Not Found</h2>
                <Link to="/personal-side" className="text-primary hover:underline">Return to Personal Side</Link>
            </div>
        );
    }

    return (
        <article className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Back Navigation */}
            <Link to="/personal-side" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-secondary mb-8 transition-colors group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Transmissions
            </Link>

            {/* Header */}
            <header className="mb-12 text-center">
                <div className="inline-block px-3 py-1 rounded border border-secondary/30 text-secondary text-xs font-display uppercase tracking-widest mb-6 bg-secondary/5">
                    {post.category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 dark:text-white mb-6 leading-tight uppercase">
                    {post.title}
                </h1>
                {post.subtitle && (
                    <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light italic mb-8 max-w-2xl mx-auto">
                        {post.subtitle}
                    </h2>
                )}
                <div className="flex items-center justify-center gap-6 text-gray-500 text-sm font-mono border-y border-gray-200 dark:border-white/10 py-4 max-w-md mx-auto">
                    <span className="flex items-center gap-2">
                        <Calendar size={14} /> {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-secondary"></span>
                    <span className="flex items-center gap-2">
                        <Tag size={14} /> {post.category}
                    </span>
                </div>
            </header>

            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl border border-gray-200 dark:border-white/10 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-30"></div>
                <img 
                    src={post.coverImage || `https://picsum.photos/1200/600?random=${post.id}`} 
                    alt={post.title} 
                    className="w-full h-auto object-cover max-h-[500px]"
                />
            </div>

            {/* Content Body */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.body ? (
                    // Structured content (interleaved text and images)
                    <div className="space-y-12">
                        {post.body.map((block, index) => {
                            if (block.type === 'text') {
                                return (
                                    <p key={index} className="text-gray-700 dark:text-gray-300 leading-loose text-lg text-justify">
                                        {block.content}
                                    </p>
                                );
                            } else if (block.type === 'image') {
                                return (
                                    <figure key={index} className="my-8">
                                        <div className={`rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg bg-gray-100 dark:bg-black/20 ${block.className || ''}`}>
                                            <img 
                                                src={block.url} 
                                                alt={block.caption || 'Post image'} 
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                        {block.caption && (
                                            <figcaption className="text-center text-sm text-gray-500 mt-3 font-mono italic">
                                                — {block.caption}
                                            </figcaption>
                                        )}
                                    </figure>
                                );
                            } else if (block.type === 'link') {
                                return (
                                    <p key={index} className="text-gray-700 dark:text-gray-300 leading-loose text-lg break-words">
                                        {block.prefix && <span className="mr-2 font-bold text-gray-900 dark:text-white">{block.prefix}</span>}
                                        <a 
                                            href={block.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-primary hover:text-secondary transition-colors underline decoration-primary/30 underline-offset-4 inline-flex items-center gap-1"
                                        >
                                            {block.label || block.url}
                                            <ExternalLink size={14} />
                                        </a>
                                    </p>
                                );
                            } else if (block.type === 'gallery') {
                                return (
                                    <div key={index} className="my-16">
                                        <div className="flex items-center gap-4 mb-8">
                                            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white m-0">Galería del Proceso</h3>
                                            <div className="h-px bg-gray-200 dark:bg-white/10 flex-grow"></div>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {block.images.map((img, imgIndex) => (
                                                <div 
                                                    key={imgIndex} 
                                                    onClick={() => openGallery(block.images, imgIndex)}
                                                    className="aspect-square rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-white/10 relative group shadow-sm hover:shadow-neon-sec transition-all duration-300"
                                                >
                                                     <img src={img.url} alt={img.caption || `Gallery ${imgIndex}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                        <ZoomIn className="text-white drop-shadow-md" size={32} />
                                                     </div>
                                                     {img.caption && (
                                                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                             <p className="text-white text-[10px] font-mono text-center truncate">{img.caption}</p>
                                                         </div>
                                                     )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                            return null;
                        })}
                    </div>
                ) : (
                    // Fallback for simple posts
                    <p className="text-gray-700 dark:text-gray-300 leading-loose text-lg">
                        {post.excerpt}
                        <br/><br/>
                        <span className="italic text-gray-500">[Full content for this post coming soon...]</span>
                    </p>
                )}
            </div>

            {/* Footer / Signature */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center bg-black overflow-hidden">
                         <span className="font-display font-bold text-white">G</span>
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 dark:text-white font-display">GaboTTo</p>
                        <p className="text-xs text-secondary font-mono">QAi Specialist & Maker</p>
                    </div>
                </div>
            </div>

             {/* Interactive Gallery Modal (Lightbox) */}
             {isGalleryOpen && galleryImages.length > 0 && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]">
                    
                    <div className="relative w-full max-w-7xl h-[85vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-800">
                        
                        <button 
                            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-secondary text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 group"
                            onClick={() => setIsGalleryOpen(false)}
                            title="Close Gallery (Esc)"
                        >
                            <X size={24} className="group-hover:rotate-90 transition-transform" />
                        </button>

                        <div className="w-full h-full bg-black relative group flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

                            <img 
                                key={currentImageIndex} 
                                src={galleryImages[currentImageIndex].url} 
                                alt={galleryImages[currentImageIndex].caption || `Gallery Image ${currentImageIndex + 1}`} 
                                className="max-w-full max-h-full object-contain animate-[scale-in_0.3s_ease-out] z-10"
                            />

                            <button 
                                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-secondary text-white backdrop-blur-sm border border-white/10 hover:border-secondary transition-all z-20"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-secondary text-white backdrop-blur-sm border border-white/10 hover:border-secondary transition-all z-20"
                            >
                                <ChevronRight size={32} />
                            </button>
                            
                            {/* Caption Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-12 text-center z-20">
                                 {galleryImages[currentImageIndex].caption && (
                                     <p className="text-white font-display font-bold text-xl mb-2 text-glow">{galleryImages[currentImageIndex].caption}</p>
                                 )}
                                 <p className="text-gray-400 text-xs font-mono">{currentImageIndex + 1} / {galleryImages.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
};

export default BlogPostDetail;
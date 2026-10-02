import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projects } from '../pages/Portfolio';
import { blogPosts } from '../pages/PersonalSide';

const siteUrl = 'https://www.gabotto.com';

const descriptions: Record<string, string> = {
    '/': 'Portfolio de Gabriel Ferretto: software, automatización y análisis de datos para calidad, industria farmacéutica y energía.',
    '/professional-profile': 'Experiencia profesional de Gabriel Ferretto en aseguramiento de calidad, validaciones y procesos de la industria farmacéutica.',
    '/personal-side': 'Intereses, proyectos personales y reflexiones de Gabriel Ferretto sobre tecnología, creatividad y vida cotidiana.',
    '/portfolio': 'Proyectos de Gabriel Ferretto en software, inteligencia artificial y análisis de datos para la industria farmacéutica y energía.'
};

const RouteMetadata = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
        const project = path.startsWith('/portfolio/')
            ? projects.find(item => '/portfolio/' + item.id === path)
            : undefined;
        const post = path.startsWith('/personal-side/')
            ? blogPosts.find(item => '/personal-side/' + item.id === path)
            : undefined;
        const description = project?.description || post?.excerpt || descriptions[path];

        let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta);
        }
        if (description) meta.content = description;

        let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (description) {
            if (!canonical) {
                canonical = document.createElement('link');
                canonical.rel = 'canonical';
                document.head.appendChild(canonical);
            }
            canonical.href = siteUrl + path;
        } else {
            canonical?.remove();
        }
    }, [pathname]);

    return null;
};

export default RouteMetadata;

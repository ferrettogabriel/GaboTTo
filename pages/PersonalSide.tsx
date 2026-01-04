import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { Gamepad2, ArrowRight, BookOpen, BrainCircuit, Heart } from 'lucide-react';
import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
    {
        id: 'juewitos',
        title: 'Juewitos',
        subtitle: 'Dota 2, Roblox y momentos compartidos.',
        date: 'Nov 15, 2024',
        category: 'Gaming',
        excerpt: 'Oooootra cosa que me encanta es jugar videojuegos, sobre todos los que presentan el desafio constante de habilidad.',
        coverImage: 'https://e0.pxfuel.com/wallpapers/116/4/desktop-wallpaper-dota-2-logo-dota2-logo.jpg',
        body: [
            {
                type: 'text',
                content: 'Oooootra cosa que me encanta es jugar videojuegos, sobre todos los que presentan el desafio constante de habilidad. Como es el caso del Dota 2, no veo la hora de que mi nena crezca y compartir algunas partidas con ella, acompañarla a pensar estrategias y elecciones rápidas en un juego super dinámico que te empuja al límite de tus capacidades y concentración. Solo si queres jugar enserio, sino también podes divertirte y disfrutarlo.'
            },
            {
                type: 'image',
                url: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1766010373',
                caption: 'Dota 2'
            },
            {
                type: 'text',
                content: 'De momento, con Alina, disfrutamos roblox =D. Acompañarla, compartir algo, momentos de calidad y ocio, ayudar a su desarrollo cognitivo y creativo es algo que disfruto mucho <3.'
            },
            {
                type: 'image',
                url: 'https://i.postimg.cc/zDbMT0wj/robl0x.png',
                caption: 'Roblox con Alina'
            }
        ]
    },
    {
        id: 'hobbies-and-stuff',
        title: 'Hobbies and stuff',
        subtitle: 'Modelado, Escultura y Creatividad.',
        date: 'Nov 12, 2024',
        category: 'Sculpting & Modeling',
        excerpt: 'Poco a poco voy dejando claro que me gusta hacer de todo jajaj, me gusta aprender cosas y sobre todo me gustan los procesos creativos.',
        coverImage: 'https://i.postimg.cc/FshRYd3H/Goku_baby.jpg',
        body: [
            {
                type: 'text',
                content: 'Poco a poco voy dejando claro que me gusta hacer de todo jajaj, me gusta aprender cosas y sobre todo me gustan los procesos creativos.'
            },
            {
                type: 'text',
                content: 'De chico siempre me gustó dibujar, no tengo muchos dibujos a mano como para poner, algún otro día... El punto es que alguna vez en la famosa comiqueria de Kamelot, ví el Batman de Martín Canale y quedé fascinado… ahí me quedó rondando la cabeza como lo hizo, sentí que había algo ahí, pocos años después pude ver creo que en canal A, un proceso de escultura como hobby, justo ahí volvió a aparecer la escultura (diorama en sí) de Martín y el paso a paso. Ahí dije, “esto lo puedo hacer yo”, así comenzó el desafío y creo que si bien por cuestiones de tiempo a veces cuesta sentarme o dedicarle el espacio que quisiera, diría que es una gran pasión hacer cositas =D.'
            },
            {
                type: 'text',
                content: 'Modelado en plastilina, masilla epoxi, plasticera (cera de vela + cera de aveja + plastilina), 3D con PLA y otros materiales más, siempre tratando de ofrecer detalles o la máxima calidad que mis manos permitan. Desde personajes de comics, películas, Sci-fi, juegos y demás. Dejo galería con algunas cosas realizadas, otras en proceso y mas =D.'
            },
            {
                type: 'gallery',
                images: [
                     { url: 'https://i.postimg.cc/K8b2tTWm/batman1.jpg', caption: 'Batman' },
                     { url: 'https://i.postimg.cc/GmRCvDfc/batman2.jpg', caption: 'Batman - Detalle' },
                     { url: 'https://i.postimg.cc/P5Hj1D7r/berserk1.jpg', caption: 'Berserk' },
                     { url: 'https://i.postimg.cc/fRsNYdPW/berserk2.jpg', caption: 'Berserk' },
                     { url: 'https://i.postimg.cc/Bn302FzS/darth_maul1.jpg', caption: 'Darth Maul' },
                     { url: 'https://i.postimg.cc/Gmj1K20n/darth_maul2.jpg', caption: 'Darth Maul' },
                     { url: 'https://i.postimg.cc/W17P83Rj/darth_maul3.jpg', caption: 'Darth Maul' },
                     { url: 'https://i.postimg.cc/t4zHkT0p/dota1.jpg', caption: 'Dota 2' },
                     { url: 'https://i.postimg.cc/cLcNhHqd/goku1.jpg', caption: 'Goku para un pesebre' },
                     { url: 'https://i.postimg.cc/mgSGjDxb/goku2.jpg', caption: 'Goku' },
                     { url: 'https://i.postimg.cc/QdqrmtL8/goku3.jpg', caption: 'Goku' },
                     { url: 'https://i.postimg.cc/FshRYd3H/Goku_baby.jpg', caption: 'Goku Baby' },
                     { url: 'https://i.postimg.cc/P5MkyxGr/jason1.jpg', caption: 'Jason Voorhees' },
                     { url: 'https://i.postimg.cc/RZTzdFr0/mandalorian1.jpg', caption: 'The Mandalorian' },
                     { url: 'https://i.postimg.cc/g2KPsJ9J/mandalorian2.jpg', caption: 'The Mandalorian' },
                     { url: 'https://i.postimg.cc/9Q2hy9kV/apocalypse1.jpg', caption: 'Apocalypse (X-Men)' },
                     { url: 'https://i.postimg.cc/P5Hj1D7T/apocalypse2.jpg', caption: 'Apocalypse (X-Men)' },
                     { url: 'https://i.postimg.cc/7Yq65G0C/apocalypse3.jpg', caption: 'Apocalypse (X-Men)' },
                     { url: 'https://i.postimg.cc/dtJ1hkrk/Molderia.jpg', caption: 'Moldería' },
                     { url: 'https://i.postimg.cc/rFqmD0xr/molderia2.jpg', caption: 'Proceso de Moldería' },
                ]
            }
        ]
    },
    {
        id: 'ai-pharma-revolution',
        title: 'AI y la Industria Farmacéutica',
        subtitle: 'Del Cumplimiento Normativo al Quality Data Science.',
        date: 'Nov 05, 2024',
        category: 'Tech & Pharma',
        excerpt: 'Durante estos últimos años, creo que todos hemos sido testigos del avance de la inteligencia artificial, aún así, de momentos siento que muchas empresas no le sacan el provecho necesario.',
        coverImage: 'https://i.postimg.cc/G25gwCcr/homer_robot.png',
        body: [
            {
                type: 'text',
                content: 'Durante estos últimos años, creo que todos hemos sido testigos del avance de la inteligencia artificial, aún así, de momentos siento que muchas empresas no le sacan el provecho necesario, en particular, la industria farmacéutica. Por un lado, me comenzó a pasar que sentía que el único propósito de Garantía de Calidad, en cuanto a datos, era cumplir requisitos regulatorios y tener lindos KPIs para que la gerencia pueda presentar a los directivos (es broma pero si quieres no es broma).'
            },
            {
                type: 'text',
                content: 'En algún punto siento que falta automatización, que se puede armar algo interesante más allá de la calidad y el cumplimiento normativo. Aprovechar los datos para procesos Machine Learning, poder ser más eficientes en los tiempos, y por qué no, dar un aporte mayor a las organizaciones desde lo que creo que podría ser Quality Data Science.'
            },
            {
                type: 'image',
                url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop',
                caption: 'El futuro: Asistencia inteligente en entornos estériles y controlados.'
            },
            {
                type: 'text',
                content: 'Ya que, en el futuro no inmediato, creo que un SGC va a poder ser prácticamente guiado con AI, desde procesos básicos como el llenado de un batch record por el operario asistido por un LLM local. La toma de los datos para revisiones anuales, valores estadísticos y predicción de tendencias. Sistemas de gestión de documentos con asistencia local, chatbots de consulta por documentos, normas y procedimientos en general. Propuestas automáticas para acciones correctivas/preventivas desde la AI, y no solo con respuestas sintéticas, sino alimentadas por propuestas orgánicas reales desde los mismos equipos de la organización. Generando una impronta propia del establecimiento. Laboratorios de renombre mundial ya están empezando con este cambio, no solo en QA, sino también en Desarrollo y control de calidad. Por ejemplo, Relay Therapeutics: Su plataforma Dynamo integra IA para modelar movimientos proteicos y predecir enlaces moleculares, enfocada en oncología. Avanzaron RLY-2608 a potencial fase III.'
            },
            {
                type: 'text',
                content: 'Si bien, cualquiera puede tener su propio ERP, está claro que hay una cuestión de costos que es difícil acceder o sustentar, hoy siento que esa barrera por un lado está bajando, y por otro, las necesidades de adaptarse harán que la gran mayoría de los laboratorios pueda y deba acceder a su propio ERP totalmente integrado, adecuado a sus propias necesidades y exigencias. A mi modo de ver, la tendencia será por lo menos en Aseguramiento de calidad, la de equipos reducidos, donde habrá menos acción y más monitoreo, control en tiempo real de los datos. Cualquier desviación disparará las acciones propuestas de forma automática por AI (producto de alimentarla con datos propios de forma continua), el analista solo verificará que sean optimas y dará curso.'
            },
            {
                type: 'text',
                content: 'Más allá de lo obvio, creo que estamos en un momento bisagra similar a la revolución industrial. Donde quien no se adapte de forma rápida, podrá quedar afuera de este cambio. En mi caso, intento ser parte del proceso tratando de crear herramientas para la industria, varias BBB (buenas, bonitas y baratas). Creo que es una buena oportunidad de no solo mostrar mi capital humano, sino también la posibilidad de ofrecer un servicio, tanto a laboratorios nacionales (no digo que multi’s no, pero manejan otros presupuestos), como proveedores que necesiten soluciones optimas y económicas, con estándares de calidad altos (CFR21 11), con creativas y novedosas características, como es la generación de Quizzes con AI.'
            },
            {
                type: 'link',
                prefix: 'Fuente del ejemplo:',
                url: 'https://www.biopharmatrend.com/artificial-intelligence/recent-ipos-among-ai-driven-platforms-for-drug-discovery-and-biotech-601/',
                label: 'https://www.biopharmatrend.com/artificial-intelligence/recent-ipos-among-ai-driven-platforms-for-drug-discovery-and-biotech-601/'
            }
        ]
    },
    {
        id: 'madera-paciencia',
        title: 'De madera y paciencia',
        subtitle: 'Creación y restauración de muebles, disfrutando el proceso.',
        date: 'Oct 20, 2024',
        category: 'DIY & Restoration',
        excerpt: 'Algo de lo que disfruto mucho es hacer cosas para la casa, poder darle mi toque o mirada a las cosas, me hacen sentir que dejo algo de mi en ellas.',
        coverImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGBCCKisN5FGCva4fpzE8smN4z0SHu0Q9aLFhKlDl_X61BhM3s7rNauYrrZfnDbX2Smgj06_lAfHpFr6H4yopxgERuiI-Yyf9D1zPxclt1LsLxgNQuY1yhxipWc3JZcvSgDEBG/s1600/Simpsons_10_19_P3.jpg',
        body: [
            {
                type: 'text',
                content: 'Algo de lo que disfruto mucho es hacer cosas para la casa, poder darle mi toque o mirada a las cosas, me hacen sentir que dejo algo de mi en ellas o que llevan mi impronta por así decirlo. Por otro lado, durante el proceso, siempre pasa algún imprevisto y hay que buscar la manera de solucionar, o luego vienen las correcciones de cosas que no salieron como uno esperaba. Todo ese proceso es de las cosas que más disfruto… el constante aprendizaje, buscar la manera de encontrarle la vuelta a cosas que a priori están fuera de presupuesto, encontrar maneras creativas de bajar costos o tiempos.'
            },
            {
                type: 'text',
                content: 'Cuando inicie el proceso remodelado del baño, principalmente el del vanitory, fue desde el armado del boceto, teniendo en cuenta las dimensiones del baño, buscar la manera de tener cajoneras y puertas para poder aprovechar los espacios. Buscar los herrajes que den armonía al conjunto, por último, una bacha y grifería que transmitan cierto espíritu.'
            },
            {
                type: 'image',
                url: 'https://i.postimg.cc/wjhDjQgS/vanitory2-1.jpg',
                caption: 'El proceso del vanitory: buscando la armonía entre herrajes y madera.'
            },
            {
                type: 'text',
                content: 'Los frisos fueron lo que mas costó, no tanto por el proceso, costó encontrar la manera de hacerlos de forma práctica y simétrica. El material usado fue porcelana fría lo cual fue otro desafía tratar de que no le afecte la humedad ni se deforme al pintar. Por último, como fallo de cálculos, no contaba con que el jabón degradara la pintura epoxi de la parte superior, así que una vez instalado tuve que utilizar pintura náutica (otro tema llegar a esta conclusión).'
            },
            {
                type: 'text',
                content: 'Para el espejo, reciclé un antiguo marco estilo francés (compré dos cuadros viejos, uno murió en el proceso jajaj). La idea fue restaurarlo para que dialogue con la madera del vanitory y aporte ese toque clásico y elegante que termina de unificar la estética de todo el conjunto.'
            },
            {
                type: 'image',
                url: 'https://i.postimg.cc/9MW0VsBG/vanitory10.jpg',
                caption: 'Un poco del feliz proceso.'
            },
            {
                type: 'text',
                content: 'Por ultimo y bonus-track, me pareció copada la idea de agregar un botiquín vintage, como no encontré, busqué unas mesas de luz Luis XV , la restauré y modifique para que al invertirla quede con esa estética de la foto, cambié guias para invertir el cajón, agregué unos frisos dorados y armé una base para botoquin interno, arriba coloqué el mármol con adornos y dentro un potus =) que no aparece en la foto.'
            },
            {
                type: 'image',
                url: 'https://i.postimg.cc/23pfjZDf/botiquin.jpg',
                caption: 'Bonus track: Transformación de mesa de luz Luis XV a botiquín vintage.',
                className: 'max-w-md mx-auto'
            }
        ]
    }
];

const PersonalSide: React.FC = () => {
    // Dynamic Title
    useEffect(() => {
        document.title = "Personal Side | GaboTTo";
    }, []);

    return (
        <div className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SectionHeader 
                tag="Lifestyle" 
                title="Mi Universo" 
                highlight="Personal" 
                description="Juegos, ocio, memes, reflexiones sobre el futuro, procesos creativos y demás cositas."
            />

            {/* Hobbies / Status Grid - Now centered and full width without Battlestation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                
                {/* Playing */}
                <div className="holographic-card p-6 rounded-xl border-t-4 border-t-secondary dark:!bg-[#11212D] h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-6 transition-colors flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                            <Gamepad2 size={24} />
                        </div>
                        Currently Playing
                    </h4>
                    <ul className="space-y-4 text-gray-600 dark:text-gray-300 flex-grow">
                        <li className="flex items-center gap-2 text-lg">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            Dota 2 <Heart size={16} className="text-red-500 fill-red-500 animate-pulse"/>
                        </li>
                        <li className="flex flex-col gap-1">
                             <div className="flex items-center gap-2 text-lg">
                                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                Roblox
                             </div>
                             <span className="text-sm text-gray-500 dark:text-gray-400 pl-4 italic flex items-center gap-1">
                                con mi hija Alina <div className="flex"><Heart size={12} className="text-red-500 fill-red-500"/><Heart size={12} className="text-red-500 fill-red-500"/></div>
                             </span>
                        </li>
                    </ul>
                </div>

                {/* Reading */}
                <div className="holographic-card p-6 rounded-xl border-t-4 border-t-secondary dark:!bg-[#11212D] h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-6 transition-colors flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                            <BookOpen size={24} />
                        </div>
                        Reading
                    </h4>
                    <div className="flex-grow flex flex-col justify-center">
                        <p className="text-xl font-display text-gray-900 dark:text-white mb-2">
                            "Soy Roca"
                        </p>
                        <p className="text-sm text-secondary font-mono mb-4 uppercase tracking-wider">
                            Félix Luna
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm italic border-l-2 border-secondary/30 pl-3">
                            "Estoy leyendo poco últimamente, pero terminando este clásico."
                        </p>
                    </div>
                </div>

                {/* Learning */}
                <div className="holographic-card p-6 rounded-xl border-t-4 border-t-secondary dark:!bg-[#11212D] h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-6 transition-colors flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                            <BrainCircuit size={24} />
                        </div>
                        Learning Path
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {['AI Agents', 'RAG', 'Fine-Tuning', 'Machine Learning', 'Programación General'].map((tech) => (
                            <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded text-sm text-gray-700 dark:text-gray-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div>
                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 transition-colors">Latest <span className="text-secondary">Transmissions</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <Link to={`/personal-side/${post.id}`} key={post.id} className="group cursor-pointer block h-full">
                            <article className="flex flex-col h-full">
                                <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-t-xl overflow-hidden relative transition-colors">
                                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 group-hover:opacity-100 transition-opacity"></div>
                                    <img 
                                        src={post.coverImage || `https://picsum.photos/400/300?random=${post.id}`} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="holographic-card p-6 rounded-b-xl border-t-0 group-hover:border-secondary/50 transition-all dark:!bg-[#11212D] flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-mono text-secondary border border-secondary/30 px-2 py-1 rounded">{post.category}</span>
                                        <span className="text-xs text-gray-500">{post.date}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 transition-colors flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-xs font-bold text-gray-500 group-hover:text-secondary mt-auto transition-colors gap-1">
                                        READ MORE <ArrowRight size={12} />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PersonalSide;
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeTechnology, setActiveTechnology] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Combinar proyectos de frontend y backend
    const allProjects = useMemo(() => {
        return [
            ...projectsData.frontend.map(p => ({ ...p, category: 'frontend' })),
            ...projectsData.backend.map(p => ({ ...p, category: 'backend' }))
        ];
    }, []);

    // Obtener tecnologías disponibles según la categoría activa
    const availableTechnologies = useMemo(() => {
        let projectsToCheck = allProjects;

        if (activeCategory !== 'all') {
            projectsToCheck = allProjects.filter(p => p.category === activeCategory);
        }

        const techs = new Set(projectsToCheck.map(p => p.technology));
        return ['all', ...Array.from(techs)];
    }, [allProjects, activeCategory]);

    // Resetear tecnología a 'all' cuando cambia la categoría
    useEffect(() => {
        setActiveTechnology('all');
        setCurrentPage(1);
    }, [activeCategory]);

    // Filtrar proyectos
    const filteredProjects = useMemo(() => {
        let filtered = allProjects;

        if (activeCategory !== 'all') {
            filtered = filtered.filter(p => p.category === activeCategory);
        }

        if (activeTechnology !== 'all') {
            filtered = filtered.filter(p => p.technology === activeTechnology);
        }

        return filtered;
    }, [allProjects, activeCategory, activeTechnology]);

    // Paginación
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

    // Ajustar página si se sale del rango
    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(1);
        }
    }, [currentPage, totalPages]);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const handleTechnologyChange = (tech) => {
        setActiveTechnology(tech);
        setCurrentPage(1);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Mis Proyectos
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explora mi colección de {filteredProjects.length} proyectos
                    </p>
                </motion.div>

                {/* Filtros de Categoría */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {['all', 'frontend', 'backend'].map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {category === 'all' ? 'Todos' : category === 'frontend' ? 'Frontend' : 'Backend'}
                        </button>
                    ))}
                </div>

                {/* Filtros de Tecnología - Solo muestra tecnologías disponibles */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {availableTechnologies.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => handleTechnologyChange(tech)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTechnology === tech
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                                }`}
                        >
                            {tech === 'all' ? 'Todas las tecnologías' : tech}
                        </button>
                    ))}
                </div>

                {/* Indicador de filtros activos */}
                {(activeCategory !== 'all' || activeTechnology !== 'all') && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 text-center"
                    >
                        <span className="text-gray-600">
                            Mostrando{' '}
                            <span className="font-bold text-blue-600">{filteredProjects.length}</span>{' '}
                            {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}
                            {activeCategory !== 'all' && (
                                <span> de <span className="font-semibold">{activeCategory === 'frontend' ? 'Frontend' : 'Backend'}</span></span>
                            )}
                            {activeTechnology !== 'all' && (
                                <span> usando <span className="font-semibold">{activeTechnology}</span></span>
                            )}
                        </span>
                        <button
                            onClick={() => {
                                setActiveCategory('all');
                                setActiveTechnology('all');
                                setCurrentPage(1);
                            }}
                            className="ml-3 text-sm text-blue-600 hover:text-blue-800 underline"
                        >
                            Limpiar filtros
                        </button>
                    </motion.div>
                )}

                {/* Grid de Proyectos */}
                {paginatedProjects.length > 0 ? (
                    <>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            key={`${activeCategory}-${activeTechnology}-${currentPage}`}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                        >
                            {paginatedProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                                >
                                    {/* Imagen del proyecto */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 right-3 flex gap-2">
                                            <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                                                {project.category === 'frontend' ? 'Frontend' : 'Backend'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div className="p-5">
                                        <div className="mb-2">
                                            <span className="text-xs text-blue-600 font-semibold">
                                                {project.technology}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Enlaces */}
                                        <div className="flex gap-3">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
                                            >
                                                GitHub
                                            </a>
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                                            >
                                                Demo
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Paginación */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === 1
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white shadow-md'
                                        }`}
                                >
                                    Anterior
                                </button>

                                <div className="flex gap-2">
                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPage(index + 1)}
                                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === index + 1
                                                    ? 'bg-blue-600 text-white shadow-lg'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === totalPages
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white shadow-md'
                                        }`}
                                >
                                    Siguiente
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    /* Mensaje cuando no hay proyectos */
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                    >
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            No se encontraron proyectos
                        </h3>
                        <p className="text-gray-600 mb-6">
                            No hay proyectos que coincidan con los filtros seleccionados
                        </p>
                        <button
                            onClick={() => {
                                setActiveCategory('all');
                                setActiveTechnology('all');
                                setCurrentPage(1);
                            }}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Ver todos los proyectos
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
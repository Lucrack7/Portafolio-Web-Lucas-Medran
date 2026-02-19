import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const [ovr, setOvr] = useState(0);

    // Stats de la carta FIFA
    const stats = [
        { name: 'HTML', value: 95, icon: 'fab fa-html5', color: 'text-orange-500' },
        { name: 'CSS', value: 93, icon: 'fab fa-css3-alt', color: 'text-blue-500' },
        { name: 'JavaScript', value: 95, icon: 'fab fa-js', color: 'text-yellow-500' },
        { name: 'React', value: 90, icon: 'fab fa-react', color: 'text-cyan-400' },
        { name: 'Angular', value: 88, icon: 'fab fa-angular', color: 'text-red-600' },
        { name: 'TypeScript', value: 85, icon: '', color: 'text-blue-600' },
    ];

    // Tecnologías adicionales
    const technologies = [
        { name: 'HTML', icon: 'fab fa-html5', color: 'text-orange-500' },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
        { name: 'JavaScript', icon: 'fab fa-square-js', color: 'text-yellow-500' },
        { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
        { name: 'TypeScript', icon: '', color: 'text-blue-500', text: 'TS' },
        { name: 'Angular', icon: 'fab fa-angular', color: 'text-red-600' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-600' },
        // { name: 'Tailwind CSS', icon: '', color: 'text-teal-500', text: '💨' },
        { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
        { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-500' },
        // { name: 'Python', icon: 'fab fa-python', color: 'text-yellow-400' },
        // { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
    ];

    // Calcular OVR (promedio de stats)
    useEffect(() => {
        const average = Math.round(
            stats.reduce((acc, stat) => acc + stat.value, 0) / stats.length
        );
        setOvr(average);
    }, []);

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
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-500 mb-4">
                        HABILIDADES Y FICHA TÉCNICA
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Columna 1: Carta FIFA */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="w-full max-w-md">
                            <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-8 shadow-2xl border-4 border-yellow-400">
                                {/* Top Card Info */}
                                <div className="flex items-center space-x-6 mb-6">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, type: 'spring' }}
                                        className="text-center"
                                    >
                                        <div className="text-7xl font-black text-yellow-300 drop-shadow-lg">
                                            {ovr}
                                        </div>
                                    </motion.div>
                                    <div className="flex-grow">
                                        <p className="text-xl font-bold uppercase text-yellow-300 tracking-wider">
                                            Frontend Dev
                                        </p>
                                        <h3 className="text-4xl font-extrabold text-white drop-shadow-lg">
                                            Lucas <span className="text-yellow-500">Medran</span>
                                        </h3>
                                    </div>
                                </div>

                                {/* Player Image */}
                                <div className="flex justify-center mb-6">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative"
                                    >
                                        <img 
                                            src="/img/foto-habilidades.png" 
                                            alt="Lucas Medran"
                                            className="w-48 h-48 object-cover rounded-2xl shadow-2xl"
                                        />
                                    </motion.div>
                                </div>

                                {/* Stats */}
                                <div className="space-y-3">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={stat.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all"
                                        >
                                            <div className="flex items-center space-x-3">
                                                {stat.icon ? (
                                                    <i className={`${stat.icon} text-2xl ${stat.color}`}></i>
                                                ) : (
                                                    <span className={`text-2xl font-black ${stat.color}`}>TS</span>
                                                )}
                                                <span className="text-white font-semibold text-lg">
                                                    {stat.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="text-2xl font-bold text-yellow-300">
                                                    {stat.value}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer Info */}
                                <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/20">
                                    <div className="text-sm font-semibold text-white/80">
                                        <p className="flex items-center gap-2">
                                            Córdoba, Argentina
                                            <span className="text-lg">🇦🇷</span>
                                        </p>
                                    </div>
                                    <div className="text-sm font-semibold text-white/80">
                                        <p className="flex items-center gap-2">
                                            DEV
                                            <i className="fas fa-code text-yellow-300"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Columna 2: Lista de Tecnologías */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700"
                    >
                        <h3 className="text-3xl font-bold mb-8 text-blue-500 border-b-2 border-blue-500 pb-4">
                            Stack Tecnológico
                        </h3>

                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                        >
                            {technologies.map((tech, index) => (
                                <motion.li
                                    key={tech.name}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="flex flex-col items-center space-y-2 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all cursor-pointer shadow-lg"
                                >
                                    {tech.icon ? (
                                        <i className={`${tech.icon} text-4xl ${tech.color}`}></i>
                                    ) : (
                                        <span className={`text-4xl font-black ${tech.color}`}>
                                            {tech.text}
                                        </span>
                                    )}
                                    <span className="text-white font-medium text-center text-sm">
                                        {tech.name}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Competencias adicionales */}
                        <div className="mt-10 pt-8 border-t border-gray-700">
                            <h4 className="text-xl font-bold mb-4 text-blue-400">
                                Competencias Profesionales
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    'Trabajo en Equipo',
                                    'Resolución de Problemas',
                                    'Aprendizaje Continuo',
                                    'Gestión del Tiempo',
                                    'Creatividad',
                                    'Adaptabilidad',
                                ].map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-500 transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Disclaimer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center text-gray-400 text-sm max-w-3xl mx-auto"
                >
                    ⚠️ Las habilidades mostradas en esta ficha son únicamente representativas
                    y tienen un fin ilustrativo. El conocimiento en programación está en
                    constante evolución y aprendizaje.
                </motion.p>
            </div>
        </section>
    );
};

export default Skills;
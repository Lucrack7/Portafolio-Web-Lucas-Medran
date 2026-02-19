import { motion } from 'framer-motion';
import { useMemo } from 'react';

const Hero = () => {
    const particles = useMemo(() => {
        return [...Array(20)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }));
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Banner de Fondo con Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Imagen de fondo */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://t3.ftcdn.net/jpg/04/67/96/14/360_F_467961418_UnS1ZAwAqbvVVMKExxqUNi0MUFTEJI83.jpg')",
                    }}
                >
                    {/* Overlay oscuro para mejorar legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900/80 to-purple-900/80"></div>

                    {/* Overlay con patrón de puntos */}
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>
            </div>

            {/* Contenido del Hero */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24">
                <div className="text-center">
                    {/* Saludo animado */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-lg sm:text-xl text-blue-300 font-medium mb-4">
                            💫 Hola, soy
                        </h2>
                    </motion.div>

                    {/* Nombre principal */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
                    >
                        Lucas Medran
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl sm:text-2xl lg:text-3xl text-blue-200 mb-8 drop-shadow-lg"
                    >
                        Front-End Developer
                    </motion.p>

                    {/* Descripción */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-lg text-gray-200 max-w-2xl mx-auto mb-12 drop-shadow-lg"
                    >
                        Estudiante de Ingeniería en Sistemas con 6 años de experiencia
                        programando. Creando experiencias web modernas y funcionales.
                    </motion.p>

                    {/* Botones CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-medium"
                        >
                            Ver Proyectos
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-medium"
                        >
                            Contáctame
                        </a>
                    </motion.div>

                    {/* Stats rápidos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16"
                    >
                        {/* <div className="text-center">
                            <div className="text-4xl font-bold text-blue-300">6+</div>
                            <div className="text-sm text-gray-300 mt-1">Años Programando</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-300">50+</div>
                            <div className="text-sm text-gray-300 mt-1">Proyectos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-300">100%</div>
                            <div className="text-sm text-gray-300 mt-1">Dedicación</div>
                        </div> */}
                    </motion.div>

                    {/* Animación de scroll */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="mt-20"
                    >
                        <a href="#about" className="inline-block">
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                            >
                                <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                            </motion.div>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Partículas flotantes decorativas (opcional) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Título de la sección */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Sobre mí
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Imagen/Avatar */}
                        <motion.div variants={itemVariants} className="flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl transform rotate-6"></div>
                                <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 bg-gray-300 rounded-2xl flex items-center justify-center text-6xl">
                                    <span role="img" aria-label="Avatar">
                                        <img src="/public/img/Foto-inicio-sin-fondo.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contenido de texto */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">
                                ¡Hola! Soy Lucas Medran
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Estudiante de <span className="font-semibold text-blue-600">Ingeniería en Sistemas</span> apasionado
                                por el desarrollo web y la creación de experiencias digitales
                                únicas. Con <span className="font-semibold text-blue-600">6 años de experiencia</span> programando,
                                he desarrollado múltiples proyectos que combinan diseño moderno
                                y funcionalidad impecable.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Me especializo en <span className="font-semibold text-blue-600">Front-End Development</span>,
                                creando interfaces responsive, accesibles y optimizadas. Mi
                                objetivo es transformar ideas en productos digitales que generen
                                impacto real.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 pt-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600">5+</div>
                                    <div className="text-sm text-gray-600 mt-2">Años Programando</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600">50+</div>
                                    <div className="text-sm text-gray-600 mt-2">Proyectos Completados</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600">100%</div>
                                    <div className="text-sm text-gray-600 mt-2">Dedicación</div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="pt-6">
                                <a
                                    href="#contact"
                                    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Hablemos de tu proyecto
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
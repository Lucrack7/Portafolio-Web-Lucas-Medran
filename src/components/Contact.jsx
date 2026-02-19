import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes integrar un servicio como EmailJS, Formspree, etc.
        // Por ahora, solo mostramos un mensaje de éxito
        setStatus('¡Mensaje enviado! Me pondré en contacto contigo pronto.');

        // Limpiar formulario
        setFormData({
            name: '',
            email: '',
            message: '',
        });

        // Limpiar mensaje después de 5 segundos
        setTimeout(() => setStatus(''), 5000);
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            url: 'https://github.com/Lucrack7/Lucrack7',
            color: 'hover:text-gray-900',
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            url: 'https://www.linkedin.com/in/lucas-medran-dev/',
            color: 'hover:text-blue-700',
        },
        {
            name: 'WatsApp',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>

            ),
            url: 'https://wa.me/3512829973',
            color: 'hover:text-green-500',
        },
        {
            name: 'Email',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            url: 'mailto:lucasmedran.dev@email.com',
            color: 'hover:text-red-600',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Contacto
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente? ¡Hablemos!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Formulario */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Envíame un mensaje
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nombre */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                />
                            </div>

                            {/* Botón */}
                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl font-medium"
                            >
                                Enviar Mensaje
                            </button>

                            {/* Mensaje de estado */}
                            {status && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-100 text-green-700 rounded-lg text-center"
                                >
                                    {status}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Información de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Conectemos
                        </h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Estoy disponible para freelance, colaboraciones o simplemente
                            para conversar sobre tecnología. No dudes en contactarme a través
                            de cualquiera de estos medios.
                        </p>

                        {/* Redes sociales */}
                        <div className="space-y-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className={`flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${social.color}`}
                                >
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                        {social.icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{social.name}</p>
                                        <p className="text-sm text-gray-600">
                                            {social.url.replace('https://', '').replace('mailto:', '')}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Disponibilidad */}
                        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-semibold text-gray-900">Disponible para trabajar</span>
                            </div>
                            <p className="text-gray-600">
                                Actualmente buscando mi primera oportunidad como Front-End Developer.
                                ¡Estoy listo para aportar valor a tu equipo!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
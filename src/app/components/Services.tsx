import { Link } from 'react-router';
import { motion } from 'motion/react';
import { servicesData } from '../data/servicesData';

export function Services() {
  const electricalServices = servicesData.filter((_, index) => index < 7);
  const lowVoltageServices = servicesData.filter((_, index) => index >= 7);

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Electrical Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Electrical Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional electrical solutions for residential and commercial properties. From new installations to repairs and remodeling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {electricalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/services/${service.slug}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-[#111111] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all border border-gray-800 h-full cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-900">
                      <motion.img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <Icon className="w-12 h-12 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                      <div className="mt-4 text-[#D4AF37] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Low Voltage Services Section */}
        <div className="border-t border-gray-800 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Low Voltage & Data Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complementing our electrical expertise with professional low voltage solutions for modern connectivity and security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lowVoltageServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/services/${service.slug}`}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#111111] rounded-lg p-6 hover:bg-[#1a1a1a] transition-colors border border-gray-800 h-full cursor-pointer group"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-[#E5C158] to-[#B8941F] text-black mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                      <div className="mt-4 text-[#D4AF37] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#111111] to-[#1a1a1a] rounded-2xl p-8 md:p-12 text-white border border-gray-800"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Need Electrical or Data Work?</h3>
            <p className="text-gray-400 mb-6 text-lg max-w-2xl mx-auto">
              From simple repairs to complete electrical remodels, we handle all your electrical and low voltage needs. Available 24 hours for emergency service.
            </p>
            <a href="#contact" className="inline-block bg-gradient-to-r from-[#E5C158] to-[#B8941F] hover:from-[#D4AF37] hover:to-[#9A7D1A] text-black px-8 py-4 rounded-md font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/30">
              Get a Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
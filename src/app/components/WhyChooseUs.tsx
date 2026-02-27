import { Award, Clock, Users, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your peace of mind and protection.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Available around the clock for urgent electrical issues and emergency repairs.',
  },
  {
    icon: Users,
    title: 'Experienced Electricians',
    description: 'Our certified technicians have years of experience in electrical and low voltage systems.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'Transparent quotes with no hidden fees. You\'ll know the cost before we start any work.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Rad Electric Co?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're committed to delivering exceptional service and quality workmanship on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#E5C158] to-[#B8941F] text-black mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-[#111111] rounded-2xl shadow-xl p-8 md:p-12 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">About Rad Electric Co</h3>
              <p className="text-gray-400 mb-4">
                At Rad Electric Co, we specialize in comprehensive electrical services for residential and commercial properties. From routine repairs to complete remodeling projects, EV charger installations, and modern low voltage solutions, we bring expert craftsmanship to every job.
              </p>
              <p className="text-gray-400 mb-6">
                Based in Menifee, CA, our team of certified electricians stays current with the latest codes and technologies to ensure your electrical systems are installed correctly, safely, and efficiently. We pride ourselves on clear communication, punctuality, and leaving every job site clean.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#D4AF37]/10 px-6 py-4 rounded-lg border-2 border-[#D4AF37]">
                  <div className="text-3xl font-bold text-[#D4AF37]">24/7</div>
                  <div className="text-gray-400">Available</div>
                </div>
                <div className="bg-[#D4AF37]/10 px-6 py-4 rounded-lg border-2 border-[#D4AF37]">
                  <div className="text-3xl font-bold text-[#D4AF37]">5.0</div>
                  <div className="text-gray-400">Rating</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#D4AF37] pl-4">
                <h4 className="font-bold text-white mb-1">Residential Services</h4>
                <p className="text-gray-400">Complete electrical solutions for homeowners including repairs, upgrades, and remodeling.</p>
              </div>
              <div className="border-l-4 border-[#D4AF37] pl-4">
                <h4 className="font-bold text-white mb-1">Commercial Services</h4>
                <p className="text-gray-400">Professional installations for offices, retail spaces, and commercial properties of all sizes.</p>
              </div>
              <div className="border-l-4 border-[#D4AF37] pl-4">
                <h4 className="font-bold text-white mb-1">Low Voltage & Data</h4>
                <p className="text-gray-400">Professional security systems, network cabling, and audio/video installations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
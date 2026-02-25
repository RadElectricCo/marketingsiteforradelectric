import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

const galleryPlaceholders = [
  {
    id: 'placeholder-1',
    image: '/src/assets/images/gallery/placeholder-01.jpg',
    title: 'Tesla EV Charger & Dedicated Circuit Installation',
    category: 'EV Charger Installation',
    description: 'Professional Tesla EV charger installation with dedicated 240V circuit and smart charging capabilities.',
  },
  {
    id: 'placeholder-2',
    image: '/src/assets/images/gallery/placeholder-02.jpg',
    title: 'Recessed Lighting & Ceiling Fan Installation',
    category: 'Residential Services',
    description: 'Energy-efficient LED recessed can lights with modern ceiling fan installation and separate wall controls.',
  },
  {
    id: 'placeholder-3',
    image: '/src/assets/images/gallery/placeholder-03.jpg',
    title: 'Decorative Chandelier Lighting Installation',
    category: 'Electrical Installation & Repair',
    description: 'High-end chandelier installation with custom junction box reinforcement and dimmer switch integration.',
  },
  {
    id: 'placeholder-4',
    image: '/src/assets/images/gallery/placeholder-04.jpg',
    title: 'New Construction Ceiling Rough Wiring',
    category: 'ADU Electrical Services',
    description: 'Complete electrical rough-in for new construction ADU with proper code-compliant installation.',
  },
  {
    id: 'placeholder-5',
    image: '/src/assets/images/gallery/placeholder-05.jpg',
    title: 'Interior Wall Electrical Rough-In',
    category: 'Remodeling & Renovations',
    description: 'Professional wall electrical rough-in for home renovation with modern circuit installations.',
  },
  {
    id: 'placeholder-6',
    image: '/src/assets/images/gallery/placeholder-06.jpg',
    title: 'Overhead Framing Electrical Installation',
    category: 'Remodeling & Renovations',
    description: 'Overhead electrical wiring through ceiling joists with proper cable management and support.',
  },
  {
    id: 'placeholder-7',
    image: '/src/assets/images/gallery/placeholder-07.jpg',
    title: 'Residential Remodel Electrical Upgrade',
    category: 'Remodeling & Renovations',
    description: 'Complete electrical upgrade for residential remodel with new circuits and modern wiring.',
  },
  {
    id: 'placeholder-8',
    image: '/src/assets/images/gallery/placeholder-08.jpg',
    title: 'Kitchen Electrical Rewiring & Preparation',
    category: 'Remodeling & Renovations',
    description: 'Kitchen electrical rewiring with dedicated appliance circuits and code-compliant installation.',
  },
  {
    id: 'placeholder-9',
    image: '/src/assets/images/gallery/placeholder-09.jpg',
    title: 'Interior Electrical Wiring & Outlet Installation',
    category: 'Electrical Installation & Repair',
    description: 'Professional interior wiring with modern outlets and switches installation throughout the home.',
  },
  {
    id: 'placeholder-10',
    image: '/src/assets/images/gallery/placeholder-10.jpg',
    title: 'Commercial Interior Linear LED Lighting Installation',
    category: 'Commercial Servicesr',
    description: 'Professional installation of suspended linear LED lighting fixtures in a commercial space, delivering modern illumination, energy efficiency, and clean architectural design.',
  },
  {
    id: 'placeholder-11',
    image: '/src/assets/images/gallery/placeholder-11.jpg',
    title: 'Modern Wall Sconce Lighting Installation',
    category: 'Residential Services',
    description: 'Premium wall sconce lighting fixtures with dimmer controls and custom wiring for elegant ambiance.',
  },
  {
    id: 'placeholder-12',
    image: '/src/assets/images/gallery/placeholder-12.jpg',
    title: 'Modern Bedroom Recessed Lighting & Fixture Installation',
    category: 'Electrical Installation & Repair',
    description: 'Professional recessed LED lighting installation in a finished residential bedroom, providing clean, even illumination and energy-efficient performance. Includes precise ceiling cut-ins, secure wiring, and code-compliant installation for a polished final look.',
  },
  {
    id: 'placeholder-13',
    image: '/src/assets/images/gallery/placeholder-13.jpg',
    title: 'Main Electrical Panel & Breaker Installation',
    category: 'Electrical Installation & Repair',
    description: '200-amp main service panel upgrade with modern circuit breakers and proper grounding.',
  },
];

export function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : galleryPlaceholders.length - 1;
        setSelectedImageIndex(newIndex);
      } else if (e.key === 'ArrowRight') {
        const newIndex = selectedImageIndex < galleryPlaceholders.length - 1 ? selectedImageIndex + 1 : 0;
        setSelectedImageIndex(newIndex);
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : galleryPlaceholders.length - 1;
    setSelectedImageIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    const newIndex = selectedImageIndex < galleryPlaceholders.length - 1 ? selectedImageIndex + 1 : 0;
    setSelectedImageIndex(newIndex);
  };

  const selectedImage = selectedImageIndex !== null ? galleryPlaceholders[selectedImageIndex] : null;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-[#111111] text-white py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 opacity-90">
          <img 
            src="/src/assets/images/heroes/gallery-hero.jpg"
            alt="Electrical work showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#E5C158] transition-colors mb-6 drop-shadow-lg touch-manipulation py-2">
              <ChevronLeft className="w-5 h-5" />
              <span className="font-semibold text-sm sm:text-base">Back to Home</span>
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Browse through our portfolio of completed electrical and low voltage projects. From residential installations to commercial build-outs, see the quality craftsmanship that defines Rad Electric Co.
          </motion.p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Projects Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base"
          >
            Showing <span className="font-bold text-[#D4AF37]">{galleryPlaceholders.length}</span> projects
          </motion.p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {galleryPlaceholders.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all cursor-pointer border border-gray-800 touch-manipulation"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] mb-2">{item.category}</p>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-3 text-sm sm:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#D4AF37] transition-colors z-10 bg-black/50 rounded-full p-2 sm:p-3 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#D4AF37] transition-colors z-10 bg-black/50 rounded-full p-2 sm:p-3 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain mx-auto rounded-lg shadow-2xl"
              />
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 mt-4 text-white">
                <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] mb-2">{selectedImage.category}</p>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-3">{selectedImage.title}</h3>
                <p className="text-gray-200 text-sm sm:text-base mb-3">{selectedImage.description}</p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Image {selectedImageIndex! + 1} of {galleryPlaceholders.length} • Use arrow keys or click arrows to navigate
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
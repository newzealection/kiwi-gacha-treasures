import { motion } from 'framer-motion';
import { CollectibleCard } from './CollectibleCard';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-50/90" />
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="New Zealand Landscape"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-nzgreen-500 bg-white/90 rounded-full">
            Discover New Zealand
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Collect the Beauty of Aotearoa
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Experience New Zealand's breathtaking landscapes through our unique collectible cards.
            Each card is a gateway to adventure.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-nzgreen-500 text-white rounded-lg font-medium shadow-lg"
          >
            Start Your Collection
          </motion.button>
        </motion.div>

        <div className="flex gap-6 justify-center mt-12 overflow-x-auto pb-8">
          <CollectibleCard
            imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            title="Milford Sound"
            location="Fiordland"
          />
          <CollectibleCard
            imageUrl="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
            title="Cathedral Cove"
            location="Coromandel"
          />
          <CollectibleCard
            imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b"
            title="Mount Cook"
            location="Southern Alps"
          />
        </div>
      </div>
    </section>
  );
};
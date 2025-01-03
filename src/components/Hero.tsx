import { motion } from 'framer-motion';
import { CollectibleCard } from './CollectibleCard';
import { Link } from 'react-router-dom';

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
          <Link to="/cards">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-nzgreen-500 text-white rounded-lg font-medium shadow-lg"
            >
              Start Your Collection
            </motion.button>
          </Link>
        </motion.div>

        <div className="flex gap-6 justify-center mt-12 overflow-x-auto pb-8">
          <CollectibleCard
            imageUrl="https://images.unsplash.com/photo-1553462167-103041ad6e71"
            title="Mount Cook"
            location="Southern Alps"
            rarity="legendary"
            isPreview={true}
          />
          <CollectibleCard
            imageUrl="https://images.unsplash.com/photo-1495072667656-424d680e6299?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Milford Sound"
            location="Fiordland"
            rarity="epic"
            isPreview={true}
          />
          <CollectibleCard
            imageUrl="https://images.unsplash.com/photo-1542243337-8a2c60753f6e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Cathedral Cove"
            location="Coromandel"
            rarity="rare"
            isPreview={true}
          />
        </div>
      </div>
    </section>
  );
};

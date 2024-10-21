import React from 'react';
import { motion } from 'framer-motion';
import { X, Gem, DollarSign, Globe, Shield } from 'lucide-react';

interface LearnDialogProps {
  onClose: () => void;
}

const LearnDialog: React.FC<LearnDialogProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="bg-blue-900/70 backdrop-blur-md rounded-lg p-6 w-full max-w-3xl shadow-2xl border border-blue-500/50 overflow-y-auto max-h-[90vh]"
        style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-cyan-300 flex items-center">
            Learn About MercaJade NFT Marketplace
            <span className="ml-2">
              <Gem className="text-cyan-400" size={24} />
            </span>
          </h2>
          <button
            onClick={onClose}
            className="text-blue-300 hover:text-cyan-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6 text-blue-200">
          <section>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Real World Assets (RWA) from Minerals</h3>
            <p>
              MercaJade is pioneering the fusion of physical minerals and digital assets through NFTs. 
              Each NFT represents a unique, real-world mineral specimen, bridging the gap between 
              tangible gemstones and the digital realm.
            </p>
          </section>

          <section className="flex items-start space-x-4">
            <DollarSign size={24} className="text-green-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-300">Tokenization of Mineral Assets</h4>
              <p>
                By tokenizing mineral assets, we're creating a new class of digital collectibles 
                backed by real-world value. This allows for fractional ownership, increased liquidity, 
                and a global marketplace for rare and beautiful minerals.
              </p>
            </div>
          </section>

          <section className="flex items-start space-x-4">
            <Globe size={24} className="text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-300">Global Accessibility</h4>
              <p>
                Our platform democratizes access to the mineral and gemstone market. Collectors and 
                investors from around the world can now own a piece of these natural treasures without 
                the complexities of physical storage and transportation.
              </p>
            </div>
          </section>

          <section className="flex items-start space-x-4">
            <Shield size={24} className="text-yellow-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-300">Authenticity and Provenance</h4>
              <p>
                Each NFT comes with a digital certificate of authenticity, leveraging blockchain 
                technology to ensure the provenance and uniqueness of each mineral specimen. This 
                creates a transparent and trustworthy marketplace for collectors and enthusiasts.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">How It Works</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Expert gemologists carefully select and grade each mineral specimen.</li>
              <li>High-quality digital representations are created for each physical item.</li>
              <li>NFTs are minted on the Base blockchain, linking to the digital and physical assets.</li>
              <li>Collectors can buy, sell, and trade these NFTs on our marketplace.</li>
              <li>Physical minerals are securely stored, with options for redemption or continued storage.</li>
            </ol>
          </section>

          <p className="italic">
            Join us in this exciting venture where the beauty of nature meets the innovation of blockchain technology. 
            Explore our collection and own a piece of the earth's treasures in digital form!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LearnDialog;
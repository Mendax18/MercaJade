import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Gem, BookOpen } from 'lucide-react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import NFTCard from './components/NFTCard';
import NFTDialog from './components/NFTDialog';
import { WalletConnectButton } from './components/WalletConnectButton';
import LearnDialog from './components/LearnDialog';
import PoweredByBase from './components/PoweredByBase';
import { NFT, nftData } from './data/nftData';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLearnDialogOpen, setIsLearnDialogOpen] = useState(false);

  const filteredNFTs = nftData.filter(
    (nft) =>
      nft.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeCategory === 'all' || nft.category.toLowerCase() === activeCategory.toLowerCase())
  );

  return (
    <WagmiConfig config={config}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-blue-100"
      >
        <header className="p-6 border-b border-blue-500 flex justify-between items-center">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text"
            style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}
          >
            MercaJade.base.eth 
          </motion.h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLearnDialogOpen(true)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
            >
              <BookOpen size={18} />
              <span>Learn</span>
            </button>
            <WalletConnectButton />
          </div>
        </header>

        <main className="container mx-auto p-6">
          <PoweredByBase />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 mt-8"
          >
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search gems..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-blue-900/50 border border-blue-500/50 text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={18} />
            </div>
            <div className="flex space-x-2 flex-wrap justify-center">
              {['all', 'jade', 'obsidian', 'amethyst', 'quartz'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors mb-2 ${
                    activeCategory === category
                      ? 'bg-cyan-500 text-blue-900'
                      : 'bg-blue-900/50 text-cyan-300 hover:bg-blue-800/50'
                  }`}
                  style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)' }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredNFTs.map((nft) => (
              <NFTCard key={nft.id} nft={nft} onClick={() => setSelectedNFT(nft)} />
            ))}
          </motion.div>
        </main>

        <footer className="mt-12 p-6 border-t border-blue-500/50 text-center text-blue-300">
          <p>&copy; 2023 Gem Nexus. Unveiling the beauty of digital gemstones on Base Layer 2.</p>
        </footer>

        <AnimatePresence>
          {selectedNFT && (
            <NFTDialog nft={selectedNFT} onClose={() => setSelectedNFT(null)} />
          )}
        </AnimatePresence>

        {isLearnDialogOpen && (
          <LearnDialog onClose={() => setIsLearnDialogOpen(false)} />
        )}
      </motion.div>
    </WagmiConfig>
  );
};

export default App;
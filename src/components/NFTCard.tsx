import React from 'react';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';
import { NFT } from '../data/nftData';

interface NFTCardProps {
  nft: NFT;
  onClick: () => void;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, onClick }) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'jade':
        return 'text-emerald-400';
      case 'obsidian':
        return 'text-gray-300';
      case 'amethyst':
        return 'text-purple-400';
      case 'quartz':
        return 'text-blue-300';
      default:
        return 'text-cyan-400';
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="bg-blue-900/30 backdrop-blur-md border border-blue-500/50 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
           style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)' }}>
        <div className="relative">
          <motion.img
            src={nft.image}
            alt={nft.name}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-2 right-2 bg-blue-900/70 p-1 rounded-full">
            <Gem className={getCategoryColor(nft.category)} size={20} />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-cyan-300">{nft.name}</h3>
          <p className={`text-sm ${getCategoryColor(nft.category)}`}>{nft.category}</p>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-sm text-blue-300">By {nft.creator}</p>
            <p className="font-medium text-cyan-400">{nft.price} ETH</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NFTCard;
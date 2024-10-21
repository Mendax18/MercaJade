import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gem, Flame } from 'lucide-react';
import { NFT } from '../data/nftData';

interface NFTDialogProps {
  nft: NFT;
  onClose: () => void;
}

const NFTDialog: React.FC<NFTDialogProps> = ({ nft, onClose }) => {
  const [showRedeemInfo, setShowRedeemInfo] = useState(false);

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
        className="bg-blue-900/70 backdrop-blur-md rounded-lg p-6 w-full max-w-2xl shadow-2xl border border-blue-500/50"
        style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-cyan-300 flex items-center">
            {nft.name}
            <span className="ml-2">
              <Gem className={getCategoryColor(nft.category)} size={24} />
            </span>
          </h2>
          <button
            onClick={onClose}
            className="text-blue-300 hover:text-cyan-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <motion.img
          src={nft.image}
          alt={nft.name}
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <p className="text-blue-200 mb-4">{nft.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-blue-300">Creator</p>
            <p className="font-medium text-cyan-300">{nft.creator}</p>
          </div>
          <div>
            <p className="text-sm text-blue-300">Category</p>
            <p className={`font-medium ${getCategoryColor(nft.category)}`}>{nft.category}</p>
          </div>
          <div>
            <p className="text-sm text-blue-300">Blockchain</p>
            <p className="font-medium text-cyan-300">{nft.blockchain}</p>
          </div>
          <div>
            <p className="text-sm text-blue-300">Token Standard</p>
            <p className="font-medium text-cyan-300">{nft.tokenStandard}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-2xl font-bold text-cyan-400">{nft.price} ETH</p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-blue-900 font-medium py-2 px-4 rounded-full transition-colors">
            Buy Now on Base
          </button>
        </div>
        <button
          onClick={() => setShowRedeemInfo(true)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full transition-colors flex items-center justify-center"
        >
          <Flame size={18} className="mr-2" />
          Redeem RWA
        </button>
        <AnimatePresence>
          {showRedeemInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 p-4 bg-blue-800/50 rounded-lg border border-orange-500/50"
            >
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Redeem Your Real World Asset</h3>
              <p className="text-blue-200 mb-2">
                You can redeem this NFT for the actual physical {nft.category} mineral it represents. 
                To do so, you'll need to burn this NFT, which will initiate the redemption process.
              </p>
              <p className="text-blue-200 mb-2">
                Once burned, our team will contact you to arrange the secure delivery of your physical mineral.
                Please note that burning the NFT is irreversible and will remove it from your digital collection.
              </p>
              <button
                onClick={() => alert("Redemption process initiated. This is a demo, no actual NFT has been burned.")}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition-colors mt-2"
              >
                Burn NFT and Redeem
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default NFTDialog;
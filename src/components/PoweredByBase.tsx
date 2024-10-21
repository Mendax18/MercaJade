import React from 'react';
import { motion } from 'framer-motion';

const PoweredByBase: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden py-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" fill="black"/>
              <rect x="11" y="7" width="2" height="10" fill="white"/>
            </svg>
            <span className="text-white font-bold text-lg">BASE</span>
          </div>
          <span className="mx-4 text-blue-300">|</span>
          <span className="text-blue-200 text-sm">Powered by Base, an Ethereum L2 solution</span>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-500 opacity-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 20 + 5 + 'px',
                height: Math.random() * 20 + 5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PoweredByBase;
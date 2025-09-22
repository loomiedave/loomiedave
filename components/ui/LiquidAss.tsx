import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LiquidAss = ({
  children = 'Button',
  onClick = () => {},
  size = 'default' as 'small' | 'default' | 'large',
  className = '',
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'default' | 'large';
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const sizes = {
    small: 'px-6 py-2 text-sm',
    default: 'px-8 py-3 text-base',
    large: 'px-10 py-4 text-lg',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.8 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
            mass: 0.8,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className={`
            fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]
            overflow-hidden rounded-full font-medium
            backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg
            bg-gradient-to-b from-white/10 to-white/5 text-white
            hover:from-white/20 hover:to-white/10
            dark:from-white/5 dark:to-white/2 dark:hover:from-white/10 dark:hover:to-white/5
            shadow-black/10 hover:shadow-black/20 dark:shadow-white/5 dark:hover:shadow-white/10
            before:absolute before:inset-0 before:rounded-full before:p-[1px]
            before:bg-gradient-to-r before:from-white/10 before:to-white/5
            dark:before:from-white/5 dark:before:to-white/2
            before:content-[''] before:-z-10
            after:absolute after:inset-[1px] after:rounded-full after:content-['']
            after:bg-gradient-to-b after:from-white/[0.08] after:to-transparent 
            dark:after:from-white/[0.04] after:-z-10
            ${sizes[size]}
            ${className}
          `}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <span className="relative z-10 flex items-center justify-center gap-2">
            {children}
          </span>

          <motion.div
            className="absolute inset-0 rounded-full bg-white/20 opacity-0 scale-0"
            whileTap={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default LiquidAss;

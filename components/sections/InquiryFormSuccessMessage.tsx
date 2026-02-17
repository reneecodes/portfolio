import React from 'react';
import { motion } from 'framer-motion';

interface InquirySuccessMessageProps {
  onReset: () => void;
}

const InquirySuccessMessage: React.FC<InquirySuccessMessageProps> = ({ onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-lavender-100 to-coral-50 rounded-3xl shadow-xl max-w-md mx-auto"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-24 h-24 text-coral-500 mb-6"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.697 2.813c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007Z"
          clipRule="evenodd"
        />
      </motion.svg>

      <h2 className="text-3xl font-bold text-lavender-800 mb-4">Yay! Project Sent!</h2>
      <p className="text-lg text-gray-700 mb-8">
        Your dream project inquiry has landed safely in my inbox. ✨ I'm so excited to review it and will be in touch very soon!
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="px-8 py-3 bg-lavender-600 text-white rounded-full font-semibold text-lg shadow-lg
                   hover:bg-lavender-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-lavender-300"
      >
        Send Another Dream
      </motion.button>
    </motion.div>
  );
};

export default InquirySuccessMessage;

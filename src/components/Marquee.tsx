import { motion } from 'framer-motion';

const AWARENESS_QUOTES = [
  "Sickle Cell is a battle, but Caryer is a warrior.",
  "Every contribution brings us closer to a cure.",
  "Hope is stronger than pain. #SaveALife",
  "A Bone Marrow Transplant is a second chance at life.",
  "Knowledge is power. Understanding Sickle Cell saves lives.",
  "Raising awareness is the first step to finding a cure."
];

export const Marquee = () => {
  return (
    <footer className="fixed bottom-0 w-full z-50 bg-white border-t-4 border-coco-melon py-3 overflow-hidden shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
          className="flex whitespace-nowrap gap-16 items-center"
        >
          {[...AWARENESS_QUOTES, ...AWARENESS_QUOTES].map((quote, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-coco-melon font-black text-lg">✦</span>
              <p className="text-gray-800 font-bold text-sm md:text-base uppercase tracking-wide">
                {quote}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};
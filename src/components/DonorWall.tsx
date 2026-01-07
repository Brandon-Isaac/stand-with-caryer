import { motion } from 'framer-motion';

interface Donor {
  id: string;
  name: string;
}

interface DonorWallProps {
  donors: Donor[];
}

export const DonorWall = ({ donors }: DonorWallProps) => {
  const displayDonors = donors;

  return (
    <div className="bg-medical-purple py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <h3 className="text-white font-black text-xl flex items-center gap-2 italic uppercase">
          Wall of Hope:
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, 
            repeat: Infinity 
          }}
          className="flex whitespace-nowrap gap-8 items-center"
        >
          {displayDonors.map((donor, idx) => (
            <div 
              key={`${donor.id}-${idx}`}
              className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 shadow-lg"
            >
              <div className="w-2 h-2 bg-coco-green rounded-full animate-pulse" />
              <span className="text-white font-black tracking-tighter text-xl uppercase italic">
                {donor.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
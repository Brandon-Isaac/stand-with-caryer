import { Heart } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-white pt-16 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Story & Urgency */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-purple/10 text-medical-purple font-bold text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-purple"></span>
            </span>
            URGENT MEDICAL APPEAL
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Stand with <span className="text-medical-purple">Caryer</span> in his fight.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our brave little hero, <strong>Caryer Kendric Geno Okwanyo</strong>, has been 
            courageously battling sickle cell disease for 5 years. A fan of football 
            and Cocomelon, he’s ready for his biggest match yet: a life-saving Bone 
            Marrow Transplant (BMT) in India, scheduled for March 2026.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-medical-purple text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              Donate Now <Heart fill="white" size={20} />
            </button>
            <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors">
              Read Story
            </button>
          </div>
        </div>

        {/* Right Side: Football Photos Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="/football-1.jpg" 
                alt="Caryer playing football" 
                className="rounded-3xl shadow-xl w-full h-64 object-cover border-4 border-coco-green"
              />
              <img 
                src="/cocomelon-art.jpg" 
                alt="Cocomelon theme" 
                className="rounded-3xl shadow-xl w-full h-40 object-cover"
              />
            </div>
            <div className="pt-8">
              <img 
                src="/football-2.jpg" 
                alt="Caryer posing with ball" 
                className="rounded-3xl shadow-xl w-full h-80 object-cover border-4 border-coco-blue"
              />
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-coco-melon/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};
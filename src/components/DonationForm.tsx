import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle2, Send } from 'lucide-react';

export const DonationForm = () => {
  const [form, setForm] = useState({ name: '', amount: '', code: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Insert as unverified so the Dad can check it against his M-Pesa SMS
    const { error } = await supabase
      .from('donors')
      .insert([{ 
        name: form.name.toUpperCase(), 
        amount: parseFloat(form.amount), 
        mpesa_code: form.code.toUpperCase(),
        is_verified: false 
      }]);

    if (!error) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-coco-green/20 p-8 rounded-3xl text-center border-2 border-coco-green animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="mx-auto text-coco-green mb-4" size={48} />
        <h3 className="text-2xl font-black text-gray-900">ASANTE!</h3>
        <p className="text-gray-600 font-medium">We've received your details. Once verified, your name will appear on the Wall of Hope.</p>
      </div>
    );
  }

  return (
    <section className="max-w-xl mx-auto py-12 px-6">
      <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-t-8 border-medical-purple">
        <h2 className="text-2xl font-black text-center mb-2 uppercase italic text-gray-800">I Have Contributed</h2>
        <p className="text-center text-gray-500 text-sm mb-8 font-bold">Please log your M-Pesa details below</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="YOUR FULL NAME"
            required
            className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-medical-purple focus:bg-white outline-none transition uppercase font-bold"
            onChange={(e) => setForm({...form, name: e.target.value})}
          />
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="number" 
              placeholder="AMOUNT (KES)"
              required
              className="p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-medical-purple focus:bg-white outline-none transition font-bold"
              onChange={(e) => setForm({...form, amount: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="M-PESA CODE"
              required
              maxLength={10}
              className="p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-medical-purple focus:bg-white outline-none transition uppercase font-bold"
              onChange={(e) => setForm({...form, code: e.target.value})}
            />
          </div>
          <button className="w-full bg-medical-purple text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:shadow-lg active:scale-95 transition">
            SUBMIT FOR VERIFICATION <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};
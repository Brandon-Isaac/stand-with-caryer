import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { DonorWall } from './components/DonorWall';
import { Marquee } from './components/Marquee';

function App() {
  // Mock data for now - replace with Supabase fetch tomorrow
  const mockDonors = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Mary Wambui' },
    { id: '3', name: 'Kevins Omondi' }
  ];
//   const fetchTotalRaised = async () => {
//   const { data, error } = await supabase
//     .from('donors')
//     .select('amount')
//     .eq('is_verified', true);

//   if (error) return 0;
//   return data.reduce((sum, donor) => sum + Number(donor.amount), 0);
// };

  return (
    <div className="min-h-screen bg-white pb-20"> {/* pb-20 prevents marquee overlap */}
      <Hero />
      <Stats currentAmount={1250000} />
      <DonorWall donors={mockDonors} />
      
      {/* Rest of your sections (Blog, Transparency Docs) */}
      
      <Marquee />
    </div>
  );
}

export default App;
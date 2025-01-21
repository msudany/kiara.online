import React, { useEffect, useState } from 'react';
import { Timer, Star } from 'lucide-react';

function App() {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const launchDate = new Date('2024-05-01').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      setDays(String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'));
      setHours(String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'));
      setMinutes(String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'));
      setSeconds(String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1536566482680-fca31930a0bd?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <Star className="w-12 h-12 text-gold-400 mx-auto mb-8" />
        
        <h1 className="text-4xl sm:text-6xl font-thin text-white mb-4 tracking-[0.2em] uppercase">
          Kiara
        </h1>
        
        <p className="text-xl sm:text-2xl text-gold-200 font-light italic mb-12 tracking-wider">
          From Luxury to Legacy
        </p>

        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl sm:text-4xl font-light text-white mb-2">{days}</div>
            <div className="text-sm text-gold-200 uppercase tracking-wider">Days</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl sm:text-4xl font-light text-white mb-2">{hours}</div>
            <div className="text-sm text-gold-200 uppercase tracking-wider">Hours</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl sm:text-4xl font-light text-white mb-2">{minutes}</div>
            <div className="text-sm text-gold-200 uppercase tracking-wider">Minutes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl sm:text-4xl font-light text-white mb-2">{seconds}</div>
            <div className="text-sm text-gold-200 uppercase tracking-wider">Seconds</div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-black rounded-full hover:from-gold-500 hover:to-gold-700 transition-all">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Future logic can go here
  }, []);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/coming_soon.jpg")',
      }}
    >
    </div>
  );
}

export default App;

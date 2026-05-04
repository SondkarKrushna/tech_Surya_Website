import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPage from './public/components/HeroPage';
// Lazy load components
const Publiclayout = React.lazy(() => import('./public/PublicLayout'));


function App() {
  return (
    <BrowserRouter>
      {/* Wrap routes in Suspense to handle lazy loading */}
      <Suspense fallback={<div className="flex justify-center items-center h-screen">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-black animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>}>
        <Routes>
          {/* Publiclayout is also lazily loaded */}
          <Route path='/' element={<Publiclayout />}>
            <Route index element={<HeroPage />} />

          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

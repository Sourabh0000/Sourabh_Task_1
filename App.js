import React from 'react';
import Home from './components/Home';
import Courses from './components/Courses';
import Contact from './components/Contact';

export default function App(){
  const [page, setPage] = React.useState('home');
  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">EDU-STARTUP</div>
        <div className="links">
          <button onClick={()=>setPage('home')}>Home</button>
          <button onClick={()=>setPage('courses')}>Courses</button>
          <button onClick={()=>setPage('contact')}>Contact</button>
        </div>
      </nav>

      <main>
        {page==='home' && <Home />}
        {page==='courses' && <Courses />}
        {page==='contact' && <Contact />}
      </main>

      <footer className="footer">© {new Date().getFullYear()} EDU-STARTUP</footer>
    </div>
  );
}
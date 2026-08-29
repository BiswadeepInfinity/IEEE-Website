import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, Maximize, Minimize, 
  HelpCircle, Grid, Play, Pause, Sparkles, BookOpen, Volume2, VolumeX, List, HelpCircle as QuestionIcon
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DoodlerToolbar } from './components/DoodlerToolbar';
import { TutorialModal } from './components/TutorialModal';
import { MobileNativeFeedView } from './components/MobileNativeFeedView';
import { 
  Slide1, Slide2, Slide3, Slide4, Slide5, 
  Slide6, Slide7, Slide8, Slide9, Slide10, 
  Slide11, Slide12, Slide13, Slide14, Slide15 
} from './components/Slides';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [activeColor, setActiveColor] = useState('#1e1b18');
  const [showOverview, setShowOverview] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [showPresenterNotes, setShowPresenterNotes] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Eraser Transition State
  const [isErasing, setIsErasing] = useState(false);
  const [eraseDirection, setEraseDirection] = useState('forward');
  const [dustParticles, setDustParticles] = useState([]);

  const canvasRef = useRef(null);
  const isPaintingRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slidesData = [
    { title: "Slide 1: IEEE: Engineer Your Future", component: <Slide1 /> },
    { title: "Slide 2: Why Engineering? Why Not Entrepreneurship?", component: <Slide2 /> },
    { title: "Slide 3: What Exactly is IEEE?", component: <Slide3 /> },
    { title: "Slide 4: From 1884 to the Future", component: <Slide4 /> },
    { title: "Slide 5: IEEE is an Ecosystem, Not Just an Org", component: <Slide5 /> },
    { title: "Slide 6: Learn Beyond the Classroom", component: <Slide6 /> },
    { title: "Slide 7: Turn Knowledge Into Projects", component: <Slide7 /> },
    { title: "Slide 8: Research: From Question to Discovery", component: <Slide8 /> },
    { title: "Slide 9: Research Paper to Real-World Solution", component: <Slide9 /> },
    { title: "Slide 10: Compete. Collaborate. Conquer.", component: <Slide10 /> },
    { title: "Slide 11: Build Your Network Before You Need It", component: <Slide11 /> },
    { title: "Slide 12: Leadership: Don't Just Participate. Lead.", component: <Slide12 /> },
    { title: "Slide 13: Success Stories: Real Impact", component: <Slide13 /> },
    { title: "Slide 14: Your 4-Year Entrepreneurial Journey", component: <Slide14 /> },
    { title: "Slide 15: Your Story Hasn't Been Written Yet", component: <Slide15 /> },
  ];

  const presenterNotes = [
    "Slide 1: Welcome freshers warmly to Uttaranchal University IEEE Student Branch! Emphasize that IEEE is an ecosystem, not just another theoretical academic club.",
    "Slide 2: Ask them the killer question: 'Which company will hire me?' vs 'Which problem can I solve?'. Flip the card!",
    "Slide 3: Break the misconception that IEEE is only for toppers or researchers. It is for builders & entrepreneurs.",
    "Slide 4: Walk through the history. Click on Tesla, Edison & Bell to show their founding IEEE roles!",
    "Slide 5: Hero slide! Click each orbital pillar to show that IEEE covers all 9 facets of the engineering journey.",
    "Slide 6: Discuss that the college syllabus only provides baseline theory. IEEE gives them industry-grade skills.",
    "Slide 7: Highlight the project loop: Learn -> Experiment -> Build -> Fail -> Improve -> Create!",
    "Slide 8: Explain that research is not boring paperwork; it's discovering what was previously thought impossible.",
    "Slide 9: Transition from lab research to startups. Walk through the 7-step pipeline from Problem to Global Impact.",
    "Slide 10: Pitch IEEEXtreme (24h global hackathon) and robotics battles. Show how competitions forge resilience.",
    "Slide 11: Explain that your future co-founder could be in another university or country, reachable via IEEE network.",
    "Slide 12: Share how organizing events as an executive leader builds real CEO/executive-level skills.",
    "Slide 13: Spotlight Arjun Pillai and Jensen Huang (NVIDIA, 2026 Medal of Honor) as proof of the engineering mindset.",
    "Slide 14: Give them a clear year-by-year roadmap at Uttaranchal University (Explore -> Build -> Research -> Lead & Launch).",
    "Slide 15: Grand finale! Hit the big launch button, celebrate with confetti, and invite them to join the branch!"
  ];

  const triggerEraserWipe = (nextIdx, direction = 'forward') => {
    if (isErasing) return;
    setIsErasing(true);
    setEraseDirection(direction);

    const newDust = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 60}%`,
      size: `${6 + Math.random() * 6}px`,
      dx: `${(Math.random() - 0.5) * 60}px`,
      dy: `${-15 - Math.random() * 40}px`
    }));
    setDustParticles(newDust);

    setTimeout(() => {
      setCurrentSlide(nextIdx);
      clearCanvas();
    }, 280);

    setTimeout(() => {
      setIsErasing(false);
      setDustParticles([]);
    }, 550);
  };

  const nextSlide = () => {
    if (currentSlide < slidesData.length - 1) {
      triggerEraserWipe(currentSlide + 1, 'forward');
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      triggerEraserWipe(currentSlide - 1, 'backward');
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showTutorial) {
        if (e.key === 'Escape') setShowTutorial(false);
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        setShowOverview(false);
      } else if (e.key === 'n' || e.key === 'N') {
        setShowPresenterNotes(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isErasing, showTutorial]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Drawing helpers
  const startDrawing = (e) => {
    if (!isDrawing) return;
    isPaintingRef.current = true;
    draw(e);
  };

  const stopDrawing = () => {
    isPaintingRef.current = false;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
    }
  };

  const draw = (e) => {
    if (!isPaintingRef.current || !isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = activeColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvas.parentElement) {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
  }, [currentSlide, isFullscreen]);

  // Clean Mobile View Branch
  if (isMobile) {
    return (
      <MobileNativeFeedView
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        totalSlides={slidesData.length}
        triggerWipe={triggerEraserWipe}
      />
    );
  }

  // Full Desktop Presentation Stage
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      background: '#f8f4e9',
      overflow: 'hidden'
    }}>
      {/* Desktop Top Header */}
      <header style={{
        height: '66px',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '3.5px solid #1e1b18',
        background: '#fffdf7',
        zIndex: 50,
        boxShadow: '0 4px 0px rgba(30, 27, 24, 0.1)',
        flexShrink: 0
      }}>
        {/* Logo & University Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            background: '#fff',
            padding: '4px 10px',
            borderRadius: '10px',
            border: '2px solid #1e1b18',
            boxShadow: '2px 2px 0px #1e1b18',
            display: 'flex',
            alignItems: 'center',
            height: '46px'
          }}>
            <img 
              src="/uttaranchal-logo.svg" 
              alt="Uttaranchal University" 
              style={{ height: '36px', width: 'auto', display: 'block' }} 
            />
          </div>

          <div className="sketch-badge" style={{ background: '#3ba4ff', color: '#fff', fontSize: '0.95rem', padding: '4px 10px' }}>
            ✏️ IEEE STUDENT BRANCH
          </div>

          <span style={{ fontFamily: 'var(--font-cray)', fontSize: '1.15rem', color: '#1e1b18', marginLeft: '6px' }}>
            {slidesData[currentSlide].title}
          </span>
        </div>

        {/* Desktop Toolbar Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <DoodlerToolbar
            isDrawing={isDrawing}
            setIsDrawing={setIsDrawing}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
            clearCanvas={clearCanvas}
          />

          <button
            onClick={() => setShowTutorial(true)}
            className="sketch-btn"
            style={{ padding: '6px 12px', fontSize: '0.85rem', background: '#ffe8f2', color: '#ff334b' }}
            title="Guide"
          >
            <QuestionIcon size={15} /> Guide
          </button>

          <button
            onClick={() => setShowOverview(true)}
            className="sketch-btn"
            style={{ padding: '6px 12px', fontSize: '0.85rem', background: '#e8f5ff' }}
            title="Overview"
          >
            <Grid size={15} /> Slides ({currentSlide + 1}/15)
          </button>

          <button
            onClick={() => setShowPresenterNotes(!showPresenterNotes)}
            className="sketch-btn"
            style={{ padding: '6px 12px', fontSize: '0.85rem', background: showPresenterNotes ? '#ff5e97' : '#fff', color: showPresenterNotes ? '#fff' : '#1e1b18' }}
          >
            <BookOpen size={15} /> {showPresenterNotes ? 'Notes ON' : 'Notes'}
          </button>

          <button
            onClick={toggleFullscreen}
            className="sketch-btn"
            style={{ padding: '6px 10px', fontSize: '0.85rem', background: '#fff' }}
          >
            {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
          </button>
        </div>
      </header>

      {/* Main Slide Presentation Stage (Original Pristine 1240px Notebook Card) */}
      <main style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 20px',
        position: 'relative'
      }}>
        <div 
          className="slide-container-card"
          style={{
            width: '100%',
            maxWidth: '1240px',
            height: '100%',
            maxHeight: '760px',
            background: '#fffdf7',
            border: '4px solid #1e1b18',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            boxShadow: '10px 10px 0px #1e1b18',
            position: 'relative',
            padding: '22px 24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div className="tape-top"></div>
          <div className="paperclip"></div>

          {/* Active Slide Content */}
          <div style={{ flex: 1, position: 'relative', zIndex: 10, height: '100%' }}>
            {slidesData[currentSlide].component}
          </div>

          {/* Eraser Wipe Transition Overlay Layer */}
          {isErasing && (
            <>
              <div className={`eraser-overlay ${eraseDirection}`} />
              <div className={`eraser-tool ${eraseDirection}`}>
                <span style={{ position: 'relative', zIndex: 2, marginLeft: '22px' }}>ERASING...</span>
              </div>
              {dustParticles.map(p => (
                <div
                  key={p.id}
                  className="dust-particle"
                  style={{
                    left: p.left,
                    top: p.top,
                    width: p.size,
                    height: p.size,
                    '--dx': p.dx,
                    '--dy': p.dy
                  }}
                />
              ))}
            </>
          )}

          {/* Interactive Drawing Canvas Layer */}
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onMouseMove={draw}
            className={`slide-canvas ${isDrawing ? 'drawing-active' : ''}`}
          />
        </div>
      </main>

      {/* Desktop Bottom Floating Navigation Bar */}
      <footer style={{
        height: '66px',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fffdf7',
        borderTop: '3.5px solid #1e1b18',
        zIndex: 50,
        flexShrink: 0
      }}>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0 || isErasing}
          className="sketch-btn"
          style={{
            opacity: currentSlide === 0 ? 0.4 : 1,
            cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
            background: '#ffdf40'
          }}
        >
          <ChevronLeft size={20} /> Previous
        </button>

        {/* Slide Progress Dots & University Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {slidesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (idx !== currentSlide && !isErasing) {
                    triggerEraserWipe(idx, idx > currentSlide ? 'forward' : 'backward');
                  }
                }}
                style={{
                  width: currentSlide === idx ? '32px' : '14px',
                  height: '14px',
                  borderRadius: '8px',
                  backgroundColor: currentSlide === idx ? '#ff334b' : '#d2c9b8',
                  border: '2px solid #1e1b18',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                title={`Jump to Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div style={{
            background: '#fff',
            border: '2px solid #1e1b18',
            borderRadius: '8px',
            padding: '2px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '2px 2px 0px #1e1b18'
          }}>
            <img 
              src="/uttaranchal-logo.svg" 
              alt="Uttaranchal University" 
              style={{ height: '20px', width: 'auto' }} 
            />
            <span style={{ fontFamily: 'var(--font-sketch)', fontSize: '0.75rem', fontWeight: 800, color: '#005a9c' }}>
              UU-SB
            </span>
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slidesData.length - 1 || isErasing}
          className="sketch-btn"
          style={{
            opacity: currentSlide === slidesData.length - 1 ? 0.4 : 1,
            cursor: currentSlide === slidesData.length - 1 ? 'not-allowed' : 'pointer',
            background: '#2ecc71',
            color: '#fff'
          }}
        >
          Next <ChevronRight size={20} />
        </button>
      </footer>

      {/* Tutorial Modal */}
      <TutorialModal
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
      />

      {/* Presenter Notes Overlay Drawer */}
      {showPresenterNotes && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '900px',
          background: '#fff8d6',
          border: '3.5px solid #1e1b18',
          borderRadius: '16px',
          padding: '16px 24px',
          boxShadow: '8px 8px 0px #1e1b18',
          zIndex: 800
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'var(--font-cray)', fontSize: '1.2rem', color: '#ff334b' }}>
              🎙️ Speaker / Presenter Script Note for Slide {currentSlide + 1}:
            </span>
            <button onClick={() => setShowPresenterNotes(false)} className="sketch-badge" style={{ cursor: 'pointer' }}>Close ✕</button>
          </div>
          <p style={{ fontFamily: 'var(--font-comic)', fontSize: '1.2rem', fontWeight: 600, color: '#1e1b18' }}>
            {presenterNotes[currentSlide]}
          </p>
        </div>
      )}

      {/* Slide Overview Grid Modal */}
      {showOverview && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(30, 27, 24, 0.85)',
          zIndex: 2000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '24px'
        }}>
          <div style={{
            background: '#f8f4e9',
            width: '95%',
            maxWidth: '1100px',
            maxHeight: '90vh',
            borderRadius: '20px',
            border: '4px solid #1e1b18',
            padding: '24px',
            overflowY: 'auto',
            boxShadow: '12px 12px 0px #1e1b18'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.2rem' }}>
                📑 All 15 Slides Overview
              </h2>
              <button
                onClick={() => setShowOverview(false)}
                className="sketch-btn"
                style={{ background: '#ff334b', color: '#fff' }}
              >
                Close ✕
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px' }}>
              {slidesData.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => { 
                    setShowOverview(false); 
                    if (idx !== currentSlide) {
                      triggerEraserWipe(idx, idx > currentSlide ? 'forward' : 'backward');
                    }
                  }}
                  className="sketch-box"
                  style={{
                    padding: '12px',
                    cursor: 'pointer',
                    background: currentSlide === idx ? '#ffdf40' : '#fff',
                    border: currentSlide === idx ? '3.5px solid #ff334b' : '2.5px solid #1e1b18',
                    transform: currentSlide === idx ? 'scale(1.04)' : 'none'
                  }}
                >
                  <span className="sketch-badge" style={{ fontSize: '0.8rem', marginBottom: '6px' }}>
                    Slide {idx + 1}
                  </span>
                  <div style={{ fontWeight: 'bold', fontSize: '0.95rem', marginTop: '4px' }}>
                    {s.title.replace(/Slide \d+: /, '')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

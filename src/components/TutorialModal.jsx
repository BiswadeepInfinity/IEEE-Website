import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Compass, Lightbulb, MousePointerClick, X, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export const TutorialModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);

  if (!isOpen) return null;

  const tutorialSteps = [
    {
      badge: "⭐ Welcome Fresher! ⭐",
      title: "The Golden Rule of IEEE",
      icon: "🧭",
      color: "#ffdf40",
      content: (
        <div>
          <p style={{ fontSize: '1.35rem', lineHeight: '1.5', fontFamily: 'var(--font-comic)', fontWeight: 600 }}>
            "In textbooks, you're told to only read what's on the syllabus.<br/>
            <strong>At IEEE, the First Rule is: <span style={{ color: '#ff334b', fontSize: '1.5rem', fontWeight: 800 }}>STAY CURIOUS.</span></strong>"
          </p>
          <div style={{ marginTop: '14px', background: '#fff', padding: '12px', borderRadius: '12px', border: '2px dashed #1e1b18' }}>
            🔍 <em>Every great technology—from the AC electrical grid to Generative AI—began with an engineer who dared to click around and ask 'What if?'</em>
          </div>
        </div>
      )
    },
    {
      badge: "🕵️‍♂️ Secret Interactive Features 🕵️‍♂️",
      title: "This Presentation is Alive!",
      icon: "✨",
      color: "#e8f5ff",
      content: (
        <div>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.45', fontWeight: 600 }}>
            Almost every box, scientist portrait, and badge contains <strong>interactive surprises and hidden rewards</strong>:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '10px' }}>
            <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '10px', border: '2px solid #1e1b18', fontSize: '0.95rem' }}>
              <strong>✏️ Live Doodler:</strong> Draw notes or circle keywords right over the slide!
            </div>
            <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '10px', border: '2px solid #1e1b18', fontSize: '0.95rem' }}>
              <strong>🔬 Scientist Bios:</strong> Click Tesla, Edison & Bell on Slide 4 for their IEEE history!
            </div>
            <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '10px', border: '2px solid #1e1b18', fontSize: '0.95rem' }}>
              <strong>🛠️ Lab Simulators:</strong> Click workshop cards to level up your Industry Readiness!
            </div>
            <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '10px', border: '2px solid #1e1b18', fontSize: '0.95rem' }}>
              <strong>🧹 Eraser Wipe:</strong> Real rubber crumbs fly whenever you change slides!
            </div>
          </div>
        </div>
      )
    },
    {
      badge: "🚀 Ready to Explore? 🚀",
      title: "Click Anything You're Curious About",
      icon: "🎯",
      color: "#e6fcf2",
      content: (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', margin: '4px 0' }} className="pop-pulse">🦁</div>
          <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.8rem', color: '#1e1b18' }}>
            Don't just watch. <span style={{ color: '#ff334b' }}>Interact.</span>
          </h3>
          <p style={{ fontSize: '1.2rem', marginTop: '8px', fontWeight: 600 }}>
            Use your mouse or keyboard (<strong>Arrow keys</strong>, <strong>'N' for Speaker Notes</strong>, <strong>'F' for Fullscreen</strong>).
          </p>
          <div style={{ marginTop: '12px', color: '#ff7828', fontWeight: 800, fontSize: '1.1rem' }}>
            👉 "Curiosity is the engine of innovation."
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (step < tutorialSteps.length - 1) {
      setStep(prev => prev + 1);
    } else {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      onClose();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(30, 27, 24, 0.85)',
      zIndex: 4000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div 
        className="sketch-box" 
        style={{
          width: '95%',
          maxWidth: '680px',
          background: tutorialSteps[step].color,
          padding: '26px',
          position: 'relative',
          boxShadow: '12px 12px 0px #1e1b18',
          border: '4px solid #1e1b18'
        }}
      >
        <div className="tape-top"></div>
        
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: '#ff334b',
            color: 'white',
            border: '2px solid #1e1b18',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '2px 2px 0px #1e1b18'
          }}
          title="Skip Tutorial"
        >
          <X size={18} />
        </button>

        {/* Modal Top Header */}
        <div style={{ textAlign: 'center', marginBottom: '14px' }}>
          <div className="sketch-badge" style={{ background: '#fff', fontSize: '0.9rem', marginBottom: '6px' }}>
            {tutorialSteps[step].badge}
          </div>
          <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.3rem', color: '#1e1b18' }}>
            {tutorialSteps[step].icon} {tutorialSteps[step].title}
          </h2>
        </div>

        {/* Step Content */}
        <div style={{ minHeight: '190px' }}>
          {tutorialSteps[step].content}
        </div>

        {/* Modal Footer Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '18px', borderTop: '2.5px dashed #1e1b18', paddingTop: '14px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            {tutorialSteps.map((_, i) => (
              <div
                key={i}
                style={{
                  width: step === i ? '24px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: step === i ? '#ff334b' : '#aaa',
                  border: '1.5px solid #1e1b18',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            {step > 0 && (
              <button
                onClick={() => setStep(prev => prev - 1)}
                className="sketch-btn"
                style={{ padding: '8px 16px', fontSize: '0.9rem', background: '#fff' }}
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="sketch-btn pop-pulse"
              style={{ padding: '8px 22px', fontSize: '1rem', background: '#ff334b', color: '#fff' }}
            >
              {step === tutorialSteps.length - 1 ? "🚀 Let's Explore!" : "Next Tip ➔"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

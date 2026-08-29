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
          <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)', lineHeight: '1.35', fontFamily: 'var(--font-comic)', fontWeight: 600 }}>
            "In textbooks, you're told to only read what's on the syllabus.<br/>
            <strong>At IEEE, the First Rule is: <span style={{ color: '#ff334b', fontWeight: 800 }}>STAY CURIOUS.</span></strong>"
          </p>
          <div style={{ marginTop: '8px', background: '#fff', padding: '8px 10px', borderRadius: '10px', border: '1.5px dashed #1e1b18', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)' }}>
            🔍 <em>Every great technology began with an engineer who dared to click around and ask 'What if?'</em>
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
          <p style={{ fontSize: 'clamp(0.85rem, 2.2vw, 1.1rem)', lineHeight: '1.35', fontWeight: 600 }}>
            Almost every card and portrait contains <strong>interactive surprises</strong>:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '8px', fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)' }}>
            <div style={{ background: '#fff', padding: '6px 8px', borderRadius: '8px', border: '1.5px solid #1e1b18' }}>
              <strong>✏️ Live Doodler:</strong> Draw notes on slide!
            </div>
            <div style={{ background: '#fff', padding: '6px 8px', borderRadius: '8px', border: '1.5px solid #1e1b18' }}>
              <strong>🔬 Scientist Bios:</strong> Click Tesla, Edison & Bell!
            </div>
            <div style={{ background: '#fff', padding: '6px 8px', borderRadius: '8px', border: '1.5px solid #1e1b18' }}>
              <strong>🛠️ Lab Simulators:</strong> Click workshop cards!
            </div>
            <div style={{ background: '#fff', padding: '6px 8px', borderRadius: '8px', border: '1.5px solid #1e1b18' }}>
              <strong>🧹 Eraser Wipe:</strong> Real rubber crumbs sweep!
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
          <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: '#1e1b18' }}>
            Don't just watch. <span style={{ color: '#ff334b' }}>Interact.</span>
          </h3>
          <p style={{ fontSize: 'clamp(0.85rem, 2vw, 1.05rem)', marginTop: '4px', fontWeight: 600 }}>
            Use your mouse, touch, or keyboard arrows to navigate.
          </p>
          <div style={{ marginTop: '8px', color: '#ff7828', fontWeight: 800, fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>
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
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
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
      height: '100dvh',
      background: 'rgba(30, 27, 24, 0.85)',
      zIndex: 4000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px'
    }}>
      <div 
        className="sketch-box" 
        style={{
          width: '95%',
          maxWidth: '580px',
          maxHeight: '92vh',
          maxHeight: '92dvh',
          background: tutorialSteps[step].color,
          padding: '16px 20px',
          position: 'relative',
          boxShadow: '8px 8px 0px #1e1b18',
          border: '3.5px solid #1e1b18',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div className="tape-top"></div>
        
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: '#ff334b',
            color: 'white',
            border: '2px solid #1e1b18',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '1.5px 1.5px 0px #1e1b18',
            zIndex: 10
          }}
          title="Skip Tutorial"
        >
          <X size={16} />
        </button>

        {/* Modal Top Header */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <div className="sketch-badge" style={{ background: '#fff', fontSize: '0.75rem', marginBottom: '4px' }}>
            {tutorialSteps[step].badge}
          </div>
          <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)', color: '#1e1b18' }}>
            {tutorialSteps[step].icon} {tutorialSteps[step].title}
          </h2>
        </div>

        {/* Step Content */}
        <div style={{ margin: '6px 0', flex: 1 }}>
          {tutorialSteps[step].content}
        </div>

        {/* Modal Footer Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', borderTop: '2px dashed #1e1b18', paddingTop: '10px' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            {tutorialSteps.map((_, i) => (
              <div
                key={i}
                style={{
                  width: step === i ? '20px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: step === i ? '#ff334b' : '#aaa',
                  border: '1px solid #1e1b18',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {step > 0 && (
              <button
                onClick={() => setStep(prev => prev - 1)}
                className="sketch-btn"
                style={{ padding: '5px 12px', fontSize: '0.8rem', background: '#fff' }}
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="sketch-btn pop-pulse"
              style={{ padding: '5px 16px', fontSize: '0.85rem', background: '#ff334b', color: '#fff' }}
            >
              {step === tutorialSteps.length - 1 ? "🚀 Let's Go!" : "Next ➔"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

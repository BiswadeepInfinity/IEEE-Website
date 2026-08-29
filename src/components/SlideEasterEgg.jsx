import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export const SlideEasterEgg = ({ slideIndex }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  // 15 unique secrets & easter eggs featuring Tesla, Edison, Bell and cute tech avatars
  const easterEggs = [
    {
      type: "image",
      src: "/scientists/tesla.jpg",
      name: "Nikola Tesla",
      subtitle: "The AC Electricity Visionary",
      position: { side: "right", top: "32%" },
      quote: "“The present is theirs; the future, for which I really worked, is mine.” (AIEE Vice President, 1892)",
      secretCode: "⚡ 120V Polyphase Grid",
      tag: "Inventor Icon"
    },
    {
      type: "image",
      src: "/scientists/edison.jpg",
      name: "Thomas Edison",
      subtitle: "The Spark of Innovation",
      position: { side: "left", top: "42%" },
      quote: "“Genius is 1% inspiration and 99% perspiration.” (AIEE Co-founder, 1884)",
      secretCode: "💡 Edison Medal Lore",
      tag: "Founding Father"
    },
    {
      type: "image",
      src: "/scientists/bell.jpg",
      name: "Alexander Graham Bell",
      subtitle: "The Telecommunications Pioneer",
      position: { side: "right", top: "55%" },
      quote: "“When one door closes, another opens!” (AIEE President, 1891)",
      secretCode: "📞 Acoustic Resonance",
      tag: "Audio Visionary"
    },
    {
      type: "image",
      src: "/scientists/tesla.jpg",
      name: "Tesla (Secret Lab)",
      subtitle: "High Frequency Wizard",
      position: { side: "left", top: "28%" },
      quote: "Did you know? Tesla illuminated 200 lightbulbs wirelessly from 25 miles away in Colorado Springs!",
      secretCode: "⚡ Colorado Springs 1899",
      tag: "Wireless Energy"
    },
    {
      type: "emoji",
      character: "🦉",
      name: "Professor Owl",
      subtitle: "Ecosystem Mentor",
      position: { side: "right", top: "20%" },
      quote: "Wisdom unlocked: An ecosystem gives you what textbooks cannot: true collaborators and lifelong mentors!",
      secretCode: "📚 9-Orbital Synergy",
      tag: "Academic Guide"
    },
    {
      type: "emoji",
      character: "☕",
      name: "Midnight Coffee",
      subtitle: "Hackathon Fuel",
      position: { side: "left", top: "68%" },
      quote: "Fueled 10,000 hackathon projects and 4,000 research breakthroughs at 3:00 AM in college labs.",
      secretCode: "☕ 100% Arabica Power",
      tag: "Late Night Lab"
    },
    {
      type: "image",
      src: "/scientists/edison.jpg",
      name: "Edison (Lab Bench)",
      subtitle: "10,000 Attempts",
      position: { side: "right", top: "45%" },
      quote: "“I have not failed. I've just found 10,000 ways that won't work.” Build prototypes without fear!",
      secretCode: "🛠️ 10,000 Prototypes",
      tag: "Grit & Persistence"
    },
    {
      type: "image",
      src: "/scientists/bell.jpg",
      name: "Bell (Acoustic Lab)",
      subtitle: "Standardization Pioneer",
      position: { side: "left", top: "35%" },
      quote: "Bell guided AIEE to standardize electrical units like Volts, Amperes, and Ohms worldwide!",
      secretCode: "📑 Standard Units 1891",
      tag: "Global Standards"
    },
    {
      type: "emoji",
      character: "🦄",
      name: "Startup Unicorn",
      position: { side: "right", top: "65%" },
      quote: "Every multi-billion dollar tech company was once just an unproven student prototype in a lab.",
      secretCode: "🦄 Valuation $1B+",
      tag: "Campus Startup"
    },
    {
      type: "emoji",
      character: "🦖",
      name: "Code-o-saurus",
      position: { side: "left", top: "50%" },
      quote: "ROAARR! In IEEEXtreme, teams solve algorithmic challenges non-stop for 24 hours straight!",
      secretCode: "💻 O(1) Time Complexity",
      tag: "IEEEXtreme 24H"
    },
    {
      type: "image",
      src: "/scientists/tesla.jpg",
      name: "Nikola Tesla",
      subtitle: "Global IEEE Legend",
      position: { side: "right", top: "25%" },
      quote: "“Be alone, that is the secret of invention; be alone, that is when ideas are born.”",
      secretCode: "🌐 IEEE Fellow Legacy",
      tag: "Pure Genius"
    },
    {
      type: "emoji",
      character: "👑",
      name: "Golden Crown",
      position: { side: "left", top: "20%" },
      quote: "Leaders aren't born; they're forged when someone raises their hand to lead an event at Uttaranchal University!",
      secretCode: "👑 Executive Mindset",
      tag: "Student Chair"
    },
    {
      type: "emoji",
      character: "🥑",
      name: "Jensen's GPU Avocado",
      position: { side: "right", top: "40%" },
      quote: "Jensen Huang received the IEEE Medal of Honor for GPUs. Build hardware that accelerates humanity!",
      secretCode: "🎮 CUDA Tensor Core",
      tag: "AI Revolution"
    },
    {
      type: "emoji",
      character: "🧭",
      name: "Golden Compass",
      position: { side: "left", top: "62%" },
      quote: "4 years of college fly by in an instant. Build projects that make your resume and portfolio shine!",
      secretCode: "🗺️ 4-Year Blueprint",
      tag: "Career Compass"
    },
    {
      type: "emoji",
      character: "🚀",
      name: "Starship Booster",
      position: { side: "right", top: "30%" },
      quote: "Final Secret: You have the power to engineer something the entire world didn't know it needed!",
      secretCode: "🌟 IEEE STARTER BADGE",
      tag: "The Next Chapter"
    },
  ];

  const currentEgg = easterEggs[slideIndex % easterEggs.length];

  const handlePoke = () => {
    setIsRevealed(!isRevealed);
    if (!isRevealed) {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.5 } });
    }
  };

  const isLeft = currentEgg.position.side === "left";

  return (
    <div
      style={{
        position: 'absolute',
        top: currentEgg.position.top,
        [isLeft ? 'left' : 'right']: isRevealed ? '12px' : '-24px',
        zIndex: 50,
        transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: isLeft ? 'row' : 'row-reverse',
        gap: '10px'
      }}
    >
      {/* Peeking Avatar Button (Illustrated Scientists or Cute Characters) */}
      <button
        onClick={handlePoke}
        className="sketch-btn pop-pulse"
        style={{
          padding: '0',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          border: '3.5px solid #1e1b18',
          boxShadow: '4px 4px 0px #1e1b18',
          cursor: 'pointer',
          transform: isRevealed ? (isLeft ? 'rotate(-6deg) scale(1.15)' : 'rotate(6deg) scale(1.15)') : 'none',
          position: 'relative'
        }}
        title={`Psst! Click to talk to ${currentEgg.name}!`}
      >
        {currentEgg.type === "image" ? (
          <img
            src={currentEgg.src}
            alt={currentEgg.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          <span style={{ fontSize: '1.9rem' }}>{currentEgg.character}</span>
        )}

        {!isRevealed && (
          <span style={{
            position: 'absolute',
            top: '0px',
            right: isLeft ? 'auto' : '0px',
            left: isLeft ? '0px' : 'auto',
            background: '#ff334b',
            color: 'white',
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            fontSize: '0.72rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            border: '1.5px solid #1e1b18',
            boxShadow: '1px 1px 0px #1e1b18'
          }}>
            ?
          </span>
        )}
      </button>

      {/* Popout Speech Dialogue Box */}
      {isRevealed && (
        <div
          className="sketch-box sketch-box-yellow"
          style={{
            padding: '12px 16px',
            maxWidth: '300px',
            boxShadow: '6px 6px 0px #1e1b18',
            position: 'relative',
            animation: 'scribble-float 3s ease-in-out infinite'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-cray)', fontSize: '1.15rem', color: '#ff334b', fontWeight: 800 }}>
                {currentEgg.name}
              </span>
              <div style={{ fontSize: '0.75rem', color: '#3ba4ff', fontWeight: 700 }}>
                {currentEgg.subtitle}
              </div>
            </div>
            <button
              onClick={() => setIsRevealed(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 900,
                fontSize: '1rem',
                color: '#666',
                marginLeft: '6px'
              }}
            >
              ✕
            </button>
          </div>

          <p style={{ fontSize: '0.94rem', lineHeight: '1.35', fontWeight: 600, color: '#1e1b18', marginTop: '4px' }}>
            {currentEgg.quote}
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
            <span style={{
              background: '#fff',
              padding: '2px 8px',
              borderRadius: '6px',
              border: '1.5px dashed #1e1b18',
              fontSize: '0.72rem',
              fontWeight: 800,
              color: '#2ecc71'
            }}>
              🔑 {currentEgg.secretCode}
            </span>
            <span className="sketch-badge" style={{ fontSize: '0.68rem', background: '#ffe8f2' }}>
              {currentEgg.tag}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

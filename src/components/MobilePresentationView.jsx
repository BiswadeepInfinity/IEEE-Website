import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ChevronLeft, ChevronRight, Sparkles, BookOpen, Layers, 
  ArrowRight, Award, Zap, Compass, CheckCircle2, Rocket, Globe, Shield, Terminal, X, HelpCircle
} from 'lucide-react';

export const MobilePresentationView = ({ currentSlide, setCurrentSlide, totalSlides, triggerWipe }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedRole, setSelectedRole] = useState(0);
  const [selectedScientist, setSelectedScientist] = useState(null);
  const [mindsetFlipped, setMindsetFlipped] = useState(false);
  const [workshopEnrolled, setWorkshopEnrolled] = useState([0]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) triggerWipe(currentSlide + 1, 'forward');
  };
  const prevSlide = () => {
    if (currentSlide > 0) triggerWipe(currentSlide - 1, 'backward');
  };

  // Mobile-tailored content cards for each of the 15 slides
  const renderSlideCard = () => {
    switch(currentSlide) {
      case 0: // Slide 1
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ textAlign: 'center' }}>
              <span className="sketch-badge" style={{ background: '#ffdf40', fontSize: '0.75rem' }}>
                ⭐ Orientation 2026 ⭐
              </span>
              <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem', marginTop: '4px', color: '#1e1b18' }}>
                Engineer Your Future 🚀
              </h1>
              <div style={{ color: '#0088cc', fontSize: '0.85rem', fontWeight: 800 }}>
                From Student to Entrepreneur
              </div>
            </div>

            <div className="sketch-box sketch-box-yellow" style={{ padding: '12px' }}>
              <div style={{ fontWeight: 800, color: '#ff334b', fontSize: '0.95rem' }}>
                💡 Learn • Build • Innovate • Lead
              </div>
              <p style={{ fontSize: '0.88rem', marginTop: '6px', lineHeight: 1.35, fontWeight: 600 }}>
                "Your degree gives you <u>knowledge</u>. <strong>IEEE gives you the ecosystem</strong> to turn knowledge into real <u>impact</u>."
              </p>
            </div>

            {/* Tap Journey Pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#666' }}>
                ⚡ TAP YOUR 5-STAGE GROWTH:
              </span>
              {[
                { title: "1. Student 🎒", desc: "Absorbing syllabus fundamentals." },
                { title: "2. Engineer 📐", desc: "Mastering systems, circuits & algorithms." },
                { title: "3. Innovator 💡", desc: "Prototyping solutions in college labs." },
                { title: "4. Entrepreneur 🚀", desc: "Taking solutions to market as startups." },
                { title: "5. Industry Leader 👑", desc: "Inspiring thousands & setting global standards." }
              ].map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveTab(idx);
                    confetti({ particleCount: 20, spread: 35, origin: { y: 0.8 } });
                  }}
                  className="sketch-box"
                  style={{
                    padding: '8px 10px',
                    background: activeTab === idx ? '#ffdf40' : '#fff',
                    border: activeTab === idx ? '2px solid #ff334b' : '1.5px solid #1e1b18',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '0.82rem' }}>{s.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#444', marginTop: '1px' }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 1: // Slide 2
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b', fontSize: '0.75rem' }}>
              Slide 2 • The Core Mindset
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
              Why Engineering? <span style={{ color: '#ff7828' }}>Why Not Startups?</span>
            </h2>

            {/* Mindset Card */}
            <div 
              onClick={() => setMindsetFlipped(!mindsetFlipped)}
              className={`sketch-box ${mindsetFlipped ? 'sketch-box-green' : 'sketch-box-pink'}`}
              style={{ padding: '14px', textAlign: 'center', cursor: 'pointer' }}
            >
              <span style={{ fontSize: '0.72rem', fontWeight: 800 }}>⚡ TAP CARD TO FLIP MINDSET ⚡</span>
              {!mindsetFlipped ? (
                <div style={{ marginTop: '6px' }}>
                  <div style={{ color: '#ff334b', fontSize: '1.1rem', fontWeight: 800, textDecoration: 'line-through' }}>
                    "Which company will hire me?" 🏢
                  </div>
                  <p style={{ fontSize: '0.8rem', marginTop: '4px' }}>Passive job-seeker mindset.</p>
                </div>
              ) : (
                <div style={{ marginTop: '6px' }}>
                  <div style={{ color: '#2ecc71', fontSize: '1.2rem', fontFamily: 'var(--font-cray)' }}>
                    "Which problem can I solve?" 🌍🚀
                  </div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 800, marginTop: '4px' }}>Proactive problem-solver & creator!</p>
                </div>
              )}
            </div>

            {/* Avatars */}
            <div className="sketch-box sketch-box-yellow" style={{ padding: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3ba4ff' }}>
                🚀 6 Engineering Roles to Explore:
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '6px' }}>
                {["👨‍💻 Developer", "🔬 Researcher", "💡 Innovator", "🚀 Entrepreneur", "🧠 Tech Leader", "🌍 Problem Solver"].map((r, i) => (
                  <div 
                    key={i}
                    onClick={() => setSelectedRole(i)}
                    style={{
                      background: selectedRole === i ? '#ffdf40' : '#fff',
                      border: '1.5px solid #1e1b18',
                      borderRadius: '6px',
                      padding: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textAlign: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 2: // Slide 3
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span className="sketch-badge" style={{ background: '#e8f5ff', color: '#0088cc', fontSize: '0.75rem' }}>
              Slide 3 • Global Footprint
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
              What Exactly is <span style={{ color: '#0088cc' }}>IEEE</span>?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { title: "🛠️ Technical Workshops", desc: "Hands-on labs in AI, IoT, Web3 & Robotics." },
                { title: "📚 Research Papers", desc: "5M+ peer-reviewed papers on IEEE Xplore." },
                { title: "🌐 Global Network", desc: "420,000+ engineers across 160 nations." },
                { title: "🏆 Hackathons & Contests", desc: "IEEEXtreme 24h programming battles." },
                { title: "👑 Student Leadership", desc: "Organize campus summits & lead student boards." },
              ].map((item, idx) => (
                <div key={idx} className="sketch-box" style={{ padding: '8px 10px' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#1e1b18' }}>{item.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#555', marginTop: '2px' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3: // Slide 4
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828', fontSize: '0.75rem' }}>
              Slide 4 • 140+ Years of History
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
              From 1884 to the Future ⏳
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>⚡ TAP FOUNDING ICONS FOR BIO:</span>
              {[
                { name: "Nikola Tesla", role: "AC Power Visionary", img: "/scientists/tesla.jpg", ieee: "AIEE Vice President (1892). Demoed AC Motors at IEEE in 1888." },
                { name: "Thomas Edison", role: "Co-founder & Lightbulb", img: "/scientists/edison.jpg", ieee: "Co-founded AIEE in 1884. IEEE Edison Medal created in his honor." },
                { name: "Alexander Graham Bell", role: "Telephone Inventor", img: "/scientists/bell.jpg", ieee: "6th President of AIEE (1891). Standardized electrical units worldwide." }
              ].map((s, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedScientist(s)}
                  className="sketch-box"
                  style={{
                    padding: '8px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    background: '#fff'
                  }}
                >
                  <img src={s.img} alt={s.name} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid #1e1b18', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.82rem' }}>{s.name}</div>
                    <div style={{ fontSize: '0.72rem', color: '#ff334b', fontWeight: 700 }}>{s.role}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scientist Popup Modal on Mobile */}
            {selectedScientist && (
              <div style={{
                position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px'
              }}>
                <div className="sketch-box sketch-box-yellow" style={{ padding: '14px', maxWidth: '320px', width: '100%', position: 'relative' }}>
                  <button 
                    onClick={() => setSelectedScientist(null)}
                    style={{ position: 'absolute', top: '8px', right: '8px', background: '#ff334b', color: '#fff', borderRadius: '50%', border: 'none', width: '24px', height: '24px', cursor: 'pointer' }}
                  >
                    ✕
                  </button>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                    <img src={selectedScientist.img} alt={selectedScientist.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #1e1b18' }} />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1rem' }}>{selectedScientist.name}</div>
                      <div style={{ fontSize: '0.72rem', color: '#ff334b', fontWeight: 700 }}>{selectedScientist.role}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.8rem', lineHeight: 1.35, background: '#fff', padding: '6px', borderRadius: '6px', border: '1px solid #1e1b18' }}>
                    <strong>IEEE Role:</strong> {selectedScientist.ieee}
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      case 4: // Slide 5
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71', fontSize: '0.75rem' }}>
              Slide 5 • 9 Pillars
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
              IEEE is an <span style={{ color: '#ff334b' }}>Ecosystem</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {[
                { title: "🔬 Research", bg: "#ffe8f2" },
                { title: "📚 Publications", bg: "#e8f5ff" },
                { title: "🎓 Education", bg: "#e6fcf2" },
                { title: "🌐 Networking", bg: "#fff8d6" },
                { title: "🏆 Competitions", bg: "#f4ecff" },
                { title: "🛠️ Projects", bg: "#ffe8f2" },
                { title: "👑 Leadership", bg: "#e8f5ff" },
                { title: "💡 Innovation", bg: "#e6fcf2" },
                { title: "🚀 Startups", bg: "#fff8d6" },
              ].map((p, i) => (
                <div key={i} className="sketch-box" style={{ background: p.bg, padding: '8px 4px', textAlign: 'center', fontSize: '0.8rem', fontWeight: 800 }}>
                  {p.title}
                </div>
              ))}
            </div>
            <div className="sketch-box sketch-box-yellow" style={{ padding: '8px', textAlign: 'center', fontSize: '0.8rem', fontWeight: 800 }}>
              “Connecting every step from student to founder.”
            </div>
          </div>
        );

      case 5: // Slide 6
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828', fontSize: '0.75rem' }}>
              Slide 6 • Practical Mastery
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.35rem' }}>
              Learn <span style={{ color: '#ff334b' }}>Beyond</span> Classroom 🛠️
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {[
                { name: "🛠️ Technical Labs", tag: "Hardware" },
                { name: "💻 Coding Sprints", tag: "Algorithms" },
                { name: "🧠 AI / ML Hub", tag: "PyTorch" },
                { name: "🤖 Robotics Arena", tag: "Sensors" },
                { name: "🔐 Cybersecurity", tag: "Ethical Hack" },
                { name: "🌐 Global Webinars", tag: "IEEE Fellows" },
              ].map((w, idx) => {
                const isEnrolled = workshopEnrolled.includes(idx);
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (!isEnrolled) setWorkshopEnrolled([...workshopEnrolled, idx]);
                      confetti({ particleCount: 20, spread: 35, origin: { y: 0.8 } });
                    }}
                    className="sketch-box"
                    style={{
                      padding: '6px',
                      background: isEnrolled ? '#ffdf40' : '#fff',
                      border: isEnrolled ? '2px solid #ff334b' : '1.5px solid #1e1b18',
                      cursor: 'pointer',
                      fontSize: '0.75rem'
                    }}
                  >
                    <div style={{ fontWeight: 800 }}>{w.name}</div>
                    <div style={{ fontSize: '0.65rem', color: isEnrolled ? '#ff334b' : '#666', fontWeight: 700 }}>
                      {isEnrolled ? "✓ Enrolled" : w.tag}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="sketch-box sketch-box-green" style={{ padding: '6px', textAlign: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
              ⚡ Completed: {workshopEnrolled.length}/6 Labs
            </div>
          </div>
        );

      case 6: // Slide 7
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b', fontSize: '0.75rem' }}>
              Slide 7 • Prototyping
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
              Turn Knowledge Into <span style={{ color: '#2ecc71' }}>Projects</span> 🛠️
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {["1. Learn Blueprints 📖", "2. Experiment with Code 🔬", "3. Build Working MVP 🛠️", "4. Learn from Bugs 💥", "5. Refactor & Scale ⚡", "6. Deploy for Real Users 🚀"].map((s, idx) => (
                <div key={idx} className="sketch-box" style={{ padding: '6px 8px', fontSize: '0.78rem', fontWeight: 700 }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        );

      case 7: // Slide 8
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="sketch-badge" style={{ background: '#e8f5ff', color: '#0088cc', fontSize: '0.75rem' }}>
              Slide 8 • Discovery
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
              Research: From <span style={{ color: '#ff334b' }}>Question</span> to Discovery 🔬
            </h2>
            <div className="sketch-box sketch-box-blue" style={{ padding: '10px' }}>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.35, fontWeight: 600 }}>
                Research is not boring academic paperwork—it is discovering what was previously thought impossible!
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', fontSize: '0.75rem', fontWeight: 700 }}>
              <div className="sketch-box" style={{ padding: '6px' }}>1. Question 🤔</div>
              <div className="sketch-box" style={{ padding: '6px' }}>2. Literature 📖</div>
              <div className="sketch-box" style={{ padding: '6px' }}>3. Experiment 🧪</div>
              <div className="sketch-box" style={{ padding: '6px' }}>4. Paper in IEEE 📝</div>
            </div>
          </div>
        );

      case 8: // Slide 9
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71', fontSize: '0.75rem' }}>
              Slide 9 • The Pipeline
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.35rem' }}>
              Paper to <span style={{ color: '#ff334b' }}>Startup</span> 🌉
            </h2>
            <div className="sketch-box sketch-box-yellow" style={{ padding: '10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.85rem' }}>Problem ➔ Research ➔ MVP ➔ Venture ➔ Impact</div>
              <p style={{ fontSize: '0.8rem', marginTop: '6px', lineHeight: 1.3 }}>
                "What if the research you do this semester becomes the company you lead at graduation?" 🚀
              </p>
            </div>
          </div>
        );

      case 9: // Slide 10
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828', fontSize: '0.75rem' }}>
              Slide 10 • Battles
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
              Compete. <span style={{ color: '#ff334b' }}>Conquer.</span> 🏆
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div className="sketch-box" style={{ padding: '8px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.85rem' }}>💻 IEEEXtreme 24-Hour Hackathon</div>
                <div style={{ fontSize: '0.75rem', color: '#555' }}>Compete with 10,000+ top coders worldwide non-stop!</div>
              </div>
              <div className="sketch-box" style={{ padding: '8px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.85rem' }}>🤖 Robotics Arena Challenges</div>
                <div style={{ fontSize: '0.75rem', color: '#555' }}>Autonomous line-followers & obstacle solvers.</div>
              </div>
            </div>
          </div>
        );

      case 10: // Slide 11
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b', fontSize: '0.75rem' }}>
              Slide 11 • Network
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
              Build Your Network <span style={{ color: '#0088cc' }}>Early</span> 🌐
            </h2>
            <div className="sketch-box sketch-box-pink" style={{ padding: '10px' }}>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.35, fontWeight: 700 }}>
                “Your future co-founder could be sitting in this orientation hall today.” 🤝
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', fontSize: '0.75rem', fontWeight: 700 }}>
              <div className="sketch-box" style={{ padding: '6px' }}>🎓 Senior Mentors</div>
              <div className="sketch-box" style={{ padding: '6px' }}>💼 Tech Alumni</div>
              <div className="sketch-box" style={{ padding: '6px' }}>🔬 Lab Professors</div>
              <div className="sketch-box" style={{ padding: '6px' }}>🚀 Startup Founders</div>
            </div>
          </div>
        );

      case 11: // Slide 12
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71', fontSize: '0.75rem' }}>
              Slide 12 • Leadership
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
              Don't Just Participate. <span style={{ color: '#ff334b' }}>Lead.</span> 👑
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {["1. Volunteer 🤝", "2. Event Coordinator 📋", "3. Technical Lead 🎯", "4. Branch Executive Chair 👑"].map((l, i) => (
                <div key={i} className="sketch-box" style={{ padding: '6px 8px', fontSize: '0.8rem', fontWeight: 800 }}>
                  {l}
                </div>
              ))}
            </div>
          </div>
        );

      case 12: // Slide 13
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828', fontSize: '0.75rem' }}>
              Slide 13 • Role Models
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
              Success Stories 🌟
            </h2>
            <div className="sketch-box sketch-box-yellow" style={{ padding: '10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#ff334b' }}>Arjun Pillai 🚀</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>IEEE Leader ➔ Founder of Profoundis (Acquired by FullContact).</div>
            </div>
            <div className="sketch-box sketch-box-blue" style={{ padding: '10px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0088cc' }}>Jensen Huang 👑</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>CEO of NVIDIA (Awarded IEEE Medal of Honor).</div>
            </div>
          </div>
        );

      case 13: // Slide 14
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="sketch-badge" style={{ background: '#e8f5ff', color: '#0088cc', fontSize: '0.75rem' }}>
              Slide 14 • 4-Year Plan
            </span>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
              Your 4-Year <span style={{ color: '#ff334b' }}>Roadmap</span> 🗺️
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div className="sketch-box" style={{ padding: '6px 8px', background: '#e6fcf2', fontSize: '0.78rem', fontWeight: 800 }}>
                🟢 Y1: EXPLORE (Join IEEE, Workshops)
              </div>
              <div className="sketch-box" style={{ padding: '6px 8px', background: '#e8f5ff', fontSize: '0.78rem', fontWeight: 800 }}>
                🔵 Y2: BUILD (Hardware & Hackathons)
              </div>
              <div className="sketch-box" style={{ padding: '6px 8px', background: '#fff8d6', fontSize: '0.78rem', fontWeight: 800 }}>
                🟠 Y3: RESEARCH (Publish Papers in Xplore)
              </div>
              <div className="sketch-box" style={{ padding: '6px 8px', background: '#ffe8f2', fontSize: '0.78rem', fontWeight: 800 }}>
                🔴 Y4: LAUNCH (Lead Branch, Launch Startups)
              </div>
            </div>
          </div>
        );

      case 14: // Slide 15
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center' }}>
            <span className="sketch-badge" style={{ background: '#ffdf40', fontSize: '0.75rem' }}>
              ⭐ Finale ⭐
            </span>
            <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem', color: '#1e1b18' }}>
              Your Story <span style={{ color: '#ff334b' }}>Begins Today</span> ✍️
            </h1>
            <div className="sketch-box sketch-box-yellow" style={{ padding: '12px' }}>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.35, fontWeight: 700 }}>
                “IEEE is the launchpad where student ideas become world-changing companies.” 🚀
              </p>
            </div>
            <button 
              onClick={() => confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } })}
              className="sketch-btn pop-pulse"
              style={{ padding: '10px', fontSize: '1rem', background: '#ff5e97', color: '#fff', justifyContent: 'center' }}
            >
              🚀 JOIN IEEE STUDENT BRANCH!
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
      {/* Active Slide Card in Clean Paper Styling */}
      <div 
        className="sketch-box" 
        style={{
          padding: '14px',
          background: '#fffdf7',
          boxShadow: '4px 4px 0px #1e1b18',
          border: '2.5px solid #1e1b18',
          position: 'relative'
        }}
      >
        {renderSlideCard()}
      </div>

      {/* Touch-Friendly Navigation Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="sketch-btn"
          style={{ opacity: currentSlide === 0 ? 0.4 : 1, padding: '6px 12px', fontSize: '0.82rem' }}
        >
          <ChevronLeft size={16} /> Prev
        </button>

        <span className="sketch-badge" style={{ background: '#fff', fontSize: '0.78rem' }}>
          Slide {currentSlide + 1} / {totalSlides}
        </span>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="sketch-btn"
          style={{ opacity: currentSlide === totalSlides - 1 ? 0.4 : 1, background: '#2ecc71', color: '#fff', padding: '6px 12px', fontSize: '0.82rem' }}
        >
          Next <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

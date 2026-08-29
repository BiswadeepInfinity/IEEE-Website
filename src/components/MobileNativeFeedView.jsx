import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ChevronLeft, ChevronRight, Sparkles, BookOpen, Layers, 
  ArrowRight, Award, Zap, Compass, CheckCircle2, Rocket, Globe, Shield, Terminal, X, HelpCircle,
  Cpu, Brain, Trophy, Lightbulb, Users, Heart
} from 'lucide-react';

export const MobileNativeFeedView = ({ currentSlide, setCurrentSlide, totalSlides, triggerWipe }) => {
  const [activeStage, setActiveStage] = useState(0);
  const [selectedRole, setSelectedRole] = useState(0);
  const [selectedScientist, setSelectedScientist] = useState(null);
  const [mindsetFlipped, setMindsetFlipped] = useState(false);
  const [enrolledWorkshops, setEnrolledWorkshops] = useState([0]);
  const [selectedProblem, setSelectedProblem] = useState("⚡ EV Battery Thermal Degradation");
  const [selectedStory, setSelectedStory] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) triggerWipe(currentSlide + 1, 'forward');
  };
  const prevSlide = () => {
    if (currentSlide > 0) triggerWipe(currentSlide - 1, 'backward');
  };

  const renderMobileContent = () => {
    switch(currentSlide) {
      // -------------------------------------------------------------
      // SLIDE 1
      // -------------------------------------------------------------
      case 0:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="sketch-badge" style={{ background: '#ffdf40', fontSize: '0.8rem' }}>
                ⭐ IEEE Student Branch Orientation ⭐
              </div>
              <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.6rem', marginTop: '6px', color: '#1e1b18', lineHeight: 1.15 }}>
                IEEE: <span style={{ color: '#ff334b' }}>Engineer Your Future</span> 🚀
              </h1>
              <div style={{ color: '#0088cc', fontSize: '0.9rem', fontWeight: 800, marginTop: '2px' }}>
                From Engineering Student to Entrepreneur
              </div>
            </div>

            <div className="sketch-box sketch-box-yellow" style={{ padding: '12px' }}>
              <div style={{ fontWeight: 800, color: '#ff334b', fontSize: '0.95rem' }}>
                💡 Learn • Build • Innovate • Lead
              </div>
              <p style={{ fontSize: '0.9rem', marginTop: '6px', lineHeight: 1.4, fontWeight: 600 }}>
                "Your engineering degree gives you <u>knowledge</u>.<br/>
                <strong>IEEE gives you an ecosystem</strong> to turn that knowledge into <span style={{ color: '#2ecc71', fontWeight: 800 }}>impact</span>."
              </p>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ff7828', marginBottom: '6px' }}>
                ⚡ TAP YOUR 5-STAGE GROWTH JOURNEY:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { title: "1. Student 🎒", desc: "Absorbing syllabus fundamentals & theory.", tag: "Curiosity Spark" },
                  { title: "2. Engineer 📐", desc: "Mastering systems, circuits, algorithms & math.", tag: "Blueprint Master" },
                  { title: "3. Innovator 💡", desc: "Building fresh prototypes in college labs.", tag: "Prototype Forge" },
                  { title: "4. Entrepreneur 🚀", desc: "Turning solutions into scalable startups.", tag: "Venture Builder" },
                  { title: "5. Industry Leader 👑", desc: "Inspiring thousands & shaping global tech.", tag: "Impact Legend" }
                ].map((st, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveStage(idx);
                      confetti({ particleCount: 25, spread: 45, origin: { y: 0.8 } });
                    }}
                    className="sketch-box"
                    style={{
                      padding: '10px 12px',
                      background: activeStage === idx ? '#ffdf40' : '#fff',
                      border: activeStage === idx ? '2.5px solid #ff334b' : '1.5px solid #1e1b18',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>{st.title}</div>
                      <span className="sketch-badge" style={{ fontSize: '0.68rem', background: '#fff' }}>{st.tag}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#444', marginTop: '3px' }}>{st.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // -------------------------------------------------------------
      // SLIDE 2
      // -------------------------------------------------------------
      case 1:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b', fontSize: '0.78rem' }}>
              Slide 02 • Core Mindset
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem', lineHeight: 1.2 }}>
              Why Engineering? <span style={{ color: '#ff7828' }}>Why Not Entrepreneurship?</span>
            </h2>

            {/* Mindset Flip Box */}
            <div 
              onClick={() => {
                setMindsetFlipped(!mindsetFlipped);
                confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
              }}
              className={`sketch-box ${mindsetFlipped ? 'sketch-box-green' : 'sketch-box-pink'}`}
              style={{ padding: '16px', textAlign: 'center', cursor: 'pointer' }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800 }}>⚡ TAP CARD TO FLIP MINDSET ⚡</div>
              {!mindsetFlipped ? (
                <div style={{ marginTop: '6px' }}>
                  <div style={{ color: '#ff334b', fontSize: '1.15rem', fontWeight: 800, textDecoration: 'line-through' }}>
                    "Which company will hire me?" 🏢❌
                  </div>
                  <p style={{ fontSize: '0.82rem', marginTop: '4px' }}>Passive job-seeker mindset.</p>
                </div>
              ) : (
                <div style={{ marginTop: '6px' }}>
                  <div style={{ color: '#2ecc71', fontSize: '1.25rem', fontFamily: 'var(--font-cray)' }}>
                    "Which problem can I solve?" 🌍🚀
                  </div>
                  <p style={{ fontSize: '0.82rem', fontWeight: 800, marginTop: '4px' }}>Proactive problem-solver & creator!</p>
                </div>
              )}
            </div>

            {/* 6 Avatars */}
            <div className="sketch-box sketch-box-yellow" style={{ padding: '12px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3ba4ff', marginBottom: '6px' }}>
                🚀 6 Engineering Avatars:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                {[
                  { name: "👨‍💻 Developer", action: "Architecting code & AI backends." },
                  { name: "🔬 Researcher", action: "Pushing science frontiers in papers." },
                  { name: "💡 Innovator", action: "Connecting ideas into patents." },
                  { name: "🚀 Entrepreneur", action: "Launching scalable startups." },
                  { name: "🧠 Tech Leader", action: "Guiding teams & tech strategy." },
                  { name: "🌍 Problem Solver", action: "Tackling energy & health crises." }
                ].map((r, i) => (
                  <div 
                    key={i}
                    onClick={() => setSelectedRole(i)}
                    style={{
                      background: selectedRole === i ? '#ffdf40' : '#fff',
                      border: selectedRole === i ? '2px solid #1e1b18' : '1.5px solid #aaa',
                      borderRadius: '8px',
                      padding: '8px',
                      fontSize: '0.78rem',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontWeight: 800 }}>{r.name}</div>
                    <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '2px' }}>{r.action}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // -------------------------------------------------------------
      // SLIDE 3
      // -------------------------------------------------------------
      case 2:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#e8f5ff', color: '#0088cc', fontSize: '0.78rem' }}>
              Slide 03 • Global Hub
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem', lineHeight: 1.2 }}>
              What Exactly is <span style={{ color: '#0088cc' }}>IEEE</span>?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { title: "🛠️ Technical Workshops", desc: "Hands-on bootcamps in AI, IoT, Web3, VLSI & Robotics.", perk: "Build industry-grade skills early!" },
                { title: "📚 Research Papers", desc: "Access 5M+ peer-reviewed papers on IEEE Xplore.", perk: "Publish & get indexed globally!" },
                { title: "🌐 Global Network", desc: "Connect with 420,000+ engineers across 160 countries.", perk: "Find international co-founders!" },
                { title: "🏆 Hackathons & Contests", desc: "IEEEXtreme 24h programming battle & robotics cups.", perk: "Win global rank proofs!" },
                { title: "👑 Student Leadership", desc: "Organize campus summits & lead student boards.", perk: "Cultivate real CEO competencies!" }
              ].map((item, idx) => (
                <div key={idx} className="sketch-box" style={{ padding: '10px 12px' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1e1b18' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: '#444', marginTop: '3px' }}>{item.desc}</div>
                  <div style={{ marginTop: '4px', fontSize: '0.75rem', fontWeight: 700, color: '#2ecc71' }}>
                    🎁 {item.perk}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      // -------------------------------------------------------------
      // SLIDE 4
      // -------------------------------------------------------------
      case 3:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828', fontSize: '0.78rem' }}>
              Slide 04 • 140+ Years of History
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem', lineHeight: 1.2 }}>
              From 1884 to the Future ⏳
            </h2>

            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ff7828' }}>
              ⚡ TAP SCIENTIST FOR BIO & IEEE ROLE:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { 
                  name: "Nikola Tesla", 
                  role: "AC Power Visionary", 
                  img: "/scientists/tesla.jpg", 
                  ieee: "AIEE Vice President (1892). Delivered historic lecture on AC Motors at AIEE in May 1888. Won IEEE Edison Medal.",
                  inventions: "Polyphase AC Grid, Induction Motor, Tesla Coil"
                },
                { 
                  name: "Thomas Edison", 
                  role: "Co-founder & Lightbulb Icon", 
                  img: "/scientists/edison.jpg", 
                  ieee: "Co-founded AIEE in May 1884. The prestigious IEEE Edison Medal was created in his honor in 1904.",
                  inventions: "Incandescent Bulb, DC Power Station, Phonograph"
                },
                { 
                  name: "Alexander Graham Bell", 
                  role: "Telephone Pioneer", 
                  img: "/scientists/bell.jpg", 
                  ieee: "6th President of AIEE (1891). Standardized electrical units like Volts, Amperes, and Ohms worldwide.",
                  inventions: "Acoustic Telephone (1876), Photophone"
                }
              ].map((s, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedScientist(s)}
                  className="sketch-box"
                  style={{
                    padding: '10px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    background: '#fff'
                  }}
                >
                  <img src={s.img} alt={s.name} style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #1e1b18', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.92rem' }}>{s.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#ff334b', fontWeight: 700 }}>{s.role}</div>
                    <div style={{ fontSize: '0.72rem', color: '#0088cc', marginTop: '2px' }}>Tap to view IEEE contributions ➔</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Scientist Popup */}
            {selectedScientist && (
              <div style={{
                position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                background: 'rgba(0,0,0,0.85)', zIndex: 99999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px'
              }}>
                <div className="sketch-box sketch-box-yellow" style={{ padding: '16px', maxWidth: '340px', width: '100%', position: 'relative' }}>
                  <button 
                    onClick={() => setSelectedScientist(null)}
                    style={{ position: 'absolute', top: '8px', right: '8px', background: '#ff334b', color: '#fff', borderRadius: '50%', border: 'none', width: '26px', height: '26px', cursor: 'pointer', fontWeight: 800 }}
                  >
                    ✕
                  </button>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={selectedScientist.img} alt={selectedScientist.name} style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #1e1b18' }} />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>{selectedScientist.name}</div>
                      <div style={{ fontSize: '0.78rem', color: '#ff334b', fontWeight: 700 }}>{selectedScientist.role}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.82rem', lineHeight: 1.4, background: '#fff', padding: '8px', borderRadius: '8px', border: '1.5px solid #1e1b18' }}>
                    <div><strong>IEEE Role:</strong> {selectedScientist.ieee}</div>
                    <div style={{ marginTop: '4px', color: '#ff7828' }}><strong>Key Inventions:</strong> {selectedScientist.inventions}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      // -------------------------------------------------------------
      // SLIDE 5
      // -------------------------------------------------------------
      case 4:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71', fontSize: '0.78rem' }}>
              Slide 05 • Hero Slide
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem', lineHeight: 1.2 }}>
              IEEE is an <span style={{ color: '#ff334b' }}>Ecosystem</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {[
                { title: "🔬 Research", stat: "5M+ papers", bg: "#ffe8f2" },
                { title: "📚 Publications", stat: "200+ journals", bg: "#e8f5ff" },
                { title: "🎓 Education", stat: "1,000+ seminars", bg: "#e6fcf2" },
                { title: "🌐 Networking", stat: "160+ countries", bg: "#fff8d6" },
                { title: "🏆 Competitions", stat: "10K+ coders", bg: "#f4ecff" },
                { title: "🛠️ Projects", stat: "Real MVPs", bg: "#ffe8f2" },
                { title: "👑 Leadership", stat: "Student Chairs", bg: "#e8f5ff" },
                { title: "💡 Innovation", stat: "Patents & IP", bg: "#e6fcf2" },
                { title: "🚀 Startups", stat: "Incubators", bg: "#fff8d6" }
              ].map((p, i) => (
                <div key={i} className="sketch-box" style={{ background: p.bg, padding: '10px 8px', textAlign: 'center' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.85rem' }}>{p.title}</div>
                  <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '2px' }}>{p.stat}</div>
                </div>
              ))}
            </div>

            <div className="sketch-box sketch-box-yellow" style={{ padding: '10px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 800 }}>
              “Connecting every step from first year to tech founder.” 🌟
            </div>
          </div>
        );

      // -------------------------------------------------------------
      // SLIDE 6
      // -------------------------------------------------------------
      case 5:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828', fontSize: '0.78rem' }}>
                Slide 06 • Practical Mastery
              </div>
              <div className="sketch-badge" style={{ background: '#2ecc71', color: '#fff', fontSize: '0.75rem' }}>
                ⚡ Enrolled: {enrolledWorkshops.length}/8
              </div>
            </div>

            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem', lineHeight: 1.2 }}>
              Learn <span style={{ color: '#ff334b' }}>Beyond</span> Classroom 🛠️
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {[
                { name: "🛠️ Technical Labs", tag: "Hardware", desc: "Solder circuits & hook up ESP32." },
                { name: "💻 Coding Sprints", tag: "Algorithms", desc: "Data structures & Git sprints." },
                { name: "🧠 AI / ML Hub", tag: "PyTorch", desc: "Train transformer neural nets." },
                { name: "🤖 Robotics Arena", tag: "Sensors", desc: "PID controllers & obstacle robots." },
                { name: "🔐 Cybersecurity", tag: "Defense", desc: "Ethical hacking & packet sniffing." },
                { name: "🔬 Research Lab", tag: "LaTeX", desc: "Write peer-reviewed papers." },
                { name: "🌐 Global Webinars", tag: "IEEE Fellows", desc: "Live Q&A with tech leaders." },
                { name: "🏢 Industry Sprints", tag: "Architecture", desc: "Case studies on Big Tech systems." }
              ].map((w, idx) => {
                const isEnrolled = enrolledWorkshops.includes(idx);
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (!isEnrolled) setEnrolledWorkshops([...enrolledWorkshops, idx]);
                      confetti({ particleCount: 20, spread: 35, origin: { y: 0.8 } });
                    }}
                    className="sketch-box"
                    style={{
                      padding: '8px',
                      background: isEnrolled ? '#ffdf40' : '#fff',
                      border: isEnrolled ? '2px solid #ff334b' : '1.5px solid #1e1b18',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '0.82rem' }}>{w.name}</div>
                    <div style={{ fontSize: '0.7rem', color: isEnrolled ? '#ff334b' : '#666', fontWeight: 700, marginTop: '2px' }}>
                      {isEnrolled ? "✓ Enrolled" : `+ ${w.tag}`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      // -------------------------------------------------------------
      // SLIDES 7–15
      // -------------------------------------------------------------
      case 6: // Slide 7
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b', fontSize: '0.78rem' }}>
              Slide 07 • Builder Culture
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem' }}>
              Turn Knowledge Into <span style={{ color: '#2ecc71' }}>Projects</span> 🛠️
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                "1. Learn Blueprints 📖 (Grasp architecture)",
                "2. Experiment with Code 🔬 (Tinker with breadboards)",
                "3. Build Working MVP 🛠️ (Construct functional demo)",
                "4. Learn from Bugs 💥 (Burn sensors & fail fast)",
                "5. Refactor & Scale ⚡ (Optimize & polish)",
                "6. Deploy for Real Users 🚀 (Solve genuine problems)"
              ].map((s, idx) => (
                <div key={idx} className="sketch-box" style={{ padding: '8px 10px', fontSize: '0.82rem', fontWeight: 700 }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        );

      case 7: // Slide 8
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#e8f5ff', color: '#0088cc', fontSize: '0.78rem' }}>
              Slide 08 • Discovery
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem' }}>
              Research: From <span style={{ color: '#ff334b' }}>Question</span> to Discovery 🔬
            </h2>
            <div className="sketch-box sketch-box-blue" style={{ padding: '12px' }}>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.4, fontWeight: 600 }}>
                Research is not boring academic paperwork—it is discovering what was previously thought impossible!
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.8rem', fontWeight: 700 }}>
              <div className="sketch-box" style={{ padding: '8px' }}>1. Question 🤔</div>
              <div className="sketch-box" style={{ padding: '8px' }}>2. Literature 📖</div>
              <div className="sketch-box" style={{ padding: '8px' }}>3. Experiment 🧪</div>
              <div className="sketch-box" style={{ padding: '8px' }}>4. Publication 📝</div>
            </div>
          </div>
        );

      case 8: // Slide 9
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71', fontSize: '0.78rem' }}>
              Slide 09 • The Pipeline
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem' }}>
              Paper to <span style={{ color: '#ff334b' }}>Real Solution</span> 🌉
            </h2>
            <div className="sketch-box sketch-box-yellow" style={{ padding: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#ff334b' }}>
                Problem ➔ Research ➔ MVP ➔ Venture ➔ Global Impact
              </div>
              <p style={{ fontSize: '0.85rem', marginTop: '6px', lineHeight: 1.35 }}>
                "What if the research paper you publish this year becomes the company you lead upon graduation?" 🚀
              </p>
            </div>
          </div>
        );

      case 9: // Slide 10
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828', fontSize: '0.78rem' }}>
              Slide 10 • Battles
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem' }}>
              Compete. <span style={{ color: '#ff334b' }}>Conquer.</span> 🏆
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="sketch-box" style={{ padding: '10px 12px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>💻 IEEEXtreme 24-Hour Hackathon</div>
                <div style={{ fontSize: '0.78rem', color: '#555', marginTop: '2px' }}>Compete with 10,000+ top coders worldwide non-stop!</div>
              </div>
              <div className="sketch-box" style={{ padding: '10px 12px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>🤖 Robotics Arena Battles</div>
                <div style={{ fontSize: '0.78rem', color: '#555', marginTop: '2px' }}>Autonomous line-followers & obstacle solving robots.</div>
              </div>
            </div>
          </div>
        );

      case 10: // Slide 11
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b', fontSize: '0.78rem' }}>
              Slide 11 • Network
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem' }}>
              Build Your Network <span style={{ color: '#0088cc' }}>Early</span> 🌐
            </h2>
            <div className="sketch-box sketch-box-pink" style={{ padding: '12px' }}>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.4, fontWeight: 700 }}>
                “Your future co-founder could be sitting in this orientation hall today.” 🤝
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.8rem', fontWeight: 700 }}>
              <div className="sketch-box" style={{ padding: '8px' }}>🎓 Senior Mentors</div>
              <div className="sketch-box" style={{ padding: '8px' }}>💼 Tech Alumni</div>
              <div className="sketch-box" style={{ padding: '8px' }}>🔬 Lab Professors</div>
              <div className="sketch-box" style={{ padding: '8px' }}>🚀 Startup Founders</div>
            </div>
          </div>
        );

      case 11: // Slide 12
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71', fontSize: '0.78rem' }}>
              Slide 12 • Leadership
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem' }}>
              Don't Just Participate. <span style={{ color: '#ff334b' }}>Lead.</span> 👑
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                "1. Volunteer 🤝 (Support event registrations)",
                "2. Event Coordinator 📋 (Manage speaker logistics)",
                "3. Technical Lead 🎯 (Direct workshops & teams)",
                "4. Branch Executive Chair 👑 (Set vision & budgets)"
              ].map((l, i) => (
                <div key={i} className="sketch-box" style={{ padding: '8px 10px', fontSize: '0.85rem', fontWeight: 800 }}>
                  {l}
                </div>
              ))}
            </div>
          </div>
        );

      case 12: // Slide 13
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828', fontSize: '0.78rem' }}>
              Slide 13 • Role Models
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem' }}>
              Success Stories 🌟
            </h2>
            <div className="sketch-box sketch-box-yellow" style={{ padding: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ff334b' }}>Arjun Pillai 🚀</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '2px' }}>
                IEEE Student Leader ➔ Founder of Profoundis (Acquired by FullContact).
              </div>
            </div>
            <div className="sketch-box sketch-box-blue" style={{ padding: '12px' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0088cc' }}>Jensen Huang 👑</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '2px' }}>
                CEO of NVIDIA (Honored with prestigious IEEE Medal of Honor).
              </div>
            </div>
          </div>
        );

      case 13: // Slide 14
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="sketch-badge" style={{ background: '#e8f5ff', color: '#0088cc', fontSize: '0.78rem' }}>
              Slide 14 • 4-Year Plan
            </div>
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem' }}>
              Your 4-Year <span style={{ color: '#ff334b' }}>Roadmap</span> 🗺️
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div className="sketch-box" style={{ padding: '8px 10px', background: '#e6fcf2', fontSize: '0.82rem', fontWeight: 800 }}>
                🟢 Y1: EXPLORE (Join IEEE, Workshops)
              </div>
              <div className="sketch-box" style={{ padding: '8px 10px', background: '#e8f5ff', fontSize: '0.82rem', fontWeight: 800 }}>
                🔵 Y2: BUILD (Hardware & Hackathons)
              </div>
              <div className="sketch-box" style={{ padding: '8px 10px', background: '#fff8d6', fontSize: '0.82rem', fontWeight: 800 }}>
                🟠 Y3: RESEARCH (Publish Papers in Xplore)
              </div>
              <div className="sketch-box" style={{ padding: '8px 10px', background: '#ffe8f2', fontSize: '0.82rem', fontWeight: 800 }}>
                🔴 Y4: LAUNCH (Lead Branch, Launch Startups)
              </div>
            </div>
          </div>
        );

      case 14: // Slide 15
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
            <div className="sketch-badge" style={{ background: '#ffdf40', fontSize: '0.8rem' }}>
              ⭐ Finale ⭐
            </div>
            <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.6rem', color: '#1e1b18' }}>
              Your Story <span style={{ color: '#ff334b' }}>Begins Today</span> ✍️
            </h1>
            <div className="sketch-box sketch-box-yellow" style={{ padding: '14px' }}>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.4, fontWeight: 700 }}>
                “IEEE is the launchpad where student ideas become world-changing companies.” 🚀
              </p>
            </div>
            <button 
              onClick={() => confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } })}
              className="sketch-btn pop-pulse"
              style={{ padding: '12px', fontSize: '1.05rem', background: '#ff5e97', color: '#fff', justifyContent: 'center' }}
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
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#f8f4e9',
      paddingBottom: '60px'
    }}>
      {/* Mobile Top Header */}
      <header style={{
        height: '52px',
        padding: '0 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '2.5px solid #1e1b18',
        background: '#fffdf7',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            background: '#fff',
            padding: '2px 6px',
            borderRadius: '6px',
            border: '1.5px solid #1e1b18',
            boxShadow: '1.5px 1.5px 0px #1e1b18',
            display: 'flex',
            alignItems: 'center',
            height: '32px'
          }}>
            <img 
              src="/uttaranchal-logo.svg" 
              alt="Uttaranchal University" 
              style={{ height: '24px', width: 'auto' }} 
            />
          </div>
          <div className="sketch-badge" style={{ background: '#3ba4ff', color: '#fff', fontSize: '0.75rem' }}>
            IEEE UU-SB
          </div>
        </div>

        <div className="sketch-badge" style={{ background: '#ffdf40', fontSize: '0.75rem', fontWeight: 800 }}>
          {currentSlide + 1} / {totalSlides}
        </div>
      </header>

      {/* Main Native Card Feed */}
      <main style={{ padding: '14px 12px', flex: 1 }}>
        <div 
          className="sketch-box" 
          style={{
            padding: '16px',
            background: '#fffdf7',
            border: '3px solid #1e1b18',
            boxShadow: '4px 4px 0px #1e1b18'
          }}
        >
          {renderMobileContent()}
        </div>
      </main>

      {/* Fixed Native Bottom Nav */}
      <footer style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '52px',
        padding: '0 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fffdf7',
        borderTop: '2.5px solid #1e1b18',
        zIndex: 100
      }}>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="sketch-btn"
          style={{
            opacity: currentSlide === 0 ? 0.4 : 1,
            background: '#ffdf40',
            padding: '6px 14px',
            fontSize: '0.85rem'
          }}
        >
          <ChevronLeft size={16} /> Prev
        </button>

        <div style={{ display: 'flex', gap: '4px' }}>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              onClick={() => triggerWipe(i, i > currentSlide ? 'forward' : 'backward')}
              style={{
                width: currentSlide === i ? '16px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: currentSlide === i ? '#ff334b' : '#ccc',
                transition: 'all 0.2s ease'
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="sketch-btn"
          style={{
            opacity: currentSlide === totalSlides - 1 ? 0.4 : 1,
            background: '#2ecc71',
            color: '#fff',
            padding: '6px 14px',
            fontSize: '0.85rem'
          }}
        >
          Next <ChevronRight size={16} />
        </button>
      </footer>
    </div>
  );
};

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Rocket, Lightbulb, Compass, Award, BookOpen, Users, 
  Terminal, Shield, Cpu, Sparkles, ChevronRight, CheckCircle2, 
  Zap, Brain, Target, Globe, ArrowRight, Stars, TrendingUp, Layers, HelpCircle, UserCheck, Flame,
  Share2, Trophy, Play, Check, RefreshCw, Send, ThumbsUp, Code, Laptop, Heart, X
} from 'lucide-react';

// ==========================================
// SLIDE 1: Interactive Journey Launcher + Mascot
// ==========================================
export const Slide1 = () => {
  const [level, setLevel] = useState(0);
  const [xp, setXp] = useState(100);
  const [mascotMessage, setMascotMessage] = useState("Hey Fresher! Click my badges to level up your engineering journey!");

  const stages = [
    { title: "Student 🎒", desc: "Hungry for knowledge & searching for purpose in the syllabus.", color: "#ffe8f2", emoji: "🎒", badge: "Curiosity Spark", quote: "I want to build real things!" },
    { title: "Engineer 📐", desc: "Mastering core principles, circuits, algorithms & math.", color: "#fff8d6", emoji: "📐", badge: "Blueprint Master", quote: "I can understand any system." },
    { title: "Innovator 💡", desc: "Asking 'What if?' and building fresh prototypes in labs.", color: "#e8f5ff", emoji: "💡", badge: "Prototype Forge", quote: "Let's invent a better way!" },
    { title: "Entrepreneur 🚀", desc: "Turning solutions into scalable products and startups.", color: "#e6fcf2", emoji: "🚀", badge: "Venture Builder", quote: "Taking this solution to the world." },
    { title: "Industry Leader 👑", desc: "Empowering thousands & shaping the global tech landscape.", color: "#f4ecff", emoji: "👑", badge: "Impact Legend", quote: "Building the future of humanity." },
  ];

  const handleLevelUp = (idx) => {
    setLevel(idx);
    setXp(prev => prev + 150);
    setMascotMessage(`Boom! You unlocked Level ${idx + 1}: ${stages[idx].title} (+150 XP ⚡)`);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="sketch-badge" style={{ background: '#ffdf40', fontSize: '1.05rem' }}>
          ⭐ IEEE Student Branch Orientation ⭐
        </div>
        <div className="sketch-badge" style={{ background: '#ff5e97', color: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
          ⚡ Student XP: <strong>{xp} pts</strong>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '4px 0' }}>
        <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '3.1rem', color: '#1e1b18', lineHeight: 1.1 }}>
          IEEE: <span style={{ color: '#ff334b' }}>Engineer Your Future</span> 🚀
        </h1>
        <h3 style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.6rem', color: '#3ba4ff' }}>
          From Engineering Student to Entrepreneur
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '16px', alignItems: 'center' }}>
        <div className="sketch-box sketch-box-yellow" style={{ padding: '18px', position: 'relative' }}>
          <div className="tape-top"></div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
            <Sparkles color="#ff7828" size={24} />
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.6rem', color: '#ff7828' }}>
              Learn • Build • Innovate • Lead
            </h2>
          </div>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.4', fontFamily: 'var(--font-comic)', fontWeight: 600 }}>
            "Your engineering degree gives you <span className="doodle-underline" style={{ color: '#ff334b' }}>knowledge</span>.<br/>
            <strong>IEEE gives you an ecosystem</strong> to turn that knowledge into <span style={{ color: '#2ecc71', fontWeight: 800 }}>impact</span>."
          </p>

          <div style={{
            marginTop: '12px',
            background: '#fff',
            border: '2.5px dashed #1e1b18',
            borderRadius: '12px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '1.8rem' }} className="float-wiggle">🤖</span>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#333' }}>{mascotMessage}</span>
          </div>
        </div>

        <div className="sketch-box sketch-box-blue" style={{ padding: '16px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#444' }}>
              🕹️ Level Progress:
            </span>
            <span className="sketch-badge" style={{ background: '#fff', fontSize: '0.8rem' }}>
              Stage {level + 1} of 5
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', margin: '8px 0', flexWrap: 'wrap' }}>
            {stages.map((st, i) => (
              <button
                key={i}
                onClick={() => handleLevelUp(i)}
                className="sketch-btn"
                style={{
                  padding: '6px 10px',
                  fontSize: '0.85rem',
                  background: level === i ? '#ff334b' : '#fff',
                  color: level === i ? '#fff' : '#1e1b18'
                }}
              >
                {st.emoji} Lvl {i+1}
              </button>
            ))}
          </div>

          <div style={{
            background: stages[level].color,
            padding: '12px',
            border: '2.5px solid #1e1b18',
            borderRadius: '14px',
            minHeight: '100px',
            boxShadow: '3px 3px 0px #1e1b18'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>
                {stages[level].title}
              </h3>
              <span className="sketch-badge" style={{ background: '#fff', fontSize: '0.75rem' }}>
                Badge: {stages[level].badge}
              </span>
            </div>
            <p style={{ fontSize: '1.05rem', fontWeight: 600, marginTop: '4px' }}>{stages[level].desc}</p>
            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '4px' }}>
              “{stages[level].quote}”
            </div>
          </div>
        </div>
      </div>

      <div style={{
        background: '#fff',
        border: '3px solid #1e1b18',
        borderRadius: '12px',
        padding: '6px 12px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: '3px 3px 0px #1e1b18'
      }}>
        {stages.map((s, idx) => (
          <React.Fragment key={idx}>
            <span
              onClick={() => handleLevelUp(idx)}
              style={{
                fontWeight: 800,
                fontSize: '1.05rem',
                cursor: 'pointer',
                color: level === idx ? '#ff334b' : '#555',
                textDecoration: level === idx ? 'underline' : 'none'
              }}
            >
              {s.title}
            </span>
            {idx < stages.length - 1 && <ArrowRight size={18} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 2: Interactive Mindset Flip & Role Simulator
// ==========================================
export const Slide2 = () => {
  const [selectedRole, setSelectedRole] = useState(0);
  const [switchedMindset, setSwitchedMindset] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState("⚡ EV Battery Thermal Degradation");

  const roles = [
    { title: "👨‍💻 Developer", desc: "Architecting codebases, real-time apps & AI agent backends.", action: "Wrote 500 lines of clean, modular open-source code.", tag: "Code Master" },
    { title: "🔬 Researcher", desc: "Pushing the frontiers of knowledge and discovering new physics.", action: "Synthesized a new energy model in IEEE Xplore.", tag: "Deep Thinker" },
    { title: "💡 Innovator", desc: "Connecting distinct ideas to invent simpler, smarter tools.", action: "Patented a lightweight drone navigation module.", tag: "Idea Forge" },
    { title: "🚀 Entrepreneur", desc: "Turning solutions into sustainable, high-impact enterprises.", action: "Raised seed capital and hired a multidisciplinary team.", tag: "Venture Maker" },
    { title: "🧠 Tech Leader", desc: "Guiding engineering squads and directing strategic tech vision.", action: "Led a team of 20 to deploy smart city sensor grid.", tag: "Strategic Mind" },
    { title: "🌍 Problem Solver", desc: "Tackling clean energy, healthcare, mobility, and real-world crises.", action: "Delivered solar purification units to 5 villages.", tag: "Impact Driven" },
  ];

  const problems = [
    "⚡ EV Battery Thermal Degradation",
    "🩺 Early Cancer Detection via Edge AI",
    "🌾 Autonomous Drone Crop Pest Analysis",
    "🔐 Post-Quantum Secure Financial Protocols"
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b' }}>Slide 02 • Paradigm Shift</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.4rem', marginTop: '2px' }}>
            Why Engineering? <span style={{ color: '#ff7828' }}>Why Not Entrepreneurship?</span>
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#fff8d6' }}>
          Ask The Freshers 🙋
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div className="sketch-box" style={{ padding: '14px' }}>
          <h4 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.25rem', marginBottom: '8px', color: '#3ba4ff' }}>
            ⚡ 6 Avatars of Tomorrow's Engineer (Click to activate):
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {roles.map((r, i) => (
              <div
                key={i}
                onClick={() => setSelectedRole(i)}
                style={{
                  background: selectedRole === i ? '#ffdf40' : '#fffdf7',
                  border: selectedRole === i ? '3px solid #1e1b18' : '2px solid #888',
                  borderRadius: '10px',
                  padding: '8px 4px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  boxShadow: selectedRole === i ? '3px 3px 0px #1e1b18' : '1px 1px 0px #1e1b18',
                  transform: selectedRole === i ? 'scale(1.04)' : 'scale(1)',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{r.title}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '10px', background: '#e8f5ff', padding: '10px 12px', borderRadius: '10px', border: '2px dashed #3ba4ff' }}>
            <div><strong>Role Mission: </strong>{roles[selectedRole].desc}</div>
            <div style={{ marginTop: '4px', color: '#ff334b', fontWeight: 'bold', fontSize: '0.9rem' }}>
              🎯 Live Action: {roles[selectedRole].action}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div 
            onClick={() => setSwitchedMindset(!switchedMindset)}
            className={`sketch-box ${switchedMindset ? 'sketch-box-green' : 'sketch-box-pink'}`} 
            style={{ padding: '16px', cursor: 'pointer', textAlign: 'center', position: 'relative' }}
          >
            <div className="tape-top"></div>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>
              ⚡ Click Card to Flip Mental Mode ⚡
            </span>
            {!switchedMindset ? (
              <div style={{ marginTop: '8px' }}>
                <h3 style={{ color: '#ff334b', fontSize: '1.4rem', fontFamily: 'var(--font-sketch)', textDecoration: 'line-through' }}>
                  "Which company will hire me?" 🏢❌
                </h3>
                <p style={{ marginTop: '4px', fontSize: '1rem' }}>Passive Job-Seeker: Waiting for someone else to assign you tasks.</p>
              </div>
            ) : (
              <div style={{ marginTop: '8px' }}>
                <h2 style={{ color: '#2ecc71', fontSize: '1.6rem', fontFamily: 'var(--font-cray)' }}>
                  "Which problem can I solve?" 🌍🚀
                </h2>
                <p style={{ marginTop: '4px', fontSize: '1.05rem', fontWeight: 'bold' }}>Proactive Creator: Building technologies the world desperately needs!</p>
              </div>
            )}
          </div>

          <div className="sketch-box sketch-box-yellow" style={{ padding: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#ff7828' }}>
              💡 What problem will you pick to solve?
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '6px' }}>
              {problems.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedProblem(p)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '6px',
                    background: selectedProblem === p ? '#fff' : 'transparent',
                    border: selectedProblem === p ? '2px solid #1e1b18' : '1px dashed transparent',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: selectedProblem === p ? 800 : 500
                  }}
                >
                  {selectedProblem === p ? '👉 ' : '○ '}{p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#fff', border: '2.5px solid #1e1b18', borderRadius: '10px', padding: '6px 12px', display: 'flex', justifyContent: 'space-around', fontSize: '0.95rem' }}>
        <span>📐 <strong>Engineering:</strong> Understand problems</span>
        <span>💡 <strong>Innovation:</strong> Create solutions</span>
        <span>🚀 <strong>Entrepreneurship:</strong> Take solutions to the world</span>
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 3: What Exactly is IEEE?
// ==========================================
export const Slide3 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [pollVote, setPollVote] = useState(null);
  const [completedQuests, setCompletedQuests] = useState([0]);

  const items = [
    { 
      id: 'workshops',
      title: "Technical Education & Workshops", 
      icon: "🎓", 
      badge: "Hands-on Mastery",
      color: "#fff8d6",
      desc: "Hands-on bootcamps in Generative AI, IoT, Edge Computing, VLSI Chip Design, Embedded Robotics, and Web3 architectures.",
      examples: ["AI/ML Masterclass", "Hands-on Arduino Lab", "Clean Code Sprint"],
      perk: "Build industry-grade skills 2 years ahead of your peers!"
    },
    { 
      id: 'research',
      title: "Global Research & Publications", 
      icon: "📚", 
      badge: "Academic Authority",
      color: "#e8f5ff",
      desc: "Instant access to IEEE Xplore Digital Library with over 5 Million+ peer-reviewed papers, patents, and technical standards.",
      examples: ["IEEE Transactions", "Conference Proceedings", "Patent Citations"],
      perk: "Publish your own papers and get indexed globally!"
    },
    { 
      id: 'conferences',
      title: "Conferences & Global Networking", 
      icon: "🌐", 
      badge: "Global Community",
      color: "#f4ecff",
      desc: "Meet distinguished international scientists, keynote speakers, and connect with 420,000+ engineers across 160 countries.",
      examples: ["IEEE Region 10 Summit", "International Tech Congress", "Alumni Mixers"],
      perk: "Find international mentors, co-founders and internship leads."
    },
    { 
      id: 'competitions',
      title: "Competitions & Hackathons", 
      icon: "🏆", 
      badge: "Arena Battle",
      color: "#e6fcf2",
      desc: "IEEEXtreme 24-hour virtual competitive programming battle, IEEE Robotics Challenges, and hardware design hackathons.",
      examples: ["IEEEXtreme 24H Code Jam", "Micromouse Maze Race", "Startup Pitch Cup"],
      perk: "Win global rankings and showcase proofs of ability!"
    },
    { 
      id: 'leadership',
      title: "Leadership & Entrepreneurship", 
      icon: "🚀", 
      badge: "Executive Mindset",
      color: "#ffe8f2",
      desc: "Lead student chapters, manage multi-thousand dollar event budgets, build teams, pitch sponsors, and launch startup ventures.",
      examples: ["Student Branch Chair", "Lead Event Organizer", "Startup Incubator"],
      perk: "Cultivate real-world CEO and executive competencies."
    }
  ];

  const handleSelectTab = (idx) => {
    setActiveTab(idx);
    if (!completedQuests.includes(idx)) {
      setCompletedQuests([...completedQuests, idx]);
    }
  };

  const handleVote = (option) => {
    setPollVote(option);
    confetti({ particleCount: 50, spread: 50, origin: { y: 0.8 } });
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#e8f5ff', color: '#3ba4ff' }}>Slide 03 • The Global Hub</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.5rem', marginTop: '2px' }}>
            What Exactly is <span style={{ color: '#3ba4ff' }}>IEEE</span>?
          </h1>
          <h4 style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.25rem', color: '#ff334b' }}>
            Institute of Electrical and Electronics Engineers — A Global Ecosystem!
          </h4>
        </div>

        <div className="sketch-badge" style={{ background: '#fff', fontSize: '0.9rem', border: '2px solid #1e1b18' }}>
          🌟 Explored: <strong>{completedQuests.length}/5 Pillars</strong>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '16px', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="sketch-box sketch-box-yellow" style={{ padding: '14px' }}>
            <h4 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.2rem', marginBottom: '8px' }}>
              👉 Click each pillar to inspect its capabilities:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {items.map((item, idx) => {
                const isSelected = activeTab === idx;
                const isVisited = completedQuests.includes(idx);
                return (
                  <div 
                    key={idx}
                    onClick={() => handleSelectTab(idx)}
                    style={{
                      background: isSelected ? '#3ba4ff' : '#fff',
                      color: isSelected ? '#fff' : '#1e1b18',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      border: '2.5px solid #1e1b18',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transform: isSelected ? 'translateX(8px)' : 'none',
                      boxShadow: isSelected ? '4px 4px 0px #1e1b18' : '1px 1px 0px #1e1b18',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                      <span>{item.title}</span>
                    </div>
                    {isVisited && (
                      <span style={{ fontSize: '0.75rem', background: isSelected ? '#fff' : '#2ecc71', color: isSelected ? '#3ba4ff' : '#fff', padding: '2px 6px', borderRadius: '6px' }}>
                        ✓
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="sketch-box sketch-box-pink" style={{ padding: '10px 14px', marginTop: '10px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>
              📊 Quick Poll: What excites you most?
            </span>
            <div style={{ display: 'flex', gap: '6px', marginTop: '6px', flexWrap: 'wrap' }}>
              {["🛠️ Building Hardware", "💻 Competitive Coding", "🚀 Starting a Company", "🔬 Deep Research"].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleVote(opt)}
                  className="sketch-btn"
                  style={{
                    padding: '4px 8px',
                    fontSize: '0.78rem',
                    background: pollVote === opt ? '#ffdf40' : '#fff',
                    border: '2px solid #1e1b18'
                  }}
                >
                  {pollVote === opt ? '🎉 ' : ''}{opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div 
            className="sketch-box" 
            style={{ 
              background: items[activeTab].color, 
              padding: '16px', 
              position: 'relative',
              minHeight: '210px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div className="tape-top"></div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem', color: '#1e1b18' }}>
                  {items[activeTab].icon} {items[activeTab].title}
                </h3>
                <span className="sketch-badge" style={{ background: '#fff', fontSize: '0.75rem' }}>
                  {items[activeTab].badge}
                </span>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.4', marginTop: '6px', fontWeight: 500 }}>
                {items[activeTab].desc}
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', margin: '8px 0' }}>
                {items[activeTab].examples.map((ex, i) => (
                  <span key={i} className="sketch-badge" style={{ fontSize: '0.75rem', background: '#fff' }}>
                    ⚡ {ex}
                  </span>
                ))}
              </div>
              <div style={{ background: '#fff', padding: '6px 10px', borderRadius: '8px', border: '2px dashed #1e1b18', fontSize: '0.85rem', fontWeight: 'bold' }}>
                🎁 <strong>Member Advantage:</strong> {items[activeTab].perk}
              </div>
            </div>
          </div>

          <div className="sketch-box sketch-box-yellow" style={{ padding: '12px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.2rem', fontWeight: 800, color: '#1e1b18' }}>
              “Your college IEEE Student Branch is your <span className="doodle-underline" style={{ color: '#ff334b' }}>entry point</span> into a global engineering ecosystem.”
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', background: '#fff', border: '2.5px dashed #1e1b18', borderRadius: '10px', padding: '4px 8px', fontSize: '0.9rem' }}>
        🌐 <strong>The Connected Formula:</strong> Students + Engineers + Researchers + Industry + Innovators + Entrepreneurs
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 4: 140+ Years Timeline WITH INTERACTIVE SCIENTIST MODAL
// ==========================================
export const Slide4 = () => {
  const [timeStep, setTimeStep] = useState(0);
  const [activeScientist, setActiveScientist] = useState(null);

  const timeline = [
    { 
      year: "1884", 
      name: "AIEE Founded", 
      desc: "American Institute of Electrical Engineers led by iconic visionaries like Thomas Edison, Nikola Tesla, and Alexander Graham Bell.", 
      color: "#fff8d6", 
      icon: "💡", 
      fact: "Electricity & Telegraph pioneers",
      scientists: [
        { 
          name: "Nikola Tesla", 
          role: "AC Power & High-Frequency Pioneer", 
          img: "/scientists/tesla.jpg", 
          achievement: "AIEE Vice President (1892–1894)",
          ieeeContribution: "Delivered his revolutionary, historic lecture on 'A New System of Alternating Current Motors and Transformers' at the AIEE in May 1888, introducing polyphase AC electricity to the engineering world. Served as AIEE Vice President and won the IEEE Edison Medal in 1916.",
          coreInventions: ["Polyphase AC Electrical Grid", "Tesla Coil (High Voltage / RF)", "Wireless Radio Transmission", "Induction Motor"],
          quote: "“The present is theirs; the future, for which I really worked, is mine.”"
        },
        { 
          name: "Thomas Edison", 
          role: "Incandescent Lighting & DC Pioneer", 
          img: "/scientists/edison.jpg", 
          achievement: "AIEE Co-founder & Key Officer",
          ieeeContribution: "Co-founded the AIEE in May 1884 in New York City alongside 25 pioneer electrical engineers. Supported standardization of electrical equipment and measurement units. The prestigious 'IEEE Edison Medal'—the highest award in electrical engineering—was established in his honor in 1904.",
          coreInventions: ["Practical Incandescent Lightbulb", "Central DC Power Station (Pearl St)", "Phonograph", "Motion Picture Camera"],
          quote: "“Genius is one percent inspiration, ninety-nine percent perspiration.”"
        },
        { 
          name: "Alexander Graham Bell", 
          role: "Telephone & Acoustic Visionary", 
          img: "/scientists/bell.jpg", 
          achievement: "AIEE President (1891–1892)",
          ieeeContribution: "Served as the 6th President of the AIEE (1891–1892). Advanced telecommunications engineering, fostered international technical standardization, and helped establish early IEEE engineering publications and ethics committees.",
          coreInventions: ["Acoustic Telephone (1876)", "Photophone (Wireless Optical Voice)", "Metal Detector Probe", "Audiometer"],
          quote: "“Before anything else, preparation is the key to success.”"
        },
      ]
    },
    { 
      year: "1912", 
      name: "IRE Founded", 
      desc: "Institute of Radio Engineers born with the wireless, radio wave, electronics, and high-frequency communication boom.", 
      color: "#ffe8f2", 
      icon: "📻", 
      fact: "Radar, TV & Radio era",
      scientists: null
    },
    { 
      year: "1963", 
      name: "IEEE Formed", 
      desc: "AIEE and IRE merged to create the world's largest technical professional organization for advancing technology.", 
      color: "#e8f5ff", 
      icon: "⚡", 
      fact: "Merged into global titan",
      scientists: null
    },
    { 
      year: "Today", 
      name: "Global Tech Ecosystem", 
      desc: "420,000+ members in 160+ countries defining international standards like WiFi 802.11, Ethernet 802.3, and Ethical AI governance.", 
      color: "#e6fcf2", 
      icon: "🌐", 
      fact: "Defining global computing rules",
      scientists: null
    },
    { 
      year: "Tomorrow", 
      name: "Your Chapter", 
      desc: "The next generation of engineers & startup founders building ethical AI, quantum chips, space tech, and clean fusion power.", 
      color: "#f4ecff", 
      icon: "🚀", 
      fact: "Written by you!",
      scientists: null
    },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828' }}>Slide 04 • 140+ Years of History</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.4rem', marginTop: '2px' }}>
            From 1884 to the Future ⏳
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#3ba4ff', color: 'white' }}>
          Interactive Time Machine
        </div>
      </div>

      {/* Interactive Time Slider / Steps */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', margin: '4px 0' }}>
        {timeline.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setTimeStep(idx)}
            className="sketch-box"
            style={{
              padding: '8px 4px',
              textAlign: 'center',
              cursor: 'pointer',
              background: timeStep === idx ? '#ffdf40' : item.color,
              border: timeStep === idx ? '3.5px solid #1e1b18' : '2px solid #555',
              transform: timeStep === idx ? 'translateY(-4px) scale(1.03)' : 'none',
              boxShadow: timeStep === idx ? '4px 4px 0px #1e1b18' : '2px 2px 0px #1e1b18',
              transition: 'all 0.2s'
            }}
          >
            <div style={{ fontSize: '1.2rem' }}>{item.icon}</div>
            <div style={{ fontFamily: 'var(--font-cray)', fontSize: '1.2rem', color: '#ff334b' }}>{item.year}</div>
            <div style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>{item.name}</div>
          </div>
        ))}
      </div>

      {/* Selected Timeline Card with Scientists Illustration Gallery if available */}
      <div className="sketch-box sketch-box-yellow" style={{ padding: '14px', position: 'relative' }}>
        <div className="tape-top"></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.6rem', color: '#1e1b18' }}>
            {timeline[timeStep].icon} {timeline[timeStep].year} — {timeline[timeStep].name}
          </h2>
          <span className="sketch-badge" style={{ background: '#ff334b', color: '#fff', fontSize: '0.75rem' }}>
            {timeline[timeStep].fact}
          </span>
        </div>
        <p style={{ fontSize: '1.1rem', marginTop: '4px', lineHeight: '1.4' }}>
          {timeline[timeStep].desc}
        </p>

        {/* Scientist Avatars for 1884 with Clickable Popup Trigger */}
        {timeline[timeStep].scientists && (
          <div style={{ marginTop: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: '#ff7828' }}>
                ⚡ Iconic Founding Minds of IEEE (AIEE 1884) — <span style={{ color: '#ff334b' }}>Click each card for details!</span>
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '6px' }}>
              {timeline[timeStep].scientists.map((s, i) => (
                <div
                  key={i}
                  onClick={() => setActiveScientist(s)}
                  style={{
                    background: '#fff',
                    border: '2.5px solid #1e1b18',
                    borderRadius: '12px',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '3px 3px 0px #1e1b18',
                    cursor: 'pointer',
                    transform: 'rotate(-0.5deg)',
                    transition: 'all 0.15s ease'
                  }}
                  className="sketch-box"
                >
                  <img
                    src={s.img}
                    alt={s.name}
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '50%',
                      border: '2px solid #1e1b18',
                      objectFit: 'cover',
                      background: '#fff8d6'
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1e1b18' }}>{s.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#ff334b', fontWeight: 600 }}>{s.role}</div>
                    <div style={{ fontSize: '0.7rem', color: '#3ba4ff', marginTop: '2px', fontWeight: 'bold' }}>🔍 Click for IEEE Bio</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="sketch-box sketch-box-purple" style={{ padding: '8px 16px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.2rem', fontWeight: 'bold' }}>
          "IEEE has evolved alongside technology. <span style={{ color: '#ff334b' }}>Now, YOU are part of its next chapter.</span>" ✍️
        </p>
      </div>

      {/* POPUP MODAL FOR SCIENTIST DETAILS */}
      {activeScientist && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(30, 27, 24, 0.85)',
          zIndex: 3000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}>
          <div 
            className="sketch-box sketch-box-yellow" 
            style={{
              width: '95%',
              maxWidth: '680px',
              padding: '24px',
              position: 'relative',
              boxShadow: '12px 12px 0px #1e1b18'
            }}
          >
            <div className="tape-top"></div>
            <button
              onClick={() => setActiveScientist(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: '#ff334b',
                color: 'white',
                border: '2px solid #1e1b18',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '2px 2px 0px #1e1b18'
              }}
            >
              <X size={20} />
            </button>

            {/* Header info */}
            <div style={{ display: 'flex', gap: '18px', alignItems: 'center', marginBottom: '16px' }}>
              <img
                src={activeScientist.img}
                alt={activeScientist.name}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '3.5px solid #1e1b18',
                  boxShadow: '4px 4px 0px #1e1b18',
                  objectFit: 'cover'
                }}
              />
              <div>
                <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.2rem', color: '#1e1b18' }}>
                  {activeScientist.name}
                </h2>
                <div style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.2rem', color: '#ff334b', fontWeight: 'bold' }}>
                  {activeScientist.role}
                </div>
                <div className="sketch-badge" style={{ background: '#3ba4ff', color: 'white', marginTop: '4px', fontSize: '0.85rem' }}>
                  ⭐ {activeScientist.achievement}
                </div>
              </div>
            </div>

            {/* IEEE Contribution Box */}
            <div style={{ background: '#fff', border: '2.5px solid #1e1b18', borderRadius: '12px', padding: '14px', marginBottom: '12px', boxShadow: '3px 3px 0px #1e1b18' }}>
              <h4 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.25rem', color: '#ff7828', marginBottom: '4px' }}>
                🏛️ Direct Contribution to IEEE:
              </h4>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.45', color: '#222' }}>
                {activeScientist.ieeeContribution}
              </p>
            </div>

            {/* Inventions and Quote */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '12px' }}>
              <div style={{ background: '#e8f5ff', border: '2px dashed #1e1b18', borderRadius: '10px', padding: '10px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: '#3ba4ff' }}>
                  💡 Major Inventions:
                </span>
                <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '4px', fontSize: '0.9rem', lineHeight: '1.35', fontWeight: 600 }}>
                  {activeScientist.coreInventions.map((inv, idx) => (
                    <li key={idx}>⚡ {inv}</li>
                  ))}
                </ul>
              </div>

              <div style={{ background: '#ffe8f2', border: '2px dashed #ff5e97', borderRadius: '10px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-doodle)', fontSize: '1.25rem', fontWeight: 'bold', color: '#1e1b18' }}>
                  {activeScientist.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// SLIDE 5: Hero Ecosystem Matrix
// ==========================================
export const Slide5 = () => {
  const [activeNode, setActiveNode] = useState({ title: "Research 🔬", color: "#ff5e97", info: "Unlocking scientific boundaries & original discoveries through structured academic inquiry.", stat: "5M+ IEEE papers indexed" });
  
  const nodes = [
    { title: "Research 🔬", color: "#ff5e97", info: "Unlocking scientific boundaries & original discoveries through structured academic inquiry.", stat: "5M+ papers indexed" },
    { title: "Publications 📚", color: "#3ba4ff", info: "Documenting findings in top-tier IEEE peer-reviewed journals with global citation metrics.", stat: "200+ Transactions & Journals" },
    { title: "Education 🎓", color: "#2ecc71", info: "Continuous skill development, technical webinars, and hands-on laboratory workshops.", stat: "1,000+ Annual Seminars" },
    { title: "Networking 🌐", color: "#ffdf40", info: "Connecting with 420,000+ brilliant minds, industry titans, and faculty across 160 nations.", stat: "160+ Countries" },
    { title: "Competitions 🏆", color: "#ff7828", info: "Global hackathons, IEEEXtreme 24h coding showdowns, and autonomous robotics challenges.", stat: "10,000+ Global Competitors" },
    { title: "Projects 🛠️", color: "#9b59b6", info: "Building real hardware & software prototypes that function outside textbook simulations.", stat: "100s of Campus MVPs" },
    { title: "Leadership 🎤", color: "#ff334b", info: "Steering student branch boards, coordinating massive summits, and mentoring juniors.", stat: "Executive Board Roles" },
    { title: "Innovation 💡", color: "#00d2d3", info: "Transforming standard ideas into game-changing patents and commercial-ready designs.", stat: "Patents & IP Creation" },
    { title: "Entrepreneurship 🚀", color: "#fdcb6e", info: "Creating sustainable, scalable startups from laboratory engineering prototypes.", stat: "Angel & Incubator Pathways" },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71' }}>Slide 05 • The Hero Slide</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.4rem', marginTop: '2px' }}>
            IEEE is an <span style={{ color: '#ff334b' }}>Ecosystem</span>, Not Just an Organization
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#ffdf40' }}>
          ⭐ 9 Orbiting Pillars ⭐
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '16px', alignItems: 'center' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          background: '#fff',
          padding: '14px',
          borderRadius: '16px',
          border: '3.5px solid #1e1b18',
          boxShadow: '5px 5px 0px #1e1b18'
        }}>
          {nodes.map((n, i) => (
            <div
              key={i}
              onClick={() => setActiveNode(n)}
              style={{
                background: n.color,
                border: '2.5px solid #1e1b18',
                borderRadius: '12px',
                padding: '10px 4px',
                textAlign: 'center',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.95rem',
                transform: activeNode?.title === n.title ? 'scale(1.08)' : 'scale(1)',
                boxShadow: activeNode?.title === n.title ? '4px 4px 0px #1e1b18' : '2px 2px 0px #1e1b18',
                transition: '0.15s ease'
              }}
            >
              {n.title}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="sketch-box sketch-box-yellow" style={{ padding: '16px', minHeight: '150px', position: 'relative' }}>
            <div className="tape-top"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.6rem', color: '#1e1b18' }}>
                {activeNode.title}
              </h3>
              <span className="sketch-badge" style={{ background: '#fff', fontSize: '0.75rem' }}>
                {activeNode.stat}
              </span>
            </div>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.4', marginTop: '6px' }}>{activeNode.info}</p>
          </div>

          <div className="sketch-box sketch-box-blue" style={{ padding: '12px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-cray)', fontSize: '1.35rem', color: '#3ba4ff' }}>
              “IEEE connects the entire engineering journey.”
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', background: '#ffe8f2', border: '2px dashed #ff334b', padding: '4px 8px', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>
        🚀 From First-Year Curiosities to Global Startup Founders
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 6: Learn Beyond the Classroom (SUPER INTERACTIVE WORKSHOP HUB)
// ==========================================
export const Slide6 = () => {
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [enrolledList, setEnrolledList] = useState([0]);
  const [skillMeter, setSkillMeter] = useState(25);

  const topics = [
    { 
      title: "Technical Workshops", 
      icon: "🛠️", 
      level: "Hands-on Lab", 
      bg: "#fff8d6",
      tag: "Hardware & Tools",
      skillsGain: "+15 Hardware XP",
      preview: "Solder circuits, hook up ESP32 Wi-Fi chips, measure signals on oscilloscopes, and master breadboard architectures in live laboratory setups.",
      tools: ["ESP32 / STM32", "Digital Multimeter", "Soldering Stations"]
    },
    { 
      title: "Global Webinars", 
      icon: "🌐", 
      level: "World Experts", 
      bg: "#e8f5ff",
      tag: "Thought Leadership",
      skillsGain: "+10 Vision XP",
      preview: "Direct Q&A with IEEE Fellows and Silicon Valley engineering leads dissecting the future of 6G, Clean Energy grids, and autonomous vehicles.",
      tools: ["IEEE TV", "Keynote Q&A", "Global Panelists"]
    },
    { 
      title: "Industry Sessions", 
      icon: "🏢", 
      level: "Real Case Studies", 
      bg: "#ffe8f2",
      tag: "Commercial Tech",
      skillsGain: "+20 Enterprise XP",
      preview: "Deep dives into how Google, Intel, Tesla, and NVIDIA architect fault-tolerant systems, manage server clusters, and roll out software updates.",
      tools: ["Case Study Decks", "System Design", "Tech Lead AMA"]
    },
    { 
      title: "Coding Bootcamps", 
      icon: "💻", 
      level: "Algorithms & Dev", 
      bg: "#e6fcf2",
      tag: "Software Engineering",
      skillsGain: "+25 Algorithm XP",
      preview: "Master data structures, dynamic programming, Git version control, backend APIs, and fullstack deployment in intensive weekend sprints.",
      tools: ["Python / C++", "GitHub Actions", "Docker / Linux"]
    },
    { 
      title: "AI / ML Deep Dives", 
      icon: "🧠", 
      level: "Neural Networks", 
      bg: "#f4ecff",
      tag: "Artificial Intelligence",
      skillsGain: "+30 AI XP",
      preview: "Train transformer models, fine-tune LLMs, run Computer Vision object detection pipelines, and optimize edge inference models on GPUs.",
      tools: ["PyTorch", "Hugging Face", "CUDA Acceleration"]
    },
    { 
      title: "Robotics Workshops", 
      icon: "🤖", 
      level: "Sensors & Motors", 
      bg: "#fff0f5",
      tag: "Mechatronics",
      skillsGain: "+25 Robotics XP",
      preview: "Program PID controllers, interface LiDAR sensors with ROS2, and build autonomous line-following and obstacle-avoiding bot chassis.",
      tools: ["ROS 2", "LiDAR / Ultrasonic", "Motor Drivers"]
    },
    { 
      title: "Cybersecurity Labs", 
      icon: "🔐", 
      level: "Defense & Forensics", 
      bg: "#e0f7fa",
      tag: "Security Operations",
      skillsGain: "+20 Cyber XP",
      preview: "Hands-on penetration testing, ethical hacking, Wireshark packet capture analysis, cryptography ciphers, and defensive system hardening.",
      tools: ["Wireshark", "Burp Suite", "Linux Kernel Tools"]
    },
    { 
      title: "Research Seminars", 
      icon: "🔬", 
      level: "Paper Dissections", 
      bg: "#fffde7",
      tag: "Academic Mastery",
      skillsGain: "+20 Science XP",
      preview: "Learn how to read complex IEEE transactions, identify novel gap areas, write LaTeX manuscripts, and structure reproducible scientific benchmarks.",
      tools: ["IEEE Xplore", "LaTeX Overleaf", "Zotero / Mendeley"]
    },
  ];

  const handleEnroll = (idx) => {
    setSelectedTopic(idx);
    if (!enrolledList.includes(idx)) {
      setEnrolledList([...enrolledList, idx]);
      setSkillMeter(prev => Math.min(100, prev + 12));
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828' }}>Slide 06 • Boundless Learning</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.4rem', marginTop: '2px' }}>
            Learn <span style={{ color: '#ff334b' }}>Beyond</span> the Classroom 📚
          </h1>
        </div>

        {/* Dynamic Skill Readiness Meter */}
        <div className="sketch-box sketch-box-yellow" style={{ padding: '4px 12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>⚡ Industry Readiness:</span>
          <div style={{ width: '100px', height: '14px', background: '#fff', border: '2px solid #1e1b18', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ width: `${skillMeter}%`, height: '100%', background: '#2ecc71', transition: 'width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }} />
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#ff334b' }}>{skillMeter}%</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '14px', alignItems: 'stretch' }}>
        {/* Left Column: 8 Interactive Workshop Cards */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: '#444' }}>
              👉 Click each workshop to simulate enrollment ({enrolledList.length}/8 Completed):
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {topics.map((t, idx) => {
              const isSelected = selectedTopic === idx;
              const isEnrolled = enrolledList.includes(idx);
              return (
                <div
                  key={idx}
                  onClick={() => handleEnroll(idx)}
                  className="sketch-box"
                  style={{
                    padding: '8px 4px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: isSelected ? '#ffdf40' : (isEnrolled ? t.bg : '#f7f2e4'),
                    border: isSelected ? '3.5px solid #1e1b18' : (isEnrolled ? '2.5px solid #1e1b18' : '2px dashed #999'),
                    transform: isSelected ? 'scale(1.05)' : 'none',
                    boxShadow: isSelected ? '4px 4px 0px #1e1b18' : '2px 2px 0px #1e1b18',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ fontSize: '1.4rem' }}>{t.icon}</div>
                  <div style={{ fontWeight: 'bold', fontSize: '0.82rem', marginTop: '2px', lineHeight: 1.1 }}>{t.title}</div>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                    <span className="sketch-badge" style={{ fontSize: '0.65rem', padding: '1px 6px', background: isEnrolled ? '#2ecc71' : '#fff', color: isEnrolled ? '#fff' : '#555' }}>
                      {isEnrolled ? '✓ Enrolled' : t.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Workshop Live Simulator & Transformation Equation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Active Lab Card */}
          <div 
            className="sketch-box" 
            style={{ 
              background: topics[selectedTopic].bg, 
              padding: '14px', 
              position: 'relative',
              boxShadow: '4px 4px 0px #1e1b18'
            }}
          >
            <div className="tape-top"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem', color: '#1e1b18' }}>
                {topics[selectedTopic].icon} {topics[selectedTopic].title}
              </h3>
              <span className="sketch-badge" style={{ background: '#ff334b', color: '#fff', fontSize: '0.75rem' }}>
                {topics[selectedTopic].skillsGain}
              </span>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: '1.35', marginTop: '6px', fontWeight: 500 }}>
              {topics[selectedTopic].preview}
            </p>

            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '8px' }}>
              {topics[selectedTopic].tools.map((tl, i) => (
                <span key={i} className="sketch-badge" style={{ fontSize: '0.72rem', background: '#fff' }}>
                  🛠️ {tl}
                </span>
              ))}
            </div>
          </div>

          {/* Transformation Equation Box */}
          <div className="sketch-box sketch-box-yellow" style={{ padding: '10px 14px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', fontSize: '0.95rem', fontWeight: 800 }}>
              <span style={{ color: '#3ba4ff' }}>Knowledge 💡</span>
              <span>➔</span>
              <span style={{ color: '#ff5e97' }}>Practical Skills 🛠️</span>
              <span>➔</span>
              <span style={{ color: '#2ecc71' }}>Confidence 🦁</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sketch-box sketch-box-pink" style={{ padding: '6px 14px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.15rem', fontWeight: 'bold' }}>
          “Don't wait until your final year to become industry-ready.” ⏰ • <span className="doodle-underline">IEEE gives you cutting-edge mastery from Day 1.</span>
        </p>
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 7: Turn Knowledge Into Projects
// ==========================================
export const Slide7 = () => {
  const [projectStep, setProjectStep] = useState(2);
  const loopSteps = [
    { title: "1. Learn 📖", desc: "Grasp fundamental blueprints and architecture diagrams." },
    { title: "2. Experiment 🔬", desc: "Tinker with breadboards, code repositories & APIs." },
    { title: "3. Build 🛠️", desc: "Construct a functional Minimum Viable Product (MVP)." },
    { title: "4. Fail & Learn 💥", desc: "Embrace burned sensors and logic bugs as rich debugging data." },
    { title: "5. Improve ⚡", desc: "Refactor, optimize performance, and harden security." },
    { title: "6. Create Impact 🚀", desc: "Deliver a finished tool that solves a real human problem." },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b' }}>Slide 07 • Builder Culture</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.5rem', marginTop: '2px' }}>
            Turn Knowledge Into <span style={{ color: '#2ecc71' }}>Projects</span> 🛠️
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#ffdf40' }}>
          Don't Just Learn. Build.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '6px' }}>
        {loopSteps.map((step, idx) => (
          <div
            key={idx}
            onClick={() => setProjectStep(idx)}
            className="sketch-box"
            style={{
              padding: '10px 4px',
              textAlign: 'center',
              cursor: 'pointer',
              background: projectStep === idx ? '#ffdf40' : '#fff',
              border: projectStep === idx ? '3.5px solid #1e1b18' : '2px solid #888',
              transform: projectStep === idx ? 'scale(1.05)' : 'none',
              boxShadow: projectStep === idx ? '4px 4px 0px #1e1b18' : '1px 1px 0px #1e1b18',
              transition: '0.15s ease'
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{step.title}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '16px', alignItems: 'center' }}>
        <div className="sketch-box sketch-box-blue" style={{ padding: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem', marginBottom: '6px' }}>
            {loopSteps[projectStep].title}
          </h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>
            {loopSteps[projectStep].desc}
          </p>
        </div>

        <div className="sketch-box sketch-box-yellow" style={{ padding: '14px' }}>
          <h4 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.15rem', marginBottom: '6px', color: '#ff334b' }}>
            🔥 Domains IEEE Students Build In:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {["💻 Fullstack Apps", "🤖 Autonomous Bots", "🧠 Generative AI", "🌐 Smart IoT", "🔐 Cyber Defense", "⚡ Clean Power", "📡 Satellite Comms"].map((d, i) => (
              <span key={i} className="sketch-badge" style={{ fontSize: '0.78rem' }}>{d}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="sketch-box sketch-box-pink" style={{ padding: '10px 16px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.25rem', fontWeight: 800 }}>
          “Your first project may not become a startup. But your first startup <span className="doodle-underline">almost certainly begins</span> with a project.” 🚀
        </p>
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 8: Research: From Question to Discovery
// ==========================================
export const Slide8 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: "1. Question 🤔", detail: "Curiosity strikes: 'Why does battery temperature spike?' or 'Can solar cells reach 35% efficiency?'" },
    { title: "2. Research 📖", detail: "Deep dive into IEEE Xplore literature to discover what humanity has already tested." },
    { title: "3. Experiment 🧪", detail: "Design rigorous simulations, benchmarks, or physical testing hardware setups." },
    { title: "4. Result 📊", detail: "Extract verifiable mathematical proofs, breakthroughs, or novel neural algorithms." },
    { title: "5. Paper 📝", detail: "Write peer-reviewed manuscripts formatted according to strict IEEE standards." },
    { title: "6. Conference 🎤", detail: "Present your findings to global professors, scientists, and industry leaders." },
    { title: "7. Recognition 🏆", detail: "Earn citations, patents, and reputation that unlocks top MS/PhD & startup capital." }
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#e8f5ff', color: '#3ba4ff' }}>Slide 08 • Scientific Frontier</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.5rem', marginTop: '2px' }}>
            Research: From <span style={{ color: '#ff334b' }}>Question</span> to Discovery 🔬
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#ffdf40' }}>
          Discovery Roadmap
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className="sketch-btn"
            style={{
              padding: '6px 2px',
              fontSize: '0.75rem',
              background: activeStep === idx ? '#3ba4ff' : '#fff',
              color: activeStep === idx ? '#fff' : '#1e1b18',
              textAlign: 'center',
              display: 'block'
            }}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '16px', alignItems: 'center' }}>
        <div className="sketch-box sketch-box-blue" style={{ padding: '18px' }}>
          <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.6rem', color: '#1e1b18', marginBottom: '6px' }}>
            {steps[activeStep].title}
          </h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>
            {steps[activeStep].detail}
          </p>
        </div>

        <div className="sketch-box sketch-box-yellow" style={{ padding: '14px' }}>
          <h4 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.2rem', marginBottom: '6px' }}>
            🌟 What IEEE Research Unlocks:
          </h4>
          <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>
            <li>✨ <strong>IEEE Xplore:</strong> Access 5M+ technical documents.</li>
            <li>🤝 <strong>Faculty Collaboration:</strong> Work closely with top professors.</li>
            <li>🌍 <strong>Global Conferences:</strong> Travel & present worldwide.</li>
            <li>📑 <strong>Citations:</strong> Build lifetime academic credibility.</li>
          </ul>
        </div>
      </div>

      <div className="sketch-box sketch-box-pink" style={{ padding: '10px 16px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.25rem', fontWeight: 'bold' }}>
          “Research doesn't just tell you what is possible. It helps you discover <span className="doodle-underline">what could be possible</span>.” ✨
        </p>
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 9: From Research Paper to Real-World Solution
// ==========================================
export const Slide9 = () => {
  const [pipelineStep, setPipelineStep] = useState(0);
  const pipeline = [
    { title: "1. Problem 🧩", subtitle: "Real friction", desc: "E.g., High heat & energy degradation in EV charging batteries." },
    { title: "2. Research 🔬", subtitle: "Discovery", desc: "Studying thermal dissipation equations and modeling pulse algorithms." },
    { title: "3. Innovation 💡", subtitle: "Architecture", desc: "Inventing an adaptive pulsed-charge protocol that limits thermal spikes." },
    { title: "4. Prototype 🛠️", subtitle: "Working demo", desc: "Fabricating a benchtop charger that charges 40% faster with zero heat." },
    { title: "5. Product 📦", subtitle: "Packaging", desc: "Designing plug-and-play charging module ready for EV factories." },
    { title: "6. Startup 🚀", subtitle: "Venture", desc: "Incorporating the company, raising seed investment & hiring engineers." },
    { title: "7. Impact 🌍", subtitle: "Global change", desc: "Saving megawatts of energy worldwide across millions of electric cars." },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71' }}>Slide 09 • The Tech Bridge</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.4rem', marginTop: '2px' }}>
            From Research Paper to <span style={{ color: '#ff334b' }}>Real-World Solution</span> 🌉
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#3ba4ff', color: '#fff' }}>
          Academic ➔ Startup Bridge
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {pipeline.map((p, idx) => (
          <div
            key={idx}
            onClick={() => setPipelineStep(idx)}
            className="sketch-box"
            style={{
              padding: '8px 2px',
              textAlign: 'center',
              cursor: 'pointer',
              background: pipelineStep === idx ? '#ffdf40' : '#fff',
              border: pipelineStep === idx ? '3.5px solid #1e1b18' : '2px solid #888',
              transform: pipelineStep === idx ? 'scale(1.05)' : 'none',
              transition: '0.15s'
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>{p.title}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '16px', alignItems: 'center' }}>
        <div className="sketch-box sketch-box-yellow" style={{ padding: '16px' }}>
          <div className="tape-top"></div>
          <span className="sketch-badge" style={{ background: '#ff334b', color: '#fff', marginBottom: '6px', fontSize: '0.75rem' }}>
            Stage {pipelineStep + 1} of 7
          </span>
          <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.6rem', marginTop: '2px' }}>
            {pipeline[pipelineStep].title} — <span style={{ color: '#ff7828' }}>{pipeline[pipelineStep].subtitle}</span>
          </h3>
          <p style={{ fontSize: '1.2rem', marginTop: '6px', lineHeight: '1.4' }}>
            {pipeline[pipelineStep].desc}
          </p>
        </div>

        <div className="sketch-box sketch-box-blue" style={{ padding: '16px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.45rem', color: '#ff334b', lineHeight: 1.3 }}>
            “What if the paper you publish today becomes the technology your company builds tomorrow?”
          </h3>
          <div style={{ marginTop: '8px', fontSize: '1rem', fontWeight: 600, color: '#333' }}>
            👉 IEEE bridges the gap between lab research and global products.
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', background: '#fff', border: '2.5px dashed #1e1b18', padding: '6px', borderRadius: '10px', fontWeight: 'bold', fontSize: '0.9rem' }}>
        🚀 Problem → Research → Innovation → Prototype → Product → Startup → Global Impact!
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 10: Compete. Collaborate. Conquer.
// ==========================================
export const Slide10 = () => {
  const [selectedComp, setSelectedComp] = useState(0);
  const comps = [
    { name: "IEEEXtreme 24H 💻", desc: "The legendary 24-hour virtual competitive programming battle with 10,000+ top coders globally." },
    { name: "Robotics Challenges 🤖", desc: "Autonomous bots racing, obstacle navigation, and AI vision tasks tested on real arena tracks." },
    { name: "Hackathons & Ideathons 💡", desc: "Rapid prototyping sprints turning raw ideas into working web/mobile solutions in 36 hours." },
    { name: "Technical Design Cups 📐", desc: "Hardware circuit design, PCB layouts, antenna engineering, and VLSI optimization." },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828' }}>Slide 10 • Global Arena</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.5rem', marginTop: '2px' }}>
            Compete. Collaborate. <span style={{ color: '#ff334b' }}>Conquer.</span> 🏆
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#2ecc71', color: '#fff' }}>
          Global Playground
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {comps.map((c, i) => (
            <div
              key={i}
              onClick={() => setSelectedComp(i)}
              className="sketch-box"
              style={{
                padding: '10px 12px',
                cursor: 'pointer',
                background: selectedComp === i ? '#ffdf40' : '#fff',
                transform: selectedComp === i ? 'translateX(6px)' : 'none',
                transition: '0.15s ease'
              }}
            >
              <h4 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.2rem' }}>{c.name}</h4>
              <p style={{ fontSize: '0.9rem', marginTop: '2px' }}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="sketch-box sketch-box-green" style={{ padding: '14px' }}>
            <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.35rem', color: '#2ecc71', marginBottom: '6px' }}>
              ⚡ Superpowers You Forge in Battle:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.9rem', fontWeight: 'bold' }}>
              <div className="sketch-badge" style={{ background: '#fff' }}>🎯 Problem Solving</div>
              <div className="sketch-badge" style={{ background: '#fff' }}>🤝 High-Stress Teamwork</div>
              <div className="sketch-badge" style={{ background: '#fff' }}>⏱️ Time Management</div>
              <div className="sketch-badge" style={{ background: '#fff' }}>💡 Rapid Innovation</div>
              <div className="sketch-badge" style={{ background: '#fff' }}>🧠 Competitive Edge</div>
              <div className="sketch-badge" style={{ background: '#fff' }}>🚀 Grit & Resilience</div>
            </div>
          </div>

          <div className="sketch-box sketch-box-pink" style={{ padding: '12px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.2rem', fontWeight: 800 }}>
              “Competitions don't just test what you know. They reveal <span className="doodle-underline">what you're capable of</span>.” 🦁
            </p>
          </div>
        </div>
      </div>

      <div style={{ background: '#e8f5ff', border: '2.5px solid #1e1b18', borderRadius: '10px', padding: '6px 12px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>
        🌍 Compete against teams from MIT, Stanford, NUS, IITs and top colleges worldwide!
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 11: Build Your Network Before You Need It
// ==========================================
export const Slide11 = () => {
  const [selectedPin, setSelectedPin] = useState("Entrepreneurs & Investors 🚀");
  const connections = [
    { role: "Seniors & Mentors 🎓", info: "Guidance on cracking interviews, choosing research, and skipping beginner traps." },
    { role: "Alumni Network 💼", info: "Direct referrals into top tech giants (Google, Microsoft, Apple, Intel, Tesla)." },
    { role: "Professors & Scientists 🔬", info: "Access to sponsored lab grants, funded research, and strong recommendation letters." },
    { role: "Industry Professionals 👔", info: "Direct insights into what skills and tools are actually demanded in the marketplace." },
    { role: "Entrepreneurs & Investors 🚀", info: "Angel investment opportunities, startup mentorship, and incubator access." },
    { role: "Global Peers 🌍", info: "Co-founders and collaborators across 160 countries speaking the same tech language." },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b' }}>Slide 11 • The Power of People</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.5rem', marginTop: '2px' }}>
            Build Your Network <span style={{ color: '#3ba4ff' }}>Before You Need It</span> 🌐
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#fff8d6' }}>
          Network = Net Worth
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {connections.map((c, i) => (
          <div
            key={i}
            onClick={() => setSelectedPin(c.role)}
            className="sketch-box"
            style={{
              padding: '10px',
              cursor: 'pointer',
              background: selectedPin === c.role ? '#ffdf40' : '#fffdf7',
              transform: selectedPin === c.role ? 'scale(1.04)' : 'scale(1)',
              transition: '0.15s ease'
            }}
          >
            <h4 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.15rem', color: '#1e1b18' }}>{c.role}</h4>
            <p style={{ fontSize: '0.85rem', marginTop: '4px', lineHeight: 1.3 }}>{c.info}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '12px', alignItems: 'center' }}>
        <div className="sketch-box sketch-box-blue" style={{ padding: '12px' }}>
          <h4 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.15rem', color: '#3ba4ff' }}>
            💡 Think Beyond Your College Campus:
          </h4>
          <p style={{ fontSize: '1.05rem', marginTop: '2px', fontWeight: 600 }}>
            Your future co-founder could be in: <br/>
            <strong>Another department → Another college → Another city → Another country.</strong>
          </p>
        </div>

        <div className="sketch-box sketch-box-pink" style={{ padding: '12px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.2rem', fontWeight: 800 }}>
            “The right connection can introduce you to the <span className="doodle-underline">right idea, opportunity, mentor, or co-founder</span>.” 🤝
          </p>
        </div>
      </div>

      <div style={{ background: '#fff', border: '2.5px dashed #1e1b18', padding: '4px 12px', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.88rem' }}>
        ⭐ IEEE connects you with 420,000+ technology leaders across the planet.
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 12: Leadership: Don't Just Participate. Lead.
// ==========================================
export const Slide12 = () => {
  const [leaderLevel, setLeaderLevel] = useState(0);
  const ladder = [
    { title: "1. Participant 🙋‍♂️", responsibility: "Attending workshops, asking curious questions, absorbing foundational skills." },
    { title: "2. Volunteer 🤝", responsibility: "Supporting event logistics, stage setups, and helping peer attendees register smoothly." },
    { title: "3. Coordinator 📋", responsibility: "Managing specific tracks, handling speaker hospitality, and designing schedules." },
    { title: "4. Team Lead 🎯", responsibility: "Directing subcommittees (Technical, Design, PR, Sponsorship, Operations)." },
    { title: "5. Student Branch Leader 👑", responsibility: "Setting strategic vision, managing budgets, and inspiring 100+ members." },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71' }}>Slide 12 • The Executive Mindset</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.5rem', marginTop: '2px' }}>
            Leadership: Don't Just Participate. <span style={{ color: '#ff334b' }}>Lead.</span> 👑
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#ff334b', color: '#fff' }}>
          Leadership Ladder
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
        {ladder.map((l, idx) => (
          <div
            key={idx}
            onClick={() => setLeaderLevel(idx)}
            className="sketch-box"
            style={{
              padding: '10px 4px',
              textAlign: 'center',
              cursor: 'pointer',
              background: leaderLevel === idx ? '#ffdf40' : '#fff',
              border: leaderLevel === idx ? '3.5px solid #1e1b18' : '2px solid #888',
              transform: leaderLevel === idx ? 'translateY(-4px)' : 'none',
              transition: '0.15s ease'
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>{l.title}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'center' }}>
        <div className="sketch-box sketch-box-yellow" style={{ padding: '16px' }}>
          <div className="tape-top"></div>
          <span className="sketch-badge" style={{ background: '#3ba4ff', color: 'white', marginBottom: '6px', fontSize: '0.75rem' }}>Leadership Stage</span>
          <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.5rem', marginTop: '2px' }}>
            {ladder[leaderLevel].title}
          </h3>
          <p style={{ fontSize: '1.15rem', marginTop: '6px', lineHeight: 1.4 }}>
            {ladder[leaderLevel].responsibility}
          </p>
        </div>

        <div className="sketch-box sketch-box-blue" style={{ padding: '14px' }}>
          <h4 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.2rem', color: '#1e1b18', marginBottom: '6px' }}>
            💼 Real-World Executive Skills You Gain:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>
            <span className="sketch-badge">🗣️ Public Speaking</span>
            <span className="sketch-badge">📊 Budget Mgmt</span>
            <span className="sketch-badge">⚖️ Conflict Resolution</span>
            <span className="sketch-badge">🎯 Fast Decision Making</span>
            <span className="sketch-badge">🤝 Team Motivation</span>
            <span className="sketch-badge">🛡️ Crisis Management</span>
          </div>
        </div>
      </div>

      <div className="sketch-box sketch-box-pink" style={{ padding: '10px 16px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.25rem', fontWeight: 800 }}>
          “Entrepreneurs don't wait for someone else to create opportunities. <span className="doodle-underline">They learn to create them themselves</span>.” 🚀
        </p>
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 13: Success Stories: Real Impact
// ==========================================
export const Slide13 = () => {
  const [selectedStory, setSelectedStory] = useState(0);
  const stories = [
    {
      name: "Arjun Pillai 🚀",
      role: "IEEE Student Member → Tech Entrepreneur (Founder, Profoundis)",
      quote: "His IEEE experience helped him develop leadership, management, networking and relentless confidence before co-founding Profoundis (acquired by FullContact).",
      tags: ["Student Member", "Branch Chair", "Startup Founder", "Silicon Valley Exit"],
      color: "#fff8d6"
    },
    {
      name: "Jensen Huang 👑",
      role: "Founder & CEO, NVIDIA (2026 IEEE Medal of Honor Recipient)",
      quote: "Recognized with the prestigious IEEE Medal of Honor for visionary leadership in GPUs and revolutionizing scientific computing and Artificial Intelligence.",
      tags: ["Global Titan", "IEEE Medal of Honor", "AI Pioneer", "$3T+ Impact"],
      color: "#e8f5ff"
    }
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828' }}>Slide 13 • Proof of Impact</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.5rem', marginTop: '2px' }}>
            Success Stories: Where <span style={{ color: '#ff334b' }}>IEEE Meets Real Impact</span> 🌟
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#2ecc71', color: 'white' }}>
          Role Models
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        {stories.map((s, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedStory(idx)}
            className="sketch-box"
            style={{
              padding: '16px',
              cursor: 'pointer',
              background: s.color,
              border: selectedStory === idx ? '3.5px solid #1e1b18' : '2px solid #555',
              transform: selectedStory === idx ? 'scale(1.02)' : 'scale(1)',
              boxShadow: selectedStory === idx ? '6px 6px 0px #1e1b18' : '3px 3px 0px #1e1b18',
              transition: '0.2s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.6rem' }}>{s.name}</h2>
              {selectedStory === idx && <span className="sketch-badge" style={{ background: '#ff334b', color: '#fff', fontSize: '0.75rem' }}>Active Spotlight</span>}
            </div>
            <h4 style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.1rem', color: '#ff334b', marginTop: '2px' }}>
              {s.role}
            </h4>
            <p style={{ fontSize: '1.05rem', marginTop: '6px', lineHeight: 1.4 }}>
              "{s.quote}"
            </p>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '8px' }}>
              {s.tags.map((t, i) => (
                <span key={i} className="sketch-badge" style={{ fontSize: '0.75rem', background: '#fff' }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="sketch-box sketch-box-green" style={{ padding: '10px 16px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.15rem', fontFamily: 'var(--font-comic)', fontWeight: 'bold' }}>
          Technology + Engineering + Vision + Leadership = <strong>Global Impact</strong><br/>
          <span style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.25rem', color: '#1e1b18' }}>
            “IEEE can become one of the ecosystems in which <span className="doodle-underline">your own success story develops</span>.”
          </span>
        </p>
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 14: Your 4-Year Entrepreneurial Journey
// ==========================================
export const Slide14 = () => {
  const [selectedYear, setSelectedYear] = useState(0);
  const years = [
    {
      year: "🟢 Year 1: EXPLORE",
      theme: "Curiosity & Foundations",
      color: "#e6fcf2",
      bulletPoints: ["Join IEEE Student Branch", "Attend technical workshops & intro bootcamps", "Meet inspiring seniors & expand your network", "Explore various emerging tech domains"]
    },
    {
      year: "🔵 Year 2: BUILD",
      theme: "Prototyping & Competitions",
      color: "#e8f5ff",
      bulletPoints: ["Build hands-on hardware and software projects", "Form teams for college hackathons & code jams", "Compete in IEEEXtreme programming contests", "Join specialized IEEE technical societies"]
    },
    {
      year: "🟠 Year 3: RESEARCH",
      theme: "Deep Tech & Publications",
      color: "#fff8d6",
      bulletPoints: ["Undertake serious research with professors", "Write and submit papers to IEEE conferences", "Present findings at national & international summits", "Gain valuable industrial exposure & mentorship"]
    },
    {
      year: "🔴 Year 4: LEAD & LAUNCH",
      theme: "Leadership & Ventures",
      color: "#ffe8f2",
      bulletPoints: ["Lead the Student Branch as an executive officer", "Turn proven prototypes into startup products", "Secure premier placements & international internships", "Launch your entrepreneurial venture into the market"]
    }
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#e8f5ff', color: '#3ba4ff' }}>Slide 14 • The Roadmap</div>
          <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.5rem', marginTop: '2px' }}>
            Your 4-Year <span style={{ color: '#ff334b' }}>Entrepreneurial Journey</span> 🗺️
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#ffdf40' }}>
          Year-by-Year Guide
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
        {years.map((y, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedYear(idx)}
            className="sketch-box"
            style={{
              padding: '10px 4px',
              textAlign: 'center',
              cursor: 'pointer',
              background: selectedYear === idx ? '#ffdf40' : y.color,
              border: selectedYear === idx ? '3.5px solid #1e1b18' : '2px solid #555',
              transform: selectedYear === idx ? 'scale(1.04)' : 'scale(1)',
              boxShadow: selectedYear === idx ? '5px 5px 0px #1e1b18' : '2px 2px 0px #1e1b18',
              transition: '0.15s ease'
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.15rem' }}>{y.year}</h3>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#444' }}>{y.theme}</div>
          </div>
        ))}
      </div>

      <div className="sketch-box" style={{ padding: '16px', background: years[selectedYear].color, position: 'relative' }}>
        <div className="tape-top"></div>
        <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.7rem', marginBottom: '8px' }}>
          🎯 Milestones for {years[selectedYear].year}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {years[selectedYear].bulletPoints.map((bp, i) => (
            <div key={i} style={{ background: '#fff', padding: '8px 12px', borderRadius: '8px', border: '2px solid #1e1b18', fontWeight: 600, fontSize: '1.05rem' }}>
              ⚡ {bp}
            </div>
          ))}
        </div>
      </div>

      <div className="sketch-box sketch-box-yellow" style={{ padding: '10px 16px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.3rem', fontWeight: 800 }}>
          “Four years can give you a degree. <span className="doodle-underline" style={{ color: '#ff334b' }}>What you do during those four years can give you a direction</span>.” 🧭
        </p>
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 15: Grand Finale CTA
// ==========================================
export const Slide15 = () => {
  const triggerGrandConfetti = () => {
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#ff334b', '#ffdf40', '#3ba4ff', '#2ecc71', '#ff5e97'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 10px', textAlign: 'center' }}>
      <div>
        <div className="sketch-badge" style={{ background: '#ffdf40', fontSize: '1rem' }}>
          ⭐ Grand Finale • The Beginning of Your Story ⭐
        </div>
        <h1 style={{ fontFamily: 'var(--font-cray)', fontSize: '2.7rem', color: '#1e1b18', marginTop: '2px' }}>
          Your Story <span style={{ color: '#ff334b' }}>Hasn't Been Written Yet</span> ✍️
        </h1>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6px',
        flexWrap: 'wrap',
        margin: '2px 0'
      }}>
        {["LEARN 📖", "BUILD 🛠️", "RESEARCH 🔬", "CONNECT 🌐", "LEAD 👑", "INNOVATE 💡"].map((w, idx) => (
          <React.Fragment key={idx}>
            <span className="sketch-badge" style={{ fontSize: '0.95rem', background: '#fff', padding: '4px 10px' }}>{w}</span>
            <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>➔</span>
          </React.Fragment>
        ))}
        <span className="sketch-badge" style={{ fontSize: '1.05rem', background: '#ffdf40', color: '#ff334b', padding: '4px 12px', border: '2.5px solid #1e1b18' }}>
          CREATE IMPACT 🌍
        </span>
      </div>

      <div className="sketch-box sketch-box-yellow" style={{ padding: '16px', position: 'relative' }}>
        <div className="tape-top"></div>
        <p style={{ fontFamily: 'var(--font-comic)', fontSize: '1.35rem', lineHeight: 1.4, fontWeight: 700 }}>
          “IEEE is <span style={{ textDecoration: 'line-through', color: '#888' }}>not merely a research organization</span>.<br/>
          It is an <strong>ecosystem of engineering</strong> where ideas are explored, technologies are built, leaders are developed, and <strong>success stories are written</strong>.”
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '2rem', color: '#ff334b' }}>
          So, What Will YOUR IEEE Story Be?
        </h2>
        <div>
          <button 
            onClick={triggerGrandConfetti}
            className="sketch-btn pop-pulse" 
            style={{ fontSize: '1.25rem', padding: '10px 28px', background: '#ff5e97', color: '#fff' }}
          >
            🚀 JOIN IEEE TODAY & BUILD THE FUTURE!
          </button>
        </div>
      </div>

      <div style={{ fontSize: '1.05rem', fontFamily: 'var(--font-sketch)', fontWeight: 'bold', color: '#333' }}>
        Join IEEE. • Build something. • Solve something. • Lead something. • <span style={{ color: '#ff334b' }}>Change the world. 🌍</span>
      </div>
    </div>
  );
};

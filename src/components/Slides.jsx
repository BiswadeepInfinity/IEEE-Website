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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
        <div className="sketch-badge" style={{ background: '#ffdf40', fontSize: '0.85rem' }}>
          ⭐ IEEE Orientation ⭐
        </div>
        <div className="sketch-badge" style={{ background: '#ff5e97', color: '#fff', fontSize: '0.85rem' }}>
          ⚡ XP: <strong>{xp} pts</strong>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.5rem', color: '#1e1b18', lineHeight: 1.15 }}>
          IEEE: <span style={{ color: '#ff334b' }}>Engineer Your Future</span> 🚀
        </h1>
        <h3 className="mobile-h3" style={{ fontFamily: 'var(--font-sketch)', fontSize: '1.3rem', color: '#3ba4ff', marginTop: '2px' }}>
          From Engineering Student to Entrepreneur
        </h3>
      </div>

      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '12px', alignItems: 'stretch' }}>
        <div className="sketch-box sketch-box-yellow" style={{ padding: '14px', position: 'relative' }}>
          <div className="tape-top"></div>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '6px' }}>
            <Sparkles color="#ff7828" size={20} />
            <h2 className="mobile-h2" style={{ fontFamily: 'var(--font-cray)', fontSize: '1.35rem', color: '#ff7828' }}>
              Learn • Build • Innovate • Lead
            </h2>
          </div>
          <p className="mobile-text-sm" style={{ fontSize: '1.15rem', lineHeight: '1.4', fontFamily: 'var(--font-comic)', fontWeight: 600 }}>
            "Your engineering degree gives you <span className="doodle-underline" style={{ color: '#ff334b' }}>knowledge</span>.<br/>
            <strong>IEEE gives you an ecosystem</strong> to turn that knowledge into <span style={{ color: '#2ecc71', fontWeight: 800 }}>impact</span>."
          </p>

          <div style={{
            marginTop: '10px',
            background: '#fff',
            border: '2px dashed #1e1b18',
            borderRadius: '10px',
            padding: '6px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '1.4rem' }}>🤖</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#333' }}>{mascotMessage}</span>
          </div>
        </div>

        <div className="sketch-box sketch-box-blue" style={{ padding: '12px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#444' }}>
              🕹️ Level Progress:
            </span>
            <span className="sketch-badge" style={{ background: '#fff', fontSize: '0.72rem' }}>
              Stage {level + 1}/5
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', margin: '6px 0', flexWrap: 'wrap' }}>
            {stages.map((st, i) => (
              <button
                key={i}
                onClick={() => handleLevelUp(i)}
                className="sketch-btn"
                style={{
                  padding: '4px 8px',
                  fontSize: '0.75rem',
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
            padding: '10px',
            border: '2px solid #1e1b18',
            borderRadius: '12px',
            boxShadow: '2px 2px 0px #1e1b18'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.2rem' }}>
                {stages[level].title}
              </h3>
              <span className="sketch-badge" style={{ background: '#fff', fontSize: '0.7rem' }}>
                {stages[level].badge}
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, marginTop: '2px' }}>{stages[level].desc}</p>
          </div>
        </div>
      </div>

      <div className="mobile-scroll-x" style={{
        background: '#fff',
        border: '2.5px solid #1e1b18',
        borderRadius: '10px',
        padding: '6px 10px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '6px',
        boxShadow: '2px 2px 0px #1e1b18'
      }}>
        {stages.map((s, idx) => (
          <React.Fragment key={idx}>
            <span
              onClick={() => handleLevelUp(idx)}
              style={{
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer',
                color: level === idx ? '#ff334b' : '#555',
                whiteSpace: 'nowrap'
              }}
            >
              {s.title}
            </span>
            {idx < stages.length - 1 && <ArrowRight size={14} />}
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
    { title: "👨‍💻 Developer", desc: "Architecting codebases, apps & AI backends.", action: "Wrote 500 lines of modular code.", tag: "Code Master" },
    { title: "🔬 Researcher", desc: "Pushing the frontiers of knowledge & science.", action: "Synthesized new model in IEEE Xplore.", tag: "Deep Thinker" },
    { title: "💡 Innovator", desc: "Connecting distinct ideas into smarter tools.", action: "Patented a drone navigation module.", tag: "Idea Forge" },
    { title: "🚀 Entrepreneur", desc: "Turning solutions into sustainable enterprises.", action: "Raised seed capital & hired team.", tag: "Venture Maker" },
    { title: "🧠 Tech Leader", desc: "Guiding squads & directing tech vision.", action: "Deployed smart city sensor grid.", tag: "Strategic Mind" },
    { title: "🌍 Problem Solver", desc: "Tackling energy, health & world crises.", action: "Delivered solar units to villages.", tag: "Impact Driven" },
  ];

  const problems = [
    "⚡ EV Battery Thermal Degradation",
    "🩺 Early Cancer Detection via Edge AI",
    "🌾 Autonomous Drone Crop Pest Analysis",
    "🔐 Post-Quantum Secure Financial Protocols"
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b' }}>Slide 02 • Mindset</div>
          <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
            Why Engineering? <span style={{ color: '#ff7828' }}>Why Not Entrepreneurship?</span>
          </h1>
        </div>
      </div>

      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="sketch-box" style={{ padding: '12px' }}>
          <h4 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.1rem', marginBottom: '6px', color: '#3ba4ff' }}>
            ⚡ 6 Avatars (Click to activate):
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
            {roles.map((r, i) => (
              <div
                key={i}
                onClick={() => setSelectedRole(i)}
                style={{
                  background: selectedRole === i ? '#ffdf40' : '#fffdf7',
                  border: selectedRole === i ? '2.5px solid #1e1b18' : '1.5px solid #888',
                  borderRadius: '8px',
                  padding: '6px 2px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}
              >
                {r.title}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '8px', background: '#e8f5ff', padding: '8px 10px', borderRadius: '8px', border: '1.5px dashed #3ba4ff', fontSize: '0.85rem' }}>
            <div><strong>Mission: </strong>{roles[selectedRole].desc}</div>
            <div style={{ marginTop: '2px', color: '#ff334b', fontWeight: 'bold' }}>
              🎯 Live: {roles[selectedRole].action}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div 
            onClick={() => setSwitchedMindset(!switchedMindset)}
            className={`sketch-box ${switchedMindset ? 'sketch-box-green' : 'sketch-box-pink'}`} 
            style={{ padding: '12px', cursor: 'pointer', textAlign: 'center' }}
          >
            <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>⚡ TAP CARD TO FLIP MINDSET ⚡</span>
            {!switchedMindset ? (
              <div style={{ marginTop: '4px' }}>
                <h3 style={{ color: '#ff334b', fontSize: '1.15rem', fontFamily: 'var(--font-sketch)', textDecoration: 'line-through' }}>
                  "Which company will hire me?" 🏢❌
                </h3>
                <p style={{ fontSize: '0.85rem' }}>Passive Job-Seeker mindset.</p>
              </div>
            ) : (
              <div style={{ marginTop: '4px' }}>
                <h2 style={{ color: '#2ecc71', fontSize: '1.3rem', fontFamily: 'var(--font-cray)' }}>
                  "Which problem can I solve?" 🌍🚀
                </h2>
                <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Proactive Creator mindset!</p>
              </div>
            )}
          </div>

          <div className="sketch-box sketch-box-yellow" style={{ padding: '10px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#ff7828' }}>
              💡 Pick a problem to solve:
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '4px' }}>
              {problems.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedProblem(p)}
                  style={{
                    padding: '3px 6px',
                    borderRadius: '5px',
                    background: selectedProblem === p ? '#fff' : 'transparent',
                    border: selectedProblem === p ? '1.5px solid #1e1b18' : '1px dashed transparent',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
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

      <div className="mobile-scroll-x" style={{ background: '#fff', border: '2px solid #1e1b18', borderRadius: '8px', padding: '6px', display: 'flex', justifyContent: 'space-around', fontSize: '0.8rem' }}>
        <span>📐 <strong>Engineering:</strong> Understand</span>
        <span>💡 <strong>Innovation:</strong> Create</span>
        <span>🚀 <strong>Entrepreneurship:</strong> Deploy</span>
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
      title: "Technical Workshops", 
      icon: "🎓", 
      badge: "Hands-on Mastery",
      color: "#fff8d6",
      desc: "Bootcamps in GenAI, IoT, VLSI Chip Design, Robotics, and Web3 architectures.",
      examples: ["AI Masterclass", "Arduino Lab", "Clean Code"],
      perk: "Build industry skills 2 years ahead of peers!"
    },
    { 
      id: 'research',
      title: "Research & Publications", 
      icon: "📚", 
      badge: "Academic Authority",
      color: "#e8f5ff",
      desc: "Access 5M+ peer-reviewed papers, patents, and standards on IEEE Xplore.",
      examples: ["IEEE Transactions", "Conferences", "Patents"],
      perk: "Publish papers and get indexed globally!"
    },
    { 
      id: 'conferences',
      title: "Global Networking", 
      icon: "🌐", 
      badge: "Global Community",
      color: "#f4ecff",
      desc: "Connect with 420,000+ engineers and keynote scientists across 160 nations.",
      examples: ["Region 10 Summit", "Tech Congress", "Alumni Mixers"],
      perk: "Find global co-founders & internship leads."
    },
    { 
      id: 'competitions',
      title: "Hackathons & Contests", 
      icon: "🏆", 
      badge: "Arena Battle",
      color: "#e6fcf2",
      desc: "IEEEXtreme 24h programming battle, Robotics Cups, and hardware challenges.",
      examples: ["IEEEXtreme 24H", "Micromouse", "Pitch Cup"],
      perk: "Win international ranking proofs!"
    },
    { 
      id: 'leadership',
      title: "Leadership & Startups", 
      icon: "🚀", 
      badge: "Executive Mindset",
      color: "#ffe8f2",
      desc: "Lead branches, manage real budgets, pitch sponsors, and launch startup ventures.",
      examples: ["Student Chair", "Lead Organizer", "Incubator"],
      perk: "Cultivate real-world CEO competencies."
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
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#e8f5ff', color: '#3ba4ff' }}>Slide 03 • Global Hub</div>
          <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
            What Exactly is <span style={{ color: '#3ba4ff' }}>IEEE</span>?
          </h1>
        </div>
        <div className="sketch-badge" style={{ background: '#fff', fontSize: '0.8rem' }}>
          🌟 Explored: {completedQuests.length}/5
        </div>
      </div>

      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div className="sketch-box sketch-box-yellow" style={{ padding: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {items.map((item, idx) => {
                const isSelected = activeTab === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => handleSelectTab(idx)}
                    style={{
                      background: isSelected ? '#3ba4ff' : '#fff',
                      color: isSelected ? '#fff' : '#1e1b18',
                      padding: '6px 10px',
                      borderRadius: '8px',
                      border: '2px solid #1e1b18',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem'
                    }}
                  >
                    <span>{item.icon} {item.title}</span>
                    {completedQuests.includes(idx) && <span>✓</span>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="sketch-box sketch-box-pink" style={{ padding: '8px 10px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>📊 Poll: What excites you most?</span>
            <div style={{ display: 'flex', gap: '4px', marginTop: '4px', flexWrap: 'wrap' }}>
              {["🛠️ Hardware", "💻 Coding", "🚀 Startup", "🔬 Research"].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleVote(opt)}
                  className="sketch-btn"
                  style={{ padding: '3px 6px', fontSize: '0.72rem', background: pollVote === opt ? '#ffdf40' : '#fff' }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div 
            className="sketch-box" 
            style={{ 
              background: items[activeTab].color, 
              padding: '12px',
              minHeight: '140px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.25rem' }}>
                {items[activeTab].icon} {items[activeTab].title}
              </h3>
              <span className="sketch-badge" style={{ background: '#fff', fontSize: '0.7rem' }}>
                {items[activeTab].badge}
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.3', marginTop: '4px' }}>
              {items[activeTab].desc}
            </p>
            <div style={{ marginTop: '6px', background: '#fff', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold' }}>
              🎁 {items[activeTab].perk}
            </div>
          </div>

          <div className="sketch-box sketch-box-yellow" style={{ padding: '8px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-sketch)', fontSize: '0.95rem', fontWeight: 800 }}>
              “Your IEEE Student Branch is your <span className="doodle-underline" style={{ color: '#ff334b' }}>entry point</span> into a global ecosystem.”
            </p>
          </div>
        </div>
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
      fact: "Electricity & Telegraph era",
      scientists: [
        { 
          name: "Nikola Tesla", 
          role: "AC Power Pioneer", 
          img: "/scientists/tesla.jpg", 
          achievement: "AIEE Vice President (1892)",
          ieeeContribution: "Delivered his revolutionary lecture on 'A New System of Alternating Current Motors and Transformers' at AIEE in May 1888. Won IEEE Edison Medal in 1916.",
          coreInventions: ["Polyphase AC Grid", "Tesla Coil", "Wireless Radio", "Induction Motor"],
          quote: "“The present is theirs; the future is mine.”"
        },
        { 
          name: "Thomas Edison", 
          role: "Lightbulb & DC Icon", 
          img: "/scientists/edison.jpg", 
          achievement: "AIEE Co-founder",
          ieeeContribution: "Co-founded AIEE in May 1884. The prestigious IEEE Edison Medal—highest award in electrical engineering—was created in his honor in 1904.",
          coreInventions: ["Incandescent Bulb", "DC Power Station", "Phonograph"],
          quote: "“Genius is 1% inspiration, 99% perspiration.”"
        },
        { 
          name: "Alexander Graham Bell", 
          role: "Telephone Pioneer", 
          img: "/scientists/bell.jpg", 
          achievement: "AIEE President (1891)",
          ieeeContribution: "Served as 6th President of AIEE (1891–1892). Advanced telecommunications engineering & standards.",
          coreInventions: ["Acoustic Telephone (1876)", "Photophone", "Metal Detector"],
          quote: "“Preparation is the key to success.”"
        },
      ]
    },
    { year: "1912", name: "IRE Founded", desc: "Institute of Radio Engineers born with wireless & radio wave revolution.", color: "#ffe8f2", icon: "📻", fact: "Radar & Radio era", scientists: null },
    { year: "1963", name: "IEEE Formed", desc: "AIEE and IRE merged to create the world's largest technical organization.", color: "#e8f5ff", icon: "⚡", fact: "Merged into titan", scientists: null },
    { year: "Today", name: "Global Ecosystem", desc: "420,000+ members defining WiFi 802.11, Ethernet & Ethical AI.", color: "#e6fcf2", icon: "🌐", fact: "Global computing standards", scientists: null },
    { year: "Tomorrow", name: "Your Chapter", desc: "The next generation building quantum tech, clean energy & robotics.", color: "#f4ecff", icon: "🚀", fact: "Written by you!", scientists: null },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828' }}>Slide 04 • History</div>
          <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
            From 1884 to the Future ⏳
          </h1>
        </div>
      </div>

      <div className="mobile-scroll-x" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
        {timeline.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setTimeStep(idx)}
            className="sketch-box"
            style={{
              padding: '6px 4px',
              textAlign: 'center',
              cursor: 'pointer',
              background: timeStep === idx ? '#ffdf40' : item.color,
              border: timeStep === idx ? '3px solid #1e1b18' : '1.5px solid #555',
              fontSize: '0.8rem',
              minWidth: '70px'
            }}
          >
            <div style={{ fontSize: '1rem' }}>{item.icon}</div>
            <div style={{ fontFamily: 'var(--font-cray)', fontWeight: 'bold' }}>{item.year}</div>
          </div>
        ))}
      </div>

      <div className="sketch-box sketch-box-yellow" style={{ padding: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.35rem', color: '#1e1b18' }}>
            {timeline[timeStep].icon} {timeline[timeStep].year} — {timeline[timeStep].name}
          </h2>
          <span className="sketch-badge" style={{ background: '#ff334b', color: '#fff', fontSize: '0.7rem' }}>
            {timeline[timeStep].fact}
          </span>
        </div>
        <p style={{ fontSize: '0.95rem', marginTop: '4px', lineHeight: '1.35' }}>
          {timeline[timeStep].desc}
        </p>

        {timeline[timeStep].scientists && (
          <div style={{ marginTop: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#ff7828' }}>
              ⚡ Founding Minds (Click for Bio):
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', marginTop: '4px' }}>
              {timeline[timeStep].scientists.map((s, i) => (
                <div
                  key={i}
                  onClick={() => setActiveScientist(s)}
                  style={{
                    background: '#fff',
                    border: '2px solid #1e1b18',
                    borderRadius: '8px',
                    padding: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={s.img}
                    alt={s.name}
                    style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1.5px solid #1e1b18', objectFit: 'cover' }}
                  />
                  <div style={{ fontWeight: 800, fontSize: '0.75rem', marginTop: '2px' }}>{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {activeScientist && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(30, 27, 24, 0.85)', zIndex: 3000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px'
        }}>
          <div className="sketch-box sketch-box-yellow" style={{ width: '95%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto', padding: '16px', position: 'relative' }}>
            <button
              onClick={() => setActiveScientist(null)}
              style={{ position: 'absolute', top: '10px', right: '10px', background: '#ff334b', color: 'white', border: '1.5px solid #1e1b18', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer' }}
            >
              ✕
            </button>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
              <img src={activeScientist.img} alt={activeScientist.name} style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid #1e1b18', objectFit: 'cover' }} />
              <div>
                <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.4rem' }}>{activeScientist.name}</h3>
                <div style={{ fontSize: '0.8rem', color: '#ff334b', fontWeight: 'bold' }}>{activeScientist.achievement}</div>
              </div>
            </div>
            <div style={{ background: '#fff', padding: '8px', borderRadius: '8px', border: '1.5px solid #1e1b18', fontSize: '0.85rem' }}>
              <strong>IEEE Contribution:</strong> {activeScientist.ieeeContribution}
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
  const [activeNode, setActiveNode] = useState({ title: "Research 🔬", color: "#ff5e97", info: "Unlocking scientific boundaries & original discoveries through academic inquiry.", stat: "5M+ papers" });
  
  const nodes = [
    { title: "Research 🔬", color: "#ff5e97", info: "Unlocking scientific boundaries & discoveries through academic inquiry.", stat: "5M+ papers" },
    { title: "Publications 📚", color: "#3ba4ff", info: "Publishing findings in top-tier peer-reviewed IEEE journals.", stat: "200+ Journals" },
    { title: "Education 🎓", color: "#2ecc71", info: "Skill development, webinars & hands-on laboratory workshops.", stat: "1,000+ Seminars" },
    { title: "Networking 🌐", color: "#ffdf40", info: "Connecting with 420,000+ peers & industry leaders worldwide.", stat: "160+ Countries" },
    { title: "Competitions 🏆", color: "#ff7828", info: "IEEEXtreme 24h coding battles & robotics challenges.", stat: "10K+ Competitors" },
    { title: "Projects 🛠️", color: "#9b59b6", info: "Building real hardware & software prototypes that function.", stat: "Campus MVPs" },
    { title: "Leadership 🎤", color: "#ff334b", info: "Steering student branch boards & organizing summits.", stat: "Executive Roles" },
    { title: "Innovation 💡", color: "#00d2d3", info: "Transforming standard ideas into patents & commercial designs.", stat: "Patents & IP" },
    { title: "Startups 🚀", color: "#fdcb6e", info: "Creating sustainable startups from engineering prototypes.", stat: "Incubator Pathways" },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <div className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71' }}>Slide 05 • Hero Slide</div>
        <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
          IEEE is an <span style={{ color: '#ff334b' }}>Ecosystem</span>
        </h1>
      </div>

      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '10px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', background: '#fff', padding: '8px', borderRadius: '12px', border: '2.5px solid #1e1b18' }}>
          {nodes.map((n, i) => (
            <div
              key={i}
              onClick={() => setActiveNode(n)}
              style={{
                background: n.color,
                border: '1.5px solid #1e1b18',
                borderRadius: '8px',
                padding: '6px 2px',
                textAlign: 'center',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.78rem'
              }}
            >
              {n.title}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div className="sketch-box sketch-box-yellow" style={{ padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.25rem' }}>{activeNode.title}</h3>
              <span className="sketch-badge" style={{ background: '#fff', fontSize: '0.65rem' }}>{activeNode.stat}</span>
            </div>
            <p style={{ fontSize: '0.85rem', marginTop: '4px', lineHeight: '1.3' }}>{activeNode.info}</p>
          </div>
          <div className="sketch-box sketch-box-blue" style={{ padding: '8px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 800 }}>
            “IEEE connects the entire engineering journey.”
          </div>
        </div>
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
    { title: "Technical Workshops", icon: "🛠️", level: "Hands-on", bg: "#fff8d6", skillsGain: "+15 XP", preview: "Solder circuits & hook up ESP32 chips.", tools: ["ESP32", "Multimeter"] },
    { title: "Global Webinars", icon: "🌐", level: "Experts", bg: "#e8f5ff", skillsGain: "+10 XP", preview: "Q&A with IEEE Fellows & Silicon Valley leads.", tools: ["IEEE TV", "Q&A"] },
    { title: "Industry Sessions", icon: "🏢", level: "Case Studies", bg: "#ffe8f2", skillsGain: "+20 XP", preview: "Deep dives into Google, Tesla & NVIDIA architecture.", tools: ["Case Studies"] },
    { title: "Coding Bootcamps", icon: "💻", level: "Algorithms", bg: "#e6fcf2", skillsGain: "+25 XP", preview: "Master data structures, Git & APIs in sprints.", tools: ["Python", "Git"] },
    { title: "AI / ML Deep Dives", icon: "🧠", level: "Neural Nets", bg: "#f4ecff", skillsGain: "+30 XP", preview: "Train transformers & run Computer Vision models.", tools: ["PyTorch", "CUDA"] },
    { title: "Robotics Labs", icon: "🤖", level: "Sensors", bg: "#fff0f5", skillsGain: "+25 XP", preview: "Program PID controllers & autonomous line-followers.", tools: ["ROS 2", "LiDAR"] },
    { title: "Cybersecurity", icon: "🔐", level: "Defense", bg: "#e0f7fa", skillsGain: "+20 XP", preview: "Ethical hacking, packet analysis & cryptography.", tools: ["Wireshark", "Linux"] },
    { title: "Research Seminars", icon: "🔬", level: "Papers", bg: "#fffde7", skillsGain: "+20 XP", preview: "Read IEEE transactions & write LaTeX papers.", tools: ["Overleaf", "Xplore"] },
  ];

  const handleEnroll = (idx) => {
    setSelectedTopic(idx);
    if (!enrolledList.includes(idx)) {
      setEnrolledList([...enrolledList, idx]);
      setSkillMeter(prev => Math.min(100, prev + 12));
      confetti({ particleCount: 30, spread: 40, origin: { y: 0.7 } });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
        <div>
          <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828' }}>Slide 06 • Learning</div>
          <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
            Learn <span style={{ color: '#ff334b' }}>Beyond</span> Classroom 📚
          </h1>
        </div>
        <div className="sketch-box sketch-box-yellow" style={{ padding: '3px 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800 }}>⚡ Readiness:</span>
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#ff334b' }}>{skillMeter}%</span>
        </div>
      </div>

      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '10px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
          {topics.map((t, idx) => {
            const isSelected = selectedTopic === idx;
            const isEnrolled = enrolledList.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => handleEnroll(idx)}
                className="sketch-box"
                style={{
                  padding: '6px 2px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: isSelected ? '#ffdf40' : (isEnrolled ? t.bg : '#f7f2e4'),
                  border: isSelected ? '2.5px solid #1e1b18' : '1.5px solid #888',
                  fontSize: '0.72rem'
                }}
              >
                <div>{t.icon}</div>
                <div style={{ fontWeight: 'bold', lineHeight: 1.1 }}>{t.title}</div>
              </div>
            );
          })}
        </div>

        <div className="sketch-box" style={{ background: topics[selectedTopic].bg, padding: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.15rem' }}>
              {topics[selectedTopic].icon} {topics[selectedTopic].title}
            </h3>
            <span className="sketch-badge" style={{ background: '#ff334b', color: '#fff', fontSize: '0.65rem' }}>
              {topics[selectedTopic].skillsGain}
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>{topics[selectedTopic].preview}</p>
        </div>
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
    { title: "1. Learn 📖", desc: "Grasp blueprints & architecture." },
    { title: "2. Experiment 🔬", desc: "Tinker with breadboards & code." },
    { title: "3. Build 🛠️", desc: "Construct a functional MVP." },
    { title: "4. Fail 💥", desc: "Learn from burned sensors & bugs." },
    { title: "5. Improve ⚡", desc: "Refactor, optimize & secure." },
    { title: "6. Impact 🚀", desc: "Deliver tool that solves problems." },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <div className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b' }}>Slide 07 • Builder Culture</div>
        <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
          Turn Knowledge Into <span style={{ color: '#2ecc71' }}>Projects</span> 🛠️
        </h1>
      </div>

      <div className="mobile-scroll-x" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px' }}>
        {loopSteps.map((step, idx) => (
          <div
            key={idx}
            onClick={() => setProjectStep(idx)}
            className="sketch-box"
            style={{
              padding: '6px 4px',
              textAlign: 'center',
              cursor: 'pointer',
              background: projectStep === idx ? '#ffdf40' : '#fff',
              border: projectStep === idx ? '2.5px solid #1e1b18' : '1.5px solid #888',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              minWidth: '70px'
            }}
          >
            {step.title}
          </div>
        ))}
      </div>

      <div className="sketch-box sketch-box-blue" style={{ padding: '12px' }}>
        <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.25rem' }}>{loopSteps[projectStep].title}</h3>
        <p style={{ fontSize: '0.9rem', marginTop: '2px' }}>{loopSteps[projectStep].desc}</p>
      </div>

      <div className="sketch-box sketch-box-pink" style={{ padding: '8px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 800 }}>
        “Your first project may not become a startup. But your first startup <span className="doodle-underline">begins with a project</span>.” 🚀
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
    { title: "1. Question 🤔", detail: "Curiosity strikes: 'Can solar cells reach 35% efficiency?'" },
    { title: "2. Research 📖", detail: "Deep dive into IEEE Xplore literature." },
    { title: "3. Experiment 🧪", detail: "Design simulations & hardware rigs." },
    { title: "4. Result 📊", detail: "Extract mathematical breakthroughs." },
    { title: "5. Paper 📝", detail: "Write peer-reviewed manuscripts." },
    { title: "6. Conference 🎤", detail: "Present to global professors." },
    { title: "7. Recognition 🏆", detail: "Earn citations & patents worldwide." }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <div className="sketch-badge" style={{ background: '#e8f5ff', color: '#3ba4ff' }}>Slide 08 • Research</div>
        <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
          Research: From <span style={{ color: '#ff334b' }}>Question</span> to Discovery 🔬
        </h1>
      </div>

      <div className="mobile-scroll-x" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className="sketch-btn"
            style={{ padding: '4px 6px', fontSize: '0.72rem', background: activeStep === idx ? '#3ba4ff' : '#fff', color: activeStep === idx ? '#fff' : '#1e1b18', minWidth: '75px' }}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="sketch-box sketch-box-blue" style={{ padding: '12px' }}>
        <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.25rem' }}>{steps[activeStep].title}</h3>
        <p style={{ fontSize: '0.9rem', marginTop: '2px' }}>{steps[activeStep].detail}</p>
      </div>

      <div className="sketch-box sketch-box-pink" style={{ padding: '8px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>
        “Research helps you discover <span className="doodle-underline">what could be possible</span>.” ✨
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
    { title: "1. Problem 🧩", desc: "High heat in EV charging batteries." },
    { title: "2. Research 🔬", desc: "Thermal dissipation modeling." },
    { title: "3. Innovation 💡", desc: "Adaptive pulsed-charge algorithm." },
    { title: "4. Prototype 🛠️", desc: "Benchtop fast charger demo." },
    { title: "5. Product 📦", desc: "Plug-and-play charging module." },
    { title: "6. Startup 🚀", desc: "Incorporate company & raise seed." },
    { title: "7. Impact 🌍", desc: "Saving megawatts of global energy." },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <div className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71' }}>Slide 09 • Tech Bridge</div>
        <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
          Research Paper to <span style={{ color: '#ff334b' }}>Solution</span> 🌉
        </h1>
      </div>

      <div className="mobile-scroll-x" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {pipeline.map((p, idx) => (
          <div
            key={idx}
            onClick={() => setPipelineStep(idx)}
            className="sketch-box"
            style={{
              padding: '6px 4px',
              textAlign: 'center',
              cursor: 'pointer',
              background: pipelineStep === idx ? '#ffdf40' : '#fff',
              border: pipelineStep === idx ? '2.5px solid #1e1b18' : '1.5px solid #888',
              fontSize: '0.72rem',
              minWidth: '75px'
            }}
          >
            {p.title}
          </div>
        ))}
      </div>

      <div className="sketch-box sketch-box-yellow" style={{ padding: '12px' }}>
        <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.25rem' }}>{pipeline[pipelineStep].title}</h3>
        <p style={{ fontSize: '0.9rem', marginTop: '2px' }}>{pipeline[pipelineStep].desc}</p>
      </div>

      <div className="sketch-box sketch-box-blue" style={{ padding: '8px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>
        “What if the paper you publish today becomes the company you build tomorrow?” 🚀
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
    { name: "IEEEXtreme 24H 💻", desc: "24-hour virtual competitive programming battle with 10,000+ top coders globally." },
    { name: "Robotics Challenges 🤖", desc: "Autonomous bots racing and AI vision obstacle arena tracks." },
    { name: "Hackathons 💡", desc: "Rapid 36-hour prototyping sprints turning raw ideas into apps." },
    { name: "Design Cups 📐", desc: "Hardware circuit design, PCB layouts & antenna engineering." },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828' }}>Slide 10 • Competitions</div>
        <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
          Compete. Collaborate. <span style={{ color: '#ff334b' }}>Conquer.</span> 🏆
        </h1>
      </div>

      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {comps.map((c, i) => (
            <div
              key={i}
              onClick={() => setSelectedComp(i)}
              className="sketch-box"
              style={{
                padding: '8px',
                cursor: 'pointer',
                background: selectedComp === i ? '#ffdf40' : '#fff',
                fontSize: '0.85rem'
              }}
            >
              <strong>{c.name}</strong>
              <div style={{ fontSize: '0.75rem', marginTop: '2px' }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <div className="sketch-box sketch-box-green" style={{ padding: '10px' }}>
          <h4 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.1rem', color: '#2ecc71' }}>⚡ Superpowers Gained:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginTop: '4px', fontSize: '0.75rem' }}>
            <span className="sketch-badge">🎯 Problem Solving</span>
            <span className="sketch-badge">🤝 Teamwork</span>
            <span className="sketch-badge">⏱️ Time Mgmt</span>
            <span className="sketch-badge">🚀 Resilience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 11: Build Your Network Before You Need It
// ==========================================
export const Slide11 = () => {
  const [selectedPin, setSelectedPin] = useState("Entrepreneurs 🚀");
  const connections = [
    { role: "Seniors & Mentors 🎓", info: "Guidance on interviews & skipping traps." },
    { role: "Alumni Network 💼", info: "Referrals into Google, Apple, Intel & Tesla." },
    { role: "Professors 🔬", info: "Access to lab grants & recommendations." },
    { role: "Industry Pros 👔", info: "Insights on in-demand industry skills." },
    { role: "Entrepreneurs 🚀", info: "Angel investment & startup mentorship." },
    { role: "Global Peers 🌍", info: "Co-founders across 160 countries." },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <div className="sketch-badge" style={{ background: '#ffe8f2', color: '#ff334b' }}>Slide 11 • Network</div>
        <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
          Build Your Network <span style={{ color: '#3ba4ff' }}>Early</span> 🌐
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
        {connections.map((c, i) => (
          <div
            key={i}
            onClick={() => setSelectedPin(c.role)}
            className="sketch-box"
            style={{
              padding: '6px',
              cursor: 'pointer',
              background: selectedPin === c.role ? '#ffdf40' : '#fffdf7',
              fontSize: '0.75rem'
            }}
          >
            <strong>{c.role}</strong>
            <div style={{ fontSize: '0.68rem', marginTop: '2px' }}>{c.info}</div>
          </div>
        ))}
      </div>

      <div className="sketch-box sketch-box-pink" style={{ padding: '8px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 800 }}>
        “The right connection introduces you to the <span className="doodle-underline">right co-founder</span>.” 🤝
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
    { title: "1. Participant 🙋‍♂️", responsibility: "Attending workshops & absorbing skills." },
    { title: "2. Volunteer 🤝", responsibility: "Supporting event logistics & registrations." },
    { title: "3. Coordinator 📋", responsibility: "Managing speaker hospitality & schedules." },
    { title: "4. Team Lead 🎯", responsibility: "Directing subcommittees & technical teams." },
    { title: "5. Branch Chair 👑", responsibility: "Setting vision, managing budgets & inspiring." },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <div className="sketch-badge" style={{ background: '#e6fcf2', color: '#2ecc71' }}>Slide 12 • Leadership</div>
        <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
          Leadership: Don't Just Participate. <span style={{ color: '#ff334b' }}>Lead.</span> 👑
        </h1>
      </div>

      <div className="mobile-scroll-x" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px' }}>
        {ladder.map((l, idx) => (
          <div
            key={idx}
            onClick={() => setLeaderLevel(idx)}
            className="sketch-box"
            style={{
              padding: '6px 4px',
              textAlign: 'center',
              cursor: 'pointer',
              background: leaderLevel === idx ? '#ffdf40' : '#fff',
              border: leaderLevel === idx ? '2.5px solid #1e1b18' : '1.5px solid #888',
              fontSize: '0.72rem',
              fontWeight: 'bold',
              minWidth: '70px'
            }}
          >
            {l.title}
          </div>
        ))}
      </div>

      <div className="sketch-box sketch-box-yellow" style={{ padding: '12px' }}>
        <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.2rem' }}>{ladder[leaderLevel].title}</h3>
        <p style={{ fontSize: '0.9rem', marginTop: '2px' }}>{ladder[leaderLevel].responsibility}</p>
      </div>

      <div className="sketch-box sketch-box-pink" style={{ padding: '8px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 800 }}>
        “Entrepreneurs don't wait for opportunities. <span className="doodle-underline">They create them</span>.” 🚀
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
      role: "IEEE Member → Startup Founder (Profoundis)",
      quote: "IEEE leadership & networking gave him the confidence to launch Profoundis (acquired by FullContact).",
      color: "#fff8d6"
    },
    {
      name: "Jensen Huang 👑",
      role: "Founder & CEO, NVIDIA (IEEE Medal of Honor 2026)",
      quote: "Recognized with IEEE Medal of Honor for visionary GPU computing & AI revolutions.",
      color: "#e8f5ff"
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <div className="sketch-badge" style={{ background: '#fff8d6', color: '#ff7828' }}>Slide 13 • Role Models</div>
        <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
          Success Stories: <span style={{ color: '#ff334b' }}>Real Impact</span> 🌟
        </h1>
      </div>

      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {stories.map((s, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedStory(idx)}
            className="sketch-box"
            style={{
              padding: '12px',
              cursor: 'pointer',
              background: s.color,
              border: selectedStory === idx ? '2.5px solid #1e1b18' : '1.5px solid #555'
            }}
          >
            <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.25rem' }}>{s.name}</h2>
            <div style={{ fontSize: '0.75rem', color: '#ff334b', fontWeight: 'bold' }}>{s.role}</div>
            <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>"{s.quote}"</p>
          </div>
        ))}
      </div>

      <div className="sketch-box sketch-box-green" style={{ padding: '8px', textAlign: 'center', fontSize: '0.85rem' }}>
        <strong>Technology + Vision + Leadership = Global Impact</strong>
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
    { year: "🟢 Y1: EXPLORE", theme: "Curiosity", color: "#e6fcf2", points: ["Join IEEE Student Branch", "Attend intro workshops", "Explore tech domains"] },
    { year: "🔵 Y2: BUILD", theme: "Prototypes", color: "#e8f5ff", points: ["Build hardware/software projects", "Join hackathon teams", "IEEEXtreme contest"] },
    { year: "🟠 Y3: RESEARCH", theme: "Publications", color: "#fff8d6", points: ["Research with professors", "Submit IEEE papers", "Present at conferences"] },
    { year: "🔴 Y4: LAUNCH", theme: "Ventures", color: "#ffe8f2", points: ["Lead Branch as Officer", "Turn prototypes into startups", "Premier placements"] }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <div className="sketch-badge" style={{ background: '#e8f5ff', color: '#3ba4ff' }}>Slide 14 • Roadmap</div>
        <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.1rem', marginTop: '2px' }}>
          Your 4-Year <span style={{ color: '#ff334b' }}>Journey</span> 🗺️
        </h1>
      </div>

      <div className="mobile-scroll-x" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px' }}>
        {years.map((y, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedYear(idx)}
            className="sketch-box"
            style={{
              padding: '6px 4px',
              textAlign: 'center',
              cursor: 'pointer',
              background: selectedYear === idx ? '#ffdf40' : y.color,
              border: selectedYear === idx ? '2.5px solid #1e1b18' : '1.5px solid #555',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              minWidth: '70px'
            }}
          >
            {y.year}
          </div>
        ))}
      </div>

      <div className="sketch-box" style={{ padding: '12px', background: years[selectedYear].color }}>
        <h3 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.25rem', marginBottom: '4px' }}>
          Milestones for {years[selectedYear].year}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {years[selectedYear].points.map((p, i) => (
            <div key={i} style={{ background: '#fff', padding: '4px 8px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>
              ⚡ {p}
            </div>
          ))}
        </div>
      </div>

      <div className="sketch-box sketch-box-yellow" style={{ padding: '8px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 800 }}>
        “4 years give you a degree. <span className="doodle-underline" style={{ color: '#ff334b' }}>What you do gives you direction</span>.” 🧭
      </div>
    </div>
  );
};

// ==========================================
// SLIDE 15: Grand Finale CTA
// ==========================================
export const Slide15 = () => {
  const triggerGrandConfetti = () => {
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center' }}>
      <div>
        <div className="sketch-badge" style={{ background: '#ffdf40', fontSize: '0.85rem' }}>
          ⭐ Grand Finale ⭐
        </div>
        <h1 className="mobile-h1" style={{ fontFamily: 'var(--font-cray)', fontSize: '2.3rem', color: '#1e1b18', marginTop: '2px' }}>
          Your Story <span style={{ color: '#ff334b' }}>Begins Today</span> ✍️
        </h1>
      </div>

      <div className="mobile-scroll-x" style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
        {["LEARN", "BUILD", "RESEARCH", "CONNECT", "LEAD", "INNOVATE"].map((w, idx) => (
          <span key={idx} className="sketch-badge" style={{ fontSize: '0.75rem', background: '#fff' }}>
            {w} ➔
          </span>
        ))}
        <span className="sketch-badge" style={{ fontSize: '0.8rem', background: '#ffdf40', color: '#ff334b', fontWeight: 800 }}>
          IMPACT 🌍
        </span>
      </div>

      <div className="sketch-box sketch-box-yellow" style={{ padding: '12px' }}>
        <p style={{ fontFamily: 'var(--font-comic)', fontSize: '1rem', lineHeight: 1.35, fontWeight: 700 }}>
          “IEEE is an <strong>ecosystem of engineering</strong> where ideas are explored, technologies are built, and <strong>success stories are written</strong>.”
        </p>
      </div>

      <div>
        <button 
          onClick={triggerGrandConfetti}
          className="sketch-btn pop-pulse" 
          style={{ fontSize: '1.05rem', padding: '8px 20px', background: '#ff5e97', color: '#fff' }}
        >
          🚀 JOIN IEEE TODAY!
        </button>
      </div>
    </div>
  );
};

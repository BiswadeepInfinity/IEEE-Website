import React from 'react';
import { Smartphone, RotateCw, Sparkles } from 'lucide-react';

export const RotateDevicePrompt = () => {
  return (
    <div className="rotate-device-overlay">
      <div 
        className="sketch-box sketch-box-yellow"
        style={{
          padding: '24px 20px',
          maxWidth: '340px',
          width: '90%',
          textAlign: 'center',
          boxShadow: '8px 8px 0px #1e1b18',
          border: '3.5px solid #1e1b18',
          position: 'relative'
        }}
      >
        <div className="tape-top"></div>

        {/* Animated Rotating Phone Icon */}
        <div style={{ position: 'relative', display: 'inline-block', margin: '14px 0 10px' }}>
          <div className="rotating-phone-icon">
            <Smartphone size={56} strokeWidth={2.2} color="#1e1b18" />
          </div>
          <div style={{ position: 'absolute', top: '-6px', right: '-10px' }}>
            <RotateCw size={24} color="#ff334b" className="spin-slow" />
          </div>
        </div>

        <div className="sketch-badge" style={{ background: '#3ba4ff', color: '#fff', fontSize: '0.82rem', marginBottom: '8px' }}>
          🎓 IEEE Orientation 2026
        </div>

        <h2 style={{ fontFamily: 'var(--font-cray)', fontSize: '1.6rem', color: '#1e1b18', lineHeight: 1.2 }}>
          Rotate Your Device 🔄
        </h2>

        <p style={{ fontFamily: 'var(--font-comic)', fontSize: '0.95rem', fontWeight: 600, color: '#333', marginTop: '8px', lineHeight: 1.35 }}>
          For the best interactive presentation experience, please <strong>turn your phone to landscape mode</strong> 📱✨
        </p>

        <div style={{
          marginTop: '14px',
          background: '#fff',
          padding: '8px 12px',
          borderRadius: '10px',
          border: '2px dashed #1e1b18',
          fontSize: '0.8rem',
          fontWeight: 700,
          color: '#ff7828'
        }}>
          💡 <em>Enables live doodling, scientist popups, and full slide animations!</em>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

export const DoodlerToolbar = ({ isDrawing, setIsDrawing, activeColor, setActiveColor, clearCanvas }) => {
  const colors = [
    { name: 'Black Pencil', color: '#1e1b18' },
    { name: 'Red Crayon', color: '#ff334b' },
    { name: 'Blue Ink', color: '#3ba4ff' },
    { name: 'Yellow Highlighter', color: '#ffd900' },
    { name: 'Green Marker', color: '#2ecc71' },
    { name: 'Purple Chalk', color: '#9b59b6' },
  ];

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: '#fffdf7',
      padding: '4px 10px',
      borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
      border: '2.5px solid #1e1b18',
      boxShadow: '3px 3px 0px #1e1b18',
    }}>
      <button
        onClick={() => setIsDrawing(!isDrawing)}
        className="sketch-btn"
        style={{
          padding: '5px 10px',
          fontSize: '0.85rem',
          background: isDrawing ? '#ff5e97' : '#ffdf40',
          color: isDrawing ? 'white' : '#1e1b18'
        }}
        title="Toggle Doodle & Sketch Mode on Slide"
      >
        <Pencil size={15} />
        {isDrawing ? 'Drawing ON ✏️' : 'Doodle ✏️'}
      </button>

      {isDrawing && (
        <>
          <div style={{ display: 'flex', gap: '5px' }}>
            {colors.map((c) => (
              <button
                key={c.color}
                onClick={() => setActiveColor(c.color)}
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: c.color,
                  border: activeColor === c.color ? '2.5px solid #1e1b18' : '1.5px solid #aaa',
                  transform: activeColor === c.color ? 'scale(1.25)' : 'scale(1)',
                  cursor: 'pointer',
                  transition: '0.1s transform'
                }}
                title={c.name}
              />
            ))}
          </div>
          <button
            onClick={clearCanvas}
            className="sketch-btn"
            style={{ padding: '4px 8px', fontSize: '0.8rem', background: '#ffe0e3' }}
            title="Erase all doodles"
          >
            <Trash2 size={14} /> Erase
          </button>
        </>
      )}
    </div>
  );
};

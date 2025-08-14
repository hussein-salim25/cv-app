import { useState } from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
  optional?: boolean;
}

export default function CollapsibleSection({ title, children, optional = false }: Props) {
  const [isOpen, setIsOpen] = useState(!optional); // Optional sections start collapsed

  return (
    <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #ddd' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          padding: '0.5rem 0',
          width: '100%',
          textAlign: 'left',
        }}
      >
        {isOpen ? '▾' : '▸'} {title}
      </button>

      {isOpen && (
        <div style={{ paddingLeft: '1rem', paddingBottom: '1rem' }}>
          {children}
        </div>
      )}
    </div>
  );
}

'use client';

export function PageBackground() {
  return (
    <>
      {/* Simple Tech Background for all pages */}
      <div 
        className="fixed inset-0 z-[-1]"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, hsl(240, 8%, 3%) 0%, hsl(240, 12%, 6%) 100%)
          `
        }}
      />
      
      {/* Subtle Grid */}
      <div 
        className="fixed inset-0 z-[-1] opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-drift 30s linear infinite'
        }}
      />

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes grid-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </>
  );
}

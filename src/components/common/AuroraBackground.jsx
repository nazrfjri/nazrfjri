const AuroraBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Primary bright cyan orb — top center */}
      <div
        className="aurora-orb-1 absolute -top-[20%] left-[20%] h-[800px] w-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, var(--aurora-1-start) 0%, var(--aurora-1-end) 40%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Deep navy/blue orb — right side */}
      <div
        className="aurora-orb-2 absolute right-[-10%] top-[30%] h-[700px] w-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, var(--aurora-2-start) 0%, var(--aurora-2-end) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Bright purple orb — bottom left */}
      <div
        className="aurora-orb-3 absolute bottom-[10%] left-[-10%] h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, var(--aurora-3-start) 0%, var(--aurora-3-end) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Sky blue/white orb — center bottom */}
      <div
        className="aurora-orb-4 absolute bottom-[-15%] left-[50%] h-[650px] w-[650px] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, var(--aurora-4-start) 0%, var(--aurora-4-end) 40%, transparent 70%)",
          filter: "blur(110px)",
        }}
      />

      {/* Noise texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
};

export default AuroraBackground;

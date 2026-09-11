const particles = [
  { top: "8%",  left: "12%", size: 3, color: "bg-cyan-400/60",   dur: "7s",  delay: "0s" },
  { top: "15%", left: "78%", size: 2, color: "bg-blue-400/50",   dur: "9s",  delay: "1s" },
  { top: "25%", left: "45%", size: 3, color: "bg-violet-400/40", dur: "6s",  delay: "2s" },
  { top: "35%", left: "8%",  size: 2, color: "bg-cyan-300/50",   dur: "8s",  delay: "0.5s" },
  { top: "42%", left: "88%", size: 4, color: "bg-blue-300/40",   dur: "10s", delay: "3s" },
  { top: "55%", left: "22%", size: 2, color: "bg-violet-300/50", dur: "7.5s",delay: "1.5s" },
  { top: "62%", left: "68%", size: 3, color: "bg-cyan-400/40",   dur: "6.5s",delay: "2.5s" },
  { top: "72%", left: "42%", size: 2, color: "bg-blue-400/60",   dur: "9.5s",delay: "0.8s" },
  { top: "78%", left: "90%", size: 3, color: "bg-violet-400/50", dur: "8s",  delay: "1.2s" },
  { top: "85%", left: "15%", size: 2, color: "bg-cyan-300/40",   dur: "11s", delay: "4s" },
  { top: "92%", left: "55%", size: 3, color: "bg-blue-300/50",   dur: "7s",  delay: "2.8s" },
  { top: "5%",  left: "55%", size: 2, color: "bg-violet-300/40", dur: "8.5s",delay: "3.5s" },
  { top: "48%", left: "5%",  size: 3, color: "bg-cyan-400/50",   dur: "6s",  delay: "1.8s" },
  { top: "30%", left: "92%", size: 2, color: "bg-blue-400/40",   dur: "10s", delay: "0.3s" },
  { top: "68%", left: "35%", size: 4, color: "bg-violet-400/30", dur: "9s",  delay: "2.2s" },
];

const FloatingParticles = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-40 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className={`particle-drift absolute rounded-full ${p.color}`}
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            "--duration": p.dur,
            "--delay": p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;

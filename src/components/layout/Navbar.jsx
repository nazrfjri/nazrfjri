import Container from "../ui/Container";

const Navbar = () => {
  return (
    <header
      className="
        fixed top-0 z-50
        w-full
        border-b border-slate-800
        bg-slate-950/70
        backdrop-blur-xl
      "
    >
      <Container className="flex h-20 items-center justify-between">
        <h1 className="text-xl font-bold text-white">
          nazrfjr
        </h1>

        <nav className="hidden gap-8 text-slate-300 md:flex">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
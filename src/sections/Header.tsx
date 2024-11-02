export const Header = () => {
  return <div className="flex justify-center items-center relative fixed top-3 w-full">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#" className="nav-item">home</a>
      <a href="#" className="nav-item">projects</a>
      <a href="#" className="nav-item">about</a>
      <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">contact</a>
    </nav>
  </div>;
};

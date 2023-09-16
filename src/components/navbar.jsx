function Navbar() {
  return (
    <nav className="flex bg-blue-900 px-5 items-center">
      <div className="container flex items-center justify-between">
        <a href="#" className="text-white text-2xl font-bold">
          Rescue Rangers
        </a>

        <ul className="flex space-x-6 text-2xl">
          <li>
            <a href="#" className="text-white hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-500">
              Resources
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

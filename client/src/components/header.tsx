import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">ResuMateAI</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="#features"
                className="hover:text-blue-600 transition-colors"
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:text-blue-600 transition-colors">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:text-blue-600 transition-colors">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="hover:text-blue-600 transition-colors"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

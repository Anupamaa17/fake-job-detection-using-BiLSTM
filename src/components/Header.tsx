import { Link, useLocation } from "react-router-dom";
import { Shield } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-90 transition-opacity">
          <Shield className="h-6 w-6" />
          <span>Fake Job Detection System</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-secondary ${
              isActive("/") ? "text-secondary" : "text-primary-foreground/90"
            }`}
          >
            Home
          </Link>
          <Link
            to="/detect"
            className={`text-sm font-medium transition-colors hover:text-secondary ${
              isActive("/detect") ? "text-secondary" : "text-primary-foreground/90"
            }`}
          >
            Detect
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors hover:text-secondary ${
              isActive("/about") ? "text-secondary" : "text-primary-foreground/90"
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

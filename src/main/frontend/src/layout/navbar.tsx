// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="border-b">
      <div className="mx-auto px-4 py-3 container">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="mr-6 font-bold text-xl">
              VRRTTS
            </Link>
            <div className="flex space-x-1">
              <Link to="/">
                <Button variant={pathname === '/' ? 'default' : 'ghost'} className="text-sm">
                  Home
                </Button>
              </Link>
              <Link to="/hook-form">
                <Button
                  variant={pathname === '/hook-form' ? 'default' : 'ghost'}
                  className="text-sm"
                >
                  Hook Form Example
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <Button size="sm" variant="outline" asChild>
              <a
                href="https://github.com/designly1/vrrtts"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

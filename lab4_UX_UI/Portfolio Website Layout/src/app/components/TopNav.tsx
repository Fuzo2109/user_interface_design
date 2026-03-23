import { Link, useLocation } from 'react-router';

export function TopNav() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-12 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#37474F]">
            Portfolio
          </Link>
          <ul className="flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-[#00BCD4] font-semibold'
                      : 'text-[#37474F] hover:text-[#00BCD4]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

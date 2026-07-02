import { useState, useMemo, useCallback, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = useMemo(
    () => [
      { name: t("nav.home"), path: "/" },
      { name: t("nav.projects"), path: "/projects" },
      { name: t("nav.contact"), path: "/contact" },
    ],
    [t]
  );

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-display font-bold text-xl text-gray-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200"
          >
            MEA
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-brand-600 dark:text-brand-400 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={handleMenuToggle}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleMenuClose}
                className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default memo(Header);

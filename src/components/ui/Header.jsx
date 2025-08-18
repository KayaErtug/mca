import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';

const Header = ({ isAuthenticated = false, user = null, onAuthAction }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', path: '/landing-page', authRequired: false },
    { label: 'Join Community', path: '/user-registration', authRequired: false },
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAuthAction = (action) => {
    if (onAuthAction) {
      onAuthAction(action);
    }
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-crypto ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm crypto-border border-b' : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <Link 
            to="/landing-page" 
            className="flex items-center space-x-2 transition-crypto hover:opacity-80"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MC</span>
            </div>
            <span className="text-xl font-bold text-foreground">MCA Platform</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`text-sm font-medium transition-crypto hover:text-primary ${
                  isActivePath(item?.path) 
                    ? 'text-primary' :'text-muted-foreground'
                }`}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-2 bg-card rounded-lg">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-primary-foreground">
                      {user?.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    {user?.name || 'User'}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleAuthAction('logout')}
                  iconName="LogOut"
                  iconSize={16}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleAuthAction('login')}
                >
                  Sign In
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleAuthAction('register')}
                  iconName="UserPlus"
                  iconSize={16}
                >
                  Join Now
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-crypto"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={20} 
              color="currentColor" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigationItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-crypto ${
                      isActivePath(item?.path)
                        ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item?.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Auth Actions */}
              <div className="pt-4 border-t border-border space-y-3">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 px-3 py-2 bg-card rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary-foreground">
                          {user?.name?.charAt(0) || 'U'}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {user?.name || 'User'}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {user?.email || 'user@example.com'}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      fullWidth
                      onClick={() => handleAuthAction('logout')}
                      iconName="LogOut"
                      iconSize={16}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      fullWidth
                      onClick={() => handleAuthAction('login')}
                    >
                      Sign In
                    </Button>
                    <Button
                      variant="default"
                      fullWidth
                      onClick={() => handleAuthAction('register')}
                      iconName="UserPlus"
                      iconSize={16}
                    >
                      Join Now
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ValuePropositions from './components/ValuePropositions';
import TokenStats from './components/TokenStats';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = () => {
      const authData = localStorage.getItem('mcaAuth');
      if (authData) {
        try {
          const parsedAuth = JSON.parse(authData);
          if (parsedAuth?.isAuthenticated && parsedAuth?.user) {
            setIsAuthenticated(true);
            setUser(parsedAuth?.user);
            // Redirect authenticated users to dashboard
            navigate('/dashboard');
            return;
          }
        } catch (error) {
          console.error('Error parsing auth data:', error);
          localStorage.removeItem('mcaAuth');
        }
      }
    };

    checkAuthStatus();
  }, [navigate]);

  // Handle authentication actions from header
  const handleAuthAction = (action) => {
    switch (action) {
      case 'login': navigate('/login');
        break;
      case 'register': navigate('/user-registration');
        break;
      case 'logout': localStorage.removeItem('mcaAuth');
        setIsAuthenticated(false);
        setUser(null);
        window.location?.reload();
        break;
      default:
        break;
    }
  };

  // Don't render landing page content if user is authenticated (will redirect)
  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
          </div>
          <p className="text-muted-foreground">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header
        isAuthenticated={isAuthenticated}
        user={user}
        onAuthAction={handleAuthAction}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection
          isAuthenticated={isAuthenticated}
          onAuthAction={handleAuthAction}
        />

        {/* Value Propositions */}
        <ValuePropositions />

        {/* Token Statistics */}
        <TokenStats />

        {/* Social Proof */}
        <SocialProof />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
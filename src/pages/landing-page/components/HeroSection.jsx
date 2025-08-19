import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ isAuthenticated, onAuthAction }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to March 6, 2026
  useEffect(() => {
    const targetDate = new Date('2026-03-06T00:00:00Z');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/user-registration');
    }
  };

  const handleLearnMore = () => {
    onAuthAction('login');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_50%)] opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 text-center">
        {/* Main Hero Content */}
        <div className="space-y-8">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center crypto-glow">
              <span className="text-2xl font-bold text-primary-foreground">MC</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Maris Coin
              </h1>
              <p className="text-lg text-primary font-medium">The Future of Digital Assets</p>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground leading-tight">
              Join the Revolution Before Launch
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of the exclusive community and earn rewards while we prepare for the biggest token launch of 2026. 
              Early adopters get premium benefits and exclusive NFT collections.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 crypto-border max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-6">Launch Countdown</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Days', value: timeLeft?.days },
                { label: 'Hours', value: timeLeft?.hours },
                { label: 'Minutes', value: timeLeft?.minutes },
                { label: 'Seconds', value: timeLeft?.seconds }
              ]?.map((item, index) => (
                <div key={index} className="bg-background/80 rounded-xl p-4 crypto-border">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {item?.value?.toString()?.padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {item?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              variant="default"
              size="lg"
              onClick={handleGetStarted}
              iconName="Rocket"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              {isAuthenticated ? 'Go to Dashboard' : 'Join Community Now'}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleLearnMore}
              iconName="Info"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 opacity-80">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} color="var(--color-success)" />
              <span className="text-sm text-muted-foreground">Blockchain Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} color="var(--color-primary)" />
              <span className="text-sm text-muted-foreground">2,000+ Early Adopters</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} color="var(--color-warning)" />
              <span className="text-sm text-muted-foreground">Verified Platform</span>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden z-20">
        <Button
          variant="default"
          size="icon"
          onClick={handleGetStarted}
          className="w-14 h-14 rounded-full crypto-glow shadow-xl"
        >
          <Icon name="Plus" size={24} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    platform: [
      { label: 'About Maris Coin', href: '#about' },
      { label: 'Token Information', href: '#token' },
      { label: 'NFT Collections', href: '#nft' },
      { label: 'Roadmap', href: '#roadmap' }
    ],
    community: [
      { label: 'Join Community', href: '/user-registration' },
      { label: 'Referral Program', href: '#referral' },
      { label: 'Rewards System', href: '#rewards' },
      { label: 'Community Guidelines', href: '#guidelines' }
    ],
    support: [
      { label: 'Help Center', href: '#help' },
      { label: 'Contact Support', href: '#contact' },
      { label: 'Documentation', href: '#docs' },
      { label: 'API Reference', href: '#api' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Disclaimer', href: '#disclaimer' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', href: '#twitter' },
    { name: 'Discord', icon: 'MessageCircle', href: '#discord' },
    { name: 'Telegram', icon: 'Send', href: '#telegram' },
    { name: 'GitHub', icon: 'Github', href: '#github' },
    { name: 'LinkedIn', icon: 'Linkedin', href: '#linkedin' }
  ];

  const trustSignals = [
    { name: 'SSL Secured', icon: 'Lock' },
    { name: 'Blockchain Verified', icon: 'Shield' },
    { name: 'Audited Smart Contracts', icon: 'CheckCircle' },
    { name: 'GDPR Compliant', icon: 'FileText' }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/landing-page" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">MC</span>
                </div>
                <span className="text-xl font-bold text-foreground">Maris Coin</span>
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join the future of digital assets with Maris Coin. Our platform connects crypto enthusiasts, 
                NFT collectors, and early adopters in a secure, rewarding ecosystem.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.href}
                    className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-crypto crypto-border"
                    aria-label={social?.name}
                  >
                    <Icon name={social?.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Platform Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Platform</h3>
                <ul className="space-y-3">
                  {footerLinks?.platform?.map((link) => (
                    <li key={link?.label}>
                      <a
                        href={link?.href}
                        className="text-muted-foreground hover:text-primary transition-crypto text-sm"
                      >
                        {link?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Community</h3>
                <ul className="space-y-3">
                  {footerLinks?.community?.map((link) => (
                    <li key={link?.label}>
                      {link?.href?.startsWith('/') ? (
                        <Link
                          to={link?.href}
                          className="text-muted-foreground hover:text-primary transition-crypto text-sm"
                        >
                          {link?.label}
                        </Link>
                      ) : (
                        <a
                          href={link?.href}
                          className="text-muted-foreground hover:text-primary transition-crypto text-sm"
                        >
                          {link?.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks?.support?.map((link) => (
                    <li key={link?.label}>
                      <a
                        href={link?.href}
                        className="text-muted-foreground hover:text-primary transition-crypto text-sm"
                      >
                        {link?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks?.legal?.map((link) => (
                    <li key={link?.label}>
                      <a
                        href={link?.href}
                        className="text-muted-foreground hover:text-primary transition-crypto text-sm"
                      >
                        {link?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {trustSignals?.map((signal) => (
              <div key={signal?.name} className="flex items-center space-x-2">
                <Icon name={signal?.icon} size={16} color="var(--color-success)" />
                <span className="text-sm text-muted-foreground">{signal?.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Maris Coin Platform. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>Version 1.0.0</span>
                <span>•</span>
                <span>Last updated: August 2025</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="MapPin" size={14} />
              <span>Global Platform</span>
              <span>•</span>
              <Icon name="Clock" size={14} />
              <span>24/7 Available</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Disclaimer:</strong> This platform is for promotional and community engagement purposes only. 
            Maris Coin is not yet available for trading. All information is subject to change. 
            Please conduct your own research before making any investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
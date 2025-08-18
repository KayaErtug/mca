import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Crypto Investor",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: "The Maris Coin platform has exceeded my expectations. The referral system is transparent and the community is incredibly supportive. Can\'t wait for the official launch!",
      rating: 5,
      verified: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "NFT Collector",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: "Early access to exclusive NFT collections has been amazing. The quality and authenticity verification process gives me confidence in my investments.",
      rating: 5,
      verified: true
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Community Builder",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      content: "I\'ve earned substantial rewards through the referral program. The platform makes it easy to track progress and the support team is always helpful.",
      rating: 5,
      verified: true
    }
  ];

  const trustBadges = [
    {
      id: 1,
      name: "Blockchain Secured",
      icon: "Shield",
      description: "Military-grade encryption"
    },
    {
      id: 2,
      name: "Verified Platform",
      icon: "CheckCircle",
      description: "Audited smart contracts"
    },
    {
      id: 3,
      name: "Community Driven",
      icon: "Users",
      description: "10,000+ active members"
    },
    {
      id: 4,
      name: "24/7 Support",
      icon: "Headphones",
      description: "Round-the-clock assistance"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "var(--color-warning)" : "var(--color-muted)"}
        className={index < rating ? "fill-current" : ""}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join a growing community of crypto enthusiasts who trust Maris Coin platform 
            for their digital asset journey and investment opportunities.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial?.id}
              className="bg-card rounded-2xl p-6 crypto-border hover:crypto-glow transition-crypto"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial?.rating)}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial?.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {testimonial?.verified && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} color="white" />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Why Trust Maris Coin Platform?
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges?.map((badge) => (
              <div
                key={badge?.id}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-crypto">
                  <Icon name={badge?.icon} size={32} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{badge?.name}</h4>
                <p className="text-sm text-muted-foreground">{badge?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Stats */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} color="var(--color-warning)" className="fill-current" />
              <span className="text-foreground font-semibold">4.9/5 Rating</span>
              <span className="text-muted-foreground">(2,547 reviews)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} color="var(--color-primary)" />
              <span className="text-foreground font-semibold">12,547+</span>
              <span className="text-muted-foreground">Active Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={20} color="var(--color-accent)" />
              <span className="text-foreground font-semibold">50+</span>
              <span className="text-muted-foreground">Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
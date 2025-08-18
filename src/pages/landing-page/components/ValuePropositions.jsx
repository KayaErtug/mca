import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ValuePropositions = () => {
  const navigate = useNavigate();

  const propositions = [
    {
      id: 1,
      title: "Exclusive NFT Collections",
      description: "Access premium NFT collections before public release. Early community members get first pick of limited edition digital assets with proven rarity and value.",
      icon: "Image",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=400&h=300&fit=crop",
      features: [
        "Limited Edition Artwork",
        "Verified Authenticity",
        "Community Exclusive Access",
        "Future Value Potential"
      ],
      ctaText: "View Collection",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 2,
      title: "Referral Rewards System",
      description: "Earn points and exclusive benefits by inviting friends. Our multi-tier referral system rewards active community builders with substantial bonuses and privileges.",
      icon: "Users",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400&h=300&fit=crop",
      features: [
        "Multi-tier Rewards",
        "Instant Point Credits",
        "Performance Analytics",
        "Bonus Multipliers"
      ],
      ctaText: "Start Referring",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 3,
      title: "Community Benefits",
      description: "Join an exclusive community of crypto enthusiasts. Get early access to market insights, educational content, and networking opportunities with industry leaders.",
      icon: "Heart",
      image: "https://images.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg?w=400&h=300&fit=crop",
      features: [
        "Expert Market Analysis",
        "Educational Resources",
        "Networking Events",
        "Priority Support"
      ],
      ctaText: "Join Community",
      gradient: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  const handleCTAClick = (propositionId) => {
    navigate('/user-registration');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Maris Coin Platform?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the exclusive benefits and opportunities available to early community members. 
            Join thousands of crypto enthusiasts preparing for the future of digital assets.
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {propositions?.map((prop, index) => (
            <div
              key={prop?.id}
              className="group bg-card rounded-2xl overflow-hidden crypto-border hover:crypto-glow transition-crypto"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${prop?.gradient}`}></div>
                <Image
                  src={prop?.image}
                  alt={prop?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-crypto"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Icon name={prop?.icon} size={24} color="var(--color-primary)" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {prop?.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {prop?.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {prop?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => handleCTAClick(prop?.id)}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                >
                  {prop?.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 lg:p-12 crypto-border">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing community today and secure your position for the Maris Coin launch. 
              Early registration comes with exclusive benefits and bonus rewards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => navigate('/user-registration')}
                iconName="UserPlus"
                iconPosition="left"
              >
                Register Now
              </Button>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>Limited time offer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
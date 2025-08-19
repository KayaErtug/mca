import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TokenStats = () => {
  const [animatedStats, setAnimatedStats] = useState({
    totalSupply: 0,
    communityMembers: 0,
    nftCollections: 0,
    rewardsDistributed: 0
  });

  const finalStats = {
    totalSupply: 1000000000,
    communityMembers: 34547,
    nftCollections: 18,
    rewardsDistributed: 25000000
  };

  // Animate numbers on component mount
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        totalSupply: Math.floor(finalStats?.totalSupply * easeOutQuart),
        communityMembers: Math.floor(finalStats?.communityMembers * easeOutQuart),
        nftCollections: Math.floor(finalStats?.nftCollections * easeOutQuart),
        rewardsDistributed: Math.floor(finalStats?.rewardsDistributed * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000)?.toFixed(1) + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000)?.toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000)?.toFixed(1) + 'K';
    }
    return num?.toLocaleString();
  };

  const stats = [
    {
      id: 1,
      label: "Total Token Supply",
      value: animatedStats?.totalSupply,
      icon: "Coins",
      suffix: "MC",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 2,
      label: "Community Members",
      value: animatedStats?.communityMembers,
      icon: "Users",
      suffix: "+",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      id: 3,
      label: "NFT Collections",
      value: animatedStats?.nftCollections,
      icon: "Image",
      suffix: "",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      id: 4,
      label: "Rewards Distributed",
      value: animatedStats?.rewardsDistributed,
      icon: "Gift",
      suffix: " Points",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Platform Statistics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time metrics showcasing our growing community and ecosystem development
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className="bg-card rounded-2xl p-6 crypto-border hover:crypto-glow transition-crypto group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${stat?.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-crypto`}>
                <Icon name={stat?.icon} size={24} color={`var(--color-${stat?.color?.replace('text-', '')})`} />
              </div>

              {/* Value */}
              <div className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className={`text-2xl lg:text-3xl font-bold ${stat?.color}`}>
                    {stat?.id === 1 ? formatNumber(stat?.value) : stat?.value?.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat?.suffix}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat?.label}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${stat?.color?.replace('text-', 'from-')} to-transparent rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-card px-4 py-2 rounded-full crypto-border">
            <Icon name="TrendingUp" size={16} color="var(--color-success)" />
            <span className="text-sm text-muted-foreground">
              Statistics updated in real-time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenStats;
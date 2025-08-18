import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';


const WelcomeMessage = ({ userData, onContinue }) => {
  const getWelcomeMessage = () => {
    if (userData?.provider === 'metamask') {
      return `Welcome to Maris Coin, ${userData?.walletAddress?.slice(0, 6)}...${userData?.walletAddress?.slice(-4)}!`;
    }
    return `Welcome to Maris Coin, ${userData?.name}!`;
  };

  const getBonusPoints = () => {
    return userData?.referralCode ? 150 : 100;
  };

  return (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
        <Icon name="CheckCircle" size={32} className="text-primary-foreground" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Registration Successful!
        </h2>
        <p className="text-lg text-muted-foreground">
          {getWelcomeMessage()}
        </p>
      </div>
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Icon name="Gift" size={24} className="text-primary" />
          <span className="text-lg font-semibold text-foreground">
            Welcome Bonus
          </span>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-1">
            +{getBonusPoints()} Points
          </div>
          <p className="text-sm text-muted-foreground">
            {userData?.referralCode ? 
              'Bonus points for joining with referral code!' : 
              'Welcome bonus for joining our community!'
            }
          </p>
        </div>

        {userData?.referralCode && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Users" size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">
                Referred by: {userData?.referralCode}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <Icon name="Target" size={20} className="text-primary mx-auto" />
            <p className="text-xs text-muted-foreground">Complete Tasks</p>
          </div>
          <div className="space-y-1">
            <Icon name="Users" size={20} className="text-primary mx-auto" />
            <p className="text-xs text-muted-foreground">Refer Friends</p>
          </div>
          <div className="space-y-1">
            <Icon name="Trophy" size={20} className="text-primary mx-auto" />
            <p className="text-xs text-muted-foreground">Earn Rewards</p>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Start earning more points by completing daily tasks, referring friends, and engaging with our community!
        </div>
      </div>
      <div className="space-y-3">
        <Button
          variant="default"
          size="lg"
          fullWidth
          onClick={onContinue}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Continue to Dashboard
        </Button>
        
        <Button
          variant="outline"
          size="default"
          fullWidth
          onClick={() => window.open('https://t.me/mariscoin', '_blank')}
          iconName="MessageCircle"
          iconPosition="left"
        >
          Join Telegram Community
        </Button>
      </div>
    </div>
  );
};

export default WelcomeMessage;
import React, { useState } from 'react';
import Button from '../../../components/ui/Button';


const SocialAuthButtons = ({ onSocialAuth }) => {
  const [loadingProvider, setLoadingProvider] = useState(null);

  const socialProviders = [
    {
      id: 'google',
      name: 'Google',
      icon: 'Chrome',
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Continue with Google account'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: 'MessageCircle',
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Connect via Telegram'
    },
    {
      id: 'metamask',
      name: 'MetaMask',
      icon: 'Wallet',
      color: 'bg-orange-500 hover:bg-orange-600',
      description: 'Connect crypto wallet'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: 'Twitter',
      color: 'bg-sky-500 hover:bg-sky-600',
      description: 'Continue with Twitter'
    }
  ];

  const handleSocialAuth = async (providerId) => {
    setLoadingProvider(providerId);
    
    try {
      // Simulate authentication process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful authentication
      const mockUserData = {
        provider: providerId,
        name: providerId === 'google' ? 'John Smith' : 
              providerId === 'telegram' ? 'CryptoTrader123' :
              providerId === 'metamask'? '0x742d...4c8f' : 'TwitterUser',
        email: providerId === 'metamask' ? null : `user@${providerId}.com`,
        walletAddress: providerId === 'metamask' ? '0x742d35Cc6634C0532925a3b8D4c8f' : null,
        profileImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${providerId}`
      };
      
      onSocialAuth(providerId, mockUserData);
    } catch (error) {
      console.error(`${providerId} authentication failed:`, error);
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <div className="space-y-3">
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Choose your preferred registration method
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {socialProviders?.map((provider) => (
          <Button
            key={provider?.id}
            variant="outline"
            size="default"
            onClick={() => handleSocialAuth(provider?.id)}
            loading={loadingProvider === provider?.id}
            disabled={loadingProvider && loadingProvider !== provider?.id}
            iconName={provider?.icon}
            iconPosition="left"
            className="justify-start h-12 text-left"
          >
            <div className="flex flex-col items-start">
              <span className="font-medium">{provider?.name}</span>
              <span className="text-xs text-muted-foreground">
                {provider?.description}
              </span>
            </div>
          </Button>
        ))}
      </div>
      <div className="mt-6 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-background text-muted-foreground">
              Or register with email
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialAuthButtons;
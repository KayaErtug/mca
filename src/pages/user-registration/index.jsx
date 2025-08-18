import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ProgressIndicator from './components/ProgressIndicator';
import AuthMethodSelector from './components/AuthMethodSelector';
import SocialAuthButtons from './components/SocialAuthButtons';
import RegistrationForm from './components/RegistrationForm';
import WelcomeMessage from './components/WelcomeMessage';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const UserRegistration = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [userData, setUserData] = useState(null);

  const stepLabels = ['Method', 'Details', 'Complete'];
  const totalSteps = 3;

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setCurrentStep(2);
  };

  const handleEmailRegistration = async (formData) => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful registration
      const newUserData = {
        id: Date.now(),
        name: formData?.name,
        email: formData?.email,
        profession: formData?.profession,
        referralCode: formData?.referralCode,
        provider: 'email',
        joinDate: new Date()?.toISOString(),
        points: formData?.referralCode ? 150 : 100,
        profileImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData?.email}`
      };

      setUserData(newUserData);
      setCurrentStep(3);
      setRegistrationComplete(true);
      
      // Store user data
      localStorage.setItem('userData', JSON.stringify(newUserData));
      localStorage.setItem('isAuthenticated', 'true');
      
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialAuth = async (provider, socialUserData) => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newUserData = {
        id: Date.now(),
        ...socialUserData,
        joinDate: new Date()?.toISOString(),
        points: 100,
        referralCode: null
      };

      setUserData(newUserData);
      setCurrentStep(3);
      setRegistrationComplete(true);
      
      // Store user data
      localStorage.setItem('userData', JSON.stringify(newUserData));
      localStorage.setItem('isAuthenticated', 'true');
      
    } catch (error) {
      console.error('Social authentication failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContinueToDashboard = () => {
    navigate('/dashboard');
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 2) {
        setSelectedMethod(null);
      }
    }
  };

  const renderStepContent = () => {
    if (registrationComplete) {
      return (
        <WelcomeMessage 
          userData={userData}
          onContinue={handleContinueToDashboard}
        />
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <AuthMethodSelector
            onMethodSelect={handleMethodSelect}
            selectedMethod={selectedMethod}
          />
        );
      
      case 2:
        if (selectedMethod === 'social') {
          return (
            <SocialAuthButtons
              onSocialAuth={handleSocialAuth}
            />
          );
        } else if (selectedMethod === 'email') {
          return (
            <RegistrationForm
              onSubmit={handleEmailRegistration}
              loading={loading}
            />
          );
        }
        break;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onAuthAction={() => {}} />
      
      <div className="pt-16">
        <div className="max-w-2xl mx-auto px-4 py-8">
          {!registrationComplete && (
            <ProgressIndicator
              currentStep={currentStep}
              totalSteps={totalSteps}
              stepLabels={stepLabels}
            />
          )}

          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            {!registrationComplete && currentStep > 1 && (
              <div className="mb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBackStep}
                  iconName="ArrowLeft"
                  iconPosition="left"
                >
                  Back
                </Button>
              </div>
            )}

            {renderStepContent()}
          </div>

          {!registrationComplete && (
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="text-primary hover:underline font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          )}

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Help Center
              </a>
            </div>
            
            <div className="mt-4 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-primary" />
                <span className="text-xs text-muted-foreground">Secure Registration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} className="text-primary" />
                <span className="text-xs text-muted-foreground">Data Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
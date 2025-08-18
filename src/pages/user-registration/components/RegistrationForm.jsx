import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const RegistrationForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profession: '',
    referralCode: ''
  });
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const professionOptions = [
    "Software Developer",
    "Trader/Investor", 
    "Business Owner",
    "Student",
    "Marketing Professional",
    "Financial Analyst",
    "Consultant",
    "Other"
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData?.name?.trim()?.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData?.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData?.password) {
      newErrors.password = "Password is required";
    } else if (formData?.password?.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/?.test(formData?.password)) {
      newErrors.password = "Password must contain uppercase, lowercase, and number";
    }

    if (!formData?.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData?.password !== formData?.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData?.profession) {
      newErrors.profession = "Please select your profession";
    }

    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onSubmit({
        ...formData,
        termsAccepted
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData?.name}
          onChange={handleInputChange}
          error={errors?.name}
          required
          className="md:col-span-1"
        />
        
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData?.email}
          onChange={handleInputChange}
          error={errors?.email}
          required
          className="md:col-span-1"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a strong password"
            value={formData?.password}
            onChange={handleInputChange}
            error={errors?.password}
            required
            description="Must contain uppercase, lowercase, and number"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-muted-foreground hover:text-foreground transition-crypto"
          >
            <Icon name={showPassword ? "EyeOff" : "Eye"} size={16} />
          </button>
        </div>

        <div className="relative">
          <Input
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData?.confirmPassword}
            onChange={handleInputChange}
            error={errors?.confirmPassword}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-9 text-muted-foreground hover:text-foreground transition-crypto"
          >
            <Icon name={showConfirmPassword ? "EyeOff" : "Eye"} size={16} />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Profession <span className="text-destructive">*</span>
          </label>
          <select
            name="profession"
            value={formData?.profession}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-crypto"
            required
          >
            <option value="">Select your profession</option>
            {professionOptions?.map((profession) => (
              <option key={profession} value={profession}>
                {profession}
              </option>
            ))}
          </select>
          {errors?.profession && (
            <p className="mt-1 text-sm text-destructive">{errors?.profession}</p>
          )}
        </div>

        <Input
          label="Referral Code (Optional)"
          type="text"
          name="referralCode"
          placeholder="Enter referral code if you have one"
          value={formData?.referralCode}
          onChange={handleInputChange}
          description="Get bonus points if referred by existing member"
        />
      </div>
      <div className="space-y-4">
        <Checkbox
          label="I agree to the Terms of Service and Privacy Policy"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e?.target?.checked)}
          error={errors?.terms}
          required
        />
        
        <div className="text-xs text-muted-foreground">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-primary hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
          You'll receive community updates and promotional content about Maris Coin.
        </div>
      </div>
      <Button
        type="submit"
        variant="default"
        size="lg"
        fullWidth
        loading={loading}
        iconName="UserPlus"
        iconPosition="left"
        disabled={!termsAccepted}
      >
        Create Account
      </Button>
    </form>
  );
};

export default RegistrationForm;
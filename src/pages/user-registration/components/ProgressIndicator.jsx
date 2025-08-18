import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps, stepLabels }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-foreground">
          Join Maris Coin Community
        </h2>
        <span className="text-sm text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 mb-4">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        {stepLabels?.map((label, index) => (
          <div 
            key={index}
            className={`flex items-center space-x-1 ${
              index + 1 <= currentStep ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {index + 1 < currentStep ? (
              <Icon name="CheckCircle" size={14} className="text-primary" />
            ) : index + 1 === currentStep ? (
              <Icon name="Circle" size={14} className="text-primary" />
            ) : (
              <Icon name="Circle" size={14} className="text-muted-foreground" />
            )}
            <span className="hidden sm:inline">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';

const AuthMethodSelector = ({ onMethodSelect, selectedMethod }) => {
  const authMethods = [
    {
      id: 'email',
      title: 'Email Registration',
      description: 'Create account with email and password',
      icon: 'Mail',
      color: 'text-blue-500',
      recommended: true
    },
    {
      id: 'social',
      title: 'Social Login',
      description: 'Quick signup with social accounts',
      icon: 'Users',
      color: 'text-green-500',
      popular: true
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Choose Registration Method
        </h3>
        <p className="text-sm text-muted-foreground">
          Select how you'd like to create your Maris Coin account
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {authMethods?.map((method) => (
          <button
            key={method?.id}
            onClick={() => onMethodSelect(method?.id)}
            className={`relative p-6 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedMethod === method?.id
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 bg-card'
            }`}
          >
            {method?.recommended && (
              <div className="absolute -top-2 left-4 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                Recommended
              </div>
            )}
            
            {method?.popular && (
              <div className="absolute -top-2 right-4 px-2 py-1 bg-success text-success-foreground text-xs font-medium rounded">
                Popular
              </div>
            )}

            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg bg-muted ${method?.color}`}>
                <Icon name={method?.icon} size={20} />
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">
                  {method?.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {method?.description}
                </p>
              </div>

              {selectedMethod === method?.id && (
                <Icon name="CheckCircle" size={20} className="text-primary" />
              )}
            </div>
          </button>
        ))}
      </div>
      {selectedMethod && (
        <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Info" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              {selectedMethod === 'email' ? 'Email Registration Selected' : 'Social Login Selected'}
            </span>
          </div>
          <p className="text-xs text-primary/80 mt-1">
            {selectedMethod === 'email' ?'Fill out the form below to create your account with email and password.' :'Choose from available social login options to quickly create your account.'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthMethodSelector;
import React from 'react';

const setupSteps = {
  facebook: [
    'Connect your Facebook Business account',
    'Configure automated responses',
    'Set up lead capture forms',
    'Define routing rules',
    'Test messenger integration'
  ],
  whatsapp: [
    'Register WhatsApp Business API account',
    'Verify business phone number',
    'Set up message templates',
    'Configure automated workflows',
    'Test message delivery'
  ],
  webchat: [
    'Generate chat widget code',
    'Customize chat appearance',
    'Set up AI response patterns',
    'Configure lead notifications',
    'Test widget functionality'
  ],
  instagram: [
    'Connect Instagram Business account',
    'Set up automated DM responses',
    'Configure story mentions handling',
    'Set up comment management',
    'Test Instagram integration'
  ],
  sms: [
    'Choose SMS provider',
    'Set up phone number',
    'Create message templates',
    'Configure automated sequences',
    'Test SMS delivery'
  ]
};

export function SetupGuide({ selectedIntegration }) {
  const steps = setupSteps[selectedIntegration] || [];

  if (!selectedIntegration) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        Select an integration point to view setup instructions
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 dark:border-gray-800"
        >
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
            {index + 1}
          </div>
          <p className="text-sm text-gray-900 dark:text-white">{step}</p>
        </div>
      ))}
    </div>
  );
}
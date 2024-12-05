import React from 'react';
import { Button } from '../../ui/Button';

const integrations = [
  {
    id: 'facebook',
    name: 'Facebook Messenger',
    icon: MessengerIcon,
    description: 'Connect with leads through Facebook Messenger'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    icon: WhatsAppIcon,
    description: 'Engage clients via WhatsApp Business API'
  },
  {
    id: 'webchat',
    name: 'Website Chat',
    icon: WebChatIcon,
    description: 'Embed AI chat on your website'
  },
  {
    id: 'instagram',
    name: 'Instagram DM',
    icon: InstagramIcon,
    description: 'Handle Instagram direct messages'
  },
  {
    id: 'sms',
    name: 'SMS/Text',
    icon: SMSIcon,
    description: 'Automated SMS communication'
  }
];

export function IntegrationSelector({ onSelect, selected }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {integrations.map((integration) => (
        <button
          key={integration.id}
          onClick={() => onSelect(integration.id)}
          className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
            selected === integration.id
              ? 'border-primary bg-primary/5 dark:bg-primary/10'
              : 'border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-dark-hover'
          }`}
        >
          <div className="p-3 rounded-lg bg-gray-100 dark:bg-dark-hover text-primary">
            <integration.icon />
          </div>
          <div className="text-left">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {integration.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {integration.description}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

function MessengerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
      <path d="M128,24A104,104,0,0,0,24,128a103.22,103.22,0,0,0,34.27,77.11l-9,31.49A16,16,0,0,0,69.18,256a15.91,15.91,0,0,0,4.42-.62l31.49-9A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
      <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88,88,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118.39a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.87,30.87A8,8,0,0,0,138.61,156l14.93-9.77,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,219.69a16,16,0,0,0,19.75,19.75l42.81-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"/>
    </svg>
  );
}

function WebChatIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
      <path d="M216,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H82.5a16,16,0,0,0-10.3,3.75l-.12.11L40,224V64H216Z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/>
    </svg>
  );
}

function SMSIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
      <path d="M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48Zm0,144H40V64H216V192ZM184,128a12,12,0,1,1-12-12A12,12,0,0,1,184,128Zm-48,0a12,12,0,1,1-12-12A12,12,0,0,1,136,128Zm-48,0a12,12,0,1,1-12-12A12,12,0,0,1,88,128Z"/>
    </svg>
  );
}
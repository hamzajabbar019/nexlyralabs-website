/**
 * Central configuration for Nexlyra Labs contact channels.
 * Replace the placeholders below with your real business email and WhatsApp link when ready.
 */
export const siteConfig = {
  companyName: 'Nexlyra Labs',
  tagline: 'Build Smarter. Grow Faster.',
  founderName: 'Hamza Jabbar',
  location: 'Karachi, Pakistan',
  serving: 'Serving International Clients',

  contactEmail: 'nexlyralabs@gmail.com',
  isEmailConfigured: true,

  // Replace with your real WhatsApp link (e.g. 'https://wa.me/923001234567')
  whatsappUrl: '',
  isWhatsappConfigured: false,

  // Set to true once you connect an API route or email service (e.g. Resend / Formspree)
  hasBackendMailer: false,
} as const;

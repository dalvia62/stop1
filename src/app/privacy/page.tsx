"use client";

import { useState, useEffect } from 'react';

export default function PrivacyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-card">
      <div className="container mx-auto max-w-4xl py-16 md:py-24 px-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 text-primary">Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p><strong>Last Updated:</strong> {lastUpdated}</p>

          <p>
            Welcome to StopAndDesist. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">1. Data Collection</h2>
          <p>
            We collect information that you voluntarily provide to us when you use our service to generate a document. This includes personal details required for the cease and desist letter, such as your name, address, and information about the collection agency. We also collect basic technical data like your IP address and browser type for security and analytics purposes.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">2. Payment Processing</h2>
          <p>
            We plan to use Paddle.com as our third-party payment processor. When you make a payment, you will provide your payment information directly to Paddle. We do not store your full credit card number or other sensitive payment details on our servers. We recommend you review Paddle's privacy policy to understand how they handle your data.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">3. Use of Data and No Selling Policy</h2>
          <p>
            The information you provide is used solely to generate your requested document and process your transaction. We are committed to your privacy and will never sell, rent, or trade your personal data to any third parties for marketing or any other purposes.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">4. Cookie Usage</h2>
          <p>
            Our website uses essential cookies to ensure the proper functioning of our services, such as maintaining your session. We may also use cookies for analytics to understand how our website is used and to improve user experience. You can control the use of cookies at the individual browser level.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">5. Data Deletion</h2>
          <p>
            You have the right to request the deletion of your personal data. If you wish to have your information removed from our systems, please contact us at the email provided on our Contact page. We will process your request in accordance with applicable laws.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RefundPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-card">
      <div className="container mx-auto max-w-4xl py-16 md:py-24 px-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 text-primary">Refund Policy</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p><strong>Last Updated:</strong> {lastUpdated}</p>

          <p>
            At StopAndDesist, we strive to provide a high-quality and reliable digital service. Our refund policy is designed to be clear and fair for the digital nature of our products.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">1. Digital Service</h2>
          <p>
            Our service provides a digital product (a downloadable document) that is generated and delivered instantly upon payment. Due to the immediate access and digital nature of our product, we generally do not offer refunds once a document has been successfully generated and made available for download.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">2. Eligibility for a Refund</h2>
          <p>
            A refund may be considered under the following specific circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Duplicate Payment:</strong> If you were accidentally charged multiple times for the same single transaction due to a processing error.
            </li>
            <li>
              <strong>Major Technical Issue:</strong> If a verifiable technical failure on our platform prevented you from generating or downloading your document and our support team is unable to resolve the issue for you.
            </li>
          </ul>
          <p>
            Refunds will not be granted for reasons such as changing your mind, dissatisfaction with the document's content after generation, or failure to use the document.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">3. How to Request a Refund</h2>
          <p>
            To be eligible for a refund, you must contact our support team within <strong>48 hours</strong> of the transaction. Please provide your transaction details and a clear explanation of the issue. All refund requests are subject to review, and our decision will be final.
          </p>
          <p>
            You can reach our support team via the email address listed on our <Link href="/contact" className="text-accent hover:underline">Contact Page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

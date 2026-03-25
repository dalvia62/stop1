import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | StopAndDesist',
  description: 'The terms of service for using the StopAndDesist platform.',
};

export default function TermsPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto max-w-4xl py-16 md:py-24 px-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 text-primary">Terms of Service</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>
            Please read these Terms of Service ("Terms") carefully before using the StopAndDesist website and services (the "Service") operated by us. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">1. Not a Law Firm Disclaimer</h2>
          <p>
            StopAndDesist is not a law firm and does not provide legal representation or services. We are a technology company that provides a software-as-a-service platform for individuals to generate their own documents. Our services are not a substitute for the advice of an attorney.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">2. No Legal Advice</h2>
          <p>
            The information and tools provided on this website are for informational and self-help purposes only. They do not constitute legal advice. No attorney-client relationship is created through your use of our Service. For legal advice specific to your situation, you should consult a licensed attorney.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">3. Digital Product Terms</h2>
          <p>
            Our Service allows you to pay a one-time fee to create and download a digital document. Upon successful payment, you are granted a license to use the generated document for your own personal, non-commercial purposes. You may not resell, redistribute, or use the document for any commercial purpose.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">4. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, StopAndDesist shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">5. User Responsibility</h2>
          <p>
            You are solely responsible for the accuracy and completeness of the information you provide to generate your document. You are also responsible for the proper delivery and use of the document you create. We are not responsible for the outcome of any communication or legal situation resulting from the use of our documents.
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground pt-4">6. Governing Law and Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located within the United States for the purpose of litigating all such claims or disputes.
          </p>
        </div>
      </div>
    </div>
  );
}

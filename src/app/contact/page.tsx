import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | StopAndDesist',
  description: 'Contact information for StopAndDesist support.',
};

const contactDetails = [
  {
    icon: Mail,
    title: 'Email',
    value: 'support@stopanddesist.com',
    href: 'mailto:support@stopanddesist.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1-800-000-0000',
    href: 'tel:+18000000000'
  }
];

export default function ContactPage() {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-4xl py-16 md:py-24 px-4">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">We're here to help with any questions about our platform.</p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Support Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {contactDetails.map(detail => (
                <div key={detail.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <detail.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">{detail.title}</h3>
                        <a href={detail.href} className="text-muted-foreground hover:text-accent transition-colors">
                            {detail.value}
                        </a>
                    </div>
                </div>
            ))}
             <div className="flex items-start gap-4 pt-4 border-t">
                <div className="flex-shrink-0">
                    <Info className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Response Time</h3>
                    <p className="text-muted-foreground">Support replies within 24-48 business hours.</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

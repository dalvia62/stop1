import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | StopAndDesist',
  description: 'Simple, transparent pricing for generating your cease and desist letter.',
};

const features = [
  'Generate a professional cease and desist letter',
  'Instant PDF download after payment',
  'Secure and private process',
  'One-time fee, no subscriptions'
];

export default function PricingPage() {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-4xl py-16 md:py-24 px-4">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">Simple, Transparent Pricing</h1>
            <p className="mt-4 text-lg text-muted-foreground">One price for everything you need to take action.</p>
        </div>

        <div className="flex justify-center">
            <Card className="max-w-md w-full shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Standard Document</CardTitle>
                <CardDescription>A complete cease and desist letter, ready to send.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                    <span className="text-5xl font-bold">$49</span>
                    <span className="text-muted-foreground"> / one-time</span>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                    {features.map(feature => (
                        <li key={feature} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}

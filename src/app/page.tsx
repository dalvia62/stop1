import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { StarRating } from '@/components/star-rating';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, FileText, Settings, Download, ShieldCheck, Zap, BadgeDollarSign, BookOpen } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah J.',
    rating: 5,
    text: "The process was so simple and much less stressful than I imagined. Having a formal document made me feel empowered and in control.",
    avatarId: 'testimonial-sarah-j',
  },
  {
    name: 'Michael B.',
    rating: 5,
    text: "I was skeptical at first, but StopAndDesist delivered exactly what they promised. The harassing calls stopped within a week of sending the letter.",
    avatarId: 'testimonial-michael-b',
  },
  {
    name: 'Emily K.',
    rating: 4,
    text: "A fantastic and cost-effective way to handle a difficult situation. The document was professional, easy to generate, and simple to use.",
    avatarId: 'testimonial-emily-k',
  },
];

const faqItems = [
  {
    question: 'Is this a law firm?',
    answer: 'No, StopAndDesist is not a law firm. We do not provide legal services or legal advice. We are a software company providing tools to help individuals create their own formal communication documents based on the information they provide.'
  },
  {
    question: 'Do you provide legal advice?',
    answer: 'No. Our service is not a substitute for the advice of an attorney. The content and documents generated are for informational purposes only and do not constitute legal advice. For complex situations, we strongly recommend consulting with a qualified attorney.'
  },
  {
    question: 'Is payment required?',
    answer: 'Yes, there is a one-time fee to generate and download your final document. This allows us to maintain our platform and provide secure, high-quality service. There are no recurring subscriptions or hidden charges.'
  },
  {
    question: 'How is the document delivered?',
    answer: 'Your cease and desist letter is delivered digitally as a downloadable PDF file immediately after your payment is processed. You can save it to your device and print it for mailing.'
  },
  {
    question: 'How can I contact support?',
    answer: 'You can reach our support team via the information on our Contact page. We typically respond to inquiries within 24-48 business hours. Please note that our support is for technical issues and platform questions only, not legal advice.'
  },
];

const trustPoints = ['Secure service', 'Private & confidential', 'Digital document delivery'];

const howItWorksSteps = [
    { icon: FileText, title: 'Enter Details', description: 'Provide the necessary details about your situation and the debt collector.' },
    { icon: Settings, title: 'Prepare Document', description: 'Our system uses your information to structure a formal cease and desist letter.' },
    { icon: Download, title: 'Download & Send', description: 'Instantly download your completed document as a PDF to print and mail.' },
];

const benefits = [
    { icon: ShieldCheck, title: 'Structured Documents', description: 'Create professionally styled legal documents that demand attention.' },
    { icon: Zap, title: 'Quick Digital Delivery', description: 'No waiting. Receive your downloadable PDF instantly after generation.' },
    { icon: BadgeDollarSign, title: 'Cost-Effective', description: 'An affordable alternative to the high costs of hiring legal help for this specific task.' },
    { icon: BookOpen, title: 'Organize Communication', description: 'Establish a formal paper trail and take a key step in managing collector contact.' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 grid place-items-center py-20 md:py-32">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl text-primary">
            Stop Debt Collector Harassment Instantly
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We provide AI-assisted tools that help individuals create formal cease and desist letters to manage unwanted debt collection communication.
          </p>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/pricing">Get Started</Link>
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-x-6 gap-y-2 flex-wrap">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-card border-y">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="mt-4 text-muted-foreground">A simple, three-step process to regain your peace of mind.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="text-center">
                    <div className="flex justify-center items-center mb-4">
                      <div className="bg-primary/10 text-primary p-4 rounded-full">
                        <step.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">Step {index + 1} &mdash; {step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Key Benefits</h2>
            <p className="mt-4 text-muted-foreground">Empower yourself with the right tools to manage financial communication effectively.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(benefit => (
                <Card key={benefit.title} className="text-center">
                    <CardHeader>
                        <div className="flex justify-center mb-4">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <benefit.icon className="h-6 w-6" />
                            </div>
                        </div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-card border-y">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Trusted by Users</h2>
            <p className="mt-4 text-muted-foreground">See what others have to say about their experience.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => {
              const avatar = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
              return (
                <Card key={testimonial.name} className="flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <p className="italic text-muted-foreground">"{testimonial.text}"</p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4 bg-muted/50 p-4 mt-auto">
                    {avatar && (
                      <Image
                        src={avatar.imageUrl}
                        alt={`Avatar of ${testimonial.name}`}
                        width={48}
                        height={48}
                        data-ai-hint={avatar.imageHint}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <StarRating rating={testimonial.rating} className="mt-1" />
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Find answers to common questions about our service.</p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto mt-12">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA Section */}
      <section id="generate" className="container mx-auto px-4">
        <div className="bg-primary text-primary-foreground rounded-lg p-10 md:p-16 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">Take Control of Your Financial Communication Today</h2>
            <div className="mt-8 flex justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/pricing">Get Started</Link>
                </Button>
            </div>
        </div>
      </section>

      <div className="h-20" />
    </>
  );
}

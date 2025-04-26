'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast'; // Import useToast
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';


const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }).max(500, {
    message: 'Message must not exceed 500 characters.'
  }),
});

export default function ContactUsPage() {
  const { toast } = useToast(); // Initialize toast

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // Simulate form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Form submitted:', values);
    // Here you would typically send the data to your backend
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) });

    // Simulate success
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    form.reset(); // Reset form fields after successful submission
  }

  return (
    <div className="content-center container py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
       <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Have questions or need assistance? Reach out to us using the form below or through our contact details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="shadow-md">
           <CardHeader>
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us how we can help..."
                          className="resize-none"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Max 500 characters.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting} className="w-full md:w-auto">
                   {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
           <Card className="shadow-md">
             <CardHeader>
               <CardTitle className="text-2xl">Our Information</CardTitle>
             </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">123 Furniture Lane, Cityville, ST 12345</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                       <h3 className="font-semibold">Phone</h3>
                       <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-4">
                   <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                       <h3 className="font-semibold">Email</h3>
                       <p className="text-muted-foreground">info@vinmin.com</p>
                       <p className="text-muted-foreground">support@vinmin.com</p>
                    </div>
                 </div>
              </CardContent>
           </Card>

           {/* Placeholder for a Map */}
           <Card className="shadow-md overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-xl">Find Us Here</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    {/* Replace with an actual map embed or image */}
                    <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                        Map Placeholder
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}

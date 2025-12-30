import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you have questions about NGTSAB, want to learn more about our initiatives, or are interested in collaborating, we're here to help.
              </p>

              <Card className="shadow-card mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us Directly</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Prefer email? Reach out to us directly at:
                      </p>
                      <a 
                        href="mailto:connect@ngtsab.org" 
                        className="text-primary hover:underline font-medium"
                      >
                        connect@ngtsab.org
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-sm text-muted-foreground">
                <p className="mb-2"><strong>Response Time:</strong></p>
                <p>We typically respond to inquiries within 2-3 business days.</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Send Us a Message</h3>
                  <div className="w-full overflow-hidden rounded-lg">
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdpvdhbzgQAMm_8qHq94i1WPF-Oqz6vvUYCqyco_3mFJXoxoQ/viewform?embedded=true" 
                      width="100%" 
                      height="852" 
                      frameBorder="0" 
                      marginHeight={0} 
                      marginWidth={0}
                      className="border-0"
                      title="NGTSAB Contact Form"
                    >
                      Loading…
                    </iframe>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Having trouble with the embedded form?
                    </p>
                    <a 
                      href="https://forms.gle/pg9kKxNKWUM25oK97" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      Open form in a new tab <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

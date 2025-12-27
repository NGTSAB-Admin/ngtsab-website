import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Linkedin, Twitter, MapPin } from "lucide-react";

const people = {
  "carter-fitzgerald": {
    name: "Carter FitzGerald",
    role: "President",
    initials: "CF",
    location: "Texas",
    duties: "Leading NGTSAB's national advocacy efforts, setting strategic direction, representing the organization at national conferences, and coordinating with state-level boards across the country.",
    biography: "Carter FitzGerald has been a passionate advocate for gifted education since middle school. As a student in Texas's gifted program, Carter experienced firsthand both the benefits and challenges of gifted education. This experience inspired a commitment to ensuring all gifted students have access to appropriate educational opportunities. Carter has led multiple advocacy campaigns and has spoken at state education conferences about the importance of student voice in educational policy.",
    email: "carter@ngtsab.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  "abigail-riead": {
    name: "Abigail Riead",
    role: "Vice President",
    initials: "AR",
    location: "Virginia",
    duties: "Coordinating state-level initiatives, overseeing board development programs, supporting the President in strategic planning, and managing inter-state communication between affiliate boards.",
    biography: "Abigail Riead brings extensive experience in student government and advocacy to her role as Vice President. Based in Virginia, Abigail has been instrumental in developing resources for students looking to start their own advocacy boards. Her work focuses on building sustainable structures that empower student voices in gifted education policy discussions at both state and national levels.",
    email: "abigail@ngtsab.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  "caleb-olson": {
    name: "Caleb Olson",
    role: "Vice President",
    initials: "CO",
    location: "Minnesota",
    duties: "Coordinating state-level initiatives, leading legislative advocacy efforts, developing partnerships with education organizations, and supporting board member recruitment and training.",
    biography: "Caleb Olson serves as Vice President, bringing a unique perspective from Minnesota's gifted education landscape. Caleb has been particularly focused on automatic enrollment legislation and has worked closely with state legislators to promote equitable access to gifted programs. His analytical approach and dedication to data-driven advocacy have strengthened NGTSAB's policy positions.",
    email: "caleb@ngtsab.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  "ann-mary-thomas": {
    name: "Ann Mary Thomas",
    role: "Executive Board Member",
    initials: "AT",
    location: "California",
    duties: "Contributing to organizational strategy, leading outreach initiatives to underrepresented communities, developing educational resources, and coordinating with teacher advocacy groups.",
    biography: "Ann Mary Thomas is an Executive Board Member who brings valuable insights from California's diverse educational landscape. Ann Mary is passionate about ensuring gifted programs are accessible to students from all backgrounds and has led initiatives focused on equity in gifted education. Her work emphasizes the importance of culturally responsive identification practices and inclusive program design.",
    email: "annmary@ngtsab.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  "haley-becker": {
    name: "Haley Becker",
    role: "Executive Board Member",
    initials: "HB",
    location: "Ohio",
    duties: "Contributing to organizational strategy, managing communications and social media presence, coordinating events and webinars, and developing content for student resources.",
    biography: "Haley Becker serves as an Executive Board Member, bringing creativity and communication expertise to NGTSAB. From Ohio, Haley has been instrumental in expanding the organization's digital presence and connecting with students nationwide. Haley's focus on storytelling and community building has helped amplify student voices and share success stories from gifted programs across the country.",
    email: "haley@ngtsab.org",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export default function PersonProfile() {
  const { personId } = useParams<{ personId: string }>();
  const person = personId ? people[personId as keyof typeof people] : null;

  if (!person) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Person not found</h1>
          <Link to="/about/people">
            <Button>Back to The People</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-12">
        <div className="container">
          <Link to="/about/people" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to The People
          </Link>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Avatar className="h-40 w-40 border-4 border-primary-foreground/20">
              <AvatarFallback className="bg-primary-foreground/10 text-primary-foreground text-4xl">
                {person.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">{person.name}</h1>
              <p className="text-xl text-primary-foreground/90 mb-3">{person.role}</p>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>{person.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Duties & Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{person.duties}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Biography</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{person.biography}</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Photo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center text-muted-foreground">
                      <Avatar className="h-24 w-24 mx-auto mb-3">
                        <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                          {person.initials}
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-sm">Photo coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Contact & Socials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a 
                    href={`mailto:${person.email}`} 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{person.email}</span>
                  </a>
                  <a 
                    href={person.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href={person.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span>Twitter</span>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";

const leadership = [
  { name: "Carter FitzGerald", role: "President", initials: "CF", bio: "Leading NGTSAB's national advocacy efforts and strategic direction.", slug: "carter-fitzgerald", location: "Texas" },
  { name: "Abigail Riead", role: "Vice President", initials: "AR", bio: "Coordinating state-level initiatives and board development programs.", slug: "abigail-riead", location: "Virginia" },
  { name: "Caleb Olson", role: "Vice President", initials: "CO", bio: "Coordinating state-level initiatives and board development programs.", slug: "caleb-olson", location: "Minnesota" },
  { name: "Ann Mary Thomas", role: "Executive Board Member", initials: "AT", bio: "Contributing to organizational strategy and student advocacy initiatives.", slug: "ann-mary-thomas", location: "California" },
  { name: "Haley Becker", role: "Executive Board Member", initials: "HB", bio: "Contributing to organizational strategy and student advocacy initiatives.", slug: "haley-becker", location: "Ohio" },
];

const directors = [
  { name: "Jordan Lee", role: "Director of Legislation", initials: "JL" },
  { name: "Priya Patel", role: "Director of Communications", initials: "PP" },
  { name: "David Kim", role: "Director of Outreach", initials: "DK" },
  { name: "Taylor Martinez", role: "Director of Education", initials: "TM" },
  { name: "Olivia Thompson", role: "Director of Events", initials: "OT" },
  { name: "Noah Anderson", role: "Director of Technology", initials: "NA" },
];

export default function ThePeople() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">The People</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Meet the dedicated students leading our organization and driving change in gifted education.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Executive Board</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {leadership.map((person) => (
              <Link key={person.name} to={`/about/people/${person.slug}`}>
                <Card className="shadow-card hover:shadow-hover transition-shadow text-center h-full cursor-pointer">
                  <CardHeader>
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                        {person.initials}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle>{person.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{person.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3" />
                      <span>{person.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{person.bio}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Board of Directors</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {directors.map((person) => (
              <Card key={person.name} className="shadow-card text-center p-4">
                <Avatar className="h-16 w-16 mx-auto mb-3">
                  <AvatarFallback className="bg-secondary text-secondary-foreground">
                    {person.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-sm">{person.name}</h3>
                <p className="text-xs text-muted-foreground">{person.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Join Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're always looking for passionate students to join our leadership team. Check out our open positions and apply today.
          </p>
        </div>
      </section>
    </Layout>
  );
}

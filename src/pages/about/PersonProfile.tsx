import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MapPin, GraduationCap, ExternalLink, Heart } from "lucide-react";
import { getPersonBySlug, alumni, sponsors } from "@/data/people";

export default function PersonProfile() {
  const { personId } = useParams<{ personId: string }>();
  const person = personId ? getPersonBySlug(personId) : undefined;
  const isAlumni = person ? alumni.some((a) => a.slug === person.slug) : false;
  const isSponsor = person ? sponsors.some((s) => s.slug === person.slug) : false;

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
              <AvatarImage src={person.photo} alt={person.name} className="object-cover" />
              <AvatarFallback className="bg-primary-foreground/10 text-primary-foreground text-4xl">
                {person.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">{person.name}</h1>
              <p className="text-xl text-primary-foreground/90 mb-3">
                {isAlumni && person.formerRole ? `Alumni — ${person.formerRole}` : person.role}
              </p>
              {person.location && (
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <MapPin className="h-4 w-4" />
                  <span>{person.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {isSponsor ? (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-serif">Biography</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {person.biography?.split("\n\n").map((para, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                          {para}
                        </p>
                      ))}
                    </CardContent>
                  </Card>

                  {person.contribution && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-serif flex items-center gap-2">
                          <Heart className="h-5 w-5 text-primary" />
                          Supporting NGTSAB
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{person.contribution}</p>
                      </CardContent>
                    </Card>
                  )}
                </>
              ) : isAlumni ? (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-serif flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        Previous Role at NGTSAB
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="font-medium text-foreground">{person.formerRole}</span>
                        {person.duties ? ` — ${person.duties}` : ""}
                      </p>
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

                  {person.currentEndeavors && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-serif">Currently</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{person.currentEndeavors}</p>
                      </CardContent>
                    </Card>
                  )}
                </>
              ) : (
                <>
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
                </>
              )}
            </div>

            <div className="space-y-6">
              {isSponsor && person.links ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {person.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 flex-shrink-0" />
                        <span className="break-all">{link.label}</span>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              ) : person.email ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>{person.email}</span>
                    </a>
                  </CardContent>
                </Card>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

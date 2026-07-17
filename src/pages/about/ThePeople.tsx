import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { MapPin, Mail, ExternalLink, ChevronDown, GraduationCap } from "lucide-react";
import { executiveBoard, alumni, stateRepresentatives, allStates, StateRep } from "@/data/people";

const getRepsByState = () => {
  const repsByState: Record<string, StateRep[]> = {};
  stateRepresentatives.forEach(rep => {
    if (!repsByState[rep.state]) {
      repsByState[rep.state] = [];
    }
    repsByState[rep.state].push(rep);
  });
  return repsByState;
};

const RepCard = ({ rep }: { rep: StateRep }) => {
  if (rep.isExecutive && rep.slug) {
    return (
      <Link to={`/about/people/${rep.slug}`}>
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              {rep.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">{rep.name}</p>
            <p className="text-xs text-muted-foreground">{rep.city}</p>
          </div>
          <ExternalLink className="h-3 w-3 text-muted-foreground" />
        </div>
      </Link>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-secondary text-secondary-foreground text-sm">
              {rep.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">{rep.name}</p>
            <p className="text-xs text-muted-foreground">{rep.city}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{rep.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl">
                {rep.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">State Representative</p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{rep.city}, {rep.state}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-1">Biography</h4>
            <p className="text-sm text-muted-foreground">{rep.bio}</p>
          </div>
          {rep.email && (
            <div>
              <h4 className="font-medium mb-1">Contact</h4>
              <a href={`mailto:${rep.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail className="h-4 w-4" />
                {rep.email}
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

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
            {executiveBoard.map((person) => (
              <Link key={person.name} to={`/about/people/${person.slug}`}>
                <Card className="shadow-card hover:shadow-hover transition-shadow text-center h-full cursor-pointer">
                  <CardHeader>
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={person.photo} alt={person.name} className="object-cover" />
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

          {/* Alumni Section (collapsible, compact) */}
          <Collapsible defaultOpen={false} className="mb-16">
            <Card className="shadow-card overflow-hidden">
              <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors group">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h2 className="font-serif text-2xl font-bold text-foreground">Alumni</h2>
                  <span className="text-sm text-muted-foreground">({alumni.length})</span>
                </div>
                <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-2 pb-6">
                  <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
                    Honoring the past leaders who built NGTSAB into what it is today.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {alumni.map((person) => (
                      <Link key={person.slug} to={`/about/people/${person.slug}`}>
                        <div className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                          <Avatar className="h-16 w-16 mb-2">
                            <AvatarImage src={person.photo} alt={person.name} className="object-cover" />
                            <AvatarFallback className="bg-secondary text-secondary-foreground text-sm">
                              {person.initials}
                            </AvatarFallback>
                          </Avatar>
                          <p className="text-sm font-medium leading-tight">{person.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">State Representatives</h2>
          <p className="text-muted-foreground max-w-3xl mb-8">
            State Representatives serve as the voice of gifted students in their state. They advocate for policy changes, 
            connect local students with NGTSAB resources, and help build grassroots support for gifted education initiatives.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {allStates.map((state) => {
              const reps = getRepsByState()[state];
              const hasReps = reps && reps.length > 0;
              
              return (
                <Collapsible key={state} defaultOpen={hasReps}>
                  <Card className="shadow-card overflow-hidden">
                    <CollapsibleTrigger className="w-full p-3 flex items-center justify-between hover:bg-muted/50 transition-colors">
                      <span className="text-sm font-semibold">{state}</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="p-3 pt-0">
                        {hasReps ? (
                          <div className="space-y-1">
                            {reps.map((rep) => (
                              <RepCard key={rep.name} rep={rep} />
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-2">
                            <p className="text-xs text-muted-foreground mb-2">No representative yet</p>
                            <Link to="/apply">
                              <Button variant="outline" size="sm" className="text-xs h-7">
                                Apply Now
                              </Button>
                            </Link>
                          </div>
                        )}
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Become a State Representative</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're looking for passionate students to represent their state and advocate for gifted education. 
            Join our team and make a difference in your community.
          </p>
          <Link to="/apply">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

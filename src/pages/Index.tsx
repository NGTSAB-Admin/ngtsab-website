import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Scale, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight font-sans">
              Empowering Student Voices in Gifted Education
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              The National Gifted and Talented Student Advocacy Board unites students across America to improve gifted education practices and champion automatic enrollment legislation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/apply">
                  Join Our Movement <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission Pillars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building a nationwide movement to ensure every gifted student has access to appropriate education and a voice in shaping their future.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Student Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Amplifying student voices to influence gifted education policy at every level of government.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <Scale className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Automatic Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Promoting legislation that ensures all qualifying students are automatically enrolled in gifted programs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Creating Boards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Establishing student advocacy boards at state, district, and school levels across the country.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Better Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Improving gifted education through research-backed recommendations and student perspectives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-serif text-5xl font-bold mb-2">50+</div>
              <p className="text-primary-foreground/80">States Represented</p>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold mb-2">1000+</div>
              <p className="text-primary-foreground/80">Student Advocates</p>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold mb-2">25+</div>
              <p className="text-primary-foreground/80">Active GT Boards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20">
        <div className="container">
          <div className="bg-secondary rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you're a student, teacher, or advocate, there's a place for you in our movement. Join us in transforming gifted education across America.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/apply">Apply to Join</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/resources/start-board">Start a GT Board</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-foreground">Latest Updates</h2>
            <Link to="/blog" className="text-primary hover:underline flex items-center">
              View all posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
            title: "New Automatic Enrollment Bill Introduced",
            date: "Dec 1, 2024",
            excerpt: "A groundbreaking bill supporting automatic enrollment in gifted programs..."
          }, {
            title: "Student Board Success in Texas",
            date: "Nov 28, 2024",
            excerpt: "The Texas GT Student Board celebrates its first year of advocacy achievements..."
          }, {
            title: "NGTSAB Annual Conference 2024",
            date: "Nov 15, 2024",
            excerpt: "Join us for our annual gathering of student advocates from across the nation..."
          }].map((post, i) => <Card key={i} className="shadow-card hover:shadow-hover transition-shadow">
                <CardHeader>
                  <CardDescription>{post.date}</CardDescription>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;
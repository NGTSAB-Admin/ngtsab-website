import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function Bylaws() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Bylaws</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Official bylaws governing the National Gifted and Talented Student Advocacy Board.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-2">NGTSAB Official Bylaws</h2>
                  <p className="text-muted-foreground">
                    These bylaws establish the structure, governance, and operational procedures of the 
                    National Gifted and Talented Student Advocacy Board. They outline membership requirements, 
                    officer roles, meeting procedures, and amendment processes.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Button asChild>
                  <a 
                    href="https://drive.google.com/file/d/1pxrq1idX-MFRfI1kCVx9KpXKWyn9Msh0/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Bylaws
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    href="https://drive.google.com/file/d/1pxrq1idX-MFRfI1kCVx9KpXKWyn9Msh0/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open in New Tab
                  </a>
                </Button>
              </div>

              <div className="border rounded-lg overflow-hidden bg-muted/30">
                <iframe 
                  src="https://drive.google.com/file/d/1pxrq1idX-MFRfI1kCVx9KpXKWyn9Msh0/preview" 
                  width="100%" 
                  height="600"
                  className="w-full"
                  title="NGTSAB Bylaws Document"
                  allow="autoplay"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}

import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, User, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const posts: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  content: string;
}> = {
  "1": {
    title: "New Automatic Enrollment Bill Introduced in Congress",
    excerpt: "A groundbreaking bill supporting automatic enrollment in gifted programs has been introduced with bipartisan support.",
    date: "December 1, 2024",
    category: "Legislation",
    author: "Alex Johnson",
    content: `
The landscape of gifted education in America may be on the verge of a significant transformation. Last week, a groundbreaking bill supporting automatic enrollment in gifted programs was introduced in Congress with bipartisan support, marking a major milestone in our advocacy efforts.

## What the Bill Proposes

The Gifted Education Access Act of 2024 would require states receiving federal education funding to implement automatic enrollment systems for their gifted and talented programs. Key provisions include:

- **Universal screening** for all students in grades K-3
- **Automatic enrollment** based on objective criteria
- **Parent notification** within 30 days of qualification
- **Opt-out provisions** rather than opt-in requirements

## Why This Matters

For years, gifted programs have relied on parent referrals and opt-in systems that systematically exclude students from underrepresented backgrounds. Research consistently shows that when automatic enrollment is implemented:

- Participation from underrepresented groups increases by 40-60%
- Overall program quality improves as diversity increases
- Long-term educational outcomes improve for all students

## NGTSAB's Role

Our organization has been at the forefront of this legislative push. Student advocates from 15 states traveled to Washington D.C. to meet with congressional representatives and share their personal stories about the impact of gifted education access.

"When I was automatically enrolled in my school's gifted program in 4th grade, it changed my entire trajectory," said Maria Santos, a high school junior from Texas. "Without automatic enrollment, I never would have known I qualified."

## What Happens Next

The bill has been referred to the House Education and the Workforce Committee. We anticipate hearings to begin in early 2025. In the meantime, we're mobilizing student advocates across the country to contact their representatives and share their support for this critical legislation.

## How You Can Help

1. Contact your congressional representatives
2. Share your story with NGTSAB
3. Organize awareness events at your school
4. Follow our social media for updates and action alerts

This is a pivotal moment for gifted education in America. Together, we can ensure that every qualified student has access to the programs they deserve.
    `,
  },
  "2": {
    title: "Student Board Success Story: Texas GT Advocacy Board",
    excerpt: "The Texas GT Student Board celebrates its first year of advocacy achievements, including policy changes in three districts.",
    date: "November 28, 2024",
    category: "Success Stories",
    author: "Sarah Chen",
    content: `
When a group of passionate students in Texas decided to form a state-level GT advocacy board just one year ago, they had ambitious goals but uncertain prospects. Today, we're thrilled to celebrate their remarkable achievements that have resulted in concrete policy changes across three school districts.

## The Beginning

The Texas GT Student Advocacy Board (TGTSAB) was founded in November 2023 by a coalition of high school students who recognized a gap in gifted education advocacy. While adult-led organizations existed, student voices were largely absent from policy discussions.

"We realized that no one was asking students what they actually needed," explained founder Emma Rodriguez. "Adults were making decisions about our education without ever consulting us."

## First Year Achievements

In just twelve months, TGTSAB has accomplished remarkable results:

### Houston ISD Policy Reform
After months of advocacy, Houston ISD adopted new guidelines requiring annual screening of all elementary students for gifted services, replacing the previous referral-only system.

### Dallas ISD Curriculum Expansion
Working with district administrators, TGTSAB successfully advocated for expanded advanced curriculum options in underserved schools.

### Austin ISD Equity Initiative
The board's presentation to the Austin ISD school board led to a new equity initiative aimed at increasing diverse representation in gifted programs by 30% over three years.

## Keys to Success

The TGTSAB leadership shared their strategies for effective advocacy:

1. **Data-driven arguments**: Always come prepared with research and statistics
2. **Coalition building**: Partner with parents, teachers, and community organizations
3. **Persistent engagement**: Attend every school board meeting
4. **Personal stories**: Combine data with compelling narratives
5. **Professional approach**: Treat every interaction as an opportunity to build credibility

## Looking Ahead

With their first year behind them, TGTSAB is setting even more ambitious goals for 2025, including expansion to all major Texas metropolitan areas and a legislative advocacy campaign at the state level.

## Start Your Own Board

Inspired by TGTSAB's success? NGTSAB provides resources and mentorship for students looking to start advocacy boards in their own states. Visit our "Start a Board" page to learn more.
    `,
  },
  "3": {
    title: "NGTSAB Annual Conference 2024 Recap",
    excerpt: "Over 200 student advocates gathered for our annual conference to share strategies and build connections.",
    date: "November 15, 2024",
    category: "Events",
    author: "Marcus Williams",
    content: `
Last weekend, over 200 student advocates from across the nation gathered in Chicago for the 2024 NGTSAB Annual Conference. The three-day event was our largest and most impactful conference to date, featuring workshops, keynote speakers, and networking opportunities that will fuel advocacy efforts for years to come.

## Conference Highlights

### Keynote Address: Senator Maria Gonzalez
Senator Gonzalez, a former gifted student herself, delivered an inspiring keynote about the power of student voices in shaping education policy. Her message was clear: "You are not the leaders of tomorrow—you are the leaders of today."

### Workshop Sessions
Attendees participated in over 30 workshop sessions covering topics including:
- Effective communication with school administrators
- Building coalitions with parent organizations
- Social media strategies for advocacy
- Understanding education policy and legislation
- Mental health advocacy in gifted programs

### State Delegation Meetings
Each state delegation had dedicated time to plan coordinated advocacy efforts for the coming year, with NGTSAB staff providing guidance and resources.

## Student Voices

"This conference gave me the tools and confidence I needed to make real change in my community," said Jordan Lee from California. "I'm leaving here with a concrete action plan and a network of supporters."

"Meeting other students who share my passion for gifted education equity was incredible," added Priya Patel from Georgia. "We're not alone in this fight."

## Awards and Recognition

The conference concluded with our annual awards ceremony, recognizing outstanding advocates:

- **Advocate of the Year**: Maria Santos, Texas
- **Rising Star Award**: James Chen, New York
- **Board of the Year**: Colorado GT Student Advocacy Board
- **Innovation Award**: Florida Digital Advocacy Initiative

## Save the Date

Mark your calendars for the 2025 NGTSAB Annual Conference, scheduled for November 7-9 in Denver, Colorado. Early registration will open in May 2025.

Thank you to all who attended and made this year's conference an unforgettable experience. Together, we're building a movement that will transform gifted education in America.
    `,
  },
  "4": {
    title: "Why Student Voice Matters in Gifted Education",
    excerpt: "Research shows that programs designed with student input are more effective and better serve diverse learners.",
    date: "November 8, 2024",
    category: "Opinion",
    author: "Emily Rodriguez",
    content: `
In education policy discussions, adults often speak about students rather than with them. This approach, while well-intentioned, misses a critical perspective that can make the difference between effective and ineffective programs. As someone who has been both a gifted student and now a student advocate, I believe it's time we fundamentally change how we approach gifted education reform.

## The Research Is Clear

Studies consistently demonstrate that educational programs designed with student input outperform those designed without it. A 2023 meta-analysis published in the Journal of Educational Psychology found that:

- Programs with formal student feedback mechanisms showed 23% higher student satisfaction
- Schools with student advisory boards had 18% better retention in advanced programs
- Curriculum developed with student input received significantly higher engagement scores

## What Students Know That Adults Don't

While educators and administrators bring valuable expertise, students offer insights that adults simply cannot provide:

### Lived Experience of the System
Students experience the day-to-day reality of gifted programs. We know which aspects work and which create unnecessary barriers or stress.

### Peer Dynamics
Students understand how program structures affect social relationships and the sometimes complex dynamics of being identified as "gifted."

### Modern Context
Today's students navigate challenges that didn't exist a generation ago, from social media pressures to changing career landscapes.

## Barriers to Student Voice

Despite the clear benefits, meaningful student participation in education policy remains rare. Common barriers include:

1. **Tokenism**: Students are included superficially without real influence
2. **Age bias**: Assumptions that young people lack the maturity for policy discussions
3. **Structural exclusion**: Meetings held during school hours or in inaccessible locations
4. **Lack of training**: Students aren't taught how to participate effectively in policy processes

## A Better Model

At NGTSAB, we've developed a model for meaningful student engagement that other organizations can adapt:

- **Equal representation**: Student voices carry equal weight in decisions
- **Capacity building**: Training programs that prepare students for effective advocacy
- **Accessible participation**: Flexible meeting times and virtual options
- **Direct action**: Students lead campaigns, not just advise on them

## The Path Forward

True reform in gifted education requires a partnership between students, educators, administrators, and policymakers. Each group brings essential perspectives, but too often student voices are the missing piece.

If you're an adult reading this, I challenge you to examine your own practices. Are students truly partners in your work, or merely recipients of decisions made on their behalf?

If you're a student, know that your voice matters and your experiences are valuable. Organizations like NGTSAB exist to amplify your voice and turn your insights into action.

Together, we can build a gifted education system that truly serves all students.
    `,
  },
  "5": {
    title: "5 Steps to Advocate for Automatic Enrollment in Your State",
    excerpt: "A practical guide for students who want to push for automatic enrollment legislation in their home states.",
    date: "October 25, 2024",
    category: "How-To",
    author: "Jordan Lee",
    content: `
Automatic enrollment in gifted programs is one of the most effective ways to increase equity and access. If your state doesn't currently have automatic enrollment legislation, you can help change that. Here's a practical, step-by-step guide to getting started.

## Step 1: Understand Your Current State Policy

Before you can advocate for change, you need to understand the current landscape:

- Research your state's current gifted education laws
- Identify how students are currently identified and enrolled
- Find out which state agencies oversee gifted education
- Understand the legislative process in your state

**Resources**: NGTSAB maintains a database of state policies. Check our Legislation page for current information about your state.

## Step 2: Build Your Coalition

Effective advocacy requires allies. Start building your coalition by reaching out to:

- **Other students**: Form or join a student advocacy group
- **Parents**: Connect with parent-teacher organizations
- **Teachers**: Find educators who support gifted education reform
- **Community organizations**: Look for nonprofits focused on education equity
- **Local business leaders**: Many understand the economic importance of education

**Tip**: Create a shared document where coalition members can track contacts, talking points, and action items.

## Step 3: Develop Your Message

Your advocacy message should be:

- **Clear**: State exactly what policy change you want
- **Compelling**: Include personal stories alongside data
- **Solution-oriented**: Present automatic enrollment as a positive change, not just a criticism of current policy

### Key Talking Points:
1. Automatic enrollment increases diversity in gifted programs
2. Current opt-in systems disadvantage students whose parents lack information or time
3. Research shows automatic enrollment improves outcomes without lowering standards
4. Other states have successfully implemented these policies

## Step 4: Engage with Lawmakers

Now it's time to take your message to decision-makers:

### Research Your Representatives
- Identify which legislators serve on education committees
- Review their voting records on education issues
- Find out if any have expressed interest in gifted education

### Request Meetings
- Write professional emails requesting meetings
- Prepare a one-page brief summarizing your position
- Bring a small delegation (3-5 people) to meetings
- Follow up with thank-you notes and additional information

### Testify at Hearings
- Monitor legislative calendars for relevant hearings
- Request opportunities to provide public testimony
- Prepare written and oral statements
- Practice your delivery

## Step 5: Maintain Momentum

Advocacy is a marathon, not a sprint. Keep your campaign going by:

- **Regular communication**: Keep coalition members informed and engaged
- **Media outreach**: Write op-eds and contact local journalists
- **Social media**: Share updates and amplify your message online
- **Documentation**: Track all activities, meetings, and outcomes
- **Celebration**: Acknowledge wins, no matter how small

## Common Challenges and Solutions

**Challenge**: Legislators don't respond to meeting requests
**Solution**: Attend public events, submit written comments, connect through constituent services

**Challenge**: Opposition from those who benefit from current system
**Solution**: Emphasize that automatic enrollment expands access without removing existing services

**Challenge**: Burnout among advocates
**Solution**: Distribute responsibilities, celebrate progress, take breaks when needed

## NGTSAB Support

Remember, you don't have to do this alone. NGTSAB provides:

- Template letters and talking points
- Connections to experienced advocates
- Training webinars on effective advocacy
- State-specific guidance and resources

Ready to get started? Contact us at connect@ngtsab.org to connect with our state policy team.
    `,
  },
  "6": {
    title: "The Equity Case for Automatic Enrollment",
    excerpt: "Understanding how automatic enrollment addresses systemic inequities in gifted program access.",
    date: "October 18, 2024",
    category: "Legislation",
    author: "Priya Patel",
    content: `
Gifted education in America has an equity problem. While talent is distributed equally across all demographic groups, access to gifted programs is not. Automatic enrollment isn't just a policy preference—it's a necessary correction to systemic inequities that have persisted for decades.

## The Numbers Tell the Story

The disparities in gifted program participation are stark:

- Black students are **50% less likely** to be identified for gifted programs than white students with identical test scores
- Hispanic students are **40% less likely** to be identified compared to white peers
- Students from low-income families are **significantly underrepresented** even when controlling for academic performance
- Students with disabilities are often excluded entirely from gifted identification processes

These gaps persist even in districts with robust gifted programs and well-intentioned educators.

## Why Opt-In Systems Fail

Traditional gifted identification relies heavily on teacher and parent referrals. This system has inherent biases:

### Information Asymmetry
Parents must know that gifted programs exist and understand how to nominate their children. This knowledge is not equally distributed—families with more education and resources have significant advantages.

### Implicit Bias in Referrals
Research shows that teachers are less likely to refer students of color and students from low-income backgrounds for gifted evaluation, even when those students demonstrate high ability.

### Cultural Factors
Some families may be unfamiliar with the concept of "gifted education" or may be hesitant to advocate for special treatment for their children.

### Resource Barriers
The time and effort required to navigate the referral process can be prohibitive for families facing economic challenges.

## How Automatic Enrollment Works

Automatic enrollment fundamentally changes the identification paradigm:

1. **Universal screening**: All students are assessed using objective measures
2. **Clear criteria**: Qualification standards are transparent and consistently applied
3. **Default inclusion**: Students who meet criteria are enrolled unless parents opt out
4. **Reduced barriers**: The burden shifts from families proving eligibility to programs demonstrating why students shouldn't participate

## Evidence of Effectiveness

Districts that have implemented automatic enrollment have seen dramatic results:

### Broward County, Florida
After implementing universal screening and automatic enrollment:
- Hispanic student participation increased by 130%
- Black student participation increased by 80%
- Overall program quality improved as measured by student outcomes

### Maryland Statewide Initiative
Maryland's automatic enrollment pilot showed:
- 40% increase in economically disadvantaged student participation
- No decline in program rigor or outcomes
- Improved school climate and reduced tracking-related stigma

## Addressing Concerns

Critics of automatic enrollment raise several concerns that deserve serious responses:

**"Won't this lower program quality?"**
Evidence shows the opposite. Diverse programs tend to be higher quality, and automatic enrollment typically raises, not lowers, identification standards by using objective measures.

**"What about parent choice?"**
Automatic enrollment preserves choice through opt-out provisions. Parents who don't want their children to participate can still decline.

**"Is this just about meeting diversity quotas?"**
No. Automatic enrollment is about removing barriers that prevent already-qualified students from accessing programs. It doesn't lower standards—it ensures standards are applied fairly.

## The Moral Imperative

Beyond the practical arguments, there's a fundamental moral case for automatic enrollment. Every child deserves access to education that meets their needs. When systems create barriers based on factors outside students' control—their family's knowledge, resources, or background—we fail our obligation to those children.

Gifted education, properly implemented, can be a powerful tool for equity. It can identify and nurture talent that might otherwise go unrecognized. But only if we remove the barriers that currently restrict access.

## Take Action

Ready to advocate for automatic enrollment in your community? Here's how to start:

1. Learn about your state's current policies
2. Connect with local advocacy organizations
3. Attend school board meetings
4. Contact your state legislators
5. Join NGTSAB's policy network

The evidence is clear. The moral case is compelling. Now it's time for action.
    `,
  },
};

interface Comment {
  id: number;
  name: string;
  date: string;
  content: string;
}

const initialComments: Record<string, Comment[]> = {
  "1": [
    { id: 1, name: "Sarah M.", date: "December 2, 2024", content: "This is such exciting news! I've been waiting for federal action on automatic enrollment for years. Thank you NGTSAB for your advocacy work!" },
    { id: 2, name: "David K.", date: "December 1, 2024", content: "As a parent of a gifted student who was almost missed by our district's opt-in system, I can't stress enough how important this legislation is." },
  ],
  "2": [
    { id: 1, name: "Teacher in Texas", date: "November 29, 2024", content: "I've seen firsthand how the TGTSAB has made a difference in our district. These students are incredible advocates." },
  ],
  "3": [
    { id: 1, name: "Conference Attendee", date: "November 16, 2024", content: "Best conference I've ever attended! Can't wait for Denver next year." },
  ],
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? posts[id] : null;
  const [comments, setComments] = useState<Comment[]>(id ? initialComments[id] || [] : []);
  const [newComment, setNewComment] = useState({ name: "", content: "" });

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name.trim() && newComment.content.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        name: newComment.name,
        date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
        content: newComment.content,
      };
      setComments([comment, ...comments]);
      setNewComment({ name: "", content: "" });
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero-gradient text-primary-foreground py-12">
        <div className="container">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              {comments.length} {comments.length === 1 ? "comment" : "comments"}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={index} className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">{paragraph.replace("## ", "")}</h2>;
              }
              if (paragraph.startsWith("### ")) {
                return <h3 key={index} className="font-serif text-xl font-semibold mt-6 mb-3 text-foreground">{paragraph.replace("### ", "")}</h3>;
              }
              if (paragraph.startsWith("- **")) {
                const match = paragraph.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
                if (match) {
                  return (
                    <li key={index} className="ml-6 mb-2 text-muted-foreground">
                      <strong className="text-foreground">{match[1]}</strong>{match[2] ? `: ${match[2]}` : ""}
                    </li>
                  );
                }
              }
              if (paragraph.startsWith("- ")) {
                return <li key={index} className="ml-6 mb-2 text-muted-foreground">{paragraph.replace("- ", "")}</li>;
              }
              if (paragraph.startsWith("1. ") || paragraph.startsWith("2. ") || paragraph.startsWith("3. ") || paragraph.startsWith("4. ") || paragraph.startsWith("5. ")) {
                return <li key={index} className="ml-6 mb-2 text-muted-foreground list-decimal">{paragraph.replace(/^\d+\.\s/, "")}</li>;
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return <p key={index} className="font-semibold text-foreground my-4">{paragraph.replace(/\*\*/g, "")}</p>;
              }
              if (paragraph.trim() === "") {
                return null;
              }
              return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
            })}
          </div>
        </div>
      </article>

      <Separator className="max-w-3xl mx-auto" />

      {/* Comments Section */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-2xl font-bold mb-8 flex items-center gap-2">
            <MessageCircle className="h-6 w-6" />
            Comments ({comments.length})
          </h2>

          {/* Comment Form */}
          <Card className="mb-8">
            <CardHeader>
              <h3 className="font-semibold">Leave a Comment</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitComment} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your name"
                    value={newComment.name}
                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Write your comment..."
                    value={newComment.content}
                    onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit">Post Comment</Button>
              </form>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No comments yet. Be the first to comment!</p>
            ) : (
              comments.map((comment) => (
                <Card key={comment.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{comment.name}</span>
                      <span className="text-muted-foreground text-sm">• {comment.date}</span>
                    </div>
                    <p className="text-muted-foreground">{comment.content}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

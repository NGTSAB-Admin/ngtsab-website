import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, User, MessageCircle, ExternalLink, FileText, Presentation } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

// Import blog images
import nagc25TeamImg from "@/assets/blog/ngtsab-nagc25-team.jpg";
import nagc25PresentationImg from "@/assets/blog/ngtsab-nagc25-presentation.jpg";
import nagc25SessionImg from "@/assets/blog/ngtsab-nagc25-session.jpg";
import nagc25GroupImg from "@/assets/blog/ngtsab-nagc25-group.jpg";
import aboutFoundersImg from "@/assets/blog/ngtsab-about-founders.jpg";
import recruitingImg from "@/assets/blog/ngtsab-recruiting.jpg";
interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  content: React.ReactNode;
  embed?: {
    type: "google-doc" | "google-slides" | "google-drive-pdf";
    src: string;
    title: string;
    link: string;
  };
  cta?: {
    text: string;
    link: string;
    internal?: boolean;
  };
}
const posts: Record<string, BlogPost> = {
  "colorado-update-dec-2025": {
    title: "A December 2025 Update on Colorado's Automatic Enrollment",
    excerpt: "Colorado is currently developing a new statewide automatic enrollment bill, led by Representative Jacque Phillips and created in collaboration with students.",
    date: "December 29, 2025",
    category: "Legislation",
    author: "Carter FitzGerald",
    content: <>
        <p>Colorado is currently developing a new statewide automatic enrollment bill, led by Representative Jacque Phillips and created in collaboration with students from Mountain Vista High School. The proposed legislation follows the repeal of the John W. Buckner Automatic Enrollment in Advanced Course Grant Program under SB25‑315, which removed the grant funding mechanism but not the underlying policy goal.</p>
        
        <p>The current draft bill would establish a statewide automatic enrollment policy aligned with Postsecondary and Workforce Readiness (PWR) objectives. Instead of relying on a separate grant, the policy would integrate automatic enrollment into existing systems—advanced coursework, concurrent enrollment, and PWR pathways—ensuring continued access without requiring a separate funding structure.</p>
        
        <h3>Current Work and Stakeholder Engagement</h3>
        
        <p>NGTSAB student leaders Carter FitzGerald, Abigail Riead, and Caleb Olson are actively gathering support from statewide stakeholder organizations, education advocates, families, and school districts. They continue to meet with district leaders to refine the language and ensure the bill is both practical and equitable.</p>
        
        <p>Representative Jacque Phillips remains committed to sponsoring the bill through the legislative session, with students preparing testimony and coordinating with supporters to strengthen the bill's introduction.</p>
        
        <h3>Why This Bill Matters for Colorado</h3>
        
        <p>Colorado previously saw positive momentum under SB19‑059 (the Buckner Grant Program), which expanded participation in advanced coursework statewide. Restoring automatic enrollment without relying on grants builds on this progress while promoting:</p>
        
        <ul>
          <li>Objective placement in advanced coursework</li>
          <li>Greater equity for underserved students</li>
          <li>Increased college and career readiness</li>
          <li>Consistency across districts</li>
        </ul>
        
        <h3>How Students Can Get Involved</h3>
        
        <p>If you are a Colorado student who wants to support or testify for this bill during the upcoming legislative session, NGTSAB encourages you to join our advocacy efforts.</p>
        
        <p>📩 Email us at: <a href="mailto:connect@ngtsab.org" className="text-primary hover:underline">connect@ngtsab.org</a></p>
        
        <p>Your voice can help shape one of Colorado's most important equity‑centered education policies.</p>
      </>,
    embed: {
      type: "google-doc",
      src: "https://docs.google.com/document/d/e/2PACX-1vQ_TK778qRx4l80TDRJnpHqBGx4LBFWYAfJ3P9oSBb8JRWS8Bde44pOo-_uvWGgED-dwOd5HppQrLPF/pub?embedded=true",
      title: "Colorado Automatic Enrollment Bill Draft - December 2025",
      link: "https://docs.google.com/document/d/12A47XFu1RlEDspHnsJEnT9hT6vxa7sk5sFV7EsZIJXs/edit?usp=sharing"
    }
  },
  "nagc26-proposals-open": {
    title: "NAGC26 Proposals are OPEN",
    excerpt: "Proposal submissions are now open for NAGC26, the annual national conference hosted by the National Association for Gifted Children.",
    date: "December 15, 2025",
    category: "Events",
    author: "Caleb Olson",
    content: <>
        <p>Proposal submissions are now open for NAGC26, the annual national conference hosted by the National Association for Gifted Children—the premiere gifted‑education conference in the United States. Each year, thousands of educators, psychologists, researchers, and policymakers gather to share best practices, explore new research, and shape the future of gifted education.</p>
        
        <p>Last year at NAGC25, NGTSAB leaders Carter FitzGerald, Abigail Riead, and Caleb Olson made history as the first student presenters in the conference's 70‑year history. Their session opened doors, changed minds, and signaled the beginning of a new era—one in which student expertise is valued alongside that of professionals.</p>
        
        <h3 className="font-serif text-xl my-[10px]">Why Student Voice Matters at NAGC</h3>
        
        <p>NAGC is where national conversations happen. It is where policy ideas take shape, where educators learn new strategies, and where the field decides what comes next. If student voices aren't present, then students aren't represented in the decisions that directly impact them.</p>
        
        <p>Teachers need to hear:</p>
        <ul>
          <li>What works for gifted students</li>
          <li>What doesn't work</li>
          <li>What supports are missing</li>
          <li>How policies feel on the ground</li>
          <li>What challenges real students face daily</li>
        </ul>
        
        <p>Gifted education transforms when students speak for themselves. NAGC26 is your opportunity to help shape that transformation.</p>
        
        <h3>We Encourage ALL Gifted Students to Submit Proposals</h3>
        
        <p>You don't need years of experience, a polished research study, or a perfect idea. What you do need is:</p>
        <ul>
          <li>A topic you care deeply about</li>
          <li>A perspective educators need to understand</li>
          <li>A willingness to share your experiences or findings</li>
        </ul>
        
        <p>If you need help shaping your idea, drafting your proposal, or preparing session content, NGTSAB is here to support you. Email us anytime at <a href="mailto:connect@ngtsab.org" className="text-primary hover:underline">connect@ngtsab.org</a>—and if you do submit a proposal, please let us know! We want to cheer you on and help however we can.</p>
        
        <p>This is a historic moment for student advocacy in gifted education. We hope to see many of you presenting at NAGC26 and continuing the movement our NGTSAB founders began.</p>
      </>,
    cta: {
      text: "Submit Your NAGC26 Proposal",
      link: "https://www.nagc.org/nagc26-call-for-proposals"
    }
  },
  "nagc-student-focus-group": {
    title: "NAGC's New Student Focus Group: A Milestone for Student Voice",
    excerpt: "The National Association for Gifted Children (NAGC) has announced an exciting initiative: a new student focus group designed to better understand the lived experiences of gifted students.",
    date: "December 8, 2025",
    category: "Events",
    author: "Caleb Olson",
    content: <>
        <p>The National Association for Gifted Children (NAGC) has announced an exciting and unprecedented initiative: a new student focus group designed to better understand the lived experiences, needs, and challenges of gifted students. This focus group will be facilitated by former NAGC President Shelagh Gallagher and will begin with Colorado students—with the strong hope and expectation that it will soon expand to other states across the country.</p>
        
        <p>This milestone didn't happen by chance. It is a direct result of the NGTSAB's November meeting with the NAGC Board of Directors at NAGC25, where NGTSAB founders Carter FitzGerald, Caleb Olson, and Abigail Riead advocated for deeper, more authentic student involvement in national gifted education policy. During those discussions, the NGTSAB highlighted that NAGC's past attempts to involve students had often been short‑lived or ineffective, not because of lack of desire, but because no structured channel existed for meaningful student engagement.</p>
        
        <p>Historically, NAGC has had minimal direct student representation. Many of its initiatives have been informed primarily by educators, researchers, and policymakers. While these voices are essential, they do not replace the insights of the students who experience gifted programming every day. NGTSAB made the case that if NAGC wants gifted education to evolve in ways that reflect genuine student needs—especially at the secondary level—students must be present at the table.</p>
        
        <p>The result? NAGC's first-ever structured student focus group, marking a major shift in how the organization approaches student partnerships.</p>
        
        <p>The video recordings from this focus group will be featured during NAGC Legislative Day in Washington, D.C., where NAGC members meet with members of Congress and advocate for improved funding, policy, and support for gifted education nationwide. This means student voices—real stories, real experiences—will directly shape federal-level advocacy efforts.</p>
        
        <p>NGTSAB is immensely proud of this development. While currently only in Colorado, it represents not only the success of our advocacy, but the beginning of a long-overdue cultural shift within the nation's leading gifted education organization. Student voices are powerful, and when given a platform, they can fundamentally transform how educational systems operate.</p>
      </>
  },
  "ngtsab-nagc25": {
    title: "First Student Presenters in NAGC's 70-Year History: NGTSAB at NAGC25",
    excerpt: "For the first time in the conference's 70-year history, students were featured as concurrent session presenters at NAGC25.",
    date: "November 15, 2025",
    category: "Success Stories",
    author: "Caleb Olson",
    content: <>
        <div className="my-8">
          <img src={nagc25TeamImg} alt="NGTSAB founders at NAGC25" className="w-full rounded-lg shadow-lg object-cover max-h-96" />
        </div>
        
        <p>At the 2025 National Association for Gifted Children annual conference (NAGC25), an extraordinary milestone was achieved: for the first time in the conference's 70-year history, students were featured as concurrent session presenters. NGTSAB founders Caleb Olson, Carter FitzGerald, and Abigail Riead proudly served as the inaugural student presenters, marking a transformational moment for student involvement in national gifted education dialogue.</p>
        
        <p>Their session, titled "Do Our Worlds Align? Bridging the Gap Between Student and Teacher Perceptions of Gifted Learners," presented original research conducted across multiple Colorado school districts. Hundreds of students and teachers participated, offering insight into similarities and differences between the support gifted students want and the support teachers believe they are providing.</p>
        
        <div className="my-8">
          <img src={nagc25PresentationImg} alt="NGTSAB presentation at NAGC25" className="w-full rounded-lg shadow-lg object-cover max-h-96" />
        </div>
        
        <p>Their findings revealed substantial disconnects in areas such as academic challenge, emotional support, workload expectations, and communication. Their presentation also offered strategies to improve gifted instruction—including building stronger teacher-student partnerships, expanding access to advanced coursework, and improving identification and support services.</p>
        
        <div className="my-8">
          <img src={nagc25SessionImg} alt="NGTSAB session audience at NAGC25" className="w-full rounded-lg shadow-lg object-cover max-h-96" />
        </div>
        
        <p>Beyond presenting, the founders had the invaluable opportunity to attend sessions led by some of the nation's foremost experts in gifted education. They engaged in discussions with leading researchers and advocates including:</p>
        
        <ul>
          <li><strong>Dr. Jonathan Plucker</strong> (Johns Hopkins University), a national leader in education policy and automatic enrollment research</li>
          <li><strong>Dr. Matt Zakreski</strong>, NGTSAB's sponsor and a prominent psychologist specializing in gifted youth</li>
          <li><strong>Mark Hess</strong>, gifted education author and curriculum leader</li>
          <li>The <strong>NAGC Board of Directors</strong></li>
        </ul>
        
        <p>These conversations were deeply impactful, shaping the future direction of NGTSAB's focus areas and strengthening collaborations with national leaders.</p>
        
        <p>Being the first student presenters at NAGC was more than an honor—it was a statement. It said that gifted students are not just subjects of research or recipients of services; they are experts in their own educational experiences. They are leaders, analysts, and advocates whose perspectives can and should influence national conversations.</p>
        
        <p>NGTSAB hopes that this landmark moment will pave the way for continued student involvement at NAGC events, opening doors for gifted learners across the nation to engage meaningfully in shaping their own educational landscape.</p>
        
        <div className="my-8">
          <img src={nagc25GroupImg} alt="NGTSAB group photo at NAGC25" className="w-full rounded-lg shadow-lg object-cover max-h-96" />
        </div>
      </>,
    embed: {
      type: "google-slides",
      src: "https://docs.google.com/presentation/d/e/2PACX-1vTpGH1L-8HHBRWd7txdiNBGkosbnFJhKb_yBsbyuu3I-HN-VZSs2ha5JddPnIaiyA/pubembed?start=false&loop=false&delayms=3000",
      title: "Do Our Worlds Align? Presentation Slides",
      link: "https://docs.google.com/presentation/d/1Q3L5KI5bR7wKN-Ikill1mqiB4gPYoqNd/edit?usp=sharing"
    }
  },
  "students-present-cagt": {
    title: "Students Present at CAGT",
    excerpt: "NGTSAB student leaders presented at the Colorado Association for the Gifted and Talented Conference with their session on the Procrastination Paradox.",
    date: "October 21, 2025",
    category: "Success Stories",
    author: "Caleb Olson",
    content: <>
        <p>This past weekend, NGTSAB student leaders Abigail Riead, Caleb Olson, and Carter FitzGerald had the honor of presenting at the Colorado Association for the Gifted and Talented (CAGT) Conference, one of Colorado's most important gatherings of gifted educators, coordinators, and advocates. Their session, titled "From Delay to Drive: Empowering Gifted Minds Through the Procrastination Paradox," was one of the only student‑led presentations at the entire conference—making their contribution particularly meaningful.</p>
        
        <p>Their presentation explored a critical and often misunderstood phenomenon: why gifted students tend to struggle disproportionately with procrastination. They described how the asynchronous development of executive functioning—paired with perfectionism, heightened sensitivity, and the pressure to achieve—creates unique procrastination patterns among gifted learners. Importantly, they reframed procrastination not as a moral failing, but as a neurological and behavioral dynamic that, when understood correctly, can become a source of strength.</p>
        
        <p>The students shared research‑based strategies for channeling procrastination into productivity, including:</p>
        
        <ul>
          <li>Breaking tasks into high‑clarity micro‑steps</li>
          <li>Leveraging time pressure strategically</li>
          <li>Using accountability structures and intentional deadlines</li>
          <li>Reframing tasks to increase intrinsic motivation</li>
          <li>Understanding the emotional roots behind "avoidance cycles"</li>
        </ul>
        
        <p>Their insights resonated deeply with educators in attendance, many of whom expressed gratitude for finally hearing the student perspective on an issue teachers observe but rarely understand from the inside.</p>
        
        <p>This CAGT presentation marks another milestone in increasing student voice at professional gifted‑education conferences. We are incredibly proud of Abigail, Caleb, and Carter for their leadership and expertise.</p>
      </>,
    embed: {
      type: "google-slides",
      src: "https://docs.google.com/presentation/d/e/2PACX-1vSiWALUMpmg0hF5CKYEqPgwFpgUV2NMGwVtaZA06a5Gc6QhNNywH5wVlyRIFrWudgYlrWrwWjOhight/pubembed?start=false&loop=false&delayms=10000",
      title: "From Delay to Drive: The Procrastination Paradox",
      link: "https://docs.google.com/presentation/d/1_GBV4d-p12DS2R3BKnQy-PfjOBRX9aLMl9UonwFttBE/edit?usp=sharing"
    }
  },
  "recruiting-state-reps": {
    title: "We're Recruiting: Become an NGTSAB State Representative",
    excerpt: "NGTSAB is officially recruiting new state representatives from across the country to ensure gifted students from every state have a voice.",
    date: "October 8, 2025",
    category: "GT Boards",
    author: "Abigail Riead",
    content: <>
        <p>The National Gifted and Talented Student Advocacy Board (NGTSAB) is excited to announce that we are officially recruiting new state representatives from across the country! As our work expands nationally, we are committed to ensuring that gifted students from every state have a voice—one that is informed, empowered, and represented at the highest levels of advocacy.</p>
        
        <p>State representatives play a pivotal role in the growth of NGTSAB. They serve as the link between the national board and the gifted students, families, and educators in their home states. By gathering local perspectives, identifying barriers, and highlighting regional successes, representatives help ensure that gifted education advocacy reflects the diverse needs of learners nationwide.</p>
        
        <p>A key focus for state representatives will be promoting the development of state‑level and school‑level GT Student Boards. Colorado—the home state of NGTSAB's founders—has demonstrated how effective these boards can be when students are trusted to speak for themselves. Yet, across the U.S., very few schools or districts include meaningful student voice in gifted programming. Creating more GT Boards helps gifted students advocate for their own needs, strengthens partnerships with educators, and builds a pipeline of student leaders ready to shape education policy.</p>
        
        <p>Another major area of advocacy is automatic enrollment legislation—policies that ensure high‑achieving and advanced learners are automatically placed into advanced or accelerated coursework when they demonstrate readiness. This policy has become a powerful equity tool in several states, ensuring that historically underrepresented students gain access to challenging academic opportunities without relying solely on referrals or teacher recommendations. As a state representative, you will help spread awareness, build support, and encourage your state leaders to consider similar policies.</p>
        
        <p>NGTSAB believes deeply that student advocacy drives meaningful change. If you are a passionate gifted learner ready to lead, collaborate, and represent gifted students in your state, we would love to have you on board. Whether you have years of advocacy experience or are just beginning to explore the world of educational policy, your voice matters—and your state needs it.</p>
        
        <div className="my-8">
          <img src={recruitingImg} alt="NGTSAB State Representative Recruitment" className="w-full rounded-lg shadow-lg object-cover max-h-96" />
        </div>
        
        <p>Applications are open now! Together, we can elevate gifted education across the country—one state at a time.</p>
      </>,
    cta: {
      text: "Apply Now",
      link: "/apply",
      internal: true
    }
  },
  "how-to-testify": {
    title: "How to Testify for Legislation: A Guide for Students",
    excerpt: "A step-by-step guide covering written testimony, contacting legislators, and school board outreach for student advocates.",
    date: "September 2, 2025",
    category: "Legislation",
    author: "Carter FitzGerald",
    content: <>
        <p>One of the most impactful ways students can advocate for gifted education is by participating in the legislative process. Whether at the local, state, or federal level, lawmakers value authentic perspectives—and student voices carry unique credibility. This guide will walk you through the main pathways for engaging with legislators and education leaders.</p>
        
        <h3>1. Written Testimony</h3>
        
        <p>Written testimony is a formal statement submitted to a legislative committee during a bill's consideration. It becomes part of the official record and is often read by committee members and staff.</p>
        
        <h4>How to Submit Written Testimony</h4>
        <ul>
          <li>Find the bill number and the committee it has been assigned to</li>
          <li>Visit your state legislature's website to find submission instructions</li>
          <li>Write a clear, professional statement explaining your position</li>
          <li>Include personal experiences, data, and specific requests</li>
          <li>Submit by the posted deadline</li>
        </ul>
        
        <h4>Tips for Effective Written Testimony</h4>
        <ul>
          <li>Keep it concise (one page is ideal)</li>
          <li>Start with your position: "I support/oppose [bill number] because…"</li>
          <li>Use respectful, professional language</li>
          <li>Offer concrete examples or personal stories</li>
          <li>End with a clear call to action</li>
        </ul>
        
        <h3>2. Contacting Legislators Directly</h3>
        
        <p>Legislators represent you—and they want to hear from constituents. You can reach out by phone, email, or in person.</p>
        
        <h4>How to Find Your Legislator</h4>
        <ul>
          <li>Use your state's "Find My Legislator" tool (search online)</li>
          <li>Identify both your state representatives and state senators</li>
          <li>Note their contact information and any committee assignments</li>
        </ul>
        
        <h4>What to Say</h4>
        <ul>
          <li>Introduce yourself as a constituent and student</li>
          <li>State the issue and your position clearly</li>
          <li>Explain why it matters to you personally</li>
          <li>Ask for a specific action (e.g., support a bill, attend a meeting)</li>
          <li>Thank them for their time</li>
        </ul>
        
        <h3>3. Speaking at School Board Meetings</h3>
        
        <p>Local school boards make decisions about gifted education at the district level. Public comment periods allow community members—including students—to share their perspectives.</p>
        
        <h4>How to Participate</h4>
        <ul>
          <li>Find your school board's meeting schedule online</li>
          <li>Sign up for public comment (often required before the meeting)</li>
          <li>Prepare a brief, focused statement (usually 2–3 minutes)</li>
          <li>Speak respectfully and stay within your time limit</li>
        </ul>
        
        <h3>4. Collaborating with Organizations</h3>
        
        <p>State gifted associations (such as CAGT in Colorado) often organize advocacy days and coordinate group efforts. Partnering with these organizations can amplify your impact.</p>
        
        <ul>
          <li>Join your state's gifted association as a student member</li>
          <li>Attend advocacy training events</li>
          <li>Participate in organized visits to the state capitol</li>
          <li>Collaborate on letters, petitions, or media campaigns</li>
        </ul>
        
        <h3>5. Tips for Success</h3>
        
        <ul>
          <li><strong>Be prepared:</strong> Know the facts and anticipate questions</li>
          <li><strong>Be professional:</strong> Dress appropriately and speak respectfully</li>
          <li><strong>Be persistent:</strong> Change takes time—follow up and stay engaged</li>
          <li><strong>Be collaborative:</strong> Work with allies and build coalitions</li>
          <li><strong>Be confident:</strong> Your perspective matters</li>
        </ul>
        
        <p>If you have questions about testifying or want support preparing testimony, reach out to NGTSAB at <a href="mailto:connect@ngtsab.org" className="text-primary hover:underline">connect@ngtsab.org</a>. We're here to help.</p>
      </>
  },
  "sponsoring-gt-board-educators": {
    title: "Sponsoring a GT Board: A Guide for Educators",
    excerpt: "Advice for teachers on being supportive but hands-off sponsors for GT Student Boards.",
    date: "August 7, 2025",
    category: "Resources",
    author: "Abigail Riead",
    content: <>
        <p>Gifted students thrive when their voices are heard, and one of the most effective ways to uplift those voices is by supporting student-led GT Boards. Educators play a crucial role in helping these boards form, grow, and sustain their work—without overshadowing student leadership.</p>
        
        <p>Here's how teachers, counselors, GT coordinators, and administrators can support GT Boards effectively.</p>
        
        <h3>1. Serve as a Supportive but Hands‑Off Sponsor</h3>
        
        <p>Your role is not to run the board—it's to steady it.</p>
        
        <h4>What this looks like:</h4>
        <ul>
          <li>Provide a meeting space</li>
          <li>Help navigate school protocols</li>
          <li>Approve communications when necessary</li>
          <li>Ensure student safety during events</li>
          <li>Offer continuity from year to year</li>
        </ul>
        
        <h4>What this does NOT mean:</h4>
        <ul>
          <li>Choosing projects for the students</li>
          <li>Running meetings</li>
          <li>Controlling decisions or messaging</li>
        </ul>
        
        <p>Students must remain the drivers of the board's voice and vision.</p>
        
        <h3>2. Help Start the Board Using the GT Board Startup Handbook</h3>
        
        <p>Share the GT Startup Handbook with your students.</p>
        
        <h4>Your role in startup:</h4>
        <ul>
          <li>Encourage interested students to take leadership roles</li>
          <li>Help them interpret the handbook</li>
          <li>Support them as they adapt the model to your school</li>
          <li>Ensure they select realistic, student‑manageable goals</li>
        </ul>
        
        <h3>3. Facilitate Communication With Administration</h3>
        
        <p>Students often need adult assistance to:</p>
        <ul>
          <li>Schedule meetings with principals</li>
          <li>Present to the school board</li>
          <li>Access district leaders</li>
          <li>Connect their advocacy with broader initiatives</li>
        </ul>
        
        <p>You can open doors that students cannot open alone.</p>
        
        <h3>4. Encourage Advocacy and Initiative</h3>
        
        <p>Some ways to support:</p>
        <ul>
          <li>Let students present in staff meetings</li>
          <li>Invite them to give feedback on gifted programming</li>
          <li>Help them conduct surveys or data collection</li>
          <li>Encourage them to participate in legislative advocacy days</li>
          <li>Promote automatic enrollment policies or equitable identification efforts</li>
        </ul>
        
        <p>Your support gives students confidence to step into leadership roles.</p>
        
        <h3>5. Maintain Stability Over Time</h3>
        
        <p>GT Boards are vulnerable to leadership turnover as students graduate.</p>
        
        <p>Educators can:</p>
        <ul>
          <li>Keep continuity documents</li>
          <li>Assist with yearly officer transitions</li>
          <li>Recruit new members annually</li>
          <li>Preserve institutional memory</li>
        </ul>
        
        <p>A great sponsor ensures the board lasts long after its founders leave.</p>
        
        <h3>6. Celebrate and Amplify Student Work</h3>
        
        <p>Display their projects, share their wins with administration, and let them know their efforts matter. Student advocacy flourishes when students feel valued.</p>
        
        <p>When educators sponsor GT Boards effectively, they empower students to transform their schools.</p>
      </>,
    cta: {
      text: "View Resources for Teachers",
      link: "/resources/teachers",
      internal: true
    }
  },
  "gt-board-handbook-guide": {
    title: "How to Use the GT Board Startup Handbook: A Guide for Students",
    excerpt: "A guide to interpreting and using the GT Board Startup Handbook to create your own student advocacy board.",
    date: "August 6, 2025",
    category: "Resources",
    author: "Abigail Riead",
    content: <>
        <p>Starting a GT Board—whether at the school, district, or state level—can feel overwhelming at first, but the GT Board Startup Handbook is designed to make the process clear, approachable, and flexible.</p>
        
        <p>Here's how to interpret and use the handbook effectively.</p>
        
        <h3>1. Understand That This Is One Model—Not the Only Model</h3>
        
        <p>The handbook is based on what has worked for successful school and district GT Boards, including those that inspired NGTSAB. But every school is different. Use the handbook as:</p>
        <ul>
          <li>A starting point</li>
          <li>A framework</li>
          <li>A collection of suggestions you can adapt to your community's needs</li>
        </ul>
        
        <p>There is no "perfect" way to build a GT Board—only the way that works for you.</p>
        
        <h3>2. Begin with the First Section: Foundations of a GT Board</h3>
        
        <p>This section helps you answer core questions:</p>
        <ul>
          <li>What is our mission?</li>
          <li>Who will our board represent?</li>
          <li>What problems do we want to solve?</li>
          <li>How official or informal should our structure be?</li>
        </ul>
        
        <p>Start small. You only need 2–4 committed students at the beginning.</p>
        
        <h3>3. Follow the Step‑by‑Step Startup Sequence</h3>
        
        <p>The handbook outlines steps such as:</p>
        <ul>
          <li>Recruiting members</li>
          <li>Identifying an adult sponsor</li>
          <li>Setting meeting schedules</li>
          <li>Building project goals</li>
          <li>Creating a sustainable leadership structure</li>
        </ul>
        
        <p>Approach this as a checklist—complete one step at a time rather than trying to do everything at once.</p>
        
        <h3>4. Use the Examples and Templates</h3>
        
        <p>The handbook includes:</p>
        <ul>
          <li>Model constitutions</li>
          <li>Sample project ideas</li>
          <li>Officer roles</li>
          <li>Tips for communication with administration</li>
        </ul>
        
        <p>Feel free to copy, adapt, or simplify any of these. They exist to save you time.</p>
        
        <h3>5. Don't Skip the "Sustainability" Section</h3>
        
        <p>Your GT Board should continue after you graduate. The handbook highlights:</p>
        <ul>
          <li>Leadership pipelines</li>
          <li>Documenting projects</li>
          <li>How to train new members</li>
          <li>How to prevent burnout</li>
        </ul>
        
        <p>A strong GT Board lasts years, not months.</p>
        
        <h3>6. Ask for Help—You Are Not Alone</h3>
        
        <p>If you feel stuck:</p>
        <ul>
          <li>Talk to a gifted specialist or counselor</li>
          <li>Bring teachers into the conversation</li>
          <li>Reach out to NGTSAB for support</li>
        </ul>
        
        <p>Starting a GT Board is meaningful work, and many adults will be excited to help.</p>
        
        <p>You don't have to be an expert to make an impact.</p>
      </>,
    cta: {
      text: "Learn How to Start a GT Board",
      link: "/resources/start-board",
      internal: true
    }
  },
  "auto-enrollment-review": {
    title: "A Review of Automatic Enrollment Across the Nation",
    excerpt: "Case studies from North Carolina, Texas, and Washington showing positive outcomes from automatic enrollment policies.",
    date: "July 18, 2025",
    category: "Legislation",
    author: "Ann Mary Thomas",
    content: <>
        <p>Automatic enrollment policies share a simple premise: students who show evidence of advanced academic performance are automatically placed into advanced courses the following school year. While Colorado is exploring this policy now, many other states have already implemented formal statewide versions—each offering valuable lessons.</p>
        
        <h3>North Carolina</h3>
        
        <p>North Carolina is widely regarded as the national leader in automatic enrollment legislation. Its first‑in‑the‑nation 2018 law requires students scoring at the highest level on state math assessments to be automatically placed into advanced math the next year. This policy begins as early as third grade, engages high‑performing students early, and guarantees access to high‑school‑level math for qualified middle schoolers. After implementation, the percentage of overlooked qualified eighth graders dropped from about 10% to 3%, meaning far fewer students were being incorrectly placed in lower‑level classes.</p>
        
        <h3>Texas</h3>
        
        <p>Texas passed S.B. 2124 in 2023, implementing statewide auto‑enrollment starting in the 2023–24 school year. Sixth graders scoring in the top 40% of the state math exam are automatically placed in advanced math. The state bolstered implementation by expanding virtual courses, adding alternative qualification assessments, and supporting rural districts. A statewide data system is being built to track persistence and opt‑out patterns.</p>
        
        <h3>Washington</h3>
        
        <p>Washington adopted its academic acceleration policy statewide in 2019 after years of district‑level pilots. Students scoring proficient or higher on statewide assessments are automatically enrolled in advanced coursework in the relevant subject. Rigorous research analyzing over 70 districts found:</p>
        <ul>
          <li>Advanced course enrollment increased across subjects</li>
          <li>Enrollment for historically underrepresented students caught up with their peers</li>
          <li>GPA and graduation rates remained stable, meaning rigor increased without harming academic performance</li>
        </ul>
        
        <h3>Why More States Should Act</h3>
        
        <p>Across all studied states, automatic enrollment policies:</p>
        <ul>
          <li>Significantly expand access to advanced coursework</li>
          <li>Reduce racial and socioeconomic enrollment gaps</li>
          <li>Do not negatively impact academic outcomes</li>
          <li>Require minimal new resources</li>
        </ul>
        
        <p>States like Florida, California, New York, and Michigan also demonstrate why these policies are needed: research documents substantial disparities in advanced course participation for Black, Hispanic, and low‑income students. Automatic enrollment is one of the few interventions proven to change these patterns at scale.</p>
      </>
  },
  "importance-auto-enrollment": {
    title: "The Importance of Automatic Enrollment",
    excerpt: "Explaining opt-out placement as a low-cost, high-impact equity tool for gifted education.",
    date: "June 4, 2025",
    category: "Legislation",
    author: "Carter FitzGerald",
    content: <>
        <p>Automatic enrollment—also known as opt‑out placement—is a simple but powerful policy that ensures students who demonstrate readiness for advanced coursework are automatically placed into higher‑level classes the following year. The mechanism is straightforward: if a student performs at an advanced level on state standardized tests or other objective academic measures, they are automatically enrolled in an advanced course unless their family chooses to opt out. This eliminates unnecessary barriers and replaces inconsistent, biased teacher‑referral systems with objective, research‑supported criteria.</p>
        
        <h3>Why Automatic Enrollment Is Needed</h3>
        
        <p>Research has repeatedly shown that many students—especially Black, Hispanic, Native American, low‑income, and rural students—are not offered advanced courses even when they are clearly ready. Access to advanced learning is often optional, gated, or dependent on teacher recommendations, which introduces bias and systematically excludes high‑potential students. In fact, millions of students nationwide still lack access to advanced courses, and access gaps disproportionately harm students of color and low‑income learners. Automatic enrollment legislation corrects this by establishing a common‑sense expectation: students who earn advanced placement academically should receive advanced placement academically.</p>
        
        <h3>A Low‑Cost, High‑Impact Policy</h3>
        
        <p>Automatic enrollment policies require very few additional resources and often streamline school processes. Research indicates that auto‑enrollment policies work with the same number of students and teachers—the difference is that qualifying students are placed appropriately without the need for multiple layers of approval or advocacy. Teachers may require small amounts of short‑term training to support advanced instruction, but the broader system remains stable and efficient.</p>
        
        <h3>Supporting Underserved Students</h3>
        
        <p>Because automatic enrollment removes subjective criteria, it dramatically expands access for underserved students. States implementing these policies, such as North Carolina, Texas, and Washington, have reported significant increases in enrollment for students of color and low‑income students, with these students staying in advanced coursework at higher rates. Auto‑enrollment ensures students who earn advanced scores are recognized and supported, reducing long‑standing inequities and strengthening academic pipelines for high‑ability learners.</p>
        
        <p>Automatic enrollment is not just good policy—it is common sense. It aligns opportunity with demonstrated readiness, simplifies school processes, and opens doors for students who have historically been overlooked. As more states adopt these policies, the potential for equity‑driven educational transformation grows stronger.</p>
      </>,
    embed: {
      type: "google-doc",
      src: "https://docs.google.com/document/d/e/2PACX-1vTil9PNP7kpVgpnZ4iFGEfRMAtaiOrEm5P-JB-voMf9vaZ8rQd9DuKviezZC_fpKx57HfVFR31reEzu/pub?embedded=true",
      title: "Colorado Automatic Enrollment One-Pager",
      link: "https://docs.google.com/document/d/11iCl_RaRfsY4WWf7rgzlJh0Y8bd_3sK2vT_Zo6lQtPg/edit?usp=sharing"
    }
  },
  "javits-testimony": {
    title: "NGTSAB Javits Testimony",
    excerpt: "NGTSAB submitted written testimony to the U.S. Senate in defense of the Jacob K. Javits Gifted and Talented Students Education Program.",
    date: "February 12, 2025",
    category: "Legislation",
    author: "Carter FitzGerald",
    content: <>
        <p>In early 2025, the National Gifted and Talented Student Advocacy Board (NGTSAB) submitted written testimony to the U.S. Senate in defense of the Jacob K. Javits Gifted and Talented Students Education Program—commonly known as the Javits Program, the only federally supported program dedicated specifically to gifted education. When Congress began considering eliminating the program, NGTSAB acted quickly. Their testimony highlighted the urgent need to protect national research, equity initiatives, and innovation in gifted education.</p>
        
        <p>The Javits Program holds a uniquely important place in the educational ecosystem. Its mission is to support evidence‑based research, demonstration projects, and innovative strategies that help schools across the country identify and serve gifted and talented learners, with a specific emphasis on students who have been historically underrepresented in gifted programs—such as economically disadvantaged students, English language learners, and students with disabilities. These efforts are essential because national research shows that high‑ability students from minority and low‑income backgrounds are significantly less likely to be identified for gifted services despite performing at levels comparable to their peers.</p>
        
        <p>Javits funding has supported national-scale initiatives, such as the National Center for Research on Gifted Education, demonstration programs like Project SPARK, and innovative models supporting English learners and Native American communities. These projects provide models that states and districts can replicate, fueling systemic change even where gifted services have historically been weak or nonexistent.</p>
        
        <p>When Congress considered removing the grant, NGTSAB recognized what was at stake: not only the loss of research, but the rollback of national efforts to close the "excellence gap"—the persistent disparities in high-level academic performance between advantaged and disadvantaged students. Their testimony emphasized that gifted education is not elitist—it is an equity issue, and the Javits Program remains the only federal safeguard ensuring underserved high‑ability students are not overlooked.</p>
        
        <p>Submitting testimony is also a powerful example of student-driven advocacy. Many assume that influencing education policy is reserved for adults, but students have a unique and credible voice in such discussions. Testimonies—whether submitted to local school boards, state legislatures, or the U.S. Congress—are among the most accessible yet impactful forms of advocacy. They allow students to highlight their lived experiences, uplift peers who may not have platforms of their own, and shape policy decisions that directly affect their learning environments.</p>
        
        <p>NGTSAB's action demonstrated that real change happens when students speak up. Policymakers routinely consider student testimonies when evaluating the effectiveness and direction of educational programs. When students articulate what they need, it reframes the conversation from abstract policy to real lives—reminding leaders that gifted learners exist in every community and deserve to be supported equitably.</p>
        
        <p>Through their Javits testimony, NGTSAB not only defended a critical federal program but modeled exactly what student advocacy should look like: informed, proactive, collaborative, and centered on equity. Their work stands as a call to action for gifted students nationwide—speak up, get involved, and use your voice to protect and improve the programs meant to help you thrive.</p>
      </>,
    embed: {
      type: "google-drive-pdf",
      src: "https://drive.google.com/file/d/1c3plQOtRSy1_gpkpFIHE6B4hkorQR7aH/preview",
      title: "NGTSAB's Javits Testimony Document",
      link: "https://drive.google.com/file/d/1c3plQOtRSy1_gpkpFIHE6B4hkorQR7aH/view?usp=sharing"
    }
  },
  "about-ngtsab": {
    title: "About the National Gifted and Talented Student Advocacy Board (NGTSAB)",
    excerpt: "The history of NGTSAB's founding and its focus on systemic inequities in gifted education.",
    date: "December 19, 2024",
    category: "GT Boards",
    author: "Carter FitzGerald",
    content: <>
        <div className="my-8">
          <img src={aboutFoundersImg} alt="NGTSAB founders" className="w-full rounded-lg shadow-lg object-cover max-h-96" />
        </div>
        
        <p>The National Gifted and Talented Student Advocacy Board (NGTSAB) was founded by three Colorado students—Carter FitzGerald, Caleb Olson, and Abigail Riead—after recognizing both the strengths and the shortcomings of their district's gifted program. Despite participating in a supportive and active GT Student Board, they discovered that such student-led bodies are incredibly rare nationwide. In fact, there was no national organization led by students to represent the needs, experiences, or perspectives of gifted learners across the country, so they created one.</p>
        
        <p>Their motivation stemmed in part from well‑documented challenges in gifted education across the United States. Research shows that gifted programs frequently suffer from systemic inequities, inconsistent identification practices, and a lack of cohesive national standards. Many programs rely heavily on standardized tests or subjective teacher recommendations—methods that introduce cultural and socioeconomic bias and contribute to the chronic under-identification of Black, Hispanic, Native American, low-income, and English‑learning students. National data further show that these students are identified at rates two to three times lower than their White peers, indicating long-standing structural issues. This "excellence gap" has widened over time, particularly at the highest levels of achievement.</p>
        
        <p>The founders of NGTSAB saw these issues firsthand: inconsistent access to services across districts, limited communication between students and administrators, and the absence of a national body advocating for equitable identification and resources. They also recognized that students understand the needs of gifted learners better than anyone—they live the experience every day. Yet gifted students' voices were largely missing from state and national policy discussions.</p>
        
        <p>NGTSAB was created to change that.</p>
        
        <p>Student advocacy has a long history of influencing educational reform. When students speak directly to policymakers, research shows their perspectives can shift priorities, strengthen funding arguments, and bring authenticity to policy debates that adult advocates alone cannot provide. Student testimonies, public comment, letters, and organized advocacy campaigns often attract more attention precisely because they reveal the lived realities behind policy decisions.</p>
        
        <p>What makes NGTSAB powerful is its belief that students don't need permission to lead change—they simply need a platform. When students articulate the need for equitable identification, culturally responsive assessment, expanded programming, mental health support, or academic challenge, policymakers listen. And as NGTSAB's founders discovered, once students begin speaking up, the system begins responding.</p>
        
        <p>By forming the first national, student-led advocacy board for gifted learners, NGTSAB aims to reshape how gifted education is discussed in America. Their mission is to ensure that every gifted student—regardless of background, zip code, or circumstance—can access the opportunities they deserve. In doing so, they serve as a model of what student leadership should be: bold, informed, equitable, and deeply committed to helping all advanced learners reach their full potential.</p>
      </>,
    cta: {
      text: "Join NGTSAB - Apply Now",
      link: "/apply",
      internal: true
    }
  }
};
interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
}
const initialComments: Record<string, Comment[]> = {};
export default function BlogPost() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [comments, setComments] = useState<Comment[]>(id ? initialComments[id] || [] : []);
  const [newComment, setNewComment] = useState({
    author: "",
    content: ""
  });
  if (!id || !posts[id]) {
    return <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
      </Layout>;
  }
  const post = posts[id];
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author.trim() && newComment.content.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: newComment.author,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }),
        content: newComment.content
      };
      setComments([...comments, comment]);
      setNewComment({
        author: "",
        content: ""
      });
    }
  };
  return <Layout>
      {/* Header */}
      <section className="bg-hero-gradient text-primary-foreground py-16">
        <div className="container max-w-4xl">
          <Button asChild variant="ghost" className="mb-6 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <article className="prose prose-lg max-w-none dark:prose-invert">
            {post.content}
          </article>

          {/* Embedded Document */}
          {post.embed && <div className="mt-12">
              <Separator className="mb-8" />
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {post.embed.type === "google-slides" ? <Presentation className="h-5 w-5 text-primary" /> : <FileText className="h-5 w-5 text-primary" />}
                    <h3 className="text-lg font-semibold">{post.embed.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
                    <iframe src={post.embed.src} className="w-full h-full" allowFullScreen title={post.embed.title} />
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Button asChild variant="outline" size="sm">
                      <a href={post.embed.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Open in New Tab
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>}

          {/* Call to Action */}
          {post.cta && <div className="mt-12">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="py-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">Ready to Take Action?</h3>
                  {post.cta.internal ? <Button asChild size="lg">
                      <Link to={post.cta.link}>{post.cta.text}</Link>
                    </Button> : <Button asChild size="lg">
                      <a href={post.cta.link} target="_blank" rel="noopener noreferrer">
                        {post.cta.text} <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>}
                </CardContent>
              </Card>
            </div>}

          {/* Comments Section */}
          <div className="mt-12">
            <Separator className="mb-8" />
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Comments ({comments.length})</h3>
            </div>

            {/* Comment Form */}
            <Card className="mb-8 shadow-card">
              <CardHeader>
                <h4 className="font-medium">Leave a Comment</h4>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitComment} className="space-y-4">
                  <div>
                    <Input placeholder="Your name" value={newComment.author} onChange={e => setNewComment({
                    ...newComment,
                    author: e.target.value
                  })} required />
                  </div>
                  <div>
                    <Textarea placeholder="Share your thoughts..." value={newComment.content} onChange={e => setNewComment({
                    ...newComment,
                    content: e.target.value
                  })} required rows={4} />
                  </div>
                  <Button type="submit">Post Comment</Button>
                </form>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.length === 0 ? <p className="text-muted-foreground text-center py-8">No comments yet. Be the first to share your thoughts!</p> : comments.map(comment => <Card key={comment.id} className="shadow-card">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-muted-foreground text-sm">• {comment.date}</span>
                      </div>
                      <p className="text-foreground">{comment.content}</p>
                    </CardContent>
                  </Card>)}
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}
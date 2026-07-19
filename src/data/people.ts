import carterPhoto from "@/assets/carter-fitzgerald.jpg";
import abigailPhoto from "@/assets/abigail-riead.jpg";
import calebPhoto from "@/assets/caleb-olson.jpg";
import annMaryPhoto from "@/assets/ann-mary-thomas.jpg";
import haleyPhoto from "@/assets/haley-becker.jpg";
import mattZakreskiPhoto from "@/assets/matt-zakreski.jpg";

export interface Person {
  slug: string;
  name: string;
  initials: string;
  role: string;
  location?: string;
  city?: string;
  state?: string;
  photo?: string;
  bio: string;
  duties?: string;
  biography?: string;
  email?: string;
  // Alumni-specific fields
  formerRole?: string;
  currentEndeavors?: string;
  // Sponsor-specific fields
  links?: { label: string; url: string }[];
  contribution?: string;
}

// ============================================================
// EXECUTIVE BOARD (current)
// To add/remove/update, edit this array.
// ============================================================
export const executiveBoard: Person[] = [
  {
    slug: "reily-delorey",
    name: "Reily Delorey",
    initials: "RD",
    role: "President",
    location: "Highlands Ranch, Colorado",
    bio: "Reily leads our national advocacy efforts and strategic direction. She oversees organizational operations and represents NGTSAB at national conferences.",
    duties:
      "President of the NGTSAB. Leads national advocacy efforts, sets strategic direction, oversees organizational operations, and represents NGTSAB at national conferences.",
    biography:
      "Reily is passionate about advancing gifted education and student advocacy at the national level. She has been instrumental in continuing NGTSAB's mission of empowering student voices in gifted education policy.",
    email: "deloreyreily@gmail.com",
  },
  {
    slug: "josie-fugler",
    name: "Josie Fugler",
    initials: "JF",
    role: "Vice President",
    location: "Highlands Ranch, Colorado",
    bio: "Josie coordinates state-level initiatives and board development programs. She manages outreach efforts and supports strategic planning.",
    duties:
      "Coordinating state-level initiatives, overseeing board development programs, supporting the President in strategic planning, and managing inter-state communication between affiliate boards.",
    biography:
      "Based in Colorado, Josie is dedicated to developing resources for students looking to start their own advocacy boards. Her work focuses on building sustainable structures that empower student voices in gifted education policy discussions.",
    email: "fuglerjnf@gmail.com",
  },
  {
    slug: "luke-obrien",
    name: "Luke O'Brien",
    initials: "LO",
    role: "Vice President",
    location: "Highlands Ranch, Colorado",
    bio: "Luke coordinates state-level initiatives and board development programs. He focuses on building partnerships and expanding our network.",
    duties:
      "Coordinating state-level initiatives, leading legislative advocacy efforts, developing partnerships with education organizations, and supporting board member recruitment and training.",
    biography:
      "Luke serves as Vice President, bringing a strong perspective to gifted education advocacy. He is focused on automatic enrollment legislation and working with state stakeholders to promote equitable access to gifted programs.",
    email: "obrienluket@gmail.com",
  },
];

// ============================================================
// ALUMNI
// Former executive board members and leaders.
// ============================================================
export const alumni: Person[] = [
  {
    slug: "carter-fitzgerald",
    name: "Carter FitzGerald",
    initials: "CF",
    role: "Alumni",
    formerRole: "President & Co-Founder",
    location: "Highlands Ranch, Colorado",
    photo: carterPhoto,
    bio: "Former President and Co-Founder of NGTSAB.",
    biography:
      "Carter FitzGerald has been a passionate advocate for gifted education since middle school. As a student in Colorado's gifted program, Carter experienced firsthand both the benefits and challenges of gifted education. Carter led an advocacy campaign for Automatic Enrollment in Colorado and has spoken at state and national education conferences about the importance of student voice in educational policy.",
    currentEndeavors:
      "Continuing to advocate for gifted education and pursuing higher education.",
    email: "cfitzgerald@ngtsab.org",
  },
  {
    slug: "abigail-riead",
    name: "Abigail Riead",
    initials: "AR",
    role: "Alumni",
    formerRole: "Vice President",
    location: "Highlands Ranch, Colorado",
    photo: abigailPhoto,
    bio: "Former Vice President of NGTSAB.",
    biography:
      "Based in Colorado, Abby was instrumental in developing resources for students looking to start their own advocacy boards. Her work focused on building sustainable structures that empower student voices in gifted education policy discussions at both state and national levels.",
    currentEndeavors:
      "Pursuing higher education and continuing involvement in student advocacy.",
    email: "ariead@ngtsab.org",
  },
  {
    slug: "caleb-olson",
    name: "Caleb Olson",
    initials: "CO",
    role: "Alumni",
    formerRole: "Vice President",
    location: "Highlands Ranch, Colorado",
    photo: calebPhoto,
    bio: "Former Vice President of NGTSAB.",
    biography:
      "Caleb served as Vice President, bringing a unique perspective to gifted education advocacy. Caleb was particularly focused on automatic enrollment legislation and worked closely with state legislators to promote equitable access to gifted programs. His analytical approach and dedication to data-driven advocacy strengthened NGTSAB's policy positions.",
    currentEndeavors:
      "Pursuing higher education and continuing advocacy for gifted learners.",
    email: "colson@ngtsab.org",
  },
  {
    slug: "ann-mary-thomas",
    name: "Ann Mary Thomas",
    initials: "AT",
    role: "Alumni",
    formerRole: "Executive Board Member & NC State Representative",
    location: "Cary, North Carolina",
    photo: annMaryPhoto,
    bio: "Former Executive Board Member and North Carolina State Representative.",
    biography:
      "Ann Mary served as an Executive Board Member and North Carolina State Representative, contributing policy expertise and passion for educational opportunity to NGTSAB.",
    currentEndeavors:
      "Pursuing higher education with continued interest in education policy and advocacy.",
    email: "annmary0828@gmail.com",
  },
  {
    slug: "haley-becker",
    name: "Haley Becker",
    initials: "HB",
    role: "Alumni",
    formerRole: "Executive Board Member & TX State Representative",
    location: "Houston, Texas",
    photo: haleyPhoto,
    bio: "Former Executive Board Member and Texas State Representative.",
    biography:
      "Haley served as an Executive Board Member and Texas State Representative, bringing creativity and communication expertise to NGTSAB. Haley was instrumental in expanding the organization's digital presence and connecting with students nationwide.",
    currentEndeavors:
      "Pursuing higher education and continuing to champion student advocacy.",
    email: "beckerhaleymarie@gmail.com",
  },
];

// ============================================================
// STATE REPRESENTATIVES
// ============================================================
export interface StateRep {
  name: string;
  initials: string;
  city: string;
  state: string;
  bio: string;
  email?: string;
  isExecutive?: boolean;
  slug?: string;
}

export const stateRepresentatives: StateRep[] = [
  {
    name: "Megan Brooks",
    initials: "MB",
    city: "Mesa",
    state: "Arizona",
    bio: "Advocating for gifted education initiatives in Arizona.",
    email: "mbrook26@asu.edu",
  },
  {
    name: "Wensen Fang",
    initials: "WF",
    city: "Boulder",
    state: "Colorado",
    bio: "Working to expand gifted programs across Colorado schools.",
    email: "wfang01@bvsd.org",
  },
  {
    name: "Violet Sandridge",
    initials: "VS",
    city: "Boulder",
    state: "Colorado",
    bio: "Promoting student voice in Colorado's gifted education policy.",
    email: "vjsandridge01@bvsd.org",
  },
];

export const allStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

// Lookup helpers
export const getPersonBySlug = (slug: string): Person | undefined =>
  [...executiveBoard, ...sponsors, ...alumni].find((p) => p.slug === slug);

// ============================================================
// SPONSORS
// ============================================================
export const sponsors: Person[] = [
  {
    slug: "matt-zakreski",
    name: "Dr. Matt Zakreski, PsyD",
    initials: "MZ",
    role: "Sponsor",
    photo: mattZakreskiPhoto,
    bio: "Clinical psychologist, author, and internationally recognized advocate for gifted and neurodivergent learners.",
    biography:
      "Dr. Matthew Zakreski (affectionately known as \"Dr. Matt\") is a seasoned clinical psychologist and professional speaker renowned for his expertise in serving neurodivergent individuals — people with different brains such as gifted, ADHD, Autism, and dyslexia. He is best known for his work with gifted individuals as an advocate for using accessible understanding of neurodivergent needs to implement high-level supports. Having delivered over 500 talks all over the world, Dr. Matt has cultivated a reputation as a dynamic keynote speaker, captivating audiences with his insightful presentations and empowering messages.\n\nDr. Zakreski holds a PsyD in Clinical Psychology from Widener University, where his research focused on the social and emotional needs of gifted learners and best educational and occupational practices for neurodivergent people. He is the co-founder and Lead Psychologist of The Neurodiversity Collective, an online private practice providing psychotherapy, coaching, consulting, and training to neurodivergent individuals and their families.\n\nHis work appears in peer-reviewed journals and industry periodicals, including Gifted Child Today, Clinical Practice in Pediatric Psychology, and the Journal of Gifted Education and Creativity. His first book, Neurodiversity Playbook: How Neurodivergent People Can Crack the Code of Living in a Neurotypical World, was published in late 2024 and debuted at #1 on Amazon's gifted students education new releases list. Dr. Zakreski is an active member of the National Association for Gifted Children (NAGC), Supporting Emotional Needs of the Gifted (SENG), the New Jersey Association for Gifted Children (NJAGC), and the Pennsylvania Association for Gifted Education (PAGE), and has served on the boards of both state and national organizations for education and mental health.",
    contribution:
      "Dr. Matt has worked alongside NGTSAB since its founding in 2025. As a dedicated sponsor, he has helped connect and introduce students from across the country to the organization, championed our student advocates, and supported them at national conferences such as NAGC. His mentorship, expertise, and generosity have been instrumental in growing NGTSAB into a nationwide student movement for gifted education.",
    links: [
      { label: "Dr. Matt Zakreski", url: "https://www.drmattzakreski.com" },
      { label: "The Neurodiversity Collective", url: "https://www.theneurodiversitycollective.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/drmattzakreski" },
    ],
  },
];
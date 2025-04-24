interface User {
  name: string;
  role: string;
  profile_picture: string;
}

export interface Testimonial {
  user: User;
  title: string;
  content: string;
  variant: Variant;
  grid_classes: string;
}

type Variant = "light" | "grey" | "dark" | "purple";

type VariantClasses = {
  title: string;
  text: string;
  background: string;
};

export const variantStyles: Record<Variant, VariantClasses> = {
  light: {
    title: "text-grey-500",
    text: "text-grey-400",
    background: "bg-white",
  },
  grey: {
    title: "text-white",
    text: "text-grey-100",
    background: "bg-grey-500",
  },
  dark: {
    title: "text-grey-200",
    text: "text-grey-100",
    background: "bg-darkblue",
  },
  purple: {
    title: "text-white",
    text: "text-purple-50",
    background: "bg-purple-500",
  },
};

const DANIEL: User = {
  name: "Daniel Clifford",
  role: "Verified Graduate",
  profile_picture: "/src/assets/user-images/image-daniel.jpg",
};

const JONATHAN: User = {
  name: "Jonathan Walters",
  role: "Verified Graduate",
  profile_picture: "/src/assets/user-images/image-jonathan.jpg",
};

const KIRA: User = {
  name: "Kira Whittle",
  role: "Verified Graduate",
  profile_picture: "/src/assets/user-images/image-kira.jpg",
};

const JEANETTE: User = {
  name: "Jeanette Harmon",
  role: "Verified Graduate",
  profile_picture: "/src/assets/user-images/image-jeanette.jpg",
};

const PATRICK: User = {
  name: "Patrick Abrams",
  role: "Verified Graduate",
  profile_picture: "/src/assets/user-images/image-patrick.jpg",
};

const TESTIMONIAL_DANIEL: Testimonial = {
  user: DANIEL,
  title:
    "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
  content:
    "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup.",
  variant: "purple",
  grid_classes:
    "lg:col-start-1 lg:col-end-3 md:col-start-1 md:col-end-3 md:row-start-1",
};

const TESTIMONIAL_JONATHAN: Testimonial = {
  user: JONATHAN,
  title: "The team was very supportive and kept me motivated",
  content:
    "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
  variant: "grey",
  grid_classes:
    "lg:col-start-3 lg:col-end-4 lg:row-start-1 md:col-start-1 md:col-end-2 md:row-start-2",
};

const TESTIMONIAL_KIRA: Testimonial = {
  user: KIRA,
  title: "Such a life-changing experience. Highly recommended!",
  content:
    "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
  variant: "light",
  grid_classes:
    "lg:col-start-4 lg:col-end-5 lg:row-span-2 md:col-start-2 md:col-end-3 md:row-start-2",
};

const TESTIMONIAL_JEANETTE: Testimonial = {
  user: JEANETTE,
  title: "An overall wonderful and rewarding experience",
  content:
    "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
  variant: "light",
  grid_classes:
    "lg:col-start-1 lg:col-end-2 lg:row-start-2 md:col-start-1 md:col-end-3 md:row-start-3",
};

const TESTIMONIAL_PATRICK: Testimonial = {
  user: PATRICK,
  title:
    "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
  content:
    "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
  variant: "dark",
  grid_classes:
    "lg:col-start-2 lg:col-end-4 lg:row-start-2 md:col-start-1 md:col-end-3 md:row-start-4",
};

export const testimonials_data: Testimonial[] = [
  TESTIMONIAL_DANIEL,
  TESTIMONIAL_JONATHAN,
  TESTIMONIAL_KIRA,
  TESTIMONIAL_JEANETTE,
  TESTIMONIAL_PATRICK,
];

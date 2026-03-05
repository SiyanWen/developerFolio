/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Evan",
  title: "Hi all, I'm Siyan(Evan)",
  subTitle: emoji(
    "An aspiring full-stack software engineer, dedicated to deliver powerful, secure, and scalable enterprise-grade web applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SiyanWen",
  linkedin: "https://www.linkedin.com/in/siyan-wen-714a12337",
  gmail: "swen42023@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Building modular applications and bring value",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end and reliable Back end for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Kafka / Cassandra / Postman"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "devicon-mysql-original"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "devicon-postgresql-plain"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "devicon-mongodb-plain"
    },
    {
      skillName: "cassandra",
      fontAwesomeClassname: "devicon-cassandra-plain"
    },
    {
      skillName: "kafka",
      fontAwesomeClassname: "devicon-apachekafka-original"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "devicon-kubernetes-plain"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "devicon-jenkins-line"
    },
    {
      skillName: "gradle",
      fontAwesomeClassname: "devicon-gradle-original"
    },
    {
      skillName: "maven",
      fontAwesomeClassname: "devicon-maven-plain"
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "devicon-postman-plain"
    },
    {
      skillName: "swagger",
      fontAwesomeClassname: "devicon-swagger-plain"
    },
    {
      skillName: "ocaml",
      fontAwesomeClassname: "devicon-ocaml-plain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stevens Institute of Technology",
      logo: require("./assets/images/stevensLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - May 2025",
      desc: "Participated in the research of Natural Language Processing. Led a team of 4 to achieve 3rd place among 9 teams in a Machine Learning competition."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Mobile",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Research Assistant",
      company: "Stevens Institute of Technology",
      companylogo: require("./assets/images/stevensLogo.png"),
      date: "Jan 2025 – May 2025",
      desc: "Traditional Excel-based annotation workflows are not user-friendly, inefficient and are difficult to monitor the time annotators spend on each question. To address these issues, I developed a Flask web application to accelerate the annotation and result export process."
    },
    {
      role: "E-commerce Operations Specialist",
      company: "Shenzhen Liqian",
      companylogo: require("./assets/images/liqianLogo.png"),
      date: "Oct 2019 – Mar 2021",
      desc: "Improved conversion rates by SEO (Search Engine Optimization). Two products ranked in the top 10 of of their category on Amazon Japan."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "snapshots of personal projects",
  projects: [
    {
      image: require("./assets/images/shopNet.webp"),
      projectName: "Shop Net",
      projectDesc:
        "A distributed React.js + Spring Boot e-commerce system with microservice architecture.",
      footerLink: [
        {
          name: "Visit Website",
          url: "/shop_net"
        },
        {
          name: "Video Demo",
          url: "https://drive.google.com/file/d/1qym8yV-Q6n9V7EmCa68qvgt3hXoAueEk/view?usp=sharing"
        },
        {
          name: "Github Repo",
          url: "https://github.com/SiyanWen/shop-net"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/talkToPdf.png"),
      projectName: "Talk to PDF",
      projectDesc: "AI agent with RAG technology",
      footerLink: [
        {
          name: "Visit Website",
          url: "/talk_to_pdf"
        },
        {
          name: "Video Demo",
          url: "https://drive.google.com/file/d/1tuDTCab9cEslLx4oqvgE-8ztXLBoEwUU/view?usp=sharing"
        },
        {
          name: "Github Repo",
          url: "https://github.com/SiyanWen/TalkToPDF"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 201-744-4345",
  email_address: "swen42023@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  isHireable,
  resumeSection
};

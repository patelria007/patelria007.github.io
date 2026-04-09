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
  username: "Ria Patel",
  title: "Hey y'all, I'm Ria",
  subTitle: "A Ph.D. student in Computer Science researching Quantum Algorithms and Benchmarking. Interested in Hybrid Quantum-Classical Systems & Quantum Machine Learning (QML).",
  resumeLink: "https://drive.google.com/file/d/1VO9Yosygnkg7GqmKRTGmoh40F_pCo7IK/view?usp=sharing",
  cvLink: "https://drive.google.com/file/d/1lqJON50qYsQGtI6uPlMTxhrksWHZOqij/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/patelria007",
  linkedin: "https://www.linkedin.com/in/patelria007/",
  gmail: "rpatel77@vols.utk.edu",
  orcid: "https://orcid.org/0000-0002-0723-7911",
  google_scholar: "https://scholar.google.com/citations?user=Y4Hc8A0AAAAJ&hl=en",
  gitlab: "https://gitlab.com/patelria007",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: emoji("⚡ Research in deep learning techniques for different applications and computing platforms"),
  skills: [],
  softwareSkillsByCategory: [
    {
      category: "Quantum Computing Frameworks:",
      skills: [
        { skillName: "Qiskit", fontAwesomeClassname: "fa fa-file-code" },
        { skillName: "Pennylane", fontAwesomeClassname: "fa fa-file-code" },
        { skillName: "Cirq", fontAwesomeClassname: "fa fa-file-code" }
      ]
    },
    {
      category: "High Performance Computing Frameworks & Tools:",
      skills: [
        { skillName: "MPI", fontAwesomeClassname: "fa fa-file-code" },
        { skillName: "CUDA", fontAwesomeClassname: "fa fa-file-code" },
        { skillName: "OpenMP", fontAwesomeClassname: "fa fa-file-code" }
      ]
    },
    {
      category: "Programming Languages:",
      skills: [
        { skillName: "C", fontAwesomeClassname: "fa fa-file-code" },
        { skillName: "C++", fontAwesomeClassname: "fa fa-file-code" },
        { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
        { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
        { skillName: "Python", fontAwesomeClassname: "fab fa-python" }
      ]
    },
    {
      category: "Data Analysis and Machine Learning Tools:",
      skills: [
        { skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire" },
        { skillName: "Tensorflow", fontAwesomeClassname: "fa fa-file-code" },
        { skillName: "Keras", fontAwesomeClassname: "fab fa-kickstarter" },
        { skillName: "Pandas", fontAwesomeClassname: "fa fa-file-code" }
      ]
    },
    {
      category: "Other Tools:",
      skills: [
        { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
        { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
        { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "North Carolina State University",
      logo: require("./assets/images/ncstate_wolf.png"),
      subHeader: "Ph.D. Student in Computer Science",
      duration: "August 2025 - Present",
      descBullets: [
        "Currently working on doctoral degree researching quantum algorithms & benchmarking",
        "Research Interests: Quantum Algorithms & Benchmarking, Hybrid Quantum-Classical Systems, & Quantum Machine Learning (QML)",
        "Relevant Courses: Quantum Computing, Parallel Systems"
      ]
    },
    {
      schoolName: "University of Tennessee - Knoxville",
      logo: require("./assets/images/utk-logo.png"),
      subHeader: "M.S. Student in Computer Science",
      duration: "August 2023 - May 2025",
      descBullets: [
        "Intelligent Systems & Machine Learning",
        "Relevant Courses: Deep Learning, Quantum Mechanics, Algorithms, Computer System Organization, Natural Language Processing"
      ]
    },
    {
      schoolName: "U.S. Quantum Information Science Summer School",
      logo: require("./assets/images/qsc_logo.png"),
      subHeader: "Selected Student",
      duration: "July 15 - 26, 2024 - Certificate",
      descBullets: [
        "Hosted by the Quantum Science Center (QSC) at Oak Ridge National Laboratory (ORNL)",
        "Experienced hands-on quantum science and technology activities in a laboratory setting",
        "Attended lectures and courses by experts on topics ranging from quantum materials, quantum software tools, and quantum topological algorithms",
        "Connected with other students to form a helpful academic community that continues to grow"
      ]
    },
    {
      schoolName: "University of Tennessee - Knoxville",
      logo: require("./assets/images/utk-logo.png"),
      subHeader: "B.S. in Computer Science",
      duration: "August 2018 - December 2022",
      descBullets: [
        "Minors in Mathematics & Physics",
        "Graduated Summa Cum Laude",
        "Relevant Courses: Data Structures, Data Mining & Analytics, Machine Learning, Introduction to Quantum Mechanics, Introduction to Quantum Information Science"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: emoji("Quantum Computing ⚛️"),
      progressPercentage: "80%"
    },
    {
      Stack: emoji("Machine Learning 🤖"),
      progressPercentage: "60%"
    },
    {
      Stack: emoji("Software Development 👩🏾‍💻"),
      progressPercentage: "70%"
    },
    {
      Stack: emoji("Data Analysis 📊"),
      progressPercentage: "70%"
    },
    {
      Stack: emoji("Teamwork 👥 and Management 📋"),
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "North Carolina State University",
      companylogo: require("./assets/images/ncstate_wolf.png"),
      location: "Raleigh, NC",
      date: "January 2025 - Present",
      descBullets: [
        "Developing the PAGODA software framework for the NVQL project, building a pulse-level optimization library for trapped ion architectures.",
        "Managing the CONQURE GitLab repository as part of the PAGODA tech stack, migrating software, deploying configuration fixes, and building testing suites to establish a reliable deployment pipeline.",
        "Troubleshooting technical errors and fielding user support questions for the ARC high-performance computing cluster alongside Dr. Frank Mueller."
      ]
    },
    {
      role: "Lead Student Volunteer",
      company: "Conference for High-Performance Computing, Storage, Networking and Analysis (SC)",
      companylogo: require("./assets/images/sc_logo.png"),
      location: "",
      date: "04/2026-Present",
      descBullets: [
        "Operations & Headquarters Lead (SC26): Managing Student HQ logistics, dynamic shift scheduling, daily volunteer check-ins, and on-the-fly personnel dispatching.",
        "Communications Lead (SC25): Directed information flow for the student volunteer cohort and partnered with the executive Communications Committee to publish Students@SC content."
      ]
    },
    {
      role: "Summer Graduate Student Research Intern",
      company: "RIKEN R-CCS",
      companylogo: require("./assets/images/riken-logo.jpg"),
      location: "Kobe, Japan",
      date: "May 2023 - July 2023",
      desc: "",
      descBullets: [
        "Collaborated with protein crystallographers on research projects, sharing ideas and discussing strategies to apply deep learning to their work.",
        "Conducted literature reviews to identify and analyse current research trends."
      ]
    },
    {
      role: "Research Scientist",
      company: "Global Computing Lab",
      location: "Knoxville, TN",
      companylogo: require("./assets/images/gclab-logo.png"),
      date: "February 2023 – May 2023",
      descBullets: [
        "Conducted experiments to perform parallelized neural architecture search across several CPU and GPU nodes on a supercomputer.",
        "Co-authored published conference paper on a parallelized workflow utilizing efficient techniques to perform neural architecture search for protein characterization."
      ]
    },
    {
      role: "Full-stack Software Engineer & Product Owner Intern",
      company: "Allstate Technology & Strategic Ventures",
      location: "Tempe, AZ (Remote)",
      companylogo: require("./assets/images/allstate-logo.png"),
      date: "May 2021 – August 2021",
      desc: "",
      descBullets: [
        "Planned, designed, cross-team coordinated, and developed feature in an internal platform.",
        "Lead project demonstrations to present to the complete platform team, including sector directors."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards and Achievements 🏆"),
  subtitle: "Awards I have received!",

  achievementsCards: [
    {
      title: "NC State University Provost's Doctoral Fellowship",
      subtitle:
        "Prestigious award from both the Office of the Provost and the College of Engineering. This award is given to outstanding entering doctoral students.",
      image: require("./assets/images/ncstate_wolf.png"),
      imageAlt: "North Carolina State University Logo",
      footerLink: []
    },
    {
      title: "J. Wallace and Katie Dean Fellowship",
      subtitle:
        "Prestigious award from the Graduate School at the University of Tennessee Knoxville. This award recognizes extraordinary students who show promise for outstanding graduate work in excellent and demanding programs at UT.",
      image: require("./assets/images/utk-logo.png"),
      imageAlt: "University of Tennessee Logo",
      footerLink: []
    },
    {
      title: "Excellence & Distinction in Undergraduate Research Award",
      subtitle:
        "Graduate recognition award for publishing and presenting various works at conferences while in an undergraduate degree program.",
      image: require("./assets/images/utk-logo.png"),
      imageAlt: "University of Tennessee Logo",
      footerLink: []
    }

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out to me about project collaborations or jobs!",
  // email_address: "rpatel38@ncstate_wolf.png.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

// Publications Section

const publicationSection = {
  title: emoji("Publications 📚 💻"),
  subtitle: "Research I've been involved in!",
  works: [
    {
      type: "Preprint",
      authors: "R. Patel, S. Tripathy, Z. Sublett, S. An, and R. Patel.",
      title: "Using CSNNs to Perform Event-based Data Processing Classification on ASL-DVS.",
      location: "arXiv: 2408.00611 [cs.NE].",
      url: "https://arxiv.org/abs/2408.00611",
      doi: ""
    },
    {
      type: "Journal Article",
      authors: "R. Patel, B. Roachell, S. Caino-Lores, R. Ketron, J. Leonard, N. Tan, K. Vahi, D. A. Brown, E. Deelman, and M. Taufer.",
      title: "Reproducibility of the First Image of a Black Hole in the Galaxy M87 From the Event Horizon Telescope Collaboration.",
      location: "In: Computing in Science & Engineering 24.5 (2022), pp. 42-52.",
      url: "https://doi.org/10.1109/MCSE.2023.3241105",
      doi: "10.1109/MCSE.2023.3241105"
    },
    {
      type: "Conference Paper",
      authors: "G. Channing, R. Patel, P. Olaya, A. Keller Rorabaugh, O. Miyashita, S. Caino-Lores, C. Schuman, F. Tama, and M. Taufer.",
      title: "Composable Workflow for Accelerating Neural Architecture Search Using In Situ Analytics for Protein Classification.",
      location: "In: Proc. of the 52nd International Conference on Parallel Processing (ICPP). (Acceptance Rate: 29%). Salt Lake City, UT, USA: ACM, Aug. 2023, pp. 1-10.",
      url: "https://doi.org/10.1145/3605573.3605636",
      doi: "10.1145/3605573.3605636"
    },
    {
      type: "Conference Paper",
      authors: "P. Olaya, S. Caino-Lores and V. Lama, R. Patel, A. Rorabaugh, O. Miyashita, F. Tama, and M. Taufer.",
      title: "Identifying Structural Properties of Proteins from X-ray Free Electron Laser Diffraction Patterns.",
      location: "In: Proc. of the 18th IEEE International Conference on eScience. Salt Lake City, Utah, USA: IEEE Computer Society, October 10-14, 2022, pp. 1-10.",
      url: "https://doi.org/10.1109/eScience55777.2022.00017",
      doi: "10.1109/eScience55777.2022.00017"
    },
    {
      type: "Conference Poster",
      authors: "R. Patel, A. Rorabaugh, P. Olaya, S. Caino-Lores, G. Channing, C. Schuman, O. Miyashita, F. Tama, and M. Taufer.",
      title: "A Methodology to Generate Efficient Neural Networks for Classification of Scientific Datasets.",
      location: "In: Proc. of the 18th IEEE International Conference on eScience. (Short paper). Salt Lake City, Utah, USA: IEEE Computer Society, October 10-14, 2022, pp. 1-2.",
      url: "https://doi.org/10.1109/eScience55777.2022.00052",
      doi: "10.1109/eScience55777.2022.00052"
    },
    {
      type: "Conference Poster",
      authors: "R. Ketron, J. Leonard, B. Roachell, R. Patel, R. White, S. Caino-Lores, N. Tan, P. Miles, K. Vahi, E. Deelman, D. Brown, and M. Taufer.",
      title: "A Case Study in Scientific Reproducibility from the Event Horizon Telescope (EHT).",
      location: "In: Proc. of the 17th IEEE International Conference on eScience. Innsbruck, Austria, September 2021, pp. 249-250.",
      url: "https://doi.org/10.1109/eScience51609.2021.00045",
      doi: "10.1109/eScience51609.2021.00045"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  publicationSection,
  isHireable
};

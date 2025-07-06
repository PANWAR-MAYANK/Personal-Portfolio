const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title:  "Mayank Panwar | Portfolio",
  description:
    "A data-driven product thinker passionate about leveraging AI and Data Science to uncover actionable insights that shape customer-centric digital products and drive strategic business outcomes.",
  og: {
    title: "Mayank Portfolio",
    type: "website",
    url: "http://mayankpanwar.ml/",
  },
};

//Home Page
const greeting = {
  title: "Namaste!",
  sub: "Mayank Panwar",
  logo_name: "Mayank Panwar",
  resumeLink: "https://drive.google.com/file/d/1zlscj3kiGVIvyssdsmwQAE0RX8lRFrx7/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/panwar-mayank",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/panwar-mayank/",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.leetcode.com/panwar-mayank",
    },
    {
      siteName: "Gmail",
      iconifyClassname: "simple-icons:gmail",
      style: {
        color: "#0077b5",
      },
      profileLink: "mailto:mayankpanwar5943@gmail.com",
    },
    
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Product & Business Impact",
      fileName: "DesignImg",
      skills: [
        "⚡ Identifying user and business pain points to propose data-informed product solutions that align with company goals.",
        "⚡ Translating data insights into product opportunities through clear storytelling, dashboards, and stakeholder presentations.",
        "⚡ Collaborating across functions — from engineering to design — to define metrics, prioritize features, and drive product decisions.",
        "⚡ Bridging the gap between data and product by turning analysis into actionable recommendations with measurable impact.",
        
      ],
      softwareSkills: [
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
        {
          skillName: "Google Slides",
          fontAwesomeClassname: "simple-icons:googleslides",
          style: { color: "#FBBC05" },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: { color: "#F24E1E" },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: { color: "#0052CC" },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "simple-icons:slack",
          style: { color: "#4A154B" },
        },
        {
          skillName: "Notion",
          fontAwesomeClassname: "simple-icons:notion",
          style: { color: "#000000" },
        },
      ],
    },
    {
      title: "Data Science & ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing end-to-end ML pipelines to solve classification, regression, and clustering problems using Python, Scikit-learn, and TensorFlow.",
        "⚡ Exploring and analyzing structured and unstructured data using Python, SQL, and Pandas to drive business and product insights.",
        "⚡ Experimenting with model tuning and evaluation techniques like cross-validation, grid search, and performance metrics (e.g., F1-score, AUC-ROC) to improve model accuracy.",
        "⚡ Applying domain-specific ML techniques such as NLP for text analysis, Computer Vision for image classification, and Recommendation Systems for personalization.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos-jupyter",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Analytics & Visualization",
      fileName: "FullStackImg",
      skills: [
        "⚡ Cleaning, transforming, and analyzing data to support business goals through data-driven decision-making.",
        "⚡ Designing interactive dashboards and reports using Tableau, Power BI, and Excel to communicate insights to stakeholders.",
        "⚡ Visualizing trends and patterns effectively using Matplotlib, Seaborn, and Plotly to support strategic initiatives.",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { color: "#217346" },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: { color: "#3F4F75" },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:matplotlib",
          style: { color: "#11557c" },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "simple-icons:seaborn",
          style: { color: "#66c2a5" },
        },
        
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Explore a selection of projects that demonstrate my ability to integrate data science, web development, and product thinking to solve real-world problems, build user-centric solutions, and deliver measurable business impact.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Knee OsteoArithritis",
      img_path: "project-06.png",
      description:
        "Knee osteoarthritis severity classified via X-rays using deep learning ensemble; achieved 99.03% accuracy with full training pipeline.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Deep Learning",
          color: "#820032",
        },
        {
          lang: "X-Rays Analysis",
          color: "#00a100",
        },
        {
          lang: "Ensemble ",
          color: "#ff4b4b",
        },
        
        
      ],
      link: "https://github.com/PANWAR-MAYANK/KneeOsteoarthritis ",
      code: "https://github.com/PANWAR-MAYANK/KneeOsteoarthritis",
      linkcolor: "white",
    },
    {
      title: "INDmoney App Teardown",
      img_path: "project-06.png",
      description:
        "ML-based heart disease predictor using ECG signals, PCA, and ensemble classifiers for early detection and diagnostic support.",
      tags: [
        {
          lang: "Product Sense",
          color: "#004782",
        },
        {
          lang: "Fin-Tech",
          color: "#820032",
        },
        {
          lang: "ProductAnalysis",
          color: "#00a100",
        },
        {
          lang: "User-Exp",
          color: "#ff4b4b",
        },
        
        
      ],
      link: "https://github.com/PANWAR-MAYANK/INDmoney-Product-Teardown ",
      code: "https://github.com/PANWAR-MAYANK/INDmoney-Product-Teardown",
      linkcolor: "white",
    },
    {
      title: "SeismicNet",
      img_path: "acti.gif",
      description:
        "Predicted earthquake magnitude and depth using Dense and LSTM models on spatial data; includes visualizations and model comparisons.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "DeepLearning",
          color: "#c47206",
        },
        {
          lang: "TimeSeriesForecasting",
          color: "#ff4b4b",
        },
        {
          lang: "LSTM",
          color: "#3c0095",
        },
      ],
      link: "https://github.com/PANWAR-MAYANK/SeismicNet",
      code: "https://github.com/PANWAR-MAYANK/SeismicNet",
      linkcolor: "white",
    },
    {
      title: "SafeTransact",
      img_path: "voice.gif",
      description:
        "ML-based fraud detection using anonymized credit card data, addressing class imbalance with interpretable models like SVM and KNN.",
      tags: [
        {
          lang: "Python",
          color: "red",
        },
        {
          lang: "ML",
          color: "#004782",
        },
        {
          lang: "FraudDetection",
          color: "#c47206",
        },
        {
          lang: "CreditCard",
          color: "#4257f5",
        },
      ],
      link: "https://github.com/PANWAR-MAYANK/SafeTransact",
      code: "https://github.com/PANWAR-MAYANK/SafeTransact",
      linkcolor: "white",
    },
    {
      title: "WatchFlix",
      img_path: "project-02.png",
      description:
        "Intelligent movie recommender using NLP & ML for personalized suggestions based on content features. Deployed on Streamlit Cloud.",
      tags: [
        {
          lang: "Python",
          color: "red",
        },
        {
          lang: "ML",
          color: "brown",
        },
        {
          lang: "NLP",
          color: "blue",
        },
        {
          lang: "Recommender",
          color: "#820032",
        },
        {
          lang: "Streamlit",
          color: "green",
        },
      ],
      link: "https://watchflix.streamlit.app/",
      code: "https://github.com/PANWAR-MAYANK/WatchFlix",
      linkcolor: "white",
    },
    {
      title: "Sales Dashboard",
      img_path: "neural.gif",
      description:
        "Power BI dashboard for Super Store sales analysis with interactive visuals, sales forecasting, and key business insights and actionable suggestions.",
      tags: [
        {
          lang: "PowerBI",
          color: "#004782",
        },
        {
          lang: "Visualization",
          color: "#8700b0",
        },
        {
          lang: "Insights",
          color: "brown",
        },
        {
          lang: "BusinessIntelligence",
          color: "#ff4b4b",
        },
        
      ],
      link: "https://github.com/PANWAR-MAYANK/Sales-Dashboard",
      code: "https://github.com/PANWAR-MAYANK/Sales-Dashboard",
      linkcolor: "white",
    },
    {
      title: "MI Vision",
      img_path: "project-06.png",
      description:
        "ML-based heart disease predictor using ECG signals, PCA, and ensemble classifiers for early detection and diagnostic support.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "ML",
          color: "#820032",
        },
        {
          lang: "ECG-Analysis",
          color: "#00a100",
        },
        {
          lang: "EnsembleLearning",
          color: "#ff4b4b",
        },
        
        
      ],
      link: "https://github.com/PANWAR-MAYANK/MI-Vision ",
      code: "https://github.com/PANWAR-MAYANK/MI-Vision",
      linkcolor: "white",
    },

    
    
    {
      title: "Churn Predictor",
      img_path: "project-03.png",
      description:
        "Telecom customer churn analysis using ML (Decision Trees, Random Forests, XGBoost, PCA) to predict churn and enhance retention.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "ML",
          color: "#820032",
        },
        {
          lang: "CustomerRetention",
          color: "#00a100",
        },
        {
          lang: "PredictiveAnalytics ",
          color: "#ff4b4b",
        },
      ],
      link: "https://github.com/PANWAR-MAYANK/Customer-Churn-Predicor",
      code: "https://github.com/PANWAR-MAYANK/Customer-Churn-Predicor",
      linkcolor: "white",
    },
    

    {
      title: "Customer Segmentation",
      img_path: "news.gif",
      description:
        "Customer segmentation using RFM analysis and K-Means clustering to identify high-value customers and enable targeted marketing.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "RFMAnalysis",
          color: "#303030",
        },
        {
          lang: "ML",
          color: "#ff4b4b",
        },
        {
          lang: "MarketingStrategy",
          color: "#051c61",
        },
      ],
      link: "https://github.com/PANWAR-MAYANK/CustomerSegmentation",
      code: "https://github.com/PANWAR-MAYANK/CustomerSegmentation",
      linkcolor: "white",
    },
    {
      title: "Mayank's Portfolio",
      img_path: "acti.gif",
      description:
        "Built a personal portfolio website using ReactJS to showcase projects, skills, and professional background interactively.",
      tags: [
        {
          lang: "ReactJS",
          color: "#004782",
        },
        {
          lang: "Portfolio",
          color: "#820032",
        },
        {
          lang: "UI-UX",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "JavaScript",
          color: "#3c0095",
        },
      ],
      link: "https://github.com/PANWAR-MAYANK/Personal-Portfolio",
      code: "https://github.com/PANWAR-MAYANK/Personal-Portfolio",
      linkcolor: "white",
    },
    {
      title: "Global Threat Dashboard",
      img_path: "acti.gif",
      description:
        "An interactive Power BI dashboard visualizing global terrorism trends, attack types, regions, and fatalities for strategic insights.",
      tags: [
        {
          lang: "PowerBI",
          color: "#004782",
        },
        {
          lang: "Visualization",
          color: "#c47206",
        },
        {
          lang: "Insights",
          color: "#ff4b4b",
        },
        {
          lang: "Dashboard",
          color: "#3c0095",
        },
      ],
      link: "https://github.com/PANWAR-MAYANK/Global-Threat-Dashboard",
      code: "https://github.com/PANWAR-MAYANK/Global-Threat-Dashboard",
      linkcolor: "white",
    },
    
    {
      title: "GDP Nexus",
      img_path: "acti.gif",
      description:
        "Interactive web dashboard to explore country-wise GDP trends using Streamlit, with CI/CD, containerization, and automated deployment.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "GDPDashboard",
          color: "#c47206",
        },
        {
          lang: "Interactive",
          color: "#ff4b4b",
        },
        {
          lang: "Streamlit",
          color: "#3c0095",
        },
      ],
      link: "https://gdp-nexus.streamlit.app/",
      code: "https://github.com/PANWAR-MAYANK/GDP-Nexus",
      linkcolor: "white",
    },
    
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "AI/ML Research Intern",
        subtitle: "Indian Institute of Technology, Roorkee",
        date: "May 2025 - Jul 2025",
        content: [
          "Developed CNN-based models with transfer learning for battery State-of-Health estimation using multimodal fusion of voltage profiles and histograms.",
          "Achieved a 14% improvement over baseline by integrating partial voltage curve features with statistical histogram data for enhanced prediction accuracy.",
        ],
      },
      {
        title: "UG Researcher",
        subtitle: "Netaji Subhas University of Technology, New Delhi",
        date: "Feb 2025 - May 2025",
        content: [
          "Built and optimized a deep learning ensemble for Knee Osteo Arithritis X-ray grading, achieving 99.03% test accuracy and ~99% F1-score, enhancing diagnostic efficiency.",
          "Handled 8,260+ images using augmentation and relabeling, improving class balance and boosting performance on minority KOA severity grades.",

        ],
      },
      {
        title: "Technology Intern",
        subtitle: "One Cloud Square Solutions Pvt. Ltd.",
        date: "May 2024 - Jun 2024",
        content: [
          "Spearheaded the creation and management of OCS’s website, achieving 100% uptime and increasing visitor engagement by 50%.",
          "Innovated website design and functionality, coordinated with stakeholders to ensure alignment with brand identity, resulting in a 30% reduction in bounce rate and a 40% increase in user satisfaction metrics.",
        ],
      },
      {
        title: "Freelance",
        subtitle: "Car Spaz Organic Solutions",
        date: "Apr 2023 - May 2023",
        content: [
          "Spearheaded the creation and management of business website independently, integrating features such as appointment scheduling, resulting in a 33% increase in customer bookings within 2 months.",
          "Designed and implemented website features at CarSpazOS, optimizing customer engagement and operational efficiency, resulting in a 25% reduction in administrative workload within the first month.",
        ],
      },
      
    ],
  },

  positions: {
    title: ["Positions of Responsibility"],
    data: [
      {
        title: "Joint Secretary",
        subtitle: "IEEE NSUT Chapter",
        content: [
          "Contributed to organizing events, fostering innovation, and facilitating technical growth through workshops, competitions, and collaborations with industry leaders.",
        ],
      },
      {
        title: "Senior Executive Committee Member",
        subtitle: "YUVA NSUT Chapter",
        content: [
          "Contributed to community empowerment through youth engagement, cultural awareness campaigns, and initiatives focused on sustainable livelihoods.",
        ],
      },
      {
        title: "Volunteer",
        subtitle: "PRAYAS - The Neighbourhood Project",
        content: [
          "Organized teaching sessions for students of laborers working within college campuses and arranged screenings to support their education and development.",
        ],
      },
      {
        title: "Mentor",
        subtitle: "DeshKeMentor by Govt. of Delhi",
        content: [
          "Guided students in their career choices, exam preparations, and personal development, helping them navigate their academic journey with confidence.",
        ],
      },
      {
        title: "School Captain (Head Boy)",
        subtitle: "APS, Roorkee",
        content: [
          "Represented the student body, led by example, and worked to foster a positive and inclusive environment through active involvement in school activities.",
        ],
      },
    ],
  },
};


const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Technology - CSE(AI)",
          subtitle: "Netaji Subhas University of Technology, New Delhi",
          date: "2022 - Present",
          content: ["CGPA: 8.13/10"],
        },
        {
          title: "AISSCE [Class XII]",
          subtitle: "Central Board of Secondary Education",
          date: "2021",
          content: ["Percentage: 94%"],
        },
        {
          title: "AISSE [Class X]",
          subtitle: "Central Board of Secondary Education",
          date: "2019",
          content: ["Percentage: 95.6%"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "Secured 99.6 percentile in JEE (Mains) amongst 10+ lakh candidates.",
            "Secured AIR 4438 in JEE (Advanced) amongst 2.5+ lakh candidates.",
          ],
        },
        {
          title: "Achievements",
          content: [
            "Received ’Best Delegate’ recognition at DV-MUN amongst 500+ delegates from 70+ schools.",
            "Selected for Officer Entry in the National Defence Academy and Officer’s Training Academy.",
            "Participated in GSSoC 2024, engaging with 17k+ participants globally from 200+ institutes.",
            "’Blue Coat’ holder in school for scoring 90% and above for 7+ consecutive years in a batch of 300+ students.",
          ],
        },
      ],
    },
    {
      title: ["Positions of Responsibility"],
      data: [
        {
          title: "Joint Secretary",
          subtitle: "IEEE NSUT Chapter",
          content: [
            "Contributed to organizing events, fostering innovation, and facilitating technical growth through workshops, competitions, and collaborations with industry leaders.",
          ],
        },
        {
          title: "Senior Executive Committee Member",
          subtitle: "YUVA NSUT Chapter",
          content: [
            "Contributed to community empowerment through youth engagement, cultural awareness campaigns, and initiatives focused on sustainable livelihoods.",
          ],
        },
        {
          title: "Volunteer",
          subtitle: "PRAYAS - The Neighbourhood Project",
          content: [
            "Organized teaching sessions for students of laborers working within college campuses and arranged screenings to support their education and development.",
          ],
        },
        {
          title: "Mentor",
          subtitle: "DeshKeMentor- a Govt. of Delhi Initiative",
          content: [
            "Guided students in their career choices, exam preparations, and personal development, helping them navigate their academic journey with confidence.",
          ],
        },
        {
          title: "School Captain (Head Boy)",
          subtitle: "APS, Roorkee",
          content: [
            "Represented the student body, led by example, and worked to foster a positive and inclusive environment through active involvement in school activities.",
          ],
        },
        ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "McKinsey Forward Program",
      subtitle: "McKinsey & Company",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Data Analytics with Python",
      subtitle: "IIT Roorkee",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1spNW95YEVuOvWU3CisTUbKGgwnKkSFUf/view?usp=sharing",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "E-Business",
      subtitle: "IIT Kharagpur",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1IsDUM_SdcJ8zoysSQjND1CsENy4-Xhnu/view?usp=sharing",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Internet Of Things",
      subtitle: "IIT Kharagpur",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1NHQvLLLDC1S8iejxZKPidoShd4kTX1Hi/view?usp=sharing",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Amazon Web Services",
      logo_path: "problem-01.png",
      certificate_link: "https://www.linkedin.com/in/panwar-mayank/details/certifications/1705687341652/single-media-viewer/?profileId=ACoAADE7gRkBkKb5W8u3OVuu9Zohtx34tlP3rGA",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Deep Learning Course",
      subtitle: "Scaler",
      logo_path: "python-01.png",
      certificate_link: "https://drive.google.com/file/d/1P-Fi3BJDZsI5RDUuCn5UaoPyep1pG8Nf/view?usp=sharing",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Data Science Course",
      subtitle: "Scaler",
      logo_path: "simplilearn-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1eGsgEunjhxNhDMm1D773yDUUCzxnA0j0/view?usp=sharing",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "Intel Edge AI Certification",
      subtitle: "Intel Corporation",
      logo_path: "iitg-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1GoQ7dOoHE4uPrBcqXr7atJgFYd1SClTh/view?usp=sharing",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Product Management ",
      subtitle: "Forage- Electronic Arts",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://drive.google.com/file/d/17iuw1QkZ-8X_8V0W1VgpGm1fUtfUPsP2/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Data Science ",
      subtitle: "Forage- British Airways",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://drive.google.com/file/d/17xcjJOg5qrkhYgfJ0g_DyQIsu-7mydZ5/view?usp=sharing",
      alt_name: "University of Michigan",
      color_code: "#000000",
    },
    {
      title: "Advanced Software Engg.",
      subtitle: "Forage- Walmart USA",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1H7ZCHLYFkBF0lfs7jj0a-yfkxH5QQeJy/view?usp=sharing",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "Software Engineering",
      subtitle: "Forage- J.P. Morgan",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1aRw94BF23nHB_vzpSV-8LsGEP4dCVmyV/view?usp=sharing",
      alt_name: "HackerRank",
      color_code: "#000000",
    },

  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "Whether you have a project in mind, a question about my work, or just want to connect, I’d love to hear from you. Feel free to reach out. I’ll get back to you as soon as possible!",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dwarka Sec-3, Delhi - 110008",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9149300101",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/panwar-mayank",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/panwar-mayank/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mayankpanwar5943@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};

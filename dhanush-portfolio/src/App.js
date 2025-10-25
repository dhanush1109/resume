import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Award, Users, ExternalLink, BookOpen, Target, Lightbulb, Rocket, Trophy, Heart, Building2, Calendar, CheckCircle2 } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation Hook for scroll-triggered animations
  const useScrollAnimation = (threshold = 0.1) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        {
          threshold,
          rootMargin: '-50px 0px -50px 0px'
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [threshold]);

    return [ref, isInView];
  };

  const resumeData = {
    name: "Dhanush Devadiga",
    title: "Software Engineer | AI/ML Specialist",
    contact: {
      email: "dhanushdevadiga1109@gmail.com",
      phone: "+91-7304867854",
      location: "Mumbai, Maharashtra, India",
      address: "B 801 Joy Homes, Opposite Ishwar Nagar, LBS Marg Bhandup (W), Mumbai 400078"
    },
    about: [
      "Passionate Software Engineer specializing in Generative AI and Machine Learning",
      "Proven expertise in building scalable, context-aware conversational AI systems",
      "Currently working at Navikenz with successful deployment of multiple GenAI solutions",
      "Created innovative AI-powered tools that significantly improve automation and user engagement"
    ],
    experience: [
      {
        company: "Navikenz, Bangalore",
        role: "Software Engineer",
        period: "July 2024 - Present",
        achievements: [
          "Built scalable, context-aware conversational AI systems for multiple clients (2025)",
          "Created a comprehensive no-code agent platform that democratized AI application development (2025)",
          "Successfully deployed multiple GenAI solutions in production environment (2024)",
          "Developed innovative AI-powered tools that significantly improved automation and user engagement (2024)"
        ],
        responsibilities: [
          "Contributed to the development of Generative AI (GenAI) solutions, creating intelligent internal tools that enhanced automation and data-driven decision-making across the organization",
          "Designed and deployed a Retrieval-Augmented Generation (RAG)-based, agentic chatbot framework for multiple clients, leveraging NLP and machine learning to build scalable, context-aware conversational AI systems",
          "Built AI-powered photo processing tools that transform images using simple user prompts, eliminating the need for manual editing and enabling fully automated, high-quality visual outputs",
          "Collaborated with cross-functional teams to integrate AI capabilities into existing workflows, streamlining operations and significantly improving user engagement",
          "Architected modular agent frameworks that allow rapid deployment of custom AI solutions across diverse business domains"
        ],
        projects: [
          {
            name: "GenBI",
            desc: [
              "Developed intelligent business intelligence platform for automatic chart and graph generation",
              "Analyzed datasets and generated visualizations based on user prompts or autonomous data understanding",
              "Enabled dynamic data visualization through natural language processing"
            ]
          },
          {
            name: "VFS POC",
            desc: [
              "Developed RAG-based chatbot for VFS Global to automate e-visa on arrival process",
              "Reduced manual workflows by eliminating multiple steps including manual visa form filling",
              "Streamlined the entire application procedure"
            ]
          },
          {
            name: "Naviflow",
            desc: [
              "Engineered no-code agent platform for building RAG-based applications",
              "Enabled intuitive drag-and-drop component connections and agent prompt configuration",
              "Democratized AI application development without requiring programming expertise"
            ]
          },
          {
            name: "Photo Wizard",
            desc: [
              "Built AI-powered photo editing tool for background replacement and intelligent cropping",
              "Implemented standards compliance checks (dimensions, aspect ratio, face visibility, background rules)",
              "Enabled prompt-driven edits with natural language specification",
              "Automated end-to-end transformations without manual intervention",
              "Accelerated compliant photo generation for IDs, visas, and profiles"
            ]
          }
        ]
      }
    ],
    research: {
      institution: "Jain Deemed to be University, Bangalore",
      period: "July - November 2022",
      role: "Researcher",
      project: "Self Defense and Safety Monitoring System",
      description: [
        "Discussed advanced smart safety device for rapid security, addressing limitations in existing solutions",
        "Designed user-friendly interface device with automatic responses, emphasizing quick activation in emergencies",
        "Integrated automatic response mechanisms to ensure quick activation and real-time reaction in critical situations",
        "Implemented AI-powered emotion recognition system using machine learning algorithms",
        "Analyzed voice patterns and pulse sensor data for automatic threat detection without manual activation"
      ],
      publication: "Published at 4th International Conference on Advances in Computing, Communication Control and Networking (ICAC3N), March 2023"
    },
    education: [
      {
        institution: "Jain University, Bangalore",
        degree: "Bachelor of Technology, Computer Science and Engineering",
        period: "2020 - 2024",
        grade: "CGPA 9.02/10"
      },
      {
        institution: "Mahesh PU College, Mangalore",
        degree: "Higher Secondary Examination, PUC (Karnataka State Board)",
        period: "2018",
        grade: "84.6%"
      },
      {
        institution: "Oxford High School, Bhandup",
        degree: "Secondary School Examination, SSC (Maharashtra State Board)",
        period: "2016",
        grade: "88.2%"
      }
    ],
    skills: {
      "Programming Languages": ["Python", "C", "C++", "SQL"],
      "Cloud/Databases": ["AWS", "MongoDB", "Postgres", "Azure"],
      "BI/Visualization": ["Power BI", "Tableau"],
      "Developer Tools": ["Git", "Docker", "Postman"],
      "Frameworks": ["Langchain", "Langgraph", "Agentic Frameworks", "FastAPI", "TensorFlow", "PyTorch", "Keras", "Flask"],
      "AI/ML": ["Deep Learning Fundamentals", "Natural Language Processing", "CV & IP", "Speech Recognition", "Reinforcement Learning"],
      "Microsoft Office": ["Word", "Excel", "PowerPoint", "Access"]
    },
    projects: [
      {
        name: "LegalLens AI",
        period: "May - July 2024",
        desc: [
          "Implemented RAG pipeline for document processing and intelligent retrieval using LangChain and LangGraph",
          "Integrated Meta's LLaMA-2 (4B) model for accurate summarization and legal text generation",
          "Enabled users to upload legal files, ask questions, and create custom legal documents",
          "Built complete RAG pipeline with FAISS vector database for semantic search",
          "Fine-tuned LLaMA-2 using LoRA for legal text generation",
          "Implemented FastAPI endpoints with OCR integration"
        ]
      },
      {
        name: "Cuisine Quest",
        period: "March - April 2024",
        desc: [
          "Developed location-based restaurant recommendation web application using Flask and MySQL",
          "Implemented machine learning-powered nearest neighbour search using Haversine distance metric",
          "Built secure user authentication system with MySQL database integration",
          "Engineered spatial indexing optimization using BallTree data structure with leaf_size tuning",
          "Enabled scalable geographic coordinate processing for large datasets with O(log n) time complexity"
        ]
      },
      {
        name: "Hyper-personalized Recommender System",
        period: "April - June 2023",
        desc: [
          "Enhanced tailored user recommendations using Reinforcement Learning techniques",
          "Evaluated and selected the most accurate recommender model",
          "Fine-tuned and optimized model to improve recommendation quality and user accuracy",
          "Implemented reinforcement learning algorithms for personalized recommendation engine"
        ]
      },
      {
        name: "News Category Classifier Using NLP",
        period: "January - March 2023",
        desc: [
          "Constructed potent text summarization model for extracting vital information from extensive text datasets",
          "Utilized LSTM and RNN techniques to build the model",
          "Developed robust news categorization system for automatic article classification",
          "Built bidirectional LSTM networks with attention mechanisms for text processing",
          "Implemented comprehensive preprocessing pipeline with spaCy NER, TF-IDF vectorization, and Word2Vec embeddings",
          "Achieved multi-class classification across 10+ news categories"
        ]
      },
      {
        name: "Predictive Healthcare Analytics for Cardiovascular Disease Detection",
        period: "November - December 2022",
        desc: [
          "Developed machine learning classification model to predict heart disease using clinical patient data",
          "Implemented Random Forest Classifier with feature selection techniques (RFE and RFECV)",
          "Applied Recursive Feature Elimination with Cross-Validation (RFECV) using 7-fold CV",
          "Automatically selected optimal features, improving accuracy from 67.2% to 86.9%",
          "Achieved 86.9% classification accuracy on test data",
          "Demonstrated effective feature engineering and model optimization for healthcare applications"
        ]
      }
    ],
    internships: [
      {
        company: "Navikenz, Bangalore",
        period: "January - July 2024",
        desc: [
          "Engaged in diverse projects involving Python programming, data science methodologies, and database management",
          "Applied practical skills to solve real-world problems",
          "Gained hands-on experience in web development (HTML, CSS, JavaScript)",
          "Worked with cloud technologies on Microsoft Azure platform",
          "Contributed to scalable and modern application solutions"
        ]
      },
      {
        company: "Suvidha Foundation",
        period: "February - March 2023",
        desc: [
          "Developed advanced NLP text summarization model using state-of-the-art techniques",
          "Extracted key information from extensive text data",
          "Improved text comprehension and information retrieval through concise and meaningful content summaries"
        ]
      },
      {
        company: "Intrainz Edutech",
        period: "November 2022 - January 2023",
        desc: [
          "Implemented PCA on heart disease dataset during one-month industry training",
          "Reduced 13 features to 8 components with 96% accuracy",
          "Applied PCA feature extraction techniques on 297 patient records",
          "Achieved 93% testing accuracy in cardiovascular risk prediction",
          "Executed dimensionality reduction using PCA, optimizing model performance by 38%",
          "Completed intensive one-month ML industry training covering Python, TensorFlow, and scikit-learn"
        ]
      }
    ],
    certifications: [
      {
        name: "AI Practitioner - AWS",
        year: "2025",
        desc: [
          "Demonstrated proficiency in AWS AI/ML services including SageMaker, Bedrock, and Comprehend",
          "Applied machine learning workflows for model training, deployment, and monitoring on AWS infrastructure",
          "Implemented generative AI solutions using AWS Bedrock foundation models",
          "Designed scalable AI architectures leveraging Lambda, EC2, and containerized deployments",
          "Validated expertise in responsible AI practices and governance frameworks"
        ]
      },
      {
        name: "Microsoft Azure AI Fundamentals",
        year: "2024",
        desc: [
          "Gained foundational knowledge of Azure Cognitive Services for vision, speech, and language processing",
          "Explored machine learning concepts using Azure Machine Learning Studio",
          "Understood conversational AI development with Azure Bot Framework",
          "Learned computer vision applications through Azure Computer Vision and Custom Vision services",
          "Demonstrated knowledge of responsible AI principles and ethical considerations"
        ]
      },
      {
        name: "Robotics Workshop - Jain University",
        year: "2024",
        desc: [
          "Learned fundamental robotics concepts and gained hands-on experience with IoT integration",
          "Used Raspberry Pi microcontroller for embedded system development",
          "Built functional remote-controlled car from scratch with proper circuit design and wiring",
          "Implemented wireless communication protocols (Bluetooth and WiFi modules)",
          "Gained practical experience in Python programming on Raspberry Pi platform",
          "Developed understanding of IoT fundamentals including sensor integration and wireless protocols"
        ]
      },
      {
        name: "Google Developer Students Club Workshop",
        year: "2023",
        desc: [
          "Learned to implement and deploy language models using Google Cloud technologies",
          "Gained hands-on experience with Google Cloud's AI/ML services",
          "Explored Google Cloud's pre-trained AI APIs for NLP, speech recognition, image analysis, and translation",
          "Practiced building introductory machine learning projects using Google Cloud's AI framework",
          "Developed understanding of Google Cloud's scalable infrastructure for data analysis"
        ]
      },
      {
        name: "Supervised Learning with Scikit-Learn - Coursera",
        year: "2023",
        desc: [
          "Earned certification in Supervised Learning with Scikit-Learn from Coursera"
        ]
      },
      {
        name: "Creating Machine Learning Models with Microsoft Azure",
        year: "2023",
        desc: [
          "Awarded certificate in Creating Machine Learning Models with Microsoft Azure from Microsoft"
        ]
      }
    ],
    achievements: [
      "Competed in intercollege hackathons hosted by Honeywell and Futurence Technologies, showcasing technical expertise and collaborative development abilities (2023-2024)",
      "Specialized in AI/ML during BTech with focus on cutting-edge technologies (2022-2024)",
      "Participated in multiple college-level hackathons demonstrating innovation and problem-solving skills (2022-2024)",
      "Completed multiple AI/ML certifications from leading platforms (2021-2024)",
      "Published research paper on 'Self Defence and Safety Monitoring System' at International Conference (2022)"
    ],
    extracurricular: [
      {
        role: "Team Collaborator",
        organization: "Cross-functional AI development teams, Navikenz",
        period: "2024 - Present",
        desc: [
          "Coordinated between development team and data science research teams for GenAI solution implementation",
          "Facilitated knowledge sharing and technical discussions within the departments"
        ]
      },
      {
        role: "Volunteer",
        organization: "Suvidha Foundation, Nagpur",
        period: "2023",
        desc: [
          "Collected funds for educational development programs to support infrastructure improvements",
          "Improved learning resource accessibility for disadvantaged communities",
          "Carried out group discussion sessions on new cutting-edge technology for awareness",
          "Helped community members understand and adapt to emerging technological advancements"
        ]
      },
      {
        role: "Research Contributor",
        organization: "Academic research projects, Jain University",
        period: "2022",
        desc: [
          "Led research methodology and implementation for safety monitoring system publication",
          "Collaborated with faculty advisors on ICAC3N conference paper preparation"
        ]
      },
      {
        role: "Team Lead",
        organization: "College Major Projects, Jain Deemed to be University",
        period: "2021-2024",
        desc: [
          "Managed project timelines and resource allocation for multiple AI/ML academic projects",
          "Mentored team members on technical implementation and problem-solving approaches"
        ]
      },
      {
        role: "Community Participant",
        organization: "AI/ML Community",
        period: "2020 - Present",
        desc: [
          "Active participant in AI/ML community discussions and knowledge sharing",
          "Continuous learner with passion for emerging technologies in artificial intelligence",
          "Self-motivated problem solver with analytical thinking approach"
        ]
      }
    ]
  };

  // Animated Section Component
  const AnimatedSection = ({ children, className = "", delay = 0 }) => {
    const [ref, isInView] = useScrollAnimation(0.1);
    
    return (
      <div
        ref={ref}
        className={`${className} transition-all duration-1000 ease-out ${
          isInView 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-16 scale-95'
        }`}
        style={{ 
          transitionDelay: isInView ? `${delay}ms` : '0ms',
        }}
      >
        {children}
      </div>
    );
  };

  // Staggered Animation Component
  const StaggeredItems = ({ children, className = "" }) => {
    const [ref, isInView] = useScrollAnimation(0.1);
    
    return (
      <div ref={ref} className={className}>
        {React.Children.map(children, (child, index) => (
          <div
            className={`transition-all duration-700 ease-out ${
              isInView 
                ? 'opacity-100 translate-y-0 translate-x-0' 
                : 'opacity-0 translate-y-8 -translate-x-4'
            }`}
            style={{ 
              transitionDelay: isInView ? `${index * 100}ms` : '0ms',
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed bottom-0 right-0"></div>
        <div className="stars"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className={`text-center z-10 px-4 transition-all duration-2000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
          <div className="mb-6 animate-scale-in" style={{ animationDelay: '200ms' }}>
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold text-white shadow-2xl shadow-blue-500/50 border-2 border-blue-300/30 transform hover:scale-110 transition-transform duration-300">
              DD
            </div>
          </div>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {resumeData.name}
          </h1>
          <p className={`text-xl md:text-2xl lg:text-3xl text-blue-300 mb-8 font-light transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {resumeData.title}
          </p>
          <div className={`flex flex-wrap justify-center gap-4 md:gap-8 text-gray-200 text-sm md:text-base transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-all transform hover:scale-105">
              <Mail size={18} />
              <span className="hidden sm:inline">{resumeData.contact.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-all transform hover:scale-105">
              <Phone size={18} />
              <span className="hidden sm:inline">{resumeData.contact.phone}</span>
              <span className="sm:hidden">Phone</span>
            </a>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-all transform hover:scale-105">
              <MapPin size={18} />
              <span>{resumeData.contact.location}</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4 justify-center">
              <Users className="text-blue-400" size={32} />
              About Me
            </h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-500/30 transform hover:scale-[1.02] transition-all duration-500">
              <ul className="space-y-4 mb-8">
                {resumeData.about.map((point, i) => (
                  <li key={i} className="text-gray-100 text-lg md:text-xl leading-relaxed flex items-start gap-3">
                    <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <StaggeredItems className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-2xl p-6 border border-blue-400/40 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-4 flex items-center gap-3">
                    <Trophy size={24} />
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {resumeData.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-200 text-sm md:text-base flex items-start gap-3">
                        <Rocket size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/30 to-blue-600/30 rounded-2xl p-6 border border-indigo-400/40 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-semibold text-indigo-300 mb-4 flex items-center gap-3">
                    <Target size={24} />
                    Professional Summary
                  </h3>
                  <ul className="space-y-3 text-gray-200 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <ExternalLink size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
                      Current: Software Engineer at Navikenz
                    </li>
                    <li className="flex items-start gap-3">
                      <ExternalLink size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
                      Expertise: GenAI, RAG Systems, NLP
                    </li>
                    <li className="flex items-start gap-3">
                      <ExternalLink size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
                      Education: BTech CSE (CGPA 8.7/10)
                    </li>
                    <li className="flex items-start gap-3">
                      <ExternalLink size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
                      Published Research at ICAC3N 2023
                    </li>
                  </ul>
                </div>
              </StaggeredItems>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection className="min-h-screen flex items-center py-20" delay={200}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4 justify-center">
              <Briefcase className="text-blue-400" size={32} />
              Professional Experience
            </h2>
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-500/30 transform hover:scale-[1.02] transition-all duration-500">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-blue-300 text-lg md:text-xl mb-4">{exp.company}</p>
                  <span className="text-gray-300 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 px-6 py-2 rounded-full text-sm border border-blue-400/30">
                    {exp.period}
                  </span>
                </div>
                
                <StaggeredItems className="space-y-8">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-blue-300 mb-4 flex items-center gap-3 justify-center">
                      <Trophy size={20} />
                      Key Achievements
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} className="text-gray-200 text-sm md:text-base flex items-start gap-3 bg-blue-600/20 rounded-xl p-4">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-indigo-300 mb-4 flex items-center gap-3 justify-center">
                      <Target size={20} />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-4">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j} className="text-gray-200 text-sm md:text-base flex items-start gap-3 bg-indigo-600/20 rounded-xl p-4">
                          <span className="text-indigo-400 mt-1">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-3 justify-center">
                      <Rocket size={20} />
                      Featured Projects
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {exp.projects.map((project, j) => (
                        <div key={j} className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl p-6 border border-blue-500/40 transform hover:scale-105 transition-all duration-300">
                          <h5 className="font-semibold text-white text-lg mb-3 flex items-center gap-2">
                            <Code size={18} className="text-blue-400" />
                            {project.name}
                          </h5>
                          <ul className="space-y-2">
                            {project.desc.map((point, k) => (
                              <li key={k} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                                <span className="text-cyan-400 mt-1 text-xs flex-shrink-0">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggeredItems>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Research Section */}
      <AnimatedSection className="min-h-screen flex items-center py-20" delay={400}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4 justify-center">
              <BookOpen className="text-blue-400" size={32} />
              Research Experience
            </h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-500/30 transform hover:scale-[1.02] transition-all duration-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{resumeData.research.role}</h3>
                <p className="text-blue-300 text-lg md:text-xl mb-4">{resumeData.research.institution}</p>
                <span className="text-gray-300 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 px-6 py-2 rounded-full text-sm border border-blue-400/30">
                  {resumeData.research.period}
                </span>
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-blue-300 mb-6 text-center">{resumeData.research.project}</h4>
              <ul className="space-y-4 mb-8 max-w-4xl mx-auto">
                {resumeData.research.description.map((point, i) => (
                  <li key={i} className="text-gray-200 text-base md:text-lg leading-relaxed flex items-start gap-3">
                    <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-2xl p-6 border border-blue-400/40 text-center">
                <p className="text-blue-200 text-sm md:text-base font-semibold flex items-center gap-3 justify-center">
                  <Award size={20} className="text-yellow-400" />
                  {resumeData.research.publication}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection className="min-h-screen flex items-center py-20" delay={300}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4 justify-center">
              <GraduationCap className="text-blue-400" size={32} />
              Education
            </h2>
            <StaggeredItems className="space-y-6">
              {resumeData.education.map((edu, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/30 transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                      <p className="text-blue-300 text-base md:text-lg mb-2">{edu.degree}</p>
                      <span className="text-gray-300 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 px-4 py-1 rounded-full text-sm border border-blue-400/30 inline-block">
                        {edu.period}
                      </span>
                    </div>
                    <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 rounded-xl p-4 border border-green-400/40 text-center md:min-w-[120px]">
                      <p className="text-white text-lg md:text-xl font-bold">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredItems>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="min-h-screen flex items-center py-20" delay={100}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4 justify-center">
              <Code className="text-blue-400" size={32} />
              Academic Projects
            </h2>
            <StaggeredItems className="grid sm:grid-cols-2 gap-8">
              {resumeData.projects.map((project, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30 transform hover:scale-105 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <Rocket size={20} className="text-blue-400" />
                      {project.name}
                    </h3>
                    <span className="text-xs text-gray-300 bg-blue-600/40 px-3 py-1 rounded-full border border-blue-400/30 whitespace-nowrap ml-4">
                      {project.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {project.desc.map((point, j) => (
                      <li key={j} className="text-gray-200 text-sm md:text-base leading-relaxed flex items-start gap-2">
                        <span className="text-blue-400 mt-1 text-xs flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </StaggeredItems>
          </div>
        </div>
      </AnimatedSection>

      {/* Internships Section */}
      <AnimatedSection className="min-h-screen flex items-center py-20" delay={200}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4 justify-center">
              <Building2 className="text-blue-400" size={32} />
              Internships
            </h2>
            <StaggeredItems className="space-y-6">
              {resumeData.internships.map((internship, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/30 transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        <Briefcase size={22} className="text-blue-400" />
                        {internship.company}
                      </h3>
                      <span className="text-gray-300 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 px-4 py-1 rounded-full text-sm border border-blue-400/30 inline-block">
                        {internship.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {internship.desc.map((point, j) => (
                      <li key={j} className="text-gray-200 text-sm md:text-base leading-relaxed flex items-start gap-3">
                        <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </StaggeredItems>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="min-h-screen flex items-center py-20" delay={300}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4 justify-center">
              <Award className="text-blue-400" size={32} />
              Technical Skills
            </h2>
            <StaggeredItems className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-base md:text-lg font-bold text-blue-300 mb-4 flex items-center gap-2">
                    <Target size={18} />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, j) => (
                      <span key={j} className="bg-gradient-to-r from-blue-600/40 to-indigo-600/40 text-white px-3 py-1 rounded-full text-xs border border-blue-400/50 hover:scale-110 transition-transform duration-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </StaggeredItems>
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications Section */}
      <AnimatedSection className="min-h-screen flex items-center py-20" delay={400}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4 justify-center">
              <Award className="text-blue-400" size={32} />
              Training & Certifications
            </h2>
            <StaggeredItems className="grid sm:grid-cols-2 gap-6">
              {resumeData.certifications.map((cert, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30 transform hover:scale-105 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-green-400" />
                      {cert.name}
                    </h3>
                    <span className="text-xs text-gray-300 bg-blue-600/40 px-3 py-1 rounded-full border border-blue-400/30 whitespace-nowrap ml-2">
                      {cert.year}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {cert.desc.map((point, j) => (
                      <li key={j} className="text-gray-200 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-green-400 mt-1 text-xs flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </StaggeredItems>
          </div>
        </div>
      </AnimatedSection>

      {/* Extracurricular Section */}
      <AnimatedSection className="min-h-screen flex items-center py-20" delay={200}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4 justify-center">
              <Heart className="text-blue-400" size={32} />
              Extracurricular Activities & Community Service
            </h2>
            <StaggeredItems className="space-y-6">
              {resumeData.extracurricular.map((activity, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-500/30 transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        <Users size={22} className="text-blue-400" />
                        {activity.role}
                      </h3>
                      <p className="text-blue-300 text-base md:text-lg mb-2">{activity.organization}</p>
                      <span className="text-gray-300 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 px-4 py-1 rounded-full text-sm border border-blue-400/30 inline-block">
                        {activity.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {activity.desc.map((point, j) => (
                      <li key={j} className="text-gray-200 text-sm md:text-base leading-relaxed flex items-start gap-3">
                        <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </StaggeredItems>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="relative z-10 bg-blue-950/95 backdrop-blur-xl border-t border-blue-500/30 py-8 md:py-12">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-gray-300 text-sm md:text-base mb-4">© 2025 {resumeData.name}. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <a href={`mailto:${resumeData.contact.email}`} className="text-blue-400 hover:text-blue-300 transition-colors transform hover:scale-110">
                <Mail size={24} />
              </a>
              <a href={`tel:${resumeData.contact.phone}`} className="text-blue-400 hover:text-blue-300 transition-colors transform hover:scale-110">
                <Phone size={24} />
              </a>
              <div className="text-blue-400">
                <MapPin size={24} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float {
          animation: float 20s infinite ease-in-out;
        }
        .animate-float-delayed {
          animation: float 25s infinite ease-in-out 5s;
        }
        .animate-scale-in {
          animation: scaleIn 1s ease-out;
        }
        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 60px 70px, white, transparent),
            radial-gradient(1px 1px at 50px 50px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 90px 10px, white, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0.3;
          animation: float 100s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

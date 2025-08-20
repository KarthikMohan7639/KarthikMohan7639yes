const resumeData = {
    name: "Karthik Mohan",
    title: "Software & Cloud Engineer",
    email: "karthikmohan7639@gmail.com", // Replace with your actual email
    phone: "+91 6383476453", // Replace with your actual phone
    location: "Chennai, India",
    linkedIn: "https://www.linkedin.com/in/karthik-m-4465b1134/", // Replace with your LinkedIn URL
    github: "https://github.com/KarthikMohan7639/", // Replace with your GitHub URL

    summary: 'EEE graduate (CGPA 8.8/10) and GET at BorgWarner. I build robust cloud + AI/IoT systems using Python, Microsoft Azure, SQL, and OpenCV. Focused on safety-critical, data-driven solutions.',

    experience: [
        {
            title: "Graduate Engineer Trainee",
            company: "BorgWarner",
            period: "Aug 2022 - Present",
            description: "Working as a GET in the innovation department, focusing on IoT and cloud solutions.",
            responsibilities: [
                "Developed and implemented IoT edge computing solutions for vehicle monitoring systems",
                "Designed and maintained Microsoft Azure cloud infrastructure for data analytics",
                "Created Python-based data processing pipelines for real-time vehicle telemetry",
                "Implemented SQL databases for efficient storage and retrieval of sensor data"
            ]
        },
        {
            title: "IoT Development Intern",
            company: "Tech Innovations Ltd",
            period: "May 2021 - July 2021",
            description: "Worked on IoT prototypes and proof-of-concepts for industrial applications.",
            responsibilities: [
                "Designed sensor integration systems using Arduino and Raspberry Pi platforms",
                "Created Python scripts for data collection and preprocessing",
                "Assisted in developing cloud connectivity solutions using MQTT and Azure IoT Hub",
                "Documented technical specifications and implementation guidelines"
            ]
        }
    ],

    education: [
        {
            degree: "Bachelor of Technology in Electrical and Electronics Engineering",
            institution: "PSG College of Technology",
            period: "2018 - 2022",
            grade: "8.8/10 CGPA",
            details: "Specialized in embedded systems and control engineering with minor in computer science."
        }
    ],

    projects: [
        {
            title: "Disaster Rescue Robot System",
            description: "Autonomous disaster rescue robot with GPS tracking and victim detection capabilities.",
            achievements: [
                "Reduced rescue localization time by 35% with live GPS telemetry",
                "Implemented CNN-based human detection with 87% accuracy in varying lighting conditions",
                "Developed robust remote control system with 1km range in urban environments",
                "Created Azure-based tracking dashboard for real-time operation monitoring"
            ],
            technologies: ["Python", "Azure IoT Hub", "OpenCV", "Raspberry Pi", "TensorFlow"],
            github: "https://github.com/username/disaster-rescue-robot",
            demo: ""
        },
        {
            title: "Elder Care Robot",
            description: "AI-powered elder care monitoring system with fall detection and emergency response.",
            achievements: [
                "Achieved 92% fall-detection accuracy in lab tests using custom CNN model",
                "Implemented real-time health monitoring with automated alert system",
                "Reduced false positive rate to under 5% through advanced signal processing",
                "Created low-power design for 24+ hour operation on battery power"
            ],
            technologies: ["Python", "TensorFlow", "Azure Functions", "SQL Database", "IoT"],
            github: "https://github.com/username/elder-care-robot",
            demo: ""
        },
        {
            title: "Smart Energy Monitoring System",
            description: "IoT-based power consumption monitoring and analytics platform for industrial use.",
            achievements: [
                "Reduced energy costs by 18% through data-driven optimization",
                "Developed real-time alerting system for anomalous power consumption patterns",
                "Created interactive dashboard showing energy usage patterns with predictive analytics",
                "Implemented secure data transmission with 256-bit encryption"
            ],
            technologies: ["Python", "MQTT", "Azure IoT Central", "Power BI", "ESP32"],
            github: "https://github.com/username/smart-energy-monitor",
            demo: ""
        }
    ],

    publications: [
        {
            title: "IoT-Based Disaster Response Systems: A Comprehensive Review",
            journal: "IEEE Internet of Things Journal",
            year: "2022",
            authors: "Karthik Mohan, Dr. A. Researcher, Dr. B. Scholar",
            abstract: "This paper presents a comprehensive review of Internet of Things (IoT) technologies applied to disaster response scenarios, evaluating their effectiveness, challenges, and future directions.",
            link: "https://example.com/publication1"
        },
        {
            title: "Computer Vision Approaches for Elderly Monitoring Systems",
            journal: "International Conference on Healthcare Engineering",
            year: "2021",
            authors: "Karthik Mohan, Dr. C. Expert",
            abstract: "This research explores various computer vision techniques for monitoring elderly individuals in home environments, with a focus on fall detection and activity recognition.",
            link: "https://example.com/publication2"
        }
    ],

    skills: {
        languages: [
            { name: "Python", level: 90, description: "Data processing, ML/AI, automation" },
            { name: "C/C++", level: 75, description: "Embedded systems, IoT firmware" },
            { name: "SQL", level: 85, description: "Database design and optimization" },
            { name: "JavaScript", level: 70, description: "Web development, dashboards" }
        ],
        frameworks: [
            { name: "TensorFlow", level: 80, description: "CNN models, computer vision" },
            { name: "OpenCV", level: 85, description: "Image processing, object detection" },
            { name: "Flask", level: 75, description: "API development, web services" },
            { name: "React", level: 60, description: "Frontend development" }
        ],
        cloud: [
            { name: "Microsoft Azure", level: 85, description: "IoT Hub, Functions, Storage" },
            { name: "Azure IoT Suite", level: 80, description: "Edge computing, device management" },
            { name: "Docker", level: 70, description: "Containerization, deployment" },
            { name: "CI/CD", level: 65, description: "Automated testing and deployment" }
        ],
        tools: [
            { name: "Git/GitHub", level: 85, description: "Version control, collaboration" },
            { name: "Raspberry Pi", level: 90, description: "Prototyping, edge computing" },
            { name: "Arduino", level: 85, description: "Sensor integration, firmware" },
            { name: "MQTT", level: 80, description: "IoT communication protocols" }
        ]
    }
};

export default resumeData;
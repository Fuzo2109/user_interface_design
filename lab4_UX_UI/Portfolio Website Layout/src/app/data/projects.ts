import aiAgentProjectImage from '../../assets/images/AI_Agent_project.jpg';
import aiVisionProjectImage from '../../assets/images/AI_Vision_project.jpg';
import dataVisualizationProjectImage from '../../assets/images/Data_Visualization_project.jpg';
import mobileMlProjectImage from '../../assets/images/Mobile_ML_project.jpg';
import modernWebProjectImage from '../../assets/images/Modern_Web_project.jpg';
import smartHomeProjectImage from '../../assets/images/Smart_Home_project.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  problem: string;
  solution: string;
  techStack: string[];
  demoUrl: string;
  bannerImage: string;
}

export const projects: Project[] = [
  {
    id: 'ai-vision-system',
    title: 'AI Vision Recognition System',
    description: 'Advanced computer vision system using deep learning for real-time object detection and classification.',
    image: aiVisionProjectImage,
    bannerImage: aiVisionProjectImage,
    category: 'AI',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'AI'],
    problem: 'Traditional security systems struggle with accurate threat detection, often generating false positives that waste security resources. Manual monitoring is inefficient and prone to human error, especially during long shifts or in complex environments with multiple simultaneous events.',
    solution: 'Implemented a state-of-the-art deep learning model using convolutional neural networks (CNN) to analyze video streams in real-time. The system uses transfer learning with pre-trained models fine-tuned on custom datasets, achieving 95% accuracy in threat detection. Edge computing capabilities enable local processing, reducing latency and privacy concerns.',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Docker', 'Kubernetes', 'AWS Lambda', 'Redis'],
    demoUrl: 'https://example.com/demo'
  },
  {
    id: 'smart-iot-dashboard',
    title: 'Smart Home IoT Dashboard',
    description: 'Comprehensive IoT platform for managing and monitoring smart home devices with predictive analytics.',
    image: smartHomeProjectImage,
    bannerImage: smartHomeProjectImage,
    category: 'IoT',
    tags: ['React', 'Node.js', 'MQTT', 'IoT'],
    problem: 'Homeowners with multiple smart devices from different manufacturers face a fragmented experience with separate apps for each device. There\'s no unified view of energy consumption or automated optimization, leading to inefficient resource usage and higher utility bills.',
    solution: 'Developed a unified dashboard using React and TypeScript that integrates with various IoT protocols (MQTT, Zigbee, Z-Wave). Implemented machine learning algorithms to predict energy usage patterns and automate device scheduling for optimal efficiency. Real-time WebSocket connections provide instant updates, while a Node.js backend handles device orchestration and data aggregation.',
    techStack: ['React', 'TypeScript', 'Node.js', 'MQTT', 'MongoDB', 'WebSocket', 'Zigbee', 'Python'],
    demoUrl: 'https://example.com/demo'
  },
  {
    id: 'web-app-platform',
    title: 'Modern Web Application Platform',
    description: 'Full-stack web application with microservices architecture and cloud-native deployment.',
    image: modernWebProjectImage,
    bannerImage: modernWebProjectImage,
    category: 'Web',
    tags: ['React', 'GraphQL', 'PostgreSQL', 'AWS'],
    problem: 'Legacy monolithic applications struggle to scale during peak traffic periods, resulting in slow response times and poor user experience. Deployment cycles are long and risky, with any update requiring a full system restart that causes downtime.',
    solution: 'Architected a microservices-based platform using containerization and orchestration. Each service handles a specific business capability and can be scaled independently. Implemented GraphQL for efficient data fetching, reducing API calls by 60%. CI/CD pipelines enable zero-downtime deployments with automatic rollback capabilities.',
    techStack: ['React', 'GraphQL', 'Apollo', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS EKS'],
    demoUrl: 'https://example.com/demo'
  },
  {
    id: 'mobile-ml-app',
    title: 'Mobile ML Application',
    description: 'Cross-platform mobile app leveraging on-device machine learning for enhanced privacy and performance.',
    image: mobileMlProjectImage,
    bannerImage: mobileMlProjectImage,
    category: 'Mobile',
    tags: ['React Native', 'TensorFlow Lite', 'Firebase', 'ML'],
    problem: 'Cloud-based ML inference introduces latency and requires constant internet connectivity, limiting functionality in offline scenarios. Privacy concerns arise when sensitive user data must be transmitted to remote servers for processing.',
    solution: 'Built a React Native application with TensorFlow Lite integration for on-device inference. Optimized ML models to run efficiently on mobile hardware without sacrificing accuracy. Implemented intelligent caching and background sync to ensure seamless offline functionality, with automatic cloud synchronization when connectivity is restored.',
    techStack: ['React Native', 'TensorFlow Lite', 'Firebase', 'Redux', 'TypeScript', 'Core ML', 'Python'],
    demoUrl: 'https://example.com/demo'
  },
  {
    id: 'data-viz-platform',
    title: 'Data Visualization Platform',
    description: 'Interactive analytics platform with real-time data processing and custom visualization components.',
    image: dataVisualizationProjectImage,
    bannerImage: dataVisualizationProjectImage,
    category: 'Data',
    tags: ['D3.js', 'Python', 'Apache Kafka', 'React'],
    problem: 'Business intelligence tools often struggle with large datasets, providing delayed insights that limit real-time decision making. Complex data relationships are difficult to visualize, making it hard for stakeholders to understand patterns and trends.',
    solution: 'Created a high-performance visualization platform using D3.js and WebGL for rendering millions of data points smoothly. Implemented Apache Kafka for real-time data streaming and processing. Custom visualization components allow users to create interactive dashboards tailored to their specific needs, with drill-down capabilities for detailed analysis.',
    techStack: ['React', 'D3.js', 'Python', 'Apache Kafka', 'WebGL', 'Redis', 'PostgreSQL', 'Elasticsearch'],
    demoUrl: 'https://example.com/demo'
  },
  {
    id: 'ai-chatbot-engine',
    title: 'AI-Powered Chatbot Engine',
    description: 'Natural language processing chatbot with context awareness and multi-language support.',
    image: aiAgentProjectImage,
    bannerImage: aiAgentProjectImage,
    category: 'AI',
    tags: ['NLP', 'Python', 'Transformers', 'FastAPI'],
    problem: 'Customer support teams are overwhelmed with repetitive queries, leading to long wait times and decreased customer satisfaction. Traditional chatbots provide robotic responses without understanding context or nuance.',
    solution: 'Developed an AI chatbot using transformer-based NLP models that understand context across conversation history. Implemented intent recognition, entity extraction, and sentiment analysis. The system seamlessly escalates complex queries to human agents with full conversation context, reducing resolution time by 40%.',
    techStack: ['Python', 'Transformers', 'BERT', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'spaCy'],
    demoUrl: 'https://example.com/demo'
  }
];

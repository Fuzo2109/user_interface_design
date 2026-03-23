import { useNavigate } from 'react-router';
import { TopNav } from '../components/TopNav';
import { ProjectCard } from '../components/ProjectCard';
import { PortfolioButton } from '../components/PortfolioButton';
import { projects } from '../data/projects';
import avatarImage from '../../assets/images/avatar.jpg';

export function Home() {
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-12 py-24">
        <div className="flex items-center justify-between gap-16">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-[#37474F] mb-6 leading-tight">
              Creative AI Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Building intelligent systems that combine cutting-edge AI with elegant engineering.
              Specializing in machine learning, IoT integration, and scalable cloud solutions.
            </p>
            <PortfolioButton 
              variant="primary"
              onClick={() => navigate('/projects')}
            >
              View My Work
            </PortfolioButton>
          </div>
          <div className="flex-shrink-0">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#00BCD4] shadow-xl">
              <img
                src={avatarImage}
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-[1440px] mx-auto px-12 py-24 bg-[#f5f5f5]">
        <h2 className="text-4xl font-bold text-[#37474F] mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <PortfolioButton 
            variant="secondary"
            onClick={() => navigate('/projects')}
          >
            View All Projects
          </PortfolioButton>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-[1440px] mx-auto px-12 py-24">
        <h2 className="text-4xl font-bold text-[#37474F] mb-12">Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#e0f7fa] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#00BCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#37474F] mb-3">Artificial Intelligence</h3>
            <p className="text-gray-600">
              Deep learning, computer vision, NLP, and ML model deployment for production systems.
            </p>
          </div>
          
          <div className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#e0f7fa] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#00BCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#37474F] mb-3">Full-Stack Development</h3>
            <p className="text-gray-600">
              Modern web and mobile applications with React, Node.js, and cloud-native architectures.
            </p>
          </div>
          
          <div className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#e0f7fa] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#00BCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#37474F] mb-3">IoT & Edge Computing</h3>
            <p className="text-gray-600">
              Connected device ecosystems, real-time data processing, and embedded system integration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

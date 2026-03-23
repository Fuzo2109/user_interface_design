import { useParams, useNavigate } from 'react-router';
import { TopNav } from '../components/TopNav';
import { PortfolioButton } from '../components/PortfolioButton';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <TopNav />
        <div className="max-w-[1440px] mx-auto px-12 py-16 text-center">
          <h1 className="text-3xl font-bold text-[#37474F] mb-4">Project Not Found</h1>
          <PortfolioButton onClick={() => navigate('/projects')}>
            Back to Projects
          </PortfolioButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      
      {/* Banner Image */}
      <div className="w-full h-[500px] bg-gray-100 overflow-hidden">
        <img
          src={project.bannerImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <section className="max-w-[1440px] mx-auto px-12 py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-[#00BCD4] hover:text-[#00ACC1] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </button>

        {/* Project Title */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-[#37474F] mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.description}</p>
        </div>

        {/* The Problem Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#37474F] mb-6">The Problem</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* The Technical Solution Section */}
        <div className="mb-16 bg-[#f5f5f5] p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-[#37474F] mb-6">
            The Technical Solution (using AI/IoT)
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Tools & Tech Stack Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#37474F] mb-6">Tools & Tech Stack Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white border-2 border-[#00BCD4] text-[#37474F] rounded-lg font-medium hover:bg-[#00BCD4] hover:text-white transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#37474F] mb-2">See it in action</h3>
              <p className="text-gray-600">Check out the live demo of this project</p>
            </div>
            <PortfolioButton 
              variant="secondary"
              onClick={() => window.open(project.demoUrl, '_blank')}
            >
              View Live Demo
            </PortfolioButton>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { TopNav } from '../components/TopNav';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export function ProjectList() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  
  const categories = ['All', 'AI', 'IoT', 'Web', 'Mobile', 'Data'];
  
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      
      <section className="max-w-[1440px] mx-auto px-12 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-[#37474F] mb-6">All Projects</h1>
          <p className="text-xl text-gray-600">
            Explore my portfolio of AI-driven solutions, IoT integrations, and modern web applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedFilter === category
                  ? 'bg-[#00BCD4] text-white shadow-lg'
                  : 'bg-white border-2 border-gray-200 text-[#37474F] hover:border-[#00BCD4]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}

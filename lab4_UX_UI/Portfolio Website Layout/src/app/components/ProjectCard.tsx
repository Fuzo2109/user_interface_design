import { Link } from 'react-router';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export function ProjectCard({ id, title, description, image, tags }: ProjectCardProps) {
  return (
    <Link to={`/project/${id}`} className="group block h-full">
      <div className="h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-[#37474F] mb-2 line-clamp-2 min-h-[3.5rem]">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2 min-h-[3rem]">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#e0f7fa] text-[#00BCD4] rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

import { useState } from "react";
import { Project } from "../../types/resume.ts";

interface ProjectsProps {
  data: Project[];
  updateData: (value: Project[]) => void;
}

export default function Projects({ data, updateData }: ProjectsProps) {
  const [project, setProject] = useState<Project>({
    title: "",
    description: "",
    link: "",
  });

  const handleAdd = () => {
    updateData([...data, project]);
    setProject({
      title: "",
      description: "",
      link: "",
    });
  };

  const handleInputChange = (field: keyof Project, value: string) => {
    setProject((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      {data.map((proj, index) => (
        <div key={index} className="p-4 border rounded">
          <h3 className="font-semibold">{proj.title}</h3>
          <p>{proj.description}</p>
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Project Link
          </a>
        </div>
      ))}
      <div className="space-y-2">
        <input
          placeholder="Project Title"
          value={project.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={project.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
        <input
          placeholder="Project Link"
          value={project.link}
          onChange={(e) => handleInputChange("link", e.target.value)}
        />
        <button onClick={handleAdd}>Add Project</button>
      </div>
    </div>
  );
}

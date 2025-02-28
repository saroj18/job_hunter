
import { useState } from "react";
import { Education } from "../../types/resume.ts";

interface EducationProps {
  data: Education[];
  updateData: (value: Education[]) => void;
}

export default function EducationForm({ data, updateData }: EducationProps) {
  const [education, setEducation] = useState<Education>({
    degree: "",
    institution: "",
    location: "",
    graduationDate: undefined,
  });

  const handleAdd = () => {
    updateData([...data, education]);
    setEducation({
      degree: "",
      institution: "",
      location: "",
      graduationDate: undefined,
    });
  };

  const handleInputChange = (field: keyof Education, value: string) => {
    setEducation((prev) => ({
      ...prev,
      [field]: field === "graduationDate" ? new Date(value) : value,
    }));
  };

  return (
    <div className="space-y-4">
      {data.map((edu, index) => (
        <div key={index} className="p-4 border rounded">
          <h3 className="font-semibold">{edu.degree}</h3>
          <p>
            {edu.institution}, {edu.location}
          </p>
          <p>Graduated: {edu.graduationDate ? new Date(edu.graduationDate).toDateString() : ""}</p>
        </div>
      ))}
      <div className="space-y-2">
        <input
          placeholder="Degree"
          value={education.degree}
          onChange={(e) => handleInputChange("degree", e.target.value)}
        />
        <input
          placeholder="Institution"
          value={education.institution}
          onChange={(e) => handleInputChange("institution", e.target.value)}
        />
        <input
          placeholder="Location"
          value={education.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
        />
        <input
          type="date"
          placeholder="Graduation Date"
          value={
            education.graduationDate
              ? (education.graduationDate instanceof Date ? education.graduationDate.toISOString().split("T")[0] : "")
              : ""
          }
          onChange={(e) => handleInputChange("graduationDate", e.target.value)}
        />
        <button onClick={handleAdd}>Add Education</button>
      </div>
    </div>
  );
}

import { useState } from "react";
import type { ResumeData, Education } from "../../types/resume";

interface EducationStepProps {
  data: ResumeData;
  updateData: (data: Partial<ResumeData>) => void;
}

const EducationStep = ({ data, updateData }: EducationStepProps) => {
  const [educations, setEducations] = useState<Education[]>(
    data.education.length
      ? data.education
      : [
          {
            degree: "",
            institution: "",
            location: "",
            graduationDate: "",
          },
        ]
  );

  const handleEducationChange = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    const updatedEducations = [...educations];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [field]: value,
    };

    setEducations(updatedEducations);
    updateData({ education: updatedEducations });
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        degree: "",
        institution: "",
        location: "",
        graduationDate: "",
      },
    ]);
  };

  const removeEducation = (index: number) => {
    if (educations.length > 1) {
      const updatedEducations = educations.filter((_, i) => i !== index);
      setEducations(updatedEducations);
      updateData({ education: updatedEducations });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Education</h2>

      {educations.map((education, index) => (
        <div
          key={index}
          className="p-4 border border-gray-200 rounded-md bg-gray-50"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Education {index + 1}</h3>
            {educations.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree *
              </label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) =>
                  handleEducationChange(index, "degree", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution *
              </label>
              <input
                type="text"
                value={education.institution}
                onChange={(e) =>
                  handleEducationChange(index, "institution", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={education.location}
                onChange={(e) =>
                  handleEducationChange(index, "location", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Graduation Date
              </label>
              <input
                type="date"
                value={
                  typeof education.graduationDate === "string"
                    ? education.graduationDate
                    : ""
                }
                onChange={(e) =>
                  handleEducationChange(index, "graduationDate", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addEducation}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Another Education
      </button>
    </div>
  );
};

export default EducationStep;

import { useState } from "react";
import { WorkExperience } from "../../types/resume.ts";

interface WorkExperienceProps {
  data: WorkExperience[];
  updateData: (value: WorkExperience[]) => void;
}

export default function WorkExperienceForm({
  data,
  updateData,
}: WorkExperienceProps) {
  const [experience, setExperience] = useState<WorkExperience>({
    jobTitle: "",
    company: "",
    location: "",
    startDate: new Date(),
    endDate: new Date(),
    responsibilities: "",
  });

  // Helper function to safely format dates
  const formatDate = (date: string | Date | undefined | null): string => {
    if (!date) return "Present";

    // If it's already a string, return it
    if (typeof date === "string") return date;

    // If it's a Date object, convert to string
    if (date instanceof Date) {
      // Check if it's a valid date
      return isNaN(date.getTime()) ? "" : date.toDateString();
    }

    // For any other case, convert to string
    return String(date);
  };

  const handleAdd = () => {
    // Create a new object with string dates to avoid rendering Date objects directly
    const newExperience = {
      ...experience,
      // Store dates as strings in the data array to avoid rendering issues
      startDate: formatDate(experience.startDate),
      endDate: formatDate(experience.endDate),
    };

    updateData([...data, newExperience]);

    // Reset form
    setExperience({
      jobTitle: "",
      company: "",
      location: "",
      startDate: new Date(),
      endDate: new Date(),
      responsibilities: "",
    });
  };

  const handleInputChange = (field: keyof WorkExperience, value: string) => {
    setExperience((prev) => ({
      ...prev,
      [field]:
        field === "startDate" || field === "endDate" ? new Date(value) : value,
    }));
  };

  // Helper to safely get ISO string for date inputs
  const getDateInputValue = (
    date: string | Date | undefined | null
  ): string => {
    if (!date) return "";

    try {
      if (typeof date === "string") {
        // If it's already a properly formatted date string, use it
        if (date.match(/^\d{4}-\d{2}-\d{2}$/)) return date;

        // Otherwise, try to convert it to a Date and then format
        const dateObj = new Date(date);
        return isNaN(dateObj.getTime())
          ? ""
          : dateObj.toISOString().split("T")[0];
      }

      if (date instanceof Date) {
        return isNaN(date.getTime()) ? "" : date.toISOString().split("T")[0];
      }

      return "";
    } catch {
      return "";
    }
  };

  return (
    <div className="space-y-4">
      {data.map((exp, index) => (
        <div key={index} className="p-4 border rounded">
          <h3 className="font-semibold">
            {exp.jobTitle} at {exp.company}
          </h3>
          <p>
            {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
          </p>
        </div>
      ))}
      <div className="space-y-2">
        <input
          placeholder="Job Title"
          value={experience.jobTitle}
          onChange={(e) => handleInputChange("jobTitle", e.target.value)}
        />
        <input
          placeholder="Company"
          value={experience.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
        />
        <input
          placeholder="Location"
          value={experience.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={getDateInputValue(experience.startDate)}
          onChange={(e) => handleInputChange("startDate", e.target.value)}
        />
        <input
          type="date"
          placeholder="End Date"
          value={getDateInputValue(experience.endDate)}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
        />
        <input
          placeholder="Responsibilities"
          value={experience.responsibilities}
          onChange={(e) =>
            handleInputChange("responsibilities", e.target.value)
          }
        />
        <button onClick={handleAdd}>Add Experience</button>
      </div>
    </div>
  );
}

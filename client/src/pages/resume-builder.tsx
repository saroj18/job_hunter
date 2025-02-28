import { useState } from "react";

import TemplateSelection from "./template-selection.tsx";
import ResumePreview from "./resume-preview.tsx";
import type {
  ResumeData as Resume,
  WorkExperience as WorkExperienceType,
  Education as EducationType,
  Certification,
  Project,
} from "../types/resume.ts";
import WorkExperienceForm from "../components/multi-step-form/WorkExperience.tsx";
import PersonalInfo from "../components/multi-step-form/PersonalInfo.tsx";

import Skills from "../components/multi-step-form/Skills.tsx";
import Certifications from "../components/multi-step-form/Certifications.tsx";
import Projects from "../components/multi-step-form/Projects.tsx";
import Languages from "../components/multi-step-form/Languages.tsx";
import EducationForm from "../components/multi-step-form/Education.tsx";

const steps = [
  "Personal Info",
  "Work Experience",
  "Education",
  "Skills",
  "Certifications",
  "Projects",
  "Languages",
  "Template Selection",
] as const;

export default function ResumeBuilder() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [resumeData, setResumeData] = useState<Resume>({
    title: "",
    summary: "",
    workExperience: [],
    education: [],
    skills: [],
    certifications: [],
    projects: [],
    languages: [],
  });
  const [selectedTemplate, setSelectedTemplate] = useState<string>("template1");
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const updateResumeData = <K extends keyof Resume>(
    field: K,
    value: Resume[K]
  ) => {
    setResumeData((prev) => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    switch (steps[currentStep]) {
      case "Personal Info":
        return <PersonalInfo data={resumeData} updateData={updateResumeData} />;
      case "Work Experience":
        return (
          <WorkExperienceForm
            data={resumeData.workExperience}
            updateData={(value: WorkExperienceType[]) =>
              updateResumeData("workExperience", value)
            }
          />
        );
      case "Education":
        return (
          <EducationForm
            data={resumeData.education}
            updateData={(value: EducationType[]) =>
              updateResumeData("education", value)
            }
          />
        );
      case "Skills":
        return (
          <Skills
            data={resumeData.skills}
            updateData={(value: string[]) => updateResumeData("skills", value)}
          />
        );
      case "Certifications":
        return (
          <Certifications
            data={resumeData.certifications}
            updateData={(value: Certification[]) =>
              updateResumeData("certifications", value)
            }
          />
        );
      case "Projects":
        return (
          <Projects
            data={resumeData.projects}
            updateData={(value: Project[]) =>
              updateResumeData("projects", value)
            }
          />
        );
      case "Languages":
        return (
          <Languages
            data={resumeData.languages}
            updateData={(value: string[]) =>
              updateResumeData("languages", value)
            }
          />
        );
      case "Template Selection":
        return (
          <TemplateSelection
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="p-6 flex-1">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{steps[currentStep]}</h2>
          <button
            className="bg-green-200 px-3 py-4 rounded-xl"
            onClick={() => setShowPreview(!showPreview)}
          >
            Show Preview
          </button>
        </div>
        {renderStep()}
        <div className="flex justify-between mt-6">
          <button onClick={handlePrev} disabled={currentStep === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
          >
            {currentStep === steps.length - 2 ? "Finish" : "Next"}
          </button>
        </div>
      </div>

      {showPreview && (
        <div className="p-6 flex-1">
          <h2 className="text-2xl font-semibold mb-4">Preview</h2>

          <ResumePreview data={resumeData} template={selectedTemplate} />
        </div>
      )}
    </div>
  );
}

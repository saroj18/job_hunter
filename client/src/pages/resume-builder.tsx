import { useState } from "react";
import InfoStep from "../components/multi-step-form/info-step";
import type { ResumeData } from "../types/resume";
import CertificationsStep from "../components/multi-step-form/certification";

const initialFormData: ResumeData = {
  title: "",
  summary: "",
  workExperience: [
    {
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    },
  ],
  education: [
    {
      degree: "",
      institution: "",
      location: "",
      graduationDate: "",
    },
  ],
  skills: [""],
  certifications: [
    {
      name: "",
      issuingOrganization: "",
      dateObtained: "",
    },
  ],
  projects: [
    {
      title: "",
      description: "",
      link: "",
    },
  ],
  languages: [""],
};

function ResumeBuilder() {
  const [formData, setFormData] = useState<ResumeData>(initialFormData);

  const updateFormData = (stepData: Partial<ResumeData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  return (
    <div>
      ResumeBuilder
      <InfoStep data={formData} updateData={updateFormData} />
      <CertificationsStep data={formData} updateData={updateFormData} />
    </div>
  );
}

export default ResumeBuilder;

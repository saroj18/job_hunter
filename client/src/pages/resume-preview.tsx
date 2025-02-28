
import ClassicTemplate from "../components/resume-templates/ClassicTemplate.tsx";
import CreativeTemplate from "../components/resume-templates/CreativeTemplate.tsx";
import ModernTemplate from "../components/resume-templates/ModernTemplate.tsx";
import { ResumeData as Resume } from "../types/resume.ts";

type ResumePreviewProps = {
  data: Resume;
  template: string;
};
export default function ResumePreview({ data, template }: ResumePreviewProps) {
  const renderTemplate = () => {
    switch (template) {
      case "template1":
        return <ClassicTemplate data={data} />;
      case "template2":
        return <ModernTemplate data={data} />;
      case "template3":
        return <CreativeTemplate data={data} />;
      default:
        return <ClassicTemplate data={data} />;
    }
  };

  return (
    <div className="border rounded p-4 max-h-[600px] overflow-y-auto">
      {renderTemplate()}
    </div>
  );
}

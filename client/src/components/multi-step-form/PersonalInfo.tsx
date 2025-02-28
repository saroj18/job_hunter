import { ResumeData as Resume } from "../../types/resume.ts";

interface PersonalInfoProps {
  data: Pick<Resume, "title" | "summary">;
  updateData: <K extends keyof Pick<Resume, "title" | "summary">>(
    field: K,
    value: Resume[K]
  ) => void;
}

export default function PersonalInfo({ data, updateData }: PersonalInfoProps) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={data.title}
          onChange={(e) => updateData("title", e.target.value)}
          placeholder="e.g. Software Engineer"
        />
      </div>
      <div>
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          value={data.summary || ""}
          onChange={(e) => updateData("summary", e.target.value)}
          placeholder="Brief overview of your professional background"
        />
      </div>
    </div>
  );
}

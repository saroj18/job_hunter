import { useState } from "react";

interface SkillsProps {
  data: string[];
  updateData: (value: string[]) => void;
}

export default function Skills({ data, updateData }: SkillsProps) {
  const [skill, setSkill] = useState<string>("");

  const handleAdd = () => {
    if (skill.trim()) {
      updateData([...data, skill.trim()]);
      setSkill("");
    }
  };

  const handleRemove = (index: number) => {
    updateData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {data.map((skill, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleRemove(index)}
          >
            {skill} ×
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          placeholder="Add a skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

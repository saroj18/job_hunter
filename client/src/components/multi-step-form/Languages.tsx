
import { useState } from "react";

export default function Languages({
  data,
  updateData,
}: {
  data: string[];
  updateData: (value: string[]) => void;
}) {
  const [language, setLanguage] = useState("");

  const handleAdd = () => {
    if (language.trim()) {
      updateData([...data, language.trim()]);
      setLanguage("");
    }
  };

  const handleRemove = (index: number) => {
    updateData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {data.map((lang, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleRemove(index)}
          >
            {lang} ×
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          placeholder="Add a language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

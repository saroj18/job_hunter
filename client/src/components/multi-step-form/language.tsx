import { useState } from "react"
import type { ResumeData } from "../../types/resume"

interface LanguagesStepProps {
  data: ResumeData
  updateData: (data: Partial<ResumeData>) => void
}

const LanguagesStep = ({ data, updateData }: LanguagesStepProps) => {
  const [languages, setLanguages] = useState<string[]>(data.languages.length ? data.languages : [""])

  const handleLanguageChange = (index: number, value: string) => {
    const updatedLanguages = [...languages]
    updatedLanguages[index] = value

    setLanguages(updatedLanguages)
    updateData({ languages: updatedLanguages.filter((language) => language.trim() !== "") })
  }

  const addLanguage = () => {
    setLanguages([...languages, ""])
  }

  const removeLanguage = (index: number) => {
    if (languages.length > 1) {
      const updatedLanguages = languages.filter((_, i) => i !== index)
      setLanguages(updatedLanguages)
      updateData({ languages: updatedLanguages.filter((language) => language.trim() !== "") })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Languages</h2>
      <p className="text-sm text-gray-600 mb-4">Add languages you speak and your proficiency level.</p>

      {languages.map((language, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="text"
            value={language}
            onChange={(e) => handleLanguageChange(index, e.target.value)}
            placeholder="e.g., English (Native), Spanish (Intermediate)"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {languages.length > 1 && (
            <button type="button" onClick={() => removeLanguage(index)} className="text-red-600 hover:text-red-800">
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addLanguage}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Another Language
      </button>
    </div>
  )
}

export default LanguagesStep


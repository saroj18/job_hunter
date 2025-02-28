import type { ResumeData } from "../../types/resume"

interface InfoStepProps {
  data: ResumeData
  updateData: (data: Partial<ResumeData>) => void
}

const InfoStep = ({ data, updateData }: InfoStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Resume Title *
        </label>
        <input
          type="text"
          id="title"
          value={data.title}
          onChange={(e) => updateData({ title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
          Professional Summary
        </label>
        <textarea
          id="summary"
          value={data.summary}
          onChange={(e) => updateData({ summary: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="mt-1 text-sm text-gray-500">
          Write a brief summary highlighting your professional background and key strengths.
        </p>
      </div>
    </div>
  )
}

export default InfoStep


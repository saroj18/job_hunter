import { useState } from "react"
import type { ResumeData, Certification } from "../../types/resume"

interface CertificationsStepProps {
  data: ResumeData
  updateData: (data: Partial<ResumeData>) => void
}

const CertificationsStep = ({ data, updateData }: CertificationsStepProps) => {
  const [certifications, setCertifications] = useState<Certification[]>(
    data.certifications.length
      ? data.certifications
      : [
          {
            name: "",
            issuingOrganization: "",
            dateObtained: "",
          },
        ],
  )

  const handleCertificationChange = (index: number, field: keyof Certification, value: string) => {
    const updatedCertifications = [...certifications]
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [field]: value,
    }

    setCertifications(updatedCertifications)
    updateData({ certifications: updatedCertifications })
  }

  const addCertification = () => {
    setCertifications([
      ...certifications,
      {
        name: "",
        issuingOrganization: "",
        dateObtained: "",
      },
    ])
  }

  const removeCertification = (index: number) => {
    if (certifications.length > 1) {
      const updatedCertifications = certifications.filter((_, i) => i !== index)
      setCertifications(updatedCertifications)
      updateData({ certifications: updatedCertifications })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Certifications</h2>

      {certifications.map((certification, index) => (
        <div key={index} className="p-4 border border-gray-200 rounded-md bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Certification {index + 1}</h3>
            {certifications.length > 1 && (
              <button
                type="button"
                onClick={() => removeCertification(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Certification Name *</label>
              <input
                type="text"
                value={certification.name}
                onChange={(e) => handleCertificationChange(index, "name", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Organization *</label>
              <input
                type="text"
                value={certification.issuingOrganization}
                onChange={(e) => handleCertificationChange(index, "issuingOrganization", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Obtained</label>
            <input
              type="date"
              value={typeof certification.dateObtained === "string" ? certification.dateObtained : ""}
              onChange={(e) => handleCertificationChange(index, "dateObtained", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addCertification}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Another Certification
      </button>
    </div>
  )
}

export default CertificationsStep


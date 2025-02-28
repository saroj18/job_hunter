
import { useState } from "react"
import { Certification } from "../../types/resume.ts"


interface CertificationsProps {
  data: Certification[]
  updateData: (value: Certification[]) => void
}

export default function Certifications({ data, updateData }: CertificationsProps) {
  const [certification, setCertification] = useState<Certification>({
    name: "",
    issuingOrganization: "",
    dateObtained: undefined,
  })

  const handleAdd = () => {
    updateData([...data, certification])
    setCertification({
      name: "",
      issuingOrganization: "",
      dateObtained: undefined,
    })
  }

  const handleInputChange = (field: keyof Certification, value: string) => {
    setCertification((prev) => ({ ...prev, [field]: field === "dateObtained" ? new Date(value) : value }))
  }

  return (
    <div className="space-y-4">
      {data.map((cert, index) => (
        <div key={index} className="p-4 border rounded">
          <h3 className="font-semibold">{cert.name}</h3>
          <p>{cert.issuingOrganization}</p>
          <p>Obtained: {cert.dateObtained ? new Date(cert.dateObtained).toDateString() : ""}</p>
        </div>
      ))}
      <div className="space-y-2">
        <input
          placeholder="Certification Name"
          value={certification.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <input
          placeholder="Issuing Organization"
          value={certification.issuingOrganization}
          onChange={(e) => handleInputChange("issuingOrganization", e.target.value)}
        />
        <input
          type="date"
          placeholder="Date Obtained"
          value={certification.dateObtained instanceof Date ? certification.dateObtained.toISOString().split("T")[0] : ""}
          onChange={(e) => handleInputChange("dateObtained", e.target.value)}
        />
        <button onClick={handleAdd}>Add Certification</button>
      </div>
    </div>
  )
}


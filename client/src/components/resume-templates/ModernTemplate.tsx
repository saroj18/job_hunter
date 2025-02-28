import { ResumeData as Resume } from "../../types/resume.ts";

export default function ModernTemplate({ data }: { data: Resume }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <p className="text-lg">{data.summary}</p>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">
            Work Experience
          </h2>
          {data.workExperience.map((exp, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold">{exp.jobTitle}</h3>
              <p className="text-gray-600">
                {exp.company} | {exp.startDate.toString()} -{" "}
                {exp.endDate?.toString()}
              </p>
              <p className="mt-2">{exp.responsibilities}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Project Link
              </a>
            </div>
          ))}
        </section>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">Skills</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p>
                {edu.institution}, {edu.location}
              </p>
              <p>Graduated: {edu.graduationDate instanceof Date ? edu.graduationDate.toDateString() : edu.graduationDate}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">
            Certifications
          </h2>
          {data.certifications.map((cert, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold">{cert.name}</h3>
              <p>{cert.issuingOrganization}</p>
              <p>Obtained: {cert.dateObtained instanceof Date ? cert.dateObtained.toDateString() : cert.dateObtained}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">Languages</h2>
          <ul className="list-disc list-inside mt-2">
            {data.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

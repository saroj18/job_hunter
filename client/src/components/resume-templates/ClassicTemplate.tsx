import { ResumeData as Resume } from "../../types/resume.ts";

export default function ClassicTemplate({ data }: { data: Resume }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p>{data.summary}</p>

      <section>
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        {data.workExperience.map((exp, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-xl font-semibold">
              {exp.jobTitle} at {exp.company}
            </h3>
            <p>
              {exp.startDate.toString()} - {exp.endDate?.toString()}
            </p>
            <p>{exp.responsibilities}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Education</h2>
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
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Certifications</h2>
        {data.certifications.map((cert, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-xl font-semibold">{cert.name}</h3>
            <p>{cert.issuingOrganization}</p>
            <p>Obtained: {cert.dateObtained?.toString()}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Projects</h2>
        {data.projects.map((project, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
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

      <section>
        <h2 className="text-2xl font-semibold">Languages</h2>
        <ul className="list-disc list-inside">
          {data.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

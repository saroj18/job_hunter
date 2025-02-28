import { ResumeData as Resume } from "../../types/resume.ts";

export default function CreativeTemplate({ data }: { data: Resume }) {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-lg shadow-lg">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800">{data.title}</h1>
        <p className="text-xl text-gray-600 mt-2">{data.summary}</p>
      </header>

      <div className="grid grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Experience
          </h2>
          {data.workExperience.map((exp, index) => (
            <div key={index} className="mb-4 bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold text-purple-600">
                {exp.jobTitle}
              </h3>
              <p className="text-gray-600">
                {exp.company} | {exp.startDate.toString()} -{" "}
                {exp.endDate?.toString()}
              </p>
              <p className="mt-2">{exp.responsibilities}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4 bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold text-purple-600">
                {edu.degree}
              </h3>
              <p>
                {edu.institution}, {edu.location}
              </p>
              <p>Graduated: {edu.graduationDate instanceof Date ? edu.graduationDate.toDateString() : edu.graduationDate}</p>
            </div>
          ))}
        </section>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">
          Projects
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {data.projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold text-purple-600">
                {project.title}
              </h3>
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
        </div>
      </section>

      <div className="grid grid-cols-2 gap-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Certifications
          </h2>
          {data.certifications.map((cert, index) => (
            <div key={index} className="mb-4 bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold text-purple-600">
                {cert.name}
              </h3>
              <p>{cert.issuingOrganization}</p>
              <p>Obtained: {cert.dateObtained instanceof Date ? cert.dateObtained.toDateString() : cert.dateObtained}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Languages
          </h2>
          <div className="bg-white p-4 rounded shadow">
            <ul className="list-disc list-inside">
              {data.languages.map((language, index) => (
                <li key={index} className="text-purple-600">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

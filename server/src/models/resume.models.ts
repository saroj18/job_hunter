import mongoose, { Schema, Document, Model } from "mongoose";
interface IResume extends Document{
    user:mongoose.Schema.Types.ObjectId;
    title:string;
    summary:string;
    workExperience:[{
        jobTitle:string,
        company:string,
        location:string,
        startDate:string,
        endDate:string,
        responsibilities:string,
    }];
    education: [
        {
          degree: string,
          institution: string,
          location: string,
          graduationDate: Date,
        },
      ];
      skills: [{ type: string }];
      certifications: [
        {
          name: string,
          issuingOrganization: string,
          dateObtained: string,
        },
      ];
      projects: [
        {
          title: string,
          description: string,
          link: string,
        },
      ];
      languages: [{ type: string }];
      analysisId:mongoose.Schema.Types.ObjectId;
}
const ResumeSchema=new mongoose.Schema<IResume>
({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    summary: { type: String },
    workExperience: [
      {
        jobTitle: { type: String, required: true },
        company: { type: String, required: true },
        location: { type: String },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        responsibilities: { type: String },
      },
    ],
    education: [
      {
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        location: { type: String },
        graduationDate: { type: Date },
      },
    ],
    skills: [{ type: String }],
    certifications: [
      {
        name: { type: String, required: true },
        issuingOrganization: { type: String, required: true },
        dateObtained: { type: Date },
      },
    ],
    projects: [
      {
        title: { type: String, required: true },
        description: { type: String },
        link: { type: String },
      },
    ],
    languages: [{ type: String }],
    analysisId: { type: mongoose.Schema.Types.ObjectId, ref: "Analysis" }, // Reference to separate analysis
  },
  { timestamps: true }
);

export const Resume:Model<IResume> = mongoose.model<IResume>("Resume", ResumeSchema);
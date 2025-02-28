import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/AsyncHandler";
import { Resume } from "../models/resume.models";

const createResume = asyncHandler(async (req, res) => {
  const {
    title,
    summary,
    workExperience = [],
    education = [],
    skills = [],
    certifications = [],
    projects = [],
    languages = [],
  } = req.body;

  // Validate work experience
  if (
    !Array.isArray(workExperience) ||
    !workExperience.every((exp) => typeof exp === "object")
  ) {
    throw new ApiError(400, "Work experience must be an array of objects.");
  }

  // Validate education
  if (
    !Array.isArray(education) ||
    !education.every((edu) => typeof edu === "object")
  ) {
    throw new ApiError(400, "Education must be an array of objects.");
  }

  // Validate certifications
  if (
    !Array.isArray(certifications) ||
    !certifications.every((cert) => typeof cert === "object")
  ) {
    throw new ApiError(400, "Certifications must be an array of objects.");
  }

  // Validate projects
  if (
    !Array.isArray(projects) ||
    !projects.every((proj) => typeof proj === "object")
  ) {
    throw new ApiError(400, "Projects must be an array of objects.");
  }

  // Create a new resume
  const resume = await Resume.create({
    user: req.user._id,
    title,
    summary,
    workExperience,
    education,
    skills,
    certifications,
    projects,
    languages,
  });

  res.status(201).json(new ApiResponse(201,"Resume created", resume));
});

const getResumes = asyncHandler(async (req, res) => {
  const resumes = await Resume.find({ user: req.user._id });

  res.status(200).json(new ApiResponse(200,"Resume found successfully", resumes));
});

const getResumeById = asyncHandler(async (req, res) => {
  const { resumeId } = req.params;
  const resume = await Resume.findById(resumeId);

  if (!resume) {
    throw new ApiError(404, "Resume not found");
  }

  res.status(200).json(new ApiResponse(200,"", resume));
});

const updateResume = asyncHandler(async (req, res) => {
  const { resumeId } = req.params;
  const {
    title,
    summary,
    workExperience = [],
    education = [],
    skills = [],
    certifications = [],
    projects = [],
    languages = [],
  } = req.body;

  // Validate work experience
  if (
    !Array.isArray(workExperience) ||
    !workExperience.every((exp) => typeof exp === "object")
  ) {
    throw new ApiError(400, "Work experience must be an array of objects.");
  }

  // Validate education
  if (
    !Array.isArray(education) ||
    !education.every((edu) => typeof edu === "object")
  ) {
    throw new ApiError(400, "Education must be an array of objects.");
  }

  // Validate certifications
  if (
    !Array.isArray(certifications) ||
    !certifications.every((cert) => typeof cert === "object")
  ) {
    throw new ApiError(400, "Certifications must be an array of objects.");
  }

  // Validate projects
  if (
    !Array.isArray(projects) ||
    !projects.every((proj) => typeof proj === "object")
  ) {
    throw new ApiError(400, "Projects must be an array of objects.");
  }

  const existingResume = await Resume.findById(resumeId);

  if (!existingResume) {
    throw new ApiError(404, "Resume not found");
  }

  const resume = await Resume.findByIdAndUpdate(
    resumeId,
    {
      $set: {
        title,
        summary,
        workExperience,
        education,
        skills,
        certifications,
        projects,
        languages,
      },
    },
    { new: true }
  );

  res.status(200).json(new ApiResponse(200, "Resume updated", resume));
});

const deleteResume = asyncHandler(async (req, res) => {
  const { resumeId } = req.params;

  const resume = await Resume.findById(resumeId);

  if (!resume) {
    throw new ApiError(404, "Resume not found");
  }

  await Resume.deleteOne({_id:resume._id})

  res.status(200).json(new ApiResponse(200,"Resume deleted", {} ));
});

export { createResume, getResumes, getResumeById, updateResume, deleteResume };


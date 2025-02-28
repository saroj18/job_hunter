import mongoose,{Schema,Document,Model} from "mongoose";

interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  employmentType:string;
  salary: {
    min:number;
    max:number;
    currency: string;
  };
  description: string;
  responsibilities: [{
    type:string;
  }];
  requirements: [
    {
      type: string,
    },
  ];
  skills: [
    {
      type: string,
    },
  ];
  experienceLevel: {
    type: string,
  },
  postedBy: mongoose.Schema.Types.ObjectId;
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ];

  expiresAt: {
    type: Date,
  };
  isActive: {
    type: Boolean,
    default: true,
  };
}
const JobSchema = new Schema<IJob>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type:String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    enum: ["Full-time", "Part-time", "Contract", "Internship", "Freelance"],
    required: true,
  },
  salary: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
    },
    currency: {
      type: String,
      default: "USD",
    },
  },
  description: {
    type: String,
    required: true,
  },
  responsibilities: [
    {
      type: String,
    },
  ],
  requirements: [
    {
      type: String,
    },
  ],
  skills: [
    {
      type: String,
    },
  ],
  experienceLevel: {
    type: String,
    enum: ["Entry", "Mid", "Senior"],
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  expiresAt: {
    type: Date,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
},{
  timestamps:true
});

export const Job:Model<IJob> = mongoose.model<IJob>("Job", JobSchema);


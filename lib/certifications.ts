import { Certification } from "./types";
import { examVersions as gcpExams } from "./exams";
import { awsExamVersions as awsExams } from "./aws-exams";

export const certifications: Certification[] = [
  {
    id: "gcp-ace",
    provider: "gcp",
    name: "Associate Cloud Engineer",
    code: "ACE",
    color: "#1a73e8",
    bgColor: "#e8f0fe",
    borderColor: "#1a73e8",
    lightBg: "#f0f7ff",
    exams: gcpExams,
    domains: [
      { name: "Setting up a cloud solution environment", weight: "~17%" },
      { name: "Planning and configuring a cloud solution", weight: "~17.5%" },
      { name: "Deploying and implementing a cloud solution", weight: "~25%" },
      { name: "Ensuring successful operation", weight: "~20%" },
      { name: "Configuring access and security", weight: "~20%" },
    ],
    totalQuestions: 50,
    duration: "2 hours",
    passingScore: "70%",
  },
  {
    id: "aws-clp",
    provider: "aws",
    name: "Cloud Practitioner",
    code: "CLF-C02",
    color: "#ff9900",
    bgColor: "#fff3e0",
    borderColor: "#ff9900",
    lightBg: "#fffaf0",
    exams: awsExams,
    domains: [
      { name: "Cloud Concepts", weight: "~24%" },
      { name: "Security and Compliance", weight: "~30%" },
      { name: "Cloud Technology and Services", weight: "~34%" },
      { name: "Billing, Pricing, and Support", weight: "~12%" },
    ],
    totalQuestions: 65,
    duration: "1.5 hours",
    passingScore: "70%",
  },
];

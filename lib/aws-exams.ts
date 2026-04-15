import { ExamVersion } from "./types";
import { awsQuestionsV1 } from "./aws-questions-v1";
import { awsQuestionsV2 } from "./aws-questions-v2";
import { awsQuestionsV3 } from "./aws-questions-v3";

export const awsExamVersions: ExamVersion[] = [
  {
    id: "aws-v1",
    name: "Practice Exam A",
    description: "Foundational: EC2, S3, Lambda, IAM, VPC, billing models, support plans, and core security services.",
    questions: awsQuestionsV1,
  },
  {
    id: "aws-v2",
    name: "Practice Exam B",
    description: "Intermediate: CloudFormation, Athena, Glue, Savings Plans, Control Tower, Security Hub, and AI/ML services.",
    questions: awsQuestionsV2,
  },
  {
    id: "aws-v3",
    name: "Practice Exam C",
    description: "Advanced: Systems Manager, Snow Family, Kinesis, PrivateLink, Fargate, Graviton, and operations tooling.",
    questions: awsQuestionsV3,
  },
];

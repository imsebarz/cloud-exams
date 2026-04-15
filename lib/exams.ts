import { ExamVersion } from "./types";
import { questionsV1 } from "./questions-v1";
import { questionsV2 } from "./questions-v2";
import { questionsV3 } from "./questions-v3";

export const examVersions: ExamVersion[] = [
  {
    id: "v1",
    name: "Practice Exam A",
    description: "Core concepts: IAM, Compute Engine, GKE, Cloud Storage, networking fundamentals, and basic security.",
    questions: questionsV1,
  },
  {
    id: "v2",
    name: "Practice Exam B",
    description: "Intermediate topics: Shared VPC, Dataproc, Dataflow, Cloud Build CI/CD, Helm, NetworkPolicies, and service mesh.",
    questions: questionsV2,
  },
  {
    id: "v3",
    name: "Practice Exam C",
    description: "Advanced scenarios: multi-cloud with Anthos, Workload Identity, VPC Service Controls, disaster recovery, and Dataflow streaming.",
    questions: questionsV3,
  },
];

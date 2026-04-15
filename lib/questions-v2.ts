import { Question } from "./types";

export const questionsV2: Question[] = [
  {
    id: 101,
    text: "Your company is migrating to Google Cloud and needs to establish identity management. Employees already use Microsoft Active Directory on-premises. What is the recommended way to manage identities for Google Cloud?",
    options: [
      "Create new Google accounts for all employees manually",
      "Use Google Cloud Directory Sync (GCDS) to sync identities from Active Directory to Cloud Identity",
      "Give everyone access using a shared service account",
      "Use IAM groups without syncing from Active Directory"
    ],
    correctAnswers: [1],
    explanation: "Google Cloud Directory Sync (GCDS) synchronizes users and groups from an existing Active Directory to Cloud Identity or Google Workspace. This allows centralized identity management and single sign-on capabilities.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 102,
    text: "You need to create a project using gcloud and immediately set it as the active project in your configuration. Which commands should you run?",
    options: [
      "gcloud projects create my-project && gcloud config set project my-project",
      "gcloud projects new my-project && gcloud projects activate my-project",
      "gcloud init --project my-project",
      "gcloud projects create my-project --set-as-default"
    ],
    correctAnswers: [0],
    explanation: "'gcloud projects create' creates the project, and 'gcloud config set project' sets it as the active project in the current configuration. There is no --set-as-default flag on projects create.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 103,
    text: "Your organization has a Shared VPC setup. The host project is 'network-hub' and the service project is 'app-team-1'. A developer in app-team-1 needs to create a Compute Engine instance that uses a subnet from the host project. What IAM role must be granted?",
    options: [
      "roles/compute.networkAdmin on the host project",
      "roles/compute.networkUser on the host project or the specific subnet",
      "roles/owner on the host project",
      "roles/compute.admin on the service project only"
    ],
    correctAnswers: [1],
    explanation: "The roles/compute.networkUser role on the host project (or specific subnet) allows users in service projects to use shared subnets. This role doesn't grant admin access to the network.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 104,
    text: "You want to create a billing export to BigQuery for detailed cost analysis. Which steps are required? (Choose two)",
    options: [
      "Create a BigQuery dataset in the billing account's project",
      "Enable billing export in the Cloud Billing console and select the BigQuery dataset",
      "Create a Cloud Function to export billing data to BigQuery hourly",
      "Grant the billing service account the BigQuery Data Editor role on the dataset",
      "Enable the BigQuery Transfer Service API"
    ],
    correctAnswers: [0, 1],
    explanation: "You need to create a BigQuery dataset and then enable billing export in the Cloud Billing console, pointing it to that dataset. Google Cloud handles the rest automatically — no Cloud Functions or special IAM roles are needed.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 105,
    text: "A new team is starting a project and they need a VPC with subnets in us-central1 and asia-east1 with specific IP ranges. They also need Cloud NAT for outbound internet access. What VPC mode should they use?",
    options: [
      "Auto mode VPC — it automatically creates subnets in all regions",
      "Custom mode VPC — to control IP ranges precisely",
      "Default VPC — it comes with every new project",
      "Legacy network mode"
    ],
    correctAnswers: [1],
    explanation: "Custom mode VPC allows you to define subnets with specific IP ranges in specific regions. Auto mode creates subnets with predefined IP ranges in all regions, which doesn't provide the control needed here.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 106,
    text: "You need to deploy a web application that must handle thousands of concurrent WebSocket connections with persistent state. The application is containerized. Which compute option is most suitable?",
    options: [
      "Cloud Run",
      "Cloud Functions",
      "Google Kubernetes Engine (GKE)",
      "App Engine Standard"
    ],
    correctAnswers: [2],
    explanation: "GKE is best for long-lived WebSocket connections with persistent state. Cloud Run and Cloud Functions have request timeouts and are not optimal for persistent connections. App Engine Standard doesn't support WebSockets well.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 107,
    text: "Your data analytics team needs a managed service to run Apache Spark jobs for processing large datasets. They want to avoid managing cluster infrastructure but need the flexibility to customize Spark configurations. Which service should they use?",
    options: [
      "BigQuery",
      "Dataproc Serverless for Spark",
      "Dataflow",
      "Cloud Composer"
    ],
    correctAnswers: [1],
    explanation: "Dataproc Serverless for Spark runs Spark workloads without managing clusters while still allowing Spark configuration customization. BigQuery uses SQL, not Spark. Dataflow uses Apache Beam. Cloud Composer orchestrates pipelines.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 108,
    text: "You are designing a system that needs to process IoT sensor data in real-time and store the results. Millions of messages per second are expected. Which combination of services should you use for ingestion and processing?",
    options: [
      "Cloud Storage and Cloud Functions",
      "Pub/Sub for ingestion and Dataflow for stream processing",
      "Cloud SQL for ingestion and Cloud Run for processing",
      "Kafka on Compute Engine and Dataproc"
    ],
    correctAnswers: [1],
    explanation: "Pub/Sub is designed for high-throughput message ingestion (millions of messages per second), and Dataflow (Apache Beam) excels at real-time stream processing. This is the recommended serverless combination for IoT pipelines.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 109,
    text: "Your application requires a NoSQL database that supports single-digit millisecond latency at scale for time-series data. The dataset is over 10 TB and workloads include both reads and writes of sequential data. Which database should you choose?",
    options: [
      "Firestore",
      "Cloud SQL",
      "Cloud Bigtable",
      "Memorystore for Redis"
    ],
    correctAnswers: [2],
    explanation: "Cloud Bigtable is optimized for large-scale (>1 TB), low-latency workloads including time-series data. It provides consistent sub-10ms latency. Firestore is better for smaller datasets. Redis is an in-memory cache, not persistent storage for 10 TB.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 110,
    text: "You need to connect your on-premises network to Google Cloud with high bandwidth (10 Gbps) and low latency for a hybrid cloud setup. The connection must be private and not traverse the public internet. Which service should you use?",
    options: [
      "Cloud VPN",
      "Dedicated Interconnect",
      "Partner Interconnect",
      "Cloud CDN"
    ],
    correctAnswers: [1],
    explanation: "Dedicated Interconnect provides 10 Gbps or 100 Gbps private connections between on-premises and Google Cloud that don't traverse the public internet. It requires a colocation facility. Cloud VPN goes over the internet and has bandwidth limitations.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 111,
    text: "You are choosing between Standard and Flexible environments for App Engine. Your application needs to use a custom runtime with specific system libraries not available in the standard runtimes. Which should you choose?",
    options: [
      "App Engine Standard with custom buildpacks",
      "App Engine Flexible — it supports custom Docker runtimes",
      "Neither — use Cloud Functions instead",
      "App Engine Standard with a custom entrypoint"
    ],
    correctAnswers: [1],
    explanation: "App Engine Flexible environment supports custom Docker runtimes, allowing you to install any system libraries. Standard environment only supports specific language runtimes and doesn't allow custom system libraries.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 112,
    text: "You need to deploy a containerized application to Cloud Run. The container image is stored in Artifact Registry. Which gcloud command deploys the service?",
    options: [
      "gcloud run services create my-service --image=REGION-docker.pkg.dev/PROJECT/REPO/IMAGE:TAG --region=us-central1",
      "gcloud run deploy my-service --image=REGION-docker.pkg.dev/PROJECT/REPO/IMAGE:TAG --region=us-central1",
      "gcloud app deploy --image=REGION-docker.pkg.dev/PROJECT/REPO/IMAGE:TAG",
      "gcloud compute instances create-from-container my-service --container-image=REGION-docker.pkg.dev/PROJECT/REPO/IMAGE:TAG"
    ],
    correctAnswers: [1],
    explanation: "'gcloud run deploy' is the correct command to deploy a service to Cloud Run from a container image. 'gcloud run services create' is not the standard deploy command. 'gcloud app deploy' is for App Engine.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 113,
    text: "You are creating a GKE cluster and want to minimize management overhead. The cluster should automatically manage node pools, scaling, and security patches. Which cluster mode should you use?",
    options: [
      "GKE Standard with auto-upgrade enabled",
      "GKE Autopilot",
      "GKE Standard with node auto-provisioning",
      "GKE Standard with preemptible nodes"
    ],
    correctAnswers: [1],
    explanation: "GKE Autopilot is a fully managed mode where Google manages the entire cluster infrastructure including node pools, scaling, security patches, and baseline security configuration. It minimizes management overhead significantly compared to Standard mode.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 114,
    text: "You need to create a Cloud SQL instance for a production MySQL database. The instance must have high availability. Which configuration provides automatic failover?",
    options: [
      "Create a single instance with automated backups enabled",
      "Create an instance with a regional (HA) configuration",
      "Create an instance with a read replica in the same zone",
      "Create an instance with a cross-region read replica"
    ],
    correctAnswers: [1],
    explanation: "Cloud SQL regional (HA) configuration creates a primary instance and a standby instance in a different zone within the same region. It provides automatic failover if the primary instance or its zone becomes unavailable.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 115,
    text: "You need to set up a CI/CD pipeline that builds a Docker container, pushes it to Artifact Registry, and deploys it to Cloud Run whenever code is pushed to the main branch. Which service should you use?",
    options: [
      "Cloud Build with a cloudbuild.yaml trigger",
      "Jenkins on Compute Engine",
      "GitHub Actions only (no GCP services)",
      "Cloud Scheduler with Cloud Functions"
    ],
    correctAnswers: [0],
    explanation: "Cloud Build is Google Cloud's native CI/CD service. You define a cloudbuild.yaml file with build steps and configure a trigger to run on pushes to the main branch. It integrates natively with Artifact Registry and Cloud Run.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 116,
    text: "You are deploying a Kubernetes application that needs to expose a gRPC service externally. Which GKE Ingress or Service type should you use?",
    options: [
      "ClusterIP Service",
      "NodePort Service",
      "LoadBalancer Service with NEG (Network Endpoint Groups)",
      "Ingress with HTTP(S) Load Balancer using gRPC backend configuration"
    ],
    correctAnswers: [3],
    explanation: "GKE's Ingress with the HTTP(S) Load Balancer supports gRPC backends natively through backend configuration. This provides load balancing, SSL termination, and health checking for gRPC services.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 117,
    text: "You need to deploy a multi-container application to GKE where one container runs the web server and another runs a log collector. Both containers must share the same network namespace and storage. How should you configure this?",
    options: [
      "Create two separate Deployments and link them with a Service",
      "Create a single Pod with two containers (sidecar pattern)",
      "Create a DaemonSet for the log collector",
      "Use two separate Pods with a shared PersistentVolume"
    ],
    correctAnswers: [1],
    explanation: "The sidecar pattern uses a single Pod with multiple containers. Containers in the same Pod share the same network namespace (localhost) and can share volumes. This is the standard Kubernetes pattern for auxiliary containers like log collectors.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 118,
    text: "You need to configure a Cloud Storage bucket so that when a new file is uploaded, it automatically triggers data processing. Which approach should you use?",
    options: [
      "Poll the bucket every minute using Cloud Scheduler and Cloud Functions",
      "Use Eventarc to trigger a Cloud Run service on object finalize events",
      "Set up a Cloud Monitoring alert when bucket object count changes",
      "Use a Cloud Storage transfer job"
    ],
    correctAnswers: [1],
    explanation: "Eventarc provides event-driven triggers for Cloud Run (and other targets) from Cloud Storage events like object finalize. This is the recommended serverless event-driven approach, replacing the older Cloud Functions GCS triggers.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 119,
    text: "You have deployed a new version of a Kubernetes Deployment and realize it has a critical bug. You need to immediately roll back to the previous version. Which command should you use?",
    options: [
      "kubectl delete deployment my-app && kubectl apply -f previous-version.yaml",
      "kubectl rollout undo deployment/my-app",
      "kubectl scale deployment my-app --replicas=0",
      "kubectl set image deployment/my-app container=previous-image:tag"
    ],
    correctAnswers: [1],
    explanation: "'kubectl rollout undo deployment/my-app' immediately reverts the Deployment to the previous revision. Kubernetes maintains a revision history, making rollbacks fast and simple without needing the previous YAML file.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 120,
    text: "You want to use Cloud Build to build a Docker image and push it to Artifact Registry. Which step in cloudbuild.yaml correctly builds and pushes the image?",
    options: [
      "steps:\n- name: 'gcr.io/cloud-builders/docker'\n  args: ['build', '-t', 'us-docker.pkg.dev/$PROJECT_ID/repo/image:$COMMIT_SHA', '.']\nimages: ['us-docker.pkg.dev/$PROJECT_ID/repo/image:$COMMIT_SHA']",
      "steps:\n- name: 'docker'\n  args: ['build', '-t', 'image:latest', '.']\n- name: 'docker'\n  args: ['push', 'image:latest']",
      "steps:\n- name: 'gcr.io/cloud-builders/gcloud'\n  args: ['builds', 'submit', '--tag', 'image:latest']",
      "steps:\n- name: 'gcr.io/cloud-builders/kubectl'\n  args: ['apply', '-f', 'deployment.yaml']"
    ],
    correctAnswers: [0],
    explanation: "The correct approach uses the Cloud Builders Docker image to build the container, tags it with the Artifact Registry path, and uses the 'images' field to automatically push it after the build completes.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 121,
    text: "Your production GKE application is experiencing intermittent 503 errors. You need to identify the root cause. Which combination of tools should you use first?",
    options: [
      "Check Cloud Logging for application logs and Cloud Monitoring for service metrics",
      "SSH into each node and check system logs manually",
      "Restart all pods and see if the issue resolves",
      "Delete and recreate the GKE cluster"
    ],
    correctAnswers: [0],
    explanation: "Cloud Logging collects application and system logs from GKE, and Cloud Monitoring provides service metrics like latency, error rates, and resource utilization. These should be your first diagnostic tools.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 122,
    text: "You need to create a custom Cloud Monitoring dashboard that shows CPU utilization, memory usage, and disk I/O for all Compute Engine instances in a project. Which metric type should you use?",
    options: [
      "Custom metrics created by the application",
      "Agent metrics from the Ops Agent (compute.googleapis.com/instance/cpu, memory, disk)",
      "External metrics from a third-party tool",
      "Uptime check metrics"
    ],
    correctAnswers: [1],
    explanation: "The Ops Agent (or legacy Monitoring agent) collects detailed system metrics for Compute Engine instances including CPU, memory, and disk I/O under the compute.googleapis.com namespace. These are the standard metrics for VM monitoring.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 123,
    text: "Your Cloud SQL PostgreSQL instance is experiencing slow queries. You need to identify which queries are causing performance issues. What should you enable?",
    options: [
      "Cloud Trace",
      "Query Insights for Cloud SQL",
      "Cloud Profiler",
      "VPC Flow Logs"
    ],
    correctAnswers: [1],
    explanation: "Query Insights for Cloud SQL provides query performance diagnostics, showing slow queries, their execution plans, and resource consumption. It's specifically designed for Cloud SQL query performance analysis.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 124,
    text: "You need to set up a process where Cloud Storage objects are automatically replicated to a bucket in a different region for disaster recovery. What is the simplest approach?",
    options: [
      "Use a Cloud Function triggered on object finalize to copy objects to the other bucket",
      "Use dual-region or multi-region bucket storage class",
      "Set up Storage Transfer Service to run hourly",
      "Use Cross-bucket replication (turbo replication)"
    ],
    correctAnswers: [1],
    explanation: "Using a dual-region or multi-region storage class automatically replicates objects across regions. This is the simplest approach as it requires no additional configuration or services — replication is built into the storage class.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 125,
    text: "You are managing a fleet of Compute Engine instances and need to apply OS patches to all instances during a maintenance window. Which service should you use?",
    options: [
      "Write a custom script using gcloud compute ssh to patch each instance",
      "OS Patch Management (VM Manager)",
      "Use a managed instance group rolling update",
      "Create new instances with updated images and delete old ones"
    ],
    correctAnswers: [1],
    explanation: "OS Patch Management (part of VM Manager) allows you to manage OS patches across a fleet of Compute Engine instances. You can create patch jobs with maintenance windows and compliance reporting.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 126,
    text: "Your application logs are being sent to Cloud Logging but you're reaching your monthly logging quota. Some logs are debug-level and not needed in production. How should you reduce logging costs?",
    options: [
      "Disable Cloud Logging entirely for the project",
      "Create a log exclusion filter to exclude debug-level logs from ingestion",
      "Delete old logs manually each week",
      "Move all logs to Cloud Storage instead"
    ],
    correctAnswers: [1],
    explanation: "Log exclusion filters prevent specified log entries from being ingested into Cloud Logging. You can exclude debug-level logs while keeping important logs. Excluded logs don't count toward your ingestion quota.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 127,
    text: "You need to implement VPC Service Controls to restrict data exfiltration from BigQuery. Which component do you need to define?",
    options: [
      "A VPC firewall rule blocking external IPs",
      "A service perimeter that includes the BigQuery API and the relevant projects",
      "An Organization Policy restricting BigQuery usage",
      "Cloud Armor security policy for BigQuery"
    ],
    correctAnswers: [1],
    explanation: "VPC Service Controls use service perimeters to restrict access to Google Cloud services. By placing BigQuery within a service perimeter, you prevent data exfiltration by restricting which projects and networks can access the data.",
    domain: "Configuring access and security"
  },
  {
    id: 128,
    text: "Your application needs to authenticate users via Google Sign-In and then access Google Cloud APIs on behalf of those users. Which authentication flow should you implement?",
    options: [
      "Service account impersonation",
      "OAuth 2.0 Authorization Code flow with user consent",
      "API key authentication",
      "Workload Identity Federation"
    ],
    correctAnswers: [1],
    explanation: "OAuth 2.0 Authorization Code flow allows your application to authenticate users via Google Sign-In and obtain access tokens to call Google Cloud APIs on behalf of the user. Service accounts are for server-to-server communication.",
    domain: "Configuring access and security"
  },
  {
    id: 129,
    text: "You are implementing a zero-trust security model. All traffic between microservices in your GKE cluster must be encrypted and authenticated using mutual TLS (mTLS). Which service mesh should you use?",
    options: [
      "Cloud Load Balancing with SSL",
      "Anthos Service Mesh (based on Istio)",
      "Cloud Armor",
      "VPC firewall rules with TLS"
    ],
    correctAnswers: [1],
    explanation: "Anthos Service Mesh (ASM), based on Istio, provides automatic mutual TLS between services, fine-grained traffic policies, and observability. It's designed for zero-trust security in Kubernetes environments.",
    domain: "Configuring access and security"
  },
  {
    id: 130,
    text: "A team member needs to be able to deploy Cloud Functions and manage Cloud Storage buckets, but should not be able to modify IAM policies or access other services. How should you grant access?",
    options: [
      "Grant the roles/editor basic role",
      "Create a custom IAM role with only cloudfunctions.* and storage.* permissions",
      "Grant roles/cloudfunctions.developer and roles/storage.admin predefined roles",
      "Grant roles/owner and then use deny policies to restrict"
    ],
    correctAnswers: [2],
    explanation: "Granting the predefined roles roles/cloudfunctions.developer and roles/storage.admin provides exactly the needed permissions. A custom role could also work but predefined roles are preferred when they match the requirements. The Editor role grants too many permissions.",
    domain: "Configuring access and security"
  },
  {
    id: 131,
    text: "Your web application needs to protect against common web vulnerabilities including SQL injection and cross-site scripting (XSS). Which Google Cloud service provides this protection?",
    options: [
      "Cloud CDN",
      "VPC firewall rules",
      "Cloud Armor with preconfigured WAF rules",
      "Cloud IAP (Identity-Aware Proxy)"
    ],
    correctAnswers: [2],
    explanation: "Cloud Armor acts as a Web Application Firewall (WAF) and includes preconfigured rules (based on OWASP ModSecurity Core Rule Set) that protect against SQL injection, XSS, and other common web vulnerabilities.",
    domain: "Configuring access and security"
  },
  {
    id: 132,
    text: "You need to ensure that only users from your organization can access a specific App Engine application. External users should be blocked. Which service should you use?",
    options: [
      "Cloud Armor IP allowlisting",
      "Identity-Aware Proxy (IAP)",
      "VPC firewall rules",
      "App Engine firewall rules with IP ranges"
    ],
    correctAnswers: [1],
    explanation: "Identity-Aware Proxy (IAP) provides application-level access control based on user identity. It integrates with Google Sign-In and verifies that only authenticated users from your organization can access the application.",
    domain: "Configuring access and security"
  },
  {
    id: 133,
    text: "You want to grant a Cloud Build service account permission to deploy to GKE. Following the principle of least privilege, which role should you grant?",
    options: [
      "roles/container.admin",
      "roles/container.developer",
      "roles/owner",
      "roles/container.clusterAdmin"
    ],
    correctAnswers: [1],
    explanation: "roles/container.developer allows deploying workloads to GKE (create/update Deployments, Services, etc.) without granting cluster administration permissions. This follows the principle of least privilege for CI/CD deployment.",
    domain: "Configuring access and security"
  },
  {
    id: 134,
    text: "You need to run a one-time database migration script on a Compute Engine instance that will take approximately 8 hours. The instance does not need to be available after the migration. How should you optimize costs?",
    options: [
      "Use a preemptible VM — it's cheaper",
      "Use a standard VM with a committed use discount",
      "Use a standard VM and stop it after the migration completes",
      "Use a Spot VM with a shutdown script that checkpoints progress"
    ],
    correctAnswers: [2],
    explanation: "Since this is a one-time 8-hour job, a standard VM stopped after completion is appropriate. Preemptible/Spot VMs have a max lifetime of 24 hours and can be preempted, which could interrupt an 8-hour migration that isn't designed for interruption. Committed use discounts require 1-3 year commitments.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 135,
    text: "You are deploying a Helm chart to GKE. The chart requires custom values for your environment. Which command deploys the chart with custom values?",
    options: [
      "helm install my-release chart-name --values custom-values.yaml",
      "kubectl apply -f chart-name --values custom-values.yaml",
      "gcloud container clusters deploy chart-name --values custom-values.yaml",
      "helm deploy my-release chart-name -f custom-values.yaml"
    ],
    correctAnswers: [0],
    explanation: "'helm install' deploys a chart to the Kubernetes cluster. The --values (or -f) flag specifies a custom values file that overrides the chart's default values. There is no 'helm deploy' command.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 136,
    text: "Your GKE cluster needs to automatically scale the number of nodes when pod demand exceeds current capacity. Which feature should you enable?",
    options: [
      "Horizontal Pod Autoscaler (HPA)",
      "Vertical Pod Autoscaler (VPA)",
      "Cluster Autoscaler",
      "Pod Disruption Budget"
    ],
    correctAnswers: [2],
    explanation: "Cluster Autoscaler automatically adjusts the number of nodes in a node pool based on pod scheduling requirements. When pods can't be scheduled due to insufficient resources, it adds nodes. When nodes are underutilized, it removes them.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 137,
    text: "You are implementing IAM conditions to restrict access to Cloud Storage objects based on the resource name prefix. Which IAM feature allows this?",
    options: [
      "IAM deny policies",
      "IAM conditions with resource.name attribute",
      "Custom IAM roles with specific permissions",
      "Access Context Manager"
    ],
    correctAnswers: [1],
    explanation: "IAM conditions allow you to specify conditions under which an IAM binding is active. Using the resource.name attribute, you can restrict access to objects matching a specific prefix (e.g., resource.name.startsWith('projects/_/buckets/my-bucket/objects/confidential/')).",
    domain: "Configuring access and security"
  },
  {
    id: 138,
    text: "You have a Cloud Storage bucket containing sensitive data. You need to ensure that objects cannot be deleted or overwritten for a regulatory period of 7 years. What should you configure?",
    options: [
      "Object versioning with a lifecycle rule",
      "A bucket lock with a retention policy of 7 years",
      "IAM policies preventing deletion",
      "Object hold on each object"
    ],
    correctAnswers: [1],
    explanation: "A locked retention policy ensures objects cannot be deleted or overwritten for the specified retention period. Once the retention policy is locked, it cannot be reduced or removed, providing regulatory compliance. IAM policies alone could be changed by an admin.",
    domain: "Configuring access and security"
  },
  {
    id: 139,
    text: "You need to configure a Cloud Monitoring SLO (Service Level Objective) for your API. The target is 99.9% availability measured by successful HTTP responses over a 30-day rolling window. Which metric type should you use?",
    options: [
      "Request-based SLI using the ratio of successful requests to total requests",
      "Windows-based SLI using the percentage of good minutes",
      "Custom metric with a threshold alert",
      "Uptime check with a 99.9% target"
    ],
    correctAnswers: [0],
    explanation: "A request-based SLI measures the ratio of good events (successful HTTP responses) to total events (all HTTP responses) over the compliance period. This directly maps to the availability target of 99.9%.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 140,
    text: "Your application uses Firestore in Native mode. You are experiencing slow queries on a collection that has grown to millions of documents. Queries filter on two fields: 'status' and 'createdAt'. What should you do?",
    options: [
      "Increase the Firestore instance size",
      "Create a composite index on the 'status' and 'createdAt' fields",
      "Migrate to Cloud SQL for better query performance",
      "Shard the collection into multiple sub-collections"
    ],
    correctAnswers: [1],
    explanation: "Firestore requires composite indexes for queries that filter or order by multiple fields. Creating a composite index on 'status' and 'createdAt' will significantly improve query performance.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 141,
    text: "You need to configure Cloud DNS to route traffic to different backends based on the geographic location of the requesting user. Which routing policy should you use?",
    options: [
      "Weighted round robin routing policy",
      "Geolocation routing policy",
      "Failover routing policy",
      "Simple routing policy"
    ],
    correctAnswers: [1],
    explanation: "Cloud DNS geolocation routing policy routes DNS queries to different backends based on the geographic origin of the request. This is useful for routing users to the nearest regional deployment.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 142,
    text: "You are setting up a Cloud SQL read replica for an existing production database. During replica creation, will the primary instance experience downtime?",
    options: [
      "Yes — the primary instance must be restarted",
      "Yes — a full lock is placed on the primary during backup",
      "No — the replica is created from an automatic backup without impacting the primary",
      "No — but only if the primary is stopped manually first"
    ],
    correctAnswers: [2],
    explanation: "Cloud SQL creates read replicas from an automatic backup of the primary instance. This process does not require downtime or locks on the primary. The primary continues to serve traffic normally during replica creation.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 143,
    text: "You are configuring Kubernetes resource quotas in a GKE namespace. You want to limit the total CPU to 20 cores and total memory to 64 Gi for all pods in the namespace. Which resource should you create?",
    options: [
      "LimitRange",
      "ResourceQuota",
      "PodDisruptionBudget",
      "NetworkPolicy"
    ],
    correctAnswers: [1],
    explanation: "ResourceQuota limits the total resource consumption in a namespace. It can restrict CPU, memory, number of pods, and other resources across all pods in the namespace. LimitRange sets per-pod or per-container defaults and limits.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 144,
    text: "You need to deploy a Cloud Function that is triggered when a message is published to a specific Pub/Sub topic. Which trigger type should you configure?",
    options: [
      "HTTP trigger",
      "Cloud Storage trigger",
      "Pub/Sub trigger",
      "Firestore trigger"
    ],
    correctAnswers: [2],
    explanation: "A Pub/Sub trigger configures the Cloud Function to be invoked automatically when a message is published to the specified Pub/Sub topic. The message data is passed to the function as an event.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 145,
    text: "Your company uses multiple Google Cloud projects. You need to view consolidated billing information across all projects in a single dashboard. Where should you look?",
    options: [
      "Each project's individual billing page",
      "The Billing Account dashboard in the Cloud Billing console",
      "Cloud Monitoring metrics for billing",
      "BigQuery billing export only"
    ],
    correctAnswers: [1],
    explanation: "The Billing Account dashboard in the Cloud Billing console provides a consolidated view of spending across all projects linked to the billing account. It shows cost breakdowns by project, service, and SKU.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 146,
    text: "You are creating a Kubernetes NetworkPolicy to restrict pod-to-pod communication. You want to allow only pods with the label 'role=frontend' to access pods with the label 'role=backend' on port 8080. What should you define?",
    options: [
      "An ingress NetworkPolicy on pods with role=backend allowing traffic from pods with role=frontend on port 8080",
      "A VPC firewall rule allowing traffic between the pods",
      "A Service mesh policy in Istio",
      "An egress NetworkPolicy on pods with role=frontend"
    ],
    correctAnswers: [0],
    explanation: "A Kubernetes NetworkPolicy with an ingress rule on the backend pods (podSelector: role=backend) allowing traffic from frontend pods (from.podSelector: role=frontend) on port 8080 is the correct approach for in-cluster network segmentation.",
    domain: "Configuring access and security"
  },
  {
    id: 147,
    text: "You receive a notification that your Committed Use Discount (CUD) for Compute Engine is expiring in 30 days. Your workload is expected to continue at the same level. What should you do?",
    options: [
      "Do nothing — it will auto-renew",
      "Purchase a new commitment before the existing one expires",
      "Switch all workloads to preemptible VMs",
      "Migrate to a different cloud provider"
    ],
    correctAnswers: [1],
    explanation: "Committed Use Discounts do not auto-renew. You must purchase a new commitment before the existing one expires to continue receiving the discounted pricing. Without renewal, you'll pay on-demand prices.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 148,
    text: "You need to ensure that Terraform state modifications are serialized when multiple team members might run Terraform apply simultaneously. Which backend feature handles this?",
    options: [
      "State versioning",
      "State locking",
      "State encryption",
      "State caching"
    ],
    correctAnswers: [1],
    explanation: "State locking prevents concurrent state modifications by acquiring a lock before any operation that could write state. Cloud Storage backend for Terraform supports state locking, preventing race conditions when multiple users run Terraform simultaneously.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 149,
    text: "You are investigating high latency in a distributed application. Requests pass through multiple microservices. Which Google Cloud service helps you trace the request path and identify latency bottlenecks?",
    options: [
      "Cloud Logging",
      "Cloud Monitoring",
      "Cloud Trace",
      "Cloud Profiler"
    ],
    correctAnswers: [2],
    explanation: "Cloud Trace collects latency data from distributed applications, showing the complete request path through multiple services and identifying where time is being spent. Cloud Profiler profiles CPU and memory usage of individual services.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 150,
    text: "Your application needs to serve different content based on the user's geographic location. You want to achieve this at the DNS level before traffic reaches your application. Which Cloud DNS feature should you use?",
    options: [
      "DNSSEC",
      "Geolocation routing policy",
      "Private DNS zones",
      "DNS forwarding"
    ],
    correctAnswers: [1],
    explanation: "Cloud DNS geolocation routing policy returns different DNS responses based on the geographic location of the client. This allows routing users to region-specific backends at the DNS level before any application logic runs.",
    domain: "Planning and configuring a cloud solution"
  }
];

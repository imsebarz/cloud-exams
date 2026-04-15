import { Question } from "./types";

export const questionsV3: Question[] = [
  {
    id: 201,
    text: "Your company is adopting a multi-cloud strategy. You need to manage Kubernetes clusters running on Google Cloud, AWS, and on-premises. Which Google Cloud service provides a unified management plane for these clusters?",
    options: [
      "GKE Enterprise (Anthos)",
      "GKE Standard",
      "Cloud Run",
      "Compute Engine managed instance groups"
    ],
    correctAnswers: [0],
    explanation: "GKE Enterprise (formerly Anthos) provides a unified platform for managing Kubernetes clusters across Google Cloud, other clouds (AWS, Azure), and on-premises environments. It offers consistent policy enforcement and observability.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 202,
    text: "You need to assign different billing accounts to different projects within the same organization. Is this possible, and if so, who can perform this action?",
    options: [
      "No — all projects in an organization must use the same billing account",
      "Yes — a user with Billing Account Administrator role can link projects to different billing accounts",
      "Yes — but only the Organization Admin can do this",
      "Yes — any project owner can change the billing account"
    ],
    correctAnswers: [1],
    explanation: "Projects within the same organization can use different billing accounts. A user with the Billing Account Administrator role (or Billing Account User + Project Billing Manager) can link or unlink projects to billing accounts.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 203,
    text: "Your team needs to enforce that all new Cloud Storage buckets in the organization must have uniform bucket-level access enabled. How should you enforce this?",
    options: [
      "Send an email reminder to all developers",
      "Set an Organization Policy constraint for uniformBucketLevelAccess",
      "Create a Cloud Function that checks and modifies new buckets",
      "Use a custom IAM role that prevents creating non-uniform buckets"
    ],
    correctAnswers: [1],
    explanation: "The Organization Policy constraint constraints/storage.uniformBucketLevelAccess enforces that all new Cloud Storage buckets must have uniform bucket-level access enabled. This is a preventive control applied at the organization level.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 204,
    text: "You are using Terraform to manage Google Cloud infrastructure. You want to preview what changes Terraform will make without actually applying them. Which command should you use?",
    options: [
      "terraform validate",
      "terraform plan",
      "terraform apply --dry-run",
      "terraform diff"
    ],
    correctAnswers: [1],
    explanation: "'terraform plan' creates an execution plan showing what changes will be made to your infrastructure without actually applying them. 'terraform validate' only checks syntax. There is no --dry-run flag or 'terraform diff' command.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 205,
    text: "Your organization wants to use Cloud Identity groups to manage access to Google Cloud resources. You need to grant all members of the 'data-analysts' group read access to BigQuery datasets across multiple projects. What is the most efficient approach?",
    options: [
      "Add each group member individually to each project's IAM policy",
      "Grant the roles/bigquery.dataViewer role to the group at the organization or folder level",
      "Create a service account for the group to share",
      "Grant each member the roles/bigquery.admin role"
    ],
    correctAnswers: [1],
    explanation: "Granting the role to the Cloud Identity group at the organization or folder level is the most efficient approach. IAM policies are inherited down the hierarchy, so all projects under that node will inherit the binding. Using groups simplifies management.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 206,
    text: "You need to choose a database for a mobile application that requires offline support, real-time synchronization, and automatic scaling. Users will perform queries on nested document data. Which service should you use?",
    options: [
      "Cloud SQL for MySQL",
      "Cloud Spanner",
      "Firestore in Native mode",
      "Cloud Bigtable"
    ],
    correctAnswers: [2],
    explanation: "Firestore in Native mode provides real-time synchronization, offline support for mobile/web clients, automatic scaling, and is designed for document-oriented data. It has client SDKs that handle offline caching and sync.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 207,
    text: "You have a legacy monolithic application running on-premises. Your team wants to migrate to Google Cloud with minimal code changes. The application runs on Linux, uses a custom runtime, and requires access to the local file system. Which compute service is most appropriate?",
    options: [
      "Cloud Functions",
      "Cloud Run",
      "Compute Engine",
      "App Engine Standard"
    ],
    correctAnswers: [2],
    explanation: "Compute Engine provides virtual machines that closely replicate an on-premises environment. It supports custom runtimes, persistent local file systems, and requires minimal code changes for lift-and-shift migrations.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 208,
    text: "You need to design a solution that aggregates log data from multiple sources, processes it in near-real-time, and stores the results for querying. The data volume is approximately 5 TB per day. Which architecture is most appropriate?",
    options: [
      "Cloud Storage → Cloud Functions → Cloud SQL",
      "Pub/Sub → Dataflow → BigQuery",
      "Cloud Logging → Cloud Storage → Compute Engine scripts",
      "Kafka on GKE → Cloud SQL → Looker"
    ],
    correctAnswers: [1],
    explanation: "Pub/Sub handles high-volume ingestion, Dataflow provides near-real-time stream processing with exactly-once semantics, and BigQuery offers scalable analytics storage and querying for the processed data. This is Google Cloud's recommended streaming analytics architecture.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 209,
    text: "Your team needs to compare the cost of running workloads on n2-standard-8 vs. n2-custom (8 vCPU, 24 GB memory) instances. Which statement is correct?",
    options: [
      "Custom machine types are always cheaper than standard types",
      "Standard machine types are always cheaper than custom types",
      "Custom machine types can be cheaper when you need less memory than the standard type provides (n2-standard-8 has 32 GB)",
      "Custom and standard types always cost the same for the same vCPU count"
    ],
    correctAnswers: [2],
    explanation: "Custom machine types can save money when you need a different memory-to-CPU ratio than standard types offer. n2-standard-8 has 32 GB memory. If you only need 24 GB, a custom type with 8 vCPU and 24 GB will cost less since you pay for memory per GB.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 210,
    text: "You need to set up a hybrid DNS configuration where your on-premises DNS server can resolve Google Cloud private DNS names and vice versa. Which Cloud DNS feature should you configure?",
    options: [
      "Public DNS zones",
      "DNS peering and Cloud DNS forwarding zones",
      "DNSSEC only",
      "Cloud CDN"
    ],
    correctAnswers: [1],
    explanation: "DNS peering allows one VPC to forward DNS queries to another VPC's DNS, and Cloud DNS forwarding zones allow Cloud DNS to forward queries to on-premises DNS servers. Together, they enable hybrid DNS resolution between on-premises and Google Cloud.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 211,
    text: "You are deploying a stateless web application that must serve traffic during regional outages. The application runs on Compute Engine. What architecture should you use?",
    options: [
      "A single regional managed instance group with autoscaling",
      "Multi-regional managed instance groups behind a Global HTTP(S) Load Balancer",
      "A single instance with a static external IP",
      "Cloud Run in a single region"
    ],
    correctAnswers: [1],
    explanation: "Multi-regional MIGs behind a Global HTTP(S) Load Balancer provide automatic failover across regions. If one region goes down, traffic is automatically routed to healthy instances in other regions.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 212,
    text: "You need to create a Compute Engine instance template that specifies a startup script stored in Cloud Storage. How should you reference the script?",
    options: [
      "Use --metadata startup-script-url=gs://bucket/startup.sh in the instance template creation",
      "Use --startup-script=gs://bucket/startup.sh",
      "Embed the script directly in the instance template YAML",
      "Use --metadata startup-script='curl gs://bucket/startup.sh | bash'"
    ],
    correctAnswers: [0],
    explanation: "The --metadata startup-script-url flag specifies a Cloud Storage URL for the startup script. Compute Engine downloads and executes it on instance startup. This is the standard way to reference external startup scripts.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 213,
    text: "You need to deploy a stateful Kubernetes application that requires each pod to have a stable network identity and persistent storage. Which Kubernetes workload controller should you use?",
    options: [
      "Deployment",
      "ReplicaSet",
      "StatefulSet",
      "DaemonSet"
    ],
    correctAnswers: [2],
    explanation: "StatefulSet provides stable, unique network identifiers, stable persistent storage, and ordered deployment and scaling for stateful applications. Each pod gets a predictable hostname and its own PersistentVolumeClaim.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 214,
    text: "You are setting up a CI/CD pipeline with Cloud Build. You want to run unit tests before building the Docker image, and only proceed with the build if tests pass. How should you structure the cloudbuild.yaml?",
    options: [
      "Put tests and build in the same step",
      "Define sequential steps: first a test step, then a build step — Cloud Build stops on failure by default",
      "Use a waitFor clause to run tests in parallel with the build",
      "Create two separate Cloud Build triggers — one for tests and one for build"
    ],
    correctAnswers: [1],
    explanation: "Cloud Build steps run sequentially by default. If a step fails (non-zero exit code), the build is halted. By placing the test step before the build step, tests must pass before the Docker image is built.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 215,
    text: "You need to configure a Cloud SQL instance to accept connections only from specific IP addresses. Which feature should you use?",
    options: [
      "VPC firewall rules",
      "Cloud SQL authorized networks",
      "Cloud Armor security policy",
      "Network tags on the Cloud SQL instance"
    ],
    correctAnswers: [1],
    explanation: "Cloud SQL authorized networks allow you to specify which IP addresses or CIDR ranges can connect to the instance via its public IP. This is configured in the Cloud SQL instance settings, not through VPC firewall rules.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 216,
    text: "You are deploying a multi-region active-active application on Cloud Run. How should you route traffic to the nearest region?",
    options: [
      "Deploy Cloud Run services in each region and use a Global external Application Load Balancer with serverless NEGs",
      "Deploy Cloud Run in one region and use Cloud CDN for caching",
      "Use Cloud DNS round-robin between regions",
      "Deploy on GKE instead — Cloud Run doesn't support multi-region"
    ],
    correctAnswers: [0],
    explanation: "Deploy Cloud Run services in multiple regions and place them behind a Global external Application Load Balancer using serverless Network Endpoint Groups (NEGs). The load balancer routes users to the nearest healthy region automatically.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 217,
    text: "You need to create a BigQuery dataset that is accessible only to the data team. The dataset contains tables with sensitive customer information. Which access control method should you use?",
    options: [
      "Grant access at the project level using roles/bigquery.dataViewer",
      "Grant access at the dataset level using IAM, giving roles/bigquery.dataViewer to the data team group",
      "Make the dataset public and rely on authentication",
      "Use authorized views for all access"
    ],
    correctAnswers: [1],
    explanation: "Granting IAM roles at the dataset level provides granular access control. Only the data team group will have access to this specific dataset, rather than all datasets in the project. This follows the principle of least privilege.",
    domain: "Configuring access and security"
  },
  {
    id: 218,
    text: "Your production environment needs to prevent accidental project deletion. What safeguard should you put in place?",
    options: [
      "Remove the Project Deleter role from all users",
      "Enable project lien to prevent deletion",
      "Use an Organization Policy to prevent project deletion",
      "Set up a Cloud Function to immediately restore deleted projects"
    ],
    correctAnswers: [1],
    explanation: "A project lien prevents a project from being deleted. When a lien is active, the project cannot be deleted until the lien is removed. This is a direct safeguard against accidental deletion.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 219,
    text: "You need to schedule a Cloud Function to run every day at 2:00 AM UTC to perform database maintenance. Which service should you use to trigger the function?",
    options: [
      "Cloud Tasks",
      "Cloud Scheduler with a Pub/Sub target or HTTP target",
      "Cron on a Compute Engine instance",
      "Cloud Composer"
    ],
    correctAnswers: [1],
    explanation: "Cloud Scheduler is a fully managed cron job service. It can trigger Cloud Functions either through a Pub/Sub topic or an HTTP endpoint on a specified schedule. It's the simplest serverless scheduling option.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 220,
    text: "You are managing a GKE cluster and notice that some pods are stuck in 'Pending' state because there are not enough resources on existing nodes. What is happening and how should it be resolved?",
    options: [
      "The pods have incorrect labels — fix the labels",
      "The cluster needs more nodes — ensure Cluster Autoscaler is enabled so it adds nodes when pods can't be scheduled",
      "The pods have too many containers — reduce container count",
      "Delete all pending pods and redeploy"
    ],
    correctAnswers: [1],
    explanation: "Pods in 'Pending' state due to insufficient resources means the scheduler can't find a node with enough CPU or memory. Cluster Autoscaler detects this condition and automatically adds nodes to the node pool to accommodate the pending pods.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 221,
    text: "You need to monitor the uptime of an external HTTPS endpoint from multiple global locations. Which Cloud Monitoring feature should you use?",
    options: [
      "Custom metric",
      "Uptime check",
      "Log-based metric",
      "Service Level Objective"
    ],
    correctAnswers: [1],
    explanation: "Cloud Monitoring uptime checks probe your endpoints (HTTP, HTTPS, TCP) from multiple global locations at regular intervals. You can configure alerting when checks fail, providing external monitoring of your service availability.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 222,
    text: "Your Cloud Function is failing intermittently with 'Function invocation was interrupted' errors. The function processes large images and takes variable time. What is the most likely issue?",
    options: [
      "Insufficient memory allocation",
      "The function is exceeding its configured timeout",
      "Network connectivity issues",
      "The Cloud Functions API is not enabled"
    ],
    correctAnswers: [1],
    explanation: "When a function exceeds its configured timeout, the invocation is interrupted. Since image processing takes variable time, some invocations may exceed the timeout while others complete successfully. The solution is to increase the timeout or optimize processing.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 223,
    text: "You need to analyze Cloud Logging data over the past 90 days to identify trends in error rates. The default Cloud Logging retention is 30 days for most log types. How should you access logs beyond 30 days?",
    options: [
      "Increase Cloud Logging retention to 90 days (this is configurable for user-defined log buckets)",
      "It's impossible to access logs beyond 30 days",
      "Use Cloud Monitoring metrics instead of logs",
      "Contact Google Cloud support to restore old logs"
    ],
    correctAnswers: [0],
    explanation: "You can configure custom retention periods for user-defined log buckets in Cloud Logging. The retention can be set from 1 day to 3,650 days (10 years). Alternatively, you can set up log sinks to export to Cloud Storage for even longer retention.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 224,
    text: "You are running a managed instance group with autoscaling based on CPU utilization (target 60%). During a traffic spike, new instances take 5 minutes to initialize before serving traffic. Users experience errors during this period. What should you do?",
    options: [
      "Increase the CPU target to 80%",
      "Configure a health check with an initial delay and set a cool-down period for autoscaling",
      "Disable autoscaling and manually add instances",
      "Use preemptible instances for faster startup"
    ],
    correctAnswers: [1],
    explanation: "Configure the health check with an initial delay that accounts for the 5-minute initialization time, and set an appropriate cool-down period. This prevents the autoscaler from marking new instances as healthy too early or scaling too aggressively.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 225,
    text: "You need to configure a Compute Engine instance to automatically restart if it crashes or is terminated due to a host maintenance event. Which settings should you configure?",
    options: [
      "Set automaticRestart to true and onHostMaintenance to MIGRATE",
      "Set automaticRestart to false and use a Cloud Scheduler to restart",
      "Use a startup script that pings itself",
      "Enable live migration only"
    ],
    correctAnswers: [0],
    explanation: "Setting automaticRestart to true ensures the instance restarts after a crash or termination. Setting onHostMaintenance to MIGRATE ensures the instance is live-migrated during host maintenance instead of being terminated.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 226,
    text: "You need to grant a Cloud Build trigger the ability to deploy to both Cloud Run and GKE in the same project. Which approach follows the principle of least privilege?",
    options: [
      "Grant the Cloud Build service account roles/editor on the project",
      "Grant roles/run.admin and roles/container.developer to the Cloud Build service account",
      "Grant roles/owner to the Cloud Build service account",
      "Use the default Compute Engine service account for Cloud Build"
    ],
    correctAnswers: [1],
    explanation: "Granting only roles/run.admin (for Cloud Run deployments) and roles/container.developer (for GKE deployments) to the Cloud Build service account follows the principle of least privilege. Editor and Owner are overly broad.",
    domain: "Configuring access and security"
  },
  {
    id: 227,
    text: "Your organization wants to implement centralized logging where all projects send their logs to a single project for analysis. What is the recommended approach?",
    options: [
      "Create a log sink in each project pointing to a BigQuery dataset in the central project",
      "Create an aggregated organization-level log sink to a central project's log bucket",
      "Manually export logs from each project daily",
      "Grant all analysts access to every individual project"
    ],
    correctAnswers: [1],
    explanation: "An aggregated organization-level log sink captures logs from all projects in the organization and routes them to a central destination. This is the recommended approach for centralized logging as it automatically includes new projects.",
    domain: "Configuring access and security"
  },
  {
    id: 228,
    text: "You need to ensure that a specific Compute Engine instance can access Cloud Storage but cannot access the internet. What networking configuration should you apply?",
    options: [
      "Remove the external IP, ensure the instance is in a subnet with Private Google Access enabled",
      "Add a firewall rule blocking all egress traffic",
      "Use Cloud NAT with restricted routes",
      "Place the instance in a separate VPC with no internet gateway"
    ],
    correctAnswers: [0],
    explanation: "Removing the external IP prevents direct internet access. Enabling Private Google Access on the subnet allows the instance to reach Google Cloud APIs and services (including Cloud Storage) via internal IP addresses without needing an external IP.",
    domain: "Configuring access and security"
  },
  {
    id: 229,
    text: "Your security team requires that all inter-service communication within your GKE cluster must be encrypted. Which approach provides encryption for all pod-to-pod traffic without modifying application code?",
    options: [
      "Enable GKE Dataplane V2 with NetworkPolicy",
      "Use Anthos Service Mesh with automatic mTLS",
      "Configure SSL certificates on each pod",
      "Use Cloud Armor for internal traffic"
    ],
    correctAnswers: [1],
    explanation: "Anthos Service Mesh with automatic mutual TLS (mTLS) encrypts all pod-to-pod communication transparently using sidecar proxies. Applications don't need to be modified as the mesh handles TLS termination and origination automatically.",
    domain: "Configuring access and security"
  },
  {
    id: 230,
    text: "You need to rotate the encryption keys used for Cloud Storage CMEK encryption. What happens to existing objects when you rotate a Cloud KMS key?",
    options: [
      "All existing objects are automatically re-encrypted with the new key version",
      "Existing objects remain encrypted with the old key version; new objects use the new version. The old key version must remain enabled to read existing objects",
      "All existing objects become inaccessible until manually re-encrypted",
      "Key rotation is not supported for CMEK"
    ],
    correctAnswers: [1],
    explanation: "When you rotate a Cloud KMS key, a new key version becomes the primary version used for new encryption operations. Existing objects remain encrypted with the previous key version. The old key version must stay enabled (not destroyed) to decrypt existing objects.",
    domain: "Configuring access and security"
  },
  {
    id: 231,
    text: "You are configuring Cloud IAP (Identity-Aware Proxy) for a web application running behind an HTTPS Load Balancer. What additional step is required to ensure only IAP-authenticated traffic reaches your backend?",
    options: [
      "Nothing additional — IAP handles everything",
      "Configure a firewall rule that allows traffic only from the Google Front End (GFE) IP ranges and the health check IP ranges",
      "Disable the external IP on all backend instances",
      "Add a Cloud Armor policy that blocks all traffic"
    ],
    correctAnswers: [1],
    explanation: "After enabling IAP, you must configure firewall rules to ensure backends only accept traffic from the GFE (130.211.0.0/22, 35.191.0.0/16) and health check ranges. Without this, users could bypass IAP by accessing backend instances directly.",
    domain: "Configuring access and security"
  },
  {
    id: 232,
    text: "You need to grant temporary elevated access to a developer for 4 hours to troubleshoot a production issue. After 4 hours, the access should be automatically revoked. What should you use?",
    options: [
      "Grant the role and set a calendar reminder to remove it",
      "Use IAM conditions with a time-based expression (request.time < timestamp)",
      "Create a separate project for troubleshooting",
      "Use a service account and share the key temporarily"
    ],
    correctAnswers: [1],
    explanation: "IAM conditions support time-based expressions using the request.time attribute. You can create a conditional IAM binding that grants the role only until a specific timestamp (e.g., 4 hours from now). Access is automatically denied after the time expires.",
    domain: "Configuring access and security"
  },
  {
    id: 233,
    text: "Your application needs to process files uploaded to Cloud Storage. Each file must be processed exactly once, even if the trigger fires multiple times. Which pattern should you implement?",
    options: [
      "Use a Cloud Function with a global variable to track processed files",
      "Use Eventarc + Cloud Run with idempotent processing using a Firestore document as a processing lock",
      "Process all files and accept duplicate processing",
      "Use Cloud Storage event notifications with Cloud Pub/Sub and no deduplication"
    ],
    correctAnswers: [1],
    explanation: "Implementing idempotent processing with an external state store (like Firestore) ensures exactly-once processing. Before processing a file, check/set a lock document in Firestore. This handles duplicate event deliveries gracefully.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 234,
    text: "You need to deploy an application update to a managed instance group with zero downtime. The application stores no local state. Which update method should you use?",
    options: [
      "Delete all instances and let the MIG recreate them",
      "Perform a rolling update with maxSurge=1 and maxUnavailable=0",
      "Stop the instance group, update the template, then start it",
      "Create a new MIG and switch DNS"
    ],
    correctAnswers: [1],
    explanation: "A rolling update with maxSurge=1 and maxUnavailable=0 creates one new instance before removing an old one, ensuring zero downtime. The MIG gradually replaces all instances with the new template while maintaining capacity.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 235,
    text: "You are managing a Dataflow streaming pipeline that processes Pub/Sub messages. You need to handle late-arriving data that arrives up to 1 hour after the event time window closes. Which Dataflow feature should you use?",
    options: [
      "Fixed windows only",
      "Allowed lateness with triggers",
      "Session windows",
      "Global window with no triggers"
    ],
    correctAnswers: [1],
    explanation: "Allowed lateness in Apache Beam (used by Dataflow) specifies how long after a window closes the system should continue to accept late data. Combined with triggers, late data can update previously computed results.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 236,
    text: "You have a Compute Engine instance in project-a that needs to read data from a Cloud Storage bucket in project-b. The instance uses a custom service account. What do you need to configure?",
    options: [
      "Create a VPC peering connection between the two projects",
      "Grant the service account from project-a the Storage Object Viewer role on the bucket in project-b",
      "Move the bucket to project-a",
      "Create a new service account in project-b"
    ],
    correctAnswers: [1],
    explanation: "IAM roles work across projects. Grant the service account from project-a the roles/storage.objectViewer role on the bucket in project-b. No VPC peering or special networking is needed for Cloud Storage access.",
    domain: "Configuring access and security"
  },
  {
    id: 237,
    text: "You need to ensure that all Cloud Functions in your project run with a minimum instance count of 1 to eliminate cold starts. How should you configure this?",
    options: [
      "Set the --min-instances=1 flag when deploying the Cloud Function",
      "Configure Cloud Scheduler to ping the function every minute",
      "Use always-on Compute Engine instances instead",
      "Enable Cloud Functions warm-up in the console"
    ],
    correctAnswers: [0],
    explanation: "Cloud Functions (2nd gen) and Cloud Run support the --min-instances flag, which keeps a specified number of instances warm at all times, eliminating cold starts. This incurs costs for idle instances but provides consistent low latency.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 238,
    text: "You are designing a backup strategy for a GKE cluster. You need to back up both the cluster configuration (Deployments, Services, ConfigMaps) and persistent volume data. Which tool should you use?",
    options: [
      "gcloud container clusters export",
      "Backup for GKE (Google Cloud's managed backup service)",
      "kubectl get all --all-namespaces -o yaml > backup.yaml",
      "Velero (third-party tool) only"
    ],
    correctAnswers: [1],
    explanation: "Backup for GKE is Google Cloud's managed backup and restore service for GKE. It backs up both workload configurations and persistent volume data, supports scheduled backups, and provides restore capabilities across clusters.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 239,
    text: "Your application on GKE needs to access the Cloud Translation API. Following the recommended approach, how should you authenticate?",
    options: [
      "Download a service account key and mount it as a Kubernetes Secret",
      "Use Workload Identity to bind a Kubernetes service account to a Google Cloud service account",
      "Use the node's default service account",
      "Hard-code an API key in the application"
    ],
    correctAnswers: [1],
    explanation: "Workload Identity is the recommended way for GKE workloads to access Google Cloud APIs. It allows a Kubernetes service account to act as a Google Cloud service account without managing keys. This is more secure than using key files or node-level service accounts.",
    domain: "Configuring access and security"
  },
  {
    id: 240,
    text: "You need to set up a NAT gateway for instances in a private subnet that need to access external package repositories for updates. Which service should you use?",
    options: [
      "Cloud VPN",
      "Cloud NAT",
      "Cloud Interconnect",
      "Identity-Aware Proxy"
    ],
    correctAnswers: [1],
    explanation: "Cloud NAT provides outbound NAT for instances without external IP addresses, allowing them to access the internet (e.g., for package updates) while not being directly reachable from the internet. It's a managed, regional service.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 241,
    text: "You need to debug a Cloud Function that is failing silently — no errors appear in the function logs. What should you check first?",
    options: [
      "Check if the function's execution role has the logging.logWriter permission",
      "Check if the Cloud Logging API is enabled for the project",
      "Check the Cloud Function's IAM policy",
      "Both A and B — verify the logging role and that the API is enabled"
    ],
    correctAnswers: [3],
    explanation: "If no logs appear, both the logging permission and the Logging API status should be checked. The function's service account needs roles/logging.logWriter to write logs, and the Cloud Logging API must be enabled in the project.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 242,
    text: "You want to configure a GKE cluster to use only private nodes (no public IPs on nodes). Which feature should you enable during cluster creation?",
    options: [
      "Authorized networks",
      "Private cluster with private nodes",
      "Network Policy",
      "Intranode visibility"
    ],
    correctAnswers: [1],
    explanation: "Creating a private cluster with private nodes ensures that GKE nodes only receive internal IP addresses. This improves security by preventing direct internet access to nodes. You'll also need to configure a Cloud NAT or proxy for outbound internet access if needed.",
    domain: "Configuring access and security"
  },
  {
    id: 243,
    text: "Your team needs to manage infrastructure across multiple Google Cloud projects consistently. You want to define VPCs, subnets, firewall rules, and IAM policies as code. Which tool should you use?",
    options: [
      "gcloud CLI scripts",
      "Terraform with the Google provider",
      "Cloud Console UI",
      "Deployment Manager (deprecated)"
    ],
    correctAnswers: [1],
    explanation: "Terraform with the Google provider is the recommended Infrastructure as Code tool for managing Google Cloud resources. It supports state management, plan/apply workflows, modules for reusability, and works across multiple projects and providers.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 244,
    text: "You are running a managed instance group behind a load balancer. After a deployment, the health check keeps failing for new instances. The application takes 3 minutes to start but the health check has a 10-second timeout and 30-second interval. What should you adjust?",
    options: [
      "Increase the health check interval to 5 minutes",
      "Configure the health check with a longer initial delay (unhealthy threshold * interval > 3 minutes) to account for startup time",
      "Disable the health check temporarily",
      "Change the application to start faster"
    ],
    correctAnswers: [1],
    explanation: "The initial delay (effectively unhealthy threshold × check interval) must exceed the application's startup time. Increase the unhealthy threshold so that the instance isn't marked unhealthy before it has time to finish starting up.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 245,
    text: "Your organization wants to implement a service account key rotation policy. What is the recommended maximum lifetime for a service account key before rotation?",
    options: [
      "90 days — as recommended by Google Cloud",
      "365 days",
      "No limit — service account keys don't expire",
      "Service account keys should be avoided entirely; use Workload Identity or short-lived credentials instead"
    ],
    correctAnswers: [3],
    explanation: "Google Cloud recommends avoiding user-managed service account keys entirely. Instead, use Workload Identity (for GKE), attached service accounts (for Compute Engine, Cloud Functions), or Workload Identity Federation (for external workloads). If keys are unavoidable, rotate every 90 days.",
    domain: "Configuring access and security"
  },
  {
    id: 246,
    text: "You need to configure a Cloud Run service to connect to a Redis instance in Memorystore. The Redis instance only has a private IP. What must you configure?",
    options: [
      "Enable Cloud Run to connect to external services via the internet",
      "Configure a Serverless VPC Access connector and assign it to the Cloud Run service",
      "Use Cloud SQL Auth Proxy",
      "Give the Redis instance a public IP"
    ],
    correctAnswers: [1],
    explanation: "Cloud Run services need a Serverless VPC Access connector to reach resources with private IPs in your VPC, such as Memorystore Redis instances. The connector bridges the serverless environment to your VPC network.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 247,
    text: "You are performing a canary deployment on GKE. You want to send 5% of traffic to the new version while keeping 95% on the stable version. Both versions run as separate Deployments. Which resource should you use?",
    options: [
      "Kubernetes Service with session affinity",
      "Istio VirtualService with weighted routing",
      "Multiple Services with different ClusterIPs",
      "Pod anti-affinity rules"
    ],
    correctAnswers: [1],
    explanation: "Istio VirtualService supports weighted routing, allowing you to split traffic between different Kubernetes services (backed by different Deployments) at exact percentages. This is the standard approach for canary deployments in Istio-managed clusters.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 248,
    text: "Your application needs to store and retrieve user session data with sub-millisecond latency. Sessions expire after 30 minutes of inactivity. The data doesn't need to persist across server restarts. Which service should you use?",
    options: [
      "Cloud SQL",
      "Cloud Memorystore for Redis with TTL-based key expiration",
      "Cloud Spanner",
      "Firestore"
    ],
    correctAnswers: [1],
    explanation: "Memorystore for Redis provides sub-millisecond latency and supports TTL-based key expiration, perfect for session data that expires after inactivity. Since persistence isn't required, an in-memory cache is the optimal choice.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 249,
    text: "You need to set up alerting for when a Cloud SQL instance's CPU utilization exceeds 90% for more than 10 minutes. Which Cloud Monitoring configuration should you use?",
    options: [
      "Create a metric threshold alerting policy on cloudsql.googleapis.com/database/cpu/utilization with a threshold of 0.9 and a duration of 600 seconds",
      "Create a log-based alert for high CPU",
      "Set up an uptime check against the Cloud SQL instance",
      "Use Cloud SQL Insights only"
    ],
    correctAnswers: [0],
    explanation: "A metric threshold alerting policy on the Cloud SQL CPU utilization metric with a 90% threshold (0.9) and 600-second (10-minute) duration window is the correct configuration. This triggers an alert only when CPU stays above 90% for the full duration.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 250,
    text: "You need to implement a disaster recovery plan for a critical web application. The application uses Compute Engine instances and Cloud SQL. The recovery strategy must provide an RTO of 4 hours and RPO of 1 hour. Which is the most cost-effective approach?",
    options: [
      "Hot standby in another region with continuous replication (active-active)",
      "Warm standby: Cloud SQL cross-region replica + instance templates in the DR region + automated backups",
      "Cold backup: Daily snapshots of disks and Cloud SQL backups, restore in DR region when needed",
      "No DR plan — rely on Google Cloud's built-in redundancy"
    ],
    correctAnswers: [1],
    explanation: "A warm standby approach with Cloud SQL cross-region replicas (near-real-time RPO) and instance templates (quick deployment in DR region, within 4-hour RTO) balances cost and recovery objectives. Hot standby would exceed cost requirements, and cold backup likely wouldn't meet the 4-hour RTO.",
    domain: "Planning and configuring a cloud solution"
  }
];

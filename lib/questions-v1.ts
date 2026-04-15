import { Question } from "./types";

export const questionsV1: Question[] = [
  {
    id: 1,
    text: "Your company has just signed a new contract with Google Cloud. You need to set up the organization hierarchy. The company has three departments: Engineering, Marketing, and Finance. Each department has its own set of projects. What is the recommended approach to organize these resources?",
    options: [
      "Create separate Google Cloud organizations for each department",
      "Create a single organization with folders for each department, and projects within each folder",
      "Create all projects directly under the organization node without folders",
      "Create a single project and use labels to separate department resources"
    ],
    correctAnswers: [1],
    explanation: "The recommended approach is to use a single organization with folders for each department. Folders allow you to group projects and apply IAM policies at the folder level. This provides a clear hierarchy while maintaining centralized management under one organization.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 2,
    text: "You need to grant a contractor temporary access to view Compute Engine instances in a specific project but not modify them. Which IAM role should you assign?",
    options: [
      "roles/compute.admin",
      "roles/viewer",
      "roles/compute.viewer",
      "roles/compute.instanceAdmin.v1"
    ],
    correctAnswers: [2],
    explanation: "roles/compute.viewer grants read-only access to Compute Engine resources. roles/viewer is a basic role that grants read access to all resources in the project, which is too broad. roles/compute.admin and roles/compute.instanceAdmin.v1 both grant write access.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 3,
    text: "Your organization needs to ensure that no one can create resources outside of the us-east1 and europe-west1 regions. What should you do?",
    options: [
      "Create a custom IAM role that restricts region selection",
      "Set up an Organization Policy constraint using Resource Location Restriction",
      "Use VPC firewall rules to block traffic from other regions",
      "Create a Cloud Function that automatically deletes resources created in other regions"
    ],
    correctAnswers: [1],
    explanation: "The Organization Policy Service with the Resource Location Restriction constraint (constraints/gcp.resourceLocations) is the correct way to restrict where resources can be created. This is a preventive control that blocks resource creation in non-allowed locations.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 4,
    text: "You are setting up billing for a new Google Cloud project. Your organization requires that the Engineering team receives alerts when spending exceeds 80% of the monthly budget of $10,000. What should you configure?",
    options: [
      "Create a budget in Cloud Billing with an alert threshold at $8,000 and configure email notifications to the Engineering team",
      "Set up a Cloud Monitoring alert policy based on billing metrics",
      "Create a budget with threshold rules at 80% and link it to a Pub/Sub topic with a Cloud Function to notify the team",
      "Use Billing Export to BigQuery and set up a scheduled query to check spending"
    ],
    correctAnswers: [0],
    explanation: "Creating a budget in Cloud Billing with an alert threshold at 80% ($8,000) and configuring email notifications is the simplest and most direct approach. Billing budgets natively support email alerts to billing admins and specific users.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 5,
    text: "You need to enable the Cloud Storage API and the BigQuery API for a new project using the gcloud CLI. Which command should you use?",
    options: [
      "gcloud services activate storage.googleapis.com bigquery.googleapis.com",
      "gcloud services enable storage.googleapis.com bigquerystorage.googleapis.com",
      "gcloud services enable storage.googleapis.com bigquery.googleapis.com",
      "gcloud apis enable storage.googleapis.com bigquery.googleapis.com"
    ],
    correctAnswers: [2],
    explanation: "The correct command is 'gcloud services enable' followed by the API service names. Note that bigquerystorage.googleapis.com is the BigQuery Storage API, which is a different service. The commands 'activate' and 'gcloud apis' are not valid.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 6,
    text: "A developer needs to use a service account to authenticate a Cloud Function that reads data from Cloud Storage and writes to BigQuery. What is the recommended way to set this up?",
    options: [
      "Create a service account key, download it, and embed it in the Cloud Function code",
      "Use the default App Engine service account for the Cloud Function",
      "Create a dedicated service account with only the necessary roles and assign it to the Cloud Function",
      "Grant the roles to the default Compute Engine service account"
    ],
    correctAnswers: [2],
    explanation: "The recommended practice is to create a dedicated service account with only the minimum necessary permissions and assign it as the Cloud Function's runtime service account. This follows the principle of least privilege.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 7,
    text: "Your application needs to serve static assets globally with low latency. The assets are stored in a Cloud Storage bucket. Which Google Cloud service should you use to distribute this content?",
    options: [
      "Cloud CDN with a backend bucket",
      "Cloud Interconnect",
      "Cloud VPN",
      "Traffic Director"
    ],
    correctAnswers: [0],
    explanation: "Cloud CDN with a backend bucket is the ideal solution for distributing static content globally with low latency. Cloud CDN caches content at Google's edge locations worldwide.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 8,
    text: "You are designing a solution that requires a relational database with strong consistency, horizontal scalability across regions, and 99.999% availability. Which Google Cloud database service should you choose?",
    options: [
      "Cloud SQL for PostgreSQL with read replicas",
      "Cloud Spanner",
      "Cloud Bigtable",
      "Firestore in Native mode"
    ],
    correctAnswers: [1],
    explanation: "Cloud Spanner is the only Google Cloud database that provides a relational database with strong consistency, horizontal scalability, and 99.999% availability with multi-region configurations.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 9,
    text: "Your team is building a containerized microservices application. They want a fully managed platform that handles infrastructure, scaling, and can run containers that respond to HTTP requests. The team does not want to manage clusters. Which service should they use?",
    options: [
      "Google Kubernetes Engine (GKE)",
      "Compute Engine with managed instance groups",
      "Cloud Run",
      "App Engine Flexible environment"
    ],
    correctAnswers: [2],
    explanation: "Cloud Run is a fully managed serverless platform for running containers. It scales automatically (including to zero), handles infrastructure, and supports HTTP requests and events via Eventarc. Unlike GKE, it doesn't require cluster management.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 10,
    text: "You need to estimate the cost of running a Compute Engine instance with 4 vCPUs, 16 GB memory, running 24/7 in us-central1 for one year. Which tool should you use?",
    options: [
      "Cloud Billing Reports",
      "Google Cloud Pricing Calculator",
      "Cost Management dashboard",
      "gcloud compute instances describe"
    ],
    correctAnswers: [1],
    explanation: "The Google Cloud Pricing Calculator is designed to estimate costs before you deploy resources. Cloud Billing Reports show actual past spending, not estimates.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 11,
    text: "You need to move a 50 TB on-premises dataset to Cloud Storage. Your internet connection is 1 Gbps. Which transfer method is most appropriate?",
    options: [
      "Use gsutil cp to copy the data over the internet",
      "Use Transfer Appliance",
      "Use Storage Transfer Service from an on-premises source",
      "Use Cloud Interconnect and then gsutil"
    ],
    correctAnswers: [2],
    explanation: "Storage Transfer Service supports transfers from on-premises sources via an agent and is well-suited for 50 TB at 1 Gbps (~4-5 days). Transfer Appliance is typically for datasets over 100 TB or very limited bandwidth.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 12,
    text: "Your application uses Cloud Memorystore for Redis as a caching layer. During peak traffic, the cache is reaching its memory limit. What should you do to handle this with minimal disruption?",
    options: [
      "Delete the existing instance and create a new one with more memory",
      "Scale up the Memorystore instance to a larger tier",
      "Deploy a second Memorystore instance and implement client-side sharding",
      "Migrate to Cloud Bigtable for caching"
    ],
    correctAnswers: [1],
    explanation: "Cloud Memorystore for Redis supports scaling up (increasing the memory size) of an existing instance with minimal disruption.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 13,
    text: "You need to deploy a Compute Engine instance using the gcloud CLI with a custom machine type of 8 vCPUs and 32 GB memory in the us-central1-a zone. Which command is correct?",
    options: [
      "gcloud compute instances create my-vm --custom-cpu=8 --custom-memory=32GB --zone=us-central1-a",
      "gcloud compute instances create my-vm --machine-type=custom-8-32768 --zone=us-central1-a",
      "gcloud compute instances create my-vm --machine-type=n1-custom-8-32 --zone=us-central1-a",
      "gcloud compute instances deploy my-vm --cpu=8 --memory=32GB --zone=us-central1-a"
    ],
    correctAnswers: [1],
    explanation: "The correct format for custom machine types is custom-[vCPUs]-[memory in MB]. 32 GB = 32,768 MB, so the machine type is custom-8-32768.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 14,
    text: "You have a Docker container image that you need to deploy to Google Kubernetes Engine. The image is stored in a private Docker Hub registry. What must you do before deploying?",
    options: [
      "Nothing — GKE can pull images from any registry by default",
      "Push the image to Artifact Registry and reference it from there",
      "Create a Kubernetes Secret with the Docker Hub credentials and reference it in the pod spec as imagePullSecrets",
      "Configure Cloud NAT to allow GKE to access Docker Hub"
    ],
    correctAnswers: [2],
    explanation: "To pull images from a private external registry like Docker Hub, you need to create a Kubernetes Secret of type docker-registry containing the credentials, and reference it in the pod's imagePullSecrets field.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 15,
    text: "You are deploying a new version of your application on App Engine Standard. You want to gradually shift traffic from the old version to the new version, sending 10% of traffic to the new version first. What should you do?",
    options: [
      "Deploy the new version with --no-promote flag, then use gcloud app services set-traffic to split traffic",
      "Deploy the new version and it will automatically split traffic",
      "Delete the old version and deploy the new version",
      "Use Cloud Load Balancing to split traffic between versions"
    ],
    correctAnswers: [0],
    explanation: "Deploy with --no-promote so it doesn't receive traffic automatically, then use 'gcloud app services set-traffic' with --splits to direct 10% to the new version.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 16,
    text: "You need to create a Cloud Storage bucket that stores objects with automatic deletion after 90 days and moves objects to Nearline storage after 30 days. How should you configure this?",
    options: [
      "Create a bucket with Standard storage class and add lifecycle rules: transition to Nearline after 30 days, delete after 90 days",
      "Create a Nearline bucket and add a lifecycle rule to delete after 90 days",
      "Create two buckets — one Standard and one Nearline — and use a Cloud Function to move objects",
      "Set the bucket's retention policy to 90 days"
    ],
    correctAnswers: [0],
    explanation: "Object Lifecycle Management allows you to define rules based on conditions like age. You can set a SetStorageClass action to Nearline after 30 days and a Delete action after 90 days on the same bucket.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 17,
    text: "You are deploying a Cloud Function (2nd gen) that needs to connect to a Cloud SQL instance using a private IP address. What must you configure?",
    options: [
      "Enable the Cloud SQL Admin API only",
      "Configure a Serverless VPC Access connector and ensure Cloud SQL has a private IP",
      "Use Cloud SQL Auth Proxy in a sidecar container",
      "Whitelist the Cloud Function's IP range in Cloud SQL authorized networks"
    ],
    correctAnswers: [1],
    explanation: "To connect a Cloud Function to Cloud SQL via private IP, you need a Serverless VPC Access connector. This allows the serverless environment to connect to resources in your VPC.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 18,
    text: "You need to deploy a GKE cluster that runs workloads requiring GPU acceleration. Which command correctly creates a node pool with NVIDIA T4 GPUs?",
    options: [
      "gcloud container node-pools create gpu-pool --cluster=my-cluster --accelerator type=nvidia-tesla-t4,count=1 --machine-type=n1-standard-4 --num-nodes=3",
      "gcloud container clusters create my-cluster --enable-gpu --gpu-type=t4",
      "gcloud compute instances create gpu-node --accelerator type=nvidia-tesla-t4",
      "gcloud container node-pools create gpu-pool --cluster=my-cluster --machine-type=a2-highgpu-1g"
    ],
    correctAnswers: [0],
    explanation: "Use 'gcloud container node-pools create' with the --accelerator flag specifying type and count. The a2 machine types are for A100 GPUs. Option C creates a Compute Engine VM, not a GKE node pool.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 19,
    text: "You want to deploy infrastructure as code using Terraform on Google Cloud. You need to store the Terraform state file remotely so your team can collaborate. What is the recommended backend?",
    options: [
      "Store the state file in a local directory shared via NFS",
      "Store the state file in a Cloud Storage bucket with versioning enabled",
      "Store the state file in a Cloud SQL database",
      "Store the state file in a Git repository alongside the Terraform code"
    ],
    correctAnswers: [1],
    explanation: "Google Cloud recommends using a Cloud Storage bucket as the Terraform backend for remote state storage. Enabling versioning provides state file history and recovery options. Storing state in Git is an anti-pattern as it can contain secrets.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 20,
    text: "Your Compute Engine instance is running out of disk space on its boot disk. You need to increase the disk size from 100 GB to 250 GB without downtime. What should you do?",
    options: [
      "Stop the instance, resize the disk, and restart the instance",
      "Create a snapshot, create a new larger disk from the snapshot, and swap the disks",
      "Use gcloud compute disks resize to increase the disk size, then resize the file system within the OS",
      "Add a new 150 GB disk and configure it as an extension of the boot disk"
    ],
    correctAnswers: [2],
    explanation: "You can resize a persistent disk while it's attached to a running instance using 'gcloud compute disks resize'. After resizing, resize the file system within the guest OS. This requires no downtime.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 21,
    text: "You need to set up monitoring for a web application running on GKE. You want to be alerted when the HTTP error rate exceeds 5% of total requests over a 5-minute window. What should you use?",
    options: [
      "Create a Cloud Monitoring alerting policy with a metric ratio condition using the load balancer request count metric filtered by response code",
      "Set up a Cloud Logging metric and create a dashboard",
      "Use GKE built-in health checks only",
      "Write a custom script that queries Cloud Monitoring API and sends emails"
    ],
    correctAnswers: [0],
    explanation: "Cloud Monitoring alerting policies support metric ratio conditions, allowing you to create alerts based on the ratio of error responses to total responses.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 22,
    text: "A production Cloud SQL instance needs to be backed up. You need both automated daily backups and the ability to restore to any point in the last 7 days. What should you configure?",
    options: [
      "Enable automated backups only",
      "Enable automated backups and enable point-in-time recovery (PITR)",
      "Create a Cloud Scheduler job that triggers a Cloud Function to create backups",
      "Export the database to Cloud Storage daily using a cron job"
    ],
    correctAnswers: [1],
    explanation: "Cloud SQL supports both automated backups and point-in-time recovery (PITR). Both must be enabled together to meet the stated requirements.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 23,
    text: "Your team needs to view audit logs showing who created and deleted Compute Engine instances in the last 30 days. Where should they look?",
    options: [
      "Cloud Monitoring metrics explorer",
      "Admin Activity audit logs in Cloud Logging",
      "System Event audit logs in Cloud Logging",
      "VPC Flow Logs"
    ],
    correctAnswers: [1],
    explanation: "Admin Activity audit logs record API calls that modify the configuration or metadata of resources. Creating and deleting instances are administrative operations logged here by default.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 24,
    text: "You are managing a managed instance group (MIG) running a web application. You want to ensure that instances are automatically replaced when they become unhealthy. What should you configure?",
    options: [
      "A Cloud Monitoring uptime check",
      "An autohealing policy with an HTTP health check on the managed instance group",
      "A startup script that restarts the application if it crashes",
      "A Cloud Scheduler job that checks instance health"
    ],
    correctAnswers: [1],
    explanation: "Managed instance groups support autohealing through health checks. When you configure an autohealing policy with an HTTP health check, the MIG automatically recreates instances that fail.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 25,
    text: "Your GKE application's pods keep getting OOMKilled. You need to determine the correct memory requests and limits. Which tool should you use?",
    options: [
      "Kubernetes Dashboard",
      "kubectl top pods",
      "Vertical Pod Autoscaler (VPA) in recommendation mode",
      "Horizontal Pod Autoscaler (HPA)"
    ],
    correctAnswers: [2],
    explanation: "The Vertical Pod Autoscaler (VPA) in recommendation mode analyzes actual resource usage over time and provides recommended values for CPU and memory requests and limits.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 26,
    text: "You need to update a Deployment in GKE to use a new container image with zero downtime. The Deployment currently has 3 replicas. Which update strategy should you use?",
    options: [
      "Recreate strategy",
      "RollingUpdate strategy with maxUnavailable=0 and maxSurge=1",
      "Delete all pods and let the Deployment recreate them",
      "Scale down to 0, update the image, then scale back up"
    ],
    correctAnswers: [1],
    explanation: "RollingUpdate with maxUnavailable=0 and maxSurge=1 ensures zero downtime by creating a new pod before terminating an old one.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 27,
    text: "Your company requires that all data stored in Cloud Storage buckets must be encrypted with customer-managed encryption keys (CMEK). Which service should you use to manage these keys?",
    options: [
      "Cloud IAM",
      "Cloud Key Management Service (Cloud KMS)",
      "Secret Manager",
      "Certificate Authority Service"
    ],
    correctAnswers: [1],
    explanation: "Cloud Key Management Service (Cloud KMS) is the service for creating and managing encryption keys used for CMEK.",
    domain: "Configuring access and security"
  },
  {
    id: 28,
    text: "You need to store database credentials that your application running on Compute Engine will use. The credentials must be rotated regularly and accessed securely. What is the recommended approach?",
    options: [
      "Store the credentials in environment variables on the instance",
      "Store the credentials in a Cloud Storage bucket with restricted access",
      "Use Secret Manager to store the credentials and grant the instance's service account the Secret Accessor role",
      "Hard-code the credentials in the application configuration file"
    ],
    correctAnswers: [2],
    explanation: "Secret Manager is specifically designed for storing, managing, and accessing secrets. It supports versioning for rotation, audit logging, and fine-grained IAM access control.",
    domain: "Configuring access and security"
  },
  {
    id: 29,
    text: "You have a VPC with multiple subnets. You need to allow instances in subnet-a (10.0.1.0/24) to communicate with instances in subnet-b (10.0.2.0/24) on port 443 only. What should you configure?",
    options: [
      "Create a VPC peering connection between the two subnets",
      "Create a firewall rule allowing ingress on port 443 with source range 10.0.1.0/24 and target tag on subnet-b instances",
      "Create a Cloud NAT gateway",
      "Create a separate VPC for each subnet and use Cloud VPN to connect them"
    ],
    correctAnswers: [1],
    explanation: "Within the same VPC, subnets can communicate via firewall rules. Create a VPC firewall rule allowing ingress on port 443 from source 10.0.1.0/24, targeting instances in subnet-b.",
    domain: "Configuring access and security"
  },
  {
    id: 30,
    text: "Your security team wants to ensure that IAM policy changes are reviewed before being applied to production projects. Which approach best supports this requirement?",
    options: [
      "Enable Data Access audit logs",
      "Use Infrastructure as Code (Terraform) to manage IAM bindings, with changes going through a pull request review process",
      "Set up a Cloud Function that reverts any IAM changes automatically",
      "Restrict IAM changes to only the Organization Admin role"
    ],
    correctAnswers: [1],
    explanation: "Managing IAM bindings through Infrastructure as Code with a pull request review process ensures all IAM changes are reviewed, approved, and tracked.",
    domain: "Configuring access and security"
  },
  {
    id: 31,
    text: "A developer in your organization has left the company. They had Owner access to several projects. What steps should you take? (Choose two)",
    options: [
      "Disable their Google Workspace account and remove their IAM bindings from all projects",
      "Only remove their IAM bindings; no need to disable the account",
      "Delete all projects they had access to",
      "Rotate any service account keys they may have created",
      "Do nothing — access is automatically revoked when someone leaves"
    ],
    correctAnswers: [0, 3],
    explanation: "Disable their account (which immediately revokes access) and remove IAM bindings. Additionally, rotate any service account keys they may have created, as these provide persistent access.",
    domain: "Configuring access and security"
  },
  {
    id: 32,
    text: "You want to restrict API access to your Cloud Run service so that only requests from your corporate network (known IP ranges) can reach it. What should you configure?",
    options: [
      "Set the Cloud Run service ingress to 'Internal only' and use Cloud Load Balancing with Cloud Armor to allow only corporate IP ranges",
      "Add a VPC firewall rule to block non-corporate IPs",
      "Use IAM to restrict access to specific user accounts",
      "Set the Cloud Run service to require authentication only"
    ],
    correctAnswers: [0],
    explanation: "Set the Cloud Run service to internal-only ingress, place it behind a Cloud Load Balancer, and use Cloud Armor security policies to allow only corporate IP ranges.",
    domain: "Configuring access and security"
  },
  {
    id: 33,
    text: "Your application needs to make API calls to Google Cloud services from outside Google Cloud. You want to avoid using service account keys. What authentication method should you use?",
    options: [
      "API key",
      "OAuth 2.0 client credentials",
      "Workload Identity Federation",
      "User-managed service account key"
    ],
    correctAnswers: [2],
    explanation: "Workload Identity Federation allows external workloads to access Google Cloud resources without service account keys by exchanging external credentials for short-lived access tokens.",
    domain: "Configuring access and security"
  },
  {
    id: 34,
    text: "Your company wants to export all audit logs to Cloud Storage for long-term compliance (5 years). What should you create?",
    options: [
      "A logs-based metric",
      "A log sink with a Cloud Storage destination and appropriate inclusion filter",
      "A log view restricted to audit logs",
      "A logging bucket with a 5-year retention period"
    ],
    correctAnswers: [1],
    explanation: "A log sink routes log entries to supported destinations including Cloud Storage. Create a sink with an inclusion filter for audit logs, then set a lifecycle policy on the bucket.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 35,
    text: "You need to create a VPC network with two subnets in different regions. Instances in each subnet must be able to communicate. Which type of VPC should you use?",
    options: [
      "Auto mode VPC — subnets are created automatically in each region",
      "Legacy network",
      "Custom mode VPC with subnets in each required region",
      "Two separate VPCs connected with VPC peering"
    ],
    correctAnswers: [2],
    explanation: "A custom mode VPC gives you full control over subnet creation. Within a single VPC, subnets in different regions communicate using internal IPs by default (VPC is a global resource).",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 36,
    text: "Your application running on GKE needs to access a Cloud SQL database. You want to follow security best practices for authentication. What should you use?",
    options: [
      "Cloud SQL Auth Proxy running as a sidecar container with Workload Identity",
      "Store the database password in a ConfigMap",
      "Connect directly using the Cloud SQL public IP with SSL",
      "Use a VPN tunnel between GKE and Cloud SQL"
    ],
    correctAnswers: [0],
    explanation: "Use the Cloud SQL Auth Proxy as a sidecar container combined with Workload Identity for authentication. This avoids managing keys and handles SSL encryption and IAM authentication.",
    domain: "Configuring access and security"
  },
  {
    id: 37,
    text: "You need to run a batch processing job that processes a large dataset once daily. The job takes approximately 2 hours and is fault-tolerant. You want to minimize costs. Which compute option should you use?",
    options: [
      "A standard Compute Engine instance running 24/7",
      "A preemptible/Spot VM Compute Engine instance triggered by Cloud Scheduler",
      "Cloud Run Jobs",
      "A GKE Autopilot cluster with a CronJob"
    ],
    correctAnswers: [1],
    explanation: "Preemptible (or Spot) VMs offer up to 60-91% discount. Since the job is fault-tolerant and runs for only 2 hours daily, this is the most cost-effective option.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 38,
    text: "You deployed a Cloud Function but it's timing out when processing large files from Cloud Storage. The function currently has the default timeout of 60 seconds. What should you do?",
    options: [
      "Increase the Cloud Function timeout to the maximum of 540 seconds (1st gen) or 3600 seconds (2nd gen)",
      "Increase the function's memory allocation only",
      "Switch to a Compute Engine instance",
      "Split the file into smaller chunks before processing"
    ],
    correctAnswers: [0],
    explanation: "Cloud Functions 1st gen support timeouts up to 540 seconds, and 2nd gen up to 3600 seconds. Increasing the timeout is the simplest fix if processing can complete within these limits.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 39,
    text: "Your web application on GKE needs to automatically scale the number of pods based on HTTP requests per second. Which Kubernetes resource should you configure?",
    options: [
      "Vertical Pod Autoscaler targeting CPU",
      "Horizontal Pod Autoscaler with a custom metric from Cloud Monitoring",
      "Cluster Autoscaler",
      "Node auto-provisioning"
    ],
    correctAnswers: [1],
    explanation: "A Horizontal Pod Autoscaler (HPA) with a custom metric (HTTP requests/second from Cloud Monitoring) scales the number of pods. VPA adjusts individual pod resources, not replica count.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 40,
    text: "You need to create a Cloud Storage bucket that ensures no objects can be publicly accessible, regardless of individual object ACLs. What should you enable?",
    options: [
      "Requester Pays",
      "Uniform bucket-level access",
      "Object versioning",
      "Retention policy"
    ],
    correctAnswers: [1],
    explanation: "Uniform bucket-level access disables object ACLs and uses only bucket-level IAM policies for access control. This prevents any individual object from being made public via ACLs.",
    domain: "Configuring access and security"
  },
  {
    id: 41,
    text: "A new team member needs to configure gcloud on their workstation to work with multiple projects. What should they do?",
    options: [
      "Use gcloud init for the first project only and manually change the project ID each time",
      "Create named configurations using gcloud config configurations create for each project",
      "Install separate instances of the Cloud SDK for each project",
      "Use only the Cloud Console instead of gcloud"
    ],
    correctAnswers: [1],
    explanation: "Named configurations in gcloud allow you to create separate profiles for different projects, accounts, and settings. Switch between them using 'gcloud config configurations activate'.",
    domain: "Setting up a cloud solution environment"
  },
  {
    id: 42,
    text: "Your application writes data to Cloud Pub/Sub, and a subscriber processes these messages. Some messages are being processed more than once. How should you handle this?",
    options: [
      "Switch from Pub/Sub to a direct HTTP call",
      "Implement idempotent message processing in the subscriber using a message deduplication strategy",
      "Increase the acknowledgment deadline",
      "Reduce the number of subscriber instances to 1"
    ],
    correctAnswers: [1],
    explanation: "Cloud Pub/Sub guarantees at-least-once delivery, so duplicates are possible. Make your subscriber idempotent by tracking processed message IDs.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 43,
    text: "You need to configure a load balancer for a global web application on Compute Engine in multiple regions. The app serves HTTPS traffic and you want automatic failover. Which type should you use?",
    options: [
      "Regional external passthrough Network Load Balancer",
      "Global external Application Load Balancer (HTTP/S)",
      "Internal passthrough Network Load Balancer",
      "Regional internal Application Load Balancer"
    ],
    correctAnswers: [1],
    explanation: "A Global external Application Load Balancer distributes traffic globally, supports HTTPS termination, and provides automatic failover between regions using Google's anycast IP infrastructure.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 44,
    text: "You are troubleshooting a connectivity issue between two VMs in different VPCs connected via VPC peering. VM-A can ping VM-B, but VM-B cannot reach VM-A. What is the most likely cause?",
    options: [
      "VPC peering is unidirectional and needs to be configured in both directions",
      "The firewall rules in VPC-A are blocking ingress traffic from VPC-B's IP range",
      "VPC peering does not support ICMP traffic",
      "You need to configure routes manually for peered VPCs"
    ],
    correctAnswers: [1],
    explanation: "VPC peering exchanges routes but firewall rules still apply independently in each VPC. If VM-B can't reach VM-A, VPC-A's firewall rules likely don't allow ingress from VPC-B's IP range.",
    domain: "Ensuring successful operation of a cloud solution"
  },
  {
    id: 45,
    text: "You need to scan Cloud Storage buckets for PII like social security numbers and credit card numbers. Which service should you use?",
    options: [
      "Cloud Security Scanner",
      "Sensitive Data Protection (Cloud DLP)",
      "Cloud Armor",
      "Binary Authorization"
    ],
    correctAnswers: [1],
    explanation: "Sensitive Data Protection (formerly Cloud DLP) discovers, classifies, and protects sensitive data. It can scan Cloud Storage, BigQuery, and Datastore for PII.",
    domain: "Configuring access and security"
  },
  {
    id: 46,
    text: "You are running a stateful application on GKE that requires persistent storage with ReadWriteOnce access and SSD performance. What should you use?",
    options: [
      "emptyDir volume",
      "PersistentVolumeClaim with a Compute Engine Persistent Disk (pd-ssd) StorageClass",
      "ConfigMap mounted as a volume",
      "NFS server running on a Compute Engine instance"
    ],
    correctAnswers: [1],
    explanation: "A PersistentVolumeClaim backed by pd-ssd StorageClass provides persistent, SSD-performance storage with ReadWriteOnce access. emptyDir is ephemeral and lost when the pod is deleted.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 47,
    text: "Your company's security policy requires that all Compute Engine VMs must not have external IP addresses. How can you enforce this across the organization?",
    options: [
      "Remove the External IP Address role from all users",
      "Set an Organization Policy constraint: constraints/compute.vmExternalIpAccess with denied values for all projects",
      "Delete all external IP addresses in the project",
      "Configure the default VPC to not assign external IPs"
    ],
    correctAnswers: [1],
    explanation: "The Organization Policy constraint compute.vmExternalIpAccess controls which VMs can have external IPs. Setting it to deny all at the organization level is a preventive, org-wide control.",
    domain: "Configuring access and security"
  },
  {
    id: 48,
    text: "You are designing a disaster recovery strategy for a critical application using Cloud SQL (PostgreSQL). You need an RPO of less than 1 minute and an RTO of less than 5 minutes. What configuration should you use?",
    options: [
      "Daily automated backups",
      "Cross-region read replica with automatic failover promotion",
      "Point-in-time recovery with binary log retention",
      "Export to Cloud Storage every hour"
    ],
    correctAnswers: [1],
    explanation: "A cross-region read replica with automatic failover provides near-zero RPO and very low RTO, meeting the <1 minute RPO and <5 minute RTO requirements.",
    domain: "Planning and configuring a cloud solution"
  },
  {
    id: 49,
    text: "You need to run a complex data pipeline that involves extracting data from Cloud Storage, transforming it, and loading it into BigQuery. The pipeline has task dependencies. Which service should you use?",
    options: [
      "Cloud Scheduler with Cloud Functions",
      "Cloud Composer (managed Apache Airflow)",
      "Cloud Run Jobs",
      "Dataproc Serverless"
    ],
    correctAnswers: [1],
    explanation: "Cloud Composer (managed Apache Airflow) is designed for orchestrating complex data pipelines with task dependencies, scheduling, monitoring, and error handling.",
    domain: "Deploying and implementing a cloud solution"
  },
  {
    id: 50,
    text: "You need to give a third-party vendor temporary access to a specific Cloud Storage bucket for 24 hours. The vendor does not have a Google account. What is the most secure approach?",
    options: [
      "Make the bucket publicly accessible for 24 hours",
      "Create a Google account for the vendor and grant them access",
      "Generate a signed URL with a 24-hour expiration for the specific objects",
      "Share a service account key with the vendor"
    ],
    correctAnswers: [2],
    explanation: "Signed URLs provide time-limited access to specific Cloud Storage objects without requiring a Google account or any Google Cloud permissions.",
    domain: "Configuring access and security"
  }
];

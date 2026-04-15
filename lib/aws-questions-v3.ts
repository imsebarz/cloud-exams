import { Question } from "./types";

export const awsQuestionsV3: Question[] = [
  {
    id: 2201,
    text: "A company wants to monitor the health of specific AWS services they depend on. Which AWS service should they use to get real-time notifications about service disruptions?",
    options: [
      "AWS Personal Health Dashboard",
      "AWS Service Health Dashboard",
      "Amazon CloudWatch",
      "AWS Systems Manager"
    ],
    correctAnswers: [1],
    explanation: "The AWS Service Health Dashboard shows the health of AWS services and regions that affect all customers. The Personal Health Dashboard shows events that specifically impact your account.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2202,
    text: "An organization needs to manage patches for their EC2 instances across multiple regions. Which AWS service provides automated patch management?",
    options: [
      "AWS Config",
      "AWS Systems Manager Patch Manager",
      "AWS Backup",
      "Amazon Inspector"
    ],
    correctAnswers: [1],
    explanation: "AWS Systems Manager Patch Manager automates the process of patching managed nodes (EC2 instances and on-premises servers) with operating system and application patches.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2203,
    text: "Which of the following are valid use cases for Amazon ElastiCache? (Select TWO)",
    options: [
      "Storing long-term archived data",
      "Caching frequently accessed data to reduce database load",
      "Real-time leaderboards and counters",
      "Disaster recovery backup storage"
    ],
    correctAnswers: [1, 2],
    explanation: "ElastiCache is an in-memory cache service that improves application performance by caching frequently accessed data and enables low-latency operations like real-time leaderboards. It is not designed for long-term storage or disaster recovery backups.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2204,
    text: "A company has data centers that need on-premises AWS computing capabilities. Which AWS solution allows them to run AWS services locally at their facility?",
    options: [
      "AWS Wavelength",
      "AWS Outposts",
      "AWS Local Zones",
      "AWS Direct Connect"
    ],
    correctAnswers: [1],
    explanation: "AWS Outposts is a fully managed service that extends AWS infrastructure, services, and tools to virtually any data center, co-location space, or on-premises facility.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2205,
    text: "An organization needs to migrate petabytes of data to AWS with minimal network bandwidth impact. Which AWS Snow Family device should they use?",
    options: [
      "AWS Snowcone",
      "AWS Snowball",
      "AWS Snowmobile",
      "AWS DataSync"
    ],
    correctAnswers: [2],
    explanation: "AWS Snowmobile is a data migration device that can transfer up to 100 petabytes of data and is ideal for massive data migration projects. Snowcone and Snowball are smaller capacity devices.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2206,
    text: "A startup is building a real-time gaming application that needs to process millions of events per second with low latency. Which AWS service is most suitable?",
    options: [
      "Amazon Kinesis Data Streams",
      "Amazon SQS",
      "AWS Lambda",
      "Amazon SNS"
    ],
    correctAnswers: [0],
    explanation: "Amazon Kinesis Data Streams is designed for real-time data processing at scale with low latency, making it ideal for high-throughput event streaming applications.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2207,
    text: "What is the primary difference between AWS Systems Manager Parameter Store and AWS Secrets Manager?",
    options: [
      "Parameter Store is for database credentials only",
      "Secrets Manager automatically rotates secrets, while Parameter Store does not",
      "Parameter Store is more expensive",
      "Secrets Manager cannot store configuration data"
    ],
    correctAnswers: [1],
    explanation: "Both services store sensitive data, but AWS Secrets Manager is specifically designed for secrets with automatic rotation capabilities, while Parameter Store is better for configuration data and simpler secrets.",
    domain: "Security and Compliance"
  },
  {
    id: 2208,
    text: "Which AWS networking service allows a company to privately access AWS services without exposing traffic to the internet?",
    options: [
      "VPC Peering",
      "AWS PrivateLink",
      "AWS Transit Gateway",
      "Amazon CloudFront"
    ],
    correctAnswers: [1],
    explanation: "AWS PrivateLink provides private connectivity to AWS services and third-party services without exposing the traffic to the internet.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2209,
    text: "An organization uses multiple VPCs and needs a centralized way to manage network connectivity. Which AWS service should they use?",
    options: [
      "VPC Peering",
      "AWS Transit Gateway",
      "AWS Direct Connect",
      "Amazon VPC Flow Logs"
    ],
    correctAnswers: [1],
    explanation: "AWS Transit Gateway is a hub-and-spoke model that simplifies network architecture by allowing you to connect multiple VPCs and on-premises networks through a central point.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2210,
    text: "A company wants to containerize a simple web application without managing any infrastructure. Which AWS service is most appropriate?",
    options: [
      "Amazon ECS with EC2",
      "AWS Fargate",
      "Amazon EKS",
      "AWS Beanstalk"
    ],
    correctAnswers: [1],
    explanation: "AWS Fargate is a serverless container service that allows you to run containers without managing the underlying EC2 instances.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2211,
    text: "Which AWS service allows developers to run containerized applications without managing containers or orchestration?",
    options: [
      "Amazon App Runner",
      "Amazon ECR",
      "AWS CodePipeline",
      "AWS CloudFormation"
    ],
    correctAnswers: [0],
    explanation: "AWS App Runner is a fully managed service that makes it easy to build and deploy web applications and APIs from source code or container images with minimal configuration.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2212,
    text: "What is the primary purpose of Amazon ECR?",
    options: [
      "Running containerized applications",
      "Storing and managing Docker container images",
      "Orchestrating container deployments",
      "Monitoring container performance"
    ],
    correctAnswers: [1],
    explanation: "Amazon Elastic Container Registry (ECR) is a fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2213,
    text: "A company wants to use AWS services through the AWS Marketplace. Which of the following can they purchase through the Marketplace? (Select TWO)",
    options: [
      "Third-party software licenses",
      "AWS support plans",
      "Pre-configured AMIs",
      "Reserved Instances only"
    ],
    correctAnswers: [0, 2],
    explanation: "AWS Marketplace offers third-party software, AMIs, CloudFormation templates, and other products. AWS support plans and Reserved Instances are purchased separately.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2214,
    text: "Which AWS service enables real-time interactive business analytics on large datasets?",
    options: [
      "Amazon Athena",
      "AWS Glue",
      "Amazon QuickSight",
      "Amazon Redshift"
    ],
    correctAnswers: [2],
    explanation: "Amazon QuickSight is a business analytics service that enables fast, easy-to-use data visualization and interactive dashboards for analyzing data in real-time.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2215,
    text: "A company needs to search and analyze application logs and machine-generated data. Which service should they use?",
    options: [
      "Amazon CloudWatch Logs",
      "Amazon OpenSearch",
      "AWS CloudTrail",
      "Amazon Kinesis"
    ],
    correctAnswers: [1],
    explanation: "Amazon OpenSearch (formerly Elasticsearch) is a managed service for searching, analyzing, and visualizing large volumes of data including logs and machine-generated data.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2216,
    text: "Which AWS service helps organizations manage software licenses across their AWS infrastructure?",
    options: [
      "AWS Config",
      "AWS License Manager",
      "AWS Compute Optimizer",
      "AWS Systems Manager"
    ],
    correctAnswers: [1],
    explanation: "AWS License Manager helps organizations track, manage, and optimize software licenses across their AWS resources to reduce compliance risk and license costs.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2217,
    text: "What is the primary benefit of using resource tagging and AWS Resource Groups?",
    options: [
      "Automatically scales resources based on demand",
      "Reduces AWS service costs by 50%",
      "Organizes and manages resources based on tags for easier tracking and governance",
      "Provides backup and disaster recovery"
    ],
    correctAnswers: [2],
    explanation: "AWS Resource Groups use tags to organize and manage related resources together, enabling better organization, cost allocation, and governance across your AWS infrastructure.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2218,
    text: "Which AWS service provides distributed tracing and visualization of requests across microservices?",
    options: [
      "AWS CloudWatch",
      "AWS X-Ray",
      "AWS CloudTrail",
      "Amazon EventBridge"
    ],
    correctAnswers: [1],
    explanation: "AWS X-Ray helps developers analyze and debug production, distributed applications by providing insights into how requests flow through your application.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2219,
    text: "What is AWS CloudShell used for?",
    options: [
      "Hosting web applications",
      "Providing a browser-based shell environment to manage AWS resources",
      "Storing application data",
      "Managing on-premises servers"
    ],
    correctAnswers: [1],
    explanation: "AWS CloudShell is a browser-based shell environment that provides AWS CLI, AWS Tools for PowerShell, and other tools pre-installed for managing AWS resources.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2220,
    text: "A company has hundreds of customer documents with handwritten text and needs to extract data. Which AWS service should they use?",
    options: [
      "Amazon Transcribe",
      "Amazon Translate",
      "Amazon Textract",
      "Amazon Kendra"
    ],
    correctAnswers: [2],
    explanation: "Amazon Textract uses machine learning to extract text and data from scanned documents, forms, and handwritten text without manual data entry.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2221,
    text: "Which AWS service converts spoken language into text?",
    options: [
      "Amazon Translate",
      "Amazon Transcribe",
      "Amazon Polly",
      "Amazon Kendra"
    ],
    correctAnswers: [1],
    explanation: "Amazon Transcribe is an automatic speech recognition service that converts spoken language in audio files into text.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2222,
    text: "A company needs to translate documents into multiple languages. Which service should they use?",
    options: [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Translate",
      "Amazon Comprehend"
    ],
    correctAnswers: [2],
    explanation: "Amazon Translate is a neural machine translation service that delivers fast, high-quality, and affordable language translation.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2223,
    text: "Which AWS service helps users search through large document repositories and find relevant information?",
    options: [
      "Amazon Textract",
      "Amazon Kendra",
      "Amazon Athena",
      "Amazon QuickSight"
    ],
    correctAnswers: [1],
    explanation: "Amazon Kendra is a machine learning-powered search service that delivers relevant results from enterprise content sources, helping users find information quickly.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2224,
    text: "A development team wants to build and deploy web applications without managing servers or containers. Which service is most suitable?",
    options: [
      "AWS Amplify",
      "Amazon EC2",
      "AWS Beanstalk",
      "Amazon S3"
    ],
    correctAnswers: [0],
    explanation: "AWS Amplify provides a set of tools and services to build secure, scalable web and mobile applications with minimal backend effort and automatic deployment.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2225,
    text: "Which AWS service is used to create and manage REST and WebSocket APIs?",
    options: [
      "AWS AppSync",
      "Amazon API Gateway",
      "AWS Lambda",
      "Amazon CloudFront"
    ],
    correctAnswers: [1],
    explanation: "Amazon API Gateway enables developers to create, publish, and manage REST and WebSocket APIs at any scale with security and performance.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2226,
    text: "What is the primary focus of the Sustainability pillar in the AWS Well-Architected Framework?",
    options: [
      "Reducing application latency",
      "Minimizing environmental impact and energy consumption",
      "Increasing application availability",
      "Improving security posture"
    ],
    correctAnswers: [1],
    explanation: "The Sustainability pillar focuses on environmental responsibility, including reducing energy consumption, minimizing carbon footprint, and improving operational efficiency.",
    domain: "Cloud Concepts"
  },
  {
    id: 2227,
    text: "Which of the following are hardware technologies that improve AWS performance? (Select TWO)",
    options: [
      "AWS Nitro System",
      "AWS Graviton processors",
      "AWS Global Accelerator",
      "AWS CloudFront"
    ],
    correctAnswers: [0, 1],
    explanation: "AWS Nitro System and AWS Graviton processors are custom hardware technologies that improve EC2 instance performance, security, and efficiency.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2228,
    text: "An organization needs to monitor and evaluate their AWS environment against security and compliance best practices. Which service provides automated checks?",
    options: [
      "AWS Config Rules",
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "AWS Security Hub"
    ],
    correctAnswers: [0],
    explanation: "AWS Config Rules provides automated compliance checking against desired configurations and best practices in your AWS environment.",
    domain: "Security and Compliance"
  },
  {
    id: 2229,
    text: "What is AWS CloudTrail Insights used for?",
    options: [
      "Detecting unusual API activity",
      "Monitoring application performance",
      "Creating backups of resources",
      "Managing encryption keys"
    ],
    correctAnswers: [0],
    explanation: "AWS CloudTrail Insights automatically detects unusual API activity and potential security incidents in your AWS account.",
    domain: "Security and Compliance"
  },
  {
    id: 2230,
    text: "Which AWS service helps investigate and analyze security incidents across AWS resources?",
    options: [
      "Amazon GuardDuty",
      "AWS Security Hub",
      "Amazon Detective",
      "AWS Audit Manager"
    ],
    correctAnswers: [2],
    explanation: "Amazon Detective helps security teams investigate potential security incidents by analyzing and visualizing data from AWS services to understand what happened.",
    domain: "Security and Compliance"
  },
  {
    id: 2231,
    text: "Which service helps organizations prepare for audits by collecting and managing audit evidence?",
    options: [
      "AWS CloudTrail",
      "AWS Security Hub",
      "AWS Audit Manager",
      "AWS Config"
    ],
    correctAnswers: [2],
    explanation: "AWS Audit Manager helps organizations prepare for audits by automating the collection of audit evidence and managing compliance requirements.",
    domain: "Security and Compliance"
  },
  {
    id: 2232,
    text: "What is AWS re:Post primarily used for?",
    options: [
      "Publishing AWS documentation",
      "Community-driven Q&A and knowledge sharing about AWS",
      "Creating AWS support tickets",
      "Purchasing AWS services"
    ],
    correctAnswers: [1],
    explanation: "AWS re:Post is a community platform where AWS users ask questions, share knowledge, and get answers from AWS experts and the community.",
    domain: "Cloud Concepts"
  },
  {
    id: 2233,
    text: "Which AWS service connects customers with AWS experts to help with architecture and implementation?",
    options: [
      "AWS Support",
      "AWS IQ",
      "AWS re:Post",
      "AWS Marketplace"
    ],
    correctAnswers: [1],
    explanation: "AWS IQ connects customers with qualified AWS experts for on-demand help with architecture, implementation, and other AWS-related tasks.",
    domain: "Cloud Concepts"
  },
  {
    id: 2234,
    text: "How do AWS Managed Grafana and AWS Managed Prometheus work together?",
    options: [
      "Grafana provides alerting while Prometheus provides monitoring",
      "Prometheus collects metrics and Grafana visualizes them",
      "They are the same service with different names",
      "Prometheus backs up data while Grafana restores it"
    ],
    correctAnswers: [1],
    explanation: "AWS Managed Prometheus provides metrics collection and storage, while AWS Managed Grafana provides visualization and dashboarding of those metrics.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2235,
    text: "What does the AWS Serverless Application Model (SAM) primarily help developers do?",
    options: [
      "Deploy pre-built applications from AWS Marketplace",
      "Build, test, and deploy serverless applications",
      "Create virtual machines with Lambda",
      "Manage on-premises databases"
    ],
    correctAnswers: [1],
    explanation: "AWS SAM is an open-source framework that simplifies building, testing, and deploying serverless applications including Lambda functions, API Gateway, and other services.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2236,
    text: "A company wants to cache frequently accessed data from a database to improve performance. Which ElastiCache node type would provide both high availability and read scaling?",
    options: [
      "Memcached cluster mode",
      "Redis with cluster mode enabled",
      "Redis without cluster mode",
      "Memcached with Multi-AZ"
    ],
    correctAnswers: [1],
    explanation: "Redis with cluster mode enabled provides both high availability through replication and horizontal scaling through multiple shards, making it ideal for caching with read scaling.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2237,
    text: "Which of the following scenarios are suitable for using AWS Wavelength? (Select TWO)",
    options: [
      "Running 5G edge applications with ultra-low latency",
      "Processing data in a traditional data center",
      "Deploying media and entertainment applications at the edge",
      "Storing long-term archived files"
    ],
    correctAnswers: [0, 2],
    explanation: "AWS Wavelength extends AWS computing and storage capabilities to the edge of 5G networks, making it suitable for ultra-low latency applications and edge computing scenarios.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2238,
    text: "A company is transferring 50 terabytes of data to AWS. Which Snow Family device is most cost-effective?",
    options: [
      "AWS Snowcone",
      "AWS Snowball",
      "AWS Snowmobile",
      "AWS DataSync"
    ],
    correctAnswers: [1],
    explanation: "AWS Snowball is the most cost-effective option for transferring 50 TB of data, as Snowcone is limited to 8 TB and Snowmobile is overkill for this volume.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2239,
    text: "Which networking configuration allows two VPCs to communicate directly without going through the internet?",
    options: [
      "VPC Endpoint",
      "VPC Peering",
      "Internet Gateway",
      "NAT Gateway"
    ],
    correctAnswers: [1],
    explanation: "VPC Peering enables private connectivity between two VPCs without exposing traffic to the internet or requiring complex networking setup.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2240,
    text: "What is a key advantage of using AWS Systems Manager Session Manager over SSH/RDP?",
    options: [
      "It is faster than traditional protocols",
      "It requires no open inbound ports and provides auditable access",
      "It automatically scales EC2 instances",
      "It manages database credentials"
    ],
    correctAnswers: [1],
    explanation: "AWS Systems Manager Session Manager provides browser-based shell access without requiring inbound security group rules, and all sessions are logged for audit compliance.",
    domain: "Security and Compliance"
  },
  {
    id: 2241,
    text: "Which of the following are benefits of using AWS Kinesis Firehose instead of Kinesis Data Streams? (Select TWO)",
    options: [
      "Lower latency for real-time processing",
      "Automatic data transformation capabilities",
      "No ongoing maintenance required",
      "Better for live video streaming"
    ],
    correctAnswers: [1, 2],
    explanation: "Kinesis Firehose automatically delivers data to destinations like S3, Redshift, and Splunk with minimal management overhead, and can transform data automatically. However, it has higher latency than Data Streams.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2242,
    text: "A company needs to establish a dedicated network connection to AWS with consistent bandwidth and reduced latency. Which service should they use?",
    options: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "VPC Endpoint"
    ],
    correctAnswers: [1],
    explanation: "AWS Direct Connect provides a dedicated physical network connection to AWS with consistent performance and lower latency compared to VPN connections.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2243,
    text: "What is the main difference between AWS Personal Health Dashboard and AWS Service Health Dashboard in terms of information provided?",
    options: [
      "Personal Health Dashboard provides global AWS service status while Service Health Dashboard is account-specific",
      "Service Health Dashboard shows issues affecting your account while Personal Health Dashboard shows all AWS services",
      "Personal Health Dashboard is only for enterprise customers",
      "They provide identical information from different interfaces"
    ],
    correctAnswers: [1],
    explanation: "The Service Health Dashboard shows the status of all AWS services globally, while the Personal Health Dashboard displays events that specifically impact your AWS account and resources.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2244,
    text: "Which AWS service allows organizations to apply preventive policies and guardrails across multiple AWS accounts?",
    options: [
      "AWS Config",
      "IAM Identity Center",
      "AWS Control Tower Service Control Policies",
      "Amazon Detective"
    ],
    correctAnswers: [2],
    explanation: "Service Control Policies (SCPs) in AWS Control Tower allow organizations to define and enforce permissions across all member accounts as preventive controls.",
    domain: "Security and Compliance"
  },
  {
    id: 2245,
    text: "A company uses Amazon Kinesis Data Streams and needs to ingest this data into a data warehouse daily. Which service should they use?",
    options: [
      "AWS Lambda",
      "Amazon Kinesis Data Firehose",
      "AWS Glue",
      "Amazon Redshift Spectrum"
    ],
    correctAnswers: [1],
    explanation: "Amazon Kinesis Firehose automatically captures and loads data from Kinesis Data Streams into data warehouses like Redshift on a scheduled basis.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2246,
    text: "Which statement accurately describes the relationship between AWS Outposts and AWS Wavelength?",
    options: [
      "They are the same service with different names",
      "Outposts extend AWS to on-premises data centers while Wavelength extends AWS to 5G networks",
      "Wavelength is used for cost optimization while Outposts are for security",
      "Both services require internet connectivity to AWS regions"
    ],
    correctAnswers: [1],
    explanation: "AWS Outposts brings AWS infrastructure to on-premises facilities, while AWS Wavelength extends AWS to 5G edge networks for low-latency applications.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2247,
    text: "What does AWS Systems Manager Parameter Store provide that helps with configuration management?",
    options: [
      "Automatic secret rotation",
      "Centralized storage and retrieval of configuration parameters and encrypted secrets",
      "Real-time application monitoring",
      "Automated patching of all EC2 instances"
    ],
    correctAnswers: [1],
    explanation: "AWS Systems Manager Parameter Store provides a secure, scalable, and centralized way to store and manage configuration data and encrypted secrets that applications can reference.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2248,
    text: "Which of the following are advantages of using containerized applications with AWS Fargate? (Select TWO)",
    options: [
      "You still need to manage EC2 instances",
      "You pay only for the compute resources you use",
      "Automatic scaling based on demand",
      "Lower cost compared to all other compute options"
    ],
    correctAnswers: [1, 2],
    explanation: "Fargate is serverless, so you don't manage EC2 instances, you pay only for the resources your containers consume, and it automatically scales. However, it may not always be the lowest cost option.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2249,
    text: "A company wants to use open-source Prometheus for monitoring but without managing the infrastructure. Which AWS service should they choose?",
    options: [
      "Amazon CloudWatch",
      "AWS Managed Prometheus",
      "AWS Managed Grafana",
      "Amazon QuickSight"
    ],
    correctAnswers: [1],
    explanation: "AWS Managed Prometheus is a fully managed Prometheus-compatible service that handles monitoring without requiring infrastructure management.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2250,
    text: "An organization wants to visualize metrics collected from AWS Managed Prometheus and other sources. Which service should they use?",
    options: [
      "Amazon CloudWatch Dashboards",
      "Amazon QuickSight",
      "AWS Managed Grafana",
      "Amazon OpenSearch"
    ],
    correctAnswers: [2],
    explanation: "AWS Managed Grafana provides visualization and dashboarding capabilities for metrics from AWS Managed Prometheus and other monitoring sources.",
    domain: "Cloud Technology and Services"
  }
];

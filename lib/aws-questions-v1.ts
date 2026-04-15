import { Question } from "./types";

export const awsQuestionsV1: Question[] = [
  {
    id: 2001,
    text: "Which AWS service provides a virtual server in the cloud?",
    options: [
      "Amazon S3",
      "Amazon EC2",
      "AWS Lambda",
      "Amazon RDS"
    ],
    correctAnswers: [0 + 1],
    explanation: "Amazon EC2 (Elastic Compute Cloud) provides resizable virtual servers (instances) in the cloud. S3 is object storage, Lambda is serverless compute, and RDS is a managed relational database service.",
    domain: "Cloud Concepts"
  },
  {
    id: 2002,
    text: "What are the benefits of using AWS Cloud? (Choose two)",
    options: [
      "Fixed monthly costs regardless of usage",
      "Trade capital expense for variable expense",
      "Benefit from massive economies of scale",
      "Maintain physical access to data center hardware",
      "Increased time to deploy new applications"
    ],
    correctAnswers: [1, 2],
    explanation: "Two key benefits of cloud computing are trading upfront capital expense for variable operational expense (pay-as-you-go) and benefiting from massive economies of scale that reduce per-unit costs. AWS lists six advantages of cloud computing.",
    domain: "Cloud Concepts"
  },
  {
    id: 2003,
    text: "Which pillar of the AWS Well-Architected Framework focuses on the ability to run workloads effectively and gain insights into operations?",
    options: [
      "Security",
      "Reliability",
      "Operational Excellence",
      "Performance Efficiency"
    ],
    correctAnswers: [2],
    explanation: "Operational Excellence focuses on running and monitoring systems to deliver business value and continuously improving processes and procedures. It includes automating changes, responding to events, and defining standards.",
    domain: "Cloud Concepts"
  },
  {
    id: 2004,
    text: "A company wants to run a workload for a few hours once a quarter and pay only for the compute time used. Which AWS service should they use?",
    options: [
      "Amazon EC2 Reserved Instances",
      "Amazon EC2 Dedicated Hosts",
      "AWS Lambda",
      "Amazon EC2 On-Demand Instances"
    ],
    correctAnswers: [2],
    explanation: "AWS Lambda charges only for the compute time consumed — there is no charge when code is not running. For short, infrequent workloads, Lambda is the most cost-effective option. On-Demand would also work but Lambda's per-invocation pricing is more efficient for brief jobs.",
    domain: "Cloud Concepts"
  },
  {
    id: 2005,
    text: "What does the AWS Shared Responsibility Model define?",
    options: [
      "How AWS and customers share the total bill for cloud services",
      "The security responsibilities that AWS manages versus those the customer manages",
      "How AWS distributes resources across Availability Zones",
      "The pricing model for AWS services"
    ],
    correctAnswers: [1],
    explanation: "The Shared Responsibility Model defines that AWS is responsible for security 'of' the cloud (infrastructure, hardware, software, networking) while customers are responsible for security 'in' the cloud (data, access management, OS patching, encryption).",
    domain: "Security and Compliance"
  },
  {
    id: 2006,
    text: "Which AWS service provides managed DDoS protection for applications?",
    options: [
      "AWS WAF",
      "AWS Shield",
      "Amazon GuardDuty",
      "AWS Firewall Manager"
    ],
    correctAnswers: [1],
    explanation: "AWS Shield provides DDoS protection. Shield Standard is automatically included at no extra cost, and Shield Advanced provides enhanced protection with 24/7 access to the AWS DDoS Response Team. WAF protects against web exploits, not specifically DDoS.",
    domain: "Security and Compliance"
  },
  {
    id: 2007,
    text: "A company needs to encrypt data at rest in Amazon S3. Which feature provides this?",
    options: [
      "S3 Versioning",
      "S3 Server-Side Encryption (SSE)",
      "S3 Lifecycle Policies",
      "S3 Cross-Region Replication"
    ],
    correctAnswers: [1],
    explanation: "S3 Server-Side Encryption (SSE) encrypts data at rest. Options include SSE-S3 (Amazon-managed keys), SSE-KMS (AWS KMS keys), and SSE-C (customer-provided keys). As of January 2023, all new S3 objects are encrypted by default with SSE-S3.",
    domain: "Security and Compliance"
  },
  {
    id: 2008,
    text: "Under the Shared Responsibility Model, which of the following is the customer's responsibility?",
    options: [
      "Physical security of data centers",
      "Patching the hypervisor",
      "Configuring security groups and NACLs",
      "Maintaining the global network infrastructure"
    ],
    correctAnswers: [2],
    explanation: "Configuring security groups and Network ACLs (NACLs) is the customer's responsibility. Customers configure these to control network access to their resources. AWS manages the physical infrastructure, hypervisor, and global network.",
    domain: "Security and Compliance"
  },
  {
    id: 2009,
    text: "Which AWS service helps you assess, audit, and evaluate the configurations of your AWS resources for compliance?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon Inspector",
      "AWS Trusted Advisor"
    ],
    correctAnswers: [1],
    explanation: "AWS Config continuously monitors and records your AWS resource configurations and allows you to evaluate them against desired configurations using Config Rules. CloudTrail logs API calls. Inspector assesses application security. Trusted Advisor provides best practice recommendations.",
    domain: "Security and Compliance"
  },
  {
    id: 2010,
    text: "What is the principle of least privilege?",
    options: [
      "All users should have the same level of access to simplify management",
      "Users should be granted only the minimum permissions needed to perform their tasks",
      "Only the root account should have any permissions",
      "Permissions should be granted at the AWS Organization level only"
    ],
    correctAnswers: [1],
    explanation: "The principle of least privilege means granting only the minimum permissions necessary for a user, role, or service to perform their required tasks. This reduces the attack surface and limits the potential impact of credential compromise.",
    domain: "Security and Compliance"
  },
  {
    id: 2011,
    text: "Which service allows you to create and manage encryption keys used to encrypt your data across AWS services?",
    options: [
      "AWS Secrets Manager",
      "AWS Key Management Service (KMS)",
      "AWS Certificate Manager",
      "Amazon Cognito"
    ],
    correctAnswers: [1],
    explanation: "AWS KMS lets you create and control encryption keys used to encrypt data. It integrates with most AWS services. Secrets Manager stores secrets like passwords, Certificate Manager manages SSL/TLS certificates, and Cognito provides user authentication.",
    domain: "Security and Compliance"
  },
  {
    id: 2012,
    text: "What is an AWS Region?",
    options: [
      "A single data center within AWS",
      "A geographic area that contains multiple, isolated Availability Zones",
      "A content delivery network endpoint",
      "A virtual private cloud"
    ],
    correctAnswers: [1],
    explanation: "An AWS Region is a geographic area that contains multiple, isolated Availability Zones. Each AZ consists of one or more data centers. Regions are fully isolated from each other to achieve fault tolerance and stability.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2013,
    text: "Which AWS service provides a content delivery network (CDN) that caches content at edge locations?",
    options: [
      "AWS Direct Connect",
      "Amazon CloudFront",
      "Amazon Route 53",
      "AWS Global Accelerator"
    ],
    correctAnswers: [1],
    explanation: "Amazon CloudFront is AWS's CDN service that caches content at edge locations worldwide for low-latency delivery. Direct Connect is a dedicated network connection, Route 53 is DNS, and Global Accelerator optimizes network routing.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2014,
    text: "A company needs a managed relational database that supports MySQL and PostgreSQL without managing the underlying infrastructure. Which service should they use?",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon ElastiCache"
    ],
    correctAnswers: [1],
    explanation: "Amazon RDS (Relational Database Service) provides managed relational databases supporting MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Aurora. DynamoDB is NoSQL, Redshift is a data warehouse, and ElastiCache is in-memory caching.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2015,
    text: "Which Amazon S3 storage class is the most cost-effective for data that is rarely accessed and can tolerate retrieval times of 12 hours?",
    options: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Glacier Deep Archive",
      "S3 One Zone-IA"
    ],
    correctAnswers: [2],
    explanation: "S3 Glacier Deep Archive is the lowest-cost storage class, designed for data that is rarely accessed with retrieval times of up to 12 hours. It's ideal for long-term archival and compliance data.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2016,
    text: "What is Amazon VPC?",
    options: [
      "A service for running containers",
      "A logically isolated virtual network within the AWS Cloud",
      "A database management service",
      "A content delivery network"
    ],
    correctAnswers: [1],
    explanation: "Amazon VPC (Virtual Private Cloud) lets you create a logically isolated virtual network where you can launch AWS resources. You have full control over IP address ranges, subnets, route tables, and network gateways.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2017,
    text: "Which AWS service is a serverless, event-driven compute service that runs code in response to events?",
    options: [
      "Amazon EC2",
      "Amazon ECS",
      "AWS Lambda",
      "AWS Elastic Beanstalk"
    ],
    correctAnswers: [2],
    explanation: "AWS Lambda is a serverless compute service that runs code in response to events (S3 uploads, API Gateway requests, etc.) without provisioning or managing servers. You pay only for the compute time consumed.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2018,
    text: "A company needs to run a NoSQL database that provides single-digit millisecond performance at any scale. Which service should they use?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Neptune"
    ],
    correctAnswers: [1],
    explanation: "Amazon DynamoDB is a fully managed NoSQL database that provides consistent single-digit millisecond performance at any scale. It supports both key-value and document data models. RDS and Aurora are relational, Neptune is for graph data.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2019,
    text: "Which AWS service provides a fully managed message queuing service for decoupling application components?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon Kinesis",
      "AWS Step Functions"
    ],
    correctAnswers: [1],
    explanation: "Amazon SQS (Simple Queue Service) is a fully managed message queuing service for decoupling microservices and distributed systems. SNS is for pub/sub notifications, Kinesis is for real-time streaming, and Step Functions orchestrates workflows.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2020,
    text: "Which AWS service should you use to register and manage domain names?",
    options: [
      "Amazon CloudFront",
      "AWS Direct Connect",
      "Amazon Route 53",
      "AWS Global Accelerator"
    ],
    correctAnswers: [2],
    explanation: "Amazon Route 53 is a DNS web service that also provides domain name registration. You can register new domains, transfer existing domains, and manage DNS routing. CloudFront is a CDN, Direct Connect is a dedicated network link.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2021,
    text: "Which service provides a way to set up, operate, and scale a relational database with up to 5x better performance than standard MySQL?",
    options: [
      "Amazon RDS for MySQL",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon DocumentDB"
    ],
    correctAnswers: [1],
    explanation: "Amazon Aurora is MySQL and PostgreSQL-compatible and provides up to 5x the throughput of standard MySQL and 3x of standard PostgreSQL. It's fully managed by RDS and automatically scales storage up to 128 TB.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2022,
    text: "Which pricing model allows you to pay for compute capacity by the hour or second with no long-term commitment?",
    options: [
      "Reserved Instances",
      "Spot Instances",
      "On-Demand Instances",
      "Dedicated Hosts"
    ],
    correctAnswers: [2],
    explanation: "On-Demand Instances let you pay for compute capacity by the hour or second with no upfront payment or long-term commitment. Reserved Instances require 1-3 year commitments, and Spot Instances can be interrupted.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2023,
    text: "A company wants to receive recommendations to optimize costs, improve security, and increase performance. Which AWS service provides these recommendations?",
    options: [
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS CloudWatch",
      "AWS Systems Manager"
    ],
    correctAnswers: [1],
    explanation: "AWS Trusted Advisor provides real-time guidance across five categories: cost optimization, performance, security, fault tolerance, and service limits. The level of checks depends on your AWS Support plan.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2024,
    text: "Which AWS Support plan provides access to a Technical Account Manager (TAM)?",
    options: [
      "Basic",
      "Developer",
      "Business",
      "Enterprise"
    ],
    correctAnswers: [3],
    explanation: "Only the Enterprise Support plan includes a designated Technical Account Manager (TAM) who provides proactive guidance, architectural reviews, and operational support. Business plan has access to support engineers but not a dedicated TAM.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2025,
    text: "What is AWS Free Tier?",
    options: [
      "A discount program for non-profit organizations",
      "An offering that allows new and existing customers to use certain AWS services for free within specified limits",
      "A tier of AWS Support that is free for all accounts",
      "A free AWS training program"
    ],
    correctAnswers: [1],
    explanation: "AWS Free Tier offers three types of offerings: Always Free (e.g., 1 million Lambda requests/month), 12 Months Free (e.g., 750 hours of EC2 t2.micro/month), and Trials. It applies to both new and existing customers depending on the type.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2026,
    text: "Which tool provides a visual breakdown of AWS costs and usage over time?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Cost and Usage Report"
    ],
    correctAnswers: [1],
    explanation: "AWS Cost Explorer provides a visual interface to explore and analyze your AWS costs and usage over time. It includes forecasting capabilities. AWS Budgets sets spending alerts, Pricing Calculator estimates future costs, and CUR provides detailed raw data.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2027,
    text: "Which service allows you to set custom cost and usage budgets and receive alerts when thresholds are exceeded?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "Amazon CloudWatch Billing Alarms"
    ],
    correctAnswers: [1],
    explanation: "AWS Budgets lets you set custom budgets for cost, usage, coverage, and utilization. You can configure alerts via email or SNS when actual or forecasted spending exceeds your thresholds.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2028,
    text: "How does Reserved Instance pricing compare to On-Demand pricing?",
    options: [
      "Reserved Instances are always more expensive",
      "Reserved Instances provide up to 72% savings compared to On-Demand",
      "Reserved Instances and On-Demand have the same pricing",
      "Reserved Instances are free for the first year"
    ],
    correctAnswers: [1],
    explanation: "Reserved Instances can provide up to 72% savings compared to On-Demand pricing in exchange for a 1 or 3-year commitment. The discount depends on the payment option: All Upfront, Partial Upfront, or No Upfront.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2029,
    text: "Which AWS service records API calls made in your AWS account for governance, compliance, and auditing?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "AWS X-Ray"
    ],
    correctAnswers: [1],
    explanation: "AWS CloudTrail records API calls made in your AWS account, including who made the call, when, from where, and what was changed. It's essential for governance, compliance, and security auditing. CloudWatch monitors metrics, Config tracks resource configurations.",
    domain: "Security and Compliance"
  },
  {
    id: 2030,
    text: "Which AWS service should be used to enable multi-factor authentication (MFA) for IAM users?",
    options: [
      "Amazon Cognito",
      "AWS IAM",
      "AWS Single Sign-On (IAM Identity Center)",
      "AWS Directory Service"
    ],
    correctAnswers: [1],
    explanation: "MFA for IAM users is configured directly in AWS IAM. You can enable virtual MFA devices, U2F security keys, or hardware MFA tokens for individual IAM users and the root account.",
    domain: "Security and Compliance"
  },
  {
    id: 2031,
    text: "A company wants to monitor CPU utilization and set alarms on their EC2 instances. Which service should they use?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Config",
      "AWS X-Ray"
    ],
    correctAnswers: [1],
    explanation: "Amazon CloudWatch monitors AWS resources and applications in real-time. It collects metrics (like CPU utilization), sets alarms, and triggers actions. CloudTrail logs API calls, Config tracks configuration changes, X-Ray traces application requests.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2032,
    text: "What is an Availability Zone?",
    options: [
      "A geographic region where AWS has data centers",
      "One or more discrete data centers with redundant power, networking, and connectivity in an AWS Region",
      "A single server rack in an AWS data center",
      "An edge location for CloudFront"
    ],
    correctAnswers: [1],
    explanation: "An Availability Zone (AZ) consists of one or more discrete data centers, each with redundant power, networking, and connectivity, housed in separate facilities within an AWS Region. AZs are designed for fault isolation.",
    domain: "Cloud Concepts"
  },
  {
    id: 2033,
    text: "Which service provides managed container orchestration using Kubernetes?",
    options: [
      "Amazon ECS",
      "Amazon EKS",
      "AWS Fargate",
      "AWS App Runner"
    ],
    correctAnswers: [1],
    explanation: "Amazon EKS (Elastic Kubernetes Service) is a managed Kubernetes service. ECS is AWS's proprietary container orchestration, Fargate is a serverless compute engine for containers (works with both ECS and EKS), and App Runner is a fully managed service for web apps.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2034,
    text: "Which AWS service provides a fully managed data warehouse optimized for analyzing large datasets using SQL?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Athena"
    ],
    correctAnswers: [2],
    explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse that uses SQL to analyze structured and semi-structured data. Athena also queries data using SQL but is serverless and works directly on S3 data.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2035,
    text: "Which of the following best describes the concept of elasticity in the cloud?",
    options: [
      "The ability to acquire resources when needed and release them when no longer needed",
      "The ability to prevent any system failures",
      "The ability to run applications in multiple programming languages",
      "The ability to store unlimited data"
    ],
    correctAnswers: [0],
    explanation: "Elasticity is the ability to automatically scale resources up or down based on demand. This means acquiring resources when traffic increases and releasing them when demand decreases, ensuring you only pay for what you use.",
    domain: "Cloud Concepts"
  },
  {
    id: 2036,
    text: "A company is considering migrating to AWS. Which framework provides guidance for organizations to plan and execute a migration?",
    options: [
      "AWS Well-Architected Framework",
      "AWS Cloud Adoption Framework (CAF)",
      "TOGAF",
      "ITIL"
    ],
    correctAnswers: [1],
    explanation: "The AWS Cloud Adoption Framework (CAF) provides guidance that supports each unit in an organization on their migration journey. It covers six perspectives: Business, People, Governance, Platform, Security, and Operations.",
    domain: "Cloud Concepts"
  },
  {
    id: 2037,
    text: "Which AWS service allows you to run code without provisioning or managing servers, and you pay only when your code runs?",
    options: [
      "Amazon EC2",
      "Amazon ECS",
      "AWS Lambda",
      "Amazon Lightsail"
    ],
    correctAnswers: [2],
    explanation: "AWS Lambda is the serverless compute service where you upload code and Lambda handles everything needed to run and scale it. You pay only for the compute time consumed — there is no charge when code is not running.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2038,
    text: "What is the benefit of using multiple Availability Zones for an application?",
    options: [
      "Reduced cost",
      "Higher network bandwidth",
      "High availability and fault tolerance",
      "Faster compute processing"
    ],
    correctAnswers: [2],
    explanation: "Deploying across multiple AZs provides high availability and fault tolerance. If one AZ experiences an outage, the application continues running from the other AZs. Each AZ is physically separated and has independent infrastructure.",
    domain: "Cloud Concepts"
  },
  {
    id: 2039,
    text: "Which AWS service provides threat detection by continuously monitoring for malicious activity in your AWS accounts?",
    options: [
      "AWS Shield",
      "Amazon GuardDuty",
      "AWS WAF",
      "Amazon Macie"
    ],
    correctAnswers: [1],
    explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior. It analyzes CloudTrail logs, VPC Flow Logs, and DNS logs using machine learning. Macie focuses on S3 data privacy.",
    domain: "Security and Compliance"
  },
  {
    id: 2040,
    text: "Which AWS service can automatically discover, classify, and protect sensitive data stored in Amazon S3?",
    options: [
      "Amazon GuardDuty",
      "Amazon Macie",
      "AWS Config",
      "Amazon Inspector"
    ],
    correctAnswers: [1],
    explanation: "Amazon Macie uses machine learning to automatically discover, classify, and protect sensitive data (PII, financial data, etc.) stored in S3. GuardDuty detects threats, Config tracks configurations, and Inspector assesses application vulnerabilities.",
    domain: "Security and Compliance"
  },
  {
    id: 2041,
    text: "Which type of Elastic Load Balancer operates at the application layer (Layer 7) and supports path-based and host-based routing?",
    options: [
      "Classic Load Balancer",
      "Network Load Balancer",
      "Application Load Balancer",
      "Gateway Load Balancer"
    ],
    correctAnswers: [2],
    explanation: "Application Load Balancer (ALB) operates at Layer 7 (HTTP/HTTPS) and supports advanced routing features including path-based, host-based, and header-based routing. Network Load Balancer operates at Layer 4 (TCP/UDP).",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2042,
    text: "A company wants to estimate the cost of their planned AWS architecture before deploying anything. Which tool should they use?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Cost and Usage Report"
    ],
    correctAnswers: [2],
    explanation: "AWS Pricing Calculator helps you estimate the cost of AWS services for your use case before you start using them. Cost Explorer shows past costs, Budgets sets spending limits, and CUR provides detailed billing data.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2043,
    text: "Which AWS service should be used for storing and retrieving any amount of data from anywhere on the web?",
    options: [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EFS",
      "AWS Storage Gateway"
    ],
    correctAnswers: [1],
    explanation: "Amazon S3 (Simple Storage Service) is an object storage service with virtually unlimited scalability. It's accessible from anywhere via the internet. EBS is block storage for EC2, EFS is a managed file system, and Storage Gateway is for hybrid storage.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2044,
    text: "What is AWS Organizations?",
    options: [
      "A service for managing container clusters",
      "A service that helps you centrally manage and govern multiple AWS accounts",
      "A virtual private cloud configuration tool",
      "An identity provider for applications"
    ],
    correctAnswers: [1],
    explanation: "AWS Organizations lets you centrally manage multiple AWS accounts. You can group accounts into Organizational Units (OUs), apply Service Control Policies (SCPs) for governance, and consolidate billing across all accounts.",
    domain: "Cloud Concepts"
  },
  {
    id: 2045,
    text: "Which service provides a private connection between your on-premises network and AWS without traversing the public internet?",
    options: [
      "AWS VPN",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Transit Gateway"
    ],
    correctAnswers: [1],
    explanation: "AWS Direct Connect provides a dedicated, private network connection from your premises to AWS. This avoids the public internet, providing more consistent network performance, reduced bandwidth costs, and lower latency.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2046,
    text: "What are Service Control Policies (SCPs) used for in AWS Organizations?",
    options: [
      "To grant IAM permissions to users",
      "To set the maximum permissions available to accounts in an Organization",
      "To encrypt data at rest in S3",
      "To configure VPC security groups"
    ],
    correctAnswers: [1],
    explanation: "SCPs set permission guardrails — they define the maximum permissions available to IAM users and roles in member accounts. SCPs don't grant permissions; they restrict what permissions can be used, acting as a boundary.",
    domain: "Security and Compliance"
  },
  {
    id: 2047,
    text: "Which AWS service helps you migrate databases to AWS easily and securely?",
    options: [
      "AWS DataSync",
      "AWS Database Migration Service (DMS)",
      "AWS Transfer Family",
      "AWS Snow Family"
    ],
    correctAnswers: [1],
    explanation: "AWS DMS helps you migrate databases to AWS with minimal downtime. It supports homogeneous (e.g., Oracle to Oracle) and heterogeneous (e.g., Oracle to Aurora) migrations. DataSync is for file transfers, and Snow Family is for physical data transfer.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2048,
    text: "A startup wants to deploy a web application quickly without managing infrastructure. They need automatic scaling and load balancing. Which service should they use?",
    options: [
      "Amazon EC2 with Auto Scaling",
      "AWS Elastic Beanstalk",
      "Amazon Lightsail",
      "AWS Outposts"
    ],
    correctAnswers: [1],
    explanation: "AWS Elastic Beanstalk is a PaaS that automatically handles deployment, capacity provisioning, load balancing, and auto-scaling. You just upload your code. Lightsail is simpler but less scalable. EC2 with Auto Scaling requires manual setup.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2049,
    text: "Which of the following is a benefit of consolidated billing in AWS Organizations?",
    options: [
      "Combined usage across accounts can qualify for volume pricing discounts",
      "All accounts automatically get Enterprise Support",
      "Each account gets a separate bill for better tracking",
      "Resources are automatically shared between accounts"
    ],
    correctAnswers: [0],
    explanation: "Consolidated billing combines usage across all accounts in an Organization, which can qualify for volume pricing discounts and Reserved Instance sharing. You get a single bill but can still track per-account spending.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2050,
    text: "Which AWS service provides a managed machine learning model training and deployment platform?",
    options: [
      "Amazon Rekognition",
      "Amazon SageMaker",
      "Amazon Comprehend",
      "AWS DeepRacer"
    ],
    correctAnswers: [1],
    explanation: "Amazon SageMaker is a fully managed platform for building, training, and deploying machine learning models. Rekognition provides pre-built image/video analysis, Comprehend provides NLP, and DeepRacer is for reinforcement learning.",
    domain: "Cloud Technology and Services"
  }
];

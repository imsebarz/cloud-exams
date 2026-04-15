import { Question } from "./types";

export const awsQuestionsV2: Question[] = [
  {
    id: 2101,
    text: "What is AWS IAM Identity Center (formerly AWS SSO) primarily used for?",
    options: [
      "A) Managing EC2 instance types and pricing",
      "B) Centrally managing single sign-on access to multiple AWS accounts and business applications",
      "C) Encrypting data at rest in S3 buckets",
      "D) Monitoring CloudTrail logs for compliance violations"
    ],
    correctAnswers: [1],
    explanation: "AWS IAM Identity Center provides centralized single sign-on (SSO) access across multiple AWS accounts and third-party business applications, simplifying user management and access control.",
    domain: "Security and Compliance"
  },
  {
    id: 2102,
    text: "Which AWS service helps you analyze and review IAM policies to identify unused permissions and potential access risks?",
    options: [
      "A) IAM Access Analyzer",
      "B) AWS Artifact",
      "C) AWS Security Hub",
      "D) AWS Inspector"
    ],
    correctAnswers: [0],
    explanation: "IAM Access Analyzer helps you review and validate IAM policies to find unused permissions and access that violates your security policies.",
    domain: "Security and Compliance"
  },
  {
    id: 2103,
    text: "What are the two main types of IAM policies in AWS? (Select TWO)",
    options: [
      "A) Managed policies and inline policies",
      "B) Resource-based policies and principal-based policies",
      "C) Standard policies and custom policies",
      "D) Restrictive policies and permissive policies"
    ],
    correctAnswers: [0, 1],
    explanation: "The two main categories of IAM policies are: 1) Managed policies (standalone policies with their own ARN) and inline policies (directly embedded in a user, group, or role), and 2) Resource-based policies (attached to resources) and identity-based policies (attached to principals).",
    domain: "Security and Compliance"
  },
  {
    id: 2104,
    text: "Which AWS service allows you to download AWS compliance reports and certifications for audit purposes?",
    options: [
      "A) AWS CloudTrail",
      "B) AWS Artifact",
      "C) AWS Compliance Manager",
      "D) AWS Security Hub"
    ],
    correctAnswers: [1],
    explanation: "AWS Artifact provides access to AWS compliance documentation, certifications, and audit reports that you can use to demonstrate AWS security and compliance standards.",
    domain: "Security and Compliance"
  },
  {
    id: 2105,
    text: "What is the primary purpose of AWS Security Hub?",
    options: [
      "A) To manage SSL/TLS certificates for CloudFront distributions",
      "B) To centralize and organize security findings from multiple AWS services and third-party tools",
      "C) To encrypt data in transit using VPN connections",
      "D) To provision and rotate AWS access keys"
    ],
    correctAnswers: [1],
    explanation: "AWS Security Hub aggregates security findings from AWS services (like GuardDuty, Inspector, Macie) and third-party tools, providing a centralized view of your security posture.",
    domain: "Security and Compliance"
  },
  {
    id: 2106,
    text: "Which AWS service performs automated vulnerability scanning and assesses EC2 instances, container images, and Lambda functions for security issues?",
    options: [
      "A) AWS Inspector v2",
      "B) AWS GuardDuty",
      "C) Amazon Macie",
      "D) AWS Config"
    ],
    correctAnswers: [0],
    explanation: "AWS Inspector v2 automatically scans EC2 instances, container images, and Lambda functions to find software vulnerabilities and network exposure.",
    domain: "Security and Compliance"
  },
  {
    id: 2107,
    text: "What is Amazon EventBridge used for?",
    options: [
      "A) Sending email and SMS notifications to users",
      "B) Routing and transforming events from AWS services, third-party SaaS applications, and custom applications to multiple targets",
      "C) Managing VPC security groups and network ACLs",
      "D) Storing and querying data in a NoSQL format"
    ],
    correctAnswers: [1],
    explanation: "Amazon EventBridge is a serverless event bus that enables you to route events from AWS services, SaaS applications, and custom applications to multiple targets like Lambda, SNS, and SQS.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2108,
    text: "Which AWS service allows you to coordinate multiple AWS services into serverless workflows?",
    options: [
      "A) AWS AppSync",
      "B) AWS Step Functions",
      "C) AWS Glue",
      "D) AWS Data Pipeline"
    ],
    correctAnswers: [1],
    explanation: "AWS Step Functions enables you to build and orchestrate serverless workflows by coordinating AWS Lambda, EC2, SNS, and other services into visual workflows.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2109,
    text: "Which of the following is a valid use case for Amazon SNS? (Select TWO)",
    options: [
      "A) Publishing application notifications to multiple subscribers",
      "B) Running scheduled batch processing jobs",
      "C) Triggering Lambda functions when messages are published",
      "D) Storing and querying time-series metrics data"
    ],
    correctAnswers: [0, 2],
    explanation: "Amazon SNS is a publish-subscribe messaging service used for: 1) Publishing notifications to multiple subscribers (email, SMS, HTTP), and 2) Triggering downstream services like Lambda functions when messages are published.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2110,
    text: "When comparing EBS, EFS, and S3, which statement is correct?",
    options: [
      "A) EBS is a distributed file system accessible from multiple EC2 instances simultaneously",
      "B) EFS provides block-level storage for a single EC2 instance, while S3 is an object store for files of any size",
      "C) EBS provides block storage for a single instance, EFS is a managed file system for multiple instances, and S3 is an object store for any data",
      "D) S3 is only suitable for temporary storage and has limited scalability"
    ],
    correctAnswers: [2],
    explanation: "EBS provides block-level storage attached to a single EC2 instance. EFS is a scalable, managed file system for multiple EC2 instances. S3 is an object storage service for any type and size of data accessed over the internet.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2111,
    text: "What is AWS CloudFormation used for?",
    options: [
      "A) Creating and managing AWS infrastructure using Infrastructure as Code (IaC) templates",
      "B) Monitoring application performance and user experience",
      "C) Distributing content globally with low latency",
      "D) Encrypting data at rest using customer-managed keys"
    ],
    correctAnswers: [0],
    explanation: "AWS CloudFormation enables you to define and provision AWS infrastructure resources using JSON or YAML templates, allowing you to manage infrastructure as code.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2112,
    text: "What is the AWS Cloud Development Kit (CDK) primarily used for?",
    options: [
      "A) Defining AWS infrastructure using programming languages like Python and TypeScript",
      "B) Analyzing code for security vulnerabilities",
      "C) Managing container orchestration and scaling",
      "D) Distributing Lambda function code globally"
    ],
    correctAnswers: [0],
    explanation: "AWS CDK allows you to define AWS infrastructure using familiar programming languages (Python, TypeScript, Java, etc.) instead of writing CloudFormation templates directly.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2113,
    text: "Which service allows you to query data directly in S3 using SQL without loading it into a separate data warehouse?",
    options: [
      "A) Amazon Athena",
      "B) AWS Glue",
      "C) Amazon Redshift",
      "D) Amazon EMR"
    ],
    correctAnswers: [0],
    explanation: "Amazon Athena is an interactive query service that lets you query data directly in S3 using standard SQL without needing to load data into a separate database.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2114,
    text: "What is AWS Glue primarily used for?",
    options: [
      "A) Querying data stored in S3 using SQL",
      "B) Discovering, cataloging, and transforming data from various sources",
      "C) Real-time streaming analytics on large data sets",
      "D) Creating data warehouses with columnar storage"
    ],
    correctAnswers: [1],
    explanation: "AWS Glue is a fully managed extract, transform, and load (ETL) service that helps you discover, catalog, and transform data from multiple sources.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2115,
    text: "What is the primary difference between Savings Plans and Reserved Instances (RIs)?",
    options: [
      "A) Savings Plans only work for EC2, while RIs work for all services",
      "B) Savings Plans offer flexible pricing across multiple services (EC2, RDS, Lambda), while RIs are service-specific commitments",
      "C) Reserved Instances provide deeper discounts but less flexibility than Savings Plans",
      "D) Savings Plans require upfront payment, while RIs allow monthly payments"
    ],
    correctAnswers: [1],
    explanation: "Savings Plans offer flexible discounts across multiple AWS services and compute types, while Reserved Instances are service-specific commitments with fixed pricing for EC2, RDS, etc.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2116,
    text: "Which AWS service helps you manage and govern multiple AWS accounts with centralized policy enforcement?",
    options: [
      "A) AWS Organizations with Service Control Policies (SCPs)",
      "B) AWS IAM with cross-account roles",
      "C) AWS Config with remediation rules",
      "D) AWS CloudTrail with multi-account logging"
    ],
    correctAnswers: [0],
    explanation: "AWS Organizations allows you to manage multiple accounts centrally, and Service Control Policies (SCPs) enable you to enforce permission boundaries across all accounts.",
    domain: "Cloud Concepts"
  },
  {
    id: 2117,
    text: "What is AWS Control Tower used for?",
    options: [
      "A) Monitoring EC2 instance performance metrics",
      "B) Setting up and governing a secure, multi-account AWS environment",
      "C) Creating and managing RDS database instances",
      "D) Distributing traffic across multiple application servers"
    ],
    correctAnswers: [1],
    explanation: "AWS Control Tower is a service that helps you set up, govern, and manage a multi-account AWS environment with built-in guardrails and best practices.",
    domain: "Cloud Concepts"
  },
  {
    id: 2118,
    text: "Which AWS service allows you to provision and manage pre-approved IT products and services for your organization?",
    options: [
      "A) AWS Marketplace",
      "B) AWS Service Catalog",
      "C) AWS AppStream 2.0",
      "D) AWS Config"
    ],
    correctAnswers: [1],
    explanation: "AWS Service Catalog enables you to create and manage catalogs of approved AWS resources and IT services, allowing users to self-service provision resources while maintaining governance.",
    domain: "Cloud Concepts"
  },
  {
    id: 2119,
    text: "What is the relationship between AWS Regions, Availability Zones (AZs), and Local Zones?",
    options: [
      "A) Regions contain AZs, and Local Zones are part of AZs",
      "B) Regions contain AZs for high availability, and Local Zones provide ultra-low latency access closer to users",
      "C) Local Zones are used only for database replication",
      "D) AZs and Local Zones are equivalent and can be used interchangeably"
    ],
    correctAnswers: [1],
    explanation: "AWS Regions are geographic areas, each containing multiple Availability Zones for high availability. Local Zones extend AWS infrastructure closer to users for applications requiring ultra-low latency.",
    domain: "Cloud Concepts"
  },
  {
    id: 2120,
    text: "What is the difference between Edge Locations and Regions in AWS?",
    options: [
      "A) Edge Locations are used for compute resources, while Regions are used for storage only",
      "B) Edge Locations are smaller infrastructure sites used by CloudFront for content delivery, while Regions are larger geographic areas with full AWS services",
      "C) Regions are only for European customers, while Edge Locations are global",
      "D) Edge Locations and Regions provide identical services"
    ],
    correctAnswers: [1],
    explanation: "Edge Locations are smaller sites used by CloudFront and other services for low-latency content delivery. Regions are larger geographic areas containing multiple AZs and full AWS services.",
    domain: "Cloud Concepts"
  },
  {
    id: 2121,
    text: "Which of the following are advantages of cloud computing? (Select TWO)",
    options: [
      "A) Trade capital expense for operational expense",
      "B) Eliminate all security risks automatically",
      "C) Benefit from massive economies of scale and reduced costs",
      "D) Avoid the need for any compliance or governance"
    ],
    correctAnswers: [0, 2],
    explanation: "Key advantages of cloud computing include: 1) Trading upfront capital expenses for pay-as-you-go operational expenses, and 2) Benefiting from AWS's massive scale and passing cost savings to customers.",
    domain: "Cloud Concepts"
  },
  {
    id: 2122,
    text: "What are the three cloud deployment models?",
    options: [
      "A) Public, private, and hybrid",
      "B) Internal, external, and distributed",
      "C) Standard, premium, and enterprise",
      "D) Free tier, standard tier, and professional tier"
    ],
    correctAnswers: [0],
    explanation: "The three cloud deployment models are: 1) Public cloud (shared resources), 2) Private cloud (dedicated resources), and 3) Hybrid cloud (combination of public and private).",
    domain: "Cloud Concepts"
  },
  {
    id: 2123,
    text: "What is the AWS Well-Architected Tool used for?",
    options: [
      "A) Automatically deploying infrastructure using CloudFormation templates",
      "B) Reviewing your architecture against AWS best practices and providing recommendations",
      "C) Storing and managing versioning of application code",
      "D) Monitoring real-time application logs and metrics"
    ],
    correctAnswers: [1],
    explanation: "The AWS Well-Architected Tool guides you through reviewing your workloads against the five pillars of the Well-Architected Framework (operational excellence, security, reliability, performance efficiency, cost optimization).",
    domain: "Cloud Concepts"
  },
  {
    id: 2124,
    text: "Which AWS service helps you optimize compute resources by recommending the right instance types and sizes?",
    options: [
      "A) AWS Cost Explorer",
      "B) AWS Compute Optimizer",
      "C) AWS Trusted Advisor",
      "D) AWS System Manager"
    ],
    correctAnswers: [1],
    explanation: "AWS Compute Optimizer analyzes your EC2 instances and recommends optimal instance types and sizes to reduce costs and improve performance.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2125,
    text: "What is AWS Cost Anomaly Detection used for?",
    options: [
      "A) Detecting security breaches in your AWS account",
      "B) Automatically identifying unusual spending patterns and potential cost overruns",
      "C) Provisioning additional resources based on demand",
      "D) Encrypting billing reports"
    ],
    correctAnswers: [1],
    explanation: "AWS Cost Anomaly Detection uses machine learning to identify unusual spending patterns, helping you detect unexpected cost increases and take corrective action.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2126,
    text: "Which AWS service helps you assess disaster recovery readiness and improve resilience?",
    options: [
      "A) AWS Backup",
      "B) AWS Resilience Hub",
      "C) AWS Disaster Recovery service",
      "D) AWS Data Pipeline"
    ],
    correctAnswers: [1],
    explanation: "AWS Resilience Hub helps you assess the disaster recovery readiness of your applications and provides recommendations to improve resilience.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2127,
    text: "What is the primary purpose of AWS Backup?",
    options: [
      "A) Compressing and archiving old files",
      "B) Centrally managing and automating backups across AWS services",
      "C) Encrypting all data at rest automatically",
      "D) Migrating databases between regions"
    ],
    correctAnswers: [1],
    explanation: "AWS Backup provides centralized, policy-based backup management for multiple AWS services including EC2, RDS, EFS, and DynamoDB with automated scheduling and retention.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2128,
    text: "Which AWS service is used for building conversational interfaces and chatbots?",
    options: [
      "A) Amazon Polly",
      "B) Amazon Lex",
      "C) Amazon Connect",
      "D) Amazon Translate"
    ],
    correctAnswers: [1],
    explanation: "Amazon Lex is an AI service for building conversational interfaces and chatbots using voice and text, powered by the same technology as Alexa.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2129,
    text: "What is Amazon Polly used for?",
    options: [
      "A) Converting text to speech in multiple languages",
      "B) Building customer service chatbots",
      "C) Transcribing audio to text",
      "D) Translating text between languages"
    ],
    correctAnswers: [0],
    explanation: "Amazon Polly converts text to speech with natural-sounding voices in multiple languages, enabling you to add speech capabilities to applications.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2130,
    text: "Which AWS service enables you to create a cloud-based contact center for customer service?",
    options: [
      "A) Amazon Lex",
      "B) Amazon Connect",
      "C) Amazon Chime",
      "D) Amazon AppStream"
    ],
    correctAnswers: [1],
    explanation: "Amazon Connect is a cloud-based contact center service that enables you to set up customer service operations without managing infrastructure.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2131,
    text: "What is AWS Migration Hub used for?",
    options: [
      "A) Automatically migrating all on-premises data to AWS",
      "B) Tracking and managing migration progress across multiple applications",
      "C) Converting relational databases to DynamoDB",
      "D) Replicating data in real-time between regions"
    ],
    correctAnswers: [1],
    explanation: "AWS Migration Hub provides a central location to track migration progress across multiple applications and servers, integrating with other migration tools.",
    domain: "Cloud Concepts"
  },
  {
    id: 2132,
    text: "Which AWS service helps you identify applications and their dependencies for migration planning?",
    options: [
      "A) AWS Application Discovery Service",
      "B) AWS AppStream 2.0",
      "C) AWS Application Load Balancer",
      "D) AWS Elastic Beanstalk"
    ],
    correctAnswers: [0],
    explanation: "AWS Application Discovery Service helps you identify applications, dependencies, and infrastructure details on-premises to plan migration to AWS.",
    domain: "Cloud Concepts"
  },
  {
    id: 2133,
    text: "Which AWS service is a managed message queue that decouples application components?",
    options: [
      "A) Amazon SNS",
      "B) Amazon SQS",
      "C) Amazon Kinesis",
      "D) Amazon MQ"
    ],
    correctAnswers: [1],
    explanation: "Amazon SQS is a fully managed message queue service that decouples application components, enabling asynchronous communication between microservices.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2134,
    text: "What is the primary difference between Amazon SNS and Amazon SQS?",
    options: [
      "A) SNS stores messages, while SQS delivers them immediately",
      "B) SNS is publish-subscribe (one-to-many), while SQS is a message queue (point-to-point)",
      "C) SQS is only for email notifications",
      "D) SNS requires Lambda, while SQS works standalone"
    ],
    correctAnswers: [1],
    explanation: "SNS is a publish-subscribe service where one message is delivered to multiple subscribers. SQS is a message queue service where messages are pulled by a single consumer.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2135,
    text: "Which AWS service provides real-time application performance monitoring?",
    options: [
      "A) AWS CloudTrail",
      "B) AWS X-Ray",
      "C) AWS Systems Manager",
      "D) AWS Personal Health Dashboard"
    ],
    correctAnswers: [1],
    explanation: "AWS X-Ray helps you trace and analyze requests flowing through your application, providing insights into performance and debugging distributed applications.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2136,
    text: "What is AWS Glue Crawler used for?",
    options: [
      "A) Scanning S3 buckets to automatically discover and catalog data schemas",
      "B) Crawling the internet to find publicly available datasets",
      "C) Managing EC2 instance configurations",
      "D) Monitoring CloudFront distribution performance"
    ],
    correctAnswers: [0],
    explanation: "AWS Glue Crawlers automatically scan your data stores and create a catalog of data schemas, making data discoverable and queryable by analytics services.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2137,
    text: "Which AWS service helps you manage patch management across multiple EC2 instances?",
    options: [
      "A) AWS Systems Manager Patch Manager",
      "B) AWS Config",
      "C) AWS Inspector",
      "D) AWS CloudFormation"
    ],
    correctAnswers: [0],
    explanation: "AWS Systems Manager Patch Manager automates the patching of Windows and Linux instances, helping you maintain security and compliance.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2138,
    text: "What is the AWS Free Tier designed for?",
    options: [
      "A) Allowing unlimited usage of all AWS services at no cost",
      "B) Providing limited free usage of select AWS services for 12 months and some services indefinitely",
      "C) Only for non-commercial, educational purposes",
      "D) Requiring a long-term commitment with prepaid billing"
    ],
    correctAnswers: [1],
    explanation: "The AWS Free Tier includes 12 months of free access to many services and some services with always-free offers, allowing you to build and test applications.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2139,
    text: "Which AWS Support plan includes 24/7 access to technical support and architectural guidance?",
    options: [
      "A) Developer",
      "B) Business",
      "C) Enterprise",
      "D) Basic"
    ],
    correctAnswers: [2],
    explanation: "The Enterprise Support plan includes 24/7 access to dedicated support engineers, architectural guidance, and a one-hour response time for critical issues.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2140,
    text: "What is AWS Trusted Advisor used for?",
    options: [
      "A) Verifying identity and access for users",
      "B) Providing real-time recommendations to optimize AWS resources for security, performance, and cost",
      "C) Monitoring network traffic between EC2 instances",
      "D) Encrypting data in transit"
    ],
    correctAnswers: [1],
    explanation: "AWS Trusted Advisor analyzes your AWS account and provides recommendations across security, performance, cost optimization, fault tolerance, and service limits.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2141,
    text: "Which of the following is NOT a pillar of the AWS Well-Architected Framework?",
    options: [
      "A) Operational excellence",
      "B) Security",
      "C) Reliability",
      "D) Marketing efficiency"
    ],
    correctAnswers: [3],
    explanation: "The five pillars of the AWS Well-Architected Framework are: operational excellence, security, reliability, performance efficiency, and cost optimization. Marketing efficiency is not a pillar.",
    domain: "Cloud Concepts"
  },
  {
    id: 2142,
    text: "What does the AWS Shared Responsibility Model state about DynamoDB security?",
    options: [
      "A) AWS is responsible for all security aspects of DynamoDB",
      "B) The customer is responsible for all DynamoDB security",
      "C) AWS manages infrastructure security and encryption, while customers manage access control and data encryption keys",
      "D) Security responsibility is split equally between AWS and customers"
    ],
    correctAnswers: [2],
    explanation: "In the Shared Responsibility Model, AWS manages DynamoDB infrastructure and encryption at rest, while customers are responsible for access control, authentication, and encryption key management.",
    domain: "Security and Compliance"
  },
  {
    id: 2143,
    text: "Which AWS service provides compliance certifications and audit documentation?",
    options: [
      "A) AWS Artifact",
      "B) AWS Compliance Manager",
      "C) AWS Certificate Manager",
      "D) AWS Security Hub"
    ],
    correctAnswers: [0],
    explanation: "AWS Artifact is the go-to resource for compliance reports, certifications, and audit documentation needed to demonstrate compliance with standards.",
    domain: "Security and Compliance"
  },
  {
    id: 2144,
    text: "What is the primary benefit of using AWS Savings Plans over On-Demand pricing?",
    options: [
      "A) Ability to scale capacity automatically",
      "B) Significant cost reduction (up to 72%) for committed usage",
      "C) Ability to use any AWS service without restrictions",
      "D) Automatic backup and disaster recovery"
    ],
    correctAnswers: [1],
    explanation: "AWS Savings Plans provide significant discounts (up to 72%) compared to On-Demand pricing in exchange for a commitment to use a specific amount of compute capacity.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2145,
    text: "Which AWS service helps you analyze and understand your AWS spending patterns?",
    options: [
      "A) AWS Pricing Calculator",
      "B) AWS Cost Explorer",
      "C) AWS Budgets",
      "D) AWS Compute Optimizer"
    ],
    correctAnswers: [1],
    explanation: "AWS Cost Explorer provides visualizations and tools to analyze your spending patterns, identify cost drivers, and optimize expenditures.",
    domain: "Billing, Pricing, and Support"
  },
  {
    id: 2146,
    text: "What is the primary purpose of AWS Organizations?",
    options: [
      "A) Organizing application code and repositories",
      "B) Centrally managing multiple AWS accounts and applying policies across them",
      "C) Orchestrating microservices and container deployments",
      "D) Distributing content globally with low latency"
    ],
    correctAnswers: [1],
    explanation: "AWS Organizations allows you to consolidate multiple AWS accounts into an organization you create and manage centrally with policies and billing.",
    domain: "Cloud Concepts"
  },
  {
    id: 2147,
    text: "Which AWS service is used for centralized identity and access management across your organization? (Select TWO)",
    options: [
      "A) AWS IAM Identity Center (SSO)",
      "B) AWS Identity and Access Management (IAM)",
      "C) AWS Secrets Manager",
      "D) AWS Directory Service"
    ],
    correctAnswers: [0, 1],
    explanation: "AWS IAM manages access to individual AWS accounts and services, while AWS IAM Identity Center provides centralized SSO management across multiple accounts and applications.",
    domain: "Security and Compliance"
  },
  {
    id: 2148,
    text: "What is the primary use case for AWS Direct Connect?",
    options: [
      "A) Connecting on-premises networks to AWS with consistent, dedicated network connections",
      "B) Distributing application traffic across multiple servers",
      "C) Encrypting all data in transit automatically",
      "D) Managing API endpoints and versions"
    ],
    correctAnswers: [0],
    explanation: "AWS Direct Connect establishes a dedicated network connection from your on-premises facilities to AWS, providing consistent bandwidth and reduced latency.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2149,
    text: "Which of the following services is best for storing unstructured data like images, videos, and documents?",
    options: [
      "A) DynamoDB",
      "B) RDS",
      "C) Amazon S3",
      "D) ElastiCache"
    ],
    correctAnswers: [2],
    explanation: "Amazon S3 is designed for storing unstructured data of any size (images, videos, documents) with high durability and accessibility.",
    domain: "Cloud Technology and Services"
  },
  {
    id: 2150,
    text: "What is the primary difference between horizontal and vertical scaling in AWS?",
    options: [
      "A) Horizontal scaling adds more server instances, while vertical scaling increases the capacity of existing instances",
      "B) Vertical scaling is for databases, while horizontal scaling is for applications",
      "C) Horizontal scaling is cheaper than vertical scaling",
      "D) Vertical scaling can be done automatically, while horizontal cannot"
    ],
    correctAnswers: [0],
    explanation: "Horizontal scaling adds more instances to handle increased load (distributing load), while vertical scaling increases the size/capacity of existing instances (making them more powerful).",
    domain: "Cloud Technology and Services"
  }
];

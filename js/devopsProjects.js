document.addEventListener("DOMContentLoaded", function() {
    const devopsProjects = [
        {
            title: "MongoDB on Kubernetes (EKS)",
            category: "Database & Orchestration",
            description: "Auto-scaling, highly available production MongoDB architecture on EKS with automated backups, performance tuning, and disaster recovery for enterprise workloads.",
            tags: ["Kubernetes", "EKS", "MongoDB", "Helm", "GitOps"]
        },
        {
            title: "Siemens CIAM on EKS",
            category: "Identity & Access Management",
            description: "Enterprise Customer Identity & Access Management platform for Siemens, deployed on Kubernetes with Keycloak and HashiCorp Vault for secure, scalable authentication.",
            tags: ["EKS", "Keycloak", "HashiCorp Vault", "Terraform", "ArgoCD"]
        },
        {
            title: "EC2 to Serverless Migration",
            category: "Cloud Modernisation",
            description: "Modernised EC2-based workloads to Lambda/Fargate serverless architecture, cutting infrastructure costs by 35% while improving scalability and resilience.",
            tags: ["Lambda", "Fargate", "AWS", "Terraform", "API Gateway"]
        },
        {
            title: "StayX Microservices Migration",
            category: "Architecture",
            description: "Decomposed a monolithic application into 11 independently scalable microservices on AWS, significantly improving deployment flexibility and reducing release risk.",
            tags: ["Microservices", "EKS", "Docker", "Jenkins", "AWS"]
        },
        {
            title: "Elasticsearch Kubernetes Cluster",
            category: "Search & Observability",
            description: "High-availability Elasticsearch cluster on EKS for enterprise-grade search and log infrastructure, with Kibana dashboards and automated index lifecycle management.",
            tags: ["Elasticsearch", "EKS", "Kibana", "Helm", "Terraform"]
        },
        {
            title: "Zero-Downtime Blue/Green Pipeline",
            category: "CI/CD Automation",
            description: "Fully automated Blue/Green deployment pipeline with Jenkins and ArgoCD, enabling instant rollbacks and zero-downtime production releases for enterprise apps.",
            tags: ["Jenkins", "ArgoCD", "Blue/Green", "GitHub Actions", "EKS"]
        },
        {
            title: "Terraform Multi-Environment IaC",
            category: "Infrastructure as Code",
            description: "Multi-environment infrastructure provisioning with Terraform and Terragrunt across dev, staging, and production AWS accounts with full GitOps workflow.",
            tags: ["Terraform", "Terragrunt", "AWS", "CloudFormation", "GitOps"]
        },
        {
            title: "LLM Integration Platform",
            category: "AI/ML Infrastructure",
            description: "Scalable LLM API deployment using AWS Bedrock and SageMaker for enterprise AI workloads, integrated with secure API Gateway and document processing via Textract.",
            tags: ["AWS Bedrock", "SageMaker", "Lambda", "API Gateway", "Textract"]
        },
        {
            title: "PCI DSS Compliant AWS Infrastructure",
            category: "Security & Compliance",
            description: "Designed and implemented audit-ready, PCI DSS and HIPAA-compliant cloud architecture with VPC hardening, WAF, SonarQube, Trivy scanning, and IAM least-privilege policies.",
            tags: ["PCI DSS", "HIPAA", "WAF", "IAM", "SonarQube", "Trivy"]
        },
        {
            title: "Apache Superset on AWS",
            category: "Data & Analytics",
            description: "Self-service BI and data visualisation platform deployed on AWS with auto-scaling, SSO integration via Keycloak, and containerised delivery using Docker and Terraform.",
            tags: ["Superset", "AWS", "Docker", "Keycloak", "Terraform"]
        }
    ];

    const container = document.getElementById('devops-projects-container');
    if (!container) return;

    devopsProjects.forEach((project, index) => {
        const delay = (index * 0.08).toFixed(2);
        const tagsHTML = project.tags.map(tag => `<span class="devops-tag">${tag}</span>`).join('');
        const cardHTML = `
            <div class="devops-card wow fadeInUp" data-wow-delay="${delay}s">
                <span class="devops-card-category">${project.category}</span>
                <h4 class="devops-card-title">${project.title}</h4>
                <p class="devops-card-desc">${project.description}</p>
                <div class="devops-card-tags">${tagsHTML}</div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
});

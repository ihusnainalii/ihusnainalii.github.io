document.addEventListener("DOMContentLoaded", function() {
    const devopsSkills = [
        { name: 'AWS EC2' }, { name: 'AWS Lambda' }, { name: 'AWS Fargate' }, { name: 'AWS S3' },
        { name: 'AWS RDS' }, { name: 'AWS CloudFront' }, { name: 'API Gateway' }, { name: 'DynamoDB' },
        { name: 'SQS' }, { name: 'SNS' }, { name: 'SES' }, { name: 'Cognito' },
        { name: 'AWS CloudWatch' }, { name: 'AWS Bedrock' }, { name: 'SageMaker' }, { name: 'Textract' },
        { name: 'Terraform' }, { name: 'Terragrunt' }, { name: 'Pulumi' }, { name: 'AWS CloudFormation' },
        { name: 'Kubernetes (EKS)' }, { name: 'Docker' }, { name: 'Docker Compose' }, { name: 'Helm' },
        { name: 'Kustomize' }, { name: 'ArgoCD' }, { name: 'FluxCD' }, { name: 'GitOps' },
        { name: 'Jenkins' }, { name: 'GitHub Actions' }, { name: 'GitLab CI' },
        { name: 'CI/CD Automation' }, { name: 'Blue/Green Deployments' }, { name: 'Canary Deployments' },
        { name: 'HashiCorp Vault' }, { name: 'Cert Manager' }, { name: 'Keycloak' },
        { name: 'SonarQube' }, { name: 'Trivy' }, { name: 'Gitleaks' }, { name: 'OWASP' },
        { name: 'SAST' }, { name: 'DAST' }, { name: 'PCI DSS' }, { name: 'HIPAA' },
        { name: 'Prometheus' }, { name: 'Grafana' }, { name: 'Datadog' },
        { name: 'MongoDB' }, { name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'MSSQL' },
        { name: 'Elasticsearch' }, { name: 'Linux Administration' }, { name: 'Bash Scripting' },
        { name: 'Python Automation' }, { name: 'VPC Design' }, { name: 'Network Security' },
        { name: 'WAF' }, { name: 'IAM & RBAC' }, { name: 'Secrets Management' },
        { name: 'Infrastructure as Code' }, { name: 'Multi-Account AWS Architecture' },
        { name: 'Auto Scaling' }, { name: 'Load Balancing' }, { name: 'Service Mesh' },
        { name: 'Microservices' }, { name: 'Serverless Architecture' }, { name: 'High Availability' },
        { name: 'Disaster Recovery' }, { name: 'Cost Optimisation' }, { name: 'Pipeline Optimisation' },
        { name: 'Git & Version Control' }, { name: 'Fastlane' }, { name: 'Xcode Cloud' },
    ];

    const container = document.getElementById('all-skills-container');
    devopsSkills.forEach((skill, index) => {
        const delay = (index * 0.02).toFixed(2);
        container.innerHTML += `<div class="skill-item wow fadeInUp" data-wow-delay="${delay}s" data-category="devops"><span class="skill-badge badge-devops">${skill.name}</span></div>`;
    });
});

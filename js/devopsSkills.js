document.addEventListener("DOMContentLoaded", function() {
    const devopsSkills = [
        { name: 'AWS EC2' },
        { name: 'AWS Fargate' },
        { name: 'AWS S3' },
        { name: 'AWS RDS' },
        { name: 'AWS Lambda' },
        { name: 'Terraform' },
        { name: 'Terragrunt' },
        { name: 'AWS CloudFormation' },
        { name: 'Docker' },
        { name: 'Docker Compose' },
        { name: 'CI/CD Automation' },
        { name: 'Jenkins' },
        { name: 'GitHub Actions' },
        { name: 'Fastlane' },
        { name: 'Xcode Cloud' },
        { name: 'Monitoring & Logging' },
        { name: 'AWS CloudWatch' },
        { name: 'Infrastructure as Code (IaC)' },
        { name: 'Auto Scaling' },
        { name: 'Load Balancing' },
        { name: 'Security & Compliance' },
        { name: 'Git & Version Control' },
        { name: 'Pipeline Optimization' },
        { name: 'Secrets Management' },
        { name: 'VPC Networking' },
        { name: 'Container Orchestration' },
        { name: 'Infrastructure Automation' },
        { name: 'Deployment Strategies' }
    ];

    const devopsSkillsContainer = document.getElementById('devops-skills-container');

    // Loop through devopsSkills array and generate HTML for each skill
    devopsSkills.forEach(skill => {
        const skillHTML = `
            <div class="skill-item">
                <p class="skill-title">${skill.name}</p>
            </div>
        `;

        // Append the generated HTML to the devopsSkillsContainer
        devopsSkillsContainer.innerHTML += skillHTML;
    });
});

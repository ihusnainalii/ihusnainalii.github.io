document.addEventListener("DOMContentLoaded", function() {
    const tools = [
        { name: 'Xcode' }, { name: 'VS Code' }, { name: 'SourceTree' }, { name: 'GitHub Desktop' },
        { name: 'Figma' }, { name: 'Sketch' }, { name: 'AdobeXD' }, { name: 'Jira' },
        { name: 'Confluence' }, { name: 'Postman' }, { name: 'Insomnia' },
        { name: 'MongoDB Compass' }, { name: 'pgAdmin' }, { name: 'MySQL Workbench' },
        { name: 'SSMS' }, { name: 'XAMPP' },
        { name: 'Docker Desktop' }, { name: 'Lens (K8s IDE)' }, { name: 'k9s' },
        { name: 'Terraform CLI' }, { name: 'AWS CLI' }, { name: 'kubectl' }, { name: 'Helm CLI' },
        { name: 'ArgoCD UI' }, { name: 'GitHub Actions' }, { name: 'Jenkins' },
        { name: 'Xcode Cloud' }, { name: 'Fastlane' },
        { name: 'SonarQube' }, { name: 'Trivy' }, { name: 'Gitleaks' },
        { name: 'Grafana' }, { name: 'Prometheus' }, { name: 'Datadog' },
        { name: 'CloudWatch Console' }, { name: 'AWS Console' }, { name: 'Kibana' },
        { name: 'HashiCorp Vault UI' }, { name: 'Keycloak Admin' },
        { name: 'iTerm2 / Terminal' }, { name: 'Putty' }, { name: 'SSH / SCP' },
        { name: 'Git' }, { name: 'GitHub' }, { name: 'GitLab' }, { name: 'Bitbucket' },
        { name: 'Slack' }, { name: 'Notion' }, { name: 'Linear' },
    ];

    const container = document.getElementById('all-skills-container');
    tools.forEach((tool, index) => {
        const delay = (index * 0.02).toFixed(2);
        container.innerHTML += `<div class="skill-item wow fadeInUp" data-wow-delay="${delay}s" data-category="tools"><span class="skill-badge badge-tools">${tool.name}</span></div>`;
    });
});

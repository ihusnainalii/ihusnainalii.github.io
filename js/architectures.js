document.addEventListener("DOMContentLoaded", function() {
    const architectures = [
        { name: 'Clean Architecture' }, { name: 'MVVM-C' }, { name: 'MVVM' }, { name: 'MVP' },
        { name: 'MVC' }, { name: 'VIPER' }, { name: 'GitOps' }, { name: 'Microservices' },
        { name: 'Serverless Architecture' }, { name: 'Event-Driven Architecture' },
        { name: 'Infrastructure as Code' }, { name: 'Blue/Green Deployments' },
        { name: 'Canary Deployments' }, { name: 'Service Mesh' }, { name: 'Multi-Tier Architecture' },
        { name: 'Repository Pattern' }, { name: 'SOLID Principles' }, { name: 'DDD' },
        { name: 'Zero-Trust Security' }, { name: 'Multi-Account Strategy' },
    ];

    const container = document.getElementById('all-skills-container');
    architectures.forEach((arch, index) => {
        const delay = (index * 0.02).toFixed(2);
        container.innerHTML += `<div class="skill-item wow fadeInUp" data-wow-delay="${delay}s" data-category="arch"><span class="skill-badge badge-arch">${arch.name}</span></div>`;
    });
});

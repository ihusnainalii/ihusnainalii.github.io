document.addEventListener("DOMContentLoaded", function() {
    const skills = [
        { name: 'SwiftUI'},
        { name: 'Combine'},
        { name: 'RxSwift'},
        { name: 'ARkit'},
        { name: 'RealityKit'},
        { name: 'Socket.io'},
        { name: 'CocaPods'},
        { name: 'SPM'},
        { name: 'CoreData'},
        { name: 'Realm'},
        { name: 'SQLite'},
        { name: 'GraphQL'},
        { name: 'Apollo'},
        { name: 'Amplify'},
        { name: 'Async Programming'},
        { name: 'Core Animation'},
        { name: 'Core Graphics '},
        { name: 'Auto layouts'},
        { name: 'Interface Builder'},
        { name: 'CoreML'},
        { name: 'Firebase'},
        { name: 'Google Maps'},
        { name: 'MapKit'},
        { name: 'Tensor Flow'},
        { name: 'Vision'},
        { name: 'C-based libraries'},
        { name: 'CI/CD'},
        { name: 'xcodeCloud'},
        { name: 'Fastlane'},
        { name: 'Unit Testing'},
        { name: 'UI Testing'},
        { name: 'TDD'},
        { name: 'Integration testing'},
        { name: 'Push Notification'},
        { name: 'REST API'},
        { name: 'Social Media API'},
        { name: 'Payment gateways'},
        { name: 'Multi-threading'},
        { name: 'Memory Management'},
        { name: 'Version Control with Git'},
        { name: 'Code Review'},
        { name: 'Debugging'},
        { name: 'Instruments'},
    ];

    const skillsContainer = document.getElementById('skills-container');

    // Loop through skills array and generate HTML for each skill
    skills.forEach(skill => {
        const skillHTML = `
            <div class="skill-item">
                <p class="skill-title">${skill.name}</p>
            </div>
        `;
        
        // Append the generated HTML to the skillsContainer
        skillsContainer.innerHTML += skillHTML;
    });
});
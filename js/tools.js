document.addEventListener("DOMContentLoaded", function() {
    const tools = [
        { name: 'XCode'},
        { name: 'Visual studio code'},
        { name: 'SourceTree' },
        { name: 'Github Desktop'},
        { name: 'Sketch'},
        { name: 'Figma'},
        { name: 'AdobeXD'},
        { name: 'Jira'},
        { name: 'Postman'},
        { name: 'MongoDB Studio'},
        { name: 'XAMPP'},
        { name: 'Lens' },
        { name: 'pgAdmin' },
        { name: 'SSMS (SQL Server Management Studio)' },
        { name: 'Docker Desktop' },
        { name: 'Terraform CLI' },
        { name: 'AWS CLI' },
        { name: 'GitHub Actions' },
        { name: 'Jenkins' },
        { name: 'Xcode Cloud' },
        { name: 'Fastlane' },
        { name: 'MongoDB Compass' },
        { name: 'MySQL Workbench' },
        { name: 'CloudWatch Console' },
        { name: 'Putty / Terminal / iTerm' }
    ];

    const skillsContainer = document.getElementById('tools-container');

    // Loop through tools array and generate HTML for each skill
    tools.forEach(tool => {
        const skillHTML = `
            <div class="skill-item">
                <p class="skill-title">${tool.name}</p>
            </div>
        `;
        
        // Append the generated HTML to the skillsContainer
        skillsContainer.innerHTML += skillHTML;
    });
});
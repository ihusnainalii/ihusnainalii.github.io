document.addEventListener("DOMContentLoaded", function() {
    const tools = [
        { name: 'XCode'},
        { name: 'Visual Studio'},
        { name: 'Source Tree'},
        { name: 'Github Desktop'},
        { name: 'Sketch'},
        { name: 'Figma'},
        { name: 'AdobeXD'},
        { name: 'Jira'},
        { name: 'Postman'},
        { name: 'MongoDB Studio'},
        { name: 'XAMPP'}
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
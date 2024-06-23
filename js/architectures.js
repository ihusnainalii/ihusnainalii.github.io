document.addEventListener("DOMContentLoaded", function() {
    const architectures = [
        { name: 'Clean'},
        { name: 'MVVM-C'},
        { name: 'MVVM'},
        { name: 'MVP'},
        { name: 'MVC'},
        { name: 'Viper'},
    ];

    const skillsContainer = document.getElementById('architecture-container');

    // Loop through architectures array and generate HTML for each skill
    architectures.forEach(architecture => {
        const skillHTML = `
            <div class="skill-item">
                <p class="skill-title">${architecture.name}</p>
            </div>
        `;
        
        // Append the generated HTML to the skillsContainer
        skillsContainer.innerHTML += skillHTML;
    });
});
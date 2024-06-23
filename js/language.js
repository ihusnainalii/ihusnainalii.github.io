document.addEventListener("DOMContentLoaded", function() {
    // Array of skills with their names and percentages
    const skills = [
        { name: 'Swift', percent: 95, imageURL: "images/logo/swift.png" },
        { name: 'Objective C', percent: 90, imageURL: "images/logo/objc.png" },
        { name: 'React native', percent: 90, imageURL: "images/logo/reactnative.png" },
        { name: 'Flutter', percent: 70, imageURL: "images/logo/flutter.png" },
    ];

    const skillItemsContainer = document.getElementById('language-items');

    // Loop through skills array and generate HTML for each skill
    skills.forEach(skill => {
        const skillItemHTML = `
            <div class="col-lg-3 col-6">
                <div class="de-skill-item bg-light-2 p-5" data-bottom-top="transform: translateX(150px);" data-top-bottom="transform: translateX(-150px);">
                    <img src="${skill.imageURL}" alt="${skill.name}">
                    <div class="de_count">
                        <h3><span class="timer" data-to="${skill.percent}" data-speed="2500">0</span>%</h3>
                        <span>${skill.name}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Append the generated HTML to the skillItemsContainer
        skillItemsContainer.innerHTML += skillItemHTML;
    });
});
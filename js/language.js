document.addEventListener("DOMContentLoaded", function() {
    const skills = [
        { name: 'Swift',          percent: 95, imageURL: "images/logo/swift.png" },
        { name: 'Objective-C',    percent: 90, imageURL: "images/logo/objc.png" },
        { name: 'React Native',   percent: 90, imageURL: "images/logo/reactnative.png" },
        { name: 'Flutter',        percent: 70, imageURL: "images/logo/flutter.png" },
        { name: 'Terraform HCL',  percent: 90, icon: 'fa fa-layer-group',  iconColor: '#7B42BC' },
        { name: 'YAML',           percent: 95, icon: 'fa fa-code',          iconColor: '#E85D04' },
        { name: 'Bash / Shell',   percent: 85, icon: 'fa fa-terminal',      iconColor: '#1D3557' },
        { name: 'Python',         percent: 75, icon: 'fab fa-python',       iconColor: '#3776AB' },
        { name: 'Groovy (Jenkins)',percent: 70, icon: 'fa fa-cogs',         iconColor: '#4A90D9' },
        { name: 'JSON / HCL',     percent: 90, icon: 'fa fa-file-code',    iconColor: '#20C997' },
    ];

    const container = document.getElementById('language-items');

    skills.forEach(skill => {
        const visual = skill.imageURL
            ? `<img src="${skill.imageURL}" alt="${skill.name}" style="width:48px;height:48px;object-fit:contain;">`
            : `<div style="width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:rgba(0,0,0,0.05);">
                   <i class="${skill.icon}" style="font-size:1.6rem;color:${skill.iconColor};"></i>
               </div>`;

        const html = `
            <div class="col-lg-2 col-md-3 col-4">
                <div class="lang-card">
                    ${visual}
                    <div class="lang-info">
                        <div class="lang-bar-wrap">
                            <div class="lang-bar" style="width:${skill.percent}%;background:${skill.iconColor || 'var(--primary-color)'};"></div>
                        </div>
                        <div class="lang-meta">
                            <span class="lang-name">${skill.name}</span>
                            <span class="lang-pct">${skill.percent}%</span>
                        </div>
                    </div>
                </div>
            </div>`;

        container.innerHTML += html;
    });
});

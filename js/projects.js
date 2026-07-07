const projects = [
    {
        title: "VTryOn Everyone",
        type: "ipad",
        url: "https://apps.apple.com/us/app/vtryon-everyone/id1513287455",
        description: "Advanced virtual try-on shopping experience using ARKit and body dimension tracking. Users try clothing virtually before buying.",
        image: "images/projects/VTryOn.jpg",
        tags: ["ARKit", "Swift", "CoreML", "iPad", "MVVM"]
    },
    {
        title: "Pretty Pointy",
        type: "ios",
        url: "https://itunes.apple.com/ae/app/pretty-pointy-%D8%A8%D8%B1%D9%8A%D8%AA%D9%8A-%D8%A8%D9%88%D9%8A%D9%86%D8%AA%D9%8A/id1367552041?mt=8",
        description: "Beauty booking platform offering ease and convenience for salon and wellness services on demand.",
        image: "images/projects/PrettyPointy.jpg",
        tags: ["Swift", "UIKit", "Firebase", "Payment Gateway", "MVVM"]
    },
    {
        title: "Jonple",
        type: "react-native",
        url: "https://apps.apple.com/gb/app/jonple/id1493343667",
        description: "Fitness and wellness app with tailored workout plans, bespoke nutrition, and real professional coaching.",
        image: "images/projects/jonple.jpg",
        tags: ["React Native", "Firebase", "REST API", "Cross-Platform"]
    },
    {
        title: "Mathlete",
        type: "ios",
        url: "https://apps.apple.com/pk/app/mathlete-lets-play-math/id1498595211",
        description: "Interactive math quiz competition app launched in collaboration with McDonald's Pakistan for students.",
        image: "images/projects/mathlete.jpg",
        tags: ["Swift", "UIKit", "Firebase", "Game Logic", "MVC"]
    },
    {
        title: "SwiftRyde - Passenger",
        type: "ios",
        url: "https://apps.apple.com/us/app/swiftryde-passenger/id1380744886",
        description: "Ride-hailing passenger app with real-time driver tracking, quick cashout, and flexible travel options.",
        image: "images/projects/SwiftRydePassenger.jpg",
        tags: ["Swift", "Google Maps", "Socket.io", "CoreLocation", "MVVM"]
    },
    {
        title: "RENOLIT AXS",
        type: "ipad",
        url: "https://apps.apple.com/de/app/renolit-axs/id1585628382",
        description: "Enterprise B2B app with ARKit measurements, surface decoration via C++/OpenCV, and offline data sync.",
        image: "images/projects/renolit.jpg",
        tags: ["ARKit", "OpenCV", "C++", "RxSwift", "Realm", "MVVM-C"]
    },
    {
        title: "KSC APP",
        type: "ios",
        url: "https://apps.apple.com/us/app/ksc-app/id1417115202",
        description: "Official app for KSC football club — live scores, news, push notifications, and Bluecode payment gateway.",
        image: "images/projects/ksc.jpg",
        tags: ["Swift", "Socket.io", "Firebase", "RxSwift", "AdMob", "MVVM"]
    },
    {
        title: "KSC TV",
        type: "tvos",
        url: "https://apps.apple.com/de/app/ksc-tv/id1596881456",
        description: "Official tvOS streaming app for KSC fans — exclusive live streams, DREI60 videos, and club highlights.",
        image: "images/projects/ksc_tv.jpg",
        tags: ["tvOS", "Swift", "RxSwift", "Alamofire", "AdMob", "MVVM"]
    },
    {
        title: "StaySafe",
        type: "ios",
        url: "https://apps.apple.com/pk/app/staysafe-by-ili-digital/id1562835903",
        description: "Workplace safety quiz app with real-time multiplayer gameplay, image-linked questions, and four question types.",
        image: "images/projects/staysafe.jpg",
        tags: ["Swift", "Socket.io", "Firebase", "RxSwift", "MVVM"]
    },
    {
        title: "TE to GO",
        type: "ios",
        url: "https://apps.apple.com/pk/app/te-to-go/id1614294679",
        description: "Team collaboration and knowledge-sharing platform with token rewards, leaderboards, and team-based gameplay.",
        image: "images/projects/tetogo.png",
        tags: ["Swift", "Firebase", "RxSwift", "Alamofire", "MVVM"]
    }
];

const platformBadge = {
    'ios':          { label: 'iOS',          icon: 'fab fa-apple',     cls: 'plt-ios' },
    'ipad':         { label: 'iPadOS',        icon: 'fab fa-apple',     cls: 'plt-ipad' },
    'tvos':         { label: 'tvOS',          icon: 'fab fa-apple',     cls: 'plt-tvos' },
    'react-native': { label: 'React Native',  icon: 'fab fa-react',     cls: 'plt-rn' },
    'flutter':      { label: 'Flutter',       icon: 'fa fa-mobile-alt', cls: 'plt-flutter' },
};

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('ios-works-container');
    if (!container) return;

    projects.forEach((project, index) => {
        const delay   = (index * 0.08).toFixed(2);
        const badge   = platformBadge[project.type] || platformBadge['ios'];
        const tagsHTML = project.tags.map(t => `<span class="devops-tag">${t}</span>`).join('');

        const cardHTML = `
            <div class="ios-card wow fadeInUp" data-wow-delay="${delay}s">
                <div class="ios-card-body">
                    <div class="ios-card-title-row">
                        <h4 class="devops-card-title" style="margin:0;flex:1;">${project.title}</h4>
                        <span class="ios-platform-badge ${badge.cls}">
                            <i class="${badge.icon}"></i> ${badge.label}
                        </span>
                    </div>
                    <p class="devops-card-desc">${project.description}</p>
                    <div class="devops-card-tags">${tagsHTML}</div>
                </div>
                <a href="${project.url}" target="_blank" class="ios-card-overlay" aria-label="View ${project.title}">
                    <img src="${project.image}" alt="${project.title}" class="ios-card-img">
                    <div class="ios-card-overlay-label">
                        <i class="fab fa-apple"></i> View on App Store
                    </div>
                </a>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
});

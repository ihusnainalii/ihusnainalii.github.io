const projects = [
    {
        title: "VTryOn Everyone",
        platform: "iPad Application",
        url: "https://apps.apple.com/us/app/vtryon-everyone/id1513287455",
        description: "Virtual TryOn - Try it, then Buy it! It is an advanced virtual shopping experience, which will give users the liberty to try the clothing stuff before buying. By having a virtual try-on environment, they can check what size will suit them as per their body dimensions, hence they could buy suitable products for them. So avoid the hassle of getting unfit clothes while shopping online.",
        image: "images/projects/VTryOn.jpg"
    },
    {
        title: "Pretty Pointy",
        platform: "iOS Mobile App",
        url: "https://itunes.apple.com/ae/app/pretty-pointy-%D8%A8%D8%B1%D9%8A%D8%AA%D9%8A-%D8%A8%D9%88%D9%8A%D9%86%D8%AA%D9%8A/id1367552041?mt=8",
        description: "A beauty booking experience with Ease & Convenience, wherever you are, whenever you want.",
        image: "images/projects/PrettyPointy.jpg"
    },
    {
        title: "Jonple",
        platform: "React Native Mobile App",
        url: "https://apps.apple.com/gb/app/jonple/id1493343667",
        description: "This app is a source for fitness, tailored workout plans, bespoke nutrition, wellness services, and more. With Jonple you can customize plans and feedback from real fitness, chef, and psychological professionals.",
        image: "images/projects/jonple.jpg"
    },
    {
        title: "Mathlete - Let’s Play Math",
        platform: "Native iOS App",
        url: "https://apps.apple.com/pk/app/mathlete-lets-play-math/id1498595211",
        description: "MATHLETE - Let’s Play Math! (A Project of ArhamSoft), has launched a quiz competition “McDonald’s MATHmania” in collaboration with McDonald’s Pakistan, through an interactive math quiz application for students. Students can develop their early math skills such as basic numerical operations while young teens can enhance their expertise on the foundation of mathematics with absolute enjoyment.",
        image: "images/projects/mathlete.jpg"
    },
    {
        title: "SwiftRyde - Passenger",
        platform: "Native iOS App",
        url: "https://apps.apple.com/us/app/swiftryde-passenger/id1380744886",
        description: "Help people with their everyday travel needs. SwfitRyde Driver App is all about flexibility to drive, high payouts, quick cash outs, rewards and more.",
        image: "images/projects/SwiftRydePassenger.jpg"
    },
    {
        title: "RENOLIT APP",
        platform: "iPad Application",
        url: "https://apps.apple.com/de/app/renolit-axs/id1585628382",
        description: "This is a business app for internal users of RENOLIT, it provides user an ability to make measurements with manual and automatic mode (with ARkit) and decor any surface with our wrapper developed with C++ and OpenCV. Furthermore, user has an ability to store offline data which is then synchronized when the internet is available with both options to upload automatic or manual upload with user settings. Built with an MVVM clean architecture using ARKit, Realm for local storage of data, RxSwift, Alamofire, Crashlytics, OpenCV, and SwiftLint for code analytics.",
        image: "images/projects/renolit.jpg"
    },
    {
        title: "KSC APP",
        platform: "iOS Mobile Application",
        url: "https://apps.apple.com/us/app/ksc-app/id1417115202",
        description: "This is an app developed for KSC football club in which users can see live scores, latest news, and receive latest news and offers from push notifications. Built on MVVM pattern using Firebase, Socket.io (for live scoring), Google AdMob, Alamofire, RxSwift, RxCocoa, Google Analytics, Bluecode (Payment gateway) and Crashlytics.",
        image: "images/projects/ksc.jpg"
    },
    {
        title: "KSC TV APP",
        platform: "tvOS App",
        url: "https://apps.apple.com/de/app/ksc-tv/id1596881456",
        description: "In the KSC TV app, all videos about Karlsruhe SC are waiting for all fans of the blue and white. Current content about the KSC professionals, everything else that happens in the wildlife park as well as exclusive live streams and DREI60 videos. Built on MVVM pattern using Google AdMob, Alamofire, RxSwift, RxCocoa.",
        image: "images/projects/ksc_tv.jpg"
    },
    {
        title: "StaySafe",
        platform: "iOS Mobile App",
        url: "https://apps.apple.com/pk/app/staysafe-by-ili-digital/id1562835903",
        description: "StaySafe is the workplace safety quiz app. This means that while it's fun and playful, the app helps to refresh knowledge, trigger proactivity, and develop more mindfulness. StaySafe offers four different types of questions: Single Choice, Multiple Choice, True or False and Find the Mistake. All questions are linked to images to help users better understand the situation, context and message. The app is designed to be used efficiently at work, with challenging but intuitive questions presented in short game sessions. Built on MVVM pattern using Firebase for push notifications, Socket.io (for gameplay), Alamofire, RxSwift, RxCocoa, Google Analytics, and Crashlytics.",
        image: "images/projects/staysafe.jpg"
    },
    {
        title: "TE to GO",
        platform: "iOS Mobile App",
        url: "https://apps.apple.com/pk/app/te-to-go/id1614294679",
        description: "TE to Go is all about creating a better collaboration with your TE supplier. With TE to Go, the exchange of knowledge and prevention of inefficiencies is easy. In TE to Go, you will get together. One customer solution, one procurement and up to nine team members can build a Team. By playing Te to Go, your team will also collect Te to Go tokens that will allow you to raise your team rank, climb the leaderboard and unlock unique deals, which you only can find within the application. Built on MVVM pattern using Firebase for push notifications, Alamofire, RxSwift, RxCocoa, Google Analytics, and Crashlytics.",
        image: "images/projects/tetogo.png"
    }
];

const container = document.getElementById('items-carousel');

projects.forEach(project => {
    const projectHTML = `
        <div class="item overflow-hidden">
            <div class="wow custom-anim-right">
                <div class="card-image-1 mod-c">
                    <a href="${project.url}" target="_blank">
                        <div class="d-text">
                            <h3>${project.title}</h3>
                            <h5 class="d-tag">${project.platform}</h5>
                        </div>
                        <img src="${project.image}" class="img-fluid" alt="${project.title}">
                    </a>
                </div>
            </div>
        </div>
    `;
    container.innerHTML += projectHTML;
});
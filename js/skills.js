document.addEventListener("DOMContentLoaded", function() {
    const skills = [
        { name: 'Swift' }, { name: 'SwiftUI' }, { name: 'Objective-C' }, { name: 'UIKit' },
        { name: 'Combine' }, { name: 'RxSwift' }, { name: 'Async/Await' },
        { name: 'ARKit' }, { name: 'RealityKit' }, { name: 'CoreML' }, { name: 'Vision' },
        { name: 'CoreData' }, { name: 'SwiftData' }, { name: 'Realm' }, { name: 'SQLite' },
        { name: 'Core Animation' }, { name: 'Core Graphics' }, { name: 'CoreLocation' },
        { name: 'MapKit' }, { name: 'StoreKit' }, { name: 'HealthKit' }, { name: 'WatchKit' },
        { name: 'WidgetKit' }, { name: 'App Clips' }, { name: 'tvOS' }, { name: 'iPadOS' },
        { name: 'Auto Layouts' }, { name: 'Interface Builder' }, { name: 'Dark Mode' },
        { name: 'Accessibility (VoiceOver)' }, { name: 'Localization' }, { name: 'Biometric Auth' },
        { name: 'Keychain' }, { name: 'iBeacon' }, { name: 'Bluetooth/BLE' },
        { name: 'Deep Linking' }, { name: 'Universal Links' }, { name: 'Background Processing' },
        { name: 'Notification Service Extension' }, { name: 'REST API' }, { name: 'GraphQL' },
        { name: 'Apollo' }, { name: 'Amplify' }, { name: 'Socket.io' }, { name: 'Firebase' },
        { name: 'Google Maps' }, { name: 'TensorFlow' }, { name: 'Social Media API' },
        { name: 'Payment Gateways' }, { name: 'CocoaPods' }, { name: 'Swift Package Manager' },
        { name: 'React Native' }, { name: 'Flutter' }, { name: 'Unit Testing' },
        { name: 'UI Testing' }, { name: 'TDD' }, { name: 'XCTest' }, { name: 'Snapshot Testing' },
        { name: 'Quick/Nimble' }, { name: 'Integration Testing' }, { name: 'Xcode Cloud' },
        { name: 'Fastlane' }, { name: 'CI/CD' }, { name: 'Instruments & Profiling' },
        { name: 'Memory Management' }, { name: 'Memory Leak Detection' }, { name: 'Multi-threading' },
        { name: 'Push Notifications' }, { name: 'Version Control (Git)' },
        { name: 'Code Review' }, { name: 'Debugging' }, { name: 'C-based Libraries' },
    ];

    const container = document.getElementById('all-skills-container');
    skills.forEach((skill, index) => {
        const delay = (index * 0.02).toFixed(2);
        container.innerHTML += `<div class="skill-item wow fadeInUp" data-wow-delay="${delay}s" data-category="mobile"><span class="skill-badge badge-mobile">${skill.name}</span></div>`;
    });
});

// Initialize Lucide icons
lucide.createIcons();

// Data
const leaderboardData = [
    { rank: 1, name: "CyberMaster", points: 2500, badge: "🏆" },
    { rank: 2, name: "ByteHunter", points: 2350, badge: "🥈" },
    { rank: 3, name: "NetWarrior", points: 2200, badge: "🥉" },
    { rank: 4, name: "CodeNinja", points: 2100, badge: "⭐" },
    { rank: 5, name: "DataGuard", points: 2000, badge: "⭐" },
];

const dailyChallenges = [
    { title: "Malware Maze", difficulty: "Hard", reward: 500, icon: "🎮" },
    { title: "Phishing Defense", difficulty: "Medium", reward: 300, icon: "🛡️" },
    { title: "Crypto Challenge", difficulty: "Easy", reward: 200, icon: "🔐" },
];

const games = [
    { title: "Malware Maze", image: "/api/placeholder/300/200", difficulty: "Hard", url: "#" },
    { title: "Crypto Crusader", image: "/api/placeholder/300/200", difficulty: "Medium", url: "#" },
    { title: "Network Ninja", image: "/api/placeholder/300/200", difficulty: "Easy", url: "#" },
    { title: "Password Protector", image: "/api/placeholder/300/200", difficulty: "Medium", url: "#" },
    { title: "Security Sleuth", image: "/api/placeholder/300/200", difficulty: "Hard", url: "#" },
    { title: "Firewall Fighter", image: "/api/placeholder/300/200", difficulty: "Medium", url: "#" },
    { title: "Data Defender", image: "/api/placeholder/300/200", difficulty: "Easy", url: "#" },
    { title: "Hack Hunter", image: "/api/placeholder/300/200", difficulty: "Hard", url: "#" },
    { title: "Binary Battler", image: "/api/placeholder/300/200", difficulty: "Medium", url: "#" },
];

// Navigation
const navButtons = document.querySelectorAll('.nav-button');
const pages = document.querySelectorAll('.page-content');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const pageId = button.dataset.page;
        
        // Update active button
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Show selected page
        pages.forEach(page => {
            if (page.id === `${pageId}-page`) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        });
    });
});

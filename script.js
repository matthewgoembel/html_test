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
    { 
        title: "Malware Maze", 
        image: "/api/placeholder/300/200", 
        difficulty: "Hard",
        url: "/games/malware_maze"
    },
    { 
        title: "Phaser Game 1", 
        image: "/api/placeholder/300/200", 
        difficulty: "Medium",
        url: "/games/phaser_game_1"
    }
];

// Populate Daily Challenges
const challengesContainer = document.querySelector('.challenges-container');
if (challengesContainer) {
    challengesContainer.innerHTML = dailyChallenges.map(challenge => `
        <div class="challenge-item">
            <div class="item-content">
                <div class="item-info">
                    <span>${challenge.icon}</span>
                    <div>
                        <h3 class="text-sm font-semibold text-white">${challenge.title}</h3>
                        <span class="text-xs difficulty-${challenge.difficulty.toLowerCase()}">${challenge.difficulty}</span>
                    </div>
                </div>
                <span class="text-yellow-400 text-sm font-bold">+${challenge.reward}</span>
            </div>
        </div>
    `).join('');
}

// Populate Leaderboard
const leaderboardContainer = document.querySelector('.leaderboard-container');
if (leaderboardContainer) {
    leaderboardContainer.innerHTML = leaderboardData.map(player => `
        <div class="leaderboard-item">
            <div class="item-content">
                <div class="item-info">
                    <span>${player.badge}</span>
                    <div>
                        <h3 class="text-sm font-semibold text-white">${player.name}</h3>
                        <span class="text-xs text-blue-400">Rank #${player.rank}</span>
                    </div>
                </div>
                <span class="text-yellow-400 text-sm font-bold">${player.points}</span>
            </div>
        </div>
    `).join('');
}

// Populate Games Grid
const gamesGrid = document.querySelector('.games-grid');
if (gamesGrid) {
    gamesGrid.innerHTML = games.map(game => `
        <div class="game-card">
            <img src="${game.image}" alt="${game.title}" class="game-image">
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <div class="game-difficulty difficulty-${game.difficulty.toLowerCase()}">${game.difficulty}</div>
                <a href="${game.url}" class="play-button" target="_blank">Play Now</a>
            </div>
        </div>
    `).join('');
}

// API Test functionality
const testApiButton = document.getElementById('test-api');
const apiResult = document.getElementById('api-result');

if (testApiButton && apiResult) {
    testApiButton.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/test');
            const data = await response.json();
            apiResult.textContent = `API Test Result: ${JSON.stringify(data)}`;
        } catch (error) {
            apiResult.textContent = `API Test Error: ${error.message}`;
        }
    });
}

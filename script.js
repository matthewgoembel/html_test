document.addEventListener("DOMContentLoaded", function() {
    loadLeaderboard();
    loadChallenges();
    loadGames();
});

function changePage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function loadLeaderboard() {
    const leaderboard = [
        { name: "CyberMaster", points: 2500 },
        { name: "ByteHunter", points: 2350 },
        { name: "NetWarrior", points: 2200 },
        { name: "CodeNinja", points: 2100 },
        { name: "DataGuard", points: 2000 }
    ];

    const leaderboardList = document.getElementById("leaderboard-list");
    leaderboard.forEach(player => {
        let li = document.createElement("li");
        li.textContent = `${player.name} - ${player.points} pts`;
        leaderboardList.appendChild(li);
    });
}

function loadChallenges() {
    const challenges = [
        { title: "Malware Maze", difficulty: "Hard", reward: 500 },
        { title: "Phishing Defense", difficulty: "Medium", reward: 300 },
        { title: "Crypto Challenge", difficulty: "Easy", reward: 200 }
    ];

    const challengeList = document.getElementById("challenge-list");
    challenges.forEach(challenge => {
        let li = document.createElement("li");
        li.textContent = `${challenge.title} - ${challenge.difficulty} - Reward: ${challenge.reward}`;
        challengeList.appendChild(li);
    });
}

function loadGames() {
    const games = [
        { title: "Malware Maze", image: "assets/game1.jpg" },
        { title: "Crypto Crusader", image: "assets/game2.jpg" },
        { title: "Network Ninja", image: "assets/game3.jpg" }
    ];

    const gameGallery = document.getElementById("game-gallery");
    games.forEach(game => {
        let div = document.createElement("div");
        div.className = "game-item";
        div.innerHTML = `<img src="${game.image}" alt="${game.title}"><p>${game.title}</p>`;
        gameGallery.appendChild(div);
    });
}

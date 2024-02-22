const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Mystic",
  sport: "Kanto Region",
  year: 2024,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Pikachu",
      type: "electric",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Flareon",
      type: "fire",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "Moltres",
      type: "fire",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
    {
      name: "Magmar",
      type: "fire",
      number: 4,
      isCaptain: false,
      nickname: "Bichi",
    },
    {
      name: "Tentacool",
      type: "water",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "Squirtle",
      type: "water",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
    },
    {
      name: "Electrobuzz",
      type: "electric",
      number: 7,
      isCaptain: false,
      nickname: "Burru",
    },
    {
      name: "Blastoise",
      type: "water",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Gyrados",
      type: "water",
      number: 9,
      isCaptain: false,
      nickname: "El Cuchu",
    },
    {
      name: "Blaziken",
      type: "fire",
      number: 10,
      isCaptain: true,
      nickname: "El Pibe de Oro",
    },
    {
      name: "Jolteon",
      type: "electric",
      number: 11,
      isCaptain: false,
      nickname: "Zappy",
    },
    {
      name: "Rapidash",
      type: "fire",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Magickarp",
      type: "water",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Charizard",
      type: "fire",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Geodude",
      type: "ground",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
    },
    {
      name: "Suicune",
      type: "water",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Magnemite",
      type: "electric",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sandshrew",
      type: "ground",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Horsea",
      type: "water",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
    },
    {
      name: "Arcanine",
      type: "fire",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ponyta",
      type: "fire",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "Diglet",
      type: "ground",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, type, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${name} ${isCaptain ? "(Shining)" : ""}</h2>
          <p>Type: ${type}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "electric":
      setPlayerCards(players.filter((player) => player.type === "electric"));
      break;
    case "fire":
      setPlayerCards(
        players.filter((player) => player.type === "fire")
      );
      break;
    case "water":
      setPlayerCards(
        players.filter((player) => player.type === "water")
      );
      break;
    case "ground":
      setPlayerCards(
        players.filter((player) => player.type === "ground")
      );
      break;
      default: setPlayerCards();
    }
});
import "./style.css";

const options = [
  "🧳",
  "🌂",
  "☂️",
  "🧵",
  "🪡",
  "🪢",
  "🧶",
  "👓",
  "🕶",
  "🥽",
  "🥼",
  "🦺",
  "👔",
  "👕",
  "👖",
  "🧣",
  "🧤",
  "🧥",
  "🧦",
  "👗",
  "👘",
  "🥻",
  "🩴",
  "🩱",
  "🩲",
  "🩳",
  "👙",
  "👚",
  "👛",
  "👜",
  "👝",
  "🎒",
  "👞",
  "👟",
  "🥾",
  "🥿",
  "👠",
  "👡",
  "🩰",
  "👢",
  "👑",
  "👒",
  "🎩",
  "🎓",
  "🧢",
  "⛑",
  "🪖",
  "💄",
  "💍",
  "💼",
];

const cardsOnTable = options.concat(options).sort(() => Math.random() - 0.5);

const appContainer = document.querySelector("#app");
let selectedCards = [];

const verifyEquals = () => {
  if (
    selectedCards.length === 2 &&
    selectedCards[0].textContent === selectedCards[1].textContent
  ) {
    selectedCards[0].style.backgroundColor = "blue";
    selectedCards[1].style.backgroundColor = "blue";
  } else {
  }
  selectedCards = [];
};

const selectCard = (card) => {
  if (!selectedCards.length) {
    selectedCards.push(card);
    return;
  } else {
    selectedCards.push(card);
  }
  verifyEquals();
};

const createCard = (content) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.addEventListener("click", (item) => selectCard(item.target));

  const inner = document.createElement("div");
  inner.classList.add("inner-card");
  card.appendChild(inner);

  const back = document.createElement("div");
  back.classList.add("back-card");
  back.innerHTML = "?";
  inner.appendChild(back);

  const front = document.createElement("div");
  front.classList.add("front-card");
  front.appendChild(document.createTextNode(content));
  inner.appendChild(front);

  // card.appendChild(document.createTextNode(content));

  return card;
};

cardsOnTable.map((option) => {
  return appContainer.insertAdjacentElement("beforeend", createCard(option));
});

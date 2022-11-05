import "./style.css";
import "./web-components/card-item";

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
  if (selectedCards.length === 2) {
    const [first, second] = selectedCards;
    const firstContent = first.querySelector(".front-card").innerHTML;
    const secondContent = second.querySelector(".front-card").innerHTML;

    if (secondContent === firstContent) {
      first.classList.replace("flipped", "matched");
      second.classList.replace("flipped", "matched");
      first.replaceWith(first.cloneNode(true));
      second.replaceWith(second.cloneNode(true));
    }
  }
};

const addToStack = (card) => {
  if (selectedCards.length < 2) selectedCards.push(card);
};

const flipCard = (card) => {
  if (card.classList.contains("flipped") || card.classList.contains("matched"))
    return;

  if (selectedCards.length === 2) {
    selectedCards.forEach((item) => item.classList.remove("flipped"));
    selectedCards = [];
  }

  card.classList.add("flipped");

  addToStack(card);
  verifyEquals();
};

const createCard = (content) => {
  const card = document.createElement("button");
  card.classList.add("card");
  card.addEventListener("click", (item) => flipCard(card));

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

  return card;
};

cardsOnTable.map((option) => {
  return appContainer.insertAdjacentElement("beforeend", createCard(option));
});

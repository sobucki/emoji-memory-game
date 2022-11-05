class Card extends HTMLElement {
  constructor() {
    super();
    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.styles());

    const card = document.createElement("button");
    card.classList.add("card");
    card.addEventListener("click", (item) => this.flipCard(card));

    const inner = document.createElement("div");
    inner.classList.add("inner-card");
    card.appendChild(inner);

    const back = document.createElement("div");
    back.classList.add("back-card");
    back.innerHTML = "?";
    inner.appendChild(back);

    const front = document.createElement("div");
    front.classList.add("front-card");
    front.appendChild(document.createTextNode("content"));
    inner.appendChild(front);

    shadow.append(card);

    // return card;
  }

  flipCard(card) {
    if (
      card.classList.contains("flipped") ||
      card.classList.contains("matched")
    )
      return;

    // if (selectedCards.length === 2) {
    //   selectedCards.forEach((item) => item.classList.remove("flipped"));
    //   selectedCards = [];
    // }

    card.classList.add("flipped");
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
      width: 60px;
      height: 60px;
      border: 1px solid #b9b9b9;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      perspective: 1000px;
      cursor: pointer;
      padding: 0;
    }
    
    .inner-card {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .flipped .inner-card {
      transform: rotateY(180deg);
    }
    
    .matched .inner-card {
      transform: rotateY(180deg);
      cursor: default;
    }
    
    .front-card {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      transform: rotateY(180deg);
    }
    
    .back-card {
      background-color: #0ea5e9;
      color: #f5f5f5;
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }
    `;
    return style;
  }
}

customElements.define("card-item", Card);

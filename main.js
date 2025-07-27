// main.js

// 花札のデータ定義
const HanafudaCards = [
    { id: 1, month: 1, name: "松に鶴", type: "hikari", image: "textures/hanafuda_01_01.jpg" },
    { id: 2, month: 1, name: "松に赤短", type: "tanzaku", image: "textures/hanafuda_01_02.jpg" },
    { id: 3, month: 1, name: "松", type: "kasu", image: "textures/hanafuda_01_03.jpg" },
    { id: 4, month: 1, name: "松", type: "kasu", image: "textures/hanafuda_01_04.jpg" },
    { id: 5, month: 2, name: "梅に鶯", type: "tane", image: "textures/hanafuda_02_01.jpg" },
    { id: 6, month: 2, name: "梅に赤短", type: "tanzaku", image: "textures/hanafuda_02_02.jpg" },
    { id: 7, month: 2, name: "梅", type: "kasu", image: "textures/hanafuda_02_03.jpg" },
    { id: 8, month: 2, name: "梅", type: "kasu", image: "textures/hanafuda_02_04.jpg" },
    { id: 9, month: 3, name: "桜に幕", type: "hikari", image: "textures/hanafuda_03_01.jpg" },
    { id: 10, month: 3, name: "桜に赤短", type: "tanzaku", image: "textures/hanafuda_03_02.jpg" },
    { id: 11, month: 3, name: "桜", type: "kasu", image: "textures/hanafuda_03_03.jpg" },
    { id: 12, month: 3, name: "桜", type: "kasu", image: "textures/hanafuda_03_04.jpg" },
    { id: 13, month: 4, name: "藤に不如帰", type: "tane", image: "textures/hanafuda_04_01.jpg" },
    { id: 14, month: 4, name: "藤に短冊", type: "tanzaku", image: "textures/hanafuda_04_02.jpg" },
    { id: 15, month: 4, name: "藤", type: "kasu", image: "textures/hanafuda_04_03.jpg" },
    { id: 16, month: 4, name: "藤", type: "kasu", image: "textures/hanafuda_04_04.jpg" },
    { id: 17, month: 5, name: "菖蒲に八ツ橋", type: "tane", image: "textures/hanafuda_05_01.jpg" },
    { id: 18, month: 5, name: "菖蒲に短冊", type: "tanzaku", image: "textures/hanafuda_05_02.jpg" },
    { id: 19, month: 5, name: "菖蒲", type: "kasu", image: "textures/hanafuda_05_03.jpg" },
    { id: 20, month: 5, name: "菖蒲", type: "kasu", image: "textures/hanafuda_05_04.jpg" },
    { id: 21, month: 6, name: "牡丹に蝶", type: "tane", image: "textures/hanafuda_06_01.jpg" },
    { id: 22, month: 6, name: "牡丹に青短", type: "tanzaku", image: "textures/hanafuda_06_02.jpg" },
    { id: 23, month: 6, name: "牡丹", type: "kasu", image: "textures/hanafuda_06_03.jpg" },
    { id: 24, month: 6, name: "牡丹", type: "kasu", image: "textures/hanafuda_06_04.jpg" },
    { id: 25, month: 7, name: "萩に猪", type: "tane", image: "textures/hanafuda_07_01.jpg" },
    { id: 26, month: 7, name: "萩に短冊", type: "tanzaku", image: "textures/hanafuda_07_02.jpg" },
    { id: 27, month: 7, name: "萩", type: "kasu", image: "textures/hanafuda_07_03.jpg" },
    { id: 28, month: 7, name: "萩", type: "kasu", image: "textures/hanafuda_07_04.jpg" },
    { id: 29, month: 8, name: "芒に月", type: "hikari", image: "textures/hanafuda_08_01.jpg" },
    { id: 30, month: 8, name: "芒に雁", type: "tane", image: "textures/hanafuda_08_02.jpg" },
    { id: 31, month: 8, name: "芒", type: "kasu", image: "textures/hanafuda_08_03.jpg" },
    { id: 32, month: 8, name: "芒", type: "kasu", image: "textures/hanafuda_08_04.jpg" },
    { id: 33, month: 9, name: "菊に盃", type: "tane", image: "textures/hanafuda_09_01.jpg" },
    { id: 34, month: 9, name: "菊に青短", type: "tanzaku", image: "textures/hanafuda_09_02.jpg" },
    { id: 35, month: 9, name: "菊", type: "kasu", image: "textures/hanafuda_09_03.jpg" },
    { id: 36, month: 9, name: "菊", type: "kasu", image: "textures/hanafuda_09_04.jpg" },
    { id: 37, month: 10, name: "紅葉に鹿", type: "tane", image: "textures/hanafuda_10_01.jpg" },
    { id: 38, month: 10, name: "紅葉に青短", type: "tanzaku", image: "textures/hanafuda_10_02.jpg" },
    { id: 39, month: 10, name: "紅葉", type: "kasu", image: "textures/hanafuda_10_03.jpg" },
    { id: 40, month: 10, name: "紅葉", type: "kasu", image: "textures/hanafuda_10_04.jpg" },
    { id: 41, month: 11, name: "柳に小野道風", type: "hikari", image: "textures/hanafuda_11_01.jpg" },
    { id: 42, month: 11, name: "柳に燕", type: "tane", image: "textures/hanafuda_11_02.jpg" },
    { id: 43, month: 11, name: "柳に短冊", type: "tanzaku", image: "textures/hanafuda_11_03.jpg" },
    { id: 44, month: 11, name: "柳", type: "kasu", image: "textures/hanafuda_11_04.jpg" },
    { id: 45, month: 12, name: "桐に鳳凰", type: "hikari", image: "textures/hanafuda_12_01.jpg" },
    { id: 46, month: 12, name: "桐に短冊", type: "tanzaku", image: "textures/hanafuda_12_02.jpg" },
    { id: 47, month: 12, name: "桐", type: "kasu", image: "textures/hanafuda_12_03.jpg" },
    { id: 48, month: 12, name: "桐", type: "kasu", image: "textures/hanafuda_12_04.jpg" },
];

// 役の定義
const YakuDefinitions = {
    goko: { name: "五光", points: 10 },
    shiko: { name: "四光", points: 8 },
    ameshiko: { name: "雨四光", points: 7 },
    sanko: { name: "三光", points: 5 },
    inoshikacho: { name: "猪鹿蝶", points: 5 },
    akatan: { name: "赤短", points: 6 },
    aotan: { name: "青短", points: 6 },
    tanzaku: { name: "短冊", points: 1 },
    tane: { name: "タネ", points: 1 },
    kasu: { name: "カス", points: 1 },
};

function checkYaku(cards) {
    const yaku = {};
    const counts = { hikari: 0, tane: 0, tanzaku: 0, kasu: 0 };
    const names = cards.map(c => c.name);

    for (const card of cards) {
        counts[card.type]++;
    }

    const hikariCards = cards.filter(c => c.type === 'hikari');
    const isAme = names.includes("柳に小野道風");

    if (hikariCards.length === 5) {
        yaku.goko = YakuDefinitions.goko;
    } else if (hikariCards.length === 4) {
        if (isAme) {
            yaku.ameshiko = YakuDefinitions.ameshiko;
        } else {
            yaku.shiko = YakuDefinitions.shiko;
        }
    } else if (hikariCards.length === 3 && !isAme) {
        yaku.sanko = YakuDefinitions.sanko;
    }

    if (names.includes("萩に猪") && names.includes("紅葉に鹿") && names.includes("牡丹に蝶")) {
        yaku.inoshikacho = YakuDefinitions.inoshikacho;
    }

    const tanzakuCards = cards.filter(c => c.type === 'tanzaku');
    const akatanCards = tanzakuCards.filter(c => ["松に赤短", "梅に赤短", "桜に赤短"].includes(c.name));
    if (akatanCards.length === 3) {
        yaku.akatan = YakuDefinitions.akatan;
    }

    const aotanCards = tanzakuCards.filter(c => ["牡丹に青短", "菊に青短", "紅葉に青短"].includes(c.name));
    if (aotanCards.length === 3) {
        yaku.aotan = YakuDefinitions.aotan;
    }

    if (tanzakuCards.length >= 5) {
        yaku.tanzaku = { ...YakuDefinitions.tanzaku, points: YakuDefinitions.tanzaku.points + (tanzakuCards.length - 5) };
    }

    const taneCards = cards.filter(c => c.type === 'tane');
    if (taneCards.length >= 5) {
        yaku.tane = { ...YakuDefinitions.tane, points: YakuDefinitions.tane.points + (taneCards.length - 5) };
    }

    if (counts.kasu >= 10) {
        yaku.kasu = { ...YakuDefinitions.kasu, points: YakuDefinitions.kasu.points + (counts.kasu - 10) };
    }

    let totalPoints = 0;
    for (const y in yaku) {
        totalPoints += yaku[y].points;
    }

    return { yaku, points: totalPoints };
}


// ゲームの状態を管理する変数
let deck = [];
let field = [];
let playerHand = [];
let aiHand = [];
let playerCapturedCards = [];
let aiCapturedCards = [];
let currentPlayer = 'player';
let isKoiKoi = false;

// ゲームの初期化
function initializeGame() {
    deck = [...HanafudaCards].sort(() => Math.random() - 0.5);
    field = deck.splice(0, 8);
    playerHand = deck.splice(0, 8);
    aiHand = deck.splice(0, 8);
    playerCapturedCards = [];
    aiCapturedCards = [];
    currentPlayer = 'player';
    isKoiKoi = false;
    renderGameBoard();
}

function renderGameBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = `
        <div id="ai-area" class="player-area">
            <div class="info">
                <h3>AI</h3>
                <p>得点: <span id="ai-score">0</span></p>
                <div id="ai-yaku" class="yaku-display"></div>
            </div>
            <div class="cards-container hand-cards" id="ai-hand">
                <!-- AIの手札 -->
            </div>
            <div class="captured-area">
                <h4>取った札</h4>
                <div class="cards-container" id="ai-captured-cards">
                    <!-- AIが取った札 -->
                </div>
            </div>
        </div>

        <div class="field-area">
            <div class="cards-container field-cards" id="field-cards">
                <!-- 場札 -->
            </div>
            <div class="deck-area" id="deck-area">
                <!-- 山札 -->
            </div>
        </div>

        <div id="player-area" class="player-area">
            <div class="info">
                <h3>プレイヤー</h3>
                <p>得点: <span id="player-score">0</span></p>
                <div id="player-yaku" class="yaku-display"></div>
            </div>
            <div class="cards-container hand-cards" id="player-hand">
                <!-- プレイヤーの手札 -->
            </div>
            <div class="captured-area">
                <h4>取った札</h4>
                <div class="cards-container" id="player-captured-cards">
                    <!-- プレイヤーが取った札 -->
                </div>
            </div>
        </div>
    `;

    renderCards();
    updateScores();
}

function renderCards() {
    // AI Hand
    const aiHandDiv = document.getElementById('ai-hand');
    aiHandDiv.innerHTML = '';
    aiHand.forEach(() => aiHandDiv.appendChild(createCardElement(null, true)));

    // Field Cards
    const fieldCardsDiv = document.getElementById('field-cards');
    fieldCardsDiv.innerHTML = '';
    field.forEach(card => fieldCardsDiv.appendChild(createCardElement(card)));

    // Player Hand
    const playerHandDiv = document.getElementById('player-hand');
    playerHandDiv.innerHTML = '';
    playerHand.forEach(card => {
        const cardElement = createCardElement(card);
        if (currentPlayer === 'player') {
            cardElement.classList.add('playable');
            cardElement.addEventListener('click', () => playPlayerCard(card));
            cardElement.addEventListener('mouseover', () => highlightMatchingFieldCards(card));
            cardElement.addEventListener('mouseout', clearHighlights);
        }
        playerHandDiv.appendChild(cardElement);
    });

    // Captured Cards
    document.getElementById('ai-captured-cards').innerHTML = '';
    aiCapturedCards.forEach(card => document.getElementById('ai-captured-cards').appendChild(createCardElement(card)));
    document.getElementById('player-captured-cards').innerHTML = '';
    playerCapturedCards.forEach(card => document.getElementById('player-captured-cards').appendChild(createCardElement(card)));

    // Deck
    const deckAreaDiv = document.getElementById('deck-area');
    deckAreaDiv.innerHTML = '';
    if (deck.length > 0) {
        const deckCard = createCardElement(null, true);
        deckCard.innerHTML = `<p>${deck.length}</p>`;
        deckAreaDiv.appendChild(deckCard);
    }
}

function createCardElement(card, isBack = false) {
    const cardElement = document.createElement(isBack ? 'div' : 'img');
    cardElement.classList.add('card');
    if (isBack) {
        cardElement.classList.add('back');
    } else {
        cardElement.src = card.image;
        cardElement.alt = card.name;
        cardElement.dataset.id = card.id;
    }
    return cardElement;
}

function updateScores() {
    const playerResult = checkYaku(playerCapturedCards);
    document.getElementById('player-score').textContent = playerResult.points;
    document.getElementById('player-yaku').innerHTML = Object.values(playerResult.yaku).map(y => `${y.name} (${y.points}点)`).join('<br>');

    const aiResult = checkYaku(aiCapturedCards);
    document.getElementById('ai-score').textContent = aiResult.points;
    document.getElementById('ai-yaku').innerHTML = Object.values(aiResult.yaku).map(y => `${y.name} (${y.points}点)`).join('<br>');
}

async function playPlayerCard(card) {
    if (currentPlayer !== 'player') return;
    const cardIndex = playerHand.findIndex(c => c.id === card.id);
    if (cardIndex > -1) {
        const playedCard = playerHand.splice(cardIndex, 1)[0];
        await handleTurn(playedCard, playerCapturedCards);
    }
}

async function aiTurn() {
    if (currentPlayer !== 'ai') return;
    const cardToPlay = aiHand[Math.floor(Math.random() * aiHand.length)];
    aiHand.splice(aiHand.indexOf(cardToPlay), 1);
    await handleTurn(cardToPlay, aiCapturedCards);
}

async function handleTurn(playedCard, capturedPile) {
    field.push(playedCard);
    renderCards();
    await new Promise(r => setTimeout(r, 500));

    await handleMatches(playedCard, capturedPile);

    const drawnCard = deck.pop();
    if (drawnCard) {
        field.push(drawnCard);
        renderCards();
        await new Promise(r => setTimeout(r, 500));
        await handleMatches(drawnCard, capturedPile);
    }

    updateScores();
    const result = checkYaku(capturedPile);
    const lastYakuCount = Object.keys(checkYaku(capturedPile.slice(0, -2)).yaku).length;
    if (result.points > 0 && Object.keys(result.yaku).length > lastYakuCount) {
        showKoiKoiPrompt(result.points);
    } else {
        switchTurn();
    }
}

async function handleMatches(card, capturedPile) {
    const matchingCards = field.filter(c => c.month === card.month && c.id !== card.id);
    if (matchingCards.length > 0) {
        const match = matchingCards[0]; // Simplification
        field.splice(field.indexOf(card), 1);
        field.splice(field.indexOf(match), 1);
        capturedPile.push(card, match);
    }
    renderCards();
    await new Promise(r => setTimeout(r, 500));
}

function switchTurn() {
    if (checkGameOver()) {
        endGame();
        return;
    }
    currentPlayer = (currentPlayer === 'player') ? 'ai' : 'player';
    renderCards();
    if (currentPlayer === 'ai') {
        setTimeout(aiTurn, 1000);
    }
}

function showKoiKoiPrompt(points) {
    if (currentPlayer === 'ai') {
        if (points < 5) { isKoiKoi = true; switchTurn(); } else { endGame(); }
        return;
    }
    const prompt = document.getElementById('koikoi-prompt');
    prompt.classList.remove('hidden');
    document.getElementById('koikoi-button').onclick = () => { isKoiKoi = true; prompt.classList.add('hidden'); switchTurn(); };
    document.getElementById('shobu-button').onclick = () => { isKoiKoi = false; prompt.classList.add('hidden'); endGame(); };
}

function endGame() {
    const playerResult = checkYaku(playerCapturedCards);
    const aiResult = checkYaku(aiCapturedCards);
    let winnerMsg = "引き分け！";
    if (playerResult.points > aiResult.points) winnerMsg = `プレイヤーの勝利！ (${playerResult.points}点)`;
    if (aiResult.points > playerResult.points) winnerMsg = `AIの勝利！ (${aiResult.points}点)`;
    alert(`ゲーム終了！\n\n${winnerMsg}`);
    initializeGame();
}

function checkGameOver() {
    return playerHand.length === 0 && aiHand.length === 0;
}

function highlightMatchingFieldCards(handCard) {
    clearHighlights();
    document.querySelectorAll('#field-cards .card').forEach(el => {
        const fieldCard = field.find(c => c.id == el.dataset.id);
        if (fieldCard && fieldCard.month === handCard.month) el.classList.add('highlight');
    });
}

function clearHighlights() {
    document.querySelectorAll('.card.highlight').forEach(c => c.classList.remove('highlight'));
}

document.addEventListener('DOMContentLoaded', () => {
    const gameSection = document.getElementById('game-section');
    const rulesSection = document.getElementById('rules-section');
    const showGameButton = document.getElementById('show-game');
    const showRulesButton = document.getElementById('show-rules');

    showGameButton.addEventListener('click', () => {
        gameSection.classList.remove('hidden');
        rulesSection.classList.add('hidden');
        initializeGame();
    });

    showRulesButton.addEventListener('click', () => {
        gameSection.classList.add('hidden');
        rulesSection.classList.remove('hidden');
        if (!document.getElementById('rules-content').innerHTML.trim()) {
            document.getElementById('rules-content').innerHTML = `
            <h3>こいこいルール概要</h3>
            <p>花札のこいこいは、手札と場札を合わせて役を作り、得点を競うゲームです。</p>
            <h4>ゲームの流れ</h4>
            <ol>
                <li>手札8枚、場札8枚で開始します。</li>
                <li>自分の番になったら、手札から1枚選んで場に出します。</li>
                <li>同じ月の札が場にあれば、2枚とも自分のものになります。</li>
                <li>その後、山札から1枚めくり、場に出します。</li>
                <li>これも同じ月の札が場にあれば、2枚とも自分のものになります。</li>
                <li>取った札で役ができたら、「こいこい」してゲームを続けるか、「勝負」してラウンドを終了するか選べます。</li>
                <li>「こいこい」すると、次以降にできた役の点数が加算されます。相手が先に役を完成させて上がると、自分の得点は0になります。</li>
                <li>手札がなくなったらゲーム終了です。</li>
            </ol>
            <h4>主な役</h4>
            <ul>
                <li><b>五光 (10点)</b>: 光札5枚</li>
                <li><b>四光 (8点)</b>: 光札4枚（「柳に小野道風」を除く）</li>
                <li><b>雨四光 (7点)</b>: 光札4枚（「柳に小野道風」を含む）</li>
                <li><b>三光 (5点)</b>: 光札3枚（「柳に小野道風」を除く）</li>
                <li><b>猪鹿蝶 (5点)</b>: 猪、鹿、蝶の3枚</li>
                <li><b>赤短 (6点)</b>: 松、梅、桜の赤短冊3枚</li>
                <li><b>青短 (6点)</b>: 牡丹、菊、紅葉の青短冊3枚</li>
                <li><b>短冊 (1点)</b>: 短冊5枚。以降1枚ごとに+1点</li>
                <li><b>タネ (1点)</b>: タネ札5枚。以降1枚ごとに+1点</li>
                <li><b>カス (1点)</b>: カス札10枚。以降1枚ごとに+1点</li>
            </ul>
        `;
        }
    });

    initializeGame();
});

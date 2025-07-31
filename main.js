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

const YakuDefinitions = {
    goko: { name: "五光", points: 10, cards: ["松に鶴", "桜に幕", "芒に月", "柳に小野道風", "桐に鳳凰"] },
    shiko: { name: "四光", points: 8, cards: ["松に鶴", "桜に幕", "芒に月", "桐に鳳凰"] },
    ameshiko: { name: "雨四光", points: 7, cards: ["松に鶴", "桜に幕", "芒に月", "柳に小野道風"] },
    sanko: { name: "三光", points: 5, cards: ["松に鶴", "桜に幕", "芒に月"] },
    inoshikacho: { name: "猪鹿蝶", points: 5, cards: ["萩に猪", "紅葉に鹿", "牡丹に蝶"] },
    akatan: { name: "赤短", points: 6, cards: ["松に赤短", "梅に赤短", "桜に赤短"] },
    aotan: { name: "青短", points: 6, cards: ["牡丹に青短", "菊に青短", "紅葉に青短"] },
    tanzaku: { name: "短冊", points: 1, count: 5, type: 'tanzaku' },
    tane: { name: "タネ", points: 1, count: 5, type: 'tane' },
    kasu: { name: "カス", points: 1, count: 10, type: 'kasu' }
};

const CardTypeDisplayNames = { hikari: "光札", tane: "タネ札", tanzaku: "短冊札", kasu: "カス札" };

function checkYaku(cards) {
    const yaku = {};
    const names = cards.map(c => c.name);
    const types = cards.map(c => c.type);

    // Hikari Yaku (Light Cards)
    const hikariCards = cards.filter(c => c.type === 'hikari');
    const hasRainMan = hikariCards.some(c => c.name === "柳に小野道風");

    if (hikariCards.length === 5) {
        yaku.goko = YakuDefinitions.goko;
    } else if (hikariCards.length === 4) {
        if (hasRainMan) {
            yaku.ameshiko = YakuDefinitions.ameshiko;
        } else {
            yaku.shiko = YakuDefinitions.shiko;
        }
    } else if (hikariCards.length === 3 && !hasRainMan) {
        yaku.sanko = YakuDefinitions.sanko;
    }

    // Other combination yaku
    if (YakuDefinitions.inoshikacho.cards.every(c => names.includes(c))) yaku.inoshikacho = YakuDefinitions.inoshikacho;
    if (YakuDefinitions.akatan.cards.every(c => names.includes(c))) yaku.akatan = YakuDefinitions.akatan;
    if (YakuDefinitions.aotan.cards.every(c => names.includes(c))) yaku.aotan = YakuDefinitions.aotan;

    // Count-based yaku
    const tanzakuCount = types.filter(t => t === 'tanzaku').length;
    if (tanzakuCount >= 5) yaku.tanzaku = { ...YakuDefinitions.tanzaku, points: 1 + (tanzakuCount - 5) };

    const taneCount = types.filter(t => t === 'tane').length;
    if (taneCount >= 5) yaku.tane = { ...YakuDefinitions.tane, points: 1 + (taneCount - 5) };

    const kasuCount = types.filter(t => t === 'kasu').length;
    if (kasuCount >= 10) yaku.kasu = { ...YakuDefinitions.kasu, points: 1 + (kasuCount - 10) };

    let totalPoints = Object.values(yaku).reduce((sum, y) => sum + y.points, 0);
    return { yaku, points: totalPoints };
}


// Game State
let deck, field, playerHand, aiHand, playerCapturedCards, aiCapturedCards, currentPlayer, isKoiKoi;

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
    renderYakuNavi();
    setupModal();
}

function renderGameBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = `
        <div class="player-area">
            <div class="info"><h3>AI (<span id="ai-hand-count">${aiHand.length}</span>)</h3><p>得点: <span id="ai-score">0</span></p><div id="ai-yaku" class="yaku-display"></div></div>
            <div class="cards-container" id="ai-captured-cards"></div>
        </div>
        <div class="field-area">
            <div class="cards-container field-cards" id="field-cards"></div>
            <div id="hint-area"></div>
            <div class="deck-area" id="deck-area"></div>
        </div>
        <div class="player-area">
            <div class="info"><h3>Player (<span id="player-hand-count">${playerHand.length}</span>)</h3><p>得点: <span id="player-score">0</span></p><div id="player-yaku" class="yaku-display"></div></div>
            <div class="cards-container hand-cards" id="player-hand"></div>
            <div class="cards-container" id="player-captured-cards"></div>
        </div>
    `;
    renderAllCards();
    updateScores();
}

function renderAllCards() {
    // Hands
    document.getElementById('ai-hand-count').textContent = aiHand.length;
    document.getElementById('player-hand-count').textContent = playerHand.length;
    const playerHandDiv = document.getElementById('player-hand');
    playerHandDiv.innerHTML = '';
    playerHand.forEach(card => {
        const el = createCardElement(card);
        if (currentPlayer === 'player') {
            el.classList.add('playable');
            el.addEventListener('click', () => playPlayerCard(card));
            el.addEventListener('mouseover', () => highlightMatchingFieldCards(card));
            el.addEventListener('mouseout', clearHighlights);
        }
        playerHandDiv.appendChild(el);
    });

    // Field
    const fieldCardsDiv = document.getElementById('field-cards');
    fieldCardsDiv.innerHTML = '';
    field.forEach(card => fieldCardsDiv.appendChild(createCardElement(card)));

    // Captured (Sorted)
    renderCapturedCards('player-captured-cards', playerCapturedCards);
    renderCapturedCards('ai-captured-cards', aiCapturedCards);

    // Deck
    const deckAreaDiv = document.getElementById('deck-area');
    deckAreaDiv.innerHTML = '';
    if (deck.length > 0) {
        const deckCard = createCardElement(null, true);
        deckCard.innerHTML = `<p>${deck.length}</p>`;
        deckAreaDiv.appendChild(deckCard);
    }
}

function renderYakuNavi() {
    const yakuList = document.getElementById('yaku-list');
    yakuList.innerHTML = '';
    const playerCardNames = playerCapturedCards.map(c => c.name);

    for (const key in YakuDefinitions) {
        const yaku = YakuDefinitions[key];
        const item = document.createElement('div');
        item.className = 'yaku-item';
        item.onclick = () => showYakuModal(key);

        let progress = 0;
        let isCompleted = false;

        if (yaku.cards) { // Combination yaku
            const collected = yaku.cards.filter(c => playerCardNames.includes(c));
            progress = (collected.length / yaku.cards.length) * 100;
            if (progress >= 100) isCompleted = true;
        } else { // Count yaku
            const count = playerCapturedCards.filter(c => c.type === yaku.type).length;
            progress = (count / yaku.count) * 100;
            if (progress >= 100) isCompleted = true;
        }

        item.innerHTML = `
            <span>${yaku.name} (${yaku.points}点)</span>
            <div class="progress-bar"><div class="progress" style="width: ${progress}%;"></div></div>
        `;
        if (isCompleted) item.classList.add('completed');

        yakuList.appendChild(item);
    }
}

function setupModal() {
    // すべてのモーダルを取得
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
        const closeButton = modal.querySelector('.close-button');

        // 閉じるボタンのクリックイベント
        if (closeButton) {
            closeButton.onclick = function() {
                modal.classList.add('hidden');
            }
        }

        // モーダル外のクリックイベント
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.classList.add('hidden');
            }
        });
    });
}

function showYakuModal(yakuKey) {
    const yaku = YakuDefinitions[yakuKey];
    document.getElementById('modal-yaku-name').textContent = yaku.name;
    document.getElementById('modal-yaku-points').textContent = `${yaku.points}点`;
    const cardContainer = document.getElementById('modal-yaku-cards');
    cardContainer.innerHTML = '';
    const playerCardNames = playerCapturedCards.map(c => c.name);

    if (yaku.cards) {
        yaku.cards.forEach(cardName => {
            const cardData = HanafudaCards.find(c => c.name === cardName);
            const cardEl = createCardElement(cardData);
            if (playerCardNames.includes(cardName)) {
                cardEl.classList.add('owned');
            } else {
                cardEl.classList.add('missing');
            }
            cardContainer.appendChild(cardEl);
        });
    } else {
        const collectedCount = playerCapturedCards.filter(c => c.type === yaku.type).length;
        document.getElementById('modal-yaku-points').textContent += ` (${yaku.type}を${yaku.count}枚) - 現在${collectedCount}枚`;
    }

    document.getElementById('yaku-modal').classList.remove('hidden');
}



function createCardElement(card, isBack = false) {
    const el = document.createElement(isBack ? 'div' : 'img');
    el.className = 'card';
    if (isBack) el.classList.add('back');
    else { el.src = card.image; el.alt = card.name; el.dataset.id = card.id; }
    return el;
}

function renderCapturedCards(containerId, cards) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous cards

    const cardTypes = { 
        hikari: "光札", 
        tane: "タネ札", 
        tanzaku: "短冊札", 
        kasu: "カス札" 
    };

    for (const type in cardTypes) {
        const groupContainer = document.createElement('div');
        groupContainer.className = 'card-group';

        const title = document.createElement('p');
        title.className = 'group-title';
        title.textContent = cardTypes[type];
        groupContainer.appendChild(title);

        const cardsOfType = cards.filter(card => card.type === type);
        const cardsWrapper = document.createElement('div');
        cardsWrapper.className = 'cards-wrapper';
        cardsOfType.forEach(card => {
            const cardEl = createCardElement(card);
            cardsWrapper.appendChild(cardEl);
        });
        groupContainer.appendChild(cardsWrapper);

        container.appendChild(groupContainer);
    }
}

function updateScores() {
    const pResult = checkYaku(playerCapturedCards);
    document.getElementById('player-score').textContent = pResult.points;
    document.getElementById('player-yaku').innerHTML = Object.values(pResult.yaku).map(y => y.name).join(', ');

    const aiResult = checkYaku(aiCapturedCards);
    document.getElementById('ai-score').textContent = aiResult.points;
    document.getElementById('ai-yaku').innerHTML = Object.values(aiResult.yaku).map(y => y.name).join(', ');
}

async function playPlayerCard(card) {
    if (currentPlayer !== 'player') return;
    const idx = playerHand.findIndex(c => c.id === card.id);
    if (idx > -1) await handleTurn(playerHand.splice(idx, 1)[0], playerCapturedCards);
}

async function aiTurn() {
    if (currentPlayer !== 'ai') return;
    await new Promise(r => setTimeout(r, 1000));
    const cardToPlay = aiHand[Math.floor(Math.random() * aiHand.length)];
    aiHand.splice(aiHand.indexOf(cardToPlay), 1);
    await handleTurn(cardToPlay, aiCapturedCards);
}

async function handleTurn(playedCard, capturedPile) {
    field.push(playedCard);
    renderAllCards();
    await new Promise(r => setTimeout(r, 500));

    await handleMatches(playedCard, capturedPile);

    const drawnCard = deck.pop();
    if (drawnCard) {
        field.push(drawnCard);
        renderAllCards();
        await new Promise(r => setTimeout(r, 500));
        await handleMatches(drawnCard, capturedPile);
    }

    updateScores();
    renderYakuNavi();

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
    renderAllCards();
    await new Promise(r => setTimeout(r, 500));
}

function switchTurn() {
    if (checkGameOver()) { endGame(); return; }
    currentPlayer = (currentPlayer === 'player') ? 'ai' : 'player';
    renderAllCards();
    if (currentPlayer === 'ai') aiTurn();
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
    const pResult = checkYaku(playerCapturedCards);
    const aiResult = checkYaku(aiCapturedCards);
    let winnerMsg = "引き分け！";
    if (pResult.points > aiResult.points) winnerMsg = `プレイヤーの勝利！ (${pResult.points}点)`;
    if (aiResult.points > pResult.points) winnerMsg = `AIの勝利！ (${aiResult.points}点)`;
    alert(`ゲーム終了！

${winnerMsg}`);
    initializeGame();
}

function checkGameOver() {
    return playerHand.length === 0 && aiHand.length === 0;
}

function highlightMatchingFieldCards(handCard) {
    clearHighlights();
    const hintArea = document.getElementById('hint-area');
    const fieldCardsDiv = document.getElementById('field-cards');
    const matchingFieldCards = field.filter(c => c.month === handCard.month);

    if (matchingFieldCards.length > 0) {
        matchingFieldCards.forEach(match => {
            for (const el of fieldCardsDiv.children) {
                if (el.dataset.id == match.id) {
                    el.classList.add('highlight');
                }
            }
        });

        // --- Enhanced Hint Generation ---
        const potentialCaptured = [...matchingFieldCards, handCard];
        const potentialTotalCards = [...playerCapturedCards, ...potentialCaptured];
        const currentYakuResult = checkYaku(playerCapturedCards);
        const potentialYakuResult = checkYaku(potentialTotalCards);

        let hintText = `この札（${handCard.name}）を出すと、<br>場の【${matchingFieldCards.map(c => c.name).join('、')}】と合います。<br><br>`;

        const newYakuEntries = Object.entries(potentialYakuResult.yaku).filter(([key, yaku]) => !currentYakuResult.yaku[key]);

        if (newYakuEntries.length > 0) {
            const [newYakuKey, newYaku] = newYakuEntries[0];
            hintText += `<span class="yaku-hint">祝！『${newYaku.name}』(${newYaku.points}点) が完成します！</span>`;
        } else {
            let progressingYakuText = '';
            const potentialYakuEntries = Object.entries(potentialYakuResult.yaku);

            for (const [key, yaku] of potentialYakuEntries) {
                if (yaku.cards) { // Combination Yaku
                    const currentCollectedNames = playerCapturedCards.map(c => c.name);
                    const potentialCollectedNames = potentialTotalCards.map(c => c.name);
                    const currentCollectedCount = yaku.cards.filter(cName => currentCollectedNames.includes(cName)).length;
                    const potentialCollectedCount = yaku.cards.filter(cName => potentialCollectedNames.includes(cName)).length;

                    if (potentialCollectedCount > currentCollectedCount) {
                        const missingCards = yaku.cards.filter(cardName => !potentialCollectedNames.includes(cardName));
                        progressingYakuText += `『${yaku.name}』に近づきます！<br>(あと ${missingCards.length > 0 ? missingCards.join('、') : 'コンプリート！'})<br>`;
                    }
                }
            }
            if (progressingYakuText) {
                hintText += `<span class="yaku-progress-hint">${progressingYakuText}</span>`;
            } else {
                hintText += `獲得できる札:<br>${potentialCaptured.map(c => `${c.name}(${CardTypeDisplayNames[c.type]})`).join('、')}`;
            }
        }
        hintArea.innerHTML = hintText;

    } else {
        hintArea.textContent = '場に出せるペアがありません';
    }
}

function clearHighlights() {
    document.querySelectorAll('.card.highlight').forEach(c => c.classList.remove('highlight'));
    document.getElementById('hint-area').textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const showGameButton = document.getElementById('show-game');
    const showRulesButton = document.getElementById('show-rules');
    const rulesModal = document.getElementById('rules-modal');
    const rulesContent = document.getElementById('rules-content');

    showGameButton.addEventListener('click', () => {
        // ゲームをリセットして開始
        initializeGame();
    });

    showRulesButton.addEventListener('click', () => {
        // if文を削除し、常にルールを書き込む
        rulesContent.innerHTML = `
        <h2>ルール説明</h2>
        <h3>こいこいルール概要</h3>
        <p>花札のこいこいは、手札と場札を合わせて役を作り、得点を競うゲームです。</p>
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
        rulesModal.classList.remove('hidden');
    });

    initializeGame();
});

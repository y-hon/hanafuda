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
    hanami: { name: "花見で一杯", points: 5, cards: ["桜に幕", "菊に盃"] },
    tsukimi: { name: "月見で一杯", points: 5, cards: ["芒に月", "菊に盃"] },
    inoshikacho: { name: "猪鹿蝶", points: 5, cards: ["萩に猪", "紅葉に鹿", "牡丹に蝶"] },
    akatan: { name: "赤短", points: 6, cards: ["松に赤短", "梅に赤短", "桜に赤短"] },
    aotan: { name: "青短", points: 6, cards: ["牡丹に青短", "菊に青短", "紅葉に青短"] },
    tanzaku: { name: "短冊", points: 1, count: 5, type: 'tanzaku' },
    tane: { name: "タネ", points: 1, count: 5, type: 'tane' },
    kasu: { name: "カス", points: 1, count: 10, type: 'kasu' }
};

const CardTypeDisplayNames = { hikari: "光札", tane: "タネ札", tanzaku: "短冊札", kasu: "カス札" };
const CardValues = { hikari: 4, tane: 3, tanzaku: 2, kasu: 1 };

let aiLevel = 'weak'; // Default AI level

function checkYaku(cards) {
    const yaku = {};
    const names = cards.map(c => c.name);
    const types = cards.map(c => c.type);

    // --- 役の判定ロジック ---
    // 複合役（花見・月見）を先にチェック
    if (YakuDefinitions.hanami.cards.every(c => names.includes(c))) yaku.hanami = YakuDefinitions.hanami;
    if (YakuDefinitions.tsukimi.cards.every(c => names.includes(c))) yaku.tsukimi = YakuDefinitions.tsukimi;

    // 光札の役
    const hikariCards = cards.filter(c => c.type === 'hikari');
    const hasRainMan = hikariCards.some(c => c.name === "柳に小野道風");

    if (hikariCards.length === 5) {
        yaku.goko = YakuDefinitions.goko;
    } else if (hikariCards.length === 4) {
        if (hasRainMan) {
            // 雨四光が成立しても、花見・月見が成立していればそちらを優先
            if (!yaku.hanami && !yaku.tsukimi) yaku.ameshiko = YakuDefinitions.ameshiko;
        } else {
            yaku.shiko = YakuDefinitions.shiko;
        }
    } else if (hikariCards.length === 3 && !hasRainMan) {
        // 三光が成立しても、花見・月見が成立していればそちらを優先
        if (!yaku.hanami && !yaku.tsukimi) yaku.sanko = YakuDefinitions.sanko;
    }

    // その他の組み合わせ役
    if (YakuDefinitions.inoshikacho.cards.every(c => names.includes(c))) yaku.inoshikacho = YakuDefinitions.inoshikacho;
    if (YakuDefinitions.akatan.cards.every(c => names.includes(c))) yaku.akatan = YakuDefinitions.akatan;
    if (YakuDefinitions.aotan.cards.every(c => names.includes(c))) yaku.aotan = YakuDefinitions.aotan;

    // 枚数での役
    const tanzakuCount = types.filter(t => t === 'tanzaku').length;
    if (tanzakuCount >= 5) {
        // 赤短・青短と重複させない
        if (!yaku.akatan && !yaku.aotan) {
            yaku.tanzaku = { ...YakuDefinitions.tanzaku, points: 1 + (tanzakuCount - 5) };
        }
    }

    const taneCount = types.filter(t => t === 'tane').length;
    if (taneCount >= 5) {
        // 猪鹿蝶と重複させない
        if (!yaku.inoshikacho) {
            yaku.tane = { ...YakuDefinitions.tane, points: 1 + (taneCount - 5) };
        }
    }

    const kasuCount = types.filter(t => t === 'kasu').length;
    if (kasuCount >= 10) yaku.kasu = { ...YakuDefinitions.kasu, points: 1 + (kasuCount - 10) };

    let totalPoints = Object.values(yaku).reduce((sum, y) => sum + y.points, 0);
    return { yaku, points: totalPoints };
}


// Game State
let deck, field, playerHand, aiHand, playerCapturedCards, aiCapturedCards, currentPlayer, isKoiKoi, hintClearTimeout;
let playerKoiKoi = false;
let aiKoiKoi = false;

function initializeGame() {
    deck = [...HanafudaCards].sort(() => Math.random() - 0.5);
    field = deck.splice(0, 8);
    playerHand = deck.splice(0, 8);
    aiHand = deck.splice(0, 8);
    playerCapturedCards = [];
    aiCapturedCards = [];
    currentPlayer = 'player';
    isKoiKoi = false;
    playerKoiKoi = false;
    aiKoiKoi = false;

    renderGameBoard();
    renderRecommendedYaku();
    setupModal();

    // 手役のチェック
    const initialYaku = checkInitialHands();
    if (initialYaku.player) {
        endGame(initialYaku.player, "Player");
    } else if (initialYaku.ai) {
        endGame(initialYaku.ai, "AI");
    }
}

function checkInitialHands() {
    const checkHand = (hand) => {
        const monthCounts = hand.reduce((acc, card) => {
            acc[card.month] = (acc[card.month] || 0) + 1;
            return acc;
        }, {});

        // 手四のチェック
        if (Object.values(monthCounts).some(count => count === 4)) {
            return { name: "手四", points: 6 };
        }

        // くっつきのチェック
        const pairs = Object.values(monthCounts).filter(count => count === 2).length;
        if (pairs === 4) {
            return { name: "くっつき", points: 6 };
        }

        return null;
    };

    return { player: checkHand(playerHand), ai: checkHand(aiHand) };
}

function renderGameBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = `
        <div class="player-area" id="ai-area">
            <div class="info"><h3>AI (<span id="ai-hand-count">${aiHand.length}</span>)</h3><p>得点: <span id="ai-score">0</span></p><div id="ai-yaku" class="yaku-display"></div></div>
            <div class="cards-container captured-cards" id="ai-captured-cards"></div>
        </div>
        <div class="field-area">
            <div class="cards-container field-cards" id="field-cards"></div>
            <div id="field-sidebar">
                <div class="deck-area" id="deck-area"></div>
                <div id="turn-control-area"></div>
                <div id="center-info-area">
                    <div id="hint-area"></div>
                    <div id="action-log-area"></div>
                </div>
            </div>
        </div>
        <div class="player-area" id="player-area">
            <div class="info"><h3>Player (<span id="player-hand-count">${playerHand.length}</span>)</h3><p>得点: <span id="player-score">0</span></p><div id="player-yaku" class="yaku-display"></div></div>
            <div class="cards-container hand-cards" id="player-hand"></div>
            <div class="cards-container captured-cards" id="player-captured-cards"></div>
        </div>
    `;
    renderAllCards();
    updateScores();

    // イベントリスナーをここで設定
    const hintArea = document.getElementById('hint-area');
    hintArea.addEventListener('mouseenter', () => clearTimeout(hintClearTimeout));
    hintArea.addEventListener('mouseleave', () => clearHighlights());
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
            el.addEventListener('mouseout', () => clearHighlights());
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

function renderRecommendedYaku() {
    const yakuListDiv = document.getElementById('yaku-list');
    yakuListDiv.innerHTML = '';
    const playerCardNames = playerCapturedCards.map(c => c.name);
    const aiCardNames = aiCapturedCards.map(c => c.name); // AIの獲得カードを取得
    const currentYaku = checkYaku(playerCapturedCards).yaku;

    let recommendations = [];

    // 1. すべての潜在的な役をリストアップ
    for (const key in YakuDefinitions) {
        if (key === 'kasu') continue; // カス役は推奨しない
        const yaku = YakuDefinitions[key];
        if (currentYaku[key]) continue; // 既に成立している役は除外

        if (yaku.cards) { // ■■■ 組み合わせ役のロジック ■■■
            const missingCards = yaku.cards.filter(c => !playerCardNames.includes(c));
            
            // ★★★ 新しいチェック：AIにキーカードを取られていたら、その役は実現不可能
            const isImpossible = missingCards.some(cardName => aiCardNames.includes(cardName));
            if (isImpossible) {
                continue; // この役は候補から外す
            }

            const collectedCards = yaku.cards.filter(c => playerCardNames.includes(c));
            const missingCount = missingCards.length;

            if (missingCount > 0 && missingCount <= 3) { // あと3枚以内
                const isReachable = (collectedCards.length > 0) || missingCards.some(cardName => field.some(fieldCard => fieldCard.name === cardName));
                if (isReachable) {
                    const score = yaku.points / missingCount;
                    recommendations.push({ key, yaku, missingCount, score });
                }
            }
        } else { // ■■■ 枚数役のロジック ■■■
            const collectedCount = playerCapturedCards.filter(c => c.type === yaku.type).length;
            const missingCount = yaku.count - collectedCount;

            if (missingCount > 0 && missingCount <= 2) { // 枚数役はあと2枚以内のみ推奨
                 const score = yaku.points / missingCount;
                 recommendations.push({ key, yaku, missingCount, score });
            }
        }
    }

    // 2. 重複・下位役を除外
    const recKeys = recommendations.map(r => r.key);
    if (recKeys.includes('inoshikacho')) {
        recommendations = recommendations.filter(r => r.key !== 'tane');
    }
    if (recKeys.includes('akatan') || recKeys.includes('aotan')) {
        recommendations = recommendations.filter(r => r.key !== 'tanzaku');
    }

    // 3. スコアでソートし、上位2件を取得
    recommendations.sort((a, b) => b.score - a.score);
    const topRecommendations = recommendations.slice(0, 2);

    // 4. 表示と場のカードのハイライト
    document.querySelectorAll('.target-card').forEach(c => c.classList.remove('target-card'));

    if (topRecommendations.length > 0) {
        topRecommendations.forEach(rec => {
            const item = document.createElement('div');
            item.className = 'recommended-yaku-item';

            let html = `<h4>${rec.yaku.name} (${rec.yaku.points}点)</h4>`;
            html += `<p>あと${rec.missingCount}枚 (推奨スコア: ${rec.score.toFixed(1)})</p>`;
            html += `<div class="cards-container">`;

            if (rec.yaku.cards) { // 組み合わせ役
                rec.yaku.cards.forEach(cardName => {
                    const cardData = HanafudaCards.find(c => c.name === cardName);
                    const isOwned = playerCardNames.includes(cardName);
                    html += createCardHtml(cardData, !isOwned);

                    if (!isOwned) {
                        const fieldCard = field.find(c => c.name === cardName);
                        if (fieldCard) highlightTargetCard(fieldCard);
                    }
                });
            } else { // 枚数役
                html += `<p>${CardTypeDisplayNames[rec.yaku.type]}を集めよう</p>`;
                field.filter(c => c.type === rec.yaku.type).forEach(highlightTargetCard);
            }

            html += `</div>`;
            item.innerHTML = html;
            yakuListDiv.appendChild(item);
        });
    } else {
        yakuListDiv.innerHTML = '<p>まずは場の札と合う手札を出して、札を集めていきましょう。</p>';
    }
}

function createCardHtml(card, isMissing) {
    return `<img src="${card.image}" alt="${card.name}" class="card ${isMissing ? 'missing' : ''}">`;
}

function highlightTargetCard(card) {
    const fieldCardsDiv = document.getElementById('field-cards');
    for (const el of fieldCardsDiv.children) {
        if (el.dataset.id == card.id) {
            el.classList.add('target-card');
        }
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
                // card-choice-modalは外側クリックで閉じない
                if (modal.id !== 'card-choice-modal') {
                    modal.classList.add('hidden');
                }
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
    // 他のカードが選択できないようにする
    document.getElementById('player-hand').classList.add('disabled');
    const idx = playerHand.findIndex(c => c.id === card.id);
    if (idx > -1) await handleTurn(playerHand.splice(idx, 1)[0], playerCapturedCards);
}

async function aiTurn() {
    if (currentPlayer !== 'ai') return;
    await new Promise(r => setTimeout(r, 1000));

    let cardToPlay;
    switch (aiLevel) {
        case 'normal':
            cardToPlay = getNormalAiMove();
            break;
        case 'strong':
            cardToPlay = getStrongAiMove();
            break;
        case 'weak':
        default:
            cardToPlay = aiHand[Math.floor(Math.random() * aiHand.length)];
            break;
    }

    aiHand.splice(aiHand.indexOf(cardToPlay), 1);
    await handleTurn(cardToPlay, aiCapturedCards);
}

function getNormalAiMove() {
    let bestMove = { card: null, value: -1 };

    for (const handCard of aiHand) {
        const matchingFieldCards = field.filter(c => c.month === handCard.month);
        if (matchingFieldCards.length > 0) {
            // 最も価値の高い場の札を選ぶ
            const bestFieldCard = matchingFieldCards.reduce((best, current) => 
                CardValues[current.type] > CardValues[best.type] ? current : best
            );
            const moveValue = CardValues[handCard.type] + CardValues[bestFieldCard.type];
            if (moveValue > bestMove.value) {
                bestMove = { card: handCard, value: moveValue };
            }
        } else {
            // 場に合う札がない場合、価値の低い札を出す
            if (bestMove.card === null || CardValues[handCard.type] < CardValues[bestMove.card.type]) {
                bestMove = { card: handCard, value: -1 }; // 価値は低いので-1のまま
            }
        }
    }
    return bestMove.card || aiHand[Math.floor(Math.random() * aiHand.length)];
}

function getStrongAiMove() {
    let bestMove = { card: null, score: -1, type: 'none' };

    // 1. 役が完成する手を探す
    for (const handCard of aiHand) {
        const matchingFieldCards = field.filter(c => c.month === handCard.month);
        for (const fieldCard of matchingFieldCards.length > 0 ? matchingFieldCards : [null]) {
            const potentialCaptured = fieldCard ? [handCard, fieldCard] : [handCard];
            const potentialYaku = checkYaku([...aiCapturedCards, ...potentialCaptured]);
            const currentYaku = checkYaku(aiCapturedCards);
            const newScore = potentialYaku.points - currentYaku.points;

            if (newScore > 0 && newScore > bestMove.score) {
                bestMove = { card: handCard, score: newScore, type: 'yaku_complete' };
            }
        }
    }
    if (bestMove.card) return bestMove.card;

    // 2. プレイヤーの役を妨害する手を探す
    // (プレイヤーのおすすめ役に必要なカードが場にある場合、それを取る)
    // ... このロジックは複雑なので、今回はまず自分の役を優先する

    // 3. 役にはならないが、価値の高いカードを取る（Normal AIと同じ）
    return getNormalAiMove();
}


function logAction(message, type = 'system') {
    const logArea = document.getElementById('action-log-area');
    const p = document.createElement('p');
    p.innerHTML = message; // Use innerHTML to allow basic formatting
    p.className = `log-${type}`;
    logArea.appendChild(p);
    logArea.scrollTop = logArea.scrollHeight; // Auto-scroll to the latest log
}

function clearLog() {
    const logArea = document.getElementById('action-log-area');
    logArea.innerHTML = '';
}

async function handleTurn(playedCard, capturedPile) {
    clearLog();
    const playerName = (capturedPile === playerCapturedCards) ? "あなた" : "AI";
    const playerType = (capturedPile === playerCapturedCards) ? "player" : "ai";

    logAction(`<b>${playerName}</b> は「${playedCard.name}」を出しました。`, playerType);
    
    // playedCardはまだ場に出さず、手元に保持
    renderAllCards();
    await new Promise(r => setTimeout(r, 500));

    // 1. 手札から出した札でのマッチ処理
    await handleMatches(playedCard, capturedPile, playerType, true);

    const drawnCard = deck.pop();
    if (drawnCard) {
        logAction(`<b>${playerName}</b> は山札から「${drawnCard.name}」を引きました。`, playerType);
        await new Promise(r => setTimeout(r, 500));
        
        // 2. 山札から引いた札でのマッチ処理
        await handleMatches(drawnCard, capturedPile, playerType, false);
    }

    updateScores();
    renderRecommendedYaku();

    const result = checkYaku(capturedPile);
    const previousCaptured = capturedPile.slice(0, capturedPile.length - (field.includes(playedCard) ? 1 : 2) - (field.includes(drawnCard) ? 1 : 2));
    const lastYakuCount = Object.keys(checkYaku(previousCaptured).yaku).length;

    if (result.points > 0 && Object.keys(result.yaku).length > lastYakuCount) {
        showKoiKoiPrompt(result);
    } else {
        if (checkGameOver()) {
            endGame();
            return;
        }
        if (playerType === 'player') {
            showProceedToAiTurnButton();
        } else {
            switchTurn();
        }
    }
}

async function handleMatches(card, capturedPile, playerType, isFromHand) {
    const matchingCards = field.filter(c => c.month === card.month);

    switch (matchingCards.length) {
        case 0:
            logAction('場の札とは合いませんでした。', playerType);
            field.push(card); // 合わなかった札は場札になる
            break;
        
        case 1: {
            const match = matchingCards[0];
            logAction(`場の「${match.name}」と合い、獲得しました。`, playerType);
            field.splice(field.indexOf(match), 1);
            capturedPile.push(card, match);
            break;
        }

        case 2: {
            logAction(`場の札と合いました。どちらを獲得しますか？`, playerType);
            let chosenCard;
            if (playerType === 'player') {
                chosenCard = await showCardChoiceModal(matchingCards);
            } else {
                // AIはランダムに選択
                chosenCard = matchingCards[Math.floor(Math.random() * matchingCards.length)];
                await new Promise(r => setTimeout(r, 500)); // AIの思考時間
            }
            logAction(`<b>${playerType === 'player' ? 'あなた' : 'AI'}</b> は「${chosenCard.name}」を選択しました。`, playerType);
            field.splice(field.indexOf(chosenCard), 1);
            capturedPile.push(card, chosenCard);
            break;
        }

        case 3: {
            logAction(`場の同じ月の札3枚と合い、<b>4枚すべて</b>獲得しました！`, playerType);
            matchingCards.forEach(match => {
                field.splice(field.indexOf(match), 1);
            });
            capturedPile.push(card, ...matchingCards);
            break;
        }
    }
    renderAllCards();
    await new Promise(r => setTimeout(r, 500));
}

function showCardChoiceModal(choices) {
    return new Promise(resolve => {
        const modal = document.getElementById('card-choice-modal');
        const container = document.getElementById('choice-cards-container');
        container.innerHTML = '';

        choices.forEach(card => {
            const cardEl = createCardElement(card);
            cardEl.addEventListener('click', () => {
                modal.classList.add('hidden');
                resolve(card); // 選択されたカードを返す
            });
            container.appendChild(cardEl);
        });

        modal.classList.remove('hidden');
    });
}


function switchTurn() {
    if (checkGameOver()) { endGame(); return; }
    
    const turnControlArea = document.getElementById('turn-control-area');
    turnControlArea.innerHTML = ''; // Clear the button

    currentPlayer = (currentPlayer === 'player') ? 'ai' : 'player';
    logAction(`--- ${currentPlayer === 'player' ? 'あなたの' : 'AIの'}ターンです ---`, 'system');
    
    // プレイヤーのターンになったら手札をクリック可能にする
    if (currentPlayer === 'player') {
        document.getElementById('player-hand').classList.remove('disabled');
    }

    renderAllCards();

    if (currentPlayer === 'ai') {
        aiTurn();
    }
}

function showProceedToAiTurnButton() {
    const turnControlArea = document.getElementById('turn-control-area');
    const button = document.createElement('button');
    button.textContent = 'AIのターンへ';
    button.id = 'proceed-button';
    button.onclick = () => {
        switchTurn();
    };
    turnControlArea.innerHTML = ''; // Clear previous content
    turnControlArea.appendChild(button);
}

function showKoiKoiPrompt(result) {
    if (currentPlayer === 'ai') {
        if (result.points < 5) { 
            isKoiKoi = true; 
            aiKoiKoi = true;
            switchTurn(); 
        } else { 
            endGame(); 
        }
        return;
    }
    const prompt = document.getElementById('koikoi-prompt');
    const yakuInfoDiv = document.getElementById('koikoi-yaku-info');
    const nextTargetDiv = document.getElementById('koikoi-next-target');

    // 1. 成立した役を表示
    yakuInfoDiv.innerHTML = '<h3>役が成立しました！</h3>';
    const yakuList = document.createElement('ul');
    for (const key in result.yaku) {
        const yaku = result.yaku[key];
        const li = document.createElement('li');
        li.textContent = `${yaku.name} (${yaku.points}点)`;
        yakuList.appendChild(li);
    }
    yakuInfoDiv.appendChild(yakuList);
    yakuInfoDiv.innerHTML += `<p>合計: ${result.points}点</p>`;

    // 2. 「こいこい」後の目標を提示
    nextTargetDiv.innerHTML = '<h4>こいこいで狙える役</h4>';
    const nextYakuList = document.createElement('ul');
    let hintFound = false;
    for (const key in YakuDefinitions) {
        if (!result.yaku[key]) { // まだ成立していない役
            const yaku = YakuDefinitions[key];
            if (yaku.cards) { // 組み合わせ役
                const playerCardNames = playerCapturedCards.map(c => c.name);
                const missingCards = yaku.cards.filter(c => !playerCardNames.includes(c));
                if (missingCards.length > 0 && missingCards.length <= 2) { // あと1-2枚で揃う役
                    const li = document.createElement('li');
                    li.textContent = `${yaku.name} (あと ${missingCards.join('、')})`;
                    nextYakuList.appendChild(li);
                    hintFound = true;
                }
            }
        }
    }
    if (!hintFound) {
        nextYakuList.innerHTML = '<li>さらに高い役を狙おう！</li>';
    }
    nextTargetDiv.appendChild(nextYakuList);

    prompt.classList.remove('hidden');
    document.getElementById('koikoi-button').onclick = () => { 
        isKoiKoi = true; 
        playerKoiKoi = true;
        prompt.classList.add('hidden'); 
        switchTurn(); 
    };
    document.getElementById('shobu-button').onclick = () => { 
        isKoiKoi = false; 
        prompt.classList.add('hidden'); 
        endGame(); 
    };
}

function endGame(initialYaku = null, winnerName = null) {
    let pResult = checkYaku(playerCapturedCards);
    let aiResult = checkYaku(aiCapturedCards);
    const resultModal = document.getElementById('game-result-modal');
    const resultTitle = document.getElementById('result-title');
    const playerDetails = document.getElementById('player-result-details');
    const aiDetails = document.getElementById('ai-result-details');
    const extraInfo = document.getElementById('result-extra-info');
    extraInfo.innerHTML = '';

    if (initialYaku) {
        resultTitle.textContent = `${winnerName}の勝利！`;
        extraInfo.innerHTML = `手役『${initialYaku.name}』成立（${initialYaku.points}点）`;
        if (winnerName === 'Player') {
            pResult = { yaku: { [initialYaku.name.toLowerCase()]: initialYaku }, points: initialYaku.points };
        } else {
            aiResult = { yaku: { [initialYaku.name.toLowerCase()]: initialYaku }, points: initialYaku.points };
        }
    } else {
        let winnerMsg = "引き分け！";
        if (playerKoiKoi && aiResult.points > 0) {
            aiResult.points *= 2;
            extraInfo.innerHTML = 'プレイヤーがこいこい後、AIが上がったため得点2倍！';
        } else if (aiKoiKoi && pResult.points > 0) {
            pResult.points *= 2;
            extraInfo.innerHTML = 'AIがこいこい後、プレイヤーが上がったため得点2倍！';
        }

        if (pResult.points > aiResult.points) winnerMsg = `プレイヤーの勝利！`;
        if (aiResult.points > pResult.points) winnerMsg = `AIの勝利！`;
        resultTitle.textContent = winnerMsg;
    }

    // Render player's results
    renderResultDetails(playerDetails, "Player", pResult, playerCapturedCards);
    // Render AI's results
    renderResultDetails(aiDetails, "AI", aiResult, aiCapturedCards);

    resultModal.classList.remove('hidden');
}

function renderResultDetails(container, playerName, result, capturedCards) {
    let html = `<h3>${playerName} (${result.points}点)</h3>`;
    const yakuCards = new Set();

    // 1. 成立した役の表示
    if (Object.keys(result.yaku).length > 0) {
        html += '<h4>成立した役</h4><ul>';
        for (const key in result.yaku) {
            const yaku = result.yaku[key];
            html += `<li>${yaku.name} (${yaku.points}点)</li>`;
            if (yaku.cards) {
                yaku.cards.forEach(cardName => yakuCards.add(cardName));
            }
        }
        html += '</ul>';
    }

    // 2. あと一歩だった役の表示
    let almostYakuHtml = '';
    for (const key in YakuDefinitions) {
        if (!result.yaku[key]) { // まだ成立していない役
            const yakuDef = YakuDefinitions[key];
            const playerCardNames = capturedCards.map(c => c.name);
            if (yakuDef.cards) { // 組み合わせ役
                const missingCards = yakuDef.cards.filter(c => !playerCardNames.includes(c));
                if (missingCards.length === 1) { // あと1枚！
                    almostYakuHtml += `<li>${yakuDef.name} (あと<b>${missingCards.join('、')}</b>)</li>`;
                }
            }
        }
    }
    if (almostYakuHtml) {
        html += '<h4 class="almost-title">あと一歩だった役</h4><ul class="almost-yaku">' + almostYakuHtml + '</ul>';
    }

    container.innerHTML = html;

    // 3. 獲得カードを種類別に整理して表示
    const capturedContainer = document.createElement('div');
    capturedContainer.className = 'captured-cards-sorted';

    const cardTypes = { hikari: "光", tane: "タネ", tanzaku: "短冊", kasu: "カス" };
    for (const type in cardTypes) {
        const groupContainer = document.createElement('div');
        groupContainer.className = 'card-group';
        const title = document.createElement('p');
        title.className = 'group-title';
        title.textContent = cardTypes[type];
        groupContainer.appendChild(title);

        const cardsWrapper = document.createElement('div');
        cardsWrapper.className = 'cards-wrapper';
        const cardsOfType = capturedCards.filter(card => card.type === type);
        cardsOfType.forEach(card => {
            const cardEl = createCardElement(card);
            if (yakuCards.has(card.name)) {
                cardEl.classList.add('yaku-component');
            }
            cardsWrapper.appendChild(cardEl);
        });
        groupContainer.appendChild(cardsWrapper);
        capturedContainer.appendChild(groupContainer);
    }
    container.appendChild(capturedContainer);
}

function checkGameOver() {
    return playerHand.length === 0 && aiHand.length === 0;
}

function highlightMatchingFieldCards(handCard) {
    clearTimeout(hintClearTimeout); // 既存のタイマーをクリア
    clearHighlights(true); // ハイライトだけ先にクリア

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

        let fullHintText = `この札（${handCard.name}）を出すと、<br>場の【${matchingFieldCards.map(c => c.name).join('、')}】と合います。<br><br>`;

        const newYakuEntries = Object.entries(potentialYakuResult.yaku).filter(([key, yaku]) => !currentYakuResult.yaku[key]);

        if (newYakuEntries.length > 0) {
            const [newYakuKey, newYaku] = newYakuEntries[0];
            fullHintText += `<span class="yaku-hint">祝！『${newYaku.name}』(${newYaku.points}点) が完成します！</span>`;
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
                fullHintText += `<span class="yaku-progress-hint">${progressingYakuText}</span>`;
            } else {
                fullHintText += `獲得できる札:<br>${potentialCaptured.map(c => `${c.name}(${CardTypeDisplayNames[c.type]})`).join('、')}`;
            }
        }

        hintArea.innerHTML = fullHintText;

    } else {
        hintArea.textContent = '場に出せるペアがありません';
    }
}

function clearHighlights(keepHint = false) {
    document.querySelectorAll('.card.highlight').forEach(c => c.classList.remove('highlight'));
    if (!keepHint) {
        hintClearTimeout = setTimeout(() => {
            document.getElementById('hint-area').innerHTML = ''; // Clear hint text
        }, 300); // 0.3秒後にヒントを消す
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const showGameButton = document.getElementById('show-game');
    const showRulesButton = document.getElementById('show-rules');
    const rulesModal = document.getElementById('rules-modal');
    const rulesContent = document.getElementById('rules-content');
    const newGameButton = document.getElementById('new-game-button');
    const gameResultModal = document.getElementById('game-result-modal');
    const aiLevelSelect = document.getElementById('ai-level-select');

    aiLevelSelect.addEventListener('change', (e) => {
        aiLevel = e.target.value;
        // ゲーム中にAIの強さを変えたら、新しいゲームを始める
        initializeGame();
    });

    showGameButton.addEventListener('click', () => {
        // ゲームをリセットして開始
        initializeGame();
    });

    showRulesButton.addEventListener('click', () => {
        rulesContent.innerHTML = `
        <h2>ルール説明</h2>
        <h3>こいこいルール概要</h3>
        <p>花札のこいこいは、手札と場札を合わせて役を作り、得点を競うゲームです。</p>
        <h4>ゲームの流れ</h4>
        <ul>
            <li>手札から1枚選び、場に出します。同じ月の札が場にあれば、合わせて獲得できます。</li>
            <li><b>場に同じ月の札が2枚ある場合：</b>好きな方を選んで獲得できます。</li>
            <li><b>場に同じ月の札が3枚ある場合：</b>手札の1枚と合わせて4枚すべてを獲得できます。</li>
            <li>その後、山札から1枚めくり、同様に場の札と合わせます。</li>
            <li>役が成立したら、「こいこい」をしてゲームを続けるか、「勝負」してゲームを終了するか選択できます。</li>
            <li><b>こいこいのリスク：</b>自分が「こいこい」を宣言した後に、相手が先に役を完成させて上がった場合、相手の得点は2倍になります。</li>
        </ul>
        <h4>特殊な役（手役）</h4>
        <p>ゲーム開始時の手札だけで成立する役です。成立した場合、その時点で勝ちとなり点数を得ます。</p>
        <ul>
            <li><b>手四（てし）：</b>同じ月の札が4枚ある（6点）</li>
            <li><b>くっつき：</b>同じ月の札2枚のペアが4組ある（6点）</li>
        </ul>
        <h4>主な役</h4>
        <ul>
            <li><b>五光 (10点)</b>: 光札5枚</li>
            <li><b>四光 (8点)</b>: 光札4枚（「柳に小野道風」を除く）</li>
            <li><b>雨四光 (7点)</b>: 光札4枚（「柳に小野道風」を含む）</li>
            <li><b>三光 (5点)</b>: 光札3枚（「柳に小野道風」を除く）</li>
            <li><b>花見で一杯 (5点)</b>: 「桜に幕」と「菊に盃」</li>
            <li><b>月見で一杯 (5点)</b>: 「芒に月」と「菊に盃」</li>
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

    newGameButton.addEventListener('click', () => {
        gameResultModal.classList.add('hidden');
        initializeGame();
    });

    initializeGame();
});

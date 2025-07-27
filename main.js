// main.js

// 花札のデータ定義
const HanafudaCards = [
    { id: 1, month: 1, name: "松に鶴", type: "光", image: "textures/hanafuda_01_01.jpg" },
    { id: 2, month: 1, name: "松に赤短", type: "短冊", image: "textures/hanafuda_01_02.jpg" },
    { id: 3, month: 1, name: "松", type: "カス", image: "textures/hanafuda_01_03.jpg" },
    { id: 4, month: 1, name: "松", type: "カス", image: "textures/hanafuda_01_04.jpg" },
    { id: 5, month: 2, name: "梅に鶯", type: "タネ", image: "textures/hanafuda_02_01.jpg" },
    { id: 6, month: 2, name: "梅に赤短", type: "短冊", image: "textures/hanafuda_02_02.jpg" },
    { id: 7, month: 2, name: "梅", type: "カス", image: "textures/hanafuda_02_03.jpg" },
    { id: 8, month: 2, name: "梅", type: "カス", image: "textures/hanafuda_02_04.jpg" },
    { id: 9, month: 3, name: "桜に幕", type: "光", image: "textures/hanafuda_03_01.jpg" },
    { id: 10, month: 3, name: "桜に赤短", type: "短冊", image: "textures/hanafuda_03_02.jpg" },
    { id: 11, month: 3, name: "桜", type: "カス", image: "textures/hanafuda_03_03.jpg" },
    { id: 12, month: 3, name: "桜", type: "カス", image: "textures/hanafuda_03_04.jpg" },
    { id: 13, month: 4, name: "藤に不如帰", type: "タネ", image: "textures/hanafuda_04_01.jpg" },
    { id: 14, month: 4, name: "藤に短冊", type: "短冊", image: "textures/hanafuda_04_02.jpg" },
    { id: 15, month: 4, name: "藤", type: "カス", image: "textures/hanafuda_04_03.jpg" },
    { id: 16, month: 4, name: "藤", type: "カス", image: "textures/hanafuda_04_04.jpg" },
    { id: 17, month: 5, name: "菖蒲に八ツ橋", type: "タネ", image: "textures/hanafuda_05_01.jpg" },
    { id: 18, month: 5, name: "菖蒲に短冊", type: "短冊", image: "textures/hanafuda_05_02.jpg" },
    { id: 19, month: 5, name: "菖蒲", type: "カス", image: "textures/hanafuda_05_03.jpg" },
    { id: 20, month: 5, name: "菖蒲", type: "カス", image: "textures/hanafuda_05_04.jpg" },
    { id: 21, month: 6, name: "牡丹に蝶", type: "タネ", image: "textures/hanafuda_06_01.jpg" },
    { id: 22, month: 6, name: "牡丹に青短", type: "短冊", image: "textures/hanafuda_06_02.jpg" },
    { id: 23, month: 6, name: "牡丹", type: "カス", image: "textures/hanafuda_06_03.jpg" },
    { id: 24, month: 6, name: "牡丹", type: "カス", image: "textures/hanafuda_06_04.jpg" },
    { id: 25, month: 7, name: "萩に猪", type: "タネ", image: "textures/hanafuda_07_01.jpg" },
    { id: 26, month: 7, name: "萩に短冊", type: "短冊", image: "textures/hanafuda_07_02.jpg" },
    { id: 27, month: 7, name: "萩", type: "カス", image: "textures/hanafuda_07_03.jpg" },
    { id: 28, month: 7, name: "萩", type: "カス", image: "textures/hanafuda_07_04.jpg" },
    { id: 29, month: 8, name: "芒に月", type: "光", image: "textures/hanafuda_08_01.jpg" },
    { id: 30, month: 8, name: "芒に雁", type: "タネ", image: "textures/hanafuda_08_02.jpg" },
    { id: 31, month: 8, name: "芒", type: "カス", image: "textures/hanafuda_08_03.jpg" },
    { id: 32, month: 8, name: "芒", type: "カス", image: "textures/hanafuda_08_04.jpg" },
    { id: 33, month: 9, name: "菊に盃", type: "光", image: "textures/hanafuda_09_01.jpg" },
    { id: 34, month: 9, name: "菊に青短", type: "短冊", image: "textures/hanafuda_09_02.jpg" },
    { id: 35, month: 9, name: "菊", type: "カス", image: "textures/hanafuda_09_03.jpg" },
    { id: 36, month: 9, name: "菊", type: "カス", image: "textures/hanafuda_09_04.jpg" },
    { id: 37, month: 10, name: "紅葉に鹿", type: "タネ", image: "textures/hanafuda_10_01.jpg" },
    { id: 38, month: 10, name: "紅葉に青短", type: "短冊", image: "textures/hanafuda_10_02.jpg" },
    { id: 39, month: 10, name: "紅葉", type: "カス", image: "textures/hanafuda_10_03.jpg" },
    { id: 40, month: 10, name: "紅葉", type: "カス", image: "textures/hanafuda_10_04.jpg" },
    { id: 41, month: 11, name: "柳に小野道風", type: "光", image: "textures/hanafuda_11_01.jpg" },
    { id: 42, month: 11, name: "柳に燕", type: "タネ", image: "textures/hanafuda_11_02.jpg" },
    { id: 43, month: 11, name: "柳に短冊", type: "短冊", image: "textures/hanafuda_11_03.jpg" },
    { id: 44, month: 11, name: "柳", type: "カス", image: "textures/hanafuda_11_04.jpg" },
    { id: 45, month: 12, name: "桐に鳳凰", type: "光", image: "textures/hanafuda_12_01.jpg" },
    { id: 46, month: 12, name: "桐に短冊", type: "短冊", image: "textures/hanafuda_12_02.jpg" },
    { id: 47, month: 12, name: "桐", type: "カス", image: "textures/hanafuda_12_03.jpg" },
    { id: 48, month: 12, name: "桐", type: "カス", image: "textures/hanafuda_12_04.jpg" },
];

// 役の定義
const Yaku = {
    GOKO: { name: "五光", points: 15, cards: ["松に鶴", "桜に幕", "芒に月", "桐に鳳凰", "柳に小野道風"] },
    SHIKO: { name: "四光", points: 8, cards: ["松に鶴", "桜に幕", "芒に月", "桐に鳳凰"] }, // 柳に小野道風を除く
    AMESHIKO: { name: "雨四光", points: 7, cards: ["松に鶴", "桜に幕", "芒に月", "柳に小野道風"] }, // 柳に小野道風を含む
    SANKO: { name: "三光", points: 6, cards: ["松に鶴", "桜に幕", "芒に月"] }, // 菊に盃、雨に柳を除く
    INOSHIKACHO: { name: "猪鹿蝶", points: 5, cards: ["萩に猪", "紅葉に鹿", "牡丹に蝶"] },
    AKATAN: { name: "赤短", points: 5, cards: ["松に赤短", "梅に赤短", "桜に赤短"] },
    AOTAN: { name: "青短", points: 5, cards: ["牡丹に青短", "菊に青短", "紅葉に青短"] },
    TANE: { name: "タネ", points: 1, count: 5 }, // 5枚以上で1点、以降1枚増えるごとに1点追加
    TAN: { name: "タン", points: 1, count: 5 }, // 5枚以上で1点、以降1枚増えるごとに1点追加
    KASU: { name: "カス", points: 1, count: 10 }, // 10枚以上で1点、以降1枚増えるごとに1点追加
};

// 役を判定する関数
function checkYaku(capturedCards) {
    let currentYaku = [];
    let totalPoints = 0;

    const capturedCardNames = capturedCards.map(card => card.name);
    const capturedCardTypes = capturedCards.map(card => card.type);

    // 五光
    const gokoCards = Yaku.GOKO.cards;
    if (gokoCards.every(cardName => capturedCardNames.includes(cardName))) {
        currentYaku.push(Yaku.GOKO);
        totalPoints += Yaku.GOKO.points;
    } else {
        // 雨四光
        const ameshikoCards = Yaku.AMESHIKO.cards;
        if (ameshikoCards.every(cardName => capturedCardNames.includes(cardName))) {
            currentYaku.push(Yaku.AMESHIKO);
            totalPoints += Yaku.AMESHIKO.points;
        } else {
            // 四光
            const shikoCards = Yaku.SHIKO.cards;
            if (shikoCards.every(cardName => capturedCardNames.includes(cardName))) {
                currentYaku.push(Yaku.SHIKO);
                totalPoints += Yaku.SHIKO.points;
            }
        }
        // 三光
        const sankoCards = Yaku.SANKO.cards;
        if (sankoCards.every(cardName => capturedCardNames.includes(cardName))) {
            currentYaku.push(Yaku.SANKO);
            totalPoints += Yaku.SANKO.points;
        }
    }

    // 猪鹿蝶
    const inoshikachoCards = Yaku.INOSHIKACHO.cards;
    if (inoshikachoCards.every(cardName => capturedCardNames.includes(cardName))) {
        currentYaku.push(Yaku.INOSHIKACHO);
        totalPoints += Yaku.INOSHIKACHO.points;
    }

    // 赤短
    const akatanCards = Yaku.AKATAN.cards;
    if (akatanCards.every(cardName => capturedCardNames.includes(cardName))) {
        currentYaku.push(Yaku.AKATAN);
        totalPoints += Yaku.AKATAN.points;
    }

    // 青短
    const aotanCards = Yaku.AOTAN.cards;
    if (aotanCards.every(cardName => capturedCardNames.includes(cardName))) {
        currentYaku.push(Yaku.AOTAN);
        totalPoints += Yaku.AOTAN.points;
    }

    // タネ
    const taneCount = capturedCardTypes.filter(type => type === "タネ").length;
    if (taneCount >= Yaku.TANE.count) {
        const taneYaku = { ...Yaku.TANE, points: Yaku.TANE.points + (taneCount - Yaku.TANE.count) };
        currentYaku.push(taneYaku);
        totalPoints += taneYaku.points;
    }

    // タン
    const tanCount = capturedCardTypes.filter(type => type === "短冊").length;
    if (tanCount >= Yaku.TAN.count) {
        const tanYaku = { ...Yaku.TAN, points: Yaku.TAN.points + (tanCount - Yaku.TAN.count) };
        currentYaku.push(tanYaku);
        totalPoints += tanYaku.points;
    }

    // カス
    const kasuCount = capturedCardTypes.filter(type => type === "カス").length;
    if (kasuCount >= Yaku.KASU.count) {
        const kasuYaku = { ...Yaku.KASU, points: Yaku.KASU.points + (kasuCount - Yaku.KASU.count) };
        currentYaku.push(kasuYaku);
        totalPoints += kasuYaku.points;
    }

    return { yaku: currentYaku, points: totalPoints };
}

// ゲームの状態を管理する変数
let deck = []; // 山札
let field = []; // 場札
let playerHand = []; // プレイヤーの手札
let aiHand = []; // AIの手札
let playerCapturedCards = []; // プレイヤーが取った札
let aiCapturedCards = []; // AIが取った札
let playerScore = 0; // プレイヤーの得点
let aiScore = 0; // AIの得点
let isKoiKoi = false; // こいこい中かどうか

// ゲームの初期化
function initializeGame() {
    // 山札をシャッフル
    deck = [...HanafudaCards].sort(() => Math.random() - 0.5);

    // 場札を8枚配る
    field = deck.splice(0, 8);

    // プレイヤーとAIに手札を8枚ずつ配る
    playerHand = deck.splice(0, 8);
    aiHand = deck.splice(0, 8);

    playerScore = 0;
    aiScore = 0;
    isKoiKoi = false;

    displayCards();
}

// 札を画面に表示する関数
function displayCards() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = `
        <div class="game-area">
            <div class="player-area">
                <h3>AIの手札</h3>
                <div id="ai-hand" class="hand-cards"></div>
                <h3>AIの取った札</h3>
                <div id="ai-captured-cards" class="captured-cards"></div>
                <p>AIの得点: <span id="ai-score">0</span>点</p>
            </div>
            <div class="field-area">
                <h3>場札</h3>
                <div id="field-cards" class="field-cards"></div>
                <h3>山札</h3>
                <div id="deck-area" class="deck-area"></div>
            </div>
            <div class="player-area">
                <h3>プレイヤーの手札</h3>
                <div id="player-hand" class="hand-cards"></div>
                <h3>プレイヤーの取った札</h3>
                <div id="player-captured-cards" class="captured-cards"></div>
                <p>プレイヤーの得点: <span id="player-score">0</span>点</p>
            </div>
        </div>
    `;

    const aiHandDiv = document.getElementById('ai-hand');
    const fieldCardsDiv = document.getElementById('field-cards');
    const playerHandDiv = document.getElementById('player-hand');
    const deckAreaDiv = document.getElementById('deck-area');
    const aiCapturedCardsDiv = document.getElementById('ai-captured-cards');
    const playerCapturedCardsDiv = document.getElementById('player-captured-cards');

    // AIの手札は裏向きで表示
    aiHand.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'back');
        aiHandDiv.appendChild(cardElement);
    });

    // 場札を表示
    field.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = card.image;
        cardElement.alt = card.name;
        cardElement.classList.add('card');
        fieldCardsDiv.appendChild(cardElement);
    });

    // プレイヤーの手札を表示
    playerHand.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = card.image;
        cardElement.alt = card.name;
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id; // 札のIDをデータ属性として保持
        cardElement.addEventListener('click', () => playPlayerCard(card.id));
        playerHandDiv.appendChild(cardElement);
    });

    // AIが取った札を表示
    aiCapturedCards.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = card.image;
        cardElement.alt = card.name;
        cardElement.classList.add('card');
        aiCapturedCardsDiv.appendChild(cardElement);
    });

    // プレイヤーが取った札を表示
    playerCapturedCards.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = card.image;
        cardElement.alt = card.name;
        cardElement.classList.add('card');
        playerCapturedCardsDiv.appendChild(cardElement);
    });

    // 山札の枚数を表示
    const deckCountElement = document.createElement('div');
    deckCountElement.classList.add('card', 'back');
    deckCountElement.textContent = `残り ${deck.length} 枚`;
    deckAreaDiv.appendChild(deckCountElement);

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('ai-score').textContent = aiScore;
}

// プレイヤーが札を出す処理
function playPlayerCard(cardId) {
    const cardIndex = playerHand.findIndex(card => card.id === cardId);
    if (cardIndex > -1) {
        const playedCard = playerHand.splice(cardIndex, 1)[0];
        field.push(playedCard);
        console.log(`プレイヤーが ${playedCard.name} を出しました。`);

        // 場札との組み合わせを判定
        const matchingCards = field.filter(card => card.month === playedCard.month);

        if (matchingCards.length >= 2) {
            // 2枚以上同じ月の札がある場合（出した札 + 場札の札）
            console.log(`${playedCard.name} と同じ月の札が場にあります:`, matchingCards.map(c => c.name));

            // 札を取る処理
            takeCards(matchingCards, playerCapturedCards);
            const { yaku, points } = checkYaku(playerCapturedCards);
            if (yaku.length > 0) {
                console.log("プレイヤーの役:", yaku.map(y => y.name).join(', '), "合計点:", points);
                playerScore += points;
                displayCards(); // スコア更新を反映
                showKoiKoiPrompt(points); // こいこいプロンプトを表示
                return; // プレイヤーのターンを一時停止
            }
        } else {
            console.log(`${playedCard.name} と同じ月の札は場にありませんでした。`);
        }

        // 山札から1枚めくる
        if (deck.length > 0) {
            const drawnCard = deck.shift(); // 山札の先頭から1枚取る
            field.push(drawnCard);
            console.log(`山札から ${drawnCard.name} をめくりました。`);

            // めくった札と場札との組み合わせを判定
            matchingCards = field.filter(card => card.month === drawnCard.month);

            if (matchingCards.length >= 2) {
                console.log(`${drawnCard.name} と同じ月の札が場にあります:`, matchingCards.map(c => c.name));
                // 札を取る処理
                takeCards(matchingCards, playerCapturedCards);
                const { yaku, points } = checkYaku(playerCapturedCards);
                if (yaku.length > 0) {
                    console.log("プレイヤーの役:", yaku.map(y => y.name).join(', '), "合計点:", points);
                    playerScore += points;
                    displayCards(); // スコア更新を反映
                    showKoiKoiPrompt(points); // こいこいプロンプトを表示
                    return; // プレイヤーのターンを一時停止
                }
            } else {
                console.log(`${drawnCard.name} と同じ月の札は場にありませんでした。`);
            }
        } else {
            console.log("山札がありません。");
        }

        displayCards(); // 画面を再描画
        if (!checkGameOver()) { // ゲームが終了していなければAIのターン
            aiTurn();
        }
    }
}

// AIのターン
function aiTurn() {
    console.log("AIのターンです。");
    if (aiHand.length > 0) {
        // AIの手札からランダムに1枚選ぶ（仮のロジック）
        const playedCardIndex = Math.floor(Math.random() * aiHand.length);
        const playedCard = aiHand.splice(playedCardIndex, 1)[0];
        field.push(playedCard);
        console.log(`AIが ${playedCard.name} を出しました。`);

        // 場札との組み合わせを判定（AIが出した札）
        let matchingCards = field.filter(card => card.month === playedCard.month);

        if (matchingCards.length >= 2) {
            console.log(`${playedCard.name} と同じ月の札が場にあります:`, matchingCards.map(c => c.name));
            takeCards(matchingCards, aiCapturedCards);
            const { yaku, points } = checkYaku(aiCapturedCards);
            if (yaku.length > 0) {
                console.log("AIの役:", yaku.map(y => y.name).join(', '), "合計点:", points);
            }
        } else {
            console.log(`${playedCard.name} と同じ月の札は場にありませんでした。`);
        }

        // 山札から1枚めくる
        if (deck.length > 0) {
            const drawnCard = deck.shift();
            field.push(drawnCard);
            console.log(`AIが山札から ${drawnCard.name} をめくりました。`);

            // めくった札と場札との組み合わせを判定
            matchingCards = field.filter(card => card.month === drawnCard.month);

            if (matchingCards.length >= 2) {
                console.log(`${drawnCard.name} と同じ月の札が場にあります:`, matchingCards.map(c => c.name));
                takeCards(matchingCards, aiCapturedCards);
                const { yaku, points } = checkYaku(aiCapturedCards);
                if (yaku.length > 0) {
                    console.log("AIの役:", yaku.map(y => y.name).join(', '), "合計点:", points);
                }
            } else {
                console.log(`${drawnCard.name} と同じ月の札は場にありませんでした。`);
            }
        } else {
            console.log("山札がありません。");
        }
    } else {
        console.log("AIの手札がありません。");
    }
    displayCards(); // 画面を再描画
    checkGameOver(); // ゲーム終了判定
}

// こいこいプロンプトを表示
function showKoiKoiPrompt(currentPoints) {
    const koikoiPrompt = document.getElementById('koikoi-prompt');
    koikoiPrompt.classList.remove('hidden');

    const koikoiButton = document.getElementById('koikoi-button');
    const shobuButton = document.getElementById('shobu-button');

    koikoiButton.onclick = () => {
        isKoiKoi = true;
        koikoiPrompt.classList.add('hidden');
        console.log("プレイヤーはこいこいを選択しました。");
        // ゲームを続行
        if (!checkGameOver()) {
            aiTurn();
        }
    };

    shobuButton.onclick = () => {
        isKoiKoi = false;
        koikoiPrompt.classList.add('hidden');
        console.log("プレイヤーは勝負を選択しました。");
        // ゲーム終了処理
        endGame();
    };
}

// ゲーム終了処理
function endGame() {
    const playerResult = checkYaku(playerCapturedCards);
    const aiResult = checkYaku(aiCapturedCards);

    let finalPlayerScore = playerResult.points;
    let finalAiScore = aiResult.points;

    // こいこい中の場合、得点倍増などのルールを適用
    if (isKoiKoi) {
        // 例: こいこい中の役は2倍
        finalPlayerScore *= 2;
    }

    console.log(`最終結果 - プレイヤー: ${finalPlayerScore}点, AI: ${finalAiScore}点`);

    let winnerMessage = "";
    if (finalPlayerScore > finalAiScore) {
        winnerMessage = "プレイヤーの勝利！";
    } else if (finalAiScore > finalPlayerScore) {
        winnerMessage = "AIの勝利！";
    } else {
        winnerMessage = "引き分け！";
    }
    alert(`ゲーム終了！\nプレイヤー: ${finalPlayerScore}点\nAI: ${finalAiScore}点\n\n${winnerMessage}`);
    initializeGame(); // ゲームをリセット
}

// 札を取る共通関数
function takeCards(cardsToTake, targetPile) {
    cardsToTake.forEach(card => {
        const indexInField = field.findIndex(fCard => fCard.id === card.id);
        if (indexInField > -1) {
            targetPile.push(field.splice(indexInField, 1)[0]);
        }
    });
    console.log(`札を ${targetPile === playerCapturedCards ? 'プレイヤー' : 'AI'}が取りました:`, cardsToTake.map(c => c.name).join(', '));
// ゲーム終了判定
function checkGameOver() {
    if (playerHand.length === 0 && aiHand.length === 0 || deck.length === 0) {
        console.log("ゲーム終了！");
        const playerResult = checkYaku(playerCapturedCards);
        const aiResult = checkYaku(aiCapturedCards);

        console.log(`最終結果 - プレイヤー: ${playerResult.points}点, AI: ${aiResult.points}点`);

        let winnerMessage = "";
        if (playerResult.points > aiResult.points) {
            winnerMessage = "プレイヤーの勝利！";
        } else if (aiResult.points > playerResult.points) {
            winnerMessage = "AIの勝利！";
        } else {
            winnerMessage = "引き分け！";
        }
        alert(`ゲーム終了！
プレイヤー: ${playerResult.points}点
AI: ${aiResult.points}点

${winnerMessage}`);
        return true;
    }
    return false;
}

document.addEventListener('DOMContentLoaded', () => {
    const gameSection = document.getElementById('game-section');
    const rulesSection = document.getElementById('rules-section');
    const showGameButton = document.getElementById('show-game');
    const showRulesButton = document.getElementById('show-rules');

    // 初期表示はゲーム画面
    gameSection.classList.remove('hidden');
    rulesSection.classList.add('hidden');

    showGameButton.addEventListener('click', () => {
        gameSection.classList.remove('hidden');
        rulesSection.classList.add('hidden');
        initializeGame(); // ゲーム画面表示時にゲームを初期化
    });

    showRulesButton.addEventListener('click', () => {
        gameSection.classList.add('hidden');
        rulesSection.classList.remove('hidden');
        // ルール説明の内容をここに動的に追加することも可能
        document.getElementById('rules-content').innerHTML = `
            <h3>こいこいルール概要</h3>
            <p>花札のこいこいは、手札と場札を合わせて役を作り、得点を競うゲームです。</p>
            <h4>ゲームの流れ</h4>
            <ol>
                <li>親と子を決め、手札と場札を配ります。</li>
                <li>プレイヤーは手札から札を1枚出し、場札と合わせます。</li>
                <li>山札から1枚めくり、場札と合わせます。</li>
                <li>役ができた場合、「こいこい」を続けるか「勝負」するかを選択します。</li>
                <li>これを繰り返し、最終的に得点の高い方が勝ちます。</li>
            </ol>
            <h4>主な役</h4>
            <ul>
                <li><b>五光</b>: 光札5枚</li>
                <li><b>四光</b>: 光札4枚（柳に小野道風を除く）</li>
                <li><b>三光</b>: 光札3枚（雨に柳、菊に盃を除く）</li>
                <li><b>猪鹿蝶</b>: 猪、鹿、蝶の短冊3枚</li>
                <li><b>赤短</b>: 松、梅、桜の赤短冊3枚</li>
                <li><b>青短</b>: 牡丹、菊、紅葉の青短冊3枚</li>
                <li><b>タネ</b>: 動物が描かれた札5枚</li>
                <li><b>タン</b>: 短冊が描かれた札5枚</li>
                <li><b>カス</b>: その他の札10枚</li>
            </ul>
            <p>より詳しいルールは、別途追加していきます。</p>
        `;
    });

    initializeGame(); // ページロード時にゲームを初期化
});

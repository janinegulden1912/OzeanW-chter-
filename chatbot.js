// Alle 10 Fragen des Ozean-Wächters
const questions = [
    {
        title: "Was ist deine berufliche Erfahrung?",
        subtitle: "Erzähl mir von deinem Hintergrund, deinen Jobs, deiner Ausbildung.",
        example: "z.B. 10 Jahre im Marketing, Studium BWL, Nebenjob als Fitnesstrainer..."
    },
    {
        title: "Welche Fähigkeiten hast du?",
        subtitle: "Was kannst du besonders gut? Auch Hobbys zählen!",
        example: "z.B. Social Media, Grafikdesign, Kochen, Sprechen vor Publikum..."
    },
    {
        title: "Was sind deine Leidenschaften?",
        subtitle: "Wofür brennst du? Was machst du gerne in deiner Freizeit?",
        example: "z.B. Reisen, Fotografie, Nachhaltigkeit, Tiere, Musik..."
    },
    {
        title: "Welche Probleme hast du selbst gelöst?",
        subtitle: "Denk an Herausforderungen, die du gemeistert hast.",
        example: "z.B. Gewichtsverlust, Karrierewechsel, Selbstständigkeit aufgebaut..."
    },
    {
        title: "Für wen möchtest du arbeiten?",
        subtitle: "Wer ist deine Wunsch-Zielgruppe?",
        example: "z.B. Mütter über 40, Startup-Gründer, Kreative, Sportler..."
    },
    {
        title: "Was nervt dich an deiner Branche?",
        subtitle: "Welche Probleme siehst du, die niemand anspricht?",
        example: "z.B. Zu kompliziert, zu teuer, zu oberflächlich, zu generisch..."
    },
    {
        title: "Welche einzigartige Kombination hast du?",
        subtitle: "Was macht DICH anders als andere?",
        example: "z.B. Marketing + Psychologie, Fitness + Ernährung + Mindset..."
    },
    {
        title: "Welche Transformation kannst du bieten?",
        subtitle: "Welches Ergebnis können Menschen mit dir erreichen?",
        example: "z.B. Von unsichtbar zu gebucht, von Chaos zu Klarheit..."
    },
    {
        title: "Was ist dein Budget und deine Zeit?",
        subtitle: "Wie viel kannst du investieren (Geld & Zeit)?",
        example: "z.B. 500€ Startkapital, 10 Stunden pro Woche..."
    },
    {
        title: "Was ist dein Ziel in 12 Monaten?",
        subtitle: "Wo möchtest du in einem Jahr stehen?",
        example: "z.B. 5.000€/Monat, 100 Kunden, eigenes Online-Business..."
    }
];

let currentQuestion = 0;
let answers = [];

// Fortschritt aktualisieren
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `Frage ${currentQuestion + 1}/${questions.length}`;
}

// Frage anzeigen
function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-title').textContent = question.title;
    document.getElementById('question-subtitle').textContent = question.subtitle;
    document.getElementById('question-example').textContent = question.example;
    document.getElementById('answer-input').value = answers[currentQuestion] || '';
    updateProgress();
}

// Nächste Frage
function nextQuestion() {
    const answer = document.getElementById('answer-input').value.trim();
    
    if (answer === '') {
        alert('Bitte beantworte die Frage, bevor du weitergehst.');
        return;
    }
    
    answers[currentQuestion] = answer;
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        generatePrompt();
    }
}

// Prompt generieren
function generatePrompt() {
    const prompt = `Du bist ein erfahrener Business-Stratege und Nischen-Experte. Basierend auf den folgenden Informationen über mich, erstelle mir eine detaillierte Nischen-Strategie nach dem "Blue Ocean"-Prinzip.

**Meine Antworten:**

1. **Berufliche Erfahrung:** ${answers[0]}

2. **Fähigkeiten:** ${answers[1]}

3. **Leidenschaften:** ${answers[2]}

4. **Gelöste Probleme:** ${answers[3]}

5. **Zielgruppe:** ${answers[4]}

6. **Branchenprobleme:** ${answers[5]}

7. **Einzigartige Kombination:** ${answers[6]}

8. **Transformation:** ${answers[7]}

9. **Budget & Zeit:** ${answers[8]}

10. **12-Monats-Ziel:** ${answers[9]}

---

**Bitte erstelle mir:**

1. **3-5 spezifische Nischen-Ideen**, die perfekt zu mir passen
   - Jede Nische sollte eine Kombination aus meinen Stärken, Erfahrungen und der Zielgruppe sein
   - Bewerte jede Nische nach "Blue Ocean Score" (1-10)

2. **Für die beste Nische:**
   - Konkrete Positionierung (1 Satz)
   - Zielgruppen-Avatar (detailliert)
   - Top 3 Probleme dieser Zielgruppe
   - Mein Alleinstellungsmerkmal (USP)
   - Erste 3 Schritte zum Start

3. **Warum diese Nische ein "Blauer Ozean" ist**
   - Geringe Konkurrenz
   - Hohe Nachfrage
   - Perfekt zu meinen Stärken

Sei konkret, kreativ und mutig!`;

    document.getElementById('generated-prompt').value = prompt;
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

// Prompt kopieren
function copyPrompt() {
    const promptText = document.getElementById('generated-prompt');
    promptText.select();
    document.execCommand('copy');
    alert('✅ Prompt kopiert! Füge ihn jetzt in Claude, Gemini, Perplexity oder ChatGPT ein.');
}

// Chat zurücksetzen
function resetChat() {
    currentQuestion = 0;
    answers = [];
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    displayQuestion();
}

// Initial anzeigen
displayQuestion();


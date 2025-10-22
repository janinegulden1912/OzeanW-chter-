// Ozean-Wächter Chatbot - Original-Gesprächsfluss
// Aktualisiert mit aktuellen Preisen und Infos

const questions = [
    {
        id: 1,
        question: "Wie würdest du deine Persönlichkeit beschreiben?",
        options: [
            "Kreativ und künstlerisch",
            "Analytisch und strukturiert",
            "Empathisch und menschenorientiert",
            "Abenteuerlustig und risikofreudig",
            "Praktisch und lösungsorientiert"
        ]
    },
    {
        id: 2,
        question: "Was begeistert dich wirklich? Wofür könntest du stundenlang brennen?",
        options: [
            "Kunst, Design, Kreativität",
            "Technologie, Innovation, Zukunft",
            "Menschen helfen, Probleme lösen",
            "Reisen, Abenteuer, neue Erfahrungen",
            "Gesundheit, Fitness, Wohlbefinden",
            "Finanzen, Business, Erfolg"
        ]
    },
    {
        id: 3,
        question: "Welche Fähigkeiten bringst du mit? (Mehrfachauswahl möglich)",
        options: [
            "Schreiben, Texten, Storytelling",
            "Design, Fotografie, Video",
            "Coaching, Beratung, Mentoring",
            "Technisches Know-how, Programmierung",
            "Marketing, Social Media, Verkauf",
            "Organisation, Projektmanagement"
        ],
        multiple: true
    },
    {
        id: 4,
        question: "Mit wem arbeitest du am liebsten?",
        options: [
            "Unternehmer und Selbstständige",
            "Kreative und Künstler",
            "Eltern und Familien",
            "Sportler und Gesundheitsbewusste",
            "Studenten und junge Erwachsene",
            "Senioren und Best Ager"
        ]
    },
    {
        id: 5,
        question: "Welche Art von Problemen löst du gerne?",
        options: [
            "Emotionale und mentale Herausforderungen",
            "Praktische Alltagsprobleme",
            "Technische und digitale Probleme",
            "Finanzielle Herausforderungen",
            "Gesundheitliche Themen",
            "Kreative Blockaden"
        ]
    },
    {
        id: 6,
        question: "Wie arbeitest du am liebsten?",
        options: [
            "1:1 intensiv und persönlich",
            "In Gruppen und Workshops",
            "Digital und ortsunabhängig",
            "Mit physischen Produkten",
            "Durch Content (Blog, Video, Podcast)",
            "Automatisiert und skalierbar"
        ]
    },
    {
        id: 7,
        question: "Welche Werte sind dir besonders wichtig?",
        options: [
            "Authentizität und Ehrlichkeit",
            "Freiheit und Unabhängigkeit",
            "Gemeinschaft und Zusammenhalt",
            "Innovation und Fortschritt",
            "Nachhaltigkeit und Verantwortung",
            "Erfolg und Wachstum"
        ]
    },
    {
        id: 8,
        question: "Wie viel Zeit möchtest du investieren?",
        options: [
            "Nebenbei (5-10 Stunden/Woche)",
            "Teilzeit (10-20 Stunden/Woche)",
            "Vollzeit (40+ Stunden/Woche)",
            "Flexibel, je nach Projekt"
        ]
    },
    {
        id: 9,
        question: "Welches Startbudget steht dir zur Verfügung?",
        options: [
            "Unter 500€",
            "500€ - 2.000€",
            "2.000€ - 5.000€",
            "Über 5.000€"
        ]
    },
    {
        id: 10,
        question: "Was ist dein großes Ziel?",
        options: [
            "Finanzielle Freiheit erreichen",
            "Meine Leidenschaft zum Beruf machen",
            "Menschen helfen und Impact schaffen",
            "Ein skalierbares Business aufbauen",
            "Ortsunabhängig leben und arbeiten",
            "Meine Expertise monetarisieren"
        ]
    }
];

let currentQuestion = 0;
let answers = {};

function startChat() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('chat-screen').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `Frage ${currentQuestion + 1} von ${questions.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    if (question.multiple) {
        // Mehrfachauswahl
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option;
            button.onclick = () => toggleMultipleOption(button, option);
            optionsContainer.appendChild(button);
        });
        
        // "Weiter"-Button für Mehrfachauswahl
        const nextButton = document.createElement('button');
        nextButton.className = 'cta-button';
        nextButton.textContent = 'Weiter';
        nextButton.style.marginTop = '20px';
        nextButton.onclick = () => submitMultipleAnswers();
        optionsContainer.appendChild(nextButton);
    } else {
        // Einzelauswahl
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option;
            button.onclick = () => selectOption(option);
            optionsContainer.appendChild(button);
        });
    }
}

let selectedMultiple = [];

function toggleMultipleOption(button, option) {
    if (selectedMultiple.includes(option)) {
        selectedMultiple = selectedMultiple.filter(o => o !== option);
        button.classList.remove('selected');
    } else {
        selectedMultiple.push(option);
        button.classList.add('selected');
    }
}

function submitMultipleAnswers() {
    if (selectedMultiple.length === 0) {
        alert('Bitte wähle mindestens eine Option aus!');
        return;
    }
    
    answers[`question${currentQuestion + 1}`] = selectedMultiple.join(', ');
    selectedMultiple = [];
    nextQuestion();
}

function selectOption(option) {
    answers[`question${currentQuestion + 1}`] = option;
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        generatePrompt();
    }
}

function generatePrompt() {
    const prompt = `Du bist ein Experte für Nischenfindung und digitales Business. Analysiere folgendes Profil und schlage 3-5 hochprofitable, einzigartige Nischen vor, die perfekt zu dieser Person passen:

PERSÖNLICHKEIT: ${answers.question1}
LEIDENSCHAFTEN: ${answers.question2}
FÄHIGKEITEN: ${answers.question3}
ZIELGRUPPE: ${answers.question4}
PROBLEMLÖSUNG: ${answers.question5}
ARBEITSWEISE: ${answers.question6}
WERTE: ${answers.question7}
ZEITINVESTITION: ${answers.question8}
BUDGET: ${answers.question9}
VISION: ${answers.question10}

Für jede Nische, gib an:
1. Nischenname und Kurzbeschreibung
2. Warum diese Nische perfekt zu diesem Profil passt
3. Konkrete Geschäftsideen und Monetarisierungsmöglichkeiten
4. Zielgruppe und deren Schmerzpunkte
5. Erste Schritte zum Start
6. Geschätztes Einkommenspotenzial (realistisch)
7. Erfolgsfaktoren und mögliche Herausforderungen

Sei spezifisch, kreativ und fokussiere dich auf ungewöhnliche, wenig überlaufene Nischen mit echtem Potenzial.`;

    document.getElementById('chat-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('generated-prompt').textContent = prompt;
    
    // KI-Links vorbereiten
    const encodedPrompt = encodeURIComponent(prompt);
    document.getElementById('claude-link').href = `https://claude.ai/new?q=${encodedPrompt}`;
    document.getElementById('gemini-link').href = `https://gemini.google.com/?q=${encodedPrompt}`;
    document.getElementById('perplexity-link').href = `https://www.perplexity.ai/?q=${encodedPrompt}`;
    document.getElementById('chatgpt-link').href = `https://chat.openai.com/?q=${encodedPrompt}`;
}

function copyPrompt() {
    const promptText = document.getElementById('generated-prompt').textContent;
    navigator.clipboard.writeText(promptText).then(() => {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✅ Kopiert!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}

function restartChat() {
    currentQuestion = 0;
    answers = {};
    selectedMultiple = [];
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
}


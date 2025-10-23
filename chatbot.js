// Ozean-Wächter Chatbot - Verbesserte Version
// Mit eigenen Antworten + Produkt-Vorschlägen

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
        ],
        allowCustom: true
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
        ],
        allowCustom: true
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
        multiple: true,
        allowCustom: true
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
        ],
        allowCustom: true
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
        ],
        allowCustom: true
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
        ],
        allowCustom: true
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
        ],
        allowCustom: true
    },
    {
        id: 8,
        question: "Wie viel Zeit möchtest du investieren?",
        options: [
            "Nebenbei (5-10 Stunden/Woche)",
            "Teilzeit (10-20 Stunden/Woche)",
            "Vollzeit (40+ Stunden/Woche)",
            "Flexibel, je nach Projekt"
        ],
        allowCustom: true
    },
    {
        id: 9,
        question: "Welches Startbudget steht dir zur Verfügung?",
        options: [
            "Unter 500€",
            "500€ - 2.000€",
            "2.000€ - 5.000€",
            "Über 5.000€"
        ],
        allowCustom: true
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
        ],
        allowCustom: true
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
        
        // Eigene Antwort hinzufügen (für Mehrfachauswahl)
        if (question.allowCustom) {
            const customDiv = document.createElement('div');
            customDiv.style.marginTop = '20px';
            customDiv.innerHTML = `
                <input type="text" id="custom-input-multiple" placeholder="Oder gib deine eigene Antwort ein..." 
                       style="width: 100%; padding: 12px; border: 2px solid #e91e8c; border-radius: 8px; font-size: 16px;">
                <button onclick="addCustomMultiple()" class="cta-button" style="margin-top: 10px; width: 100%;">+ Eigene Antwort hinzufügen</button>
            `;
            optionsContainer.appendChild(customDiv);
        }
        
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
        
        // Eigene Antwort hinzufügen (für Einzelauswahl)
        if (question.allowCustom) {
            const customDiv = document.createElement('div');
            customDiv.style.marginTop = '20px';
            customDiv.innerHTML = `
                <input type="text" id="custom-input" placeholder="Oder gib deine eigene Antwort ein..." 
                       style="width: 100%; padding: 12px; border: 2px solid #e91e8c; border-radius: 8px; font-size: 16px;">
                <button onclick="submitCustomAnswer()" class="cta-button" style="margin-top: 10px; width: 100%;">Eigene Antwort absenden</button>
            `;
            optionsContainer.appendChild(customDiv);
        }
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

function addCustomMultiple() {
    const input = document.getElementById('custom-input-multiple');
    const customAnswer = input.value.trim();
    
    if (customAnswer) {
        if (!selectedMultiple.includes(customAnswer)) {
            selectedMultiple.push(customAnswer);
            
            // Visuelles Feedback
            const button = document.createElement('button');
            button.className = 'option-button selected';
            button.textContent = customAnswer;
            button.onclick = () => {
                selectedMultiple = selectedMultiple.filter(o => o !== customAnswer);
                button.remove();
            };
            
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.insertBefore(button, input.parentElement);
        }
        
        input.value = '';
    } else {
        alert('Bitte gib eine Antwort ein!');
    }
}

function submitMultipleAnswers() {
    if (selectedMultiple.length === 0) {
        alert('Bitte wähle mindestens eine Option aus oder gib eine eigene Antwort ein!');
        return;
    }
    
    answers[`question${currentQuestion + 1}`] = selectedMultiple.join(', ');
    selectedMultiple = [];
    nextQuestion();
}

function submitCustomAnswer() {
    const input = document.getElementById('custom-input');
    const customAnswer = input.value.trim();
    
    if (customAnswer) {
        selectOption(customAnswer);
    } else {
        alert('Bitte gib eine Antwort ein oder wähle eine Option aus!');
    }
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
    const prompt = `Du bist ein Experte für Nischenfindung und digitales Marketing. Analysiere folgendes Profil und ÜBERSETZE die Persönlichkeit, Leidenschaften und Fähigkeiten dieser Person in 2-3 hochprofitable, einzigartige DIGITALE MARKETING-NISCHEN, die perfekt zu ihr passen UND echte Erfolgschancen mit nachweisbarer Nachfrage bieten:

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
1. **Nischenname und Kurzbeschreibung** (DIGITALES MARKETING)
2. **Warum diese digitale Nische perfekt zu diesem Profil passt**
3. **KONKRETE PRODUKT-VORSCHLÄGE** (mindestens 3-5 WOW-Produkte):
   - Jedes Produkt muss: EINZIGARTIG + MEHRWERT + PROBLEMLÖSUNG + WOW-EFFEKT haben
   - Beispiele: Online-Kurse, Coaching-Programme, digitale Tools, Membership-Bereiche, E-Books, Vorlagen, Software, Apps
   - Sei KREATIV und SPEZIFISCH - keine generischen Vorschläge!
   - Zeige, WARUM jedes Produkt hohe Nachfrage haben wird
4. **Zielgruppe und deren konkrete Schmerzpunkte**
5. **MARKTANALYSE**: Nachfrage, Suchvolumen, Wettbewerb, Erfolgschancen (mit Zahlen!)
6. **Erste Schritte zum digitalen Start** (konkrete Aktionsschritte)
7. **Realistisches Einkommenspotenzial** (basierend auf Marktdaten)
8. **Erfolgsfaktoren und mögliche Herausforderungen**
9. **Beispiele erfolgreicher Player** in dieser digitalen Nische

WICHTIG: 
- Die Person kommt möglicherweise aus einem NICHT-DIGITALEN Bereich - deine Aufgabe ist es, ihre Fähigkeiten in DIGITALE MARKETING-NISCHEN zu übersetzen!
- Fokus auf ONLINE-BUSINESS: Social Media, Content-Marketing, E-Learning, digitale Produkte, Online-Services
- Wähle Nischen mit NACHWEISBARER NACHFRAGE (Google Trends, Suchvolumen, Zahlungsbereitschaft)
- Sei SPEZIFISCH und kreativ - keine generischen Vorschläge wie "Social Media Marketing"
- Ungewöhnliche, wenig überlaufene Nischen mit ECHTEM POTENZIAL
- Zeige, WIE die Person ihre bestehenden Fähigkeiten digital monetarisieren kann!
- Die PRODUKT-VORSCHLÄGE müssen KNALLER sein - WOW-Effekt garantiert!
- Jedes Produkt muss eine EINZIGARTIGE LÖSUNG für ein DRINGENDES PROBLEM bieten!

ZUSÄTZLICH: Erstelle am Ende eine zusammenfassende PDF-Struktur mit:
- Übersicht aller Nischen
- Top 3 Produkt-Ideen pro Nische
- Konkrete nächste Schritte
- Ressourcen und Tools

Bitte strukturiere deine Antwort klar und übersichtlich mit Überschriften und Aufzählungen.`;

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


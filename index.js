const questions = [
    // --- SECTION 1: TRUE / FALSE (35 Questions) ---
    {
        "section": "True / False - Chapter 0",
        "q": "Multimedia consists of text, graphics, sound, animation, and video.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 0",
        "q": "HTTP was originally designed to transmit hypermedia.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 0",
        "q": "URI identifies a resource on the web.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 0",
        "q": "HTML is defined using SGML.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 0",
        "q": "HTML uses binary format only.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "section": "True / False - Chapter 0",
        "q": "XML allows defining custom tags.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 0",
        "q": "Interactive multimedia allows user control over content delivery.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 0",
        "q": "Linear multimedia allows users to control navigation freely.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "section": "True / False - Chapter 0",
        "q": "Non-linear multimedia allows users to enter and exit at any point.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 0",
        "q": "CD-ROM can store up to 80 minutes of multimedia content.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 0",
        "q": "DVD can store up to 18 GB of data.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 0",
        "q": "Virtual Reality uses multimedia elements like sound and animation.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 1",
        "q": "Multimedia is the integration of multiple media types digitally.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 1",
        "q": "Multimedia includes audio, video, and animation.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 1",
        "q": "Hypertext is clickable linked text.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 1",
        "q": "Multimedia cannot be stored digitally.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "section": "True / False - Chapter 1",
        "q": "Multimedia is used to represent and transmit information.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 2",
        "q": "Multimedia systems require hardware and software.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 2",
        "q": "Capture devices include cameras and microphones.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 2",
        "q": "Storage devices include hard disks and DVDs.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 2",
        "q": "Communication networks include the internet and intranet.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 2",
        "q": "Display devices include speakers and monitors.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 3",
        "q": "Multimedia development starts with planning.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 3",
        "q": "A prototype is a simple version of the project.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 3",
        "q": "Testing ensures the project meets user needs.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 3",
        "q": "Delivery includes packaging and distribution.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 3",
        "q": "Multimedia projects require organization and planning.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 3",
        "q": "Creativity alone is enough to create multimedia.",
        "options": ["True", "False"],
        "answer": 1
    },
    {
        "section": "True / False - Chapter 3",
        "q": "Multimedia requires hardware and software knowledge.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 4",
        "q": "Project Manager maintains the overall vision of the project.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 4",
        "q": "Project Manager is responsible for day-to-day operations and budget.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 4",
        "q": "Multimedia Designer prepares the blueprint of the project.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 4",
        "q": "Multimedia Designer defines content, media, and interaction.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 4",
        "q": "Interface Designer makes the interface easy to use.",
        "options": ["True", "False"],
        "answer": 0
    },
    {
        "section": "True / False - Chapter 4",
        "q": "Audio Specialist works with MIDI and sound recording.",
        "options": ["True", "False"],
        "answer": 0
    },

    // --- SECTION 2: MULTIPLE CHOICE (35 Questions) ---
    {
        "section": "Multiple Choice - Chapter 0",
        "q": "What does HTTP stand for?",
        "options": [
            "HyperText Transfer Protocol",
            "HighText Transfer Program",
            "Hyper Tool Protocol",
            "Hyper Transfer Text Program"
        ],
        "answer": 0
    },
    {
        "section": "Multiple Choice - Chapter 0",
        "q": "URI is used to:",
        "options": [
            "Store files",
            "Identify resources",
            "Play audio",
            "Compress data"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 0",
        "q": "HTML is defined using:",
        "options": [
            "XML",
            "SGML",
            "HTTP",
            "ASCII"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 0",
        "q": "XML allows:",
        "options": [
            "Fixed tags only",
            "Custom tags",
            "No structure",
            "Only images"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 0",
        "q": "Interactive multimedia means:",
        "options": [
            "No user control",
            "User controls content",
            "Only video",
            "Only text"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 0",
        "q": "Linear multimedia:",
        "options": [
            "User chooses freely",
            "Fixed sequence",
            "No structure",
            "Random"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 0",
        "q": "Non-linear multimedia:",
        "options": [
            "Fixed order",
            "User navigation",
            "No interaction",
            "Only slides"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 0",
        "q": "CD-ROM capacity is about:",
        "options": [
            "10 GB",
            "80 minutes",
            "1 TB",
            "500 MB"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 0",
        "q": "DVD capacity is about:",
        "options": [
            "1 GB",
            "5 MB",
            "18 GB",
            "100 MB"
        ],
        "answer": 2
    },
    {
        "section": "Multiple Choice - Chapter 0",
        "q": "Virtual Reality is:",
        "options": [
            "Separate from multimedia",
            "Extension of multimedia",
            "Only text",
            "Only audio"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 1",
        "q": "Multimedia means:",
        "options": [
            "One media",
            "Multiple media",
            "Only video",
            "Only text"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 1",
        "q": "Multimedia includes:",
        "options": [
            "Text",
            "Audio",
            "Video",
            "All of the above"
        ],
        "answer": 3
    },
    {
        "section": "Multiple Choice - Chapter 1",
        "q": "Hypertext is:",
        "options": [
            "Audio",
            "Linked text",
            "Video",
            "Animation"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 1",
        "q": "Multimedia is used to:",
        "options": [
            "Store information",
            "Transmit information",
            "Process information",
            "All of the above"
        ],
        "answer": 3
    },
    {
        "section": "Multiple Choice - Chapter 2",
        "q": "Which is a capture device?",
        "options": [
            "Monitor",
            "Microphone",
            "Printer",
            "Speaker"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 2",
        "q": "Which is a storage device?",
        "options": [
            "Keyboard",
            "Hard disk",
            "Mouse",
            "Scanner"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 2",
        "q": "Which is a communication network?",
        "options": [
            "Internet",
            "Speaker",
            "Camera",
            "Printer"
        ],
        "answer": 0
    },
    {
        "section": "Multiple Choice - Chapter 2",
        "q": "Which is a display device?",
        "options": [
            "Microphone",
            "Monitor",
            "Scanner",
            "Keyboard"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 3",
        "q": "First stage of multimedia project:",
        "options": [
            "Testing",
            "Planning",
            "Delivery",
            "Editing"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 3",
        "q": "A prototype is:",
        "options": [
            "Final product",
            "Simple model",
            "Deleted file",
            "Backup"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 3",
        "q": "Testing ensures:",
        "options": [
            "Errors remain",
            "Requirements are met",
            "Faster internet",
            "Storage"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 3",
        "q": "Delivering includes:",
        "options": [
            "Packaging",
            "Distribution",
            "User manual",
            "All of the above"
        ],
        "answer": 3
    },
    {
        "section": "Multiple Choice - Chapter 3",
        "q": "Multimedia requires:",
        "options": [
            "Hardware",
            "Software",
            "Creativity",
            "All of the above"
        ],
        "answer": 3
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Project Manager is responsible for:",
        "options": [
            "Coding",
            "Budget & team",
            "Audio",
            "Drawing"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Multimedia Designer prepares:",
        "options": [
            "Code",
            "Blueprint",
            "Audio",
            "Video"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Interface Designer focuses on:",
        "options": [
            "User interaction",
            "Storage",
            "Audio",
            "Coding"
        ],
        "answer": 0
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Writers are responsible for:",
        "options": [
            "Coding",
            "Scripts and text",
            "Audio",
            "Hardware"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Video Specialist coordinates:",
        "options": [
            "Programmers",
            "Video team",
            "Designers",
            "Users"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Audio Specialist handles:",
        "options": [
            "Video",
            "Sound recording",
            "Coding",
            "Design"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Multimedia Programmer uses:",
        "options": [
            "Programming languages",
            "Audio tools",
            "Cameras",
            "Printers"
        ],
        "answer": 0
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Web Multimedia Producer needs:",
        "options": [
            "HTML",
            "CGI",
            "Photoshop",
            "All of the above"
        ],
        "answer": 3
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Information Designers:",
        "options": [
            "Code programs",
            "Structure content & navigation",
            "Record audio",
            "Manage budget"
        ],
        "answer": 1
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Instructional Designers focus on:",
        "options": [
            "Content clarity",
            "Audio",
            "Video",
            "Hardware"
        ],
        "answer": 0
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Audio Specialist skill includes:",
        "options": [
            "MIDI",
            "HTML",
            "Drawing",
            "Networking"
        ],
        "answer": 0
    },
    {
        "section": "Multiple Choice - Chapter 4",
        "q": "Multimedia teams require:",
        "options": [
            "No skills",
            "Only coding",
            "Communication & organization",
            "Only design"
        ],
        "answer": 2
    }
];

class Quiz {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.shuffledQuestions = [];
        this.isVerifying = false;

        // Add Enter key support for access code
        document.getElementById('access-code').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.verifyAndStart();
            }
        });
    }

    verifyAndStart() {
        const code = document.getElementById('access-code').value.trim();
        // Obfuscated check for RA10 to keep it hidden from simple text searches
        if (btoa(code) === "UkExMA==") {
            this.start();
            document.getElementById('error-msg').style.display = 'none';
        } else {
            document.getElementById('error-msg').style.display = 'block';
            document.getElementById('access-code').value = '';
        }
    }

    start() {
        this.shuffledQuestions = [...questions]; // Keep order as requested for study
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('result-screen').style.display = 'none';
        document.getElementById('quiz-screen').style.display = 'block';
        
        this.showQuestion();
    }

    showQuestion() {
        const question = this.shuffledQuestions[this.currentQuestionIndex];
        const progress = ((this.currentQuestionIndex) / this.shuffledQuestions.length) * 100;
        
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('section-label').textContent = question.section;
        document.getElementById('question-text').textContent = question.q;
        document.getElementById('current-num').textContent = this.currentQuestionIndex + 1;
        
        const optionsGrid = document.getElementById('options-grid');
        optionsGrid.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn fade-in';
            button.textContent = option;
            button.onclick = () => this.handleAnswer(index);
            optionsGrid.appendChild(button);
        });
    }

    handleAnswer(index) {
        const question = this.shuffledQuestions[this.currentQuestionIndex];
        this.userAnswers.push({
            question: question.q,
            selected: index,
            correct: question.answer,
            options: question.options
        });

        if (index === question.answer) {
            this.score++;
        }

        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.shuffledQuestions.length) {
            this.showQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        document.getElementById('quiz-screen').style.display = 'none';
        document.getElementById('result-screen').style.display = 'block';
        
        const finalScore = document.getElementById('final-score');
        finalScore.textContent = this.score;
        
        const feedbackText = document.getElementById('feedback-text');
        const feedbackSub = document.getElementById('feedback-sub');
        const percentage = (this.score / this.shuffledQuestions.length) * 100;

        if (percentage === 100) {
            feedbackText.textContent = "Perfect Score!";
            feedbackSub.textContent = "You have mastered all the important slides!";
        } else if (percentage >= 80) {
            feedbackText.textContent = "Excellent Work!";
            feedbackSub.textContent = "You are well prepared for the exam.";
        } else if (percentage >= 50) {
            feedbackText.textContent = "Good Effort!";
            feedbackSub.textContent = "A bit more review and you'll be ready.";
        } else {
            feedbackText.textContent = "Keep Studying!";
            feedbackSub.textContent = "Review the slides and try again.";
        }

        this.showReview();
    }

    showReview() {
        const container = document.getElementById('review-container');
        container.innerHTML = '<h3 style="margin-bottom: 1.5rem; color: var(--primary)">Review Your Answers</h3>';
        
        this.userAnswers.forEach((ans, i) => {
            const item = document.createElement('div');
            item.className = `review-item ${ans.selected === ans.correct ? 'correct' : 'wrong'}`;
            
            item.innerHTML = `
                <p class="review-q"><strong>Q${i + 1}: ${ans.question}</strong></p>
                <p class="review-ans">Your answer: ${ans.options[ans.selected]}</p>
                ${ans.selected !== ans.correct ? `<p class="review-correct-label">Correct answer: ${ans.options[ans.correct]}</p>` : ''}
            `;
            container.appendChild(item);
        });
    }

    restart() {
        document.getElementById('result-screen').style.display = 'none';
        document.getElementById('start-screen').style.display = 'block';
        document.getElementById('access-code').value = '';
    }
}

const quiz = new Quiz();

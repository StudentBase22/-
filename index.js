const questions = [
    { section: "القسم الأول: الإدارة ووظائفها", q: "ما هو التعريف الصحيح للإدارة؟", options: ["تنفيذ الأعمال بشكل فردي", "تنفيذ الأعمال عن طريق الآخرين", "السيطرة على الموظفين فقط", "تقليل التكاليف فقط"], answer: 1 },
    { section: "القسم الأول: الإدارة ووظائفها", q: "الهدف الأساسي للإدارة هو:", options: ["زيادة عدد الموظفين", "تحقيق الأهداف بكفاءة وفاعلية", "تقليل الإنتاج", "تقليل المنافسة"], answer: 1 },
    { section: "القسم الأول: الإدارة ووظائفها", q: "أي مما يلي من المؤثرات الخارجية؟", options: ["الموظفون", "الهيكل التنظيمي", "المنافسون", "الموارد البشرية"], answer: 2 },
    { section: "القسم الأول: الإدارة ووظائفها", q: "أول وظيفة في العملية الإدارية هي:", options: ["الرقابة", "التنظيم", "التخطيط", "التوجيه"], answer: 2 },
    { section: "القسم الأول: الإدارة ووظائفها", q: "التخطيط الاستراتيجي يتم بواسطة:", options: ["العمال", "الإدارة العليا", "الإدارة الوسطى", "المشرفين"], answer: 1 },
    { section: "القسم الأول: الإدارة ووظائفها", q: "التخطيط التشغيلي يكون:", options: ["طويل المدى", "يومي أو أسبوعي", "سنوي فقط", "غير محدد"], answer: 1 },
    { section: "القسم الأول: الإدارة ووظائفها", q: "التنظيم يعني:", options: ["تحفيز الموظفين", "ترتيب الموارد وتوزيع المهام", "وضع الأهداف", "الرقابة"], answer: 1 },
    { section: "القسم الأول: الإدارة ووظائفها", q: "التوجيه يشمل:", options: ["التخطيط المالي", "القيادة والتحفيز", "تحديد الأهداف", "الهيكل التنظيمي"], answer: 1 },
    { section: "القسم الأول: الإدارة ووظائفها", q: "أول خطوة في الرقابة هي:", options: ["المقارنة", "القياس", "وضع المعايير", "التصحيح"], answer: 2 },
    { section: "القسم الأول: الإدارة ووظائفها", q: "آخر خطوة في الرقابة هي:", options: ["القياس", "وضع المعايير", "اتخاذ الإجراءات التصحيحية", "التخطيط"], answer: 2 },
    { section: "القسم الثاني: الابتكار والإبداع", q: "الابتكار هو:", options: ["مجرد فكرة", "تطبيق عملي للأفكار", "تقليد الآخرين", "إدارة الموارد"], answer: 1 },
    { section: "القسم الثاني: الابتكار والإبداع", q: "الإبداع يعني:", options: ["بيع المنتجات", "توليد أفكار جديدة", "تنفيذ الخطط", "الرقابة"], answer: 1 },
    { section: "القسم الثاني: الابتكار والإبداع", q: "الاختراع هو:", options: ["تحسين منتج", "تطبيق فكرة", "خلق شيء جديد من العدم", "تسويق منتج"], answer: 2 },
    { section: "القسم الثاني: الابتكار والإبداع", q: "من صفات المبتكرين:", options: ["الجمود", "حب الاستطلاع", "الخوف من المخاطر", "الاعتماد على الآخرين"], answer: 1 },
    { section: "القسم الثاني: الابتكار والإبداع", q: "من أهمية الابتكار:", options: ["تقليل الجودة", "زيادة المنافسة فقط", "تحسين الجودة", "تقليل الأرباح"], answer: 2 },
    { section: "القسم الثاني: الابتكار والإبداع", q: "الابتكار الجذري يعني:", options: ["تحسين بسيط", "تغيير جذري كامل", "لا تغيير", "تقليل الإنتاج"], answer: 1 },
    { section: "القسم الثاني: الابتكار والإبداع", q: "الابتكار التدريجي هو:", options: ["تغيير مفاجئ", "تحسينات صغيرة مستمرة", "إلغاء المنتج", "تقليل الجودة"], answer: 1 },
    { section: "القسم الثاني: الابتكار والإبداع", q: "ابتكار المنتج يعني:", options: ["تغيير طريقة الإنتاج", "إدخال منتج جديد", "تقليل التكلفة", "تغيير الإدارة"], answer: 1 },
    { section: "القسم الثاني: الابتكار والإبداع", q: "ابتكار العملية يعني:", options: ["منتج جديد", "طريقة إنتاج جديدة", "تسويق جديد", "إدارة جديدة"], answer: 1 },
    { section: "القسم الثاني: الابتكار والإبداع", q: "مثال على الابتكار التدميري:", options: ["تطوير منتج قديم", "التصوير الرقمي بدل الأفلام", "تحسين التغليف", "تقليل السعر"], answer: 1 },
    { section: "القسم الثالث: ريادة الأعمال", q: "ريادة الأعمال هي:", options: ["إدارة فقط", "عملية إنشاء مشروع مع تحمل المخاطر", "تقليل التكاليف", "العمل الحكومي"], answer: 1 },
    { section: "القسم الثالث: ريادة الأعمال", q: "رائد الأعمال هو:", options: ["موظف عادي", "شخص يبدأ مشروع ويتحمل المخاطر", "مدير فقط", "مستهلك"], answer: 1 },
    { section: "القسم الثالث: ريادة الأعمال", q: "من خصائص رائد الأعمال:", options: ["الخوف", "المثابرة", "الكسل", "العشوائية"], answer: 1 },
    { section: "القسم الثالث: ريادة الأعمال", q: "الشركات الناشئة هي:", options: ["شركات قديمة", "شركات صغيرة فقط", "شركات حديثة قابلة للنمو", "حكومية"], answer: 2 },
    { section: "القسم الثالث: ريادة الأعمال", q: "من أهمية ريادة الأعمال:", options: ["تقليل الوظائف", "خلق فرص عمل", "تقليل الابتكار", "تقليل الإنتاج"], answer: 1 },
    { section: "القسم الرابع: المنتج ودورة حياته", q: "المنتج يمكن أن يكون:", options: ["سلعة فقط", "خدمة فقط", "فكرة فقط", "جميع ما سبق"], answer: 3 },
    { section: "القسم الرابع: المنتج ودورة حياته", q: "أول مرحلة في دورة حياة المنتج:", options: ["النمو", "النضج", "التقديم", "الانحدار"], answer: 2 },
    { section: "القسم الرابع: المنتج ودورة حياته", q: "في مرحلة التقديم تكون المبيعات:", options: ["عالية", "منخفضة", "ثابتة", "متوسطة"], answer: 1 },
    { section: "القسم الرابع: المنتج ودورة حياته", q: "أعلى أرباح تكون غالباً في:", options: ["التقديم", "النمو", "الانحدار", "البداية"], answer: 1 },
    { section: "القسم الرابع: المنتج ودورة حياته", q: "في مرحلة الانحدار:", options: ["تزيد الأرباح", "تزيد المبيعات", "تنخفض المبيعات", "لا تتغير"], answer: 2 },
    { section: "القسم الخامس: التحليل والبيئة", q: "SWOT يرمز إلى:", options: ["قوة وضعف فقط", "تحليل داخلي فقط", "قوة، ضعف، فرص، تهديدات", "تحليل مالي"], answer: 2 },
    { section: "القسم الخامس: التحليل والبيئة", q: "الفرص تعتبر:", options: ["عوامل داخلية", "عوامل خارجية إيجابية", "عوامل سلبية", "غير مهمة"], answer: 1 },
    { section: "القسم الخامس: التحليل والبيئة", q: "نقاط الضعف هي:", options: ["عوامل خارجية", "عوامل داخلية سلبية", "فرص", "تهديدات"], answer: 1 },
    { section: "القسم الخامس: التحليل والبيئة", q: "نموذج القوى الخمس يستخدم لـ:", options: ["تحليل الموظفين", "تحليل المنافسة", "تحليل الأرباح", "تحليل الإنتاج"], answer: 1 },
    { section: "القسم الخامس: التحليل والبيئة", q: "PESTEL يهتم بـ:", options: ["البيئة الداخلية", "البيئة الخارجية", "الموظفين", "الإدارة فقط"], answer: 1 },
    { section: "القسم الخامس: التحليل والبيئة", q: "العامل الاقتصادي يشمل:", options: ["الثقافة", "الضرائب", "التضخم", "التكنولوجيا"], answer: 2 },
    { section: "القسم السادس: المنافسة والميزة التنافسية", q: "الميزة التنافسية هي:", options: ["تقليل الإنتاج", "التفوق على المنافسين", "زيادة التكاليف", "تقليل الجودة"], answer: 1 },
    { section: "القسم السادس: المنافسة والميزة التنافسية", q: "استراتيجية التميز تعني:", options: ["أقل سعر", "منتج فريد", "إنتاج كبير", "تقليل الجودة"], answer: 1 },
    { section: "القسم السادس: المنافسة والميزة التنافسية", q: "المنافس المباشر هو:", options: ["لا يقدم نفس المنتج", "يقدم منتج مختلف", "يقدم نفس المنتج لنفس العملاء", "لا ينافس"], answer: 2 },
    { section: "القسم السادس: المنافسة والميزة التنافسية", q: "المنافس غير المباشر هو:", options: ["نفس المنتج", "منتج بديل", "لا يوجد", "شركة حكومية"], answer: 1 }
];

class QuizApp {
    constructor() {
        this.currentIdx = 0;
        this.score = 0;
        this.userAnswers = [];
        this.initElements();
    }

    initElements() {
        this.screens = {
            start: document.getElementById('start-screen'),
            quiz: document.getElementById('quiz-screen'),
            result: document.getElementById('result-screen')
        };
        this.questionText = document.getElementById('question-text');
        this.optionsGrid = document.getElementById('options-grid');
        this.progressBar = document.getElementById('progress-bar');
        this.currentNum = document.getElementById('current-num');
        this.sectionLabel = document.getElementById('section-label');
        this.finalScore = document.getElementById('final-score');
        this.reviewContainer = document.getElementById('review-container');
    }

    start() {
        this.currentIdx = 0;
        this.score = 0;
        this.userAnswers = [];
        this.showScreen('quiz');
        this.renderQuestion();
    }

    showScreen(key) {
        Object.keys(this.screens).forEach(k => {
            if (this.screens[k]) {
                this.screens[k].style.display = k === key ? 'block' : 'none';
            }
        });
    }

    renderQuestion() {
        const q = questions[this.currentIdx];
        const progress = (this.currentIdx / questions.length) * 100;
        
        this.progressBar.style.width = `${progress}%`;
        this.currentNum.innerText = this.currentIdx + 1;
        this.sectionLabel.innerText = q.section;
        this.questionText.innerText = q.q;
        
        this.optionsGrid.innerHTML = '';
        const labels = ['A', 'B', 'C', 'D'];
        
        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn fade-in';
            btn.style.animationDelay = `${index * 0.05}s`;
            btn.innerHTML = `<span class="label">${labels[index]}</span><span>${opt}</span>`;
            btn.onclick = () => this.handleAnswer(index);
            this.optionsGrid.appendChild(btn);
        });
    }

    handleAnswer(selectedIdx) {
        this.userAnswers.push(selectedIdx);
        if (selectedIdx === questions[this.currentIdx].answer) {
            this.score++;
        }
        this.currentIdx++;
        if (this.currentIdx < questions.length) {
            this.renderQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.progressBar.style.width = `100%`;
        this.showScreen('result');
        this.finalScore.innerText = this.score;
        
        const feedback = document.getElementById('feedback-text');
        const sub = document.getElementById('feedback-sub');

        if (this.score === 40) {
            feedback.innerText = "أداء مثالي! مذهل";
            sub.innerText = "لقد حصلت على الدرجة النهائية، أنت خبير حقيقي.";
        } else if (this.score >= 30) {
            feedback.innerText = "أحسنت صنعاً!";
            sub.innerText = "لديك فهم ممتاز للمادة العلمية.";
        } else if (this.score >= 20) {
            feedback.innerText = "جيد جداً";
            sub.innerText = "لقد نجحت في الاختبار، استمر في المذاكرة.";
        } else {
            feedback.innerText = "حاول مرة أخرى";
            sub.innerText = "تحتاج لمراجعة المفاهيم الأساسية لتحسين نتيجتك.";
        }

        this.renderReview();
    }

    renderReview() {
        this.reviewContainer.innerHTML = '<h3 style="margin: 2rem 0 1.5rem; color: var(--primary);">مراجعة الإجابات</h3>';
        
        questions.forEach((q, i) => {
            const userIdx = this.userAnswers[i];
            const correctIdx = q.answer;
            const isCorrect = userIdx === correctIdx;

            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
            reviewItem.innerHTML = `
                <div class="review-q">${i + 1}. ${q.q}</div>
                <div class="review-ans">
                    <div style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}">
                        إجابتك: ${q.options[userIdx]} ${isCorrect ? '✅' : '❌'}
                    </div>
                    ${!isCorrect ? `<div style="color: var(--success); margin-top: 4px;">الإجابة الصحيحة: ${q.options[correctIdx]}</div>` : ''}
                </div>
            `;
            this.reviewContainer.appendChild(reviewItem);
        });
    }

    restart() {
        this.start();
    }
}

const quiz = new QuizApp();

$(document).ready(function () {
    const json = {
        showProgressBar: "top",
        completedHtml: `
    <b>Знайдено 4 об'єкта</b><br>
    <span>Залиште заявку, експерт із нерухомості зв'яжеться з вами для уточнення деталей і надішле презентацію відповідних об'єктів.</span><br>
    <form id='quizForm' method="post" action="#">
        <label>Введіть своє ім'я:</label>
        <input type='text'>
        <label>Введіть свій телефон:</label>
        <input type='text'>
        <button type='submit'>отримати пропозицію</button>
    </form>`,
        pagePrevText: "Назад",
        pageNextText: "Вперед",
        completeText: "Завершити",
        getProgress: function(e) {
            console.log(e);
        },
        pages: [
            {
                title: "Питання: {pageno} із {pagecount}.",
                questions: [{
                    type: "radiogroup",
                    name: "first",
                    isRequired: false,
                    description: '<img src="./images/quiz_img.jpg" alt="Image">',
                    title: 'Якщо у ваших планах придбати нерухомість, щоб вигідно її перепродати чи здати в аренду - оберіть пункт “для інвестицій”. Якщо ви шукаєте нерухомість для себе чи близьких - ваш пункт “для життя”. **З якою метою плануєте придбати нерухомість у Сумах?**',
                    choices: [
                        "для життя",
                        "для інвестування"
                    ]
                }]
            },
            {
                title: "Питання: {pageno} із {pagecount}.",
                questions: [{
                    type: "radiogroup",
                    name: "second",
                    isRequired: false,
                    description: '<img src="./images/quiz_img2.jpg" alt="Image">',
                    title: "Для когось головне знайти затишне місце, щоб побудувати власний будинок, а інші шукають вже готовий дім, який відповідає усім їхнім забаганкам. А можливо це буде класичний житловий комплекс із багатою інфраструктурою, дитячими майданчиками та великим подвір’ям.",
                    choices: [
                        "багатоповерхівка",
                        "приватний будинок",
                        "клубний дім",
                        "земельна ділянка"
                    ]
                }]
            },
            {
                title: "Питання: {pageno} із {pagecount}.",
                questions: [{
                    type: "radiogroup",
                    name: "third",
                    isRequired: false,
                    description: '<img src="./images/quiz_img3.jpg" alt="Image">',
                    title: "Щоб точніше визначитися з площею нерухомості, необхідно враховувати всі потреби сучасної людини. Комусь потрібне невелике затишне житло, а іншим потрібен великий простір, з високою стелею та панорамними вікнами.",
                    choices: [
                        "до 40 квадратних метрів",
                        "від 40 до 60 квадратних метрів",
                        "від 60 до 90 квадратних метрів",
                        "від 90 до 120 квадратних метрів",
                        "від 120 до 150 квадратних метрів",
                        "більше ніж 150 квадратних метрів"
                    ]
                }]
            },
            {
                title: "Питання: {pageno} із {pagecount}.",
                questions: [{
                    type: "radiogroup",
                    name: "fourth",
                    isRequired: false,
                    description: '<img src="./images/quiz_img4.jpg" alt="Image">',
                    title: "На деяких об’єктах вже є готовий ремонт, котрий дозволяє відразу розташовуватися, минаючи перфораторний період. А декому потрібно втілити в життя ідеї, які будуть відповідати власним потребам та забаганкам.",
                    choices: [
                        "з ремонтом",
                        "без ремонту"
                    ]
                }]
            },
            {
                title: "Питання: {pageno} із {pagecount}.",
                questions: [{
                    type: "radiogroup",
                    name: "fifth",
                    isRequired: false,
                    description: '<img src="./images/quiz_img5.jpg" alt="Image">',
                    title: "Від кількості грошей, які ви виділяєте на придбання нерухомості, залежить те, в якому районі  буде знаходитися ваша будівля, який відкривається вид із вікон, тип будови та її статус. **Вкажіть передбачуваний бюджет**",
                    choices: [
                        "до 20000 $",
                        "20000 - 25000$",
                        "30000$",
                        "40000$",
                        "50000$",
                        "більше ніж 50000$"
                    ]
                }]
            },
            {
                title: "Питання: {pageno} із {pagecount}.",
                questions: [{
                    type: "radiogroup",
                    name: "sixth",
                    isRequired: false,
                    title: "Будівництво середнього за розмірами будинку займає 2-3 роки. Якщо об'єкт тільки почали будувати, то ціна одного метра в ньому буде нижче на 20-50%, ніж у готовому. Але є покупці, які не хочуть чекати - їм потрібно переїхати найближчим часом, тому вони вибирають вже побудовані і здані будинки. **Виберіть термін здачі**",
                    choices: [
                        "побудований і зданий",
                        "здається в цьому році",
                        "здається в наступному році",
                        "не важливо"
                    ]
                }]
            },
            {
                title: "Питання: {pageno} із {pagecount}.",
                questions: [{
                    type: "radiogroup",
                    name: "seventh",
                    isRequired: false,
                    title: "Якщо у вас є якісь особливі побажання до вашої майбутньої нерухомості, вкажіть їх, щоб врахувати при підборі оптимальних варіантів. **Милі приємні деталі**",
                    choices: [
                        "високі стелі",
                        "панорамні вікна 'в підлогу'",
                        "підземний паркінг",
                        "затишний тихий район"
                    ]
                }]
            }
        ]
    };

    const survey = new Survey.Model(json);

    // survey.onComplete.add(function(quiz) {
    //     if (Object.keys(quiz.data).length === 0) {
    //         return;
    //     } else {
    //         $.post('/url', quiz.data);
    //     }
    // });

    survey.onCurrentPageChanged.add(function (e) {
        const progress = $(".sv_progress_bar")[0].style.width;
        $(".sv_progress_bar").attr('data-width', progress);
    });

    survey.onAfterRenderSurvey.add(function (e) {
        const progress = $(".sv_progress_bar")[0].style.width;
        $(".sv_progress_bar").attr('data-width', progress);
    })





    const converter = new showdown.Converter();

    survey
        .onTextMarkdown
        .add(function (survey, options) {
            let str = converter.makeHtml(options.text);
            str = str.substring(3);
            str = str.substring(0, str.length - 4);
            options.html = str;
        });

    survey.render("quizHolder");
});
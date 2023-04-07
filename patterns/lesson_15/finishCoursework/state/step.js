var steps = [
    {
        categoryStep : 'path',
        text : 'Привіт! Ти у грі! Твоя ціль дойти до вершини вчасно, до заходу сонця! Ти маєш обрати шлях, зібрати рюкзак та отримати час! Вперед, удачі!',
        task : 'Одже обери яким шляхом ти будешь іти. Є два варіанти: 1.через ліс , 2.вздовж річки: ',
    },
    {
        categoryStep : 'chosebackpack',
        // categoryStep : 'chose',
        choseName : 'backpack',
        text : 'Чудово!!! Тепер треба вирішати який рюкзак ти візьмеш з собою. кожен рюкзак має свою ціну!',
        task : 'Вибирай. Є три варіанти: 1.єконом , 2.комфорт, 3.премиум : ',
    },
    {
        categoryStep : 'trubble',
        trubbleName: 'TrubbleBuilderFood',
        problem: 'food',
        problem_text: 'продукти',
        answer: 2,
        text : 'Ві тільки почали свій підйом, як вже зголодніли!',
        task : 'М’який, а не пух, зелений, а не трава.?: 1.листя , 2.мох, 3.Ялинка : ',
        positiveEnd : 'Ви маєте що перекусити.'
    },
    {
        categoryStep : 'trubble',
        trubbleName: 'TrubbleBuilderShoes',
        problem: 'shoes',
        problem_text: 'взуття',
        answer: 3,
        text : 'Ви підсковзнулися, от біда! Тепер ваше взуття мокре!',
        task : 'Стоїть в лісі на одній ніжці, всі його шукають, але не всі знаходять: 1.листя , 2.дерево, 3.гриб : ',
        positiveEnd : 'Ви маєте що взути.'
    },
    {
        categoryStep : 'chose',
        choseName : 'meet',
        text : 'Вам на зустріч вийшло сімейство зацікавленних лисичок!',
        task : 'Ви підете далі? : 1.Пофоткаю , 2.Піду далі : ',
    },
    {
        categoryStep : 'luck',
        text : 'Вам пощастило! Перед вами дерево з смачними яблуками! Треба трохи позбирати і можна смакувати! Смачного!',
    },
    {
        categoryStep : 'trubble',
        trubbleName: 'TrubbleBuilderRain',
        problem: 'raincoat',
        problem_text: 'дощовик',
        answer: 1,
        text : 'Раптом почався сильний дощь!',
        task : 'З гілки в річку упаде, і не тоне, а пливе?: 1.листя , 2.коріння, 3.шишка : ',
        positiveEnd : 'Як круто , що у вашому рюкзаку є дощовик.'
    },
    {
        categoryStep : 'chose',
        choseName : 'meet',
        text : 'Ви знайшли полонину з полуницею!',
        task : 'Ви підете далі? : 1.Поїм смакоту) , 2.Піду далі : ',
    },
    {
        categoryStep : 'trubble',
        trubbleName: 'TrubbleBuilderMap',
        problem: 'map',
        problem_text: 'карти',
        answer: 2,
        text : 'От лишенько ви заблукали!',
        task : 'З-під снігу розквітає, Раніше всіх весну зустрічає.?: 1.мох , 2.пролісок, 3.Гриб : ',
        positiveEnd : 'Це було так мудро взяти з собою карту.'
    },
]
export default steps

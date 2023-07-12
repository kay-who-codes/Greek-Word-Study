const greek_yaml = `

a1:
  - en: hello
    gr: γεια σας
    ru: здравствуйте
  - en: hello
    gr: γεια σου
    ru: здравствуй
  - en: hi
    gr: γεια
    ru: привет
  - en: I am <name>
    gr: Είμαι ο/η <ονομα>
    ru: Я <имя>
  - en: name
    gr: ονομα
    ru: имя
  - en: second name
    gr: επώνυμο
    ru: фамилия


a2:
  - en: How are you?
    gr: Τι κάνετε;
    ru: Как у вас дела?
  - en: where do you live?
    gr: που μένεις;
    ru: где живешь?

a3:
  - en: What do you do?
    gr: Τι δουλειά κάνεις;
    ru: Что вы делаете? (на работе)
  - en: my family
    gr: η οικογένειά μου
    ru: моя семья

a6:
  - gr: πάω
    en: go
    ru: иду
  - gr: μόνο
    ru: только
    en: only
  - gr: Πού πάτε;
    en: Where are you going?
    ru: Куда ты идешь?
  - gr: λεωφορείο
    en: bus
    ru: автобус
  - gr: εισιτήριο
    en: ticket
    ru: билет
  - gr: ώρα
    en: hour/time
    ru: час/время
  - gr: Τι ώρα είναι;
    en: What time is it?
    ru: Который сейчас час?
  - gr: με / σε / για
    en: with / in / for
    ru: с / в / для
  - gr: από τις - έως
    en: from - to
    ru: от - до
  - gr: από τις - μέχρι
    en: from - to
    ru: от - до
  - gr: πηγαίνω
    en: i go
    ru: я иду
  - gr: ποδήλατο
    en: bicycle
    ru: велосипед
  - gr: μηχανάκι
    ru: мотоцикл
    en: motor bike
  - gr: εισιτήριο
    en: ticket
    ru: билет
  - gr: πόδια
    en: ноги
    ru: legs
  - gr: αεροπλάνο
    en: airplane
    ru: самолет
  - gr: πόσο κάνει;
    en: How much?
    ru: Сколько стоит?
  - gr: τρένο
    en: train
    ru: поезд
  - gr: πλοίο
    en: ship
    ru: корабль
  - gr: παρά
    en: without
    ru: без
  - gr: οκτώ παρά τέταρτο το βράδυ
    en: 7:45 PM
    ru: без 15ти 8 вечера
  - gr: μια και μισή το μεσημέρι
    en: 1:30 PM
    ru: половина-второго дня
  - gr: εφτά και δέκα το πρωί
    en: 7:10 AM
    ru: 7:10 утра
  - gr: περνώ/περνάω
    en: go through/pass
    ru: проходить
  - gr: περνάω από το κέντρο
    en: I pass through the center
    ru: Я прохожу через центр
  - gr: πως περνάς;
    en: how are you? how is it going?
    ru: как дела? как провел время?
  - gr: με συγχωρείτε
    en: sorry / excuse me
    ru: Извините
  - gr: σίγουρα;
    en: sure?
    ru: точно?
  - gr: κάθε μέρα
    en: every day
    ru: каждый день
  - gr: αλλά
    en: but
    ru: но
  - gr: σταματάω
    en: i stop
    ru: я остановился
  - gr: λοιπόν
    en: so
    ru: Хорошо / так
  - gr: τώρα
    en: now
    ru: сейчас
  - gr: αργώ
    en: i'm late
    ru: Я опаздываю
  - gr: πότε
    en: when
    ru: когда
  - gr: λεπτά
    en: minutes
    ru: минуты
  - gr: με τα πόδια
    en: by foot
    ru: пешком
  - gr: ορίστε
    en: here you go
    ru: вот пожалуйста
  - gr: μετά
    en: после
    ru: after
  - gr: μαζί
    en: together
    ru: вместе
  - gr: βόλτα
    en: ride / walk
    ru: поездка
  - gr: γραμμή
    en: line
    ru: линия
  - gr: μάλιστα
    en: actually
    ru: фактически / на самом деле
  - gr: διακόσια
    en: 200
    ru: 200
  - gr: χίλια
    en: a thousand
    ru: тысяча
  - gr: φτάνω
    en: I arrive
    ru: я прибываю
  - gr: με επιστροφή
    en: with return
    ru: с возвратом
  - gr: φεύγω
    en: leave
    ru: отбывать
  - gr: Ξεκινάω
    en: I'm starting
    ru: начинаю / стартую
  - gr: περίπου
    en: approximately
    ru: примерно
  - gr: περπατάω
    en: I walk
    ru: Я иду пешком
  - gr: κοστίζω
    en: cost
    ru: стоить
  - gr: προτιμώ
    en: prefer
    ru: я предпочитаю
  - gr: χώρα
    en: country
    ru: страна
  - gr: κατεβαίνω
    en: get off
    ru: слезать / спускаться
  - gr: παίρνω
    en: take
    ru: брать
  - gr: ζώ
    en: live
    ru: жить
  - gr: μπορώ
    en: can
    ru: мочь
  - gr: συγχωρώ
    en: forgive
    ru: прощать
  - gr: σταθμό
    en: station
    ru: станция
  - gr: γρήγορο
    en: fast
    ru: быстро
  - gr: ίδιο
    en: same
    ru: также
  - gr: μήπως
    en: maybe
    ru: может быть
  - gr: περιμένω
    en: wait
    ru: ждать
  - gr: από τις
    en: from the
    ru: начиная с
  - gr: τηλέφωνο στον
    en: phone to
    ru: звонить кому-либо
  - gr: σήμερα
    en: today
    ru: сегодня
  - gr: ξυπνάω
    en: wake up
    ru: проснуться
  - gr: βγάζω
    en: bring out / go out
    ru: вытащить на прогулку
  - gr: διεύθυνση
    en: address
    ru: адрес
  - gr: ρωτάω
    en: I ask
    ru: я спрашиваю
  - gr: πόσες ώρες;
    en: how many hours?
    ru: сколько часов?
  - gr: απαντάω
    en: I answer
    ru: Я отвечаю
  - gr: δρομολόγια
    en: schedule
    ru: расписание
  - gr: κάθε μισή ώρα
    en: every half hour
    ru: каждые полчаса
  - gr: φορά
    en: time
    ru: раз
  - gr: δύο φορά την μέρα
    en: twice a day
    ru: два раза в день
  - gr: εβδομάδα
    en: week
    ru: неделя
  - gr: μήνας
    en: month
    ru: месяц
a7:
  - gr: ποτέ
    en: never
    ru: никогда
  - gr: ζέστη
    en: warmth
    ru: тепло
  - gr: έξω
    en: outside
    ru: снаружи
  - gr: συχνά
    en: often
    ru: часто
  - gr: τρώω
    en: I eat
    ru: я ем
  - gr: λέω
    en: I say
    ru: Я говорю
  - gr: κλαίω
    en: I'm crying
    ru: я плачу
  - gr: νωρίς
    en: early
    ru: рано
  - gr: ύπνο
    en: sleep
    ru: спать
  - gr: πως περνάς;
    en: how are you doing?
    ru: как дела?
  - gr: Πόσο καιρό;
    en: How long?
    ru: Сколько? как долго?
  - gr: πιστεύω
    en: believe
    ru: верить
  - gr: νέα
    en: news
    ru: Новости
  - gr: άλλα
    en: but
    ru: но
  - gr: κάνουμε συχνά
    en: we often do
    ru: мы часто собираемся
  - gr: πάλι
    en: again
    ru: опять
  - gr: κανονίζουμε
    en: we arrange
    ru: мы организуем
  - gr: τίποτα
    en: nothing
    ru: ничего
  - gr: Αύριο
    en: Tomorrow
    ru: Завтра
  - gr: μεθαύριο
    en: the day after tomorrow
    ru: послезавтра
  - gr: έδω και δύο χρόνια
    en: for two years now
    ru: уже два года
  - gr: αργά
    en: late
    ru: поздно
  - gr: λεφτά
    en: money
    ru: деньги
  - gr: τελειώνω
    en: I finish
    ru: Я заканчиваю
  - gr: καλοκαίρι
    en: summer
    ru: лето
  - gr: ακόμα
    en: still
    ru: все еще
  - gr: πόσον
    en: how much
    ru: сколько
  - gr: πόσον καιρό είσαι εδώ;
    en: how long are you here?
    ru: как долго ты здесь?
  - gr: τον Οκτώβριο κάνει ζέστη
    en: October is hot
    ru: октябрь жаркий
  - gr: ακούω
    en: hear
    ru: слышать / слушать
  - gr: βγαίνω έξω συχνά
    en: I go out often
    ru: я часто выхожу
  
a7_2:
  - gr: θάλασσα
    ru: море
    en: sea
  - gr: Ιανουάριος
    en: January
    ru: январь
  - gr: Φεβρουάριος
    en: February
    ru: февраль
  - gr: Μάρτιος
    en: March
    ru: март
  - gr: Απρίλιος
    en: April
    ru: апрель
  - gr: Μάιος
    en: May
    ru: Май
  - gr: Ιούνιος
    en: June
    ru: июнь
  - gr: Ιούλιος
    en: July
    ru: июль
  - gr: Αύγουστος
    en: August
    ru: август
  - gr: Σεπτέμβριος
    en: September
    ru: сентябрь
  - gr: Οκτώβριος
    en: October
    ru: октябрь
  - gr: Νοέμβριος
    en: november
    ru: ноябрь
  - gr: Δεκέμβριος
    en: December
    ru: декабрь
  - gr: ζεστη κρύο
    en: hot cold
    ru: горячая холодная
  - gr: χειμώνας
    en: winter
    ru: зима
  - gr: άνοιξη
    en: spring
    ru: весна
  - gr: καλοκαίρι
    en: summer
    ru: лето
  - gr: φθινόπωρο
    en: autumn
    ru: осень
  - gr: τον χειμώνα κάνει κρύο
    en: it is cold in winter
    ru: зимой холодно
  - gr: Σήμερα κάνει μείον δέκα βαθμούς Κελσίου
    en: Today is -10 degree Celsius
    ru: Сегодня -10 градусов Цельсия
  - gr: πολύ κρύο
    en: very cold
    ru: очень холодно
  - gr: Τι καιρό κάνει;
    en: What's the weather like;
    ru: Какая там погода;
  - gr: Κάνει λίγο κρύο
    en: It's a bit cold
    ru: немного холодно
  - gr: Κάνω μπάνιο στη θάλασσα
    en: I am swimming in the sea
    ru: я плаваю в море
  - gr: Κάνω σκι
    en: I am skiing
    ru: я катаюсь на лыжах
  - gr: πίνω κρύο νερό
    en: I drink cold water
    ru: я пью холодную воду
  - gr: τρώω παγωτό
    en: I am eating ice cream
    ru: я ем мороженое
  - gr: ανοίγω
    en: open up
    ru: я открываю
  - gr: οπώρα
    en: fruit
    ru: фрукты
  - gr: παγωτό
    en: ice cream
    ru: мороженое
  - gr: σύννεφα
    en: clouds
    ru: облака
  - gr: η βροχή
    en: the rain
    ru: дождь
  - gr: χιόνι
    en: snow
    ru: снег
  - gr: κάνει αέρας
    en: it's windy
    ru: Ветрено
  - gr: καταιγίδα
    en: thunderstorm
    ru: гроза
  - gr: ήλιος
    en: sun
    ru: солнце
`

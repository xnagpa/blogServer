var moment = require('moment');
module.exports = {
  entries: [
    {
      id: 0,
      meta: {
        author: {
          name: 'Finn',
          age: '12'
        },
        updatedAt: moment().subtract(10, 'days')
          .calendar(),
        createdAt: moment().subtract(10, 'days')
          .calendar(),
      },
      image: {
        src: 'http://youbentmywookie.com/wookie/gallery/'+
        '1014_iam8bit-adventure-time/'+
        'Super-Adventure-Time-by-Paul-Robertson-686x385.jpg',
        width: 100,
        height: 100,
        alt: 'Finn and Jake'
      },
      text: '«Время приключений» (англ. Adventure Time, изначально'+
      ' с добавлением with Finn & Jake — «с Финном и Джейком»[1])'+
      ' — мультипликационный сериал, повествующий о приключениях мальчика'+
      ' Финна и его друга — волшебного пса английского бульдога Джейка'+
      ' в постапокалиптическом мире, называемом «Земли Ооо»'+
      ' (англ. Lands of Ooo, в некоторых переводах «Земли Ууу»). '+
      'Создан Пендлтоном Уордом и спродюсирован компаниями '+
      'Frederator Studios и Cartoon Network Studios (англ.)русск. '+
      'для канала Cartoon Network в 2010 году.',
      likes: 60,
      totalCount: 3
    },
    {
      id: 1,
      meta: {
        author: {
          name: 'Finn',
          age: '12'
        },
        updatedAt: moment().subtract(10, 'days')
          .calendar(),
        createdAt: moment().subtract(10, 'days')
          .calendar()
      },

      image: {
        src: 'https://s-media-cache-ak0.pinimg.com/'+
        '736x/c3/1d/10/c31d10ba1d059b32289b7421d09171a0.jpg',
        width: 100,
        height: 100,
        alt: 'Finn and Jake'
      },
      text: 'Мальчик Финн и собака Джейк живут в доме на дереве, '+
      'расположенном в Конфетном королевстве в Землях Ооо. В детстве '+
      'Финн поклялся помогать каждому, кто попал в беду, и теперь'+
      ' он вместе с Джейком то и дело устремляется навстречу приключениям,'+
      ' спасая обитателей окрестных земель. Также в Землях Ооо живут '+
      'принцесса Бубльгум, правящая Империей Сластей, одинокий'+
      ' Снежный Король, похищающий принцесс, королева вампиров Марселин, '+
      'Принцесса Пупырчатого Королевства и многие другие',
      likes: 45,
      totalCount: 3
    },
    {
      id: 2,
      meta: {
        author: {
          name: 'Finn',
          age: '12'
        },
        updatedAt: moment().subtract(10, 'days')
          .calendar(),
        createdAt: moment().subtract(10, 'days')
          .calendar()
      },

      image: {
        src: 'https://pp.userapi.com/c320828/v320828986/314e/51IpPgnCvR4.jpg',
        width: 100,
        height: 100,
        alt: 'Finn and Jake'
      },
      text: 'В самом начале разработки сеттинга'+
      ' Пенделтон Уорд представлял себе Ооо исключительно'+
      ' магическим миром, но после серии «Время бизнеса»,'+
      ' где герои обнаруживают замёрзших в айсберг бизнесменов,'+
      ' вселенная явно вырисовалась, как постапокалиптическая.'+
      ' Уорд объясняет строение мира сериала, '+
      'как «Конфетное королевство снаружи, тьма внутри»'+
      ' и считает, что он никогда не ставил постапокалипсис'+
      ' и Войну Грибов выше основной сути мира. Постапокалиптические'+
      ' мотивы всегда шли только фоном к происходящему. '+
      'Большая часть постапокалиптических элементов вселенной'+
      ' взята из фильма «Безумный Макс».',
      likes: 30,
      totalCount: 3
    },
  ],
  comments: [
    {
      id: 1,
      entry_id: 0,
      text: "This sucks",
      phone: "8-910-888-91-91"
    },
    {
      id: 2,
      entry_id: 0,
      text: "Finn you're freaking gigolo!!!",
      phone: "8-910-111-91-91"
    },
    {
      id: 3,
      entry_id: 0,
      text: "You suck!",
      phone: "8-910-222-91-91"
    },
    {
      id: 4,
      entry_id: 0,
      text: "This sucks",
      phone: "8-910-000-91-91"
    },
  ]
};

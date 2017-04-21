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
        src: 'http://cdn-static.sidereel.com/tv_shows/' +
          '4657/giant_2x/14582706_AdventureTime_SC1.jpg',
        width: 100,
        height: 100,
        alt: 'Finn and Jake'
      },
      text: 'Time for adventure!',
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
        src: 'http://cdn-static.sidereel.com/tv_shows' +
          '/4657/giant_2x/14582706_AdventureTime_SC1.jpg',
        width: 100,
        height: 100,
        alt: 'Finn and Jake'
      },
      text: 'Explore the dungeon!',
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
        src: 'http://cdn-static.sidereel.com/tv_shows' +
          '/4657/giant_2x/14582706_AdventureTime_SC1.jpg',
        width: 100,
        height: 100,
        alt: 'Finn and Jake'
      },
      text: 'Save princesses',
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

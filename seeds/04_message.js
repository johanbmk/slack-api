exports.seed = knex => knex('message').del()
  .then(() => knex('message').insert([
    {
      id: 1,
      user_map_id: 1,
      channel_map_id: 1,
      raw_ts: Number.parseFloat(1501624043.643661),
      message_timestamp: new Date(1501624043.643661 * 1000),
      message: 'This is a message. This is what I would send over slack in this channel.',
    },
    {
      id: 2,
      user_map_id: 3,
      channel_map_id: 1,
      raw_ts: '1501625043.643661',
      message_timestamp: new Date(1501625043.643661 * 1000),
      message: 'This is a great new message. This is different than the last message.',
    },
    {
      id: 3,
      user_map_id: 1,
      channel_map_id: 1,
      raw_ts: '1501626043.643661',
      message_timestamp: new Date(1501626043.643661 * 1000),
      message: 'Happy things! Look at this message. It is sooooo cool.',
    },
    {
      id: 4,
      user_map_id: 2,
      channel_map_id: 2,
      raw_ts: '1501627043.643661',
      message_timestamp: new Date(1501627043.643661 * 1000),
      message: 'I am trying to make a decent amount of messages.',
    },
    {
      id: 5,
      user_map_id: 1,
      channel_map_id: 2,
      raw_ts: '1501628043.643661',
      message_timestamp: new Date(1501628043.643661 * 1000),
      message: 'This is the last message I will add.',
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'message_id_seq\', (SELECT MAX(id) FROM message))'));
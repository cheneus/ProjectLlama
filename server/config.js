const config = {
  development: {
    //url to be used in link generation
    url: '',
    //mongodb connection settings
    database: {
      host: '127.0.0.1',
      port: '27017',
      db: 'coffee'
    },
    //server details
    server: {
      host: '127.0.0.1',
      port: '3010'
    }
  },
  production: {
    //url to be used in link generation
    url: 'https://scrap-6647.herokuapp.com/',
    //mongodb connection settings
    database: {
      host: 'ds225078.mlab.com',
      port: '25078',
      db: 'heroku_jhbhrwf2'
    },
    //server details
    server: {
      host: '127.0.0.1',
      port: '3421'
    }
  },
  jwtSecret: "123123213131"
};
module.exports = config;
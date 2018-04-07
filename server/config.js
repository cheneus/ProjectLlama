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
    url: '',
    //mongodb connection settings
    database: {
      host: '',
      port: '',
      db: ''
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
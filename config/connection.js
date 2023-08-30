require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: '127.0.0.1',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    console.log('Configured database username:', process.env.DB_USER);
    console.log('Configured database password:', process.env.DB_PASSWORD);

module.exports = sequelize;


// const Sequelize = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: '127.0.0.1',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );

// console.log('Configured database username:', process.env.DB_USER);
// console.log('Configured database password:', process.env.DB_PASSWORD);

// module.exports = sequelize;


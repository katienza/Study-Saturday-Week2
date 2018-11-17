'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

// createdb 'study-saturdays' first step ALWAYS

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
});

Student.beforeCreate((name) => {
  const firstName = name.firstName;
  const lastName = name.lastName;
  name.firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1);
  name.lastName = lastName.slice(0, 1).toUpperCase() + lastName.slice(1);
});

module.exports = Student;

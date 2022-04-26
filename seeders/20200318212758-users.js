"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Dikkie Dik",
          email: "dik@dik.nl",
          password: bcrypt.hashSync("dik", SALT_ROUNDS),
          schoolname: "BSO Waterkraan",
          classname: "groep 6",
          isteacher: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "a",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          schoolname: "Beatrixschool",
          classname: "groep 7",
          isteacher: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};

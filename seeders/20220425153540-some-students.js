"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "students",
      [
        {
          studentname: "Marijse",
          schoolname: "BSO Waterkraan",
          classname: "groep 6",
          password: "1234",
          teacherId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentname: "Donkie Donk",
          schoolname: "BSO Waterkraan",
          classname: "groep 6",
          password: "1234",
          teacherId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentname: "Donkes",
          schoolname: "BSO Waterkraan",
          classname: "groep 6",
          password: "1234",
          teacherId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentname: "Amber",
          schoolname: "BSO Overvecht",
          classname: "groep 7",
          password: "1234",
          teacherId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("students", null, {});
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        id: 1,
        name: "Ficção",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Saúde",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "HQ e Mangás",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Culinária",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Romance",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Negócios",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "Autoajuda",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "Biografia",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: "Computação",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Categories", null, {});
  },
};

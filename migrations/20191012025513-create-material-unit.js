'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MaterialUnits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Producer: {
        type: Sequelize.INTEGER,
        references:{
          model:'producers',
          key:'id'
        }
      },
      Producer_Lot: {
        type: Sequelize.STRING
      },
      Producer_Weight: {
        type: Sequelize.INTEGER
      },
      Producer_Cast_No: {
        type: Sequelize.STRING
      },
      Chemical_Composition: {
        type: Sequelize.INTEGER
      },
      NKKK_Lot_No: {
        type: Sequelize.STRING
      },
      NKKK_Weight: {
        type: Sequelize.INTEGER
      },
      Material_Unit_Status: {
        type: Sequelize.INTEGER,
        references:{
          model:'MaterialUnitStatuses',
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MaterialUnits');
  }
};
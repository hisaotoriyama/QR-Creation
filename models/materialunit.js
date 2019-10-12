'use strict';
module.exports = (sequelize, DataTypes) => {
  const MaterialUnit = sequelize.define('MaterialUnit', {
    Producer: DataTypes.INTEGER,
    Producer_Lot: DataTypes.STRING,
    Producer_Weight: DataTypes.INTEGER,
    Producer_Cast_No: DataTypes.STRING,
    Chemical_Composition: DataTypes.INTEGER,
    NKKK_Lot_No: DataTypes.STRING,
    NKKK_Weight: DataTypes.INTEGER,
    Material_Unit_Status: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  MaterialUnit.associate = function(models) {
    // associations can be defined here
  };
  return MaterialUnit;
};
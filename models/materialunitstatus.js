'use strict';
module.exports = (sequelize, DataTypes) => {
  const MaterialUnitStatus = sequelize.define('MaterialUnitStatus', {
    status: DataTypes.STRING
  }, {
    underscored: true,
  });
  MaterialUnitStatus.associate = function(models) {
    // associations can be defined here
  };
  return MaterialUnitStatus;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const DrinkList = sequelize.define('DrinkList', {
    userId: {
      allowNull:false,
      references: {model: 'Users'},
      type:DataTypes.INTEGER,
    },
    cocktailId: {
      references: {model: 'Cocktails'},
      type: DataTypes.INTEGER,
    },
  }, {});
  DrinkList.associate = function(models) {
    DrinkList.belongsTo(models.User, {foreignKey: 'userId'})
    DrinkList.belongsTo(models.Cocktail, {foreignKey: 'cocktailId'})

  };
  return DrinkList;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const DrinkList = sequelize.define('DrinkList', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    userId: {
      allowNull:false,
      references: {model: 'Users'},
      type:DataTypes.INTEGER,
    },
    cocktailId: {
      references: {model: 'Cocktails'},
      type:DataTypes.ARRAY(DataTypes.INTEGER),
    },
    imgUrl: DataTypes.STRING
  }, {});
  DrinkList.associate = function(models) {
    DrinkList.belongsTo(models.User, {foreignKey: 'userId'})
    DrinkList.hasMany(models.Cocktail, {foreignKey: 'cocktailId'})
  };
  return DrinkList;
};
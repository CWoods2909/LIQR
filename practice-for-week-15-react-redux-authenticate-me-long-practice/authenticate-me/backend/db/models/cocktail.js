'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cocktail = sequelize.define('Cocktail', {
    name:{
      allowNull: false,
      type:DataTypes.STRING(50),
      unique:true
    } ,
    liquorType: {
      allowNull:false,
      type:DataTypes.STRING(50),
    },
    userId: {
      allowNull:false,
      type:DataTypes.INTEGER,
      references: {model: 'Users'}
    },
    ingredients:{
      allowNull:false,
      type:DataTypes.TEXT,
    }, 
    directions:{
      allowNull:false,
      type:DataTypes.TEXT,
    },
    imgUrl: DataTypes.STRING(500)
  }, {});
  Cocktail.associate = function(models) {
    Cocktail.belongsTo(models.User, {foreignKey: 'userId'}) 
    Cocktail.hasMany(models.DrinkList, {foreignKey: 'cocktailId'})

    Cocktail.belongsToMany(models.User, {foreignKey: 'cocktailId', otherKey: 'userId', through: 'DrinkList'})
  };
  return Cocktail;
};
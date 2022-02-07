'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Cocktails', [
      {
        name: `Old Fashioned`, liquorType: `Whiskey`, userId:1, ingredients: `1/2 teaspoon sugar, 3 dashes bitters, 2 ounces whiskey, garnish with orange peel.`, directions: `Add the sugar and bitters to a rocks glass, and stir until the sugar is nearly dissolved. Fill the glass with large ice cubes, add whiskey and gently stir to combine, garnish with orange peel or a cherry.`, imgUrl: 'https://64.media.tumblr.com/75aeb5b5e921cb99f6a6b0b44f8e6569/tumblr_opsxb43INB1s2atz9o1_500.jpg',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `Kentucky Mule`, liquorType: `Whiskey`, userId:1, ingredients: '2 ounces of whiskey, fill rest of glass with ginger beer, garnish with lime wedge.', directions: `Add ice to rocks glass, pour whiskey over ice, fill to top with ginger beer, gently stir to combine, garnish.`, imgUrl: 'https://images.absolutdrinks.com/drink-images/Raw/Absolut/eee6c89c-2245-49f8-8f45-697c635f99e0.jpg',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `Whiskey Sour`, liquorType: `Whiskey`, userId:1, ingredients:`2 ounces of whiskey, 3/4 ounce of lemon juice, 1/2 ounce simple syrup, 1 egg white, garnish with lemon zest twist.` , directions: `Add all ingredients to shaker filled with ice, shake well,dry shake again without ice, strain back into chilled glass, garnish.`, imgUrl: 'https://previews.123rf.com/images/mahaongreen/mahaongreen1903/mahaongreen190300022/118397767-whiskey-sour-contemporary-classic-cocktail-illustration-collection-alcoholic-cocktails-hand-drawn-ve.jpg',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `Gin and tonic`, liquorType: `Gin`, userId:1, ingredients: `2 ounces of gin, fill to the top of glass with tonic, one lime wedge.`, directions: `Add ice to rocks glass, pour gin over ice, fill to top with tonic, squeeze juice of one lime wedge into glass, stir gently to combine.`, imgUrl: 'https://c8.alamy.com/zooms/9/ec3fa9c689294504910cf13d568b92a8/p9afkr.jpg',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `Negroni`, liquorType: `Gin`, userId:1, ingredients: `1 ounce gin, 1 ounce campari, 1 ounce sweet vermouth, garnish with orange peel.`, directions: `Add ice to rocks glass, pour gin, campari, and sweet vermouth into glass, stir gently until well combined, garnish with orange peel.`, imgUrl: 'https://media.istockphoto.com/vectors/negroni-alcoholic-cocktail-hand-drawn-vector-illustration-in-sketch-vector-id1014219262?k=20&m=1014219262&s=612x612&w=0&h=5f_lVGSjx6lDVw9OTS2UuLqZOdG9iA3sXCPhqC7D274=',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `French 75`, liquorType: `Gin`, userId:1, ingredients: `2 ounces of gin, topped with champagne to top of glass, garnish with lime peel.`, directions: `Add gin to champagne flute, fill to the top with champagne, garnish with lime peel.`, imgUrl: 'https://t3.ftcdn.net/jpg/02/78/55/02/360_F_278550221_XNybcMkRm2ChFSxu9aZS7JJwOTpdoI8B.jpg',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `Vodka sour`, liquorType: `Vodka`, userId:1, ingredients: `2 ounces vodka, 1 ounce lemon juice, 1 ounce simple syrup, 2 dashes bitters, 1 egg white, garnish with cherry or lemon wedge.`, directions: `Add vodka, lemon juice, syrup, bitters, and egg white into shaker without ice.  Shake until well combined.  Add ice to shaker, shake again, strain into chilled glass, garnish.`, imgUrl: 'https://www.acommunaltable.com/wp-content/uploads/2019/10/Vodka-Sour-1-500x500.jpg',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `White russian`, liquorType: `Vodka`, userId:1, ingredients: `2 ounces kahlua, 1.5 ounces vodka, 2-3 ounces heavy cream.`, directions: `Add ice to low ball glass, pour kahlua and vodka into glass, top with heavy cream.`, imgUrl: 'https://www.seekpng.com/png/detail/23-235127_white-russian-white-russian-cocktail-png.png',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `Gimlet`, liquorType: `Vodka`, userId:1, ingredients: `1.5 ounces vodka, 1 ounce lime juice, 1 ounce simple syrup garnish with lime peel.`, directions: `Add ice to shaker, add vodka, lime and simple syrup, shake for 30 seconds, strain into rocks glass filled with ice.`, imgUrl: 'https://fullcircledistillers.com/wp-content/uploads/2019/11/mixology-2.jpg',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `Margarita`, liquorType: `Tequila`, userId:1, ingredients: `1.5 ounces tequila, 1 ounce cointreau, 3/4 ounce lime juice garnish with lime wedge.`, directions: `Rim glass with salt, add all ingredients into cocktail shaker with ice, shake until well combined, strain into glass with ice.`, imgUrl: 'https://i.pinimg.com/736x/0a/2d/21/0a2d21c6a005f8e651131929004d9650.jpg',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `Paloma`, liquorType: `Tequila`, userId:1, ingredients: `1.5 ounces tequila, 1 ounce grapefruit juice, 1 ounce lime juice, 1 ounce simple syrup.`, directions: `Rim glass with salt, stir all ingredients together in rocks glass, top with ice.`, imgUrl: 'https://ripemangoes.com/wp-content/uploads/Paloma_web.jpg',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `Ranch Water`, liquorType: `Tequila`, userId:1, ingredients: `2 ounces tequila, 1.5 ounces lime juice, top with topo chico mineral water.`, directions: `Add tequila to highball glass, mix in the juice of 1 lime, fill glass with ice and top with topo chico mineral water.`, imgUrl: 'https://www.patrontequila.com/binaries/largeretina/content/gallery/patrontequila/recipes/patron-silver/ranch-water/primary.jpg',createdAt: new Date(), updatedAt: new Date()},
    
        {name: `Mojito`, liquorType: `Rum`, userId:1, ingredients: `2 ounces rum, 5 mint leaves, 1 ounce lime juice, .5 ounce simple syrup, club soda or splarkling water, garnish with lime wedge`, directions: `Add mint to cocktail shaker and lightly muddle, add the rum, lime juice,simple syrup, and a handful of ice.  Shake for 30 seconds.  Strain into glass filled with ice, top with a splash of club soda or sparkling water.`, imgUrl: `https://st4.depositphotos.com/17650314/19835/i/1600/depositphotos_198359560-stock-photo-watercolor-drawing-cocktail-mojito.jpg`,createdAt: new Date(), updatedAt: new Date()},

        {name: `Dark and stormy`, liquorType:`Rum`, userId:1, ingredients:`2 ounces rum, top with ginger beer.`, directions: `Add ice to rocks glass, add rum, top with ginger beer and lightly stir to combine.`, imgUrl: `https://cdn.dribbble.com/users/255/screenshots/5678893/dark-n-stormy_4x.png`,createdAt: new Date(), updatedAt: new Date()},

        {name: `Cable car`, liquorType: `Rum`, userId:1, ingredients: `1.5 ounce rum, 1 ounce lemon juice, 3/4 ounce of curacao, .5 ounce simple syrup, garnish with orange peel.`, directions: `Add all ingredients to a shaker with ice, shake for 30 seconds.  Strain into glass rimmed with cinnamon and sugar.`,imgUrl: `https://www.liquor.com/thmb/fNaVIYxe5Z6BHpoXXNgKSMtNLdg=/720x720/smart/filters:no_upscale()/cable-car-720x720-primary-193ffd7dbf25498c9a898d8659324db6.jpg`,createdAt: new Date(), updatedAt: new Date()},
    
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Cocktails', null, {});
  }
};

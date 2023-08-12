const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      allowNull:false,
      primaryKey:true,
      defaultValue:UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    plataformas:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    release:{
      type: DataTypes.DATEONLY,
      allowNull:false,
    },
    rating:{
      type: DataTypes.DECIMAL,
      allowNull:false,
      
    }

  });
};
// ID (deben ser distintos a los que vienen de la API). *
// Nombre. *
// Descripción. *
// Plataformas. *
// Imagen. *
// Fecha de lanzamiento. *
// Rating. *
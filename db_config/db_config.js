import { Sequelize } from 'sequelize';

const host = 'localhost', user = 'root', password = '', dbName = 'lameutes';
export const db_config = {
  host,  // ou votre serveur de base de données
  user,  // remplacer par votre utilisateur
  password, // remplacer par votre mot de passe
  dbName
};


export const sequelize = new Sequelize(dbName, user, password, {
  host: 'localhost',
  dialect: 'mysql' // spécifiez le dialecte ici
});


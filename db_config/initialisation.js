import User from "../src/models/user.js";
import { sequelize } from "./db_config.js";

async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');
        // Synchronisation des modèles avec la base de données
        await sequelize.sync(); // ou sequelize.sync({ force: true }) pour réinitialiser la base'
        User
        console.log('Les modèles ont été synchronisés avec la base de données.');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
}
initializeDatabase();

import { DataTypes } from 'sequelize';
import { sequelize } from '../../db_config/db_config.js';



const User = sequelize.define(
    "User",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            uniqueL:  true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roles: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: ["ROLE_USER"]
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            
        },
    },
    {
        tableName: "User",
        timestamps: false,
    }
);

export default User;

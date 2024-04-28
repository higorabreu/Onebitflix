import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database: "streaming_development",
    username: "streaming",
    password: "streaming",
    define: {
        underscored: true
    }


})

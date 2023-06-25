import { Sequelize } from "sequelize";

import { environment } from "../../config/Environments";

const db = new Sequelize(environment().database.name, environment().database.user, environment().database.password, {
    host: environment().database.host,
    dialect: 'mysql',
});

export default db;

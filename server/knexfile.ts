import path from "path";

// configurações que o bd não tem
// knex não usa export default!!

module.exports = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'), 
  },
  useNullAsDefault: true
};

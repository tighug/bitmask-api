module.exports = {
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || "test",
  password: process.env.DB_PASSWORD || "test",
  database: process.env.DB_NAME || "test",
  synchronize: true, // FIXME: Danger
  logging: process.env.NODE_ENV === "development",
  entities: [
    process.env.NODE_ENV === "production"
      ? "dist/domain/model/**/*.js"
      : "src/domain/model/**/*.ts",
  ],
};

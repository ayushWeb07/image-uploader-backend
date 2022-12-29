const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
    const { host, port, database, user, password } = parse("postgres://postgres:Ayush@2007@localhost:5432/postgres");

    return {
        defaultConnection: "default",
        connection: {
            client: "postgres",
            connection: {
                host,
                port,
                database,
                user,
                password,
            },
        },
    };
};

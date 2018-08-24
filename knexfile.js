module.exports = {
    development: {
        client: "mysql",
        connection: "mysql://root@localhost/chat"
    },
    production: {
        client: "mysql",
        connection: process.env.DATABASE_URL
    }
};
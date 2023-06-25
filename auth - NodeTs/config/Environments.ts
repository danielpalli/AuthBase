export const environment = () => ({
    global: {
        port: process.env.PORT || '3010',
        jwtSecret: process.env.JWT_SECRET || 'secret',
    },
    database: {
        host: process.env.DB_HOST || 'localhost',
        name: process.env.DB_NAME || 'auth',
        user: process.env.DB_USER || 'root',
        password : process.env.DB_PASSWORD || 'lorena',
    }
})

import dotenv from 'dotenv'
dotenv.config()

export const {
    DATABASE_URL = '',
    PORT ='',
    MONGO_PUBLIC_URL = '', 
    MONGO_URL = ''
} = process.env
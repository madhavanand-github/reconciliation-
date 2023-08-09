import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-cj9g2nivvtos73e4gb1g-a.oregon-postgres.render.com",
    port: 5432,
    username: "madhav",
    password: "z3SnpmAboNMpcyVNNM6F8LBorWgp56SQ",
    database: "db_contacts",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
    ssl: {
        rejectUnauthorized: false, // For testing purposes, consider a more secure setup in production
    },
})

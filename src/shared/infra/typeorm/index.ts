import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
    host: string;
}

export default getConnectionOptions().then((options) => {
    const newOptions = options as IOptions;
    newOptions.host = "database";
    createConnection({
        ...options,
    });
});

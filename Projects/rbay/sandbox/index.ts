import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    await client.hSet("car2", {
        color: "red",
        name: "Toyota",
        engine: {
            cylinders: 8 // no errors, save [object Object]
        },
        owner: null || '', // null and undefined will type error if no '' (ex: null.toString() with node-redis library)
        service: undefined || ''
    });

    const car = await client.hGetAll("car2");
    console.log(car);
};

run();

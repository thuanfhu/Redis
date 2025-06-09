import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    await client.hSet("car2", {
        color: "red",
        name: "Toyota"
    });

    const car = await client.hGetAll("car2");

    if(Object.keys("car").length === 0){
        console.log("Car not found, response code with 404!")
        return;
    }

    console.log(car);
};

run();

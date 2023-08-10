import { useEffect } from "react";
import motorController from "../lib/controllers/motorController";

const Home = () => {

    useEffect(() => {
        getValue();
    })
    const getValue = async () => {
        console.log('testing');

        let response = await motorController.get();
        console.log(response);

    }
    return (
        <div>
            Home Page testing
        </div>
    )
}

export default Home;
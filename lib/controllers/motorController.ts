import motorService from "../services/motroService"


class MotorController {
    constructor() {

    }

    async get() {
        try {
            const data = await motorService.get()
            return data;
        }
        catch (error) {
            return error;
        }
    }

}

const motorController = new MotorController()
export default motorController
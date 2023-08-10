import supabase from "./supabase";





class MotorService {
    constructor() {

    }

    async get() {
        const { data, error } = await supabase
            .from('table')
            .eq('id', '1')
        if (error) {
            throw error;
        }
        return data;
    }

}

const motorService = new MotorService()
export default motorService
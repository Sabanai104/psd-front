import services from "./services";

export class GatewayServices {
    getAllWords = async () => {
        const response = await services.get(`/get_words`);
        return response.data
    }

    putWord = async (word) => {
        await services.post(`/add_word`, {
            word: word,
        });
    }
}
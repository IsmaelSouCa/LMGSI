import { winesApi } from "../api/winesApi";
import type { WineDetails } from "../interfaces/wines";

export const wineService = {
    getWines: async (): Promise<WineDetails[]> => {
        const response = await winesApi.get<WineDetails[]>("/");
        return response.data;
    }
};
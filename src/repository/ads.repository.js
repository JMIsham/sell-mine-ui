import backendConfig from "../configs/backend.config";


async function fetchAllAds() {
    try {
        const baseUrl = backendConfig.base_url;
        const response = await fetch(`${baseUrl}/ads`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching ads:', error);
        return [];
    }
}

export {
    fetchAllAds,
};
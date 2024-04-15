import backendConfig from "../configs/backend.config";


async function fetchAllAds() {
    try {
        const baseUrl = backendConfig.apiUrl;
        console.log('baseUrl', baseUrl)
        console.log('config api url', window.configs.apiUrl)
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
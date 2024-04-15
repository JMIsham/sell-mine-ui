// import dotenv from 'dotenv';
// dotenv.config(); 

const backendConfig = {
    base_url: process.env.REACT_APP_BACKEND_URL,
    apiUrl : window?.configs?.apiUrl ? window.configs.apiUrl : process.env.REACT_APP_BACKEND_URL,
};

export default backendConfig;
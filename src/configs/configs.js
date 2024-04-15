// window.configs = {
//     apiUrl: '/choreo-apis/vets/sellmineapi/sell-mine-api-197/v1.0',
// };

export const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl :  process.env.REACT_APP_BACKEND_URL;
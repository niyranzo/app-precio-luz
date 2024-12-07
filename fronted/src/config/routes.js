const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ROUTES = {
  
    DAILY_PRICES: (startDate, endDate) => `${BASE_URL}/days/start_date=${startDate}/end_date=${endDate}`,
    HOUR_PRICES: (startDate, endDate, range) => `${BASE_URL}/hours/start_date=${startDate}/end_date=${endDate}/rangeHours=${range}`,
    USERS: `${BASE_URL}/users`,
    LOGIN: `${BASE_URL}/users/login`,
    REGISTER: `${BASE_URL}/users/register`,
    
};

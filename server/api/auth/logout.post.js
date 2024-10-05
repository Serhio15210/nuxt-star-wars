import Cookies from "js-cookie";

export default defineEventHandler(async (event) => {
    Cookies.remove('auth.token')
    return { message: 'Logout successful' }; // Возвращаем сообщение
});

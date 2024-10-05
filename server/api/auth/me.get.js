export default defineEventHandler(async (event) => {
    // Пример фейковых данных пользователя
    return {
        id: 1,
        name: 'John Doe',
        email: 'admin@example.com'
    };
});

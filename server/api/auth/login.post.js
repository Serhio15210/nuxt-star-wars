export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const { email, password } = body;

    // Здесь можно добавить логику аутентификации, например:
    if (email === 'admin@example.com' && password === 'password') {
        // Если логин и пароль правильные, возвращаем успешный ответ и устанавливаем cookie
        return {
            accessToken: 'fake_access_token_123'
        };
    }

    // Если аутентификация не удалась, выбрасываем ошибку
    throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized'
    });
});

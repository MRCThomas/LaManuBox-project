
export function generateToken() {
    const tokenLength = 32; // Définissez la longueur de votre token
    const randomBytes = new Uint8Array(tokenLength);
    window.crypto.getRandomValues(randomBytes);

    const token = Array.from(randomBytes)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');

    return token;
}

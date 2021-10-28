/**
 * Generate a random string of alphanumerical characters.
 * @author DamienVesper
 * @param length The length of the string.
 * @returns The string of randomized characters.
 */
const randomString = (length: number): string => {
    const alpha = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;

    let text = ``;
    for (let i = 0; i < length; i++) text += alpha.charAt(Math.floor(Math.random() * alpha.length));

    return text;
};

export default randomString;

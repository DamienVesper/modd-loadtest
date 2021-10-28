/**
 * Generate a random integer.
 * @author DamienVesper
 * @param min The minimum value of the number.
 * @param max The maximum value of the number.
 * @returns A random integer within the constraints.
 */
const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

export default randomInt;

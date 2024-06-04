
/**
 * Parses a given number into a formatted dollar amount with two decimal places.
 *
 * @param {number} amount - The number to be parsed.
 * @return {number} The parsed dollar amount.
 */
export default function getParsedDollarAmount(amount: number) {
    return parseFloat((amount).toFixed(2));
}
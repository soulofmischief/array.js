// @flow strict


/**
 * Remove en element from an array via its index.
 *
 * @param {Array} array The array to modify.
 * @param {number} index The index of the element to be removed.
 * @returns {Array} Returns `array`.
 */
export function pullFromIndex( array: *[], index?: number = 0 ) {
  return [ ...array.slice( 0, index ), ...array.slice( index + 1 )]
}

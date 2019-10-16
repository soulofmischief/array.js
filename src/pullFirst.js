// @flow strict
import { pullFromIndex } from './pullFromIndex'


/**
 * Removes the first instance of each provided value from the given array
 * using strict equality. Immutable.
 *
 * @param {Array} array The array to modify.
 * @param {...*} args The values to remove.
 * @returns {Array} A new array.
 */
export function pullFirst( array: *[], ...args: *[]) {
  let
    argsIndex  = -1,
    length     = array ? array.length : 0

  while ( argsIndex++ < args.length ) {
    let index = -1
    const value = args[ argsIndex ]

    while ( ++index < length ) {
      if ( array[ index ] === value ) {
        array = pullFromIndex( array, index )
        length--
        break
      }
    }
  }
  return array
}

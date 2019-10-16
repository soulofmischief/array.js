// @flow strict
import { clone } from '@soulofmischief/js-utils/lib/clone'
import { pullFromIndex } from './pullFromIndex'


/**
 * Removes all provided values from the given array using strict equality.
 * Immutable.
 *
 * @param {Array} array The array to modify.
 * @param {...*} args The values to remove.
 * @returns {Array} A new array.
 */
export function pull( array: *[], ...args: *[]) {
  let
    a = clone( array ),

    // We will loop through each provided argument and pull the corresponding
    // elements. Since we use the prefix operator for brevity, we need
    // to start the index decremented by one.
    argsIndex  = -1,

    // We will loop through each element of the array.
    // The length will be cached for quick lookup.
    length = a?.length || 0

  while ( ++argsIndex < args.length ) {
    // Cache an index into the array.
    let index = -1

    // Get the value from the current argument slot.
    const value = args[ argsIndex ]

    // Remove all instances of the value from the array.
    while ( ++index < length ) {
      // Does the element match the argument value?
      if ( a[ index ] === value ) {
        // Remove the element via its index.
        a = pullFromIndex( a, index )
        // Update the cached length of the array
        length--
      }
    }
  }
  return a
}

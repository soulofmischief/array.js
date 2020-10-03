import { isEqual } from 'lodash'
import { shuffle } from './shuffle'


/**
 * Shuffles and returns a new array in a different order than the original.
 *
 * WARNING: This function can cause infinite recursion if each entry
 * of the array passes an equality test. Be careful when using this.
 * Does the output NEED to be of different order than the input?
 */
export function shuffleUnique( arr ) {
  // Try to prevent infinite recursion by requiring an array of length > 1.
  if ( arr.length < 2 )
    throw 'shuffleUnique() only accepts an array with at least two entries.'

  const a = shuffle( arr )

  // Tail call optimization.
  return !isEqual( a, arr ) ? a : shuffleUnique( arr )
}

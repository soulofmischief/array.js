// @flow strict


/**
 * Enumerate a zero-indexed array of size n.
 * @param {number} n Size of array.
 * @return {array} Enumerated array.
 */
export function enumerate( n: number = 0 ) {
  const a = []

  for ( let i = 0; i < n; i++ ) {
    a.push( i )
  }

  return a
}

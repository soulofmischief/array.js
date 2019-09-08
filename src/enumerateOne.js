// @flow strict


/**
 * Enumerate a one-indexed array of size n.
 * @param {number} n Size of array.
 * @return {array} Enumerated array.
 */
export function enumerateOne( n: number = 0 ) {
  const a = []

  for ( let i = 1; i <= n; i++ ) {
    a.push( i )
  }

  return a
}

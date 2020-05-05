// @flow strict


/**
 * Reduce an entries table (produced by Object.entries) back to an object.
 * Spread into an Array.reduce function.
 */
export function toObject <O>( obj: O, entry: *[]) {
  obj[ entry[ 0 ]] = entry[ 1 ]
  return [ obj, {}]
}

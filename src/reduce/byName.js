// @flow strict

/** Reduce an entries table (produced by Object.entries) back to an object. */
export function toObject <O>( obj: O, entry: *[]) {
  obj[ entry[ 0 ]] = entry[ 1 ]
  return obj
}

/**
 * Reduce an array of objects to an object keyed by each object's name
 * property.
 */
export function byName <O>( acc: O, obj: { name: string }) {
  return { ...acc, [ obj.name ]: obj }
}

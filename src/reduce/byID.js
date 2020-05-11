// @flow strict


/**
 * Reduce an array of objects to an object keyed by each object's name
 * property.
 * Spread into an Array.reduce function.
 */
function f <O>( acc: O, obj: { name: string }) {
  return { ...acc, [ obj.id ]: obj }
}

export const byID = () => [ f, {}]

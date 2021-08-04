// @flow strict


/**
 * Reduce an array of objects to an object keyed by each object's name
 * property.
 * Spread into an Array.reduce function.
 */
const f = prop => <O>( acc: O, obj: { name: string }) => {
  return { ...acc, [ obj[ prop ]]: obj }
}

export const byProp = ( prop ) => [ f( prop ), {}]

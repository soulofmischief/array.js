// @flow strict


/**
 * Reduce an entries table (produced by Object.entries) back to an object.
 * Properties with multiple values
 * Spread into an Array.reduce function.
 */
function f <O>( obj: O, entry: *[]) {
  const
    key = entry[0],
    val = obj[ key ]

  // Assign an undefined parameter.
  // If it's already defined, create an array
  // of values or push to an existing one.
  if ( val === undefined )
    obj[ key ] = entry[1]
  else if ( Array.isArray( val ))
    val.push( entry[1])
  else
    obj[ key ] = [ val, entry[1]]

  return obj
}

export const toObjectMultiple = () => [ f, {}]

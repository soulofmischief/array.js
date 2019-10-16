// @flow strict


export function toObject <O>( obj: O, entry: *[]) {
  obj[ entry[ 0 ]] = entry[ 1 ]
  return obj
}

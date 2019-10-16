// @flow strict
import type { ArraySort } from 'Flow'
import { sort } from './sort'


export { sort }

export const sortNumberAscending: ArraySort<*> = (
  arr: *[], prop?: *
) =>
  sort(( a, b ) => prop ? a[prop] - b[prop] : a - b, arr )

export const sortNumberDescending: ArraySort<*> = (
  arr: *[], prop?: *
) =>
  sort(( a, b ) => prop ? b[prop] - a[prop] : b - a, arr )

import { MealType } from '@hooks/useStorage'

export function orderByDate(a: MealType, b: MealType) {
  return new Date(a.date).getTime() - new Date(b.date).getTime()
}

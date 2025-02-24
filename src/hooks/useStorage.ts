import AsyncStorage from '@react-native-async-storage/async-storage'

export type MealType = {
  id: number
  name: string
  describe: string
  date: Date
  onDiet: 'RIGTH' | 'WRONG'
}

type HookType = {
  getData: () => Promise<MealType[]>
  setData: (data: MealType) => Promise<void>
  deleteMeal: (mealId: number) => Promise<void>
  getDataById: (mealId: number) => Promise<MealType | undefined>
}

const MEAL_COLLECTION = '@dailydiet:meals'

type OrderType = {
  date: Date | string
}

export function orderByDate(a: OrderType, b: OrderType, tipe = 'asc') {
  if (tipe === 'desc') {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  }

  return new Date(a.date).getTime() - new Date(b.date).getTime()
}

export function useStorage(): HookType {
  async function getData(): Promise<MealType[]> {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
    return storage ? JSON.parse(storage).sort(orderByDate) : []
  }

  async function setData(data: MealType) {
    let storagedData = await getData()

    const mealAlready = storagedData.find((row) => row.id === data.id)
    if (mealAlready) {
      storagedData = storagedData.filter((row) => row.id !== data.id)
    }

    const storage = JSON.stringify([data, ...storagedData])
    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  }

  async function getDataById(mealId: number) {
    if (!mealId) {
      return undefined
    }

    const storage = await getData()
    return storage.find((row) => row.id === mealId)
  }

  async function deleteMeal(mealId: number) {
    const storagedData = await getData()
    const filterData = storagedData.filter((row) => row.id !== mealId)
    const storage = JSON.stringify(filterData)
    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  }

  return { getData, setData, deleteMeal, getDataById }
}

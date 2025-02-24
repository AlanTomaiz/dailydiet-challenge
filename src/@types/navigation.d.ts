export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      formmeal?: { mealId: number }
      formfinalyze: { type: string }
      details: { mealId: number }
    }
  }
}

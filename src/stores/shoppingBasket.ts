import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useShoppingBasket = defineStore('shoppingBasket', () => {
  const basketContents = ref<{ [sandwichId: string]: number }>({})

  function addToBasket(sandwichId: string, amount: number) {
    basketContents.value[sandwichId] = (basketContents.value[sandwichId] || 0) + amount
  }

  const totalNumberInBasket = computed((): number => {
    console.log(Object.entries(basketContents.value))
    return Object.entries(basketContents.value).reduce((prev, [key, value]) => prev + value, 0)
  })

  return {
    addToBasket,
    totalNumberInBasket,
  }
})

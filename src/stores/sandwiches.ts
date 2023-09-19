import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSandwichesStore = defineStore('sandwiches', () => {
  const sandwiches = ref([
    {
      id: 1,
      name: 'Kip Curry',
      description: 'Heerlijke kip in currysaus tussen je broodje',
      price: 3.7,
      img: 'https://lh3.googleusercontent.com/8ZMFpR6e-aFrI_ASt7syX8VMDs3hOV5ojw3tt2qPfvDeauJ7VJS7NtDjhXJzwmR7KEGYapGDBu0n3Iy0ZqX0SEFxMyXDXV2XxZ6E=l80-r180-e365',
    },
    {
      id: 2,
      name: 'Krabsalade',
      description: 'Heerlijke krabsalade tussen je broodje',
      price: 4.8,
      img: 'https://lh3.googleusercontent.com/KjmcynIqDN13PJFfFDUP7PsBZcmg_e3z_CFIhRCWt5sbsMklGaR7x521heT-Npz2hrQS0Giwz7afjaM2LudMckdiEh5NfIEm5Z2d=l80-r180-e365',
    },
    {
      id: 3,
      name: 'Americano',
      description: 'Lekkere americain préparé tussen je broodje',
      price: 3.7,
      img: 'https://lh3.googleusercontent.com/bCoETplv303XSFdOQG2xVmGXyBkR6f4vWBd2l5ruRDXDC7OH0I7J-sZGy1sK2Bg2SLJR4OG4q976jOyhzhbHv-wlubi6UlCtIDyz=l80-r180-e365',
    },
    {
      id: 4,
      name: 'Aardappelsalade',
      description: 'Patatjes!',
      price: 3.7,
      img: 'https://lh3.googleusercontent.com/M7GHw8aFTF4IxM6gzclc_N-RMD-v6oPaRxYXSo3xZbWHPxr1OK7kdUNQgZsWYKpjiVAnEPUzvArDldlIJ0oAYdW0rJJD7fjVNlh1Wg=l80-r180-e365',
    },
    {
      id: 5,
      name: 'Martino',
      description: 'Americain préparé met speciale martino saus',
      price: 4.4,
      img: 'https://lh3.googleusercontent.com/J49o_IC0bmnEjkjR0d3Y_v2G14Di5N2Yr17bXvbVoXyjUS3gE0_Z1en8T58dv0qDYTweWuKdVs-taU6HRZoIqf3WmqgPXxb06jI=l80-r180-e365',
    },
    {
      id: 6,
      name: 'Boulette',
      description: 'Boulette in plakjes. Vergeet je saus niet te kiezen!',
      price: 4,
      img: 'https://lh3.googleusercontent.com/PWJTLCPjM54Y2FZekNZ_zSIBSLH00sLceUfDmie00RJVJUNSG4rWk0QgPPkTvCn0jcawZ5yn8hXamNq4TrwdmLA=l80-e365',
    },
  ])

  return { sandwiches }
})

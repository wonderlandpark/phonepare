import { atom, selector } from 'recoil'
import { getPhone } from './phones'

export const selectedPhonesState = atom<[string, string, string]>({
  key: 'selectedPhones',
  default: ['iphone12pro', 'galaxys21+', 'velvet']
})

export const selectedPhonesDataState = selector({
  key: 'selectedPhonesData',
  get: ({ get }) => {
    const phones = get(selectedPhonesState)
    return phones.map(phone => getPhone(phone))
  }
})
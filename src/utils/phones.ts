import PhoneDatas from '@/lib/phones'
import Colors from '@/lib/colors'
import type { Color, Manufacturer, PhoneData } from './types'

export type Nullable<T> = T | null
export const Manufacturers = ['apple', 'samsung', 'lg'] as const
export const ManufacturersName: Record<Manufacturer, string> = {
  apple: '애플',
  samsung: '삼성전자',
  lg: 'LG전자',
}

export class Phone {
  public data: PhoneData

  constructor(data: PhoneData) {
    this.data = data
  }

  get image (): string {
    return `/phones/${this.data.id}.jpg`
  }

  get colors (): Color[] {
    return this.data.colors.map(color => findColor(color)).filter(el => el) as Color[]
  }
}

export const Phones = PhoneDatas.map(el => new Phone(el))

export function getPhone (id: string): Nullable<Phone> {
  return Phones.find(phone => phone.data.id === id) || null
}

export function findColor(id: string): Nullable<Color> {
  return Colors.find(color => color.id === id) || null
}

export function getRecommended(tags: Record<string, boolean>): [Phone, Phone, Phone] {
  return Phones.sort((a, b) => getTagMatchScore(b.data.tags || [], tags) - getTagMatchScore(a.data.tags || [], tags)).slice(0, 3) as [Phone, Phone, Phone]
}

function getTagMatchScore(tags: string[], requiredTag: Record<string, boolean>): number {
  return Object.keys(requiredTag).reduce((score, tag) => {
    if (tags.includes(tag) === requiredTag[tag]) return score++
    else score--
    
    return score
  }, 0)
}

import PhoneDatas from '@/lib/phones'
import Colors from '@/lib/colors'
import type { Color, Manufacturer, PhoneData } from './types'

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

export function getPhone (id: string): Phone | null {
  return Phones.find(phone => phone.data.id === id) || null
}

export function findColor(id: string): Color | null {
  return Colors.find(color => color.id === id) || null
}

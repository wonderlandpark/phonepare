import type { Manufacturers } from './Phones'
export type Manufacturer = typeof Manufacturers[number]

export interface PhoneData {
  id: string
  manufacturer: Manufacturer
  name: string
  releaseDate: string
  display: {
    size: string
    resolution: string
    type: string
    ppi: number
  }
  cpu: string
  ram: string
  size: string
  weight: number
  battery: number
  charge: string
  os: string
  colors: string[]
  memory: (number|string)[]
  waterproof: string
  camera: {
    front: string[]
    back: string[]
  }
}

export interface Color {
  id: string
  name: string
  color: {
    background: string
    color?: string
  }
}
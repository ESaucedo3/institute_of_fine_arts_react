import { action, makeAutoObservable } from "mobx"
import { isValidProp } from "./utils/isValidProp.ts"
import { Account } from './models/Account.js'
import { Identity } from '@bcwdev/auth0provider-client'
import { Artwork } from "./models/Artwork.ts"


class ObservableAppState {

  identity: Identity | null = null
  account: Account | null = null
  artworks: Artwork[] = []
  page: number = 0
  pages: number = 0


  constructor() {
    makeAutoObservable(this)
  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop: string) {
    isValidProp(target, prop)
    // @ts-ignore
    return target[prop]
  },
  set(target, prop: string, value) {
    isValidProp(target, prop)
    action(() => {
      // @ts-ignore
      target[prop] = value
    })()
    return true
  }
})
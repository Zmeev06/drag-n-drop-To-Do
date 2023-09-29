export interface Client {
  data?: unknown | undefined
  method?: string | undefined
  url: string | undefined
  params?: string | undefined
  headers?:
    | {
        [key: string]: string
      }
    | undefined
}

export interface IProject {
  title: string
  id: number
}

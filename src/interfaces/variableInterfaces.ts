export interface IProject {
  title: string
  id: number
}

export interface ITask {
  title: string
  id: number
  projectId: number
  status: string
}

export interface IBoard {
  id: string
  title: string
}
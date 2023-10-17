import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { TasksTopBlock } from '../components/TasksPageComp/TopBlock'
import { Content } from '../components/UI/Content'
import { BoardsBlock } from '../components/TasksPageComp/BoardsBlock'
import { useAppSelector } from '../hooks/redux'

export const TasksPage = () => {
  const tasks = useAppSelector((state) => state.tasks.value)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <Content maxW="lg" pt={10}>
      <Helmet>
        <title>Задачи</title>
      </Helmet>
      <TasksTopBlock />
      <BoardsBlock />
    </Content>
  )
}

import React, { useState } from 'react'
import styles from './style.module.scss'
import { Heading } from '../../UI/Heading'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { IBoard } from '../../../interfaces/variableInterfaces'
import { Task } from '../Task'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { dragTaskOnBoard } from '../../../store/slices/tasksSlice'
interface BoardProps {
  board: IBoard
}

export const Board = ({ board }: BoardProps) => {
  const tasks = useAppSelector((state) => state.tasks.value)
  const [taski, setTaski] = useState(tasks)
  const dispatch = useAppDispatch()
  const handleDragEnd = (result: any) => {
    if (!result.destination) return // Ничего не делать, если нет места назначения

    const { source, destination } = result

    if (source.index === destination.index) return // Ничего не делать, если элемент не перемещался

    const newTasks = [...tasks]
    const [removedTask] = newTasks.splice(source.index, 1) // Удаляем перемещенную задачу
    newTasks.splice(destination.index, 0, removedTask) // Вставляем ее на новое место

    setTaski(newTasks)
  }

  // const onDragEnd = (result: any) => {
  //   dispatch(dragTaskOnBoard)
  // }
  return (
    <div className={styles.root}>
      <Heading fontSize={18} fontWeight={500} color="#878585">
        {board.title}
      </Heading>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={board.id}>
          {(provided) => (
            <div
              className={styles.content}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {taski
                .filter((item) => board.id === item.status)
                .map((item, index) => (
                  <Task
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    index={index}
                  />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

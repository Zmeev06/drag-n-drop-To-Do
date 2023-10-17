import React from 'react'
import styles from './style.module.scss'
import { Board } from '../Board'
import { IBoard } from '../../../interfaces/variableInterfaces'
import { DragDropContext } from 'react-beautiful-dnd'
import { useAppDispatch } from '../../../hooks/redux'
import { dragTaskOnBoard } from '../../../store/slices/tasksSlice'

const Boards: IBoard[] = [{ id: 'Queue', title: 'Очередь (Queue)' }]

export const BoardsBlock = ({}) => {
  const dispatch = useAppDispatch()

  const handleDragEnd = (result: any) => {
    dispatch(dragTaskOnBoard(result))
  }
  return (
    // <DragDropContext onDragEnd={handleDragEnd}>
      <div className={styles.root}>
        {Boards.map((item) => (
          <Board key={item.id} board={item} />
        ))}
      </div>
    // </DragDropContext>
  )
}

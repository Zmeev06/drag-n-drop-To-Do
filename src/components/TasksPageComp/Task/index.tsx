import React, { useState } from 'react'
import styles from './style.module.scss'
import { Heading } from '../../UI/Heading'
import { ReactComponent as Dots } from '../../../assets/img/icons/dots.svg'
import { Popover } from '../../UI/Popover'
import deleteIcon from '../../../assets/img/icons/delete.svg'
import editIcon from '../../../assets/img/icons/edit.svg'
import { useAppDispatch } from '../../../hooks/redux'
import { deleteTask } from '../../../store/slices/tasksSlice'
import { Modal } from '../../UI/Modal'
import { Draggable } from 'react-beautiful-dnd'

interface TaskProps {
  title: string
  id: number
  index: number
}

export const Task = ({ title, id, index }: TaskProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const dispatch = useAppDispatch()
  return (
    <>
      <Draggable draggableId={String(id)} index={index}>
        {(provided) => (
          <div
            className={styles.root}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className={styles.content} onClick={() => console.log(index)}>
              <Heading>{title}</Heading>
              <div className={styles.dotsBlock}>
                <Dots
                  className={styles.dots}
                  onClick={() => setIsOpen(!isOpen)}
                />
                {isOpen && (
                  <Popover position="right-top">
                    <div className={styles.btns}>
                      <div
                        className={styles.iconBtn}
                        onClick={() => {
                          setIsOpenModal(true)
                          setIsOpen(false)
                        }}
                      >
                        <img src={editIcon} alt="edit" />
                      </div>
                      <div
                        className={styles.iconBtn}
                        onClick={() => {
                          dispatch(deleteTask(id))
                          setIsOpen(false)
                        }}
                      >
                        <img src={deleteIcon} alt="delete" />
                      </div>
                    </div>
                  </Popover>
                )}
              </div>
            </div>
          </div>
        )}
      </Draggable>
      {isOpenModal && (
        <Modal
          id={id}
          type="edit"
          forWhat="task"
          setIsOpen={setIsOpenModal}
          title={title}
        />
      )}
    </>
  )
}

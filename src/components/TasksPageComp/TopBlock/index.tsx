import React, { useState } from 'react'
import { Heading } from '../../UI/Heading'
import { useLocation } from 'react-router-dom'
import styles from './style.module.scss'
import { Modal } from '../../UI/Modal'

export const TasksTopBlock = ({}) => {
  const location = useLocation()
  const state = location.state
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.root}>
      <Heading fontSize={25} fontWeight={600}>
        Задачи для проекта: {state.title}
      </Heading>
      <div className={styles.createBtn} onClick={() => setIsOpen(true)}>
        +
      </div>
      {isOpen && (
        <Modal
          type="create"
          forWhat="task"
          projectId={state.id}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  )
}

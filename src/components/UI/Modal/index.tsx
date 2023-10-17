import { useState } from 'react'
import { Button } from '../Button'
import { Heading } from '../Heading'
import styles from './style.module.scss'
import { useAppDispatch } from '../../../hooks/redux'
import { addProject, editProject } from '../../../store/slices/projectsSlice'
import { addTask, editTask } from '../../../store/slices/tasksSlice'

interface ModalProps {
  type: 'edit' | 'create'
  forWhat: 'project' | 'task'
  setIsOpen: (isOpen: boolean) => void
  id?: number
  title?: string
  projectId?: number
}

export const Modal = ({
  type,
  forWhat,
  setIsOpen,
  id = 0,
  title,
  projectId = 0,
}: ModalProps) => {
  const [value, setValue] = useState(title || '')
  const [isEmpty, setIsEmpty] = useState(false)
  const dispath = useAppDispatch()
  const handleClick = () => {
    if (!value) {
      setIsEmpty(true)
    } else {
      if (type === 'create' && forWhat === 'project') {
        dispath(addProject({ id: Date.now(), title: value }))
      } else if (type === 'edit' && forWhat === 'project') {
        dispath(editProject({ id, title: value }))
      } else if (type === 'edit' && forWhat === 'project') {
        dispath(editProject({ id, title: value }))
      } else if (type === 'create' && forWhat === 'task') {
        dispath(
          addTask({
            id: Date.now(),
            title: value,
            projectId: projectId,
            status: 'Queue',
          }),
        )
      } else if (type === 'edit' && forWhat === 'task') {
        dispath(
          editTask({
            id: id,
            title: value,
            projectId: projectId,
            status: 'Queue',
          }),
        )
      }
      setValue('')
      setIsOpen(false)
    }
  }

  return (
    <div className={styles.root} onClick={() => setIsOpen(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <Heading fontSize={25}>{`${
          type === 'create' ? 'Создать' : 'Изменить'
        } ${forWhat === 'project' ? 'проект' : 'задачу'}`}</Heading>
        <div className={styles.inputBlock}>
          <input
            type="text"
            placeholder="Название"
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            tabIndex={0}
          />
          {isEmpty && (
            <p className={styles.emptyText}>Поле не должно быть пустым</p>
          )}
        </div>
        <div className={styles.btns}>
          <Button
            text="Отмена"
            width={100}
            height={40}
            borderRadius={20}
            onClick={() => setIsOpen(false)}
            bg="#3c90b8"
            className={styles.btn}
          />
          <Button
            text="Сохранить"
            width={100}
            height={40}
            borderRadius={20}
            bg="#3c90b8"
            className={styles.btn}
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </div>
  )
}

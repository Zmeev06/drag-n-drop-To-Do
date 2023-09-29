import { useState } from 'react'
import { Button } from '../Button'
import { Heading } from '../Heading'
import styles from './style.module.scss'
import { useAppDispatch } from '../../../hooks/redux'
import { addProject, editProject } from '../../../store/slices/projectsSlice'

interface ModalProps {
  type: 'edit' | 'create'
  forWhat: 'project' | 'task'
  setIsOpen: (isOpen: boolean) => void
  id?: number
  title?: string
}

export const Modal = ({
  type,
  forWhat,
  setIsOpen,
  id = 0,
  title,
}: ModalProps) => {
  const [value, setValue] = useState(title || '')
  const [isEmpty, setIsEmpty] = useState(false)
  const dispath = useAppDispatch()
  const handleClick = () => {
    if (!value) {
      setIsEmpty(true)
    } else {
      if (type === 'create' && forWhat === 'project') {
        const project = {
          id: Date.now(),
          title: value,
        }
        dispath(addProject(project))
      } else if (type === 'edit' && forWhat === 'project') {
        dispath(editProject({ id, title: value }))
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

import { Heading } from '../../UI/Heading'
import { Modal } from '../../UI/Modal'
import styles from './style.module.scss'
import { useState } from 'react'

export const ProjectsTopBlock = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.root}>
      <Heading fontSize={25} fontWeight={600}>
        Ваши доски
      </Heading>
      <div className={styles.createBtn} onClick={() => setIsOpen(true)}>
        +
      </div>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} type="create" forWhat="project" />
      )}
    </div>
  )
}

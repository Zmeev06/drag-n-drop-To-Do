import deleteIcon from '../../../assets/img/icons/delete.svg'
import editIcon from '../../../assets/img/icons/edit.svg'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.scss'
import { useState } from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { Heading } from '../../UI/Heading'
import { deleteProject } from '../../../store/slices/projectsSlice'
import { IProject } from '../../../interfaces/serviceInterfaces'
import { Modal } from '../../UI/Modal'

interface ProjectBtnProps {
  project: IProject
}

export const ProjectBtn = ({ project }: ProjectBtnProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        className={styles.root}
        onClick={() => {
          navigate(`/project/${project.id}`)
        }}
      >
        <div className={styles.content}>
          <Heading fontSize={20}>{project.title}</Heading>
          <div className={styles.btns}>
            <div
              className={styles.iconBtn}
              onClick={(e) => {
                setIsOpen(true)
                e.stopPropagation()
              }}
            >
              <img src={editIcon} alt="edit" />
            </div>
            <div
              className={styles.iconBtn}
              onClick={(e) => {
                dispatch(deleteProject(project.id))
                e.stopPropagation()
              }}
            >
              <img src={deleteIcon} alt="edit" />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal
          type="edit"
          forWhat="project"
          id={project.id}
          setIsOpen={setIsOpen}
          title={project.title}
        />
      )}
    </>
  )
}

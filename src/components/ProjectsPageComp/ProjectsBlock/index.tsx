import { IProject } from '../../../interfaces/variableInterfaces'
import { Heading } from '../../UI/Heading'
import { ProjectBtn } from '../ProjectBtn'
import styles from './style.module.scss'
import { ReactComponent as Arrow } from '../../../assets/img/icons/handDrawArrow.svg'

interface ProjectsBlockProps {
  projects: IProject[]
}

export const ProjectsBlock = ({ projects }: ProjectsBlockProps) => {
  return (
    <div className={styles.root}>
      {projects.length > 0 && (
        <Heading fontSize={20} color="#878585">
          Все доски
        </Heading>
      )}
      <div className={styles.content}>
        {projects.length > 0 ? (
          projects.map((item) => <ProjectBtn key={item.id} project={item} />)
        ) : (
          <div className={styles.emptyBlock}>
            <Heading fontSize={25} mb={40} mt={70}>
              У вас еще нет проектов, создайте новый
            </Heading>
            <Arrow className={styles.arrow} />
            <iframe
              src="https://giphy.com/embed/jU9OCvBiO1besabUKU"
              width="770"
              height="470"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  )
}

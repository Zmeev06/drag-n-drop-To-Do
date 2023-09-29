import git from '../../assets/img/git.svg'
import tg from '../../assets/img/tg.svg'
import { Content } from '../UI/Content'
import { Heading } from '../UI/Heading'
import styles from './style.module.scss'

export const Header = () => {
  return (
    <div className={styles.root}>
      <Content className={styles.content} maxW="lg">
        <a href="https://t.me/zmeev_js" className={styles.link}>
          <img src={tg} alt="" className={styles.social} />
        </a>
        <Heading fontSize={22} color="#fff">
          Trello To-Do
        </Heading>
        <a
          href="https://github.com/Zmeev06/Trello-to-do"
          className={styles.link}
        >
          <img src={git} alt="" className={styles.social} />
        </a>
      </Content>
    </div>
  )
}

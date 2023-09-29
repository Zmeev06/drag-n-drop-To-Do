import { ReactComponent as Arrow } from '../../../assets/img/icons/arrow.svg'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { IProject } from '../../../interfaces/serviceInterfaces'
import {
  next,
  prev,
  selectPaginate,
  setPage,
} from '../../../store/slices/paginateSlice'

interface PaginateProps {
  projects: IProject[]
}

export const Paginate = ({ projects }: PaginateProps) => {
  const [totalPages, setTotalPages] = useState(0)
  useEffect(() => {
    setTotalPages(Math.ceil(projects.length / 8))
  }, [projects])

  const currentPage = useAppSelector(selectPaginate)
  const dispatch = useAppDispatch()
  return (
    <div className={styles.root}>
      <Arrow
        className={`${styles.arrowLeft} ${styles.arrow}`}
        onClick={() => {
          currentPage !== 1 && dispatch(prev())
        }}
      />
      {[...new Array(totalPages)].map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${
            currentPage === index + 1 && styles.active
          }`}
          onClick={() => dispatch(setPage(index + 1))}
        >
          {index + 1}
        </div>
      ))}
      <Arrow
        className={`${styles.arrowRight} ${styles.arrow}`}
        onClick={() => {
          currentPage !== totalPages && dispatch(next())
        }}
      />
    </div>
  )
}

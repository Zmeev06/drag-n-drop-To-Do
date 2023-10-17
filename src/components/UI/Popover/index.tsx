import React from 'react'
import styles from './style.module.scss'

interface PopoverProps {
  position?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'left-top'
    | 'right-top'
    | 'left-bottom'
    | 'right-bottom'
  children: string | boolean | JSX.Element | JSX.Element[]
}

export const Popover = ({ position, children }: PopoverProps) => {
  return (
    <div
      className={styles.root}
      style={{
        position: 'absolute',
        top:
          position === 'top' ||
          position === 'left-top' ||
          position === 'right-top'
            ? '-250%'
            : '50%',
        bottom:
          position === 'bottom' ||
          position === 'left-bottom' ||
          position === 'right-bottom'
            ? '-115%'
            : 'none',
        right:
          position === 'right' ||
          position === 'right-bottom' ||
          position === 'right-top'
            ? '-115%'
            : 'none',
        left:
          position === 'left' ||
          position === 'left-bottom' ||
          position === 'left-top'
            ? '-115%'
            : 'none',
      }}
    >
      {children}
    </div>
  )
}

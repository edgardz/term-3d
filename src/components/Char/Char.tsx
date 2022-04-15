import { FC } from 'react'
import classNames from 'classnames'

import css from './Char.module.scss'

export interface CharProps {
  className?: string
  active: boolean
  char: string
  onClick: () => void
}

const Char: FC<CharProps> = ({ className, active, char, onClick }) => {
  return (
    <div className={classNames('Char', css.root, className, { [css.active]: active })} onClick={onClick}>
      <div>{char}</div>
    </div>
  )
}

export default Char

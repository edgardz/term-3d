import { FC } from 'react'
import classNames from 'classnames'

import css from './Board.module.scss'

export interface BoardProps {
  className?: string
}

const Board: FC<BoardProps> = ({ className }) => {
  return (
    <div className={classNames('Board', css.root, className)}>
      <div>Board</div>
    </div>
  )
}

export default Board

import { FC } from 'react'
import classNames from 'classnames'

import css from './Keyboard.module.scss'

export interface KeyboardProps {
  className?: string
}

const Keyboard: FC<KeyboardProps> = ({ className }) => {
  return (
    <div className={classNames('Keyboard', css.root, className)}>
      <div>Keyboard</div>
    </div>
  )
}

export default Keyboard

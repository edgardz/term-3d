import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import css from './Word.module.scss'
import Char from '../Char/Char'

export interface WordProps {
  className?: string
  correct: string
  active: boolean
}

const Word: FC<WordProps> = ({ className, active, correct }) => {
  const [chars, setChars] = useState<string[]>([])
  const [activeChar, setActiveChar] = useState(0)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (active) {
        const key = e.key.toUpperCase()
        if (key === 'BACKSPACE') {
          if (chars[activeChar]) {
            setChars((currentChars) => {
              const newChars = [...currentChars]
              newChars[activeChar] = ''
              return newChars
            })
          } else {
            setChars((cur) => {
              cur[Math.max(0, activeChar - 1)] = ''
              return cur
            })
            setActiveChar((cur) => Math.max(0, cur - 1))
          }
        } else if (key.length === 1 && /[A-Z]/.test(key)) {
          if (activeChar < correct.length) {
            setChars((currentChars) => {
              const newChars = [...currentChars]
              newChars[activeChar] = key
              return newChars
            })
            setActiveChar(activeChar + 1)
          }
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)

    console.log(chars)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [active, chars, activeChar])

  return (
    <div className={classNames('Word', css.root, className, { [css.disabled]: !active })}>
      {correct.split('').map((_, i) => (
        <Char key={i} active={active && activeChar === i} char={chars[i]} onClick={() => setActiveChar(i)} />
      ))}
    </div>
  )
}

export default Word

import { FC } from 'react'
import classNames from 'classnames'

import { ServerProps } from '@/data/types'

import css from './PageLanding.module.scss'

import Word from '@/components/Word/Word'

export interface PageLandingServerProps extends ServerProps {}

const PageLanding: FC<PageLandingServerProps> = () => {
  return (
    <div className={classNames('PageLanding', css.root)}>
      <Word correct="aeiou" active={true} />
    </div>
  )
}

export default PageLanding

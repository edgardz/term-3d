import { FC } from 'react'

import { ServerProps } from '@/data/types'

import css from './PageLanding.module.scss'
import classNames from 'classnames'

export interface PageLandingServerProps extends ServerProps {}

const PageLanding: FC<PageLandingServerProps> = () => {
  return <div className={classNames('PageLanding', css.root)}>LANDING</div>
}

export default PageLanding

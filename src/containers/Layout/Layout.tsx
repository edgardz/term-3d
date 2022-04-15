import { FC, ForwardRefExoticComponent, memo, RefAttributes } from 'react'
import { AppProps } from 'next/app'

import { PageRef, ServerProps } from '@/data/types'

export interface LayoutViewProps {
  PageComponent: FC<ServerProps> | ForwardRefExoticComponent<ServerProps & RefAttributes<PageRef>>
  serverProps: ServerProps
}

const Layout: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="Layout">
      <Component {...pageProps} />
    </div>
  )
}

export default memo(Layout)

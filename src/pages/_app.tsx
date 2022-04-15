import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'

import '@/styles/global.scss'

import setBodyClasses from '@/utils/set-body-classes'

import Layout from '@/containers/Layout/Layout'

const App: FC<AppProps> = (props) => {
  useEffect(() => {
    // Body class names
    setBodyClasses()
  }, [])

  return <Layout {...props} />
}

export default App

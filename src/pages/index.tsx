import PageLanding, { PageLandingServerProps } from '@/containers/PageLanding/PageLanding'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<PageLandingServerProps> = async () => {
  return {
    props: {},
  }
}

export default PageLanding

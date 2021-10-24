import {ReactNode, FunctionComponent} from 'react'
import Head from 'next/head'
import Layout from './layout'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({children}: Props) => {
  return (
    <div className="container h-screen w-screen mx-auto px-7">
      <Head>
        <title>Brij Demo</title>
        <meta name="description" content="Product QR codes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{children}</Layout>
    </div>
  )
}

export default Container

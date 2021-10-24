import type {NextPage} from 'next'
import Head from 'next/head'
import Container from './components/container'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Brij Demo</title>
        <meta name="description" content="Product QR codes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center">
        <header>
          <h1 className="text-6xl text-white pt-4 font-bold tracking-tighter leading-tight md:leading-none text-center">
            Brij Demo
          </h1>
          <h3 className="text-3xl font-bold text-brij2 pt-4 leading-tight md:leading-none text-center">
            Give your products superpowers!
          </h3>
        </header>

        <h3 className="text-3xl font-bold text-white pt-4 leading-tight md:leading-none text-center">
          Products
        </h3>
        <ul>
          <li className="text-2xl font-bold text-white pt-4 -tighter leading-tight md:leading-none text-center">
            <button className="bg-brij2 hover:shadow-xl rounded p-2">
              <Link href="/products/1">
                <a>Product 1</a>
              </Link>
            </button>
          </li>
          <li className="text-2xl font-bold text-white pt-4 -tighter leading-tight md:leading-none text-center">
            <button className="bg-brij2 rounded p-2 hover:shadow-xl -opacity-40">
              <Link href="products/2">
                <a>Product 2</a>
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Home

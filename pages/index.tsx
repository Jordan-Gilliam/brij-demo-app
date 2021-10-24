import type {NextPage} from 'next'
import Container from './components/container'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Container>
      <div className="pt-4">
        <header>
          <div className=" text-4xl font-medium tracking-tight font-sans leading-none  text-white pt-4 text-center">
            Give your products
            <br />
            <span className="text-4xl font-medium tracking-tighter font-sans leading-none italic text-brij2 pt-4 text-center">
              superpowers!
            </span>
          </div>
        </header>

        <div className="flex flex-row justify-between pt-10">
          <div className="text-lg  ml-5 text-center text-white">
            Built-with ------------👉
          </div>
          <div className="text-right mr-3 leading-3">
            <div className="text-lg text-white  text-left">React</div>
            <div className="text-lg text-white leading-3 text-left opacity-60">
              Typescript
            </div>
            <div className="text-lg text-white text-left opacity-50">
              Next.js
            </div>
            <div className="text-lg text-white leading-3 text-left opacity-40">
              Tailwindcss
            </div>
            <div className="text-lg text-white text-left opacity-30">
              ESLint
            </div>
          </div>
        </div>

        <section className=" pt-12">
          <div>
            <div className=" text-white text-center p-4">
              <button className="bg-brij2 border-4 border-brij2 text-2xl hover:shadow-xl rounded-full px-1 py-2">
                <Link href="/products/1">
                  <a className="mx-5">Request product 1</a>
                </Link>
              </button>
            </div>
            <div className=" text-white text-center p-4">
              <button className="bg-brij border-4 border-brij2 text-2xl hover:shadow-xl rounded-full px-1 py-2">
                <Link href="products/2">
                  <a className="mx-5">Request product 2</a>
                </Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default Home

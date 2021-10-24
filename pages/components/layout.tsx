import {ReactNode, FunctionComponent} from 'react'
import Link from 'next/link'

type Props = {
  children?: ReactNode
}

const Layout: FunctionComponent = ({children}: Props) => {
  return (
    <div>
      <nav className="flex flex-row justify-between">
        <Link href="/">
          <a className="text-2xl text-white pb-10 pt-3 font-bold tracking-tighter leading-tight ">
            Brij Demo
          </a>
        </Link>

        <div className=" text-white text-center pt-4">
          <button className="bg-brij border-2 font-extralight border-white text-sm hover:shadow-xl rounded-full py-0.5">
            <Link href="/">
              <a className="mx-2">Github</a>
            </Link>
          </button>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default Layout

import {ReactNode, FunctionComponent} from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({children}: Props) => {
  return (
    <div className="container h-screen w-screen mx-auto px-7 bg-brij ">
      {children}
    </div>
  )
}

export default Container

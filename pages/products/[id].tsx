import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import Image from 'next/image'
import Container from '../components/container'

interface Brand {
  id: string
  name: string
  active: boolean
}

interface Product {
  id: string
  sku: string
  active: string
  variant: string
  image: string
  ageRestricted: boolean
}

interface Data {
  id: number
  active: true
  brand: Brand
  product: Product
}

export const getServerSideProps: GetServerSideProps = async context => {
  const {id} = context.query

  try {
    const res = await fetch(
      `https://fir-hosting-app-clip.web.app/.well-known/api/${id}.json`,
    )
    const data: Data = await res.json()

    return {
      props: {data},
    }
  } catch {
    return {
      notFound: true,
    }
  }
}

function Page({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {product, brand} = data.tag

  return (
    <Container>
      <div className="flex flex-col justify-center">
        <header>
          <h1 className="text-6xl pt-4 text-white font-bold tracking-tighter leading-tight md:leading-none text-center">
            {brand.name}
          </h1>
          <h3 className="text-3xl font-bold text-brij2 pt-4 -tighter leading-tight md:leading-none text-center">
            {product.name}
          </h3>
        </header>

        {product?.details && (
          <div className="text-center pt-4">
            <p className="text-1xl text-white pt-1">
              Size - {product?.details?.size}
            </p>
            <p className="text-1xl text-white pt-1">
              Color - {product?.details?.color}
            </p>
            <p className="text-1xl text-white pt-1">
              Fur - {product?.details?.Fur}
            </p>
          </div>
        )}

        <div className="inset-0 w-full text-center h-full object-cover pt-6">
          <Image
            src={product.image}
            alt={'Product Image'}
            width={400}
            height={600}
          />
        </div>
      </div>
    </Container>
  )
}

export default Page

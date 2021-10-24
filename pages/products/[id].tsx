import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import React from 'react'
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
  details?: object
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
          <h1 className="text-6xl  text-white font-bold tracking-tighter leading-tight ">
            {brand.name}
          </h1>
          <h3 className="text-3xl font-bold italic text-brij2  -tighter leading-tight ">
            {product.name}
          </h3>
        </header>

        <ul className=" pt-4">
          {product?.details &&
            Object.entries(product?.details).map(([key, value]) => (
              <li
                key={`${key}-details`}
                className="text-sm text-white leading-2"
              >{`${key} - ${value}`}</li>
            ))}
        </ul>

        <div className="inset-0 w-full text-center h-full object-cover pt-4">
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

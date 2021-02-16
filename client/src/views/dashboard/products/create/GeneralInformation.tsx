import React from 'react'
import _tw from 'twin.macro'
import ProductNavigation from './ProductNavigation'
// import Router from 'next/router'
// import routes from '@lib/utils/routes'
import GeneralMain from './GeneralMain'
import GeneralAside from './GeneralAside'
import { useForm } from 'react-hook-form'
import Title from '@components/UI/Title'
import Button from '@components/Button'

export type IProductFormValues = any

const GeneralInformation = () => {
  const formInfo = useForm<IProductFormValues>({
    // defaultValues,
  })

  return (
    <>
      <section tw="px-2 sm:px-10 pb-10 max-w-screen-lg mx-auto w-full">
        <div tw="flex justify-between mt-8 items-center">
          <Title>Create product</Title>
          <div tw="flex items-center">
            <button className="button w-24 justify-center block text-gray-700 mr-3">
              Preview
            </button>
            <Button size="SM" type="submit" tw="w-20">
              Save
            </Button>
          </div>
        </div>

        <ProductNavigation />

        <div tw="grid grid-cols-12 gap-6">
          <section tw="col-span-12 lg:col-span-8 2xl:col-span-8">
            <GeneralMain formInfo={formInfo} />
          </section>

          <aside tw="col-span-12 lg:col-span-4 2xl:col-span-4 flex lg:block flex-col-reverse">
            <GeneralAside formInfo={formInfo} />
          </aside>
        </div>
      </section>
    </>
  )
}

export default GeneralInformation

import React, { useState } from 'react'
import _tw from 'twin.macro'
import Box from '@components/UI/Box'
import { Input } from '@components/FormFields'
import { UseFormMethods } from 'react-hook-form'
import { IProductFormValues } from './GeneralInformation'
// import {
//   useCategoriesQuery,
//   useGetAllCountriesQuery,
// } from '@graphql/hooks'
import MultipleUpload from '@components/FormFields/Upload/MultipleUpload'
import Button from '@components/Button'
import { usePreviewURL } from '@lib/hooks/usePreviewURL'
import { HiOutlinePlus } from 'react-icons/hi'

interface IGeneralMainProps {
  formInfo: UseFormMethods<IProductFormValues>
}

const GeneralMain = ({ formInfo }: IGeneralMainProps) => {
  const [files, setFiles] = useState<File[]>([])
  const { register, errors, handleSubmit } = formInfo

  const onSubmit = async (formData: IProductFormValues) => {
    console.log(formData)
    // TODO: add multipleUpload from "files" to images value
  }

  const [previewURLs] = usePreviewURL(files)

  const handleMultipleFilesChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currentFiles = e.currentTarget.files

    if (currentFiles) {
      return setFiles((existingState) => [
        ...existingState,
        ...Array.from(currentFiles),
      ])
    }
  }

  // TODO: add drag n drop reordering for multiple images
  // TODO: add single image deletion when we have the Image Model

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box tw="p-5">
        <h3 tw="text-lg font-medium">Basic Information</h3>
        <div tw="mt-5 space-y-2">
          <Input
            name="name"
            type="text"
            label="Product name"
            placeholder="Your product name should contain between 5 and 50 characters"
            register={register}
            validations={{
              required: {
                value: true,
                message: 'Please, specify the product name',
              },
              minLength: {
                value: 5,
                message: 'Your product name must have at least 5 characters',
              },
              maxLength: {
                value: 50,
                message:
                  "Your product name shouldn't have more than 50 characters",
              },
            }}
            error={errors?.name}
          />
          <Input
            name="description"
            type="text"
            label="Short description"
            placeholder="Short description about your product"
            register={register}
            isTextArea
            validations={{
              required: {
                value: true,
                message: 'Please, specify your occupation',
              },
              minLength: {
                value: 10,
                message:
                  'The product description must have at least 10 characters',
              },
              maxLength: {
                value: 150,
                message:
                  "The product description shouldn't have more than 150 characters",
              },
            }}
            error={errors?.description}
          />
          <div className="lg:grid gap-5 lg:grid-flow-col">
            <Input
              name="price"
              type="number"
              label="Price per unit"
              placeholder="Individual unit price"
              register={register}
              validations={{
                required: {
                  value: true,
                  message: 'Please, specify a price for your product',
                },
              }}
              error={errors?.price}
            />
            {/* <Input
              name="minQuantity"
              type="number"
              label="Minimum quantity"
              placeholder="Minimum number of units required"
              register={register}
              validations={{
                required: {
                  value: true,
                  message: 'Please, specify a price for your product',
                },
              }}
              error={errors?.price}
            /> */}
          </div>
        </div>
      </Box>
      <Box tw="p-5 mt-10">
        <h3 tw="text-lg font-medium">Images</h3>
        <div tw="mt-5 space-y-2">
          <div tw="border border-gray-300 rounded-md flex flex-col overflow-hidden py-6">
            <MultipleUpload previewURL={previewURLs} setFiles={setFiles} />
            <label
              htmlFor="images"
              tw="inline-block mx-auto mt-2 cursor-pointer"
            >
              <Button
                tw="relative mt-3 p-3 inline-flex items-center rounded-full"
                size="SM"
              >
                <input
                  id="images"
                  name="images"
                  type="file"
                  multiple
                  onChange={handleMultipleFilesChange}
                  tw="w-full h-full absolute opacity-0"
                />
                <HiOutlinePlus />
              </Button>
            </label>
          </div>
        </div>
      </Box>
    </form>
  )
}

export default GeneralMain

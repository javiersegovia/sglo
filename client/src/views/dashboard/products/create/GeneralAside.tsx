import React from 'react'
import _tw from 'twin.macro'
import Box from '@components/UI/Box'
import Select from '@components/FormFields/Select'
import { UseFormMethods } from 'react-hook-form'
import { IProductFormValues } from './GeneralInformation'
import { useCategoriesQuery, useProductStatusesQuery } from '@graphql/hooks'
import { ProductStatus } from '@graphql/schema'

interface IGeneralAsideProps {
  formInfo: UseFormMethods<IProductFormValues>
}

const GeneralAside = ({ formInfo }: IGeneralAsideProps) => {
  const { data: categoriesData } = useCategoriesQuery()
  const { data: productStatusesData } = useProductStatusesQuery()

  const {
    control,
    register,
    unregister,
    formState,
    setValue,
    errors,
  } = formInfo

  const { submitCount } = formState

  return (
    <Box tw="p-5 space-y-2">
      <Select
        name="status"
        label="Status"
        options={productStatusesData?.productStatuses}
        control={control}
        register={register}
        unregister={unregister}
        setFormValue={setValue}
        initialValue={ProductStatus.Inactive}
        isSubmitClicked={Boolean(submitCount)}
        validations={{
          required: {
            value: true,
            message: "The status can't be empty",
          },
        }}
        error={errors?.status}
      />
      <Select
        name="category"
        label="Category"
        options={categoriesData?.categories}
        control={control}
        register={register}
        unregister={unregister}
        setFormValue={setValue}
        initialValue={null}
        isSubmitClicked={Boolean(submitCount)}
        validations={{
          required: {
            value: true,
            message: 'Please, specify one category',
          },
        }}
        error={errors?.category}
      />
    </Box>
  )
}

export default GeneralAside

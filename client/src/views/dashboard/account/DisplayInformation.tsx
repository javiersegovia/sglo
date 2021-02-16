import React, { useState } from 'react'
import Button from '@components/Button'
import Box from '@components/UI/Box'
import _tw from 'twin.macro'
import Input from '@components/FormFields/Input'
import { SingleUpload } from '@components/FormFields/Upload'
import { SelectMultiple } from '@components/FormFields/Select'
import { FieldError, get, useForm } from 'react-hook-form'
import { useUpdateCurrentUserMutation } from '@graphql/hooks'
import { CurrentUserProfileDataQuery, UpdateUserInput } from '@graphql/schema'
import { usePreviewURL } from '@lib/hooks/usePreviewURL'

interface IDisplayInformationProps {
  user: CurrentUserProfileDataQuery['currentUser']
  countries?: CurrentUserProfileDataQuery['countries']
}

type IFormValues = UpdateUserInput & {
  avatar?: FileList
}

const DisplayInformation = ({
  user,
  countries = [],
}: IDisplayInformationProps) => {
  const { firstName, lastName, information } = user
  const defaultValues: IFormValues = {
    firstName,
    lastName,
    information,
  }

  const {
    register,
    unregister,
    handleSubmit,
    errors,
    control,
    setValue,
    formState,
    watch,
  } = useForm<IFormValues>({
    defaultValues,
  })
  const { mutate: updateUser, isLoading } = useUpdateCurrentUserMutation()

  const { isSubmitting, submitCount } = formState
  const submitting = isSubmitting || isLoading

  const [success, setSuccess] = useState(false)

  const currentAvatar = watch('avatar')
  const [previewURL] = usePreviewURL(currentAvatar)

  const onSubmit = async (formData: IFormValues) => {
    const { firstName, lastName, information /* avatar */ } = formData

    // TODO: save avatar in DB

    await updateUser(
      {
        data: {
          firstName,
          lastName,
          information,
        },
      },
      {
        onSuccess: () => {
          setSuccess(true)
          setTimeout(() => setSuccess(false), 4000)
        },
        onError: () => {
          //TODO: handle backend errors here //
        },
      }
    )
  }

  return (
    <>
      <Box tw="lg:mt-5">
        <div tw="flex items-center p-5">
          <h2 tw="text-base mr-auto font-medium">Display Information</h2>
        </div>
        <div tw="p-5">
          <div tw="grid grid-cols-12 gap-5">
            <div tw="col-span-12 xl:col-span-5">
              <div tw="border border-gray-300 rounded-md overflow-hidden py-6">
                <label htmlFor="avatar" tw="w-40 block mx-auto cursor-pointer">
                  <SingleUpload
                    name="avatar"
                    previewURL={previewURL?.[0]}
                    setValue={setValue}
                  />
                  <Button tw="relative mt-3" size="SM">
                    <input
                      id="avatar"
                      name="avatar"
                      ref={register}
                      type="file"
                      tw="w-full h-full absolute opacity-0 cursor-pointer"
                    />
                    Change avatar
                  </Button>
                </label>
              </div>
            </div>

            <div tw="col-span-12 xl:col-span-7">
              <form onSubmit={handleSubmit(onSubmit)} tw="mb-8 space-y-2">
                <Input
                  name="firstName"
                  type="text"
                  label="First Name"
                  register={register}
                  validations={{
                    required: {
                      value: true,
                      message: 'Please, specify your first name',
                    },
                    minLength: {
                      value: 2,
                      message:
                        'Your first name must have at least 2 characters',
                    },
                  }}
                  error={errors?.firstName}
                />
                <Input
                  name="lastName"
                  type="text"
                  label="Last Name"
                  register={register}
                  validations={{
                    required: {
                      value: true,
                      message: 'Please, specify your last name',
                    },
                    minLength: {
                      value: 2,
                      message:
                        'Your first name must have at least 2 characters',
                    },
                  }}
                  error={errors?.lastName}
                />
                <Input
                  name="information.occupation"
                  type="text"
                  label="Occupation"
                  placeholder="What is your work position?"
                  register={register}
                  validations={{
                    required: {
                      value: true,
                      message: 'Please, specify your occupation',
                    },
                    minLength: {
                      value: 6,
                      message:
                        'Your occupation must have at least 6 characters',
                    },
                  }}
                  error={get(errors, 'information.occupation') as FieldError}
                />

                <SelectMultiple
                  name="information.nationality"
                  label="Nationalities"
                  placeholder="Tip: You can choose multiple countries"
                  options={countries}
                  control={control}
                  register={register}
                  unregister={unregister}
                  setFormValue={setValue}
                  initialValue={defaultValues.information?.nationality}
                  isSubmitClicked={!!submitCount}
                  error={get(errors, 'information.nationality') as FieldError}
                  validations={{
                    required: {
                      value: true,
                      message: 'Please, specify your nationality',
                    },
                  }}
                />

                <div tw="flex justify-end">
                  <Button
                    size="SM"
                    type="submit"
                    variant={success ? 'SUCCESS' : undefined}
                    isLoading={submitting}
                    disabled={submitting || success}
                    tw="text-white mt-3 w-full md:w-20"
                    showCheckOnSuccess
                  >
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </>
  )
}

export default DisplayInformation

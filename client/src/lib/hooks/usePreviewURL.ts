import { useEffect, useRef, useState } from 'react'
import faker from 'faker'

type ArrayOfObjectFiles = {
  id: string
  fileOrURL: File | string
}[]

type usePreviewURLProps = [
  files: string[] | undefined,
  setState: React.Dispatch<React.SetStateAction<string[] | undefined>>,
  arrayOfObjectFiles: ArrayOfObjectFiles
]

export const usePreviewURL = (
  files?: FileList | File[] | string | string[]
): usePreviewURLProps => {
  const [previewURL, setPreviewURL] = useState<string[] | undefined>(undefined)
  const filesArray = useRef<(string | File)[]>([])

  useEffect(() => {
    if (!files || !files.length) {
      setPreviewURL(undefined)
      return
    }

    if (typeof files === 'string') {
      setPreviewURL([files])
      return
    }

    filesArray.current = (Array.isArray(files) && files) || Array.from(files)

    const newPreviews: string[] = filesArray.current.map((item) => {
      if (typeof item === 'string') {
        return item
      }

      return URL.createObjectURL(item)
    })

    setPreviewURL(newPreviews)

    // TODO: add a validation with the files extension

    return () => previewURL?.forEach((url) => URL.revokeObjectURL(url))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, files?.length])

  const arrayOfObjectFiles = filesArray.current.map((file) => ({
    id: faker.random.uuid(),
    fileOrURL: file,
  }))

  return [previewURL, setPreviewURL, arrayOfObjectFiles]
}

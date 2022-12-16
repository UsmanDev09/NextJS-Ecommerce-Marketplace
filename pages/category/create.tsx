import { Formik, Field } from "formik"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import { Category } from "../../model/category"
import { categorySchema } from "../../validations/categorySchema"
import InputField from "../../components/Fields/InputField"
import CategoryAPI from "../../api/category/category"
import Label from "../../components/Label/Label"
import Button from "../../components/Buttons/Button"
import ImageUploader from "../../components/ImageUploader/ImageUploader"
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent"
import * as path from "../../constants/paths"

const CreateCategory = ({ category }: { category: Category }) => {
  const [errorType, setErrorType] = useState<any>()
  const [errorMsg, setErrorMsg] = useState<any>()
  const [token, setToken] = useState<any>()
  const [image, setImage] = useState<any>()

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token") || ""))
  }, [])
  const router = useRouter()
  return (
    <>
      <Formik
        onSubmit={async (data: any) => {
          try {
            await CategoryAPI.createCategory(data, token)
            router.push(`${path.CATEGORIES}`)
          } catch (error: any) {
            setErrorMsg(error.message)
            setErrorType(error.name)
          }
        }}
        validationSchema={categorySchema}
        initialValues={{
          name: "",
        }}
      >
        {({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            method="post"
          >
            <div className="grid gap-6 mb-6 md:grid-cols-1 p-4">
              <div className="mb-6">
                <Label label="Category Name" />
                <Field
                  component={InputField}
                  type="name"
                  name="name"
                  placeholder="Enter name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex  flex-col">
                  <Label label="Category Image" />
                  <ImageUploader setImage={setImage} />
                </div>
              </div>
              <div className="w-[300px]">
                <Button name="Create Category" />
              </div>
              {errorType || errorMsg &&
                <ErrorComponent errorMsg={errorMsg} errorType={errorType} />
              }
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}

export default CreateCategory

import { Field } from "formik"
import { AiOutlinePlus } from "react-icons/ai"
import InputField from "../Fields/InputField"

const ImageUploader = ({setImage}:any) => {
  return (
    <>
      <span className="text-gray-400">
        Use .png or .jpg format, max 7 photos, 25mb per photo
      </span>
      <div className="flex mt-2">
        {/* display image here */}
        <label
          htmlFor="contained-button-file"
          className="w-[60px] h-[60px] rounded-lg border-2 border-gray-300 border-dashed flex items-center justify-center cursor-pointer"
        >
          <Field
            component={InputField}
            type="file"
            name="image"
            onChange={(e: any) => setImage(e.target.files[0])}
            style={{ display: "none" }}
          />
          <AiOutlinePlus className="text-[20px] text-gray-400" />
        </label>
      </div>
    </>
  )
}

export default ImageUploader

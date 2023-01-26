import { Field } from "formik"
import { AiOutlinePlus } from "react-icons/ai"
import InputField from "../Fields/InputField"

const ImageUploader = ({setImage, onChange}) => {

  const onImageUpload = (e) => {
    if(e.target.files[0]){
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result)
        onChange(reader)
      }

      reader.readAsDataURL(e.target.files[0])
    }

  }
  return (
    <>
      <span className="text-gray-400">
        Use .png or .jpg format, max 7 photos, 25mb per photo
      </span>
      <div className="flex mt-2">
        <label
          htmlFor="contained-button-file"
          className="w-[60px] h-[60px]  rounded-lg border-2 border-gray-300 border-dashed flex items-center justify-center cursor-pointer"
        >
          <Field
            component={InputField}
            type="file"
            name="image"
            value={undefined}
            onChange={(e) => onImageUpload(e)}
            style={{color: "white", opacity:"0.00001", zIndex:"10", cursor: "pointer"}}
          />
        </label>
          <AiOutlinePlus className="text-[20px] text-gray-400 relative left-[-40px] top-[20px] cursor-pointer" />

      </div>
    </>
  )
}

export default ImageUploader

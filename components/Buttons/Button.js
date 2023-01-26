const Button = (props) => {
  return (
    <>
      <button
        type="submit"
        onClick ={props.onClick}
        className="justify-center min-w-[300px] bg-gray-200 hover:bg-[#A042E1] hover:text-white text-gray-600 font-comfortaa inline-flex font-semibold py-2 px-4 rounded-lg shadow"
      >
        {props.name}
      </button>
    </>
  )
}

export default Button

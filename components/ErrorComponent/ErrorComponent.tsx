const ErrorComponent = ({errorType, errorMsg}:any) => {
  return (
    <>
      <p className="font-comfortaa">Error Type: <span className="text-[#571414]">{errorType}</span></p>
      <p className="font-comfortaa">Error Message: <span className="text-[#571414]">{errorMsg}</span></p>
    </>
   );
}

export default ErrorComponent;



const Error = ({message}) => {
  return (
    <div className="justify-self-center m-12 p-6 object-center">
      <div className="text-red-600 font-bold text-2xl "><span className="text-center">{message}</span></div>
    </div>
  )
}

export default Error

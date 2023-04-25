

const Error = ({message}) => {
  return (
    <div className="absolute p-6">
      <div className="text-red-600 font-bold text-xl text-center"><span>{message}</span></div>
    </div>
  )
}

export default Error

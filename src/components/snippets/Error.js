

const Error = ({message}) => {
  return (
    <div className="justify-self-center flex flex-col m-12 p-6 object-center">
      <img src="https://www.replaylistings.com/assets/images/result-not-found-1.png"></img>
      {message}
       </div>
  )
}

export default Error

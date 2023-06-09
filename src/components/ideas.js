
import Idea from './idea'
import Error from './snippets/Error'
import { Link } from 'react-router-dom'




const Ideas = ({ideas}) => {

  return (
    <div className='grid justify-items-center p-6 m-6'>
      <h1 className='text-3xl font-bold p-3'>Idea News</h1>
      <div className='flex flex-row flex-wrap'>
        {ideas?ideas.map(idea=><Idea key={idea.id} id={idea.id} name={idea.name} author={idea.author} tagline={idea.tagline}/>): <Error message={'No Ideas'}/>}
      
      </div>
      
              
 
    </div>
   
  )}


export default Ideas

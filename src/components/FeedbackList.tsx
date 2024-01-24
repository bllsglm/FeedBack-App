import FeedbackItem from './FeedbackItem';
import {motion, AnimatePresence, easeInOut} from 'framer-motion'

type ItemProps = {
  id: number |string;
  rating: number;
  text: string;
};

export type FeedbackListProps = {
  feedback : ItemProps[];
  handleDelete :(id:number)=>void
}

const FeedbackList = ({feedback, handleDelete}: FeedbackListProps) => {
  if(!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
      {feedback.map((item)=>(
        <motion.div  
          key = {item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, ease:easeInOut}}
          exit={{ opacity: 0}}
          >
          <FeedbackItem 
            key={item.id}
            {...item} 
            handleDelete={handleDelete}/>
        </motion.div> 
      ))}
     </AnimatePresence>
    </div>
  )


  // return (
  //   <div className="feedback-list">
  //    {feedback.map((item)=>(
  //     <FeedbackItem 
  //       key={item.id}
  //       {...item} 
  //       handleDelete={handleDelete}
  //     />
  //    ))}
  //   </div>
  // )
}

export default FeedbackList
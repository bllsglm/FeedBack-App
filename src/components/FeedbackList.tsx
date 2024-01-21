import FeedbackItem from './FeedbackItem';

type ItemProps = {
  id: number;
  rating: number;
  text: string;
};

type FeedbackListProps = {
  feedback : ItemProps[];
  handleDelete :(id:number)=>void
}

const FeedbackList = ({feedback, handleDelete}: FeedbackListProps) => {
  if(!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>
  }


  return (
    <div className="feedback-list">
     {feedback.map((item)=>(
      <FeedbackItem 
        key={item.id}
        {...item} 
        handleDelete={handleDelete}
      />
     ))}
    </div>
  )
}

export default FeedbackList
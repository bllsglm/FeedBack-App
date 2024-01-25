import { FaTimes,FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";


type ItemProps = {
  id: string;
  rating: number;
  text: string;
};

const FeedbackItem = ({id, rating, text}: ItemProps) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)!

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={()=>deleteFeedback(id)}>
        <FaTimes color="red"/>
      </button>
      <button onClick={()=> editFeedback({id, rating, text})} className="edit">
        <FaEdit color="blue"/>
      </button>
      <div className="text-display">
        {text}
      </div>
    </Card>
  )
}

export default FeedbackItem
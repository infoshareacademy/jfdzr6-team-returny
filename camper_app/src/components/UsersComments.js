import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { getCommentsByCapmerId } from "../api/getCommentsByCamperId";
import { connectStorageEmulator } from "firebase/storage";
export function UsersComments({ camperData }) {
  const [isVisibleAddCommentForm, setisVisibleAddCommentForm] = useState(true);
  const [comments, setComments] = useState();
  
  const context = useContext(UserContext);
  // if (camperData.campercomments.comments[0]){
  //     setComments(camperData.campercomments.comments);
  // }
  console.log("id campera:", camperData.id);
  useEffect(() => {
    getCommentsByCapmerId("d3IY7bPvuyt38xZQ5JN3").then((allcomments) => {
       setComments(allcomments);
     
    });
  }, []);

  console.log(context.userData.name);
  console.log(comments);
const handleSubmitComment=(e)=>{
    e.preventDefault();
const newcomment= e.target.contentcom.value;
console.log(newcomment);
}



  return (
    <>
      <div style={{ border: "black 1px solid" }}>
        <h3>Komentarze uzytkowników :</h3>
        {/* {comments && comments.map((comment,index)=><p key={index}>nr {index+1}: {comment}</p> )} */}
        {comments &&
          Object.keys(comments).map((key, index) => {
            if (typeof comments[key] === "object") {
              return (
                <div key={index}>
                  <p>autor:{comments[key].autor}</p>
                  <p>terść:{comments[key].comment}</p>
                </div>
              );
            }
          })}
        <button onClick={() => setisVisibleAddCommentForm(false)}>
          Add comment
        </button>
        {/* <CommentForm isVisibleForm={isVisibleForm} onCreateComment={onCreateComment} handleCloseForm={handleCloseForm}/> */}
        <form onSubmit={handleSubmitComment} hidden={isVisibleAddCommentForm}>
          <h5>Add Comment</h5>
          <textarea name="contentcom"/>
          <br></br>
          <button type="submit">send comment</button>
          <button onClick={() => setisVisibleAddCommentForm(true)}>
            close form
          </button>
        </form>
      </div>
    </>
  );
}

export function CommentForm({
  isVisibleForm,
  onCreateComment,
  handleCloseForm,
}) {
  const [comment, setComment] = useState();
  // const navigate = useNavigate();

  // const handleChangeComment = (e) => {
  //   setComment(e.target.value);
  // };

  // const handleSubmitForm = (event) => {
  //   console.log(comment);
  //   event.preventDefault();
  //   onCreateComment({ comment: comment });
  //   setComment("");
  //   navigate('/blog');

  // };
  return <></>;
}

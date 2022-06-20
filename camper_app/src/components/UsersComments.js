import { useEffect, useState } from "react";
export function UsersComments({camperData}){


    return (
        <>
        <div style={{border:"black 1px solid"}}>
        <h3>Komentarze uzytkowników :</h3>
          {/* {post.comment[0] && post.comment.map((comment,index)=><div key={index}><p>{index+1}: {comment.comment}</p></div> )}

          <button onClick={()=> setisVisibleForm(false)}>Add comment</button>
          <CommentForm isVisibleForm={isVisibleForm} onCreateComment={onCreateComment} handleCloseForm={handleCloseForm}/> */}
          </div>
        </>
    )
}

export function CommentForm({ isVisibleForm ,onCreateComment, handleCloseForm}) {
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
    return (
      <>
        {/* <form onSubmit={handleSubmitForm} hidden={isVisibleForm}>
          <h5>Add Comment</h5>
  
          <textarea value={comment} onChange={handleChangeComment} />
          <br></br>
          <button type="submit">send comment</button>
          <button onClick={handleCloseForm}>close form</button>
        </form> */}
      </>
    );
  }
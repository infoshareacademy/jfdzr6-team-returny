import { useEffect, useState, useContext } from "react";
import { serverTimestamp } from "firebase/firestore";
import { UserContext } from "../context/userContext";
import { getCommentsByCamperId } from "../api/comments/getCommentsByCamperId";
import { addComment } from "../api/comments/addComment";
import { deleteComment } from "../api/comments/deleteComment";
import './UsersComments2.css';


export function UsersComments2({ camperData }) {
  const [comments, setComments] = useState();

  const context = useContext(UserContext);

  useEffect(() => {
    getCommentsByCamperId(camperData.id)
      .then((data) => {
        setComments(data);
      })
      .catch((er) => console.log(er));
  }, []);

  function handleSubmitComment(e) {
    e.preventDefault();
    const form = e.target;
    const newcomment = form.contentcom.value;
    const docData = {
      comment: newcomment,
      autor: context.userData.name,
      autorId: context.userData.id,
      createdAt: serverTimestamp(),
      camperId: camperData.id,
    };
    form.reset();
    addComment(docData)
      .then((res) => {
        getCommentsByCamperId(camperData.id)
          .then((data) => {
            setComments(data);
          })
          .catch((er) => console.log(er));
      })
      .catch((er) => console.log(er));
  }

  function handledeleteComment(commentid) {
    deleteComment(commentid).then((res) => {
      getCommentsByCamperId(camperData.id)
        .then((data) => {
          setComments(data);
        })
        .catch((er) => console.log(er));
    });
  }

  return (
    <>
      <div className="CommentsArea">
        <h3 style={{ marginBottom: "15px"}}>
          Komentarze uzytkowników :
        </h3>

        {comments &&
          comments.map((el, index) => {
            return (
              <div className="StyledComment">
                <p>
                  <b>dodano: </b>
                  {new Date(el.createdAt.seconds * 1000).toLocaleDateString()}
                </p>
                <p>
                  <b>autor: </b>
                  {el.autor}
                </p>
                <hr></hr>
                <p>
                  <b>treść: </b>
                  {el.comment}
                </p>

                {context.userData.id === el.autorId ? (
                  <button className="button2" onClick={() => handledeleteComment(el.id)}>
                    Skasuj komentarz
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        {context.userData && (
          <form onSubmit={handleSubmitComment}>
            <h5>Napisz Komentarz</h5>
            <textarea name="contentcom" />
            <br></br>
            <button type="submit">Dodaj komentarz</button>
          </form>
        )}
      </div>
    </>
  );
}

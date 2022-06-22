import { useEffect, useState, useContext } from "react";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
  deleteDoc,
  orderBy,
 
} from "firebase/firestore";
import { UserContext } from "../context/userContext";
import { db } from "../firebase";
import { getCommentsByCamperId } from "../api/comments/getCommentsByCamperId";

export function UsersComments2({ camperData }) {
  const [isVisibleAddCommentForm, setisVisibleAddCommentForm] = useState(true);
  const [comments, setComments] = useState();

  const context = useContext(UserContext);
  console.log(comments);
  console.log(camperData.id);

  useEffect(() => {
    getCommentsByCamperId(camperData.id)
      .then((data) => {
        console.log(data);
        setComments(data);
      })
      .catch((er) => console.log(er));
  }, []);

  // function getCommentsByCamperId(camperid) {
  //   const q = query(
  //     collection(db, "comments2"),
  //     where("camperId", "==", camperid),
  //     orderBy("createdAt", "desc")
  //   );
  //   return getDocs(q)
  //     .then((querySnapshot) => {
  //       return querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //     })
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((er) => console.log(er));
  // }
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
            console.log(data);
            setComments(data);
          })
          .catch((er) => console.log(er));
      })
      .catch((er) => console.log(er));
    setisVisibleAddCommentForm(true);
  }

  function addComment(comment) {
    const commentsCollection = collection(db, "comments2");
    return addDoc(commentsCollection, comment);
  }

  function handledeleteComment(commentid) {
    const docRef = doc(db, "comments2", commentid);
    return deleteDoc(docRef).then;
  }

  return (
    <>
      <div style={{ border: "black 1px solid", width: "100%" }}>
        <h3 style={{ marginBottom: "15px", textAlign: "center" }}>
          Komentarze uzytkowników :
        </h3>

        {comments &&
          comments.map((el, index) => {
            return (
              <div style={{ marginBottom: "10px" }} key={index}>
                <p>
                  <b>dodano: </b>
                  {new Date(el.createdAt.seconds * 1000).toLocaleDateString()}
                </p>
                <p>
                  <b>autor: </b>
                  {el.autor}
                </p>
                <p>
                  <b>terść: </b>
                  {el.comment}
                </p>

                {context.userData.id === el.autorId ? (
                  <button onClick={() => handledeleteComment(el.id)}>
                    Skasuj komentarz
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        {context.userData && (
          <button onClick={() => setisVisibleAddCommentForm(false)}>
            Dodaj komentarz
          </button>
        )}

        <form onSubmit={handleSubmitComment} hidden={isVisibleAddCommentForm}>
          <h5>Napisz Komentarz</h5>
          <textarea name="contentcom" />
          <br></br>
          <button type="submit">Wyślij komentarz</button>
          <button onClick={() => setisVisibleAddCommentForm(true)}>
            Zamknij formularz
          </button>
        </form>
      </div>
    </>
  );
}

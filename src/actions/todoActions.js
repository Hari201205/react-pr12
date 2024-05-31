import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";

export const fetchTodos = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const todos = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    dispatch({ type: "FETCH_TODOS", payload: todos });
  } catch (error) {
    console.error("Error fetching todos: ", error);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), todo);
    dispatch({ type: "ADD_TODO", payload: { ...todo, id: docRef.id } });
  } catch (error) {
    console.error("Error adding todo: ", error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "todos", id));
    dispatch({ type: "DELETE_TODO", payload: id });
  } catch (error) {
    console.error("Error deleting todo: ", error);
  }
};

export const editTodo = (id, updatedTodo) => async (dispatch) => {
  try {
    await updateDoc(doc(db, "todos", id), updatedTodo);
    dispatch({ type: "EDIT_TODO", payload: { id, ...updatedTodo } });
  } catch (error) {
    console.error("Error editing todo: ", error);
  }
};

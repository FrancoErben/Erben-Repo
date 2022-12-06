import { db  } from "../utils/firebaseConfig"
import { getDocs,collection, query, where } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore";
export const firestoneFetch= async(idCat)=>{
    let q
    if(idCat){
         q = query(collection(db,"productos"), where('categoryId','==',parseInt(idCat)))

    }else{
         q = query(collection(db,"productos")) 
    }
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
    }))      
}
export const firestoneFetchOne=async(id)=>{
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return{
        id: id,
        ...docSnap.data()
      }
    } else {
      
      console.log("No such document!");
    }   
}
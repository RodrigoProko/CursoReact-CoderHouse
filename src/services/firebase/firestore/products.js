import {
    collection,
    getDocs,
    getDoc,
    query,
    orderBy,
    doc,
} from 'firebase/firestore';
import{createProductAdapterFromFirestore} from '../../../adapters/productAdapter'
import {dataBase} from '../../../config/firebase/firebase-config'

export const getProducts = async() =>{

    //paso 0 en la construccion de dataBase en firebase-config

    //paso 1
    const collectionRef =  collection(dataBase,"productos")
    console.log("1) Creo collectionRef", collectionRef)

    //paso 2
    const queryRef =  query(collectionRef);
    console.log("2) creo la query", queryRef);
    
    //paso 3
    const queryResult = await getDocs(queryRef)
    console.log("3) ejecuto la query", queryResult);

    //paso 4 y 5 en adapter

    //paso 6

    const productAdapted = queryResult.docs.map((doc) => createProductAdapterFromFirestore(doc))

    console.log("6) tengo los resultados mapeados", productAdapted);
    
    return productAdapted
}
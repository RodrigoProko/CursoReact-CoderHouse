import {
    collection,
    getDocs,
    getDoc,
    query,
    orderBy,
    doc,
} from 'firebase/firestore';

import {dataBase} from '../config/firebase/firebase-config'

export const createProductAdapterFromFirestore = (doc) => {
    console.log("4) Ingrese a createProductAdapterFromFirestore con la data sin cocinar", doc)


    const fields = doc.data();
    console.log("5) la data ya cocinada, lista para ser adaptada a mi modelo", fields)

    const productAdapter = {
        id: doc.id,
        descripcion: fields.descripcion,
        nombre: fields.nombre,
        stock: fields.stock,
        precio: fields.precio,
        categoria: fields.categoria,
        portada: fields.portada
    }

    return productAdapter;

}

export const getProductById = async (productId) => {
    //paso 1: Obtener la referencia al documente en Firebase
    const docRef = doc(dataBase,"productos",productId);

    console.log("1) creo dockRef", docRef);

    //paso 2: Obtener el documento de Firebase
    const productSnapShot = await getDoc(docRef);

    console.log("2) ejecuto getDoc", productSnapShot)

    //paso 3: Convertir el documento de firestore en un objeto adaptado
    const productAdapted = createProductAdapterFromFirestore(productSnapShot)
     
    console.log("3) Convertir el documento a objeto adaptado", productAdapted)

    return productAdapted;

}


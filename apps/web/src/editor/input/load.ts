//import { EditorStoreName } from "./input";
//
//export const loadChangesFromIndexedDB = async (): Promise<string> => {
//  return new Promise<string>((resolve, reject) => {
//    const dbPromise = window.indexedDB.open(EditorStoreName.Database, 1);
//
//    dbPromise.onupgradeneeded = (event: IDBVersionChangeEvent) => {
//      const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
//      db.createObjectStore(EditorStoreName.Object, { autoIncrement: true });
//    };
//
//    dbPromise.onsuccess = (event: Event) => {
//      const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
//      const transaction = db.transaction(EditorStoreName.Object, "readonly");
//      const store = transaction.objectStore(EditorStoreName.Object);
//      const request = store.getAll();
//
//      request.onsuccess = () => {
//        resolve(request.result.join(""));
//      };
//
//      request.onerror = () => {
//        reject(request.error);
//      };
//    };
//
//    dbPromise.onerror = (event: Event) => {
//      reject((event.target as IDBOpenDBRequest).error);
//    };
//  });
//};

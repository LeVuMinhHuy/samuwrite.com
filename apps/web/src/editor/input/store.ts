//import { EditorStoreName } from "./input";
//
//export const debounce = <T extends (...args: any[]) => void>(
//  fn: T,
//  delay: number
//) => {
//  let timeoutId: ReturnType<typeof setTimeout> | null = null;
//
//  return ((...args: Parameters<T>) => {
//    if (timeoutId !== null) clearTimeout(timeoutId);
//
//    timeoutId = setTimeout(() => {
//      fn(...args);
//      timeoutId = null;
//    }, delay);
//  }) as T;
//};
//
//const saveChangesToIndexedDB = async (changes: string): Promise<void> => {
//  return new Promise<void>((resolve, reject) => {
//    const dbPromise = window.indexedDB.open(EditorStoreName.Database, 1);
//
//    dbPromise.onupgradeneeded = (event: IDBVersionChangeEvent) => {
//      const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
//      db.createObjectStore(EditorStoreName.Object, { autoIncrement: true });
//    };
//
//    dbPromise.onsuccess = (event: Event) => {
//      const db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
//      const transaction = db.transaction(EditorStoreName.Object, "readwrite");
//      const store = transaction.objectStore(EditorStoreName.Object);
//      const request = store.add(changes);
//
//      request.onsuccess = () => {
//        resolve();
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
//
//const autoSaveWorker = () => {
//  self.addEventListener("message", async (event: MessageEvent) => {
//    const { changes } = event.data;
//    await saveChangesToIndexedDB(changes);
//  });
//};
//
//const workerBlob = new Blob([`(${autoSaveWorker.toString()})()`], {
//  type: "text/javascript",
//});
//
//export const autoSaveWorkerURL = new Worker(URL.createObjectURL(workerBlob));

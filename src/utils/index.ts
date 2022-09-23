import { UnsplashDataProps } from "../features/feed"


export const COLLECTIONS_IDS = 'collectionsid'

export const saveCollection = (collection: UnsplashDataProps) => {
  let savedCollections:Record<string, UnsplashDataProps> = {}
  if(localStorage.getItem(COLLECTIONS_IDS) !== null) {
    savedCollections = JSON.parse(localStorage.getItem(COLLECTIONS_IDS) as string)
  }
  savedCollections[collection.id] = collection
  localStorage.setItem(COLLECTIONS_IDS, JSON.stringify(savedCollections))
}

export const removeCollection = (id: string) => {
  let savedCollections = JSON.parse(localStorage.getItem(COLLECTIONS_IDS) as string)
  delete savedCollections[`${id}`]
  localStorage.setItem(COLLECTIONS_IDS, JSON.stringify(savedCollections))
}

export const collectionExistInLocalStorage = (id: string) => {
  const storedItems = localStorage.getItem(COLLECTIONS_IDS);
  if (!storedItems) {
    return false;
  }
  const topicStore = JSON.parse(storedItems);
  return topicStore.hasOwnProperty(id);
}
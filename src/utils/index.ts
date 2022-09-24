export const SAVED_COLLECTIONS = 'savedCollections'
export const SAVED_IMGS = 'savedImgs'

interface ColExistInLocalStorageProps {
  id: string
  savedType: typeof SAVED_COLLECTIONS | typeof SAVED_IMGS
}

export const collectionExistInLocalStorage = ({id, savedType}: ColExistInLocalStorageProps) => {
  const storedItems = localStorage.getItem(savedType);
  if (!storedItems) {
    return false;
  }

  const topicStore = JSON.parse(storedItems);
  return topicStore.hasOwnProperty(id);
}
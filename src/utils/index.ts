export const COLLECTIONS_IDS = 'collectionsid'

export const collectionExistInLocalStorage = (id: string) => {
  const storedItems = localStorage.getItem(COLLECTIONS_IDS);
  if (!storedItems) {
    return false;
  }
  const topicStore = JSON.parse(storedItems);
  return topicStore.hasOwnProperty(id);
}
import { useEffect, useState } from 'react';

export interface ImgProperties {
  urls: {
    small: string;
  };
  id: string;
  description?: string;
}

export default function useFotosFetch(pageNumber: number) {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState<ImgProperties[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const fetchImages = async () => {
      const res = await fetch(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=${pageNumber}`
      );
      const data = await res.json();
      setImages((prevImages) => Array.from(new Set([...prevImages, ...data])));
      setHasMore(data.length > 0);
      setLoading(false);

      if (!data) setError(true);
    };

    fetchImages();
  }, [pageNumber]);

  return { loading, error, images, hasMore };
}

import { useEffect, useState } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreeedList();
    }
    async function requestBreeedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const data = await res.json();

      localCache[animal] = data.breeds || [];

      setBreedList(localCache[animal]);
      setStatus("Loaded");
    }
  }, [animal]);

  return [breedList, status];
}

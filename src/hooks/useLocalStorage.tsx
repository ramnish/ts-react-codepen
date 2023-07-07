import { useEffect, useState } from "react";

const PREFIX = "codepen-clone-";

export default function useLocalStorage(key: string, initialValue: any) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return jsonValue;
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, value);
  }, [value, key]);

  return [value, setValue];
}

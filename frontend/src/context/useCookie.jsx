import { useState } from "react";

function useCookie() {
  const [cookie, setCookie] = useState(() => {
    const data = document.cookie || null;
    return data;
  });

  return { cookie, setCookie };
}

export default useCookie;

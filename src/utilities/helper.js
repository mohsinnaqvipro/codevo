export const getPathname = (path) => {
    if (path === "/portfolio" || path === "/contact" || path === "/get-demo") {
      return true;
    } else {
      return false;
    }
  };
  
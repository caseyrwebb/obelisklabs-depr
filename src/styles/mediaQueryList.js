const mediaQueryLists = {}; //Add all MediaQueryList object here.
const keys = Object.keys(queries);
const matches = {}; //contains initial query matches

keys.forEach((media) => {
  if (typeof queries[media] === "string") {
    /* Adding MediaQueryList object for each and every query to
  mediaQueryLists object
 */
    mediaQueryLists[media] = window.matchMedia(queries[media]);

    //Get initial matches of each query
    matches[media] = mediaQueryLists[media].matches;
  } else {
    matches[media] = false;
  }
});

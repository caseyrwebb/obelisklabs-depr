const handleQueryListener = () => {
  const updatedMatches = keys.reduce((acc, media) => {
    acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
    return acc;
  }, {});
  console.log("Matches", updatedMatches);
};

keys.forEach((media) => {
  if (typeof queries[media] === "string") {
    mediaQueryLists[media].addListener(handleQueryListener);
  }
});

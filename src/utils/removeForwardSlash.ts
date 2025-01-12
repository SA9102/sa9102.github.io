// Removes the beginning forward slash (/) from a route
const removeForwardSlash = (route: string): string => {
  return route.split("/")[1];
};

export default removeForwardSlash;

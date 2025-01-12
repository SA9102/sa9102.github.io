// Returns the uppercase text from the route (without the forward
// slash), e.g. the route 'experience-and-education' will return
// 'EXPERIENCE AND EDUCATION'
const getUpperTextFromRoute = (route: string): string => {
  const split = route.split("-");
  const uppercaseList = split.map((word) => {
    return word.toUpperCase();
  });
  return uppercaseList.join(" ");
};

export default getUpperTextFromRoute;

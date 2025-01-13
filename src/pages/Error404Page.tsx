import { Link } from "react-router";

const Error404Page = () => {
  return (
    <>
      <h2>Oops! Page not found.</h2>
      <p>
        <Link to="/home">Go back to homepage.</Link>
      </p>
    </>
  );
};

export default Error404Page;

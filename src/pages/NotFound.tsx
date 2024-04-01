import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="NotFound">
      <h1>
        <span>404</span> <br/> Not Found
      </h1>
          <p>Hey👋The page you are looking for does not exist.</p>
          <h4
        onClick={handleGoBack}
        className="cursor-pointer underline hover:text-primaryBlue"
      >
        Go back
      </h4>
    </div>
  );
}

export default NotFound;

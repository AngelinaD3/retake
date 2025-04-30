import { useRouteError, Link, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  
  let errorMessage = 'Unknown error';
  let errorStatus = '';

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="error-container">
      <h1>Error {errorStatus}</h1>
      <h2>{errorMessage}</h2>
      
      {errorStatus === 404 && (
        <p>The page you're looking for doesn't exist.</p>
      )}
      
      <Link to="/" className="error-link">
        <button>Go to Homepage</button>
      </Link>
    </div>
  );
}
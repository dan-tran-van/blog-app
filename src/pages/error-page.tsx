import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as unknown;
  console.log(error);
  // Type narrowing
  let errorMessage: string;
  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (error instanceof Response) {
    errorMessage = `HTTP ${error.status} - ${error.statusText}`;
  } else {
    errorMessage = "An unknown error occurred";
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}

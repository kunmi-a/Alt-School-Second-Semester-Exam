import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ListView } from "../components/ListView";
import { PaginatedView } from "../components/PaginatedView";
import { fetchApi } from "../api/fetchApi";
import { APIContext } from "../context/context";
import { ErrorFallback } from "../error/ErrorFallback";
import { Error } from "../error/404";

export const Routes = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const obtainedData = await fetchApi();
        setData(obtainedData);
      } catch {
        setError("Something went wrong...");
      }
    };
    getData();

  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <APIContext.Provider
          value={{
            data,
            error,
          }}
        >
          <Switch>
            <Route exact path={["/", "/list-view"]} component={ListView} />
            <Route path="/paginated-view" component={PaginatedView} />
            <Route path="*" component={Error} />
          </Switch>
        </APIContext.Provider>
      </ErrorBoundary>
    </Router>
  );
  );
};

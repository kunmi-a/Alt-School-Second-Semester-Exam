import React from "react";

export const ErrorComponent = ({ error }) => {
  return (
    <div className="main-container">
      <div style={{ flexGrow: 1 }}>
        <div className="container" id="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0">
              <div className="text-center">
                <img src="" alt="..." className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-md-5 col-xl-4 order-md-1 my-5">
              <div className="text-center">
                <h6 className="text-uppercase text-muted mb-4">Error</h6>
                <h1 className="display-4 mb-3">{error} 😭</h1>
                <p className="text-muted mb-4">Please try again...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ErrorFallback = () => {
  return <ErrorComponent error="Something went wrong..." />;
};

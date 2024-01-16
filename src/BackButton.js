import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { MdArrowBackIosNew } from "react-icons/md";
import { Spinner } from "react-bootstrap";

const BackButton = () => {
  const location = useLocation();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 500));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleBackButtonClick = () => {
    window.history.back();
  };

  const handleClick = () => setLoading(true);

  return (
    <div>
      {location.pathname !== "/" ? (
        <Button
          className="back-button"
          variant="dark"
          disabled={isLoading}
          onClick={() => {
            handleBackButtonClick();
            handleClick();
          }}
        >
          {isLoading ? (
            <Spinner animation="border" role="status" />
          ) : (
            <MdArrowBackIosNew />
          )}
        </Button>
      ) : null}
    </div>
  );
};

export default BackButton;

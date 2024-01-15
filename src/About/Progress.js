import { Badge, ProgressBar } from "react-bootstrap";

function ProgressJob() {
  return (
    <div className="mt-4">
      <h2>Trinh Do?</h2>
      <h3 className="mt-4">
        <Badge bg="success">Kinh Nghiem:</Badge>
      </h3>
      <ProgressBar animated striped variant="success" now={40} />

      <h3 className="mt-2">
        {" "}
        <Badge bg="info">Ki thuat:</Badge>
      </h3>
      <ProgressBar animated striped variant="info" now={20} />

      <h3 className="mt-2">
        <Badge bg="warning">Chinh sua:</Badge>
      </h3>
      <ProgressBar animated striped variant="warning" now={60} />

      <h3 className="mt-2">
        {" "}
        <Badge bg="danger">Boi Canh:</Badge>
      </h3>
      <ProgressBar animated striped variant="danger" now={80} />
    </div>
  );
}

export default ProgressJob;

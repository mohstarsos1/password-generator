import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { MdContentPaste } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleGenerate = () => {
    setPassword(
      Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8)
    );
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    toast.success("Password copied to clipboard", { autoClose: 3000 });
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center bg-primary-subtle gap-3"
      style={{ height: "100vh" }}
    >
      <ToastContainer />
      <h2 className="fw-bold">Password Generator </h2>
      <div className="row  d-flex justify-content-center align-items-center">
        <div className="input-group w-auto">
          <div
            className="input-group-text btn btn-success fw-bold"
            id="btnGroupAddon"
            onClick={handleGenerate}
          >
            Generate
          </div>
          <input
            type={visible ? "text" : "password"}
            className="form-control shadow-none fw-bold"
            value={password}
          />
          <div
            className="input-group-text btn btn-warning"
            id="btnGroupAddon"
            onClick={handleVisible}
          >
            {visible ? (
              <BsFillEyeFill className="fs-5" />
            ) : (
              <BsFillEyeSlashFill className="fs-5" />
            )}
          </div>
        </div>
        <button className="btn btn-info w-auto" onClick={handleCopy}>
          <MdContentPaste className="fs-5" />
        </button>
      </div>
    </div>
  );
}

export default App;

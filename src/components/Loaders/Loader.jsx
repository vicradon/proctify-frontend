import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loader({ show, message, width = 100, height = 70 }) {
  return !show ? null : (
    <div className="flex justify-center items-center my-5">
      <div className="flex flex-col justify-center items-center">
        <TailSpin
          className={message ? "mb-8" : ""}
          type="TailSpin"
          color="#1D1E2C"
          height={height}
          width={width}
        />
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Loader;

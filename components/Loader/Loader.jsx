import { CircleLoader } from "react-spinners";
export const Loader = ({ text }) => (
  <>
    <div className="loader">
      <CircleLoader color="#36d7b7" />
      <div>{text}</div>
    </div>
    <style>{`
            .loader {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
        `}</style>
  </>
);

import React from "react";
import { Triangle } from "react-loader-spinner";

interface LoadingProps {
  message?: string;
}

const LoadingMessage: React.FC<LoadingProps> = ({ message }) => {
  return (
    <div className="h-full w-full flex-center flex-col gap-5">
      <Triangle
        height="100"
        width="100"
        color="#00FFFF"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default LoadingMessage;

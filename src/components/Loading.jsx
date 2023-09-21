import React from "react";
import "./styles.css"
import LoadingIcons from 'react-loading-icons'

const Loading = () => {
  return (
    <div className="loading-container">
     <LoadingIcons.Bars color="black"/>
    </div>
  );
};

export default Loading;
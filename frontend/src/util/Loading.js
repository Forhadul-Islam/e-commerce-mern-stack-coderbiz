import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Loading = () => {
  
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "20rem"}} className="loading">
            <Loader
            type="Bars"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
    
            />
        </div>
       );
}

export default Loading

import React from 'react'

export default function Auther(props) {
  return (
    <div className="auther-container" onClick={() => {
      props.change()
    }}>
     
          {props.children}
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  );
}

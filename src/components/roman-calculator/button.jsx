import React from "react";

export default function Button(props) {
  return (
    <div id={props.id} className={props.className} style={props.style} role="button" onClick={props.onClick}>
      {props.number}
    </div>
  );
}

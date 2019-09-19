import React from "react";
import "./Event.css";

export default function Event(props) {
  return (
    <tr className="text-white" key={props.EventId}>
      <td className="text-center">{props.date}</td>
      <td>{props.time}</td>
      <td>{props.title}</td>
      <td>{props.venue}</td>
      <td className="td-tickets text-right">
        <a
          className="btn btn-outline-info"
          href={`https://www.viagogo.com${props.url}`}
          target="_blank"
        >
          <small>Lowest: {props.minPrice}</small>
        </a>
      </td>
    </tr>
  );
}

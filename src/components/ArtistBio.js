import React from "react";
import "./ArtistBio.css";

export default function ArtistBio() {
  return (
    <div className="ArtistBio text-white row">
      <div className="col-lg-6"></div>
      <div id="elton" className="col-lg-6 col-12">
        <h3 className="display-4 mt-5">Elton John</h3>
        <p id="desc" className="lead mr-5">
          Elton John, in full Sir Elton Hercules John, original name Reginald
          Kenneth Dwight, (born March 25, 1947, Pinner, Middlesex, England),
          British singer, composer, and pianist who was one of the most popular
          entertainers of the late 20th century. He fused as many strands of
          popular music and stylistic showmanship as Elvis Presley in a concert
          and recording career that included the sale of hundreds of millions of
          records.{" "}
        </p>
      </div>
    </div>
  );
}

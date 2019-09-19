import React from "react";
import eventlist from "../eventlist";
import List from "./List";
import NavBar from "./Navbar";
import ArtistBio from "./ArtistBio";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: eventlist.Items
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <ArtistBio />
        <List events={this.state.events} />
      </div>
    );
  }
}

export default Home;

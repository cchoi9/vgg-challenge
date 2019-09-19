import React from "react";
import Event from "./Event";
import "./List.css";

const logger = select => {
  const logged = {};
  for (let i = 0; i < select.length; i++) {
    if (!logged[select[i]]) {
      logged[select[i]] = true;
    }
  }
  return Object.keys(logged);
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
      eventsFiltered: this.props.events,
      search: ""
    };
  }

  handleChange = event => {
    const isMatched = new RegExp(this.state.search, "i");
    const events = this.props.events.filter(
      ({ VenueName, VenueCity }) =>
        VenueCity.match(isMatched) ||
        VenueName.match(isMatched) ||
        VenueName.includes(this.state.search)
    );
    this.setState({
      search: event.target.value,
      eventsFiltered: events
    });
  };

  render() {
    const events = this.state.eventsFiltered;
    return (
      <div className="wrapper">
        <div className="main main-raised main-translucent">
          <div className="section">
            <div className="container">
              {/* Uncomment this to Select cities (Part 2)

              <select className="form-control" onChange={this.handleChange}>
                <option value="">Select Location</option>
                {logger(
                  this.props.events.map(({ VenueCity }) => VenueCity)
                ).map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select> */}
              <div className="input-group mt-5">
                <div className="input-group-prepend bg-dark b-dark">
                  <div className="b-dark input-group-text bg-dark text-white">
                    <i className="fa fa-search" aria-hidden="true" />
                  </div>
                </div>
                <input
                  type="text"
                  value={this.state.search}
                  onChange={this.handleChange}
                  className="form-control bg-dark text-white"
                  id="inlineFormInputGroup"
                  placeholder="Search event or venue..."
                />
              </div>
              <table className="table table-hover mt-5 w-100">
                <thead className="thead-dark">
                  <tr className="text-white">
                    <th className="mx-0 ml">Date</th>
                    <th>Time</th>
                    <th>Event</th>
                    <th>Venue</th>
                    <th className="text-center mx-auto text-white">Sale</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map(event => {
                    return (
                      <Event
                        key={event.EventId}
                        time={event.Time}
                        date={event.Date}
                        title={event.LinkTitleText}
                        url={event.EventUrl}
                        venue={event.VenueName}
                        minPrice={event.MinPrice}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;

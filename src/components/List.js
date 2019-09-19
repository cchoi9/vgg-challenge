import React from "react";
import Event from "./Event";
import "./List.css";

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
    this.setState({ search: event.target.value });

    const isMatched = new RegExp(this.state.search, "i");
    const events = this.props.events.filter(
      ({ VenueName, VenueCity }) =>
        VenueCity.match(isMatched) ||
        VenueName.match(isMatched) ||
        VenueName.includes(this.state.search)
    );
    this.setState({
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

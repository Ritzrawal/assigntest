import React,{Component} from 'react';

// import React from "react";
import { render } from "react-dom";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
BigCalendar.momentLocalizer(moment);
const events=[
  {
    'title': 'Fast & Furious Presents: Hobbs & Shaw',
    'allDay': true,
    'start': new Date(2020, 1, 10),
    'end': new Date(2020, 2, 10)
  },
  {
    'title': 'Saaho',
    'start': new Date(2020, 1, 10),
    'end': new Date(2020, 1, 12)
  },

  {
    'title': 'The Lion King',
    'start': new Date(2020, 1, 10, 0, 0, 0),
    'end': new Date(2020, 1, 20, 0, 0, 0)
  },

]
class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
        person: [],
        apiResponse:"",
        view: "day",
        date: new Date(2020, 1, 27),
        width: 500
      };
};
  getData=(e)=>{
    fetch("http://localhost:8081/api/shows") 
    .then(response =>  response.json())
    .then(resData => {

       this.setState({ person: resData.data }, _ => console.log(this.state.person)); //this is an asynchronous function
    })
  }
componentDidMount() {
    this.getData();
}


  render() {

    return (
      <div style={{ height: 700 }}>
        <BigCalendar
          events={events}
          step={60}
          view='month'
          views={['month']}
          date={this.state.date}
        />
      </div>
    );
  }
}

export default Calender;

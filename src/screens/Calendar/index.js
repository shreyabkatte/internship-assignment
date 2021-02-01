// import React from "react"


// const Calendar = () =>{
//     return (
//         <div>Hello</div>
//     )
// }

// export default Calendar;

// import React from "react"



// import Calendar from 'react_google_calendar'

// const calendar_configuration = {
//     api_key: 'AIzaSyDz9Ipnj_f9XNRXHsgEnJiGzAgyyLTCoW4',
//     calendars: [
//       {
//         name: 'demo',
//         url: 'https://calendar.google.com/calendar/u/0?cid=c2hyZXlhLmIua2F0dGVAZ21haWwuY29t'
//       }
//     ],
//     dailyRecurrence: 700,
//     weeklyRecurrence: 500,
//     monthlyRecurrence: 20
// }

// export default class MyApp extends React.Component {
//     constructor(props) {
//       super(props)
//         this.state = {
//           events: []
//         }
//     }

//     render = () =>
//       <div>
//         <Calendar
//           events={this.state.events}
//           config={calendar_configuration} />
//       </div>
// }


import React, { Component } from "react";
import events from "./events";
import BigCalendar from "react-big-calendar";
import moment from 'moment';
import 'moment/locale/fr';
import "react-big-calendar/lib/css/react-big-calendar.css";
import MonthIcon from "../../icons/Month-picto";
import YearIcon from "../../icons/Year-picto";
import WeekIcon from "../../icons/Week-picto";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from "@material-ui/core/Grid";
import DayPictoIcon from "../../icons/Day-picto";
import AddactivityIcon from "../../icons/Add-activity";
import CalendarSettingsIcon from "../../icons/Calendar-settings";
import SearchPictoIcon from "../../icons/Search-picto";

moment.locale("fr");
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const items = [
  {
    icon : <AddactivityIcon />
  },
  {
    icon : <DayPictoIcon />,
    view: "day"
  },
  {
    icon: <WeekIcon />,
    view: "week"
  },

  {
    icon: <MonthIcon />,
    view: "month"
  },

  {
    icon: <YearIcon />,
    view: "month"
  },
  {
    icon: <SearchPictoIcon />,
  },
  {
    icon: <CalendarSettingsIcon />,
  }  
]

class Calendar extends Component {

  state = {
    view: "day",
    date: new Date(2015, 3, 12),
    width: 500
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      /*this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });*/
    });
  }

  render() {
    // const classes = useStyles();



    return (
      <Grid container spacing={8}  >
        <Grid item sm={1} style={{ padding: "8px", backgroundColor: "#8000ff" }}>
          <List >
            {items.map((item, index) => {
              return (
                <ListItem style={{ padding: "8px 0px" }} button >
                  <ListItemIcon style={{ display: "flex", justifyContent: "center", width: "100%" }} 
                  onClick={item.view ? () => {
                    this.setState({ view: item.view })
                  } : () => {
                    this.setState({ view: "month" })
                  }}>
                    {index == items.length -1 ? (
                    <div style={{height : "400px" ,  paddingTop: "380px"}}>
                      
                      {item.icon}
                    </div>
                    ) :item.icon}
                  </ListItemIcon>
                </ListItem>
              )
            })}
          </List>
        </Grid>

        <Grid item sm={11} style={{ padding: "0px 8px 8px 0px" }}>
          <div style={{ height: 700 }}>
            {/* <button onClick={() => this.setState({ view: "day" })}>Day</button>
            <button onClick={() => this.setState({ view: "month" })}>Month</button> */}
            <BigCalendar
              style={{ height: 500, width: this.state.width }}
              toolbar={false}
              events={events}
              step={60}
              views={allViews}
              view={this.state.view}
              onView={() => { }}
              date={this.state.date}
              onNavigate={date => this.setState({ date })}
            />
          </div>
        </Grid>


      </Grid>


    );
  }
}

export default Calendar



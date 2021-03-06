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
import SortIcon from "../../icons/Sort-picto";
import CalendarSettingsIcon from "../../icons/Calendar-settings";
import SearchPictoIcon from "../../icons/Search-picto";
import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


/***  Author: Shreya BALACHANDRA ***/
/***  Calendar part ***/
/***  route : /results  ***/

/* French calendar */
moment.locale("fr");
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);


/* Array of icon item on the left panel are the input to the List component */
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
/* local state of the calendar. 
view : The variable to store 'display type' field
date : Iniatial date set in calendar
width : customized width of the calendar
 */
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
    return (
      /* Left Navigation Panel for Calendar*/

      /*Grid component is used to display the contents in grif form. 
      The parent component takes the value 'container' and child Grid's take 'item ' as value  */
      <Grid container spacing={8}  >
        <Grid item sm={1} style={{ padding: "8px", backgroundColor: "#8000ff" }}>
          <List >
            {items.map((item, index) => {
              return (
                <ListItem style={{ padding: "8px 0px" }} button >
                  <ListItemIcon style={{ display: "flex", justifyContent: "center", width: "100%" }} 
                  // onClick of the icons, the state variable is set using setState. This re-renders entire component 
                  onClick={item.view ? () => {
                    this.setState({ view: item.view })
                  } : () => {
                    this.setState({ view: "month" })
                  }}>
                    {index == items.length -1 ? (
                    /* Icons are displayed using input array */
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

        {/* Sort and Filter section */}
        <Grid item sm={11} style={{ padding: "0px 8px 8px 0px" }}>
          <div style={{display:"flex", marginBottom:"6px"}}> 
            <ArrowDownwardTwoToneIcon />
            <ArrowUpwardIcon/>
            <div style={{ marginRight:"15px",marginLeft:"4px", fontSize:"18px"}}>AOÛT 2020</div>
            <div style={{ marginTop: "5px" }}><SortIcon height="15px" width="15px"/></div>
          </div >

          {/* Calender Container
          style: style props of BigCalendar component
          events: The customized events displayed in calendar
          view: Selected view
          date: Current date
          onNavigate: Updates the calendar as per the current date.

           */}
          <div style={{ height: 700 }}>
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



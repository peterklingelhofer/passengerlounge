// import React from "react";

// const style = {
//   borderWidth: 0,
//   // clipPath: 'inset(0 0 25px 0)', // optionally hide bottom border, use with timezoneText
// };
// const userTimezone =
//   Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Chicago";
// const wkst = 1;
// const bgcolor = "%23ffffff"; // 333333
// const color = "%2333B679";
// const ctz = encodeURI(userTimezone);
// const showTz = 1;
// const showPrint = 0;
// const showCalendars = 0;
// const showTitle = 0;
// const src = "cGFzc2VuZ2VybG91bmdlQGdtYWlsLmNvbQ";
// const url = "https://calendar.google.com/calendar/embed?";
// const largeCalendar = `${url}wkst=${wkst}&bgcolor=${bgcolor}&ctz=${ctz}&showTz=${showTz}&showPrint=${showPrint}&showCalendars=${showCalendars}&showTitle=${showTitle}&src=${src}&color=${color}`;
// const smallCalendar = `${largeCalendar}&mode=AGENDA`;
// // const timezoneText = <p class="calendar-timezone"> Events displayed in timezone: {userTimezone}.</p>

// const Calendar = () => (
//   <>
//     <div className="responsive-iframe-container big-container">
//       <iframe
//         src={largeCalendar}
//         style={style}
//         width="100%"
//         height="650"
//         frameBorder="0"
//         scrolling="no"
//         title="calendar-desktop"
//       ></iframe>
//     </div>
//     <div className="responsive-iframe-container small-container">
//       <iframe
//         src={smallCalendar}
//         style={style}
//         width="100%"
//         height="800"
//         frameBorder="0"
//         scrolling="no"
//         title="calendar-mobile"
//       ></iframe>
//     </div>
//   </>
// );

// export default Calendar;

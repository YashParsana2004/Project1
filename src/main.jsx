import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateABC from './lec29_12/statemanagement1'
//import Timetable from './lec24_12/timetale'
//import TimetableComp from './lec24_12/timetale'
// import Component1 from './lec24_12/component1'
// import HtmlComponent from './lec24_12/htmlcomp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1/> */}
    {/* <HtmlComponent/> */}
    {/* <TimetableComp/> */}
    <StateABC/>
  </StrictMode>,
)

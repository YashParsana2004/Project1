import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Component1 from './lec24_12/component1'
import HtmlComponent from './lec24_12/htmlcomp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1/> */}
    <HtmlComponent/>
  </StrictMode>,
)

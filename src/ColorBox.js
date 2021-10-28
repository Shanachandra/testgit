//named export
export function ColorBox({color})
{
  const styles={height:"75px", width:"150px",background:color,margin:"10px 0px"};
  return <div style={styles}></div>
}//preferred in js import {colorbox} from './colorbox.js'

// //or
//  function ColorBox({color})
// {
//   const styles={height:"75px", width:"150px",background:color,margin:"10px 0px"};
//   return <div style={styles}></div>
// }
// export default ColorBox  //in js import colorbox from './colorbox.js'

// function check()
// {

// }

// export {ColorBox,check} //in js import {colorbox,check} from '.colorbox.js'
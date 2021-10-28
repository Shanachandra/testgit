import { useState } from 'react';
import Button from '@mui/material/Button';
import { ColorBox } from './ColorBox';

export function ColorList() {
  const [color, setColor] = useState("orange");
  const styles = { backgroundColor: color, color: "black" };
  const inital_colors = ["crimson", "orange", "skyblue", "pink"];
  const [colors, setcolors] = useState(inital_colors);

  return (
    <div>
      <input
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color"
        value={color}
        style={styles} />
      <Button variant="text">Text</Button>
      <button onClick={() => setcolors([...colors, color])}>Add Color</button>
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );


}

import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState("grey");
  const styles = { backgroundColor: color };
  const [colors, setColors] = useState(["teal", "orange", "yellow"]);
  return (
    <div className="add-color-form">

      <TextField value={color} onChange={(event) => setColor(event.target.value)}
        style={styles} id="standard-basic" label="Enter a color" variant="standard" />

      <Button onClick={() => setColors([...colors, color])} variant="outlined">Add color</Button>
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}

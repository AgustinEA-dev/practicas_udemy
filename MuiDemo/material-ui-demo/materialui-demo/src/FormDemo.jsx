import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function FormDemo() {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState(50);
  const updateName = (e) => {
    setName(e.target.value);
  };
  const changeVolume = (e, newVal) => {
    setVolume(newVal);
  };
  return (
    <Box sx={{ p: 4, border: "2px solid purple" }}>
      <h1>Name is: {name}</h1>
      <TextField
        id="outlined-basic"
        placeholder="Enter name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={updateName}
      />
      <h2>Volume: {volume}</h2>
      <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
      <Button variant="contained" href="https://integrador-1-ruby.vercel.app/">
        Link
      </Button>
    </Box>
  );
}

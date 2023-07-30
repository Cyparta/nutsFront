import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState("Ship");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            border: "1px solid #90B400",
            padding: "10px 18px",
            borderRadius: "5px",
            mb:"19px"
          }}
        >
          <FormControlLabel value="Ship" control={<Radio />} label="Ship" />
        </Box>
        <Box
          sx={{
            border: "1px solid #000",
            padding: "10px 18px",
            borderRadius: "5px",
          }}
        >
          <FormControlLabel value="Pick up" control={<Radio />} label="Pick up" />
        </Box>
      </RadioGroup>
    </FormControl>
  );
}

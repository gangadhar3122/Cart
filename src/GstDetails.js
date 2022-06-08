import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React from "react";

const GstDetails = () => {
  const [state, setState] = React.useState({
    value: false,
  });

  const handleChange = (e) => {
    setState({ value: e.target.checked });
  };
  return (
    <Container  maxWidth="sm">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.value}
              onChange={handleChange}
              name="Value"
            />
          }
          label="GST Details"
        />
      </FormGroup>
      {state.value !== false && (
        <TextField
          xs={12}
          placeholder="Enter GST Number "
          label="Enter GST Number"
          variant="standard"
          fullWidth
          required
        />
      )}
    </Container>
  );
};

export default GstDetails;

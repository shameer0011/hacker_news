import React from "react";
import Select from "../ui/select/select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
const selectComponent = ({ values, sizes }) => {
  return (
    <div>
      <FormControl>
        <Select values={values} />
        <FormHelperText>{sizes}</FormHelperText>
      </FormControl>
    </div>
  );
};
export default selectComponent;

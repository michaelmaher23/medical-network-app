import React from "react";
import { Box, Paper } from "@mui/material";
import { styles } from "../common/styles";
import { renderText } from "../common/DisplayComponent";
import Frame10 from "./Frame10.svg"
const FinalStep = ({ state }) => {
  return (<>
   {/*  <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Your Submitted Data",
          type: "h6",
         
          align: "center",
        })}
      </Box>
      {JSON.stringify(state.data, null, 99)}
      
    </Paper>*/}
   </>
  );
};

export default FinalStep;

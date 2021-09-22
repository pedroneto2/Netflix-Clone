import "./Question.css";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import PropTypes from "prop-types"; // storybook dependency

const Question = ({ bgColor, textColor, detailText, summaryText }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <React.Fragment>
      <Accordion onChange={() => setExpanded(!expanded)}>
        <AccordionSummary
          expandIcon={
            expanded ? (
              <AddIcon style={{ color: textColor }} />
            ) : (
              <CloseIcon style={{ color: textColor }} />
            )
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
        >
          <Typography>{summaryText}</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
        >
          {detailText.map((text, index) => (
            <Typography paragraph={detailText[index + 1]} key={index}>
              {text}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};

export default Question;

//STORY BOOK SETTINGS----------------------
Question.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  detailText: PropTypes.arrayOf(PropTypes.string),
  summaryText: PropTypes.string,
};

Question.defaultProps = {
  bgColor: "grey",
  textColor: "white",
  summaryText: "Is this a frequently asked question?",
  detailText: [
    "This is the first paragraph answear.",
    "This is the second paragraph answear.",
    "Finally, this is the last paragraph answear.",
  ],
};

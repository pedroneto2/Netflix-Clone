import "./FAQ.css";

import Question from "../Question/Question";
import GetStarted from "../GetStarted/GetStarted";

const renderQuestions = (questionsText) => {
  if (!questionsText) {
    return;
  }
  return questionsText.map((question, index) => (
    <Question
      key={index}
      bgColor="#303030"
      textColor="white"
      summaryText={question.summaryText}
      detailText={question.detailText}
    />
  ));
};

const FAQ = ({
  borderColor,
  FAQText,
  getStartedBtn,
  getStartedText,
  textColor,
  buttonBgColor,
}) => {
  return (
    <div className="FAQ-container" style={{ borderColor: borderColor }}>
      <h2>{FAQText.title}</h2>
      <div className="questions-container">
        {renderQuestions(FAQText.questions)}
      </div>
      <div className="get-started-container">
        <GetStarted
          getStartedBtn={getStartedBtn}
          getStartedText={getStartedText}
          textColor={textColor}
          buttonBgColor={buttonBgColor}
        />
      </div>
    </div>
  );
};

export default FAQ;

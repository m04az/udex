import React from "react";
import ReactDOM from "react-dom";

class CritiqueButtons extends React.Component {
  handleExpand() {
    const radioButtons = document.querySelectorAll('input[value="passed"]');
    radioButtons.forEach(button => {
      button.click();
    });
  }
  handleSubmit() {
    const submitButtons = document.querySelectorAll(
      'button[busy-click="_submit()"]'
    );
    submitButtons.forEach(button => {
      button.click();
    });
    // Save the general comment as well
    const generalCommentButton = document.querySelector(
      'button[busy-click="saveGeneralComment()"]'
    );
    generalCommentButton.click();
  }
  render() {
    return (
      <React.Fragment>
        <div className="udex-container">
          <div className="critique-container">
            <h4 className="h-slim">UDEX Chrome Extension Actions</h4>
            <div className="row row-buttons">
              <div className="col-xs-12">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => this.handleExpand()}
                >
                  Mark All Passed
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-submit-all"
                  onClick={() => this.handleSubmit()}
                >
                  Submit All Open
                </button>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .udex-container {
            margin-bottom: 20px;
          }
          .critique-container {
            padding: 10px;
          }
          .h-slim {
            margin-bottom: 5px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default CritiqueButtons;

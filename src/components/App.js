import React from "react";
import NewOption from "./NewOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import PopupModal from "./PopupModal";

class App extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    title: "Decide For Me",
    modalActive: false,
  };

  closeModalHandler = () => {
    this.setState(() => ({ modalActive: false }));
  };

  resetSelectedOptionHandler = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  addOptionHandler = (option) => {
    if (!option) {
      return "please enter a valid option";
    } else if (this.state.options.indexOf(option) !== -1) {
      return "option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  removeAllOptionsHandler = () => {
    this.state.options.length > 0 && this.setState(() => ({ options: [] }));
  };

  removeOptionHandler = (index) => {
    this.setState((prevState) => ({
      options: prevState.options
        .slice(0, index)
        .concat(prevState.options.slice(index + 1)),
    }));
  };

  actionHandler = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const randomPick = this.state.options[randomIndex];

    this.setState(() => ({ selectedOption: randomPick, modalActive: true }));
  };

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      options.length > 0 && this.setState(() => ({ options }));
    } catch (e) {
      // Do Nothing
    }
  }

  componentDidUpdate() {
    const options = JSON.stringify(this.state.options);
    localStorage.setItem("options", options);
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            actionHandler={this.actionHandler}
          />
          <Options
            options={this.state.options}
            removeAllOptionsHandler={this.removeAllOptionsHandler}
            removeOptionHandler={this.removeOptionHandler}
          />
          <NewOption addOptionHandler={this.addOptionHandler} />
          <PopupModal
            active={this.state.modalActive}
            modalOff={this.closeModalHandler}
            decision={this.state.selectedOption}
          />
        </div>
      </div>
    );
  }
}

export default App;

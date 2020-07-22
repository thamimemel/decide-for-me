import React from "react";

class NewOption extends React.Component {
  state = {
    error: undefined,
  };
  newOptionHandler = (e) => {
    e.preventDefault();

    const newOption = document.getElementById("newOptionInput").value.trim();
    const error = this.props.addOptionHandler(newOption);

    this.setState(() => ({ error }));

    if (!error) {
      document.getElementById("newOptionInput").value = "";
    }
  };
  render() {
    return (
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new option"
            aria-label="Add a new option"
            aria-describedby="addoption"
            id="newOptionInput"
          ></input>
          <div className="input-group-append">
            <button
              onClick={this.newOptionHandler}
              className="btn btn-primary shadow-none"
              type="submit"
              id="addoption"
            >
              Add Option
            </button>
          </div>
        </div>
        {this.state.error && <p className="text-danger">{this.state.error}</p>}
      </form>

      /*
      <form onSubmit={this.newOptionHandler}>
        <input type="text" name="newOption" />
        <button>Add option</button>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
      </form>
      */
    );
  }
}

export default NewOption;

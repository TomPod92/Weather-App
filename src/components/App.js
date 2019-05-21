import React from "react";
import Header from "./Header.js";
import SidePanel from "./SidePanel.js";
import Overlay from "./Overlay.js";

class App extends React.Component {
  state = {
    sidePanelOpen: false
  };

  handleOpenSidePanel = () => {
    this.setState(prevState => ({
      sidePanelOpen: !prevState.sidePanelOpen
    }));
  };
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Header handleOpenSidePanel={this.handleOpenSidePanel} />

        <SidePanel
          active={this.state.sidePanelOpen}
          handleOpenSidePanel={this.handleOpenSidePanel}
        />

        {/* {this.state.sidePanelOpen && (
          <Overlay
            active={this.state.sidePanelOpen}
            handleOpenSidePanel={this.handleOpenSidePanel}
          />
        )} */}

        <Overlay
          active={this.state.sidePanelOpen}
          handleOpenSidePanel={this.handleOpenSidePanel}
        />
      </div>
    );
  }
}

export default App;

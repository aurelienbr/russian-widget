import React from "react";

class HeaderWidget extends React.Component {
  render() {
    return (
      <header style={styles.container}>
        <h1>Markets</h1>
      </header>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flex: 1
  }
};

export default HeaderWidget;

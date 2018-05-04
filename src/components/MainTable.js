import React from "react";
import RowCurrency from "./RowCurrency";

class MainTable extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div style={styles.container}>
        {data.map(data => <RowCurrency data={data} />)}
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    border: "1px solid #95a5a6",
    display: "flex",
    flexDirection: "column",
    flex: 4,
    overflowY: "scroll"
  }
};

export default MainTable;

import React from "react";
import RowCurrency from "./RowCurrency";
import HeaderTable from "./HeaderTable";

class MainTable extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div style={styles.container}>
        <HeaderTable />
        {data.map(data => <RowCurrency data={data} />)}
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%"
  }
};

export default MainTable;

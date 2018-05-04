import React from "react";
import RowCurrency from "./RowCurrency";

class MainTable extends React.Component {
  render() {
    const { data, addFavorite, deleteFavorite, renderFav } = this.props;

    if (renderFav) {
      return (
        <div style={styles.container}>
          {data.map(data => {
            if (data.favorite) {
              return (
                <RowCurrency
                  addFavorite={addFavorite}
                  deleteFavorite={deleteFavorite}
                  data={data}
                />
              );
            }
          })}
        </div>
      );
    }
    return (
      <div style={styles.container}>
        {data.map(data => (
          <RowCurrency
            addFavorite={addFavorite}
            deleteFavorite={deleteFavorite}
            data={data}
          />
        ))}
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

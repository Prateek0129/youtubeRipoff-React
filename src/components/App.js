import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends React.Component {
  onSearch = async term => {
    try {
      youtube.get("/search");
      
      const data = await youtube.get("/search", {
        params: {
          q: term
        }
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearch} />
      </div>
    );
  }
}

export default App;

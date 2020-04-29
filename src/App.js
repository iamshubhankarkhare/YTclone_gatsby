import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoList, VideoDetail } from "./components";
import youtube from "./api/YtApi";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const res = await youtube.get("search", {
      params: {
        part: "snippet",
        key: "AIzaSyDkjQSmIkKyfJypQGpKFBRDkzRXIkB7qFA",
        q: searchTerm,
      },
    });
    console.log(res.data.items);
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  };

  return (
    <div>
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <SearchBar onSubmit={handleSubmit}></SearchBar>
        </Grid>
        <Grid item xs={8}>
          <VideoDetail video={selectedVideo}></VideoDetail>
        </Grid>
        <Grid item xs={4}>
          <VideoList
            videos={videos}
            onVideoSelect={setSelectedVideo}
          ></VideoList>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

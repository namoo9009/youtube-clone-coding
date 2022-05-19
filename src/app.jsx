import { useEffect, useState } from 'react';
import styles from './App.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const onSearch = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=AIzaSyDHvS-srHT9vTvyemSwgULDK94NJwply1M`, 
      requestOptions
    )
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyDHvS-srHT9vTvyemSwgULDK94NJwply1M", 
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;

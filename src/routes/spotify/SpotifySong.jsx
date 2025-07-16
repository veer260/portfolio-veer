import React from 'react';
    import useSWR from 'swr';
    import styles from './SpotifySong.module.css';
import Heading from '../../components/Heading/Heading';





  async function fetcher(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error(res.statusText);
    error.status = res.status;
    throw error;
  }
  return res.json();
}




const song = {
  album: "Love Like This",
  albumImageUrl: "https://i.scdn.co/image/ab67616d0000b27381f97190f6fc196ee0d697c1",
  artist: "ZAYN",
  isPlaying: true,
  songUrl: "https://open.spotify.com/track/3P9pRL7V9yM9DhY6NGZjzA",
  title: "Love Like This"
}



function SpotifySong() {

 
  const { data, error, isLoading } = useSWR('https://portfolio-backend-sqog.onrender.com/spotify/playing', fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
      refreshInterval: 1000*60*2 
    // optional: keep the deduping window big enough so the request will never be sent again
    // dedupingInterval: 24 * 60 * 60 * 1000, // 1 day
  })
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>
    <Heading level={1} style={{marginTop: '0px', color: `var(--gray-1200)`, fontSize: "1.1rem"}}>LOADING......</Heading>
  </div>
  if(!data.isPlaying){
    return <div className={styles.songWrapper}>
      <Heading level={1} style={{marginTop: '0px', color: `var(--gray-1200)`, fontSize: "1.1rem"}}>Veer is Offline(Spotify)</Heading>

    </div>
  }
  return (<div className={styles.songWrapper}  style={{...styles}} >

    <div className={styles.songImageWrapper}>

      <img src={data.albumImageUrl} alt="" />
    </div>
    <div className={styles.songMetadata}>
        <Heading level={1} style={{marginTop: '0px', color: `var(--gray-1200)`, fontSize: "1.1rem"}}>{data.title}</Heading>
        <Heading level={3} style={{marginTop: "0px", color: `var(--gray-1100)`, fontSize: "0.9rem"}} >{data.artist}</Heading>

    </div>
     
       
      
    </div>)


}

export default SpotifySong

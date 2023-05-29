async function getNowPlaying() {
    const response = await fetch('https://spotifymd.notcoderguy.com/api/spotify');
    const data = await response.json();
    return data;
}

export { getNowPlaying };
async function getNowPlaying() {
    const response = await fetch('https://api.spotifyx.notcoderguy.com/');
    const data = await response.json();
    return data;
}

export { getNowPlaying };
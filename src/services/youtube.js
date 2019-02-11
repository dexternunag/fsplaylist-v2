import axios from 'axios'

const YOUTUBE_SEARCH = 'https://www.googleapis.com/youtube/v3/search';
const YT_KEY = 'AIzaSyBvZUJRL2kqjL53k_OFiLxeVRMzJKUUajg';

function search(q, pageToken) {
  return new Promise(async (resolve, reject) => {
    try {
      const YT_DATA = {
        key: YT_KEY,
        part: 'snippet',
        maxResults: 30,
        order: 'relevance',
        type: 'video',
        pageToken,
        q
      }
      
      const { data: { prevPageToken, nextPageToken, items } } = await axios.get(YOUTUBE_SEARCH, {params : YT_DATA})

      const newItems = items.map(({ id, snippet }, i) => ({
        id: id.videoId,
        thumbnail: snippet.thumbnails.medium.url,
        title: snippet.title
      }))

      // await newItems.forEach(async ({ id }) => {
      //   const { items } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${YT_KEY}&part=snippet,contentDetails,statistics,status`)
      //   let duration = items[0].duration.replace('PT', '')
      // })

      resolve({
        prevPageToken,
        nextPageToken,
        items: newItems
      })

    } catch (error) {
      reject(error)
    }
  })
}

export { search }
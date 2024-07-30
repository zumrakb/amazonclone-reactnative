import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'vcqRgp3Q41i43a785eGaNnNQkXOzEZf8g_Y3eu-iqh8';

const fetchImagesForCategory = async category => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: category,
        per_page: 20,
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching images from Unsplash', error);
    return [];
  }
};

export default fetchImagesForCategory;

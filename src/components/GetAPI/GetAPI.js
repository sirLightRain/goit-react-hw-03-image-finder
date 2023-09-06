import axios from 'axios';

// 38440649-adbc72164fad22e06504da38e - мій ключ з ресурсу

export const GetImg = (searchQuery, page) => {
  const response = axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=38440649-adbc72164fad22e06504da38e&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};

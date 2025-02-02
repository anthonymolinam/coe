// /services/blogService.ts
const API_URL = 'http://localhost:1337/api/blogs?populate=*';

interface ImageData {
  url: string;
}

export interface BlogPost {
  id: number;
  title: string;
  desc: string;
  createdAt: string;
  cat: string;
  image: ImageData[];
}

interface ApiResponse {
  data: BlogPost[];
}

// Función que obtiene los posts con paginación limitada
export const getLatestPosts = async (limit = 3): Promise<BlogPost[]> => {
  try {
    const response = await fetch(`${API_URL}&pagination[page]=1&pagination[pageSize]=${limit}`);
    const data: ApiResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

// Nueva función para obtener todos los posts sin paginación
export const getAllPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(`${API_URL}`);
    const data: ApiResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }
};

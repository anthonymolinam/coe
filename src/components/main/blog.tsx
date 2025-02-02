// /pages/blog.tsx
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getLatestPosts, BlogPost } from '@/utils/blogs';
import SkeletonPost from '@/components/main/skeletonPost'; // Importar el Skeleton Loader

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]); // Inicialmente vacío para simular la carga
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchPosts = async () => {
      const latestPosts = await getLatestPosts();
      setPosts(latestPosts);
      setLoading(false); // Cambiar a false cuando termine de cargar
    };
  
    fetchPosts();
  }, []);
  

  return (
    <section className='section'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-[50px] text-center xl:text-left'>últimos artículos</h2>
        <div className="flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-[50px]">
          {loading ? (
            // Mostrar Skeleton Loader mientras se carga
            Array(3).fill(0).map((_, index) => <SkeletonPost key={index} />)
          ) : (
            // Mostrar los posts reales
            posts.map((post) => (
              <div
                className="max-w-[420px] max-h-[515px] shadow-custom2 rounded-[10px] overflow-hidden"
                key={post.id}
              >
                {/* Imagen */}
                <div className="relative overflow-hidden">
                  <Image
                    src={`http://localhost:1337${post.image[0].url}`}
                    width={420}
                    height={250}
                    alt='Blog image'
                  />
                  {/* Badge */}
                  <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                    {post.cat}
                  </div>
                </div>
                {/* Texto */}
                <div className="px-5 py-6">
                  {/* Fecha */}
                  <div className="mb-4">
                    {new Intl.DateTimeFormat("es-ES", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                      .format(new Date(post.createdAt))
                      .replace(/(\d{1,2}) (\w{3}) (\d{4})/, (_, day, month, year) =>
                        `${month.slice(0, 1).toUpperCase()}${month.slice(1)} ${day}, ${year}`
                      )}
                  </div>
                  {/* Título */}
                  <h4 className="h4 mb-[10px]">{post.title}</h4>
                  {/* Descripción */}
                  <p className="font-light">
                    {post.desc.length > 100
                      ? `${post.desc.slice(0, 100)}...`
                      : post.desc}
                    {" "}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;

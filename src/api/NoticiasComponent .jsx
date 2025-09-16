import React, { useState, useEffect } from 'react'
import axios from 'axios'

const NoticiasAPI = () => {
  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNoticias = async () => {
      const options = {
        method: 'GET',
        url: 'https://newsapi.org/v2/everything',
        params: {
          q: 'futebol',
          language: 'pt',
          apiKey: '2fd63faf57c3431d87eed681ad2d3572'
        }
      }

      try {
        const response = await axios.request(options)
        const articles = response.data.articles
        
    
        const uniqueArticlesMap = new Map();
        articles.forEach(article => {
          if (article.url && !uniqueArticlesMap.has(article.url)) {
            uniqueArticlesMap.set(article.url, article);
          }
        })

      
        const uniqueArticles = Array.from(uniqueArticlesMap.values()).slice(0, 3)
        setNoticias(uniqueArticles)

      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchNoticias();
  }, [])

  if (loading) {
    return <div className="text-center p-4">Carregando notícias...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">Ocorreu um erro ao carregar as notícias. Tente novamente mais tarde.</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      {noticias.map((noticia, index) => (
        <a 
          key={index}
          href={noticia.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img 
            src={noticia.urlToImage} 
            alt={noticia.title} 
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{noticia.title}</h2>
            <p className="text-gray-600 text-sm">{new Date(noticia.publishedAt).toLocaleDateString()}</p>
            <p className="text-gray-800 mt-2">{noticia.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
export default NoticiasAPI;
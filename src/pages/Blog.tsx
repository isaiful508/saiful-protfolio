import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, MessageCircle, Heart } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring upcoming trends in web development, from AI integration to new frameworks and tools that will shape the future of web development.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Technology",
    comments: 12,
    likes: 45,
    author: {
      name: "John Doe",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 2,
    title: "Mastering React Performance Optimization",
    excerpt: "Learn advanced techniques to improve your React application's performance, from code splitting to memoization and virtual DOM optimization.",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "React",
    comments: 8,
    likes: 32,
    author: {
      name: "Jane Smith",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    id: 3,
    title: "Building Accessible Web Applications",
    excerpt: "A comprehensive guide to making your web applications accessible to everyone, including best practices and common pitfalls to avoid.",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Accessibility",
    comments: 15,
    likes: 53,
    author: {
      name: "Mike Johnson",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  }
];

const Blog: React.FC = () => {
  return (
    <section className="section pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Latest Blog Posts</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Insights and tutorials about web development, design, and technology
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{post.author.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </div>
                  </div>
                  
                  <button className="flex items-center text-blue-500 font-medium group-hover:text-blue-600 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
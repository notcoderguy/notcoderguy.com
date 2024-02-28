import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Blog() {
    const navigate = useNavigate();

    const [lastNavigationTime, setLastNavigationTime] = useState(0);
  const navigationCooldown = 1000; 
    const [blogposts, setBlogposts] = useState([]);

    useEffect(() => {
        document.title = "Blog | NotCoderGuy";
    }, []);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch(
                    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@notcoderguy"
                );
                const data = await response.json();
                const items = data.items || [];
                setBlogposts(items);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            }
        };
        fetchBlogPosts();
    }, []);

    useEffect(() => {
        let scrollIntensity = 0;
    
        const handleWheel = (event) => {
          const now = Date.now();
          if (now - lastNavigationTime < navigationCooldown) return;
    
          scrollIntensity += Math.abs(event.deltaY);
    
          // Check if scroll intensity exceeds a certain threshold before navigating
          if (scrollIntensity > 300) { // Threshold value can be adjusted
            if (event.deltaY > 0) {
              navigate('/projects');
            } else {
              navigate('/');
            }
            setLastNavigationTime(now);
            scrollIntensity = 0; // Reset scroll intensity after navigation
          }
        };
    
        window.addEventListener('wheel', handleWheel, { passive: false });
    
        return () => {
          window.removeEventListener('wheel', handleWheel);
        };
      }, [navigate, lastNavigationTime]);
    
    return (
        <div>
            <div className="grid grid-cols-1 gap-2 mt-2 mb-2">
                <div className="bg-base-200 rounded-3xl transform transition duration-500 ease-in-out">
                    <div className="flex flex-col items-center p-8">
                        <div className="items-start justify-start pb-5">
                            <p className="text-2xl font-semibold text-white">Blog</p>
                        </div>
                        <div className="space-y-2 text-md text-gray-400 mb-1">
                            {blogposts.map((post) => (
                                <div key={post.guid}>
                                    <a href={post.link} target="_blank" rel="noreferrer noopener" className="hover:text-primary-content font-semibold transition duration-500 ease-in-out">
                                        {post.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
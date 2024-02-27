import React, { useEffect, useState } from 'react'

function Blog() {
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
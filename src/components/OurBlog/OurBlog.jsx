import { useEffect, useState } from "react";
import { database, ref, onValue } from "../../services/Firebase/Firebase.js";
import './OurBlog.css'

function OurBlog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const blogsRef = ref(database, "blogs");
        
        onValue(blogsRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const blogList = Object.values(data);
                setBlogs(blogList);
            } else {
                setBlogs([]);
            }
        });
    }, []);
    return (
        <>
            <div className="main_our_blog">
                {/* <div className="target_blog">
                    <h2>Title Of the Blog</h2>
                    <h3>By Hani Rashid</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Culpa error voluptate magnam dignissimos beatae alias laborum deleniti omnis tempora corporis explicabo dolores quibusd
                         am assumenda obcaecati quam perspiciatis amet, 
                         voluptas nam adipisci! Alias, eligendi unde dolorum, iste distinctio iusto illum cupiditate repellat quasi
                        , nihil est commodi! A tenetur officiis at quos.</p>
                </div> */}
                {blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                        <div className="target_blog" key={index}>
                            <h2>{blog.title}</h2>
                            <h3>By {blog.editorName}</h3>
                            <p>{blog.content}</p>
                        </div>
                    ))
                ) : (
                    <p>No blogs available.</p>
                )}
            </div>
        </>
    )
}

export default OurBlog
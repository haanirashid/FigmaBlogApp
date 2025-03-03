import { useState } from "react";
import { database, ref, push, set } from "../../services/Firebase/Firebase.js";
import Swal from 'sweetalert2'
import './BlogForm.css'


function BlogForm() {
    const [formData, setFormData] = useState({
        editorName: "",
        title: "",
        content: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.editorName || !formData.title || !formData.content) {
            Swal.fire({
                title: 'Error!',
                text: 'All fields are required!',
                icon: 'error',
                confirmButtonText: 'Try Again'
              });
            return;
        }

        try {
            const blogRef = push(ref(database, "blogs"));
            await set(blogRef, formData);
            Swal.fire({
                title: 'Success!',
                text: 'Blog saved successfully!',
                icon: 'success',
                confirmButtonText: 'Next'
              });
            setFormData({ editorName: "", title: "", content: "" });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text:"Error saving blog: " + error.message,
                icon: 'error',
                confirmButtonText: 'Try Again'
              });
        }



    };
    return (
        <>
            <div className="main_blog_form">
                <form onSubmit={handleSubmit}>
                    <input type="text" id='editorName' name='editorName' value={formData.editorName} onChange={handleChange} placeholder='Editor Name' />
                    <input type="text" id='title' name='title' value={formData.title} onChange={handleChange} placeholder='Title of Blog' />
                    <textarea name="content" id="content" value={formData.content} onChange={handleChange} placeholder='Write your Ideas'></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default BlogForm
import React, { useState } from "react";
import './Form.css';

export const Form = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Simple front-end validation
        if (title.trim() === '' || content.trim() === '') {
            setError("Both title and content are required.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://siddhantrkokate.tech/hiddenhive/post.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, content })
            });

            const json = await response.json();
            console.log(json); // Log the full server response

            if (!response.ok || json.error) {
                setError(json.error || `Something went wrong (status ${response.status})`);
            } else {
                setSuccess(json.message || 'Post created successfully!');
                setTitle('');
                setContent('');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="FormContainer">
            <div className="Heading">Create New Topics, For Discussion!</div>
            <form onSubmit={handleSubmit} className="formContainer">
                <input 
                    type="text" 
                    className="inputBox" 
                    placeholder="Enter Heading or Title here.." 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <textarea 
                    className="detailContent" 
                    placeholder="Express your thoughts.." 
                    rows={10} 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                />
                <button className="submit" type="submit" disabled={loading}>
                    {loading ? 'Posting... Checking with AI!' : 'Post'}
                </button>
                <br />
                {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
                {success && <div style={{ color: 'green', marginTop: '10px' }}>{success}</div>}
            </form>
        </div>
    );
};

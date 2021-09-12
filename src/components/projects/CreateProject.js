import { useState } from "react";

const CreateProject = () => {

    const [title,setTitle] = useState('');
    // const [author, setAuthor] = useState('');
    const [aboutProject, setAboutProject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectDetails = {
            title,
            aboutProject
        }
        
    }

    return ( 
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">
                    Add Project
                </h5>

                <div className="input-field">
                    <label htmlFor="title">Project Title</label>
                    <input type="text" 
                        value={title} 
                        id="title" 
                        required
                        onChange={e => setTitle(e.target.value)}
                    />

                </div>
                <div className="input-field">
                    <label htmlFor="about">About Project</label>
                    <textarea id="about" 
                        value={aboutProject} 
                        onChange={e => setAboutProject(e.target.value)}
                        required
                        className="materialize-textarea"></textarea>
                </div>
                {/* <div className="input-field">
                    <label htmlFor="author">Author Name</label>
                    <input type="text" 
                         id="author"
                         value={author}
                         required
                         onChange={e => setAuthor(e.target.value)}
                    />
                </div> */}
                <button className="btn pink lighten-1 z-depth-0">
                    ADD Project
                </button>
            </form>
        </div>
     );
}
 
export default CreateProject;
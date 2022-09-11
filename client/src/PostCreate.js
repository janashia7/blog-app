import axios from 'axios';
import { useState } from 'react';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://posts.com/posts/create', {
      title,
    });
    setTitle('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default PostCreate;

// components/TagCompleter.js
import { useState } from 'react';
import Sounddropdown from './sounddropdown/page'

const TagCompleter = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='main_tag_cont'>
      <div className='voice_change'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter a tag"
        className='input_tag'
        />
        <p> Replace with </p>
        <Sounddropdown/>
        </div>
      <div className='tag_cont'>
        {tags.map((tag, index) => (
          <span key={index} className='input_word'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagCompleter;

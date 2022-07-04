import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const config = {
  allowResizeX: true,
  allowResizeY: true,
  width: '100%',
  height: 400,
  // placeholder: 'test',
  // buttons: ['bold', 'italic', 'link', 'unlink', 'underline', 'source'],
};

const RichTextEditor = ({ initialValue, getValue }) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={initialValue}
      config={config}
      tabIndex={1}
      className="prose"
      height="20"
      //   onBlur={(newContent) => getValue(newContent)}
      onChange={(newContent) => getValue(newContent)}
    />
  );
};

export default RichTextEditor;

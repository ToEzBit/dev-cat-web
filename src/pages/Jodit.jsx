import React, { useState } from 'react';
import RichTextEditor from '../components/jodit/JoditDraft';

function Jodit() {
  const [jodit, Setjodi] = useState('');
  return (
    <div className="prose max-w-none">
      <RichTextEditor initialValue="" getValue={Setjodi}></RichTextEditor>

      <td dangerouslySetInnerHTML={{ __html: jodit }}></td>
    </div>
  );
}

export default Jodit;

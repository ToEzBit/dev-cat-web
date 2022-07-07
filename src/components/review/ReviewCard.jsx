import { useState } from 'react';
import ReviewCardReadOnly from './ReviewCardReadOnly';
import ReviewCardEditMode from './ReviewCardEditMode';

export default function ReviewCard({
  userId,
  id,
  name,
  message,
  rate,
  isAnonymous,
  setProductByIDRender,
}) {
  const [isReadOnlyMode, setIsReadOnlyMode] = useState(true);
  const anonymousName = (name) => {
    const myRegEx = /[a-zA-Z0-9]/g;
    return name.replaceAll(myRegEx, '*');
  };

  return (
    <div className="card card-compact h-30 w-full bg-base-100 shadow-xl px-6 py-4">
      <div className="card-body">
        {isReadOnlyMode ? (
          <ReviewCardReadOnly
            userId={userId}
            id={id}
            name={name}
            message={message}
            rate={rate}
            isAnonymous={isAnonymous}
            setIsReadOnlyMode={setIsReadOnlyMode}
            isReadOnlyMode={isReadOnlyMode}
            anonymousName={anonymousName}
            setProductByIDRender={setProductByIDRender}
          />
        ) : (
          <ReviewCardEditMode
            id={id}
            name={name}
            message={message}
            rate={rate}
            setProductByIDRender={setProductByIDRender}
            isAnonymous={isAnonymous}
            setIsReadOnlyMode={setIsReadOnlyMode}
            anonymousName={anonymousName}
          />
        )}
      </div>
    </div>
  );
}

import React from 'react';

export default function Pagination() {
  return (
    <div className="btn-group btn-ghost my-8 mx-auto">
      <button className="btn btn-ghost">{'<<'}</button>

      <button className="btn btn-ghost">{'<'}</button>

      <button className="btn btn-ghost">1</button>
      <button className="btn btn-ghost text-text-btn">2</button>
      <button className="btn btn-ghost">3</button>
      <button className="btn btn-ghost">4</button>
      <button className="btn btn-ghost">{'>'}</button>
      <button className="btn btn-ghost">{'>>'}</button>
    </div>
  );
}

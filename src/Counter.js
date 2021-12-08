import { useState } from 'react';

//two types of import and export
//1. named import and export - this is latest
//2. default import and export

 function Counter() {

    const [like, setLike] = useState(0);
    const [dislike, setdisLike] = useState(0);
    return (
      <div className="counter-container">
        <button className="like-dislike" onClick={() => setLike(like + 1)}>👍 {like}</button>
        {/*<p>{like}</p>*/}
        <button className="like-dislike" onClick={() => setdisLike(dislike - 1)}>👎 {dislike}</button>
        {/*<p>{dislike}</p>*/}
      </div>
    );
  }

  export { Counter }
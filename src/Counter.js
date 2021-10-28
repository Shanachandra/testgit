import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);

  return (
    <div>
      <IconButton onClick={() => setLike(like + 1)} color="primary" aria-label="upload picture" component="span">
        <Badge badgeContent={like} color="primary">👍</Badge>
      </IconButton>

      <IconButton onClick={() => setdisLike(dislike + 1)} color="primary" aria-label="upload picture" component="span">
        <Badge badgeContent={dislike} color="error"> 👎</Badge>
      </IconButton>
      {/* <button onClick={()=>setLike(like+1)}>👍{like}</button>
            <button onClick={()=>setdisLike(dislike+1)}>👎{dislike}</button>       */}
    </div>
  );
}

// Variation 2: Spread and Rest Operators // 2. Step
const List = ({ list }) => ( 
<ul> {list.map((item) => (
     <Item key={item.objectID} {...item} />
      ))} 
   </ul> 
);

const Item = ({ title, url, author, num_comments, points }) => (
     <li> <span> <a href={url}>{title}</a> 
     </span> 
     <span>{author}</span>
     <span>{num_comments}</span> 
     <span>{points}</span> 
     </li> 
);
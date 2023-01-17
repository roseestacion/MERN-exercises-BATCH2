// Variation 2: Spread and Rest Operators // Final Step
const List = ({ list }) => (
     <ul> 
        {list.map(({ objectID, ...item }) => (
             <Item key={objectID} {...item} /> 
        ))} 
    </ul> 
);

const Item = ({ title, url, author, num_comments, points }) => ( 
<li> 
    <span> 
        <a href={url}>{title}</a>
         </span>
         <span>{author}</span> 
         <span>{num_comments}</span>
         <span>{points}</span> 
  </li> 
);
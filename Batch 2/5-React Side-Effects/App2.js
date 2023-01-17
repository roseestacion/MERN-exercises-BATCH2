const App = () => {
    ...
    const [searchTerm, setSearchTerm] = React.useState(
         localStorage.getItem('search') || 'React' 
         );

    ... 
);
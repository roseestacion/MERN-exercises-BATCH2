const App = () => { 
    ...

    const [searchTerm, setSearchTerm] = React.useState(
         localStorage.getItem('search') || 'React' 
         );

    React.useEffect(() => {
         localStorage.setItem('search', searchTerm); 
        }, [searchTerm]);

    const handleSearch = (event) => { 
        setSearchTerm(event.target.value); 
    };

   ...
);
const App = () => { 
    const stories = [ ... ];
    // A 
    const handleSearch = (event) => { 
        // C 
        console.log(event.target.value);
     };

    return (
         <div> 
            <h1>My Hacker Stories</h1>

    {/* // B */} 
    <Search onSearch={handleSearch} />

    <hr />
    <List list={stories} /> 
    </div> 
    ); 
};
    
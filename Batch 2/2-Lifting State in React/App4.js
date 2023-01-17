const App = () => { 

    const searchedStories = stories.filter((story) => 
     story.title.toLowerCase().includes(searchTerm.toLowerCase())
     );

};
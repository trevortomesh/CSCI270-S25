import { useState } from 'react';

function Home(){
    return <h2>🏠Home Page</h2>
}

function About(){
    return <h2>ℹ️About Page</h2>
}

function NotFound(){
    return <h2>❌Page Not Found</h2>
}

function App(){
    const [page, setPage] = useState('home');
    const [clicks, setClicks] = useState(0);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        const path = to.replace('/','');
        setPage(path || 'home');
    };

    window.onpopstate = (e) => {
        const path = window.location.pathname.replace('/', '');
        setPage(path || 'home');
    };

    let content;
    if (page === 'home') content = <Home />;
    else if (page === 'about') content = <About />;
    else content = <NotFound />;

    return(
        <div style={{ fontFamily: 'sans-serif' , padding: '2rem'}}>
            <nav>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/about')}>About Page</button>
            </nav>
            <hr />
            {content}
            <div style={{ marginTop: '2rem' }}>
                <p>🖱️Button Clicked: {clicks} times</p>
                <button onClick={() => setClicks(clicks + 1)}>Click Me!</button>
            </div>
        </div>
    );
}

export default App;
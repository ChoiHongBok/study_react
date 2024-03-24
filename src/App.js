import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
    return (
        <Wrapper>
            <Hello name='최홍복' color='red' isSpecial={true} />
            <Hello color='blue' isSpecial /> {/* Default true */}
            <Hello />
        </Wrapper>
    );
}

export default App;

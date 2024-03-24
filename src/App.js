import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from "./Counter";
import InputSample from "./InputSample";

function App() {
    return (
        <div>
            <Wrapper>
                <Hello name='최홍복' color='red' isSpecial={true} />
                <Hello color='blue' isSpecial /> {/* Default true */}
                <Hello />
            </Wrapper>
            <Counter />
            <InputSample />
        </div>
    );
}

export default App;

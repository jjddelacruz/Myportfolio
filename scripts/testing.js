marked.setOptions({
    breaks: true,
  });

const renderer = new marked.Renderer();

function App() {



    return (
    <div className='text-center'> 
        <h1 className='p-4'>My mark down previewer</h1>
                  <input type="text"
                  name='text'
                  id='editor'
                  rows='10'
                  value={text}
                  onChange={ (e) => setText(e.target.value) > 10 }
                  className='textarea'
                  />
                  <h3 className='mt-3'>Output</h3>
                  <Preview markdown={text} className='col'/>
    </div>
          );

}

ReactDOM.render(<App />, document.getElementById('root'));
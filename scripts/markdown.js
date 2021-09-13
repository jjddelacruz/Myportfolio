marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

function App() {

    const [text, setText] = React.useState("");

    return (
    <div className='text-center px-4'> 
                  <h1 className='p-4'>My mark down previewer</h1>
                  <textarea
                  name='text'
                  id='editor'
                  rows='10'
                  value={text}
                  onChange={ (e) => setText(e.target.value) }
                  className='textarea'
                  ></textarea>
                  <h3 className='mt-3'>Output</h3>

                  <Preview markdown={text} className='col'/>
    </div>
          );

    function Preview({markdown}){
        return (
            <div
             dangerouslySetInnerHTML={{
                 __html: marked(markdown, {rendere: renderer} ),
             }}
             id='preview'
            >
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
var NotesList = React.createClass({
    render: function() {
        return(<ol>
        {
            React.Children.map(this.props.children, function(child){
                return <li>{child}</li>;
            })
            }
            </ol>
        );
    }
});

ReactDOM.render(
    <NotesList>
        <span>hello</span>
        <span>hello</span>
    </NotesList>,
    document.getElementById("example")
)
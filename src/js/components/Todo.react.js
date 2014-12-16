/** @jsx React.DOM **/

var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Todo = React.createClass({
    mixins: [FluxMixin,StoreWatchMixin("TodoStore") ],
    getInitialState: function() {
        return { newTodoText : "" };
    },
    getStateFromFlux: function() {
        var flux = this.getFlux();
        console.log(flux);
        return flux.store("TodoStore").getState();
    },
    render: function() {
        return (
            <div>
                <ul>
                    {this.state.todos.map(function(todo,i) {
                        return <li key={i}><TodoItem todo={todo} /></li>;
                    })}
                </ul>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" size="30" placeholder="New Todo"
                        value={this.state.newTodoText}
                        onChange={this.handleTodoTextChange} />
                    <input type="submit" value="Add Todo" />
                </form>
                <button onClick={this.clearCompletedTodos}>Clear Completed</button>
            </div>
        );
    },
    handleTodoTextChange: function(e) {
        this.setState({ newTodoText : e.target.value });
    },
    onSubmitForm : function(e) {
        e.preventDefault();
        if(this.state.newTodoText.trim()) {
            this.getFlux().actions.addTodo(this.state.newTodoText);
            this.state({newTodoText: "" });
        }
    },
    clearCompletedTodos: function(e) {
        this.getFlux().actions.clearTodos();
    }
});

module.exports = Todo;

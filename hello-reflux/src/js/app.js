/** @jsx React.DOM **/

var React = require('react');
var Reflux = require('reflux');

var Modal = require('react-modal');

var appElement = document.getElementById('react');
Modal.setAppElement(appElement);
Modal.injectCSS();

var App = React.createClass({
    getInitialState: function() {
        return { modalIsOpen: false };
    },

    openModal: function() {
        this.setState({modalIsOpen: true });
    },

    closeModal: function() {
        this.setState({modalIsOpen: false});
    },

    render: function() {
        return (
            <div className="all">
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                >
                    <h2>Hello Modal</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        );
    }
});

React.render(<App />,appElement);

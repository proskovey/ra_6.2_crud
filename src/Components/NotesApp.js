import React, { Component } from "react";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

export default class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:7777/notes'

        this.state = {
            notes: []
        };

        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.update();
    }

    async update() {
        const data = await fetch('http://localhost:7777/notes').then(response => response.json());

        this.setState(prevState => ({ ...prevState, notes: data }));
    }

    handleAdd = (note) => {
        fetch('http://localhost:7777/notes', {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => this.update());
    }

    handleDelete = (id) => {
         // eslint-disable-next-line
         fetch(`http://localhost:7777/notes/${id}`, {
            method: 'DELETE'
         }).then(() => this.update());
    }

    render() {
        return (
            <div className="notes-app">
                <div className="notes-app-title">
                    <div className="notes-title">Notes</div>
                    <button className="notes-upload" onClick={this.update}>↺</button>
                </div>
                <NotesList items={this.state.notes} onDelete={this.handleDelete} />
                <NotesForm onAdd={this.handleAdd} />
            </div>
        )
    }
}
import React from "react";
import Note from "./Note";

export default function NotesList({items, onDelete}) {

    return (
        <div className="notes-list">
            {items.map((item) => <Note key={item.id} item={item} onDelete={onDelete} />)}
        </div>
    )
}
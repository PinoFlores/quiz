import React from 'react';
import { NoteCard } from '../NoteCard';
import { getMockNotes } from './mockNote';

export const NoteList = props => {
  const notes = getMockNotes(30, 5);
  console.log(notes);
  return (
    <div className="notes-list">
      {notes.map(note => {
        return <NoteCard note={note} />;
      })}
    </div>
  );
};

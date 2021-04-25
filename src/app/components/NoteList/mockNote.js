import { getMockUsers } from 'app/components/OnlineUsers/mockUsers';

const NOTE_TEXT =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sint blanditiis eos quos ducimus ipsa nostrum veritatis.';

const NOTE_CATEGORIES = 'js code programming software';

const getContributors = (size = 5) => {
  let contributors = [];
  if (size >= 1) {
    contributors = getMockUsers(size);
  }
  return contributors;
};

export const getMockNotes = (size = 10, contributorsSize = 5) => {
  const notes = [];
  for (let i = 0; i < size; i++) {
    const creator = getMockUsers(1);
    const contributors = getContributors(5);

    notes.push({
      id: Math.floor(Math.random() * size),
      creator,
      text: NOTE_TEXT,
      categories: NOTE_CATEGORIES.split(' '),
      contributors,
      created_at: new Date(),
    });
  }
  return notes;
};

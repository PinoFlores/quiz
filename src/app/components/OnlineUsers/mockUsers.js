const GENDERS = ['women', 'men'];
const STATUS = ['online', 'offline'];
const F_NAMES = [
  'Camila',
  'Patricia',
  'Cela',
  'Maria',
  'Andrea',
  'Juana',
  'Melissa',
  'Carmen',
  'Claudia',
  'Lilliam',
  'Angelica',
  'Angela',
  'Isabella',
  'Emily',
  'Ella',
  'Sofia',
  'Scarlett',
  'Grace',
  'Hannah',
  'Valentina',
];

const M_NAMES = [
  'Lucas',
  'Pablo',
  'Fabricio',
  'Alexander',
  'Henry',
  'Juan',
  'Jacob',
  'James',
  'William',
  'Oliver',
  'Jack',
  'Daniel',
  'Jeremias',
  'Ezequiel',
  'Joseph',
  'Mateo',
  'David',
  'Salomon',
  'John',
  'Isaac',
];

const LAST_NAMES = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Miller',
  'Davis',
  'Garcia',
  'Rodriguez',
  'Wilson',
  'Martinez',
  'Anderson',
  'Taylor',
  'Thomas',
  'Hernandez',
  'Thompson',
  'Jackson',
  'Lopez',
  'Gonzalez',
  'Lee',
];

export const getRandomId = () => {
  return Math.floor(Math.random() * 99);
};

export const getRandomGender = () => {
  const index = Math.floor(Math.random() * 2);
  return GENDERS[index];
};

export const getAvatar = (userId = 1, gender = 'women') => {
  return `https://randomuser.me/api/portraits/${gender}/${userId}.jpg`;
};

export const getUserName = (gender = 'women') => {
  const index = Math.floor(Math.random() * 20);
  let firstname = '';
  let lastname = LAST_NAMES[index];

  if (gender === 'women') firstname = F_NAMES[index];
  else firstname = M_NAMES[index];

  return `${firstname} ${lastname}`;
};

export const getRandomStatus = () => {
  const index = Math.floor(Math.random() * 2);
  return STATUS[index];
};

const processUserStatus = (usersStatus = 'online') => {
  switch (usersStatus) {
    case 'offline':
      return 'offline';
    case 'random':
      return getRandomStatus();
    default:
      return 'online';
  }
};

export const getMockUsers = (size = 20, usersStatus = 'online') => {
  const users = [];

  for (let i = 0; i < size; i++) {
    const id = getRandomId();
    const gender = getRandomGender();
    const avatar = getAvatar(id, gender);
    const fullname = getUserName(gender);
    let username = fullname.split(' ');
    username = `@${username[0]}.${username[1]}`;
    const status = processUserStatus(usersStatus);

    users.push({
      id,
      fullname,
      username,
      gender,
      avatar,
      status,
    });
  }

  return users;
};

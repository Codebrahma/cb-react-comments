const data = [];
const n = 5;
for (let i = 1; i <= n; i += 1) {
  data.push({
    id: i,
    userInfo: {
      id: i,
      name: 'codebrahma',
      profileImageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysqwVdNUKASMQcQau2kXUBBgpHjRz_YqRJwduBzCQfCIrSFvz&s',
      profileURL: '/'
    },
    context: 'Lorem ipsum dolor sit amet, consectetur',
    postedTime: '1d'
  });
}

export default data;

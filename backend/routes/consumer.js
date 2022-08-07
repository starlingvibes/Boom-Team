const axios = require('axios').default;

// create consumer wallet
const createConsumerWallet = async () => {
  await axios
    .post('http://localhost:1000/login', {
      firstName: 'user',
      lastName: 'user',
      email: 'testing@test.com',
      password: 'password',
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err.code);
    });
};

// funding consumer wallet
const fundConsumerWallet = async () => {
  await axios
    .post('http://localhost:1000/login')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
// sending money to merchant
createConsumerWallet();

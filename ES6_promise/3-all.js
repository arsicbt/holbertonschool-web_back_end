import * as Utils from '../utils';

export default function handleProfileSignup() {
  // all: résoudre les promises ensemble (prend un tab)
  return Promise.all([Utils.uploadPhoto(), Utils.createUser()])
    // then: traite les résultats
    .then((res) => {
      const photo = res[0]; // → { body: 'photo-profile-1' }
      const user = res[1]; // → { firstName: 'Guillaume', lastName: 'Salva' }
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    // cas d'erreur
    .catch(() => {
      console.log('Signup system offline')
    });
}

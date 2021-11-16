// const name = prompt('Як тебе звати?');
const name = 'фііві';

let role = '';

switch (name) {
  case 'Сергій':
  case 'Ігор': {
    role = 'Адмін';
    break;
  }
  case 'Паша': {
    role = 'Пацієнт';
    break;
  }
  case 'Оксана':
  case 'Оля': {
    role = 'Медсестра';
    break;
  }
}

console.log('role => ', role);

if (role === 'Адмін') {
  alert('привіт адмін ' + name);
} else if (role === 'Пацієнт') {
  alert('привіт хворий ' + name);
} else if (role === 'Медсестра') {
  alert('вітання вам ' + name);
} else {
  alert('Постороннім вхід заборонено, коронавірус');
}

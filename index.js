const changeBackgroundColor = (color) => {
  const background = document.body;
  background.style.backgroundColor = color;
};

const addVerification = (name) => {
  const userName = document.getElementsByClassName('page_name')[0];
  const verifed = ' <a class="page_verified"></a>';

  const page = window.location.pathname.slice(1, window.location.pathname.length);

  if (page === name && userName.childNodes.length <= 1) {
    userName.innerHTML += verifed;
  }
  if (page === name) {
    const observer = new MutationObserver((() => {
      addVerification(name);
    }));
    observer.observe(document.body, {
      attributes: true,
    });
  }
};

const initialization = () => {
  if (!localStorage.id) {
    const id = prompt('Ваш id');
    localStorage.setItem('id', id);
    if (id !== null && id !== 'undefined') {
      addVerification(id);
    }
  } else {
    addVerification(localStorage.id);
  }
};

if (window.location.host === 'vk.com') {
  initialization();
  changeBackgroundColor('white');
}

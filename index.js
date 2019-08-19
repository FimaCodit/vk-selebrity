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
      addVerification('limitlessfima');
    }));
    observer.observe(document.body, {
      attributes: true,
    });
  }
};


addVerification('limitlessfima');
changeBackgroundColor('white');

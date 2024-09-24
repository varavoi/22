function AssignPicture() {
    const source = document.querySelector('.block-a-image').src;
    document.querySelector('.block-b').innerHTML = `<img src="${source}">`;
  }
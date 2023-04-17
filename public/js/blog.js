const blogHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#new-blog-title').value.trim();
  const contents = document.querySelector('#new-blog-content').value.trim();

  if (title && contents) {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({title, contents}),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/post');
    } else {
      alert(response.statusText);
    }
  }
};

document
.querySelector('#post-button')
.addEventListener('click', blogHandler);
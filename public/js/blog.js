const blogHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#new-blog-title').value.trim();
  const content = document.querySelector('#new-blog-content').value.trim();

  if (title && content) {
    const response = await fetch('/api/post', {
      method: 'POST',
      content: JSON.stringify({title, content}),
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
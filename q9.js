async function userpost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await response.json();

    const user1post = posts.filter((post) => post.userId === 1);

    const title = user1post.map((post) => post.title);

    console.log(`User 1 has ${title.length} posts`);

    title.forEach((title) => console.log(title));
  } catch (error) {
    console.log(error.message);
  }
}

userpost();

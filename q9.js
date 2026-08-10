async function userpost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = await response.json();

    const user1Posts = posts.filter((post) => post.userId === 1);

    console.log("========== USER 1 POSTS ==========");
    console.log(`Total Posts: ${user1Posts.length}\n`);

    user1Posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
    });

    console.log("==================================");
  } catch (error) {
    console.log("Error:", error.message);
  }
}

userpost();
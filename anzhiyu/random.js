var posts=["2024/07/14/hello-world/","2024/07/14/这是一篇新的博文/","2024/07/14/这是一篇新的博文2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
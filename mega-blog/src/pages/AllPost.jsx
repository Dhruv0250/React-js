import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../Components";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => setPosts(posts));
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div>
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;

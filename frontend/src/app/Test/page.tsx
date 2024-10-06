"use client"
import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers($id: Int!) {
    user(id: $id){
      id
      name
      email
      posts {
        id
        imageUrl
      }
    }
  }
`;

export default function Users() {
  const { loading, error, data } = useQuery(GET_USERS,{
    variables: { id: 4 }, 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
console.log(data)
  return (
    <div>
    <h1>Users List</h1>
    <ul>
      {data.user.posts.map((post: any) => (
        <li key={post.id}>{post.imageUrl}</li>
      ))}
    </ul>
  </div>
  );
}

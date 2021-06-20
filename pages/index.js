import { useEffect } from "react";
import Head from "next/head";
import Login from "../components/auth/Login";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
import Widgets from "../components/widgets/Widgets";
import { getSession } from "next-auth/client";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export default function Home({ session, posts }) {
  useEffect(() => {
    if (session?.user) {
      db.collection("users")
        .doc(session?.user.name)

        .set(
          {
            email: session?.user.email,
            name: session?.user.name,
            photoURL: session?.user.image,
            verified: true,
          },
          { merge: true }
        );
    }
  }, [session?.user]);

  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gradient-to-r from-blue-50 to to-blue-100 overflow-x-hidden scrollbar-thin  scrollbar-thumb-blue-500 scrollbar-track-transparent">
      <Head>
        <title>Facebook clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      session,
      posts: docs,
    },
  };
}

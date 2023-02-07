"use client";

import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

function Sidebar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <NewChat />

        <div>{/* ModelSelection */}</div>

        {chats?.docs.map((chat) => (
          <ChatRow key={chat.id} id={chat.id} />
        ))}
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="user profile"
          className="w-12 h-12 mx-auto mb-2 rounded-full cursor-pointer hover:opacity-50"
        />
      )}
    </div>
  );
}

export default Sidebar;

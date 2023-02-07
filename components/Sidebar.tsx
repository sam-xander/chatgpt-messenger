"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <NewChat />

        <div>{/* ModelSelection */}</div>

        {/* Map through the ChatRows */}
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

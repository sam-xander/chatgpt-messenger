import { db } from "@/firebase";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  return (
    <Link
      href={`/chat/${id}`}
      className={`rounded-lg px-5 py-3 text-sm flex items-center justify-center space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out ${
        active && "bg-gray-700/50"
      }`}
    >
      <ChatBubbleLeftIcon className="w-5 h-5" />
      <p className="flex-1 hidden truncate md:inline-flex">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon className="w-5 h-5 text-gray-700 hover:text-red-700" />
    </Link>
  );
}

export default ChatRow;

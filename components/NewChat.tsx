import { PlusIcon } from "@heroicons/react/24/solid";

function NewChat() {
  return (
    <div className="flex items-center justify-center px-5 py-3 space-x-2 text-sm text-gray-300 transition-all duration-200 ease-out border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700/70">
      <PlusIcon className="w-4 h-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;

import NewChat from "./NewChat";

function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <NewChat />

        <div>{/* ModelSelection */}</div>

        {/* Map through the ChatRows */}
      </div>
    </div>
  );
}

export default Sidebar;

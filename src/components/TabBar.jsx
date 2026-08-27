export default function TabBar({ openTabs, activeFile, onSelectTab, onCloseTab, getLabel }) {
  return (
    <div className="tab-bar">
        {openTabs.map((id) => (
            <div
                key={id}
                className={`tab ${activeFile === id ? "active" : ""}`}
                onClick={() => onSelectTab(id)}
            >
            <span>{getLabel(id)}</span>
            <span
                className="tab-close"
                onClick={(e) => {
                e.stopPropagation();
                onCloseTab(id);
                }}
            >
                ×
            </span>
            </div>
        ))}
    </div>
  );
}
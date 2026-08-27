const staticFiles = [
  { id: "about", fileName: "about.md", label: "about.md" },
  { id: "experience", fileName: "experience.ts", label: "experience.ts" },
];

export default function FileExplorer({ projects, activeFile, onOpenFile }) {
    return (
        <div className="file-explorer">
            <div className="explorer-header">EXPLORER</div>
            <div className="explorer-section">PORTFOLIO</div>
            {staticFiles.map((f) => (
                <div
                    key={f.id}
                    className={`file-item ${activeFile === f.id ? "active" : ""}`}
                    onClick={() => onOpenFile(f.id)}
                >
                    {f.label}
                </div>
            ))}
            <div className="explorer-section">projects</div>
            {projects.map((p) => (
                <div
                    key={p.id}
                    className={`file-item nested ${activeFile === p.id ? "active" : ""}`}
                    onClick={() => onOpenFile(p.id)}
                >
                    {p.fileName}
                </div>
            ))}
        </div>
    );
}
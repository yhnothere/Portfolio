import { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import TabBar from "./components/TabBar";
import FileContent from "./components/FileContent";
import { projects } from "./data/projects";
import "./App.css";

const labelMap = {
  about: "about.md",
  experience: "experience.ts",
};
projects.forEach((p) => (labelMap[p.id] = p.fileName));

export default function App() {
  const [openTabs, setOpenTabs] = useState(["about"]);
  const [activeFile, setActiveFile] = useState("about");

  const openFile = (id) => {
    setOpenTabs((tabs) => (tabs.includes(id) ? tabs : [...tabs, id]));
    setActiveFile(id);
  };

  const closeTab = (id) => {
    setOpenTabs((tabs) => {
      const next = tabs.filter((t) => t !== id);
      if (activeFile === id) {
        setActiveFile(next.length ? next[next.length - 1] : null);
      }
      return next;
    });
  };

  return (
    <div className="ide-shell">
      <FileExplorer projects={projects} activeFile={activeFile} onOpenFile={openFile} />
      <div className="editor-pane">
        <TabBar
          openTabs={openTabs}
          activeFile={activeFile}
          onSelectTab={setActiveFile}
          onCloseTab={closeTab}
          getLabel={(id) => labelMap[id]}
        />
        <div className="editor-content">
          {activeFile ? (
            <FileContent fileId={activeFile} projects={projects} />
          ) : (
            <div className="empty-state">No file open</div>
          )}
        </div>
      </div>
    </div>
  );
}
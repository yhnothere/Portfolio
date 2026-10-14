import React from "react";
import VideoEmbed from "./VideoEmbed";

function AboutContent() {
    return (
        <div className="markdown-content" style={{ maxWidth: '600px' }}>
            <h1># About Me</h1>
            <p>
                I'm a Computer Science undergraduate graduating in 2027, with hands-on experience in 
                software engineering, AI-powered automation, and DevOps. My technical background spans 
                building low-level systems in C++, developing enterprise automation frameworks, 
                and creating cloud applications integrated with machine learning and financial APIs.
            </p>
            <p>
                I'm driven by opportunities to solve complex engineering challenges, explore emerging technologies, 
                and build innovative, scalable, and reliable software solutions that deliver meaningful impact.
            </p>
        </div>
    );
}

function ExperienceContent() {
    const experience = [
        {
            role: "Software Engineering Intern",
            company: "ST Engineering",
            duration: "May 2026 – Apr 2027",
            description: "Engineered a Playwright end-to-end test automation framework and AI-driven pipelines to streamline Azure DevOps CI/CD. Developed an AI-powered self-healing locator system and automated SDLC traceability using REST APIs to overcome internal tooling gaps.",
        },
        {
            role: "Polytechnic Intern",
            company: "Vopak",
            duration: "Mar 2020 – Aug 2020",
            description: "Developed an interactive Augmented Reality (AR) application to enhance on-site worker training and safety compliance. Deployed a scan-based verification system that entirely eliminated manual data entry workflows and automated Excel compliance record generation.",
        }
    ];

    return (
        <pre className="code-content">
            <span className="c-keyword">interface</span>{" "}
            <span className="c-type">Experience</span> {"{"}
            {"\n"}
            {"  "}
            <span className="c-prop">role</span>: <span className="c-type">string</span>;
            {"\n"}
            {"  "}
            <span className="c-prop">company</span>: <span className="c-type">string</span>;
            {"\n"}
            {"  "}
            <span className="c-prop">duration</span>: <span className="c-type">string</span>;
            {"\n"}
            {"  "}
            <span className="c-prop">description</span>: <span className="c-type">string</span>;
            {"\n"}
            {"}"}
            {"\n\n"}
            <span className="c-keyword">const</span>{" "}
            <span className="c-var">experience</span>:{" "}
            <span className="c-type">Experience</span>[] = [
            {experience.map((exp, i) => (
                <React.Fragment key={i}>
                {"\n  {"}
                {"\n    "}
                <span className="c-prop">role</span>:{" "}
                <span className="c-string">"{exp.role}"</span>,
                {"\n    "}
                <span className="c-prop">company</span>:{" "}
                <span className="c-string">"{exp.company}"</span>,
                {"\n    "}
                <span className="c-prop">duration</span>:{" "}
                <span className="c-string">"{exp.duration}"</span>,
                {"\n    "}
                <span className="c-prop">description</span>:{" "}
                <span className="c-string">"{exp.description}"</span>,
                {"\n  },"}
                </React.Fragment>
            ))}
            {"\n];"}
        </pre>
    );
}

function ProjectContent({ project }) {
    return (
        <div className="markdown-content">
            <h1>{project.title}</h1>
            <p className="tagline">{project.tagline}</p>
            <div className="stack-tags">
                {project.stack.map((s) => (
                <span key={s} className="stack-tag">
                    {s}
                </span>
                ))}
            </div>
            <VideoEmbed video={project.video} />
            <p className="description">{project.description}</p>
            <div className="links">
                {project.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                        {link.label} ↗
                    </a>
                ))}
            </div>
        </div>
    );
}

export default function FileContent({ fileId, projects }) {
    if (fileId === "about") return <AboutContent />;
    if (fileId === "experience") return <ExperienceContent />;
    const project = projects.find((p) => p.id === fileId);
    if (project) return <ProjectContent project={project} />;
    return <div className="markdown-content">Select a file to view its contents.</div>;
}

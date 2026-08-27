export default function VideoEmbed({ video }) {
    if (!video) return null;
    if (video.type === "drive" && video.driveFileId) {
        return (
            <div className="video-embed">
                <iframe
                    src={`https://drive.google.com/file/d/${video.driveFileId}/preview`}
                    className="video-frame"
                    allow="autoplay"
                    title="Project demo (Google Drive)"
                />
                <p className="video-caption">
                    Hosted on Google Drive 
                </p>
            </div>
        );
    }
    if (video.type === "youtube" && video.youtubeId) {
        return (
            <div className="video-embed">
                <iframe
                    className="video-frame"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title="Project demo (YouTube)"
                    allowFullScreen
                />
            </div>
        );
    }
    return <p className="video-placeholder">No demo video linked yet.</p>;
}
import { recordingService } from "@/services/api";
import type { Recording } from "@/types";
import type React from "react";
import { useEffect, useState } from "react";
import "./Recording.css";

const RecordingManager: React.FC<{ sessionId: string; userId: string }> = ({ sessionId, userId }) => {
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [selectedRecording, setSelectedRecording] = useState<Recording | null>(null);
  const [streamUrl, setStreamUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const loadRecordings = async () => {
      try {
        setLoading(true);
        const data = await recordingService.getSessionRecordings(sessionId);
        if (!isCancelled) {
          setRecordings(data);
        }
      } catch (error) {
        console.error("Error loading recordings:", error);
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    void loadRecordings();

    return () => {
      isCancelled = true;
    };
  }, [sessionId]);

  const handlePlayRecording = async (recording: Recording) => {
    try {
      setSelectedRecording(recording);
      // For HLS adaptive streaming
      const url = await recordingService.getHLSPlaylist(recording.id, userId);
      setStreamUrl(url);
    } catch (error) {
      console.error("Error getting stream URL:", error);
    }
  };

  const formatBitrate = (bitrate: number) => {
    return `${(bitrate / 1000000).toFixed(1)} Mbps`;
  };

  if (loading) return <div className="recording-manager">Đang tải...</div>;

  return (
    <div className="recording-manager">
      <div className="rec-header">
        <h2>📹 Quản Lý Ghi Hình Buổi Học</h2>
        <p>Tính năng 4-8: Ghi hình tự động, mã hóa, nén & bảo mật</p>
      </div>

      {selectedRecording && streamUrl && (
        <div className="rec-player">
          <div className="rec-player-header">
            <h3>{selectedRecording.filename}</h3>
            <button type="button" onClick={() => setSelectedRecording(null)}>
              ✕ Đóng
            </button>
          </div>
          <video controls style={{ width: "100%", borderRadius: "8px" }}>
            <source src={streamUrl} type="application/x-mpegURL" />
            <track kind="captions" label="Tiếng Việt" src="/captions/empty.vtt" srcLang="vi" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
          <div className="rec-details">
            <div className="rec-detail-item">
              <strong>Độ phân giải:</strong> {selectedRecording.resolution}
            </div>
            <div className="rec-detail-item">
              <strong>Codec video:</strong> {selectedRecording.codec}
            </div>
            <div className="rec-detail-item">
              <strong>Codec âm thanh:</strong> {selectedRecording.audioCodec}
            </div>
            <div className="rec-detail-item">
              <strong>Bitrate:</strong> {formatBitrate(selectedRecording.bitrate)}
            </div>
            <div className="rec-detail-item">
              <strong>Thời lượng:</strong> {selectedRecording.duration} giây
            </div>
            <div className="rec-detail-item">
              <strong>Bảo mật:</strong> AES-128 HLS + Watermark người dùng
            </div>
          </div>
        </div>
      )}

      <div className="rec-list">
        <h3>Danh Sách Ghi Hình</h3>
        {recordings.length === 0 ? (
          <p className="rec-empty">Chưa có ghi hình nào</p>
        ) : (
          <div className="rec-grid">
            {recordings.map((recording) => (
              <div key={recording.id} className="rec-card">
                <div className="rec-card-header">
                  <h4>{recording.filename}</h4>
                  <span className="rec-resolution">{recording.resolution}</span>
                </div>
                <div className="rec-card-meta">
                  <p>📅 {new Date(recording.createdAt).toLocaleDateString("vi-VN")}</p>
                  <p>⏱️ {recording.duration}s</p>
                  <p>🎬 {formatBitrate(recording.bitrate)}</p>
                  <p>🔒 AES-128</p>
                </div>
                <button type="button" onClick={() => handlePlayRecording(recording)} className="rec-play-btn">
                  ▶️ Phát
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordingManager;

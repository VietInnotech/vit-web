import { sessionService } from "@/services/api";
import type { ClassSession } from "@/types";
import type React from "react";
import { useEffect, useState } from "react";
import "./OnlineClass.css";

const OnlineClassManager: React.FC<{ classId: string }> = ({ classId }) => {
  const [sessions, setSessions] = useState<ClassSession[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    scheduledTime: "",
    duration: 60,
  });

  useEffect(() => {
    let isCancelled = false;

    const loadSessions = async () => {
      try {
        const data = await sessionService.getClassSchedule(classId);
        if (!isCancelled) {
          setSessions(data);
        }
      } catch (error) {
        console.error("Error loading sessions:", error);
      }
    };

    void loadSessions();

    return () => {
      isCancelled = true;
    };
  }, [classId]);

  const loadSessions = async () => {
    try {
      const data = await sessionService.getClassSchedule(classId);
      setSessions(data);
    } catch (error) {
      console.error("Error loading sessions:", error);
    }
  };

  const handleCreateSession = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sessionService.createSession({
        classId,
        title: formData.title,
        scheduledTime: new Date(formData.scheduledTime),
        duration: formData.duration,
        roomId: `room-${Date.now()}`,
      });
      setFormData({ title: "", scheduledTime: "", duration: 60 });
      setShowForm(false);
      loadSessions();
    } catch (error) {
      console.error("Error creating session:", error);
    }
  };

  const handleJoinSession = async (sessionId: string) => {
    try {
      const session = await sessionService.getSession(sessionId);
      if (!session.joinLink) {
        const link = await sessionService.generateJoinLink(sessionId);
        window.open(link, "_blank");
      } else {
        window.open(session.joinLink, "_blank");
      }
    } catch (error) {
      console.error("Error joining session:", error);
    }
  };

  return (
    <div className="online-class-manager">
      <div className="oc-header">
        <h2>🎥 Tổ Chức Buổi Học Trực Tuyến</h2>
        <p>Tính năng 1 & 2: Lên lịch, tạo phòng học & tham gia 1 chạm</p>
      </div>

      <button type="button" onClick={() => setShowForm(!showForm)} className="oc-btn-create">
        + Tạo Buổi Học Mới
      </button>

      {showForm && (
        <form onSubmit={handleCreateSession} className="oc-form">
          <input
            type="text"
            placeholder="Tên buổi học"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <input
            type="datetime-local"
            value={formData.scheduledTime}
            onChange={(e) => setFormData({ ...formData, scheduledTime: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Thời lượng (phút)"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: Number.parseInt(e.target.value) })}
          />
          <button type="submit">Tạo Buổi</button>
          <button type="button" onClick={() => setShowForm(false)}>
            Hủy
          </button>
        </form>
      )}

      <div className="oc-sessions">
        {sessions.map((session) => (
          <div key={session.id} className="oc-session-card">
            <div className="oc-session-info">
              <h3>{session.title}</h3>
              <p>⏰ {new Date(session.scheduledTime).toLocaleString("vi-VN")}</p>
              <p>⏱️ {session.duration} phút</p>
              <span className={`oc-status ${session.status}`}>{session.status}</span>
            </div>
            <button type="button" onClick={() => handleJoinSession(session.id)} className="oc-join-btn">
              ▶️ Tham Gia Ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineClassManager;

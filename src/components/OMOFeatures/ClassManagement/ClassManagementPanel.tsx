import { classService, enrollmentService } from "@/services/api";
import type { Class, ClassEnrollment } from "@/types";
import type React from "react";
import { useEffect, useState } from "react";
import "./ClassManagement.css";

const ClassManagementPanel: React.FC<{ instructorId?: string }> = ({ instructorId }) => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [enrollmentRequests, setEnrollmentRequests] = useState<ClassEnrollment[]>([]);
  const [showNewClassForm, setShowNewClassForm] = useState(false);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    description: "",
    semester: "",
    department: "",
  });

  useEffect(() => {
    if (instructorId) {
      loadClasses();
    }
  }, [instructorId]);

  const loadClasses = async () => {
    if (!instructorId) return;
    try {
      const data = await classService.getInstructorClasses(instructorId);
      setClasses(data);
    } catch (error) {
      console.error("Error loading classes:", error);
    }
  };

  const loadEnrollmentRequests = async (classId: string) => {
    try {
      const data = await enrollmentService.getEnrollmentRequests(classId);
      setEnrollmentRequests(data);
    } catch (error) {
      console.error("Error loading enrollment requests:", error);
    }
  };

  const handleCreateClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!instructorId) return;

    try {
      const newClass = await classService.createClass({
        name: formData.name,
        code: formData.code || `CLASS-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
        description: formData.description,
        instructorId,
        semester: formData.semester,
        department: formData.department,
      });
      setClasses([...classes, newClass]);
      setFormData({ name: "", code: "", description: "", semester: "", department: "" });
      setShowNewClassForm(false);
    } catch (error) {
      console.error("Error creating class:", error);
    }
  };

  const handleApproveEnrollment = async (enrollmentId: string) => {
    if (!instructorId) return;
    try {
      await enrollmentService.approveEnrollment(enrollmentId, instructorId);
      setEnrollmentRequests(enrollmentRequests.filter((e) => e.id !== enrollmentId));
    } catch (error) {
      console.error("Error approving enrollment:", error);
    }
  };

  const generateClassCode = () => {
    const code = Math.random().toString(36).substr(2, 8).toUpperCase();
    setFormData({ ...formData, code });
  };

  return (
    <div className="class-management-panel">
      <div className="cm-header">
        <h2>🏫 Quản Lý Lớp Học</h2>
        <p>Tính năng 16-18: Quản lý lớp, tham gia bằng mã, theo dõi tiến độ & phân quyền</p>
      </div>

      <div className="cm-tabs">
        <button
          type="button"
          className="cm-tab active"
          onClick={() => {
            setSelectedClass(null);
            setShowNewClassForm(false);
          }}
        >
          📚 Danh Sách Lớp
        </button>
        {selectedClass && (
          <button type="button" className="cm-tab active">
            ✋ Duyệt Tham Gia ({enrollmentRequests.length})
          </button>
        )}
      </div>

      {!selectedClass ? (
        <div className="cm-classes">
          <button type="button" onClick={() => setShowNewClassForm(!showNewClassForm)} className="cm-btn-new">
            + Tạo Lớp Mới
          </button>

          {showNewClassForm && (
            <form onSubmit={handleCreateClass} className="cm-form">
              <input
                type="text"
                placeholder="Tên lớp"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Mã lớp (6-10 ký tự)"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                  maxLength={10}
                />
                <button type="button" onClick={generateClassCode} className="cm-gen-code">
                  🎲 Tạo Mã
                </button>
              </div>
              <input
                type="text"
                placeholder="Học kỳ (ví dụ: 20241)"
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
              />
              <input
                type="text"
                placeholder="Bộ môn/Ngành"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              />
              <textarea
                placeholder="Mô tả lớp học"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />
              <div className="form-buttons">
                <button type="submit">Tạo Lớp</button>
                <button type="button" onClick={() => setShowNewClassForm(false)}>
                  Hủy
                </button>
              </div>
            </form>
          )}

          <div className="cm-list">
            {classes.map((cls) => (
              <div key={cls.id} className="cm-class-card">
                <div className="cm-class-info">
                  <h3>{cls.name}</h3>
                  <p className="cm-class-code">
                    📝 Mã lớp: <strong>{cls.code}</strong>
                  </p>
                  <p className="cm-class-detail">📅 Học kỳ: {cls.semester}</p>
                  <p className="cm-class-detail">🏢 Bộ môn: {cls.department}</p>
                  <p className="cm-class-desc">{cls.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedClass(cls);
                    loadEnrollmentRequests(cls.id);
                  }}
                  className="cm-manage-btn"
                >
                  ⚙️ Quản Lý
                </button>
              </div>
            ))}
          </div>

          {classes.length === 0 && !showNewClassForm && (
            <div className="cm-empty">
              <p>Chưa có lớp nào. Hãy tạo lớp mới để bắt đầu!</p>
            </div>
          )}
        </div>
      ) : (
        <div className="cm-class-detail-view">
          <button type="button" onClick={() => setSelectedClass(null)} className="cm-back-btn">
            ← Quay Lại
          </button>

          <div className="cm-detail-header">
            <h3>{selectedClass.name}</h3>
            <span className="cm-detail-code">{selectedClass.code}</span>
          </div>

          <div className="cm-enrollment-section">
            <h4>📋 Yêu Cầu Tham Gia</h4>
            {enrollmentRequests.length === 0 ? (
              <p className="cm-no-requests">Không có yêu cầu tham gia chưa duyệt</p>
            ) : (
              <div className="cm-requests">
                {enrollmentRequests
                  .filter((e) => e.status === "pending")
                  .map((request) => (
                    <div key={request.id} className="cm-request-item">
                      <span>Học viên ID: {request.studentId}</span>
                      <div className="cm-request-buttons">
                        <button
                          type="button"
                          onClick={() => handleApproveEnrollment(request.id)}
                          className="cm-approve-btn"
                        >
                          ✅ Duyệt
                        </button>
                        <button type="button" className="cm-reject-btn">
                          ❌ Từ Chối
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          <div className="cm-info-box">
            <h4>ℹ️ Thông Tin Phân Quyền</h4>
            <ul>
              <li>👨‍🏫 Giảng viên: Toàn quyền quản lý lớp</li>
              <li>👨‍🎓 Học viên: Quyền truy cập tài liệu & tham gia</li>
              <li>👤 Phụ huynh: Chỉ xem (Read-only)</li>
              <li>🔐 Dùng RBAC theo resource-action</li>
              <li>📋 Audit log: Lưu tất cả thay đổi ≥ 365 ngày</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassManagementPanel;

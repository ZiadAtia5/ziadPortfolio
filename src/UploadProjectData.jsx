import React from "react";
import { writeBatch, doc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import ProjectsData from "./ProjectData.json";

const UploadProjectData = () => {
  const uploadProjects = async () => {
    try {
      console.log("بدء رفع المشاريع...");

      const batch = writeBatch(db);

      ProjectsData.forEach((project) => {
        const projectRef = doc(db, "projects", `project_${project.id}`);
        batch.set(projectRef, {
          ...project,
          category: project.category.toLowerCase(),
          createdAt: serverTimestamp(),
        });
      });

      await batch.commit();
      alert("تم رفع جميع المشاريع بنجاح 🎉");
    } catch (error) {
      console.error("خطأ أثناء الرفع:", error);
      alert("حصل خطأ أثناء رفع البيانات");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={uploadProjects}>Upload Projects to Firebase</button>
    </div>
  );
};

export default UploadProjectData;

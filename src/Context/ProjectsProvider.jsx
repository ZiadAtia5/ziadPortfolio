import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
// import { toast } from "sonner";

const ProjectContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        setLoading(true);

        const querySnapshot = await getDocs(collection(db, "projects"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        console.logr("Error fetching projects");
      } finally {
        setLoading(false);
      }
    };

    fetchAllProjects();
  }, []);

  const totalProjects = projects.length;

  const getProjectsByCategory = (category) => {
    return projects.filter(
      (p) => p.category?.toLowerCase() === category?.toLowerCase(),
    );
  };

  const getProjectsByProgress = (progress) => {
    return projects.filter(
      (p) => p.progress?.toLowerCase() === progress?.toLowerCase(),
    );
  };

  const value = useMemo(
    () => ({
      projects,
      totalProjects,
      getProjectsByCategory,
      getProjectsByProgress,
      loading,
    }),
    [projects, loading],
  );

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectsProvider;

export const useProjects = () => {
  return useContext(ProjectContext);
};

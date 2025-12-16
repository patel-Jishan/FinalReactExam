import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchStudents } from "../redux/studentActions";
import StudentDetails from "./StudentDetails";

const StudentList = () => {
  const dispatch = useDispatch();
  const { students, loading } = useSelector((state) => state.students);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const filteredStudents = students.filter((s) =>
    (
      (s.name || "") +
      " " +
      (s.className || "")
    )
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-900 to-orange-900 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        
       
       

        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-5xl font-black text-white mb-3 tracking-tight">
            Student Directory
          </h2>
          <p className="text-purple-200 text-lg font-light">Discover and connect with students</p>
        </div>

        {/* Search Bar */}
        <div className="mb-10 relative z-10">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-1.5 shadow-2xl border border-white/20">
            <div className="relative">
              <input
                placeholder="Search by name..."
                className="bg-white/90 backdrop-blur-sm border-0 rounded-xl p-5 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white shadow-lg text-gray-800 placeholder-gray-500 pl-14 text-lg font-medium transition-all duration-300"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <svg 
                    className="w-5 h-5 text-white"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 relative z-10">
            <div className="relative">
              <div className="animate-spin rounded-full h-20 w-20 border-4 border-purple-200 border-t-purple-600"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-30 animate-pulse"></div>
            </div>
            <p className="text-white font-bold text-xl mt-6 animate-pulse">
              Loading students...
            </p>
          </div>
        )}

        {/* Empty State */}
        {filteredStudents.length === 0 && !loading && (
          <div className="text-center py-20 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 relative z-10">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <svg 
                className="h-12 w-12 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="text-white text-2xl font-bold mb-2">
              No students found
            </p>
            <p className="text-purple-200 text-base">
              Try adjusting your search criteria
            </p>
          </div>
        )}

        {/* Student List */}
        <div className="space-y-5 relative z-10">
          {filteredStudents.map((s, index) => (
            <div 
              key={s.id} 
              className="transform hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <StudentDetails student={s} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
import React from 'react';
import { CheckCircle, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const SuccessPage = () => {
  const { isAuthenticated, userEmail, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Authentication Successful!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Welcome {userEmail}! You have successfully authenticated with i-AM.
        </p>

        <div className="flex flex-col items-center space-y-6">
          <div className="inline-flex items-center justify-center space-x-2 text-sm text-gray-500">
          <span>Session ID:</span>
          <code className="bg-gray-100 px-2 py-1 rounded">
            {crypto.randomUUID().slice(0, 8)}
          </code>
          </div>
          
          <button
            onClick={logout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
import React from 'react';
import { QrCode } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const LandingPage = () => {
  const { isAuthenticated, startAuthentication, error, qrCodeData } = useAuth();

  React.useEffect(() => {
    startAuthentication();
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/success" replace />;
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-black to-teal-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome</h1>
          <p className="text-gray-600">Scan the QR code with the I-AM App to authenticate</p>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        
        <div className="bg-gray-100 p-2 rounded-xl flex items-center justify-center mb-2 -mt-4">
          <div className="relative">
            <img 
              src={`data:image/png;base64,${qrCodeData}`} 
              alt="Authentication QR Code"
              className="w-48 h-48"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {!qrCodeData && (
                <div className="animate-pulse">
                  <QrCode className="w-48 h-48 text-gray-300" />
                  <span className="text-sm text-gray-500">Loading QR Code...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">The new era of identity management</p>
          <a
            href="https://www.i-am.technology"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Learn more about I-AM
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
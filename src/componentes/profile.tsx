import { FaCamera } from 'react-icons/fa';
import Tabs from './Tabs';

const Profile = () => {
  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Banner uploaded:', file.name);
      // You can preview or upload the file here
    }
  };

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Profile image uploaded:', file.name);
      // Handle upload or preview logic
    }
  };

  return (
    <div className="w-[94%] ml-[5rem] relative">
      {/* Banner Section */}
      <div className="relative w-full h-48 bg-gray-300 rounded-xl overflow-hidden">
        <img
          src="https://via.placeholder.com/1200x300"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <input
          type="file"
          id="bannerUrl"
          accept="image/*"
          className="hidden"
          onChange={handleBannerUpload}
        />
        <button className="absolute top-3 right-3 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600">
          <label htmlFor="bannerUrl" className="cursor-pointer">
            <FaCamera size={20} />
          </label>
        </button>
      </div>

      {/* Profile Section */}
      <div className="relative flex items-center mt-[-3rem] ml-6">
        <div className="relative">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white object-cover"
          />
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileUpload}
          />
          <button className="absolute bottom-1 right-1 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <FaCamera size={16} />
            </label>
          </button>
        </div>

        <div className="ml-6 mt-6">
          <h1 className="text-2xl font-bold">Cheramlak</h1>
          <p className="text-gray-600">2M views</p>
          <p className="mt-2 text-gray-700 max-w-md">
            This is my YouTube Channel — watch my progress and growth!
          </p>
          <button className="bg-red-700 text-white py-2 px-4 rounded-full hover:bg-black mt-4">
            Subscribe
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-8">
        <Tabs />
      </div>
    </div>
  );
};

export default Profile;

import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/Authprovider";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, updateUserData } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setFormData({
      name: user?.displayName || "",
      photoURL: user?.photoURL || "",
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUserData(formData.name, formData.photoURL);
      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p className="text-center mt-10">Loading user info...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">My Profile</h1>

      {/* Live preview */}
      <div className="flex flex-col items-center space-y-4 mb-6">
        <img
          src={formData.photoURL || user.photoURL || "https://placehold.co/150x150"}
          alt="User"
          className="w-32 h-32 rounded-full object-cover"
        />
        <p>
          <strong>Name:</strong> {formData.name || user.displayName || "Not set"}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      {!editing && (
        <button
          onClick={() => setEditing(true)}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Update Profile
        </button>
      )}

      {editing && (
        <form onSubmit={handleUpdate} className="mt-6 space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Photo URL</label>
            <input
              type="url"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              placeholder="https://example.com/photo.jpg"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={loading}
              className={`flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Updating..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="flex-1 py-2 px-4 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MyProfile;

import React from "react";
import { Plus, X } from "lucide-react";

function TakeImg({ setImg, img }) {
  // Convert image to Base64 (Permanent)
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImg(reader.result); // Base64 string saved
    };

    reader.readAsDataURL(file);
  };

  // Remove Image
  const handleRemove = () => {
    setImg(null);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      <label className="font-semibold">Add Picture</label>

      {/* Upload Button */}
      {!img && (
        <>
          <input
            type="file"
            accept="image/*"
            id="picture"
            className="hidden"
            onChange={handleChange}
          />

          <label
            htmlFor="picture"
            className="w-12 h-12 flex items-center justify-center rounded-full shadow bg-gray-200 hover:bg-gray-300 cursor-pointer transition"
          >
            <Plus size={22} />
          </label>
        </>
      )}

      {/* Image Preview */}
      {img && (
        <div className="relative w-24 h-24">
          <img
            src={img}
            alt="preview"
            className="w-full h-full object-cover rounded-xl border"
          />

          {/* Remove Button */}
          <button
            onClick={handleRemove}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default TakeImg;

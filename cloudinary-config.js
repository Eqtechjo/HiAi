const CLOUDINARY_CLOUD_NAME = "dcbxuax2c";
const CLOUDINARY_UPLOAD_PRESET = "hi ai Products";
const UPLOAD_TIMEOUT_MS = 120_000; // 2 minutes

function getResourceType(file) {
  if (file.type.startsWith("image/")) return "image";
  return "raw";
}

export async function uploadFileToCloudinary(file, options = {}) {
  if (!(file instanceof File)) {
    throw new Error("A valid file is required for Cloudinary upload.");
  }

  const resourceType = getResourceType(file);
  const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  if (options.folder) {
    formData.append("folder", options.folder);
  }

  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT_MS);

  try {
    const response = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timerId);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.error?.message || "Cloudinary upload failed.");
    }

    return {
      url: result.secure_url,
      publicId: result.public_id,
      originalFilename: result.original_filename,
      resourceType: result.resource_type,
      format: result.format,
    };
  } catch (error) {
    clearTimeout(timerId);
    if (error.name === "AbortError") {
      throw new Error(
        "Upload timed out. Please check your connection and try again.",
      );
    }
    throw error;
  }
}

export function getCloudinaryUploadInfo() {
  return {
    cloudName: CLOUDINARY_CLOUD_NAME,
    preset: CLOUDINARY_UPLOAD_PRESET,
  };
}

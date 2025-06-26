import axios from "axios";
import { DropzoneArea } from "mui-file-dropzone";
import { useState } from "react";

export default function UploadPage() {

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleChange = async (files: File[]) => {
    if (files.length === 0) return;

    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i], files[i].name);
    }

    try {
      const config = {
        onUploadProgress: (progressEvent: any) => {
          const { loaded, total } = progressEvent;
          setUploadProgress(Math.round((loaded / total) * 100));
        },
      };
      const response = await axios.post(
        "http://localhost:5000/upload",
        data,
        config
      );
      const body = response.data;
      console.log(body);
      if (response.status === 200) {
        setUploadedFiles(files); // set the uploaded file to show the name
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <DropzoneArea onChange={handleChange} />
  )
}

import React, { useState, useEffect } from 'react';
import Avatar from "react-avatar-edit";

const UploadAvatar = () => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = view => {
    setPreview(view);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = preview;
    link.download = 'cropped_avatar.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    console.log(preview);
  }, [preview]);

  return (
    <div className="Avatar">
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: 20 }}>
        <div>
          <h2>Original Avatar</h2>
          <Avatar width={300} height={300} onCrop={onCrop} onClose={onClose} src={src} />
        </div>
        <div>
          <h2>Cropped Avatar</h2>
          {preview && <img src={preview} alt="Cropped Avatar" style={{ width: '300px', height: '300px' }} />}
        </div>
      </div>
      {preview && (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button style={{width: 140, height: 50, backgroundColor: 'red', color: 'white', borderRadius: 10, fontWeight: 'bold', fontSize: 20, border: 'none', outline: 'none', cursor: 'pointer' }} onClick={handleDownload}>Download</button>
        </div>
      )}
    </div>
  );
};

export default UploadAvatar;

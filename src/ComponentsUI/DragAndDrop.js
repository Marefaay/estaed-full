import React, {  useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./DragAndDrop.css";
import Folder from "../images/folder.png";
import { Container } from "react-bootstrap";

const DragAndDrop = () => {
 
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({maxFiles:1});
 
  const files = acceptedFiles.map((file) => {
    console.log(file);
    const excelFileTypes = [
      "application/xlsx",
      "application/xltx",
      "application/xlt",
      "application/xla",
      "application/xlsm",
      "application/xltm",
      "application/xlw",
      "application/xlsb",
      "application/xls",
      "application/xlam",
      "text/csv",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    if (excelFileTypes.includes(file.type)) {
      // if files extension calid
      return (
        <li className="uploaded-file mt-3 mb-3 d-flex justify-content-between aligtn-items-center">
          <div className="d-flex w-100 justify-content-around flex-wrap">
            <p className="text-end w-50   ">
              <b>اسم الملف:-</b>
              {file.name}
            </p>
            <p className="w-50 ">
              <b>حجم الملف:-</b>
              {file.size} بايت
            </p>
          </div>
        </li>
      );
    } else {
      // if not valid
      return (
        <li className="uploaded-file mt-3 mb-3" id="notsupport">
          {file.name} للأسف نوع هذا الملف {file.type} غير مدعوم
        </li>
      );
    }
  });
  // store files
  useEffect(() => {
    if (files.length) {
      setUploadedFiles(files);
      console.log(uploadedFiles);
    }
  }, []);

  return (
  <Container>
      
      <div {...getRootProps()} className="drop-area m-auto mt-5">
        <div className="drag-text">
          <img
            src={Folder}
            alt="Upload folder"
            className="img-fluid folder-img"
          />
          <p id="drag-p">اسحب ملفاتك وضعها هنا </p>
          <p className="text-secondary ps-3 pe-3">
            يتشرط ان تكون ملفاتك من هذه الأنواع "xlsx", "xltx", "xlt", "xla",
            "xlsm", "xltm", "xlw", "xlsb", "xls", "xlam",{" "}
          </p>
          <p id="or">أو</p>
        </div>
        <input {...getInputProps()} />
        {/* {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )} */}
        {/* <p>Uplload</p> */}
        <button id="browse-btn">تصفح الملفات</button>
      </div>
      <ul className="list-unstyled mt-4">{files}</ul>
    

  </Container>  );
};
export default DragAndDrop;

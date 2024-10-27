import DragAndDrop from "./DragAndDrop";
import "./UploadFiles.css"
const UploadFiles = ({show}) => {
  show(true)
  return (
    <div className="upload-div">
      <div className="d-flex justify-content-between w-75 m-auto p-3 pt-5 ">
       
        <h3 id="txt">قم بتحميل النموذج وأضف بيانات الطلاب ومن ثم أعد رفعه </h3>
        <button id="file-upload">تحميل النموذج</button>
      </div>
      <button id="watch"><i className=" fa-brands fa-youtube"></i>مشاهدة فيديو</button>
      <DragAndDrop />
    </div>
  );
};
export default UploadFiles;

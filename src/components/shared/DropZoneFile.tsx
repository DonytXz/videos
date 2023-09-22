import React, { useState } from "react";
import Dropzone from "react-dropzone";

const DropZoneFile = ({ theme = "black" }: any) => {
  const [files, setFiles]: any = useState(null);
  return (
    <>
      <div
        className={`border-2 border-black px-4 py-8 my-2 cursor-pointer ${
          theme == "white" ? "text-white border-white" : ""
        }`}
      >
        <Dropzone
          onDrop={(acceptedFiles) => {
            //   console.log((acceptedFiles[0] as any).path);
            //   setFile((acceptedFiles[0] as any).path);
            setFiles(acceptedFiles);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
      <div className={`px-4 my-2 ${theme == "white" ? "text-white" : ""}`}>
        <p className="font-semibold my-2">Uploaded Files</p>
        {files?.length > 0 ? (
          files?.map((file: any, index: number) => {
            return (
              <div key={index}>
                <p>-{file?.path}</p>
              </div>
            );
          })
        ) : (
          <div>No files</div>
        )}
      </div>
    </>
  );
};

export default DropZoneFile;

import React, { useState } from "react";
import DropZoneFile from "../shared/DropZoneFile";
// import Dropzone from "react-dropzone";

const VideoResources = () => {
  // const [files, setFiles]: any = useState(null);
  return (
    <>
      <div className="flex flex-col py-4 px-2">
        <p className="tex-left mr-auto p-2 m-2 font-bold text-xl">
          Video Resources Manager
        </p>
        {/* <div className="border-2 border-black px-4 py-8 my-2">
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
        </div> */}
        <DropZoneFile />
        {/* <div className="px-4 my-2">
          <p className="font-semibold my-2">Uploaded Videos</p>
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
        </div> */}
      </div>
    </>
  );
};

export default VideoResources;

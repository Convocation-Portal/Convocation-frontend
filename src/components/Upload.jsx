/* eslint-disable react/prop-types */
import React from "react";
import useDriverPicker from "react-google-drive-picker";
import { google_client_id, google_api_key } from "../constant";
import classes from "../style/Login.module.css";

const Upload = (props) => {
    const [createPicker] = useDriverPicker();
    const config = {
        clientId: google_client_id,
        developerKey: google_api_key,
        viewId: "DOCS",
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
    };
    return (
        <div className="upload">
            <div className="text">{props.label}</div>
            <button
                className={classes.uploadbutton}
                onClick={(e) => {
                    e.preventDefault();
                    createPicker({
                        ...config,
                        callbackFunction: (data) => {
                            if (data.action === "picked") {
                                props.set(data.docs[0].url);
                            }
                        },
                    });
                }}
            >
                Upload
            </button>
        </div>
    );
};

export default Upload;

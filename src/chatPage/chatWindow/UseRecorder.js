import { useEffect, useState } from "react";
import { addRecordMessage } from "../../UsersChatDB";

const UseRecorder = (myUser, username, refreshChat) => {
  const [audioURL, setAudioURL] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setRecorded] = useState(false);
  const [recorder, setRecorder] = useState(null);

  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error);
      }
      return;
    }

    // Manage recorder state.
    if (isRecording) {
      recorder.start();
    } else {
      recorder.stop();
    }

    // Obtain the audio when ready.
    const handleData = e => {
      setAudioURL(URL.createObjectURL(e.data));
    };

    recorder.addEventListener("dataavailable", handleData);
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setRecorded(true);
  };

  const sendRecording = () => {
    const date = new Date();
    let time = date.getHours() + ":" + date.getMinutes();
    addRecordMessage(myUser, username, audioURL ,time);
    refreshChat();
    setRecorded(false);
  };

  return [audioURL, isRecording, isRecorded, startRecording, stopRecording, sendRecording];
};

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  return new MediaRecorder(stream);
}
export default UseRecorder;
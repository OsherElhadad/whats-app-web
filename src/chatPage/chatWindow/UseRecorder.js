import { useEffect, useState } from "react";
import { addRecordMessage } from "../../Users/UsersChatDB";

const UseRecorder = (myUser, username, refreshChat, btnId) => {
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

  // send record handler
  const sendRecording = () => {
    const date = new Date();
    let time = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
    addRecordMessage(myUser, username, audioURL, time);
    document.getElementById(btnId.concat("-popoverBtn")).click();
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
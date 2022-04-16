import useRecorder from "./useRecorder";

import "./styles.css";

function Recorder() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  return (
    <div className="App">
      <audio src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button>
      </div>
  );
}

export default Recorder;
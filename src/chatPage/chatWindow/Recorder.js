import useRecorder from "./UseRecorder";
import "./Record.css"

function Recorder() {
  let [audioURL, isRecording, isRecorded, startRecording, stopRecording, sendRecording] = useRecorder();
  return (
    <div className="App">
      <audio src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording} className="btn btn-outline-light btn-sm bg-dark rec_btn">
      <i className="bi bi-record-circle"></i> start
      </button>
      <button onClick={stopRecording} disabled={!isRecording} className="btn btn-outline-light btn-sm bg-dark rec_btn">
      <i className="bi bi-stop-circle"></i> stop
      </button>
      <button onClick={sendRecording} disabled={!isRecorded} className="btn btn-outline-light btn-sm bg-dark rec_btn">
      <i className="bi bi-envelope"></i> send
      </button>
      </div>
  );
}

export default Recorder;
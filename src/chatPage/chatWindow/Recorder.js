import useRecorder from "./UseRecorder";
import "./Record.css"

var audioSrc = ""

function Recorder(props) {
  let [audioURL, isRecording, isRecorded, startRecording, stopRecording, sendRecording] = useRecorder(props.myUser, props.username, props.refreshChat, props.btnId);
  return (
    <div className="App popover-member">
      <audio className="popover-member" src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording} className="btn btn-outline-light btn-sm bg-dark rec_btn popover-member">
      <i className="bi bi-record-circle popover-member"></i> start
      </button>
      <button onClick={stopRecording} disabled={!isRecording} className="btn btn-outline-light btn-sm bg-dark rec_btn popover-member">
      <i className="bi bi-stop-circle popover-member"></i> stop
      </button>
      <button onClick={sendRecording} disabled={!isRecorded} className="btn btn-outline-light btn-sm bg-dark rec_btn popover-member">
      <i className="bi bi-envelope popover-member"></i> send
      </button>
      </div>
  );
}

export default Recorder;
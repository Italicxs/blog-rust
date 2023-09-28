export default function Prueba() {
    return (
      <div>
        <div>Video here:</div>
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: 600, height: 400 }}
        />
      </div>
    );
  }
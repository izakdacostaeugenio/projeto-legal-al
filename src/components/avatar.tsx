import semtitulo from "../assets/imagens/Sem título.png";
function Avatar() {
  return (
    <>
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2" >
          <img
            alt="avatr não grita"
            className="rounded-full"
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            src={semtitulo}
          />
        </div>
      </div>
    </>
  );
}
export default Avatar;

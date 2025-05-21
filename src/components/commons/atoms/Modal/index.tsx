import RoundedImg from "../RoundedImg";

const Modal = ({ isOpen, onClose, data } : any) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed top-0 left-0 mx-auto flex h-[100vh] w-full items-center justify-between bg-black/50 px-4 ${isOpen ? "z-50 opacity-100" : "-z-1 opacity-0"}`}
        onClick={onClose}
      />

      <div
        className={`${
          isOpen ? "z-51 -translate-x-1/2" : "-z-1 translate-x-100"
        } fixed top-1/2 left-1/2 h-auto w-[420px] -translate-y-1/2 bg-(--bg-tertiary-cray) transition-transform duration-300 max-md:w-[90%] max-sm:w-[100%]`}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark text-(--text-color-black)"></i>
          
        </button>

        <img
          src={data.background}
          alt="Avatar"
          className="h-full w-full object-cover"
        />
        <div className="relative p-4 text-left text-(--text-color-black)">
          <h2 className="my-4 w-[300px] text-3xl">{data.title}</h2>
          <p className="text-xl">{data.desc}</p>

          <div className="absolute -top-4 right-4 z-1 flex">
            {data.list_tech.map(({item, index} : any) => (
              <RoundedImg key={index} src={item.icon} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
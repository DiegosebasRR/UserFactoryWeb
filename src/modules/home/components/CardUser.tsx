import { User } from "@/types/User";
import { FC } from "react";

interface UserProps {
  user: User;
}

const CardUser: FC<UserProps> = ({ user }) => {
  function calcularEdad(fechaNacimiento: string): number {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const edadMilisegundos = Date.now() - fechaNacimientoDate.getTime();
    const edadDate = new Date(edadMilisegundos);
    return Math.abs(edadDate.getUTCFullYear() - 1970);
  }
  return (
    <div className="flex justify-center items-center absolute inset-0 ">
      <div className="w-64 h-96 shadow-md shadow-slate-500 rounded-tr-3xl rounded-bl-3xl  overflow-hidden">
        <img className="w-64 h-64" src={user.image} />
        <div className="h-32 flex flex-col gap-2 pl-4  justify-center text-lg font-bold">
          <p>
            <span className=" text-red-500">Sexo:</span> {user.gender}
          </p>
          <p>
            <span className="text-red-500">Edad:</span>{" "}
            {calcularEdad(user.birth)}
          </p>
          <p>
            <span className="text-red-500">Nacionalidad:</span>{" "}
            {user.nationality}
          </p>
        </div>
      </div>
      <div className="p-2 h-80 self-center justify-center gap-4 hidden sm:block">
        <div className="flex items-end h-28">
          <h1 className="text-4xl  text-white font-bold  ">
            {user?.name.first} {user?.name.last}
          </h1>
        </div>
        <div className="h-64 w-64 mt-10 ml-2 flex flex-col gap-4">
          <p>
            <span className="font-bold text-red-500">Celular:</span>
            {user.cell}
          </p>
          <p>
            <span className="font-bold text-red-500">Teléfono:</span>
            {user.phone}
          </p>
          <p>
            <span className="font-bold text-red-500">Correo:</span>
            {user.email}
          </p>
          <p>
            <span className="font-bold text-red-500">Dirección:</span>
            {user.location.streetNumber}
            {user.location.streetName}, {user.location.city},
            {user.location.state}, {user.location.country},
            {user.location.postcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardUser;

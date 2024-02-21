import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">¡Bienvenido a User Factory API!</h1>
      <p className="text-lg mt-6">
        ¡Saludos, desarrollador! Te damos la bienvenida al emocionante mundo de
        la creación de usuarios aleatorios simulados con nuestra User Factory
        API. Facilitamos tu vida como programador al proporcionarte un entorno
        simulado para generar y perfeccionar usuarios de manera eficiente.
      </p>
      <p className="text-xl mt-6 font-bold">
        ¿Qué puedes esperar de nuestra User Factory API?
      </p>
      <ol className="mt-6 list-decimal px-6 ">
        <li className="mt-2">
          <span className="font-bold">Generación de Usuarios Aleatorios: </span>
          Con nuestra API, puedes generar usuarios aleatorios con una variedad
          de características, incluyendo género, nacionalidad, ubicación y más.
          Esto te permite simular situaciones diversas y realistas en tus
          aplicaciones.
        </li>
        <li className="mt-2">
          <span className="font-bold">Endpoints Lógicos: </span>
          Nuestra API cuenta con endpoints lógicos y fáciles de entender,
          diseñados para simplificar el proceso de integración con tu frontend.
        </li>
        <li className="mt-2">
          <span className="font-bold">Personalización Total: </span>
          Adapta la API según tus necesidades. Puedes ajustar el número de
          usuarios generados, simular diferentes escenarios de población y
          experimentar con diversas respuestas del servidor.
        </li>
      </ol>
      <p className="text-xl mt-6 font-bold text-red-500">¡Atención!</p>
      <ul className="mt-6 list-disc px-6 ">
        <li className="mt-2">
          La User Factory API está destinada exclusivamente para entornos de
          desarrollo y pruebas. No se deben utilizar datos confidenciales ni
          información real. Nos encantaría recibir tus comentarios. ¡Háznoslos
          saber para mejorar continuamente!
        </li>
        <li className="mt-2">
          Esperamos que nuestra User Factory API te ayude en tus proyectos de
          desarrollo. ¡No dudes en contactarnos si necesitas ayuda o tienes
          alguna pregunta!
        </li>
      </ul>
      <Link to="/user">
        <Button
          className="w-full h-24 mt-10 text-lg justify-end px-10"
          variant="outline"
        >
          Siguiente
        </Button>
      </Link>
    </div>
  );
};

export default Introduction;

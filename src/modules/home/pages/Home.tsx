import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import UseProfile from "../components/UseProfile";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row sm:py-20 items-center py-6 gap-6 ">
        <div className="flex gap-6 flex-col">
          <h1 className="text-5xl font-extrabold">
            Impulsa la Experiencia de Usuario con User Factory API
          </h1>
          <h2 className="text-xl">
            UserFactoryAPI es la solución perfecta para generar usuarios
            aleatorios de manera rápida y sencilla. Con nuestra API, puedes
            crear usuarios de prueba con datos aleatorios realistas en cuestión
            de segundos. Simplifica el proceso de desarrollo y prueba de tu
            aplicación con User Factory API.
          </h2>
          <Link to="/introduction">
            <Button className="w-64 h-12">View Document</Button>
          </Link>
        </div>
        <img className="h-96" src="users.png" alt="shop web" />
      </div>
      <SyntaxHighlighter
        language="typescript"
        className={"syntax-highlighter my-6"}
        useInlineStyles={false}
        wrapLines={true}
      >
        {`[GET] https://www.fakesoteapi.somee.com/api/Users?results=1`}
      </SyntaxHighlighter>

      <UseProfile />
    </div>
  );
};

export default Home;

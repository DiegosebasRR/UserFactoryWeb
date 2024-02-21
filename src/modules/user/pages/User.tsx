import SyntaxHighlighter from "react-syntax-highlighter";
import { Element } from "react-scroll";
const User = () => {
  const userAll = `
  [
    {
        "userId": 3,
        "gender": "Otro",
        "nationality": "Elbonia",
        "email": "CharlieLopez@example.com",
        "password": "e658aa08-3591-41e7-b234-1f15e0fafdaf",
        "image": "imagen.png",
        "phone": "+185450159",
        "cell": "+479935721",
        "birth": "1972-02-21T15:32:52.2447802Z",
        "name": {
            "id": 3,
            "first": "Charlie",
            "last": "Lopez"
        },
        "location": {
            "id": 3,
            "streetNumber": 782,
            "streetName": "Main Street",
            "city": "Los Angeles",
            "state": "Texas",
            "country": "United States",
            "postcode": 22763
        }
    },
    {
        "userId": 4,
        "gender": "Otro",
        "nationality": "Atlantis",
        "email": "BobJohnson@example.com",
        "password": "a9859a74-e973-493b-a7ee-3f51aaeb1b42",
        "image": "imagen.png",
        "phone": "+598550834",
        "cell": "+428517047",
        "birth": "2005-02-21T15:32:52.2447825Z",
        "name": {
            "id": 4,
            "first": "Bob",
            "last": "Johnson"
        },
        "location": {
            "id": 4,
            "streetNumber": 664,
            "streetName": "Elm Street",
            "city": "New York",
            "state": "Florida",
            "country": "United Kingdom",
            "postcode": 71933
        }
    }
]
  `;
  return (
    <div>
      <Element name="index">
        <h1 className="text-4xl font-bold">Gestión de Usuarios</h1>
      </Element>
      <Element name="parametros">
        <h2 className="text-xl mt-10 font-bold">Obtener Todos los Usuarios</h2>
        <table className="table-auto mt-10 ">
          <thead>
            <tr className="bg-primary">
              <th className="border px-4 py-2">Parámetro</th>
              <th className="border px-4 py-2">Tipo</th>
              <th className="border px-4 py-2">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">results</td>
              <td className="border px-4 py-2">int</td>
              <td className="border px-4 py-2">
                El número total de resultados a devolver. Por defecto, 10.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">seed</td>
              <td className="border px-4 py-2">int</td>
              <td className="border px-4 py-2">
                Semilla para la generación de números aleatorios.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">page</td>
              <td className="border px-4 py-2">int</td>
              <td className="border px-4 py-2">
                Número de página para la paginación. Por defecto, 1.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">pageSize</td>
              <td className="border px-4 py-2">int</td>
              <td className="border px-4 py-2">
                Tamaño de página para la paginación. Por defecto, 10.
              </td>
            </tr>
          </tbody>
        </table>
      </Element>
      <Element name="get">
        <h2 className="text-xl mt-10 font-bold">Obtener Todos los Usuarios</h2>

        <ul className="mt-6 list-disc  ">
          <li className="mt-2">
            <span className="font-bold">Descripción:</span> Este endpoint
            devuelve una lista paginada de usuarios aleatorios.
          </li>
          <li className="mt-2">
            Endpoint:
            <SyntaxHighlighter
              language="typescript"
              className={"syntax-highlighter mt-6"}
              useInlineStyles={false}
              wrapLines={true}
            >
              [GET]
              https://www.fakesoteapi.somee.com/api/Users?results=8&seed=423&page=2&pageSize=2
            </SyntaxHighlighter>
          </li>
          <li className="mt-2">
            {" "}
            <span className="font-bold">Ejemplo de Respuesta:</span>
          </li>
        </ul>
        <div>
          <SyntaxHighlighter
            language="typescript"
            className={"syntax-highlighter mt-6"}
            useInlineStyles={false}
            wrapLines={true}
          >
            {userAll}
          </SyntaxHighlighter>
        </div>
      </Element>
    </div>
  );
};

export default User;

import MoonIcon from "./component/MoonIcon";
import CrossIcon from "./component/icon/CrossIcon";

const App = () => {
  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')]
     bg-no-repeat bg-contain
      bg-gray-400 min-h-screen"
    >
      <header className="container mx-auto px-4 pt-5">
        <div className="flex justify-between pb-3">
          <h1
            className=" text-white
             text-3xl font-semibold tracking-[0.3em]"
          >
            MI APP
          </h1>
          <button>
            <MoonIcon className="fill-white" />
          </button>
        </div>
        <form
          className="flex gap-4 overflow-hidden rounded-md
          bg-white  py-4 px-4 mt-5 items-center"
        >
          <span
            className="h-4 w-4 rounded-full
           border-2 inline-block  "
          ></span>
          <input
            className="w-full text-gray-400
             outline-none"
            type="text"
            placeholder="Cualquier wea"
          />
        </form>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <div className="rounded-md bg-white ">
          <article className="flex  gap-4 py-4 px-4 border-b-gray-400 border-b">
            <button
              className="h-4 w-4 rounded-full
           border-2 inline-block flex-none "
            ></button>
            <p className="grow text-gray-700">Curso de Javascript online</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex  gap-4 py-3 px-4 border-b-gray-400 border-b">
            <button
              className="h-4 w-4 rounded-full
           border-2 inline-block flex-none "
            ></button>
            <p className="grow text-gray-700">Curso de Javascript online</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex  gap-4 p-4 border-b-gray-400 border-b">
            <button
              className="h-4 w-4 rounded-full
           border-2 inline-block flex-none "
            ></button>
            <p className="grow text-gray-700">Curso de Javascript online</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex  gap-4 p-4 border-b-gray-400 border-b">
            <button
              className="h-4 w-4 rounded-full
           border-2 inline-block flex-none "
            ></button>
            <p className="grow text-gray-700">Curso de Javascript online</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex  gap-4 p-4 border-b-gray-400 border-b">
            <button
              className="h-4 w-4 rounded-full
           border-2 inline-block flex-none "
            ></button>
            <p className="grow text-gray-700">Curso de Javascript online</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="p-4 flex justify-between">
            <span className="text-gray-400"> items izquierda</span>
            <button className="text-gray-400">Eliminar completadas</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4  mt-8">
        <div className="p-4 rounded-md bg-white flex justify-center gap-4">
          <button className="text-blue-600">todos</button>
          <button className="hover:text-blue-600">activos</button>
          <button className="hover:text-blue-600">completados</button>
        </div>
      </section>

      <p className="text-center mt-5">Drag and drop</p>
    </div>
  );
};

export default App;

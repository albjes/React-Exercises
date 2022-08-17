import { Loader } from "./Loader";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  lastName: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El Campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El Campo 'Nombre' solo acepta letras y espacios en blanco";
  }
  if (!form.email.trim()) {
    errors.email = "El Campo 'email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El Campo 'Email' no tiene el formato correcto";
  }
  if (!form.subject.trim()) {
    errors.subject = "El Campo 'Asunto' es requerido";
  }
  if (!form.comments.trim()) {
    errors.comments = "El Campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El Campo 'Comentario' no debe exceder los 255 caracteres";
  }

  return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="mt-8 mb-8 border-b-gray-800 border-b-8">
      <h2 className="bg-gray-800 text-white text-xl p-4 text-center">
        FORMULARIO DE CONTACTO
      </h2>
      <div className="lg:flex lg:justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Nombre
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Escribe tu nombre"
                name="name"
                onChange={handleChange}
                value={form.name}
                required
                onBlur={handleBlur}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Apellidos
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Escribe tu apellido"
                name="lastName"
                onChange={handleChange}
                value={form.lastName}
                required
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="email"
                placeholder="Escribe tu email"
                name="email"
                onChange={handleChange}
                value={form.email}
                required
                onBlur={handleBlur}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic text-center">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Asunto
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="asunto"
                placeholder="Asunto a tratar"
                name="subject"
                onChange={handleChange}
                value={form.subject}
                required
                onBlur={handleBlur}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs italic text-center">
                  {errors.subject}
                </p>
              )}
            </div>
            <div className="w-full px-3">
              <label
                htmlFor="message"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                placeholder="Tu mensaje..."
                name="comments"
                cols="50"
                rows="5"
                onChange={handleChange}
                value={form.comments}
                required
                onBlur={handleBlur}
              ></textarea>
              {errors.comments && (
                <p className="text-red-500 text-xs italic text-center">
                  {errors.comments}
                </p>
              )}
            </div>
            <div className="w-full m-auto">
              {loading && <Loader />}
              {response && (
                <Message
                  msg="Los datos han sido enviado"
                  bgColor="text-green-500"
                />
              )}
            </div>
            <div className="m-auto p-4">
              <input
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                value="Enviar"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

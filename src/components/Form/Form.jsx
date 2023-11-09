// import { useContext } from "react";
import { useContext, useId } from "react";
import { useForm } from "react-hook-form";
import { NewPostsContext } from "../MainContainer";
// import { ArticlesContext } from "./MainContainer";

const Input = ({ label, newTodoId, register }) => (
  <>
    {/* <label htmlFor={newTodoId}>{label}</label> */}
    <input
      {...register(label)}
      id={newTodoId}
      type="text"
      className="block w-[200px] rounded-md border-0 mb-5 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder={label}
    />
  </>
);

const Form = () => {
  const newTodoId = useId();
  const { register, handleSubmit } = useForm();
  // const addNewPosts = useContext(NewPostsContext);

  const onSubmit = (data) => {
    console.log(data);
    // addNewPosts(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-14">
      <Input label="title" register={register} newTodoId={newTodoId} />
      <Input label="caption" register={register} newTodoId={newTodoId} />
      <Input label="topic" register={register} newTodoId={newTodoId} />
      <Input label="image" register={register} newTodoId={newTodoId} />
      <Input label="publisher" register={register} newTodoId={newTodoId} />
      <Input label="date" register={register} newTodoId={newTodoId} />

      {/* <label htmlFor={newTodoId}>Description</label>
      <textarea
        {...register("description")}
        id={newTodoId}
        type="textarea"
        className="block w-[200px] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="name"
      /> */}
      <button
        type="submit"
        className="p-2 mt-2 bg-slate-600 rounded-md text-white hover:bg-slate-500 cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

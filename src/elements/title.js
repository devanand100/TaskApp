export const Title = ({ title, subtitle }) => {
  return (
    <div className="">
      <h1 className="text-4xl">{title}</h1>
      <p className="text-slate-400 text-sm px-2">{subtitle}</p>
      <hr className="mb-4"/>
    </div>
  );
};

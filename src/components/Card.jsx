function Card({ name, description, imgURL, isVisited }) {
  const visitedLabel = isVisited ? '✔️ Visitata' : '✖️ Non Visitata';

  return (
    <div className="">
      <img src={imgURL} alt="" className="rounded-t-lg" />
      <div className="flex flex-col bg-zinc-900 rounded-b-lg py-4">
        <h2 className="text-2xl">{name}</h2>
        <p className="text-center px-5 py-5">{description}</p>
        <span>{visitedLabel}</span>
      </div>
    </div>
  );
}
export default Card;

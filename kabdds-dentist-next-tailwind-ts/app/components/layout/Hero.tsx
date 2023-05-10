type HeroProps = {
  title: string;
  subhead: string;
  imageUrl: string;
};

export default function Hero({ title, subhead, imageUrl }: HeroProps) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${imageUrl})`,
        minHeight: "75vh",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{subhead}</p>
          <button className="btn btn-primary">Make an Appointment</button>
        </div>
      </div>
    </div>
  );
}

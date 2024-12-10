import ListDescription from "../list-description";

const AboutCourse = () => {
  return (
    <div className="w-8/12 border border-white py-4 pr-10 text-black">
      <div>
        <div className="flex mb-6">
          <div>
            <img
              src="https://via.placeholder.com/50x50"
              alt="Institution Logo"
            />
          </div>
          <div>
            <h1>Institusi</h1>
            <h2>Cakap</h2>
          </div>
        </div>
        <div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, blanditiis vero? Autem quibusdam error eveniet modi
            voluptate ea, quos odit minima? Quis numquam eum modi earum illo
            suscipit vitae, odit delectus quia id, recusandae eius quod,
            laboriosam iusto perspiciatis culpa.
          </p>
        </div>
      </div>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <ListDescription key={index} />
        ))}
    </div>
  );
};

export default AboutCourse;

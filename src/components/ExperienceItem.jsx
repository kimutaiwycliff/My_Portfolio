const ExperienceItem = ({ jobDetails }) => {
  const { position } = jobDetails;

  return (
    <div className="flex justify-between h-48">
      {position === 'left' ? (
        <>
          <ExperienceSection jobDetails={jobDetails} />
          <ExperienceLine />
          <div className="w-1/3 "></div>
        </>
      ) : (
        <>
          <div className="w-1/3 "></div>
          <ExperienceLine />
          <ExperienceSection jobDetails={jobDetails} />
        </>
      )}
    </div>
  );
};

const ExperienceSection = ({ jobDetails }) => {
  const { title, description, date, company } = jobDetails;
  return (
    <div className="w-1/3 ">
      {/* JOB TITLE */}
      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
        {title}
      </div>
      {/* JOB DESC */}
      <div className="p-3 text-sm italic">{description} </div>
      {/* JOB DATE */}
      <div className="p-3 text-red-400 text-sm font-semibold">{date} </div>
      {/* JOB COMPANY */}
      <div className="p-1 bg-blue-100 text-sm font-semibold w-fit opacity-70">
        {company}
      </div>
    </div>
  );
};
const ExperienceLine = () => {
  return (
    <div className="w-1/6 flex justify-center">
      {/* LINE */}
      <div className="w-1 h-full bg-gray-600 rounded relative">
        {/* LINE CIRCLE */}
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
      </div>
    </div>
  );
};

export default ExperienceItem;

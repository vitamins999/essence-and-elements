const Card = ({ data, index }) => {
  return (
    <a className='cursor-pointer'>
      <div className='w-full bg-gray-200 my-10 flex rounded-md shadow-md'>
        {index % 2 !== 1 && (
          <img src={`${data.imagePath}`} alt='' className='h-72 rounded-l-md' />
        )}
        <div className='p-14 flex flex-col justify-around'>
          <h3 className='text-2xl tracking-wide uppercase'>{data.name}</h3>
          <p className='text-gray-700 text-sm'>{data.text}</p>
          <div className='underline hover:text-purple-700 transition ease-in-out duration-150'>
            Find out more
          </div>
        </div>
        {index % 2 === 1 && (
          <img src={`${data.imagePath}`} alt='' className='h-72 rounded-r-md' />
        )}
      </div>
    </a>
  );
};

export default Card;

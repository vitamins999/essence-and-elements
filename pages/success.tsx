import Link from 'next/link';
import Layout from '../components/Layout';

const SuccessPage = () => {
  const title = 'Form Submitted';
  const description = 'Essence & Elements Form Submission Success';
  const ogImage = '/img/tarot.webp';

  return (
    <Layout title={title} description={description} ogImage={ogImage}>
      <section
        data-testid='section-contact'
        className='relative xl:px-56 md:px-28 px-10 pt-32 pb-20 z-10 w-full iPadPro:pt-80'
      >
        <div className='mx-auto pt-6 pb-4 font-heading'>
          <h2 className='inline-block text-gray-500'>
            <Link href='/'>
              <a className='hover:text-purple-500 transition duration-200 ease-in-out'>
                Home
              </a>
            </Link>
          </h2>
          <span className='text-gray-500 px-2'> / </span>
          <h2 className='inline-block'>Form Submitted Successfully</h2>
        </div>
        <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl tracking-wide font-heading uppercase'>
          Form Submission
        </h2>
        <h3 className='mt-5 text-gray-900 lg:text-lg md:text-base sm:text-sm text-xs font-medium'>
          Thank you for your interest in Essence & Elements!
        </h3>
        <p className='mt-3 max-w-4xl text-gray-600 lg:text-base md:text-sm text-xs'>
          You form has been submitted successfully. We will get back to you as
          soon as possible!
        </p>
      </section>
    </Layout>
  );
};

export default SuccessPage;

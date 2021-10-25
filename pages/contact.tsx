import Link from 'next/link';

import Layout from '../components/Layout';

const ContactPage = () => {
  const title = 'Contact Us';
  const description =
    'Contact us now using our easy online form, or alternatively email us at: essence.elements1@gmail.com';
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
          <h2 className='inline-block'>Contact Us</h2>
        </div>
        <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl tracking-wide font-heading uppercase'>
          Contact Us
        </h2>
        <h3 className='mt-5 text-gray-900 lg:text-lg md:text-base sm:text-sm text-xs font-medium'>
          Thank you for your interest in Essence & Elements!
        </h3>
        <p className='mt-3 max-w-4xl text-gray-600 lg:text-base md:text-sm text-xs'>
          Want to learn more about the services and products we offer? Submit
          the form below and our sales representative will contact you soon.
        </p>

        <section className='text-gray-600 relative'>
          <div className='container px-5 pt-12 mx-auto'>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
              <form
                name='contact'
                method='POST'
                action='/success'
                data-netlify='true'
                className='flex flex-wrap -m-2'
              >
                <input type='hidden' name='form-name' value='contact' />
                <div className='p-2 w-full mt-8 border-t border-gray-300 text-center'></div>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      htmlFor='name'
                      className='leading-7 md:text-sm text-xs text-gray-900 font-medium'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      placeholder='eg. Jim Morrison'
                      required
                      className='w-full text-xs bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 md:text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-inner'
                    />
                  </div>
                </div>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      htmlFor='email'
                      className='leading-7 md:text-sm text-xs text-gray-900 font-medium'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='eg. jim.morrison@company.com'
                      required
                      className='w-full text-xs bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 md:text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-inner'
                    />
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      htmlFor='message'
                      className='leading-7 md:text-sm text-xs text-gray-900 font-medium'
                    >
                      Questions or comments
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      placeholder='Message'
                      required
                      className='w-full text-xs bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 md:text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-inner'
                    ></textarea>
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <button
                    type='submit'
                    className='flex justify-center w-full text-purple-50 bg-purple-500 border-0 py-3 px-8 focus:outline-none hover:bg-purple-600 transition duration-200 ease-in-out rounded-md md:text-md text-sm'
                  >
                    Submit message
                  </button>
                </div>
                <div className='p-2 w-full pt-8 mt-8 border-t border-gray-300 text-center'></div>
              </form>
            </div>
          </div>
          <p className='-mb-8 mt-5 text-xs lg:text-base'>
            Alternatively, please feel free to email us at:{' '}
            <a
              className='text-purple-700 underline'
              href='mailto:essence.elements1@gmail.com'
              rel='noreferrer noopener'
              target='_blank'
            >
              essence.elements1@gmail.com
            </a>
          </p>
        </section>
      </section>
    </Layout>
  );
};

export default ContactPage;

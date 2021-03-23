import Link from 'next/link';

import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout title='Contact Us'>
      <section className='relative px-28 pt-32 pb-20 z-10 min-h-screen w-full'>
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
        <h2 className='text-4xl tracking-wide font-heading uppercase'>
          Contact Us
        </h2>
        <h3 className='mt-5 text-gray-900 text-lg font-medium'>
          Thank you for your interest in Essence & Elements!
        </h3>
        <p className='mt-3 max-w-4xl text-gray-600'>
          Want to learn more about the services and products we offer? Submit
          the form below and our sales representative will contact you soon.
        </p>

        <section className='text-gray-600 relative'>
          <div className='container px-5 pt-12 mx-auto'>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
              <form className='flex flex-wrap -m-2'>
                <div className='p-2 w-full mt-8 border-t border-gray-300 text-center'></div>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      for='name'
                      className='leading-7 text-sm text-gray-900 font-medium'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      placeholder='eg. Jim Morrison'
                      required
                      className='w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-inner'
                    />
                  </div>
                </div>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      for='email'
                      className='leading-7 text-sm text-gray-900 font-medium'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='eg. jim.morrison@company.com'
                      required
                      className='w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-inner'
                    />
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      for='message'
                      className='leading-7 text-sm text-gray-900 font-medium'
                    >
                      Questions or comments
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      required
                      className='w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-inner'
                    ></textarea>
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <button
                    type='submit'
                    className='flex justify-center w-full text-purple-50 bg-purple-500 border-0 py-3 px-8 focus:outline-none hover:bg-purple-600 transition duration-200 ease-in-out rounded-md text-md'
                  >
                    Submit message
                  </button>
                </div>
                <div className='p-2 w-full pt-8 mt-8 border-t border-gray-300 text-center'></div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default ContactPage;

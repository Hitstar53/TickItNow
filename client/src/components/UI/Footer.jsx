import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="flex flex-col py-10 bg-slate-900 text-white">
        <h2 className="text-center text-4xl font-bold">TickItNow</h2>
        <div className="flex flex-row justify-center space-x-8 my-6">
          <a
            href="https://www.github.com/hitstar53"
            className="text-4xl opacity-50 hover:opacity-100"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.twitter.com/hitstar53"
            className="text-4xl opacity-50 hover:opacity-100"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hitstar53"
            className="text-4xl opacity-50 hover:opacity-100"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/hitstar53"
            className="text-4xl opacity-50 hover:opacity-100"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/hitstar53"
            className="text-4xl opacity-50 hover:opacity-100"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/hitstar53"
            className="text-4xl opacity-50 hover:opacity-100"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="text-center text-sm font-thin">
          Copyright &copy; 2023 TickItNow. All rights reserved.
          <br />
          Designed by <a href="https://www.github.com/hitstar53" className='font-medium'>Hitstar53</a>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default Footer
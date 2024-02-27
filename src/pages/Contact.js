import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function Contact() {
  useEffect(() => {
    document.title = "Contact | NotCoderGuy";
  }, []);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setmessage] = useState();
  const [isSend, setisSend] = useState(false);

  const webhookUrl = process.env.REACT_APP_DISCORD_WEBHOOK_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        embeds: [
          {
            title: 'Message',
            fields: [
              {
                name: 'Name',
                value: `${name}`,
              },
              {
                name: 'Email',
                value: `${email}`,
              },
              {
                name: 'Message',
                value: `${message}`,
              },
            ],
            color: 0x3B82F6,
            timestamp: new Date(),
          },
        ],
      })
    })
      .then(response => {
        if (!response.ok) {
          alert('Failed to send message to Discord. Contact @notcoderguy on Discord.');
          throw new Error('Failed to send message to Discord. Contact @notcoderguy on Discord.');
        }
        setisSend(true);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    (isSend) ? <Navigate to="/thank-you" replace /> : (
      <div>
        <div className="grid grid-cols-5 gap-2 mt-2">
          <div className="relative bg-base-200 rounded-3xl col-span-2 overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5263208282!2d76.76357549901142!3d28.64368462908725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1708860200607!5m2!1sen!2sin" className="rounded-3xl w-full h-full grayscale saturate-200 brightness-50 contrast-200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
            <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl pointer-events-none"></div>
          </div>
          <div className="bg-base-200 rounded-3xl col-span-3 transform transition duration-500 ease-in-out">
            <div className="flex flex-col items-center p-8 my-14">
              <div className="items-start justify-start pb-5">
                <p className="text-4xl font-semibold text-white">Contact Me</p>
              </div>
              <div className="space-y-2 text-md text-gray-400 mb-1 w-full max-w-lg items-center justify-center content-center">
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div className="form-control w-full max-w-lg">
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered w-full max-w-lg rounded-xl"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-control w-full max-w-lg">
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered w-full max-w-lg rounded-xl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-control w-full max-w-lg">
                    <textarea
                      type="text"
                      placeholder="message"
                      className="textarea textarea-bordered w-full max-w-lg rounded-xl"
                      value={message}
                      onChange={(e) => setmessage(e.target.value)}
                    />
                  </div>
                  <div className="form-control w-full max-w-lg">
                    <button type="submit" className="btn bg-blue-700 hover:bg-blue-500 rounded-xl">send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-1.5 mt-2">
          <a href="https://linkedin.com/in/notcoderguy" target="_blank" rel="noreferrer noopener" className="btn btn-ghost bg-base-200 rounded-full">
            <button className="text-white normal-case text-xl">linkedin.</button>
          </a>
          <a href="https://github.com/notcoderguy" target="_blank" rel="noreferrer noopener" className="btn btn-ghost bg-base-200 rounded-full">
            <button className=" text-white normal-case text-xl">github.</button>
          </a>
          <a href="https://twitter.com/notcoderguy/" target="_blank" rel="noreferrer noopener" className="btn btn-ghost bg-base-200 rounded-full">
            <button className=" text-white normal-case text-xl">twitter.</button>
          </a>
          <a href="https://instagram.com/notcoderguy/" target="_blank" rel="noreferrer noopener" className="btn btn-ghost bg-base-200 rounded-full">
            <button className=" text-white normal-case text-xl">instagram.</button>
          </a>
          <a href="https://wa.me/918501966796" target="_blank" rel="noreferrer noopener" className="btn btn-ghost bg-base-200 rounded-full">
            <button className=" text-white normal-case text-xl">whatsapp.</button>
          </a>
          <a href="https://t.me/notcoderguy" target="_blank" rel="noreferrer noopener" className="btn btn-ghost bg-base-200 rounded-full">
            <button className=" text-white normal-case text-xl">telegram.</button>
          </a>
        </div>
      </div>
    )
  )
}

export default Contact
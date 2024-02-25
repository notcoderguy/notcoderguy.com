import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function Contact() {
  useEffect(() => {
    document.title = "Contact | NotCoderGuy";
  }, []);

  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
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
        content: `New message from ${first_name} ${last_name} - ${email}`,
        embeds: [
          {
            title: 'Message',
            description: `${message}`,
            color: 0x738ADB,
          },
        ],
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send message to Discord');
        }
        setisSend(true);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    (isSend) ? <Navigate to="/thank-you" replace/> : (
    <div className="flex flex-col justify-center items-center flex-1 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-around">
        <div className="space-y-6">
          <div className="flex flex-col justify-around max-w-xl mx-auto">
            <div className="items-start justify-start pb-5">
              <p className="text-2xl font-semibold text-white">Contact Me</p>
            </div>
            <div className="mt-6">
              <form id="contact-form" className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-400">First name</label>
                  <div className="mt-1">
                    <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="py-3 px-4 block w-full focus:border-b-indigo-500 bg-black border-black border-b-gray-400 focus:outline-none" onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-400">Last name</label>
                  <div className="mt-1">
                    <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="py-3 px-4 block w-full focus:border-b-indigo-500 border-black bg-black border-b-gray-400" onChange={(e) => setLastName(e.target.value)} />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full focus:border-b-indigo-500 border-black bg-black border-b-gray-400" onChange={(e) => setEmail(e.target.value)} /> 
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows="4" className="py-3 px-4 block w-full focus:border-b-indigo-500 border-black bg-black border-b-gray-400" onChange={(e) => setmessage(e.target.value)}></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleSubmit}> Let's talk</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  )
}

export default Contact